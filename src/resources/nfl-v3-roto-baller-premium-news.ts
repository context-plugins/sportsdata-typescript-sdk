import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { Format, formatSchema } from "../models/format.js";
import { newsSchema, type News } from "../models/news.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class NflV3RotoBallerPremiumNews {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Premium News
   *
   * @remarks
   * RotoBaller's Premium News feed, with the latest updated stories in greater detail.
   *
   * @returns Success
   *
   * @throws {@link NflV3RotoBallerPremiumNews.NflV3NewsRotoballerPremiumNewsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3NewsRotoballerPremiumNews(
    request: NflV3RotoBallerPremiumNews.NflV3NewsRotoballerPremiumNewsRequest,
    options?: RequestOptions,
  ): ApiPromise<News[], NflV3RotoBallerPremiumNews.NflV3NewsRotoballerPremiumNewsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/news-rotoballer/{format}/RotoBallerPremiumNews"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => newsSchema)) },
        errorFactory: NflV3RotoBallerPremiumNews.NflV3NewsRotoballerPremiumNewsError,
      },
      options,
    );
  }

  /**
   * Premium News - by Date
   *
   * @remarks
   * RotoBaller's Premium News feed, with the latest updated stories in greater detail called by
   * date.
   *
   * @returns Success
   *
   * @throws {@link NflV3RotoBallerPremiumNews.NflV3NewsRotoballerPremiumNewsByDateError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3NewsRotoballerPremiumNewsByDate(
    request: NflV3RotoBallerPremiumNews.NflV3NewsRotoballerPremiumNewsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<News[], NflV3RotoBallerPremiumNews.NflV3NewsRotoballerPremiumNewsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nfl/news-rotoballer/{format}/RotoBallerPremiumNewsByDate/{date}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => newsSchema)) },
        errorFactory: NflV3RotoBallerPremiumNews.NflV3NewsRotoballerPremiumNewsByDateError,
      },
      options,
    );
  }

  /**
   * Premium News - by Team
   *
   * @remarks
   * RotoBaller's Premium News feed, with the latest updated stories in greater detail called by
   * team.
   *
   * @returns Success
   *
   * @throws {@link NflV3RotoBallerPremiumNews.NflV3NewsRotoballerPremiumNewsByTeamError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3NewsRotoballerPremiumNewsByTeam(
    request: NflV3RotoBallerPremiumNews.NflV3NewsRotoballerPremiumNewsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<News[], NflV3RotoBallerPremiumNews.NflV3NewsRotoballerPremiumNewsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nfl/news-rotoballer/{format}/RotoBallerPremiumNewsByTeam/{team}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "team", value: request.team, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => newsSchema)) },
        errorFactory: NflV3RotoBallerPremiumNews.NflV3NewsRotoballerPremiumNewsByTeamError,
      },
      options,
    );
  }
}

export namespace NflV3RotoBallerPremiumNews {
  export type NflV3NewsRotoballerPremiumNewsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NflV3NewsRotoballerPremiumNewsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3NewsRotoballerPremiumNewsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3NewsRotoballerPremiumNewsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the news. <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>. */
    date: string;
  };

  export class NflV3NewsRotoballerPremiumNewsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3NewsRotoballerPremiumNewsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3NewsRotoballerPremiumNewsByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Abbreviation of the team. Example: <code>WAS</code>. */
    team: string;
  };

  export class NflV3NewsRotoballerPremiumNewsByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3NewsRotoballerPremiumNewsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
