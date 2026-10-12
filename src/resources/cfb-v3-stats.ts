import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { boxScore3Schema, type BoxScore3 } from "../models/box-score3.js";
import { Format, formatSchema } from "../models/format.js";
import { playerGame4Schema, type PlayerGame4 } from "../models/player-game4.js";
import { playerSeason5Schema, type PlayerSeason5 } from "../models/player-season5.js";
import { teamGame4Schema, type TeamGame4 } from "../models/team-game4.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class CfbV3Stats {
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
   * @throws {@link CfbV3Stats.CfbV3StatsBoxScoreFinalError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3StatsBoxScoreFinal(
    request: CfbV3Stats.CfbV3StatsBoxScoreFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore3[], CfbV3Stats.CfbV3StatsBoxScoreFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/stats/{format}/BoxScoreFinal/{gameid}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore3Schema)) },
        errorFactory: CfbV3Stats.CfbV3StatsBoxScoreFinalError,
      },
      options,
    );
  }

  /**
   * Box Score [Live & Final]
   *
   * @remarks
   * Full statistical information for a specified game, down to the team and player stat level,
   * delivered live during the game, called per individual game. Note that defensive player stats
   * update 1-2 hours after the game has ended.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Stats.CfbV3StatsBoxScoreLiveFinalError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3StatsBoxScoreLiveFinal(
    request: CfbV3Stats.CfbV3StatsBoxScoreLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore3[], CfbV3Stats.CfbV3StatsBoxScoreLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/stats/{format}/BoxScore/{gameid}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore3Schema)) },
        errorFactory: CfbV3Stats.CfbV3StatsBoxScoreLiveFinalError,
      },
      options,
    );
  }

  /**
   * Box Scores - by Date [Final]
   *
   * @remarks
   * Full statistical information for a specified date, down to the team and player stat level,
   * delivered after the game is complete.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Stats.CfbV3StatsBoxScoresByDateFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3StatsBoxScoresByDateFinal(
    request: CfbV3Stats.CfbV3StatsBoxScoresByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore3[], CfbV3Stats.CfbV3StatsBoxScoresByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/stats/{format}/BoxScoresFinal/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore3Schema)) },
        errorFactory: CfbV3Stats.CfbV3StatsBoxScoresByDateFinalError,
      },
      options,
    );
  }

  /**
   * Box Scores - by Date [Live & Final]
   *
   * @remarks
   * Full statistical information for a specified game, down to the team and player stat level,
   * delivered live during the games, called for all games on a given date. Note that defensive
   * player stats update 1-2 hours after the game has ended.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Stats.CfbV3StatsBoxScoresByDateLiveFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3StatsBoxScoresByDateLiveFinal(
    request: CfbV3Stats.CfbV3StatsBoxScoresByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore3[], CfbV3Stats.CfbV3StatsBoxScoresByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/stats/{format}/BoxScoresByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore3Schema)) },
        errorFactory: CfbV3Stats.CfbV3StatsBoxScoresByDateLiveFinalError,
      },
      options,
    );
  }

  /**
   * Box Scores - by Week [Final]
   *
   * @remarks
   * Full statistical information for a specified game week for each game that took place, down to
   * the team and player stat level, delivered after the game is complete.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Stats.CfbV3StatsBoxScoresByWeekFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3StatsBoxScoresByWeekFinal(
    request: CfbV3Stats.CfbV3StatsBoxScoresByWeekFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore3[], CfbV3Stats.CfbV3StatsBoxScoresByWeekFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/stats/{format}/BoxScoresByWeekFinal/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore3Schema)) },
        errorFactory: CfbV3Stats.CfbV3StatsBoxScoresByWeekFinalError,
      },
      options,
    );
  }

  /**
   * Box Scores - by Week [Live & Final]
   *
   * @remarks
   * Full statistical information, down to the team and player stat level, delivered live during the
   * games, called for all games on a given week of a given season. Note that defensive player stats
   * update 1-2 hours after the game has ended.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Stats.CfbV3StatsBoxScoresByWeekLiveFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3StatsBoxScoresByWeekLiveFinal(
    request: CfbV3Stats.CfbV3StatsBoxScoresByWeekLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore3[], CfbV3Stats.CfbV3StatsBoxScoresByWeekLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/stats/{format}/BoxScoresByWeek/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore3Schema)) },
        errorFactory: CfbV3Stats.CfbV3StatsBoxScoresByWeekLiveFinalError,
      },
      options,
    );
  }

  /**
   * Box Scores Delta - by Week
   *
   * @remarks
   * This method returns all box scores for a given season and week, but only returns player stats
   * that have changed in the last X minutes as specified in your API call. By definition this is a
   * live endpoint, not final. Note that defensive player stats update 1-2 hours after the game has
   * ended.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Stats.CfbV3StatsBoxScoresDeltaByWeekError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3StatsBoxScoresDeltaByWeek(
    request: CfbV3Stats.CfbV3StatsBoxScoresDeltaByWeekRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore3[], CfbV3Stats.CfbV3StatsBoxScoresDeltaByWeekError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/cfb/stats/{format}/BoxScoresByWeekDelta/{season}/{week}/{minutes}",
        ),
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
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore3Schema)) },
        errorFactory: CfbV3Stats.CfbV3StatsBoxScoresDeltaByWeekError,
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
   * @throws {@link CfbV3Stats.CfbV3StatsPlayerGameLogsBySeasonError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3StatsPlayerGameLogsBySeason(
    request: CfbV3Stats.CfbV3StatsPlayerGameLogsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame4[], CfbV3Stats.CfbV3StatsPlayerGameLogsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/cfb/stats/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame4Schema)) },
        errorFactory: CfbV3Stats.CfbV3StatsPlayerGameLogsBySeasonError,
      },
      options,
    );
  }

  /**
   * Player Game Stats - by Week [Final]
   *
   * @remarks
   * Returns the box score statistical record for all involved players across all teams' games on a
   * given week after each game has concluded.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Stats.CfbV3StatsPlayerGameStatsByWeekFinalError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3StatsPlayerGameStatsByWeekFinal(
    request: CfbV3Stats.CfbV3StatsPlayerGameStatsByWeekFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame4[], CfbV3Stats.CfbV3StatsPlayerGameStatsByWeekFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/cfb/stats/{format}/PlayerGameStatsByWeekFinal/{season}/{week}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame4Schema)) },
        errorFactory: CfbV3Stats.CfbV3StatsPlayerGameStatsByWeekFinalError,
      },
      options,
    );
  }

  /**
   * Player Game Stats - by Week [Live & Final]
   *
   * @remarks
   * Returns the box score statistical record for all involved players across a given week, updated
   * live as the games take place. Note that defensive player stats update 1-2 hours after the game
   * has ended.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Stats.CfbV3StatsPlayerGameStatsByWeekLiveFinalError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3StatsPlayerGameStatsByWeekLiveFinal(
    request: CfbV3Stats.CfbV3StatsPlayerGameStatsByWeekLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame4[], CfbV3Stats.CfbV3StatsPlayerGameStatsByWeekLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/stats/{format}/PlayerGameStatsByWeek/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame4Schema)) },
        errorFactory: CfbV3Stats.CfbV3StatsPlayerGameStatsByWeekLiveFinalError,
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
   * @throws {@link CfbV3Stats.CfbV3StatsPlayerSeasonStatsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3StatsPlayerSeasonStats(
    request: CfbV3Stats.CfbV3StatsPlayerSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason5[], CfbV3Stats.CfbV3StatsPlayerSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/stats/{format}/PlayerSeasonStats/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason5Schema)) },
        errorFactory: CfbV3Stats.CfbV3StatsPlayerSeasonStatsError,
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
   * @throws {@link CfbV3Stats.CfbV3StatsPlayerSeasonStatsByTeamError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3StatsPlayerSeasonStatsByTeam(
    request: CfbV3Stats.CfbV3StatsPlayerSeasonStatsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason5[], CfbV3Stats.CfbV3StatsPlayerSeasonStatsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/stats/{format}/PlayerSeasonStatsByTeam/{season}/{team}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason5Schema)) },
        errorFactory: CfbV3Stats.CfbV3StatsPlayerSeasonStatsByTeamError,
      },
      options,
    );
  }

  /**
   * Team Game Stats - by Week [Final]
   *
   * @remarks
   * Returns the box score statistical record team-wide (aggregated from all players) for games in a
   * given week after the game has concluded.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Stats.CfbV3StatsTeamGameStatsByWeekFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3StatsTeamGameStatsByWeekFinal(
    request: CfbV3Stats.CfbV3StatsTeamGameStatsByWeekFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame4[], CfbV3Stats.CfbV3StatsTeamGameStatsByWeekFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/stats/{format}/TeamGameStatsByWeekFinal/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame4Schema)) },
        errorFactory: CfbV3Stats.CfbV3StatsTeamGameStatsByWeekFinalError,
      },
      options,
    );
  }
}

export namespace CfbV3Stats {
  export type CfbV3StatsBoxScoreFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an CFB game. GameIDs can be found in the Games API. Valid entries are
     * <code>1148</code> or <code>1149</code>
     */
    gameid: string;
  };

  export class CfbV3StatsBoxScoreFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3StatsBoxScoreFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3StatsBoxScoreLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an CFB game. GameIDs can be found in the Games API. Valid entries are
     * <code>1148</code> or <code>1149</code>
     */
    gameid: string;
  };

  export class CfbV3StatsBoxScoreLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3StatsBoxScoreLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3StatsBoxScoresByDateFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2016-JAN-01</code>, <code>2017-JAN-01</code>.
     */
    date: string;
  };

  export class CfbV3StatsBoxScoresByDateFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3StatsBoxScoresByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3StatsBoxScoresByDateLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2016-JAN-01</code>, <code>2017-JAN-01</code>.
     */
    date: string;
  };

  export class CfbV3StatsBoxScoresByDateLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3StatsBoxScoresByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3StatsBoxScoresByWeekFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season.<br> Examples: <code>2017</code>, <code>2018</code>, etc. */
    season: string;
    /** The week of the game(s).<br> Examples: <code>2</code>, <code>3</code>, etc. */
    week: string;
  };

  export class CfbV3StatsBoxScoresByWeekFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3StatsBoxScoresByWeekFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3StatsBoxScoresByWeekLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season.<br> Examples: <code>2017</code>, <code>2018</code>, etc. */
    season: string;
    /** The week of the game(s).<br> Examples: <code>2</code>, <code>3</code>, etc. */
    week: string;
  };

  export class CfbV3StatsBoxScoresByWeekLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3StatsBoxScoresByWeekLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3StatsBoxScoresDeltaByWeekRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2015</code>, <code>2016</code>, etc. */
    season: string;
    /**
     * The week of the game(s). <br>Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.
     */
    week: string;
    /**
     * Only returns player statistics that have changed in the last X minutes. You specify how many
     * minutes in time to go back. Valid entries are: <code>1</code> or <code>2</code>.
     */
    minutes: string;
  };

  export class CfbV3StatsBoxScoresDeltaByWeekError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3StatsBoxScoresDeltaByWeekError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3StatsPlayerGameLogsBySeasonRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Season to get games from. Example <code>2019POST</code>, <code>2020</code> */
    season: string;
    /** Unique SportsDataIO Player ID. Example:<code>50036283</code>. */
    playerid: string;
    /** How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code> */
    numberofgames: string;
  };

  export class CfbV3StatsPlayerGameLogsBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3StatsPlayerGameLogsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3StatsPlayerGameStatsByWeekFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2015</code>, <code>2016</code>. */
    season: string;
    /**
     * The week of the game(s). <br>Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.
     */
    week: string;
  };

  export class CfbV3StatsPlayerGameStatsByWeekFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3StatsPlayerGameStatsByWeekFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3StatsPlayerGameStatsByWeekLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2015</code>, <code>2016</code>. */
    season: string;
    /**
     * The week of the game(s). <br>Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.
     */
    week: string;
  };

  export class CfbV3StatsPlayerGameStatsByWeekLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3StatsPlayerGameStatsByWeekLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3StatsPlayerSeasonStatsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season (with optional season type).<br>Examples: <code>2017</code>,
     * <code>2017POST</code>, <code>2018</code>.
     */
    season: string;
  };

  export class CfbV3StatsPlayerSeasonStatsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3StatsPlayerSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3StatsPlayerSeasonStatsByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season (with optional season type).<br>Examples: <code>2017</code>,
     * <code>2017POST</code>, <code>2018</code>.
     */
    season: string;
    /** The abbreviation of the requested team. <br>Examples: <code>SF</code>, <code>NYY</code>. */
    team: string;
  };

  export class CfbV3StatsPlayerSeasonStatsByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3StatsPlayerSeasonStatsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3StatsTeamGameStatsByWeekFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2015</code>, <code>2016</code>, etc. */
    season: string;
    /**
     * The week of the game(s). <br>Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.
     */
    week: string;
  };

  export class CfbV3StatsTeamGameStatsByWeekFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3StatsTeamGameStatsByWeekFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
