/* SPDX-FileCopyrightText: 2016-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { NextFunction, Request, Response } from "express";
import { FirebaseError } from "firebase-admin/app";
import { DecodedIdToken, getAuth } from "firebase-admin/auth";
import { Unauthorized } from "http-errors";
import { LRUCache } from "lru-cache";
import { createHash } from "node:crypto";

const tokensCache = new LRUCache<string, CacheValue, CacheContext>({
  ttl: 1000 * 60,
  max: 10000,
  allowStale: true,
  async fetchMethod(key, staleValue, { context }) {
    return getAuth()
      .verifyIdToken(context.idToken, staleValue ? true : false)
      .then((token) => ({ token }))
      .catch((error) => ({ error }));
  },
});

/**
 * Authentication middleware that authenticates requests based on a bearer token
 * contained in the `Authorization` HTTP header sent by the client app. Once the
 * user is authenticated, the currently logged in User object can be accessed
 * via `req.user` context variable, otherwise `req.user` is being set to `null`.
 *
 * @example
 *    const { getAuth } from "firebase/auth";
 *
 *    const user = await getAuth().currentUser?.getIdToken();
 *    const res = await fetch("/api", {
 *      method: "POST",
 *      headers: {
 *        ["Authorization"]: idToken ? `Bearer ${idToken}` : undefined },
 *        ["Content-Type"]: "application/json",
 *      },
 *      body: JSON.stringify({ query: "..." }),
 *    });
 */
export async function session(req: Request, res: Response, next: NextFunction) {
  // Set the currently logged in user object to `null` by default
  req.token = null;

  // Extract the ID token from the `Authorization` HTTP header
  const idToken = req.headers.authorization?.match(/^[Bb]earer (\S+)/)?.[1];

  if (idToken) {
    // Verify the ID token and cache the result for a faster token revocation check
    const key = createHash("sha1").update(idToken).digest("base64");
    const context: CacheContext = { idToken };
    const status: LRUCache.Status<CacheValue> = {};
    const value = await tokensCache.fetch(key, { context, status });

    // If the token is missing in the cache, check if it has been revoked
    if (status.fetch === "miss") {
      tokensCache.fetch(key, { context, forceRefresh: true });
    }

    if (!value?.token) {
      const err = new Unauthorized();
      err.cause = value?.error;
      return next(err);
    }

    req.token = value.token;
  }

  next();
}

type CacheValue = { token?: DecodedIdToken; error?: FirebaseError };
type CacheContext = { idToken: string; checkRevoked?: boolean };
