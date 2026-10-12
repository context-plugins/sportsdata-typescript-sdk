import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { Format, formatSchema } from "../models/format.js";
import { news1Schema, type News1 } from "../models/news1.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class NhlV3RotoBallerPremiumNews {
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
   * @throws {@link NhlV3RotoBallerPremiumNews.NhlV3NewsRotoballerPremiumNewsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3NewsRotoballerPremiumNews(
    request: NhlV3RotoBallerPremiumNews.NhlV3NewsRotoballerPremiumNewsRequest,
    options?: RequestOptions,
  ): ApiPromise<News1[], NhlV3RotoBallerPremiumNews.NhlV3NewsRotoballerPremiumNewsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/news-rotoballer/{format}/RotoBallerPremiumNews"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => news1Schema)) },
        errorFactory: NhlV3RotoBallerPremiumNews.NhlV3NewsRotoballerPremiumNewsError,
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
   * @throws {@link NhlV3RotoBallerPremiumNews.NhlV3NewsRotoballerPremiumNewsByDateError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3NewsRotoballerPremiumNewsByDate(
    request: NhlV3RotoBallerPremiumNews.NhlV3NewsRotoballerPremiumNewsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<News1[], NhlV3RotoBallerPremiumNews.NhlV3NewsRotoballerPremiumNewsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nhl/news-rotoballer/{format}/RotoBallerPremiumNewsByDate/{date}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => news1Schema)) },
        errorFactory: NhlV3RotoBallerPremiumNews.NhlV3NewsRotoballerPremiumNewsByDateError,
      },
      options,
    );
  }
}

export namespace NhlV3RotoBallerPremiumNews {
  export type NhlV3NewsRotoballerPremiumNewsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NhlV3NewsRotoballerPremiumNewsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3NewsRotoballerPremiumNewsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3NewsRotoballerPremiumNewsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the news. <br>Examples: <code>2021-JAN-06</code>, <code>2021-JAN-31</code>. */
    date: string;
  };

  export class NhlV3NewsRotoballerPremiumNewsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3NewsRotoballerPremiumNewsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
