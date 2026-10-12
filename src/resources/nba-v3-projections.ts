import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { dfsSlateSchema, type DfsSlate } from "../models/dfs-slate.js";
import { Format, formatSchema } from "../models/format.js";
import {
  playerGameProjection1Schema,
  type PlayerGameProjection1,
} from "../models/player-game-projection1.js";
import {
  playerSeasonProjection1Schema,
  type PlayerSeasonProjection1,
} from "../models/player-season-projection1.js";
import { player1Schema, type Player1 } from "../models/player1.js";
import { startingLineupsSchema, type StartingLineups } from "../models/starting-lineups.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class NbaV3Projections {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * DFS Slates - by Date
   *
   * @remarks
   * Returns DFS Slates which have not yet started, with their player and salary information.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Projections.NbaV3ProjectionsDfsSlatesByDateError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ProjectionsDfsSlatesByDate(
    request: NbaV3Projections.NbaV3ProjectionsDfsSlatesByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<DfsSlate[], NbaV3Projections.NbaV3ProjectionsDfsSlatesByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/projections/{format}/DfsSlatesByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => dfsSlateSchema)) },
        errorFactory: NbaV3Projections.NbaV3ProjectionsDfsSlatesByDateError,
      },
      options,
    );
  }

  /**
   * Player Details - by Injured
   *
   * @remarks
   * This endpoint provides all currently injured NBA players, along with injury details.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Projections.NbaV3ProjectionsPlayerDetailsByInjuredError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ProjectionsPlayerDetailsByInjured(
    request: NbaV3Projections.NbaV3ProjectionsPlayerDetailsByInjuredRequest,
    options?: RequestOptions,
  ): ApiPromise<Player1[], NbaV3Projections.NbaV3ProjectionsPlayerDetailsByInjuredError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/projections/{format}/InjuredPlayers"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player1Schema)) },
        errorFactory: NbaV3Projections.NbaV3ProjectionsPlayerDetailsByInjuredError,
      },
      options,
    );
  }

  /**
   * Projected Player Game Stats - by Date
   *
   * @remarks
   * SportsDataIO's proprietary projections, including DFS salary information and injuries, for
   * fantasy players, called by date.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Projections.NbaV3ProjectionsProjectedPlayerGameStatsByDateError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ProjectionsProjectedPlayerGameStatsByDate(
    request: NbaV3Projections.NbaV3ProjectionsProjectedPlayerGameStatsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PlayerGameProjection1[],
    NbaV3Projections.NbaV3ProjectionsProjectedPlayerGameStatsByDateError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nba/projections/{format}/PlayerGameProjectionStatsByDate/{date}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameProjection1Schema)) },
        errorFactory: NbaV3Projections.NbaV3ProjectionsProjectedPlayerGameStatsByDateError,
      },
      options,
    );
  }

  /**
   * Projected Player Season Stats
   *
   * @remarks
   * SportsDataIO's proprietary projections for all active players for the season.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Projections.NbaV3ProjectionsProjectedPlayerSeasonStatsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ProjectionsProjectedPlayerSeasonStats(
    request: NbaV3Projections.NbaV3ProjectionsProjectedPlayerSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeasonProjection1[], NbaV3Projections.NbaV3ProjectionsProjectedPlayerSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nba/projections/{format}/PlayerSeasonProjectionStats/{season}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeasonProjection1Schema)) },
        errorFactory: NbaV3Projections.NbaV3ProjectionsProjectedPlayerSeasonStatsError,
      },
      options,
    );
  }

  /**
   * Projected Player Season Stats - by Team
   *
   * @remarks
   * SportsDataIO's proprietary projections for all active players for the season, called by team
   *
   * @returns Success
   *
   * @throws {@link NbaV3Projections.NbaV3ProjectionsProjectedPlayerSeasonStatsByTeamError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ProjectionsProjectedPlayerSeasonStatsByTeam(
    request: NbaV3Projections.NbaV3ProjectionsProjectedPlayerSeasonStatsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PlayerSeasonProjection1[],
    NbaV3Projections.NbaV3ProjectionsProjectedPlayerSeasonStatsByTeamError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nba/projections/{format}/PlayerSeasonProjectionStatsByTeam/{season}/{team}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "team", value: request.team, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeasonProjection1Schema)) },
        errorFactory: NbaV3Projections.NbaV3ProjectionsProjectedPlayerSeasonStatsByTeamError,
      },
      options,
    );
  }

  /**
   * Starting Lineups - by Date
   *
   * @remarks
   * This endpoint provides the projected & confirmed starting lineups for NBA games on a given
   * date.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Projections.NbaV3ProjectionsStartingLineupsByDateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ProjectionsStartingLineupsByDate(
    request: NbaV3Projections.NbaV3ProjectionsStartingLineupsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<StartingLineups[], NbaV3Projections.NbaV3ProjectionsStartingLineupsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/projections/{format}/StartingLineupsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => startingLineupsSchema)) },
        errorFactory: NbaV3Projections.NbaV3ProjectionsStartingLineupsByDateError,
      },
      options,
    );
  }
}

export namespace NbaV3Projections {
  export type NbaV3ProjectionsDfsSlatesByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2017-DEC-01</code>, <code>2018-FEB-15</code>.
     */
    date: string;
  };

  export class NbaV3ProjectionsDfsSlatesByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ProjectionsDfsSlatesByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ProjectionsPlayerDetailsByInjuredRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NbaV3ProjectionsPlayerDetailsByInjuredError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ProjectionsPlayerDetailsByInjuredError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ProjectionsProjectedPlayerGameStatsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.
     */
    date: string;
  };

  export class NbaV3ProjectionsProjectedPlayerGameStatsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ProjectionsProjectedPlayerGameStatsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ProjectionsProjectedPlayerSeasonStatsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season (with optional season type).<br>Examples: <code>2018</code>,
     * <code>2019</code>, etc.
     */
    season: string;
  };

  export class NbaV3ProjectionsProjectedPlayerSeasonStatsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ProjectionsProjectedPlayerSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ProjectionsProjectedPlayerSeasonStatsByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season (with optional season type).<br>Examples: <code>2018</code>,
     * <code>2019</code>, etc.
     */
    season: string;
    /** The abbreviation of the requested team. <br>Examples: <code>MIA</code>, <code>PHI</code>. */
    team: string;
  };

  export class NbaV3ProjectionsProjectedPlayerSeasonStatsByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ProjectionsProjectedPlayerSeasonStatsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ProjectionsStartingLineupsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br> Examples: <code>2021-OCT-12</code>, <code>2021-DEC-09</code>.
     */
    date: string;
  };

  export class NbaV3ProjectionsStartingLineupsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ProjectionsStartingLineupsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
