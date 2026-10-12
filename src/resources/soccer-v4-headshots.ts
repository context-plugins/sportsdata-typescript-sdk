import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { Format, formatSchema } from "../models/format.js";
import { headshotSchema, type Headshot } from "../models/headshot.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class SoccerV4Headshots {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Headshots
   *
   * @remarks
   * USA Today/IMAGN cropped action headshots for all active MLS players only, delivered shortly
   * after the season starts.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Headshots.SoccerV4HeadshotsHeadshotsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4HeadshotsHeadshots(
    request: SoccerV4Headshots.SoccerV4HeadshotsHeadshotsRequest,
    options?: RequestOptions,
  ): ApiPromise<Headshot[], SoccerV4Headshots.SoccerV4HeadshotsHeadshotsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/soccer/headshots/{format}/Headshots"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => headshotSchema)) },
        errorFactory: SoccerV4Headshots.SoccerV4HeadshotsHeadshotsError,
      },
      options,
    );
  }
}

export namespace SoccerV4Headshots {
  export type SoccerV4HeadshotsHeadshotsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class SoccerV4HeadshotsHeadshotsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4HeadshotsHeadshotsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
