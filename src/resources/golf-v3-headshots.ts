import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { Format, formatSchema } from "../models/format.js";
import { headshot1Schema, type Headshot1 } from "../models/headshot1.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class GolfV3Headshots {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  golfV3HeadshotsHeadshots(
    request: GolfV3Headshots.GolfV3HeadshotsHeadshotsRequest,
    options?: RequestOptions,
  ): ApiPromise<Headshot1[], GolfV3Headshots.GolfV3HeadshotsHeadshotsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/golf/headshots/{format}/Headshots"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => headshot1Schema)) },
        errorFactory: GolfV3Headshots.GolfV3HeadshotsHeadshotsError,
      },
      options,
    );
  }
}

export namespace GolfV3Headshots {
  export type GolfV3HeadshotsHeadshotsRequest = {
    format?: Format;
  };

  export class GolfV3HeadshotsHeadshotsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<GolfV3HeadshotsHeadshotsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
