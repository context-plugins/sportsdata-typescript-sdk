import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { boxScore1Schema, type BoxScore1 } from "../models/box-score1.js";
import { fantasyGame2Schema, type FantasyGame2 } from "../models/fantasy-game2.js";
import { Format, formatSchema } from "../models/format.js";
import { playerGame2Schema, type PlayerGame2 } from "../models/player-game2.js";
import { playerSeason3Schema, type PlayerSeason3 } from "../models/player-season3.js";
import { Split, splitSchema } from "../models/split.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class MlbV3Stats {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Batter vs. Pitcher Stats
   *
   * @remarks
   * Stat records for a given hitter and a given pitcher, called by PlayerId in both cases.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Stats.MlbV3StatsBatterVsPitcherStatsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3StatsBatterVsPitcherStats(
    request: MlbV3Stats.MlbV3StatsBatterVsPitcherStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason3[], MlbV3Stats.MlbV3StatsBatterVsPitcherStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/stats/{format}/HitterVsPitcher/{hitterid}/{pitcherid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "hitterid", value: request.hitterid, schema: s.string() },
          { name: "pitcherid", value: request.pitcherid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason3Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsBatterVsPitcherStatsError,
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
   * @throws {@link MlbV3Stats.MlbV3StatsBoxScoreFinalError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3StatsBoxScoreFinal(
    request: MlbV3Stats.MlbV3StatsBoxScoreFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore1, MlbV3Stats.MlbV3StatsBoxScoreFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/stats/{format}/BoxScoreFinal/{gameid}"),
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
        success: { kind: "json", schema: boxScore1Schema },
        errorFactory: MlbV3Stats.MlbV3StatsBoxScoreFinalError,
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
   * @throws {@link MlbV3Stats.MlbV3StatsBoxScoreLiveFinalError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3StatsBoxScoreLiveFinal(
    request: MlbV3Stats.MlbV3StatsBoxScoreLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore1, MlbV3Stats.MlbV3StatsBoxScoreLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/stats/{format}/BoxScore/{gameid}"),
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
        success: { kind: "json", schema: boxScore1Schema },
        errorFactory: MlbV3Stats.MlbV3StatsBoxScoreLiveFinalError,
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
   * @throws {@link MlbV3Stats.MlbV3StatsBoxScoresByDateFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3StatsBoxScoresByDateFinal(
    request: MlbV3Stats.MlbV3StatsBoxScoresByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore1[], MlbV3Stats.MlbV3StatsBoxScoresByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/stats/{format}/BoxScoresFinal/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore1Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsBoxScoresByDateFinalError,
      },
      options,
    );
  }

  /**
   * Box Scores - by Date [Live & Final]
   *
   * @remarks
   * Full statistical information for a specified game, down to the team and player stat level,
   * delivered live during the game, called for all games on a given date.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Stats.MlbV3StatsBoxScoresByDateLiveFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3StatsBoxScoresByDateLiveFinal(
    request: MlbV3Stats.MlbV3StatsBoxScoresByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore1[], MlbV3Stats.MlbV3StatsBoxScoresByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/stats/{format}/BoxScores/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore1Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsBoxScoresByDateLiveFinalError,
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
   * @throws {@link MlbV3Stats.MlbV3StatsBoxScoresDeltaByDateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3StatsBoxScoresDeltaByDate(
    request: MlbV3Stats.MlbV3StatsBoxScoresDeltaByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore1[], MlbV3Stats.MlbV3StatsBoxScoresDeltaByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/stats/{format}/BoxScoresDelta/{date}/{minutes}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore1Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsBoxScoresDeltaByDateError,
      },
      options,
    );
  }

  /**
   * Fantasy Points - by Date
   *
   * @remarks
   * Returns a simple list of fantasy points and stats for each player for a given date.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Stats.MlbV3StatsFantasyPointsByDateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3StatsFantasyPointsByDate(
    request: MlbV3Stats.MlbV3StatsFantasyPointsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<FantasyGame2[], MlbV3Stats.MlbV3StatsFantasyPointsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/stats/{format}/FantasyGameStatsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => fantasyGame2Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsFantasyPointsByDateError,
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
   * @throws {@link MlbV3Stats.MlbV3StatsPlayerGameLogsBySeasonError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3StatsPlayerGameLogsBySeason(
    request: MlbV3Stats.MlbV3StatsPlayerGameLogsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame2[], MlbV3Stats.MlbV3StatsPlayerGameLogsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/mlb/stats/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame2Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsPlayerGameLogsBySeasonError,
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
   * @throws {@link MlbV3Stats.MlbV3StatsPlayerGameStatsByDateFinalError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3StatsPlayerGameStatsByDateFinal(
    request: MlbV3Stats.MlbV3StatsPlayerGameStatsByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame2[], MlbV3Stats.MlbV3StatsPlayerGameStatsByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/stats/{format}/PlayerGameStatsByDateFinal/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame2Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsPlayerGameStatsByDateFinalError,
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
   * @throws {@link MlbV3Stats.MlbV3StatsPlayerGameStatsByDateLiveFinalError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3StatsPlayerGameStatsByDateLiveFinal(
    request: MlbV3Stats.MlbV3StatsPlayerGameStatsByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame2[], MlbV3Stats.MlbV3StatsPlayerGameStatsByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/stats/{format}/PlayerGameStatsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame2Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsPlayerGameStatsByDateLiveFinalError,
      },
      options,
    );
  }

  /**
   * Player Season Split Stats
   *
   * @remarks
   * All players' split stats for the season. Split stats are available for left, right, and
   * switch-handed pitchers and hitters.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Stats.MlbV3StatsPlayerSeasonSplitStatsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3StatsPlayerSeasonSplitStats(
    request: MlbV3Stats.MlbV3StatsPlayerSeasonSplitStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason3[], MlbV3Stats.MlbV3StatsPlayerSeasonSplitStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/stats/{format}/PlayerSeasonSplitStats/{season}/{split}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "split", value: request.split, schema: s.defaulted(splitSchema, Split.L) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason3Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsPlayerSeasonSplitStatsError,
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
   * @throws {@link MlbV3Stats.MlbV3StatsPlayerSeasonStatsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3StatsPlayerSeasonStats(
    request: MlbV3Stats.MlbV3StatsPlayerSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason3[], MlbV3Stats.MlbV3StatsPlayerSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/stats/{format}/PlayerSeasonStats/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason3Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsPlayerSeasonStatsError,
      },
      options,
    );
  }

  /**
   * Player Season Stats - by Away
   *
   * @remarks
   * All players' stats for the season taken only from their road games.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Stats.MlbV3StatsPlayerSeasonStatsByAwayError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3StatsPlayerSeasonStatsByAway(
    request: MlbV3Stats.MlbV3StatsPlayerSeasonStatsByAwayRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason3[], MlbV3Stats.MlbV3StatsPlayerSeasonStatsByAwayError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/stats/{format}/PlayerSeasonAwayStats/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason3Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsPlayerSeasonStatsByAwayError,
      },
      options,
    );
  }

  /**
   * Player Season Stats - by Home
   *
   * @remarks
   * All players' stats for the season taken only from their home games.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Stats.MlbV3StatsPlayerSeasonStatsByHomeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3StatsPlayerSeasonStatsByHome(
    request: MlbV3Stats.MlbV3StatsPlayerSeasonStatsByHomeRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason3[], MlbV3Stats.MlbV3StatsPlayerSeasonStatsByHomeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/stats/{format}/PlayerSeasonHomeStats/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason3Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsPlayerSeasonStatsByHomeError,
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
   * @throws {@link MlbV3Stats.MlbV3StatsPlayerSeasonStatsByTeamError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3StatsPlayerSeasonStatsByTeam(
    request: MlbV3Stats.MlbV3StatsPlayerSeasonStatsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason3[], MlbV3Stats.MlbV3StatsPlayerSeasonStatsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/stats/{format}/PlayerSeasonStatsByTeam/{season}/{team}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason3Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsPlayerSeasonStatsByTeamError,
      },
      options,
    );
  }

  /**
   * Player Season Stats Split - by Team
   *
   * @remarks
   * All a given team's players' split stats for the season. Split stats are available for left,
   * right, and switch-handed pitchers and hitters.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Stats.MlbV3StatsPlayerSeasonStatsSplitByTeamError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3StatsPlayerSeasonStatsSplitByTeam(
    request: MlbV3Stats.MlbV3StatsPlayerSeasonStatsSplitByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason3[], MlbV3Stats.MlbV3StatsPlayerSeasonStatsSplitByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/stats/{format}/PlayerSeasonStatsSplitByTeam/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason3Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsPlayerSeasonStatsSplitByTeamError,
      },
      options,
    );
  }

  /**
   * Team Hitting vs. Starting Pitcher
   *
   * @remarks
   * For a given game, returns a team's hitting record versus the projected or confirmed starting
   * pitcher for the game in question.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Stats.MlbV3StatsTeamHittingVsStartingPitcherError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3StatsTeamHittingVsStartingPitcher(
    request: MlbV3Stats.MlbV3StatsTeamHittingVsStartingPitcherRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason3[], MlbV3Stats.MlbV3StatsTeamHittingVsStartingPitcherError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/stats/{format}/TeamHittersVsPitcher/{gameid}/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "team", value: request.team, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason3Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsTeamHittingVsStartingPitcherError,
      },
      options,
    );
  }
}

export namespace MlbV3Stats {
  export type MlbV3StatsBatterVsPitcherStatsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Unique FantasyData Player ID. Example:<code>10000031</code>. */
    hitterid: string;
    /** Unique FantasyData Player ID. Example:<code>10000618</code>. */
    pitcherid: string;
  };

  export class MlbV3StatsBatterVsPitcherStatsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3StatsBatterVsPitcherStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsBoxScoreFinalRequest = {
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

  export class MlbV3StatsBoxScoreFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3StatsBoxScoreFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsBoxScoreLiveFinalRequest = {
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

  export class MlbV3StatsBoxScoreLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3StatsBoxScoreLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsBoxScoresByDateFinalRequest = {
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
  };

  export class MlbV3StatsBoxScoresByDateFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3StatsBoxScoresByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsBoxScoresByDateLiveFinalRequest = {
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
  };

  export class MlbV3StatsBoxScoresByDateLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3StatsBoxScoresByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsBoxScoresDeltaByDateRequest = {
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
     * Only returns player statistics that have changed in the last X minutes. You specify how many
     * minutes in time to go back. Valid entries are: <code>1</code>, <code>2</code> ...
     * <code>all</code>.
     */
    minutes: string;
  };

  export class MlbV3StatsBoxScoresDeltaByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3StatsBoxScoresDeltaByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsFantasyPointsByDateRequest = {
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
  };

  export class MlbV3StatsFantasyPointsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3StatsFantasyPointsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsPlayerGameLogsBySeasonRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Season to get games from. Example <code>2019POST</code>, <code>2020</code> */
    season: string;
    /** Unique SportsDataIO Player ID. Example:<code>10001365</code>. */
    playerid: string;
    /** How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code> */
    numberofgames: string;
  };

  export class MlbV3StatsPlayerGameLogsBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3StatsPlayerGameLogsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsPlayerGameStatsByDateFinalRequest = {
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
  };

  export class MlbV3StatsPlayerGameStatsByDateFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3StatsPlayerGameStatsByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsPlayerGameStatsByDateLiveFinalRequest = {
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
  };

  export class MlbV3StatsPlayerGameStatsByDateLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3StatsPlayerGameStatsByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsPlayerSeasonSplitStatsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2017</code>, <code>2018</code>. */
    season: string;
    /**
     * The desired split of stats. Currently, we support vs. Left/Right/Switch handed
     * pitchers/hitters. Possible values are: <code>L</code>, <code>R</code> and <code>S</code>
     *
     * @default Split.L
     */
    split?: Split;
  };

  export class MlbV3StatsPlayerSeasonSplitStatsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3StatsPlayerSeasonSplitStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsPlayerSeasonStatsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2017</code>, <code>2018</code>. */
    season: string;
  };

  export class MlbV3StatsPlayerSeasonStatsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3StatsPlayerSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsPlayerSeasonStatsByAwayRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2017</code>, <code>2018</code>. */
    season: string;
  };

  export class MlbV3StatsPlayerSeasonStatsByAwayError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3StatsPlayerSeasonStatsByAwayError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsPlayerSeasonStatsByHomeRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2017</code>, <code>2018</code>. */
    season: string;
  };

  export class MlbV3StatsPlayerSeasonStatsByHomeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3StatsPlayerSeasonStatsByHomeError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsPlayerSeasonStatsByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2017</code>, <code>2018</code>. */
    season: string;
    /** The abbreviation of the requested team. <br>Examples: <code>SF</code>, <code>NYY</code>. */
    team: string;
  };

  export class MlbV3StatsPlayerSeasonStatsByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3StatsPlayerSeasonStatsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsPlayerSeasonStatsSplitByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2017</code>, <code>2018</code>. */
    season: string;
  };

  export class MlbV3StatsPlayerSeasonStatsSplitByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3StatsPlayerSeasonStatsSplitByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsTeamHittingVsStartingPitcherRequest = {
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
    /** The abbreviation of the requested team. <br>Examples: <code>SF</code>, <code>NYY</code>. */
    team: string;
  };

  export class MlbV3StatsTeamHittingVsStartingPitcherError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3StatsTeamHittingVsStartingPitcherError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
