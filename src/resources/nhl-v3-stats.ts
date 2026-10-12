import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { boxScore2Schema, type BoxScore2 } from "../models/box-score2.js";
import { fantasyGame3Schema, type FantasyGame3 } from "../models/fantasy-game3.js";
import { Format, formatSchema } from "../models/format.js";
import { playerGame3Schema, type PlayerGame3 } from "../models/player-game3.js";
import { playerSeason4Schema, type PlayerSeason4 } from "../models/player-season4.js";
import { teamGame3Schema, type TeamGame3 } from "../models/team-game3.js";
import { teamLineSchema, type TeamLine } from "../models/team-line.js";
import { teamSeason3Schema, type TeamSeason3 } from "../models/team-season3.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class NhlV3Stats {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
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
   * @throws {@link NhlV3Stats.NhlV3StatsBoxScoreFinalError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3StatsBoxScoreFinal(
    request: NhlV3Stats.NhlV3StatsBoxScoreFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore2, NhlV3Stats.NhlV3StatsBoxScoreFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/stats/{format}/BoxScoreFinal/{gameid}"),
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
        success: { kind: "json", schema: boxScore2Schema },
        errorFactory: NhlV3Stats.NhlV3StatsBoxScoreFinalError,
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
   * @throws {@link NhlV3Stats.NhlV3StatsBoxScoreLiveFinalError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3StatsBoxScoreLiveFinal(
    request: NhlV3Stats.NhlV3StatsBoxScoreLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore2, NhlV3Stats.NhlV3StatsBoxScoreLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/stats/{format}/BoxScore/{gameid}"),
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
        success: { kind: "json", schema: boxScore2Schema },
        errorFactory: NhlV3Stats.NhlV3StatsBoxScoreLiveFinalError,
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
   * @throws {@link NhlV3Stats.NhlV3StatsBoxScoresByDateFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3StatsBoxScoresByDateFinal(
    request: NhlV3Stats.NhlV3StatsBoxScoresByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore2[], NhlV3Stats.NhlV3StatsBoxScoresByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/stats/{format}/BoxScoresFinal/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore2Schema)) },
        errorFactory: NhlV3Stats.NhlV3StatsBoxScoresByDateFinalError,
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
   * @throws {@link NhlV3Stats.NhlV3StatsBoxScoresByDateLiveFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3StatsBoxScoresByDateLiveFinal(
    request: NhlV3Stats.NhlV3StatsBoxScoresByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore2[], NhlV3Stats.NhlV3StatsBoxScoresByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/stats/{format}/BoxScores/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore2Schema)) },
        errorFactory: NhlV3Stats.NhlV3StatsBoxScoresByDateLiveFinalError,
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
   * @throws {@link NhlV3Stats.NhlV3StatsBoxScoresDeltaByDateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3StatsBoxScoresDeltaByDate(
    request: NhlV3Stats.NhlV3StatsBoxScoresDeltaByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore2[], NhlV3Stats.NhlV3StatsBoxScoresDeltaByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/stats/{format}/BoxScoresDelta/{date}/{minutes}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore2Schema)) },
        errorFactory: NhlV3Stats.NhlV3StatsBoxScoresDeltaByDateError,
      },
      options,
    );
  }

  /**
   * Fantasy Points - by Date
   *
   * @remarks
   * Simple fantasy points awarded to each player who took part in a game on a given date.
   *
   * @returns Success
   *
   * @throws {@link NhlV3Stats.NhlV3StatsFantasyPointsByDateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3StatsFantasyPointsByDate(
    request: NhlV3Stats.NhlV3StatsFantasyPointsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<FantasyGame3[], NhlV3Stats.NhlV3StatsFantasyPointsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/stats/{format}/FantasyGameStatsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => fantasyGame3Schema)) },
        errorFactory: NhlV3Stats.NhlV3StatsFantasyPointsByDateError,
      },
      options,
    );
  }

  /**
   * Line Combinations - by Season
   *
   * @remarks
   * The line combinations - groups of skaters that play together - ordered and given by season.
   *
   * @returns Success
   *
   * @throws {@link NhlV3Stats.NhlV3StatsLineCombinationsBySeasonError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3StatsLineCombinationsBySeason(
    request: NhlV3Stats.NhlV3StatsLineCombinationsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamLine[], NhlV3Stats.NhlV3StatsLineCombinationsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/stats/{format}/LinesBySeason/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamLineSchema)) },
        errorFactory: NhlV3Stats.NhlV3StatsLineCombinationsBySeasonError,
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
   * @throws {@link NhlV3Stats.NhlV3StatsPlayerGameLogsBySeasonError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3StatsPlayerGameLogsBySeason(
    request: NhlV3Stats.NhlV3StatsPlayerGameLogsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame3[], NhlV3Stats.NhlV3StatsPlayerGameLogsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nhl/stats/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame3Schema)) },
        errorFactory: NhlV3Stats.NhlV3StatsPlayerGameLogsBySeasonError,
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
   * @throws {@link NhlV3Stats.NhlV3StatsPlayerGameStatsByDateFinalError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3StatsPlayerGameStatsByDateFinal(
    request: NhlV3Stats.NhlV3StatsPlayerGameStatsByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame3[], NhlV3Stats.NhlV3StatsPlayerGameStatsByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/stats/{format}/PlayerGameStatsByDateFinal/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame3Schema)) },
        errorFactory: NhlV3Stats.NhlV3StatsPlayerGameStatsByDateFinalError,
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
   * @throws {@link NhlV3Stats.NhlV3StatsPlayerGameStatsByDateLiveFinalError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3StatsPlayerGameStatsByDateLiveFinal(
    request: NhlV3Stats.NhlV3StatsPlayerGameStatsByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame3[], NhlV3Stats.NhlV3StatsPlayerGameStatsByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/stats/{format}/PlayerGameStatsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame3Schema)) },
        errorFactory: NhlV3Stats.NhlV3StatsPlayerGameStatsByDateLiveFinalError,
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
   * @throws {@link NhlV3Stats.NhlV3StatsPlayerSeasonStatsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3StatsPlayerSeasonStats(
    request: NhlV3Stats.NhlV3StatsPlayerSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason4[], NhlV3Stats.NhlV3StatsPlayerSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/stats/{format}/PlayerSeasonStats/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason4Schema)) },
        errorFactory: NhlV3Stats.NhlV3StatsPlayerSeasonStatsError,
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
   * @throws {@link NhlV3Stats.NhlV3StatsPlayerSeasonStatsByTeamError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3StatsPlayerSeasonStatsByTeam(
    request: NhlV3Stats.NhlV3StatsPlayerSeasonStatsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason4[], NhlV3Stats.NhlV3StatsPlayerSeasonStatsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/stats/{format}/PlayerSeasonStatsByTeam/{season}/{team}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason4Schema)) },
        errorFactory: NhlV3Stats.NhlV3StatsPlayerSeasonStatsByTeamError,
      },
      options,
    );
  }

  /**
   * Team Game Stats - by Date [Final]
   *
   * @remarks
   * Returns the box score statistical record team-wide (aggregated from all players) for a given
   * team's game in a given week after the game has concluded.
   *
   * @returns Success
   *
   * @throws {@link NhlV3Stats.NhlV3StatsTeamGameStatsByDateFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3StatsTeamGameStatsByDateFinal(
    request: NhlV3Stats.NhlV3StatsTeamGameStatsByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame3[], NhlV3Stats.NhlV3StatsTeamGameStatsByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/stats/{format}/TeamGameStatsByDateFinal/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame3Schema)) },
        errorFactory: NhlV3Stats.NhlV3StatsTeamGameStatsByDateFinalError,
      },
      options,
    );
  }

  /**
   * Team Stats Allowed - by Position
   *
   * @remarks
   * Aggregated season stats allowed by each team against a given position (e.g. C, LW.)
   *
   * @returns Success
   *
   * @throws {@link NhlV3Stats.NhlV3StatsTeamStatsAllowedByPositionError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3StatsTeamStatsAllowedByPosition(
    request: NhlV3Stats.NhlV3StatsTeamStatsAllowedByPositionRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamSeason3[], NhlV3Stats.NhlV3StatsTeamStatsAllowedByPositionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/stats/{format}/TeamStatsAllowedByPosition/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamSeason3Schema)) },
        errorFactory: NhlV3Stats.NhlV3StatsTeamStatsAllowedByPositionError,
      },
      options,
    );
  }
}

export namespace NhlV3Stats {
  export type NhlV3StatsBoxScoreFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an NHL game. GameIDs can be found in the Games API. Valid entries are
     * <code>14620</code> or <code>16905</code>
     */
    gameid: string;
  };

  export class NhlV3StatsBoxScoreFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3StatsBoxScoreFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3StatsBoxScoreLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an NHL game. GameIDs can be found in the Games API. Valid entries are
     * <code>14620</code> or <code>16905</code>
     */
    gameid: string;
  };

  export class NhlV3StatsBoxScoreLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3StatsBoxScoreLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3StatsBoxScoresByDateFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2017-OCT-31</code>, <code>2018-FEB-15</code>.
     */
    date: string;
  };

  export class NhlV3StatsBoxScoresByDateFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3StatsBoxScoresByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3StatsBoxScoresByDateLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2017-OCT-31</code>, <code>2018-FEB-15</code>.
     */
    date: string;
  };

  export class NhlV3StatsBoxScoresByDateLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3StatsBoxScoresByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3StatsBoxScoresDeltaByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2017-OCT-31</code>, <code>2018-FEB-15</code>.
     */
    date: string;
    /**
     * Only returns player statistics that have changed in the last X minutes. You specify how many
     * minutes in time to go back. Valid entries are: <code>1</code> or <code>2</code>.
     */
    minutes: string;
  };

  export class NhlV3StatsBoxScoresDeltaByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3StatsBoxScoresDeltaByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3StatsFantasyPointsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2017-OCT-31</code>, <code>2018-FEB-15</code>.
     */
    date: string;
  };

  export class NhlV3StatsFantasyPointsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3StatsFantasyPointsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3StatsLineCombinationsBySeasonRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2016</code>, <code>2017</code>. */
    season: string;
  };

  export class NhlV3StatsLineCombinationsBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3StatsLineCombinationsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3StatsPlayerGameLogsBySeasonRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Season to get games from. Example <code>2019POST</code>, <code>2020</code> */
    season: string;
    /** Unique SportsDataIO Player ID. Example:<code>30000651</code>. */
    playerid: string;
    /** How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code> */
    numberofgames: string;
  };

  export class NhlV3StatsPlayerGameLogsBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3StatsPlayerGameLogsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3StatsPlayerGameStatsByDateFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2017-OCT-31</code>, <code>2018-FEB-15</code>.
     */
    date: string;
  };

  export class NhlV3StatsPlayerGameStatsByDateFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3StatsPlayerGameStatsByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3StatsPlayerGameStatsByDateLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2017-OCT-31</code>, <code>2018-FEB-15</code>.
     */
    date: string;
  };

  export class NhlV3StatsPlayerGameStatsByDateLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3StatsPlayerGameStatsByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3StatsPlayerSeasonStatsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2016</code>, <code>2017</code>. */
    season: string;
  };

  export class NhlV3StatsPlayerSeasonStatsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3StatsPlayerSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3StatsPlayerSeasonStatsByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2016</code>, <code>2017</code>. */
    season: string;
    /** The abbreviation of the requested team. <br>Examples: <code>SF</code>, <code>NYY</code>. */
    team: string;
  };

  export class NhlV3StatsPlayerSeasonStatsByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3StatsPlayerSeasonStatsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3StatsTeamGameStatsByDateFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.
     */
    date: string;
  };

  export class NhlV3StatsTeamGameStatsByDateFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3StatsTeamGameStatsByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3StatsTeamStatsAllowedByPositionRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2016</code>, <code>2017</code>. */
    season: string;
  };

  export class NhlV3StatsTeamStatsAllowedByPositionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3StatsTeamStatsAllowedByPositionError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
