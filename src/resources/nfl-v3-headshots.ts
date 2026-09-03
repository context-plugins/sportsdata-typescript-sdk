import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { Format, formatSchema } from "../models/format.js";
import { headshotSchema, type Headshot } from "../models/headshot.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class NflV3Headshots {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  nflV3HeadshotsHeadshots(
    request: NflV3Headshots.NflV3HeadshotsHeadshotsRequest,
    options?: RequestOptions,
  ): ApiPromise<Headshot[], NflV3Headshots.NflV3HeadshotsHeadshotsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/headshots/{format}/Headshots"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => headshotSchema)) },
        errorFactory: NflV3Headshots.NflV3HeadshotsHeadshotsError,
      },
      options,
    );
  }
}

export namespace NflV3Headshots {
  export type NflV3HeadshotsHeadshotsRequest = {
    format?: Format;
  };

  export class NflV3HeadshotsHeadshotsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3HeadshotsHeadshotsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
