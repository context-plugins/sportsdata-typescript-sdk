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

export class NbaV3RotoBallerPremiumNews {
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
   * @throws {@link NbaV3RotoBallerPremiumNews.NbaV3NewsRotoballerPremiumNewsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3NewsRotoballerPremiumNews(
    request: NbaV3RotoBallerPremiumNews.NbaV3NewsRotoballerPremiumNewsRequest,
    options?: RequestOptions,
  ): ApiPromise<News[], NbaV3RotoBallerPremiumNews.NbaV3NewsRotoballerPremiumNewsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/news-rotoballer/{format}/RotoBallerPremiumNews"),
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
        errorFactory: NbaV3RotoBallerPremiumNews.NbaV3NewsRotoballerPremiumNewsError,
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
   * @throws {@link NbaV3RotoBallerPremiumNews.NbaV3NewsRotoballerPremiumNewsByDateError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3NewsRotoballerPremiumNewsByDate(
    request: NbaV3RotoBallerPremiumNews.NbaV3NewsRotoballerPremiumNewsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<News[], NbaV3RotoBallerPremiumNews.NbaV3NewsRotoballerPremiumNewsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nba/news-rotoballer/{format}/RotoBallerPremiumNewsByDate/{date}",
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
        errorFactory: NbaV3RotoBallerPremiumNews.NbaV3NewsRotoballerPremiumNewsByDateError,
      },
      options,
    );
  }
}

export namespace NbaV3RotoBallerPremiumNews {
  export type NbaV3NewsRotoballerPremiumNewsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NbaV3NewsRotoballerPremiumNewsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3NewsRotoballerPremiumNewsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3NewsRotoballerPremiumNewsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the news. <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>. */
    date: string;
  };

  export class NbaV3NewsRotoballerPremiumNewsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3NewsRotoballerPremiumNewsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
