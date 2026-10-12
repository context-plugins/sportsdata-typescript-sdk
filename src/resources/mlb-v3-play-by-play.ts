import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { Format, formatSchema } from "../models/format.js";
import { playByPlay2Schema, type PlayByPlay2 } from "../models/play-by-play2.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class MlbV3PlayByPlay {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Play By Play [Final]
   *
   * @remarks
   * Each invididual play, its type and outcome, complete with player and team stats down to the
   * play level, delivered final (after the game ends), called by game.
   *
   * @returns Success
   *
   * @throws {@link MlbV3PlayByPlay.MlbV3PbpPlayByPlayFinalError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3PbpPlayByPlayFinal(
    request: MlbV3PlayByPlay.MlbV3PbpPlayByPlayFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayByPlay2, MlbV3PlayByPlay.MlbV3PbpPlayByPlayFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/pbp/{format}/PlayByPlayFinal/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: playByPlay2Schema },
        errorFactory: MlbV3PlayByPlay.MlbV3PbpPlayByPlayFinalError,
      },
      options,
    );
  }

  /**
   * Play By Play [Live & Final]
   *
   * @remarks
   * Each invididual play, its type and outcome, complete with player and team stats down to the
   * play level, delivered live in real-time, called by game.
   *
   * @returns Success
   *
   * @throws {@link MlbV3PlayByPlay.MlbV3PbpPlayByPlayLiveFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3PbpPlayByPlayLiveFinal(
    request: MlbV3PlayByPlay.MlbV3PbpPlayByPlayLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayByPlay2, MlbV3PlayByPlay.MlbV3PbpPlayByPlayLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/pbp/{format}/PlayByPlay/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: playByPlay2Schema },
        errorFactory: MlbV3PlayByPlay.MlbV3PbpPlayByPlayLiveFinalError,
      },
      options,
    );
  }

  /**
   * Play By Play Delta
   *
   * @remarks
   * This method returns all play-by-plays for a given season and week, but only returns plays that
   * have changed in the last X minutes as specified in your API call. By definition this is a live
   * endpoint, not final.
   *
   * @returns Success
   *
   * @throws {@link MlbV3PlayByPlay.MlbV3PbpPlayByPlayDeltaError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3PbpPlayByPlayDelta(
    request: MlbV3PlayByPlay.MlbV3PbpPlayByPlayDeltaRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayByPlay2[], MlbV3PlayByPlay.MlbV3PbpPlayByPlayDeltaError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/pbp/{format}/PlayByPlayDelta/{date}/{minutes}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
          { name: "minutes", value: request.minutes, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playByPlay2Schema)) },
        errorFactory: MlbV3PlayByPlay.MlbV3PbpPlayByPlayDeltaError,
      },
      options,
    );
  }
}

export namespace MlbV3PlayByPlay {
  export type MlbV3PbpPlayByPlayFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an MLB game. GameIDs can be found in the Games API. Valid entries are
     * <code>14620</code> or <code>16905</code>
     */
    gameid: string;
  };

  export class MlbV3PbpPlayByPlayFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3PbpPlayByPlayFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3PbpPlayByPlayLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an MLB game. GameIDs can be found in the Games API. Valid entries are
     * <code>14620</code> or <code>16905</code>
     */
    gameid: string;
  };

  export class MlbV3PbpPlayByPlayLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3PbpPlayByPlayLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3PbpPlayByPlayDeltaRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.
     */
    date: string;
    /**
     * Only returns plays that have changed in the last X minutes. You specify how many minutes in
     * time to go back. Valid entries are: <code>1</code>, <code>2</code> ... <code>all</code>.
     */
    minutes: string;
  };

  export class MlbV3PbpPlayByPlayDeltaError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3PbpPlayByPlayDeltaError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
