import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { Format, formatSchema } from "../models/format.js";
import { playByPlaySchema, type PlayByPlay } from "../models/play-by-play.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class NflV3PlayByPlay {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Play By Play - by Team [Final]
   *
   * @remarks
   * Each invididual play, its type and outcome, complete with player and team stats down to the
   * play level, delivered final (after the game ends), called by team.
   *
   * @returns Success
   *
   * @throws {@link NflV3PlayByPlay.NflV3PbpPlayByPlayByTeamFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3PbpPlayByPlayByTeamFinal(
    request: NflV3PlayByPlay.NflV3PbpPlayByPlayByTeamFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayByPlay, NflV3PlayByPlay.NflV3PbpPlayByPlayByTeamFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/pbp/{format}/PlayByPlayFinal/{season}/{week}/{hometeam}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
          { name: "hometeam", value: request.hometeam, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: playByPlaySchema },
        errorFactory: NflV3PlayByPlay.NflV3PbpPlayByPlayByTeamFinalError,
      },
      options,
    );
  }

  /**
   * Play By Play - by Team [Live & Final]
   *
   * @remarks
   * Each invididual play, its type and outcome, complete with player and team stats down to the
   * play level, delivered live in real-time, called by team.
   *
   * @returns Success
   *
   * @throws {@link NflV3PlayByPlay.NflV3PbpPlayByPlayByTeamLiveFinalError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3PbpPlayByPlayByTeamLiveFinal(
    request: NflV3PlayByPlay.NflV3PbpPlayByPlayByTeamLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayByPlay, NflV3PlayByPlay.NflV3PbpPlayByPlayByTeamLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/pbp/{format}/PlayByPlay/{season}/{week}/{hometeam}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
          { name: "hometeam", value: request.hometeam, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: playByPlaySchema },
        errorFactory: NflV3PlayByPlay.NflV3PbpPlayByPlayByTeamLiveFinalError,
      },
      options,
    );
  }

  /**
   * Play By Play [Final]
   *
   * @remarks
   * Each invididual play, its type and outcome, complete with player and team stats down to the
   * play level, delivered final (after the game ends), called by team.
   *
   * @returns Success
   *
   * @throws {@link NflV3PlayByPlay.NflV3PbpPlayByPlayFinalError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3PbpPlayByPlayFinal(
    request: NflV3PlayByPlay.NflV3PbpPlayByPlayFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayByPlay, NflV3PlayByPlay.NflV3PbpPlayByPlayFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/pbp/{format}/PlayByPlayFinal/{gameid}"),
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
        success: { kind: "json", schema: playByPlaySchema },
        errorFactory: NflV3PlayByPlay.NflV3PbpPlayByPlayFinalError,
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
   * @throws {@link NflV3PlayByPlay.NflV3PbpPlayByPlayLiveFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3PbpPlayByPlayLiveFinal(
    request: NflV3PlayByPlay.NflV3PbpPlayByPlayLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayByPlay, NflV3PlayByPlay.NflV3PbpPlayByPlayLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/pbp/{format}/PlayByPlay/{gameid}"),
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
        success: { kind: "json", schema: playByPlaySchema },
        errorFactory: NflV3PlayByPlay.NflV3PbpPlayByPlayLiveFinalError,
      },
      options,
    );
  }

  /**
   * Play By Play Delta
   *
   * @remarks
   * This method returns all play-by-plays for a given season and week, but only returnsplays that
   * have changed in the last X minutes as specified in your API call. by definition this is a live
   * endpoint, not final.
   *
   * @returns Success
   *
   * @throws {@link NflV3PlayByPlay.NflV3PbpPlayByPlayDeltaError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3PbpPlayByPlayDelta(
    request: NflV3PlayByPlay.NflV3PbpPlayByPlayDeltaRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayByPlay[], NflV3PlayByPlay.NflV3PbpPlayByPlayDeltaError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/pbp/{format}/PlayByPlayDelta/{season}/{week}/{minutes}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
          { name: "minutes", value: request.minutes, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playByPlaySchema)) },
        errorFactory: NflV3PlayByPlay.NflV3PbpPlayByPlayDeltaError,
      },
      options,
    );
  }

  /**
   * Play By Play Simulation
   *
   * @remarks
   * Gets simulated live play-by-play of NFL games, covering the Conference Championship games on
   * January 21, 2018.
   *
   * @returns Success
   *
   * @throws {@link NflV3PlayByPlay.NflV3PbpPlayByPlaySimulationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3PbpPlayByPlaySimulation(
    request: NflV3PlayByPlay.NflV3PbpPlayByPlaySimulationRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayByPlay[], NflV3PlayByPlay.NflV3PbpPlayByPlaySimulationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/pbp/{format}/SimulatedPlayByPlay/{numberofplays}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "numberofplays", value: request.numberofplays, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playByPlaySchema)) },
        errorFactory: NflV3PlayByPlay.NflV3PbpPlayByPlaySimulationError,
      },
      options,
    );
  }
}

export namespace NflV3PlayByPlay {
  export type NflV3PbpPlayByPlayByTeamFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season and the season type. If no season type is provided, then the default is
     * regular season. <br>Examples: <code>2015REG</code>, <code>2015PRE</code>,
     * <code>2015POST</code>.
     */
    season: string;
    /**
     * Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17,
     * Postseason 1 to 4. Example: <code>1</code>
     */
    week: string;
    /** Abbreviation of the home team. Example: <code>WAS</code>. */
    hometeam: string;
  };

  export class NflV3PbpPlayByPlayByTeamFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3PbpPlayByPlayByTeamFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3PbpPlayByPlayByTeamLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season and the season type. If no season type is provided, then the default is
     * regular season. <br>Examples: <code>2015REG</code>, <code>2015PRE</code>,
     * <code>2015POST</code>.
     */
    season: string;
    /**
     * Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17,
     * Postseason 1 to 4. Example: <code>1</code>
     */
    week: string;
    /** Abbreviation of the home team. Example: <code>WAS</code>. */
    hometeam: string;
  };

  export class NflV3PbpPlayByPlayByTeamLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3PbpPlayByPlayByTeamLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3PbpPlayByPlayFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of a NFL game. GameIDs can be found in the Games API. Valid entries are
     * <code>14620</code> or <code>16905</code>
     */
    gameid: string;
  };

  export class NflV3PbpPlayByPlayFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3PbpPlayByPlayFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3PbpPlayByPlayLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of a NFL game. GameIDs can be found in the Games API. Valid entries are
     * <code>14620</code> or <code>16905</code>
     */
    gameid: string;
  };

  export class NflV3PbpPlayByPlayLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3PbpPlayByPlayLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3PbpPlayByPlayDeltaRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season and the season type. If no season type is provided, then the default is
     * regular season. <br>Examples: <code>2015REG</code>, <code>2015PRE</code>,
     * <code>2015POST</code>.
     */
    season: string;
    /**
     * Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17,
     * Postseason 1 to 4. Example: <code>1</code>
     */
    week: string;
    /**
     * Only returns player statistics that have changed in the last X minutes. You specify how many
     * minutes in time to go back. Valid entries are:<br> <code>1</code> or <code>2</code>.
     */
    minutes: string;
  };

  export class NflV3PbpPlayByPlayDeltaError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3PbpPlayByPlayDeltaError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3PbpPlayByPlaySimulationRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The number of plays to progress in this NFL live game simulation. Example entries are
     * <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>150</code>,
     * <code>200</code>, etc.
     */
    numberofplays: string;
  };

  export class NflV3PbpPlayByPlaySimulationError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3PbpPlayByPlaySimulationError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
