/* SPDX-FileCopyrightText: 2016-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import {
  GraphQLBoolean,
  GraphQLFieldConfig,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { BadRequest, Forbidden, Unauthorized } from "http-errors";
import { Context } from "../core";
import { UserType } from "../types";
import { ValidationError, fromGlobalId, validate } from "../utils";

/**
 * @example
 *   mutation {
 *     updateUser(input: { id: "xxx", email: "new@email.com" }, dryRun: false) {
 *       user {
 *         id
 *         email
 *       }
 *     }
 *   }
 */
export const updateUser: GraphQLFieldConfig<unknown, Context> = {
  description: "Updates the user account.",

  type: new GraphQLObjectType({
    name: "UpdateUserPayload",
    fields: {
      user: { type: UserType },
    },
  }),

  args: {
    input: {
      type: new GraphQLInputObjectType({
        name: "UpdateUserInput",
        fields: {
          id: { type: new GraphQLNonNull(GraphQLID) },
          email: { type: GraphQLString },
          name: { type: GraphQLString },
          timeZone: { type: GraphQLString },
          locale: { type: GraphQLString },
        },
      }),
    },
    dryRun: { type: new GraphQLNonNull(GraphQLBoolean), defaultValue: false },
  },

  async resolve(self, args, ctx) {
    if (!ctx.token) {
      throw new Unauthorized();
    }

    const input = args.input as UpdateUserInput;
    const dryRun = args.dryRun as boolean;
    const id = fromGlobalId(input.id, "User");

    // Check permissions
    if (id !== ctx.token.uid) {
      throw new Forbidden();
    }

    // Validate and sanitize user input
    const [data, errors] = validate(input, (value) => ({
      email: value("email").isLength({ max: 100 }).isEmail(),
      name: value("name").isLength({ min: 2, max: 50 }),
      time_zone: value("timeZone").isLength({ max: 50 }),
      locale: value("locale").isLength({ max: 10 }),
    }));

    if (Object.keys(errors).length > 0) {
      throw new ValidationError(errors);
    }

    if (Object.keys(data).length === 0) {
      throw new BadRequest("The input cannot be empty.");
    }

    if (dryRun) {
      return { user: await ctx.userById.load(id) };
    }

    const user = await ctx.auth.updateUser(ctx.token.uid, {
      ...(data.email && { email: data.email }),
      ...(data.name && { displayName: data.name }),
    });

    return { user };
  },
};

type UpdateUserInput = {
  id: string;
  email?: string | null;
  name?: string | null;
  timeZone?: string | null;
  locale?: string | null;
};
