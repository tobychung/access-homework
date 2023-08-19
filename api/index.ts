/* SPDX-FileCopyrightText: 2016-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import "./core/source-map-support";

import SendGrid from "@sendgrid/mail";
import { default as express } from "express";
import { cert, getApps, initializeApp } from "firebase-admin/app";
import { NotFound } from "http-errors";
import { db, handleError } from "./core";
import { session } from "./core/session";
import env from "./env";
import { handleGraphQL, updateSchema } from "./graphql";
import { withViews } from "./views";

const api = withViews(express());

api.enable("trust proxy");
api.disable("x-powered-by");

api.use((req, res, next) => {
  if (!req.app.locals.initialized) {
    // Configure SendGrid API client
    SendGrid.setApiKey(env.SENDGRID_API_KEY);

    // Configure Firebase Admin SDK
    if (getApps().length === 0) {
      if (env.GOOGLE_CLOUD_CREDENTIALS) {
        const credentials = JSON.parse(env.GOOGLE_CLOUD_CREDENTIALS);
        initializeApp({
          projectId: env.GOOGLE_CLOUD_PROJECT,
          credential: cert({
            projectId: credentials.project_id,
            clientEmail: credentials.client_email,
            privateKey: credentials.private_key,
          }),
        });
      } else {
        initializeApp({
          projectId: env.GOOGLE_CLOUD_PROJECT,
        });
      }
    }

    req.app.locals.initialized = true;
  }

  next();
});

// Enable body parsing middleware
// http://expressjs.com/en/api.html#express.json
api.use(express.json({ limit: "1024mb" }));

// Authentication middleware
api.use(session);

// GraphQL API middleware
api.use("/api", handleGraphQL);

api.get("/", (req, res) => {
  res.redirect("/api");
});

api.get("/favicon.ico", function (req, res) {
  res.redirect("https://nodejs.org/static/images/favicons/favicon.ico");
});

api.get("*", function () {
  throw new NotFound();
});

api.use(handleError);

export { api, db, env, updateSchema };
