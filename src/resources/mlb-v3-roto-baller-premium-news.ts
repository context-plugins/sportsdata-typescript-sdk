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

export class MlbV3RotoBallerPremiumNews {
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
   * @throws {@link MlbV3RotoBallerPremiumNews.MlbV3NewsRotoballerPremiumNewsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3NewsRotoballerPremiumNews(
    request: MlbV3RotoBallerPremiumNews.MlbV3NewsRotoballerPremiumNewsRequest,
    options?: RequestOptions,
  ): ApiPromise<News[], MlbV3RotoBallerPremiumNews.MlbV3NewsRotoballerPremiumNewsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/news-rotoballer/{format}/RotoBallerPremiumNews"),
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
        errorFactory: MlbV3RotoBallerPremiumNews.MlbV3NewsRotoballerPremiumNewsError,
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
   * @throws {@link MlbV3RotoBallerPremiumNews.MlbV3NewsRotoballerPremiumNewsByDateError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3NewsRotoballerPremiumNewsByDate(
    request: MlbV3RotoBallerPremiumNews.MlbV3NewsRotoballerPremiumNewsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<News[], MlbV3RotoBallerPremiumNews.MlbV3NewsRotoballerPremiumNewsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/mlb/news-rotoballer/{format}/RotoBallerPremiumNewsByDate/{date}",
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
        errorFactory: MlbV3RotoBallerPremiumNews.MlbV3NewsRotoballerPremiumNewsByDateError,
      },
      options,
    );
  }
}

export namespace MlbV3RotoBallerPremiumNews {
  export type MlbV3NewsRotoballerPremiumNewsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class MlbV3NewsRotoballerPremiumNewsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3NewsRotoballerPremiumNewsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3NewsRotoballerPremiumNewsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the news. <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>. */
    date: string;
  };

  export class MlbV3NewsRotoballerPremiumNewsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3NewsRotoballerPremiumNewsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
