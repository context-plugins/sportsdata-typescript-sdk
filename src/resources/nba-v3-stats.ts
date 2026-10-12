import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { boxScoreSchema, type BoxScore } from "../models/box-score.js";
import { fantasyGame1Schema, type FantasyGame1 } from "../models/fantasy-game1.js";
import { Format, formatSchema } from "../models/format.js";
import { playerGame1Schema, type PlayerGame1 } from "../models/player-game1.js";
import { playerInfoSchema, type PlayerInfo } from "../models/player-info.js";
import { playerSeason1Schema, type PlayerSeason1 } from "../models/player-season1.js";
import { teamGame1Schema, type TeamGame1 } from "../models/team-game1.js";
import { teamSeason1Schema, type TeamSeason1 } from "../models/team-season1.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class NbaV3Stats {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * All-Stars
   *
   * @remarks
   * A list of players selected for the All-Star Game for a given season.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Stats.NbaV3StatsAllStarsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3StatsAllStars(
    request: NbaV3Stats.NbaV3StatsAllStarsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerInfo[], NbaV3Stats.NbaV3StatsAllStarsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/stats/{format}/AllStars/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerInfoSchema)) },
        errorFactory: NbaV3Stats.NbaV3StatsAllStarsError,
      },
      options,
    );
  }

  /**
   * Box Score [Final]
   *
   * @remarks
   * Full statistical information for a specified game, down to the team and player stat level,
   * delivered after the game is complete.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Stats.NbaV3StatsBoxScoreFinalError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3StatsBoxScoreFinal(
    request: NbaV3Stats.NbaV3StatsBoxScoreFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore, NbaV3Stats.NbaV3StatsBoxScoreFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/stats/{format}/BoxScoreFinal/{gameid}"),
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
        success: { kind: "json", schema: boxScoreSchema },
        errorFactory: NbaV3Stats.NbaV3StatsBoxScoreFinalError,
      },
      options,
    );
  }

  /**
   * Box Score [Live & Final]
   *
   * @remarks
   * Full statistical information for a specified game, down to the team and player stat level,
   * delivered live during the game, called per individual game.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Stats.NbaV3StatsBoxScoreLiveFinalError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3StatsBoxScoreLiveFinal(
    request: NbaV3Stats.NbaV3StatsBoxScoreLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore, NbaV3Stats.NbaV3StatsBoxScoreLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/stats/{format}/BoxScore/{gameid}"),
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
        success: { kind: "json", schema: boxScoreSchema },
        errorFactory: NbaV3Stats.NbaV3StatsBoxScoreLiveFinalError,
      },
      options,
    );
  }

  /**
   * Box Scores - by Date [Final]
   *
   * @remarks
   * Full statistical information for a specified date for each game that took place, down to the
   * team and player stat level, delivered after the game is complete.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Stats.NbaV3StatsBoxScoresByDateFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3StatsBoxScoresByDateFinal(
    request: NbaV3Stats.NbaV3StatsBoxScoresByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore[], NbaV3Stats.NbaV3StatsBoxScoresByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/stats/{format}/BoxScoresFinal/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => boxScoreSchema)) },
        errorFactory: NbaV3Stats.NbaV3StatsBoxScoresByDateFinalError,
      },
      options,
    );
  }

  /**
   * Box Scores - by Date [Live & Final]
   *
   * @remarks
   * Full statistical information for a specified game, down to the team and player stat level,
   * delivered live during the games, called for all games on a given date.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Stats.NbaV3StatsBoxScoresByDateLiveFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3StatsBoxScoresByDateLiveFinal(
    request: NbaV3Stats.NbaV3StatsBoxScoresByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore[], NbaV3Stats.NbaV3StatsBoxScoresByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/stats/{format}/BoxScores/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => boxScoreSchema)) },
        errorFactory: NbaV3Stats.NbaV3StatsBoxScoresByDateLiveFinalError,
      },
      options,
    );
  }

  /**
   * Box Scores Delta - by Date
   *
   * @remarks
   * This method returns all box scores for a given date, but only returns player stats that have
   * changed in the last X minutes as specified in your API call. By definition this is a live
   * endpoint, not final.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Stats.NbaV3StatsBoxScoresDeltaByDateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3StatsBoxScoresDeltaByDate(
    request: NbaV3Stats.NbaV3StatsBoxScoresDeltaByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore[], NbaV3Stats.NbaV3StatsBoxScoresDeltaByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/stats/{format}/BoxScoresDelta/{date}/{minutes}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => boxScoreSchema)) },
        errorFactory: NbaV3Stats.NbaV3StatsBoxScoresDeltaByDateError,
      },
      options,
    );
  }

  /**
   * Fantasy Points - by Date
   *
   * @remarks
   * A simple list of fantasy points scored for all players who took part in games on a given date.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Stats.NbaV3StatsFantasyPointsByDateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3StatsFantasyPointsByDate(
    request: NbaV3Stats.NbaV3StatsFantasyPointsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<FantasyGame1[], NbaV3Stats.NbaV3StatsFantasyPointsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/stats/{format}/FantasyGameStatsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => fantasyGame1Schema)) },
        errorFactory: NbaV3Stats.NbaV3StatsFantasyPointsByDateError,
      },
      options,
    );
  }

  /**
   * Player Game Logs - by Season
   *
   * @remarks
   * Specify a season, a player, and number of games (either an integer or <code>all</code>) to see
   * all of their box score logs. Refreshed after their most recent game is complete.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Stats.NbaV3StatsPlayerGameLogsBySeasonError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3StatsPlayerGameLogsBySeason(
    request: NbaV3Stats.NbaV3StatsPlayerGameLogsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame1[], NbaV3Stats.NbaV3StatsPlayerGameLogsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nba/stats/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "playerid", value: request.playerid, schema: s.string() },
          { name: "numberofgames", value: request.numberofgames, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame1Schema)) },
        errorFactory: NbaV3Stats.NbaV3StatsPlayerGameLogsBySeasonError,
      },
      options,
    );
  }

  /**
   * Player Game Stats - by Date [Final]
   *
   * @remarks
   * Returns the box score statistical record for all involved players across all teams' games on a
   * given date after each game has concluded.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Stats.NbaV3StatsPlayerGameStatsByDateFinalError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3StatsPlayerGameStatsByDateFinal(
    request: NbaV3Stats.NbaV3StatsPlayerGameStatsByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame1[], NbaV3Stats.NbaV3StatsPlayerGameStatsByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/stats/{format}/PlayerGameStatsByDateFinal/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame1Schema)) },
        errorFactory: NbaV3Stats.NbaV3StatsPlayerGameStatsByDateFinalError,
      },
      options,
    );
  }

  /**
   * Player Game Stats - by Date [Live & Final]
   *
   * @remarks
   * Returns the box score statistical record for all involved players across a given date, updated
   * live as the game takes place.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Stats.NbaV3StatsPlayerGameStatsByDateLiveFinalError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3StatsPlayerGameStatsByDateLiveFinal(
    request: NbaV3Stats.NbaV3StatsPlayerGameStatsByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame1[], NbaV3Stats.NbaV3StatsPlayerGameStatsByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/stats/{format}/PlayerGameStatsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame1Schema)) },
        errorFactory: NbaV3Stats.NbaV3StatsPlayerGameStatsByDateLiveFinalError,
      },
      options,
    );
  }

  /**
   * Player Season Stats
   *
   * @remarks
   * Returns all season-long stats (i.e. the season total, not each individual game record) for all
   * players for a given season.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Stats.NbaV3StatsPlayerSeasonStatsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3StatsPlayerSeasonStats(
    request: NbaV3Stats.NbaV3StatsPlayerSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason1[], NbaV3Stats.NbaV3StatsPlayerSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/stats/{format}/PlayerSeasonStats/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason1Schema)) },
        errorFactory: NbaV3Stats.NbaV3StatsPlayerSeasonStatsError,
      },
      options,
    );
  }

  /**
   * Player Season Stats - by Team
   *
   * @remarks
   * Returns all season-long stats (i.e. the season total, not each individual game record) for a
   * given team's players in a given season.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Stats.NbaV3StatsPlayerSeasonStatsByTeamError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3StatsPlayerSeasonStatsByTeam(
    request: NbaV3Stats.NbaV3StatsPlayerSeasonStatsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason1[], NbaV3Stats.NbaV3StatsPlayerSeasonStatsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/stats/{format}/PlayerSeasonStatsByTeam/{season}/{team}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason1Schema)) },
        errorFactory: NbaV3Stats.NbaV3StatsPlayerSeasonStatsByTeamError,
      },
      options,
    );
  }

  /**
   * Team Game Stats - by Date [Final]
   *
   * @remarks
   * Returns the box score statistical record team-wide (aggregated from all players) for a games on
   * a given date, delivered as each game concludes.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Stats.NbaV3StatsTeamGameStatsByDateFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3StatsTeamGameStatsByDateFinal(
    request: NbaV3Stats.NbaV3StatsTeamGameStatsByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame1[], NbaV3Stats.NbaV3StatsTeamGameStatsByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/stats/{format}/TeamGameStatsByDateFinal/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame1Schema)) },
        errorFactory: NbaV3Stats.NbaV3StatsTeamGameStatsByDateFinalError,
      },
      options,
    );
  }

  /**
   * Team Stats Allowed - by Position
   *
   * @remarks
   * For each team, deliveres a season total of statistical records for their opponents' positions
   * (e.g. all field goals made against this team by Centers.)
   *
   * @returns Success
   *
   * @throws {@link NbaV3Stats.NbaV3StatsTeamStatsAllowedByPositionError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3StatsTeamStatsAllowedByPosition(
    request: NbaV3Stats.NbaV3StatsTeamStatsAllowedByPositionRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamSeason1[], NbaV3Stats.NbaV3StatsTeamStatsAllowedByPositionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/stats/{format}/TeamStatsAllowedByPosition/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamSeason1Schema)) },
        errorFactory: NbaV3Stats.NbaV3StatsTeamStatsAllowedByPositionError,
      },
      options,
    );
  }
}

export namespace NbaV3Stats {
  export type NbaV3StatsAllStarsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2015</code>, <code>2016</code>. */
    season: string;
  };

  export class NbaV3StatsAllStarsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3StatsAllStarsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3StatsBoxScoreFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an NBA game. GameIDs can be found in the Games API. Valid entries are
     * <code>14620</code>, <code>16905</code>, etc.
     */
    gameid: string;
  };

  export class NbaV3StatsBoxScoreFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3StatsBoxScoreFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3StatsBoxScoreLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an NBA game. GameIDs can be found in the Games API. Valid entries are
     * <code>14620</code>, <code>16905</code>, etc.
     */
    gameid: string;
  };

  export class NbaV3StatsBoxScoreLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3StatsBoxScoreLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3StatsBoxScoresByDateFinalRequest = {
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

  export class NbaV3StatsBoxScoresByDateFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3StatsBoxScoresByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3StatsBoxScoresByDateLiveFinalRequest = {
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

  export class NbaV3StatsBoxScoresByDateLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3StatsBoxScoresByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3StatsBoxScoresDeltaByDateRequest = {
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
    /**
     * Only returns player statistics that have changed in the last X minutes. You specify how many
     * minutes in time to go back. Valid entries are: <code>1</code> or <code>2</code>.
     */
    minutes: string;
  };

  export class NbaV3StatsBoxScoresDeltaByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3StatsBoxScoresDeltaByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3StatsFantasyPointsByDateRequest = {
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

  export class NbaV3StatsFantasyPointsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3StatsFantasyPointsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3StatsPlayerGameLogsBySeasonRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Season to get games from. Example <code>2019POST</code>, <code>2020</code> */
    season: string;
    /** Unique SportsDataIO Player ID. Example:<code>20000571</code>. */
    playerid: string;
    /** How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code> */
    numberofgames: string;
  };

  export class NbaV3StatsPlayerGameLogsBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3StatsPlayerGameLogsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3StatsPlayerGameStatsByDateFinalRequest = {
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

  export class NbaV3StatsPlayerGameStatsByDateFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3StatsPlayerGameStatsByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3StatsPlayerGameStatsByDateLiveFinalRequest = {
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

  export class NbaV3StatsPlayerGameStatsByDateLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3StatsPlayerGameStatsByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3StatsPlayerSeasonStatsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2015</code>, <code>2016</code>. */
    season: string;
  };

  export class NbaV3StatsPlayerSeasonStatsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3StatsPlayerSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3StatsPlayerSeasonStatsByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2015</code>, <code>2016</code>. */
    season: string;
    /** The abbreviation of the requested team. <br>Examples: <code>MIA</code>, <code>PHI</code>. */
    team: string;
  };

  export class NbaV3StatsPlayerSeasonStatsByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3StatsPlayerSeasonStatsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3StatsTeamGameStatsByDateFinalRequest = {
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

  export class NbaV3StatsTeamGameStatsByDateFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3StatsTeamGameStatsByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3StatsTeamStatsAllowedByPositionRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2015</code>, <code>2016</code>. */
    season: string;
  };

  export class NbaV3StatsTeamStatsAllowedByPositionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3StatsTeamStatsAllowedByPositionError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
