import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { boxScoreV3Schema, type BoxScoreV3 } from "../models/box-score-v3.js";
import { fantasyDefenseGameSchema, type FantasyDefenseGame } from "../models/fantasy-defense-game.js";
import { fantasyDefenseSeasonSchema, type FantasyDefenseSeason } from "../models/fantasy-defense-season.js";
import { fantasyGameSchema, type FantasyGame } from "../models/fantasy-game.js";
import { Format, formatSchema } from "../models/format.js";
import { injurySchema, type Injury } from "../models/injury.js";
import { playerGameRedZoneSchema, type PlayerGameRedZone } from "../models/player-game-red-zone.js";
import { playerGameSchema, type PlayerGame } from "../models/player-game.js";
import { playerInfoSchema, type PlayerInfo } from "../models/player-info.js";
import { playerOwnershipSchema, type PlayerOwnership } from "../models/player-ownership.js";
import { playerSeasonRedZoneSchema, type PlayerSeasonRedZone } from "../models/player-season-red-zone.js";
import {
  playerSeasonThirdDownSchema,
  type PlayerSeasonThirdDown,
} from "../models/player-season-third-down.js";
import { playerSeasonSchema, type PlayerSeason } from "../models/player-season.js";
import { Playerstoinclude, playerstoincludeSchema } from "../models/playerstoinclude.js";
import { scoreSchema, type Score } from "../models/score.js";
import { teamGameSchema, type TeamGame } from "../models/team-game.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class NflV3Stats {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Box Score - by Team [Final]
   *
   * @remarks
   * Full statistical information for a given team's game in a specified season and week, down to
   * the team and player stat level, delivered after the game is complete.
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsBoxScoreByTeamFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsBoxScoreByTeamFinal(
    request: NflV3Stats.NflV3StatsBoxScoreByTeamFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScoreV3, NflV3Stats.NflV3StatsBoxScoreByTeamFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nfl/stats/{format}/BoxScoreByTeamFinal/{season}/{week}/{hometeam}",
        ),
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
        success: { kind: "json", schema: boxScoreV3Schema },
        errorFactory: NflV3Stats.NflV3StatsBoxScoreByTeamFinalError,
      },
      options,
    );
  }

  /**
   * Box Score - by Team [Live & Final]
   *
   * @remarks
   * Full statistical information for a specified game, down to the team and player stat level,
   * delivered live during the game, called for a given team's game in a given week and season.
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsBoxScoreByTeamLiveFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsBoxScoreByTeamLiveFinal(
    request: NflV3Stats.NflV3StatsBoxScoreByTeamLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScoreV3, NflV3Stats.NflV3StatsBoxScoreByTeamLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/stats/{format}/BoxScoreV3/{season}/{week}/{hometeam}"),
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
        success: { kind: "json", schema: boxScoreV3Schema },
        errorFactory: NflV3Stats.NflV3StatsBoxScoreByTeamLiveFinalError,
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
   * @throws {@link NflV3Stats.NflV3StatsBoxScoreFinalError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsBoxScoreFinal(
    request: NflV3Stats.NflV3StatsBoxScoreFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScoreV3, NflV3Stats.NflV3StatsBoxScoreFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/stats/{format}/BoxScoreFinal/{scoreid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "scoreid", value: request.scoreid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: boxScoreV3Schema },
        errorFactory: NflV3Stats.NflV3StatsBoxScoreFinalError,
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
   * @throws {@link NflV3Stats.NflV3StatsBoxScoreLiveFinalError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsBoxScoreLiveFinal(
    request: NflV3Stats.NflV3StatsBoxScoreLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScoreV3, NflV3Stats.NflV3StatsBoxScoreLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/stats/{format}/BoxScoreByScoreIDV3/{scoreid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "scoreid", value: request.scoreid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: boxScoreV3Schema },
        errorFactory: NflV3Stats.NflV3StatsBoxScoreLiveFinalError,
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
   * @throws {@link NflV3Stats.NflV3StatsBoxScoresByWeekFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsBoxScoresByWeekFinal(
    request: NflV3Stats.NflV3StatsBoxScoresByWeekFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScoreV3[], NflV3Stats.NflV3StatsBoxScoresByWeekFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/stats/{format}/BoxScoresFinal/{season}/{week}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => boxScoreV3Schema)) },
        errorFactory: NflV3Stats.NflV3StatsBoxScoresByWeekFinalError,
      },
      options,
    );
  }

  /**
   * Box Scores Delta - by Week
   *
   * @remarks
   * This method returns all box scores for a given season and week, but only returns player stats
   * that have changed in the last X minutes as specified in your API call. You can also filter by
   * type of player stats to include, such as traditional fantasy players, IDP players or all
   * players. by definition this is a live endpoint, not final.
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsBoxScoresDeltaByWeekError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsBoxScoresDeltaByWeek(
    request: NflV3Stats.NflV3StatsBoxScoresDeltaByWeekRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScoreV3[], NflV3Stats.NflV3StatsBoxScoresDeltaByWeekError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nfl/stats/{format}/BoxScoresDeltaV3/{season}/{week}/{playerstoinclude}/{minutes}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
          {
            name: "playerstoinclude",
            value: request.playerstoinclude,
            schema: s.defaulted(playerstoincludeSchema, Playerstoinclude.All),
          },
          { name: "minutes", value: request.minutes, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScoreV3Schema)) },
        errorFactory: NflV3Stats.NflV3StatsBoxScoresDeltaByWeekError,
      },
      options,
    );
  }

  /**
   * Box Scores Simulation
   *
   * @remarks
   * Gets simulated live box scores of NFL games, covering the Conference Championship games on
   * January 21, 2018.
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsBoxScoresSimulationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsBoxScoresSimulation(
    request: NflV3Stats.NflV3StatsBoxScoresSimulationRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScoreV3[], NflV3Stats.NflV3StatsBoxScoresSimulationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/stats/{format}/SimulatedBoxScoresV3/{numberofplays}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => boxScoreV3Schema)) },
        errorFactory: NflV3Stats.NflV3StatsBoxScoresSimulationError,
      },
      options,
    );
  }

  /**
   * Fantasy Defense Game Stats - All
   *
   * @remarks
   * Returns stats and fantasy points for a given game for the fantasy defense team (not IDP.)
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsFantasyDefenseGameStatsAllError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsFantasyDefenseGameStatsAll(
    request: NflV3Stats.NflV3StatsFantasyDefenseGameStatsAllRequest,
    options?: RequestOptions,
  ): ApiPromise<FantasyDefenseGame[], NflV3Stats.NflV3StatsFantasyDefenseGameStatsAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/stats/{format}/FantasyDefenseByGame/{season}/{week}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => fantasyDefenseGameSchema)) },
        errorFactory: NflV3Stats.NflV3StatsFantasyDefenseGameStatsAllError,
      },
      options,
    );
  }

  /**
   * Fantasy Defense Game Stats - by Team
   *
   * @remarks
   * Returns stats and fantasy points for a given team's game for the fantasy defense team (not
   * IDP.)
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsFantasyDefenseGameStatsByTeamError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsFantasyDefenseGameStatsByTeam(
    request: NflV3Stats.NflV3StatsFantasyDefenseGameStatsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<FantasyDefenseGame, NflV3Stats.NflV3StatsFantasyDefenseGameStatsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nfl/stats/{format}/FantasyDefenseByGameByTeam/{season}/{week}/{team}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
          { name: "team", value: request.team, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fantasyDefenseGameSchema },
        errorFactory: NflV3Stats.NflV3StatsFantasyDefenseGameStatsByTeamError,
      },
      options,
    );
  }

  /**
   * Fantasy Defense Season Stats - All
   *
   * @remarks
   * Returns stats and fantasy points for a given season for the fantasy defense team (not IDP.)
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsFantasyDefenseSeasonStatsAllError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsFantasyDefenseSeasonStatsAll(
    request: NflV3Stats.NflV3StatsFantasyDefenseSeasonStatsAllRequest,
    options?: RequestOptions,
  ): ApiPromise<FantasyDefenseSeason[], NflV3Stats.NflV3StatsFantasyDefenseSeasonStatsAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/stats/{format}/FantasyDefenseBySeason/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => fantasyDefenseSeasonSchema)) },
        errorFactory: NflV3Stats.NflV3StatsFantasyDefenseSeasonStatsAllError,
      },
      options,
    );
  }

  /**
   * Fantasy Defense Season Stats - by Team
   *
   * @remarks
   * Returns stats and fantasy points for a given team and season for the fantasy defense team (not
   * IDP.)
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsFantasyDefenseSeasonStatsByTeamError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsFantasyDefenseSeasonStatsByTeam(
    request: NflV3Stats.NflV3StatsFantasyDefenseSeasonStatsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<FantasyDefenseSeason, NflV3Stats.NflV3StatsFantasyDefenseSeasonStatsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nfl/stats/{format}/FantasyDefenseBySeasonByTeam/{season}/{team}",
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
        success: { kind: "json", schema: fantasyDefenseSeasonSchema },
        errorFactory: NflV3Stats.NflV3StatsFantasyDefenseSeasonStatsByTeamError,
      },
      options,
    );
  }

  /**
   * Fantasy Player Ownership Percentages (Season-Long) - by Week
   *
   * @remarks
   * Projected fantasy ownership of all players for a given season.
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsFantasyPlayerOwnershipPercentagesSeasonLongByWeekError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsFantasyPlayerOwnershipPercentagesSeasonLongByWeek(
    request: NflV3Stats.NflV3StatsFantasyPlayerOwnershipPercentagesSeasonLongByWeekRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PlayerOwnership[],
    NflV3Stats.NflV3StatsFantasyPlayerOwnershipPercentagesSeasonLongByWeekError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/stats/{format}/PlayerOwnership/{season}/{week}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerOwnershipSchema)) },
        errorFactory: NflV3Stats.NflV3StatsFantasyPlayerOwnershipPercentagesSeasonLongByWeekError,
      },
      options,
    );
  }

  /**
   * Fantasy Points - by Week
   *
   * @remarks
   * Returns a simple list of fantasy points and stats for each player for a given week.
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsFantasyPointsByWeekError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsFantasyPointsByWeek(
    request: NflV3Stats.NflV3StatsFantasyPointsByWeekRequest,
    options?: RequestOptions,
  ): ApiPromise<FantasyGame[], NflV3Stats.NflV3StatsFantasyPointsByWeekError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/stats/{format}/FantasyGameStatsByWeek/{season}/{week}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => fantasyGameSchema)) },
        errorFactory: NflV3Stats.NflV3StatsFantasyPointsByWeekError,
      },
      options,
    );
  }

  /**
   * Games - by Season [Final]
   *
   * @remarks
   * Full scores and gameday info, including weather, referee, infotainment odds, as well as all of
   * the quarter scores and full-time score.
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsGamesBySeasonFinalError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsGamesBySeasonFinal(
    request: NflV3Stats.NflV3StatsGamesBySeasonFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Score[], NflV3Stats.NflV3StatsGamesBySeasonFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/stats/{format}/ScoresFinal/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => scoreSchema)) },
        errorFactory: NflV3Stats.NflV3StatsGamesBySeasonFinalError,
      },
      options,
    );
  }

  /**
   * Injuries - All
   *
   * @remarks
   * A list of all injured players and a description of their injuries.
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsInjuriesAllError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsInjuriesAll(
    request: NflV3Stats.NflV3StatsInjuriesAllRequest,
    options?: RequestOptions,
  ): ApiPromise<Injury[], NflV3Stats.NflV3StatsInjuriesAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/stats/{format}/Injuries/{season}/{week}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => injurySchema)) },
        errorFactory: NflV3Stats.NflV3StatsInjuriesAllError,
      },
      options,
    );
  }

  /**
   * Injuries - by Team
   *
   * @remarks
   * A list of all injured players on a specified team and a description of their injuries.
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsInjuriesByTeamError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsInjuriesByTeam(
    request: NflV3Stats.NflV3StatsInjuriesByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<Injury[], NflV3Stats.NflV3StatsInjuriesByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/stats/{format}/Injuries/{season}/{week}/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
          { name: "team", value: request.team, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => injurySchema)) },
        errorFactory: NflV3Stats.NflV3StatsInjuriesByTeamError,
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
   * @throws {@link NflV3Stats.NflV3StatsPlayerGameLogsBySeasonError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsPlayerGameLogsBySeason(
    request: NflV3Stats.NflV3StatsPlayerGameLogsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame[], NflV3Stats.NflV3StatsPlayerGameLogsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nfl/stats/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerGameLogsBySeasonError,
      },
      options,
    );
  }

  /**
   * Player Game Red Zone Stats
   *
   * @remarks
   * Delivers all offensive stats within the red zone (within the 20-yard line of the defensive
   * team) for all players in a given season or week.
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsPlayerGameRedZoneStatsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsPlayerGameRedZoneStats(
    request: NflV3Stats.NflV3StatsPlayerGameRedZoneStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGameRedZone[], NflV3Stats.NflV3StatsPlayerGameRedZoneStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/stats/{format}/PlayerGameRedZoneStats/{season}/{week}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameRedZoneSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerGameRedZoneStatsError,
      },
      options,
    );
  }

  /**
   * Player Game Red Zone Stats (Inside Five)
   *
   * @remarks
   * Delivers all offensive stats within the 5-yard line of the defensive team for all players in a
   * given season or week.
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsPlayerGameRedZoneStatsInsideFiveError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsPlayerGameRedZoneStatsInsideFive(
    request: NflV3Stats.NflV3StatsPlayerGameRedZoneStatsInsideFiveRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGameRedZone[], NflV3Stats.NflV3StatsPlayerGameRedZoneStatsInsideFiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nfl/stats/{format}/PlayerGameRedZoneInsideFiveStats/{season}/{week}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameRedZoneSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerGameRedZoneStatsInsideFiveError,
      },
      options,
    );
  }

  /**
   * Player Game Red Zone Stats (Inside Ten)
   *
   * @remarks
   * Delivers all offensive stats within the 10-yard line of the defensive team for all players in a
   * given season or week.
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsPlayerGameRedZoneStatsInsideTenError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsPlayerGameRedZoneStatsInsideTen(
    request: NflV3Stats.NflV3StatsPlayerGameRedZoneStatsInsideTenRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGameRedZone[], NflV3Stats.NflV3StatsPlayerGameRedZoneStatsInsideTenError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nfl/stats/{format}/PlayerGameRedZoneInsideTenStats/{season}/{week}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameRedZoneSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerGameRedZoneStatsInsideTenError,
      },
      options,
    );
  }

  /**
   * Player Game Stats - by Team [Final]
   *
   * @remarks
   * Returns the box score statistical record for all involved players in a given team's game in a
   * given week after the game has concluded.
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsPlayerGameStatsByTeamFinalError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsPlayerGameStatsByTeamFinal(
    request: NflV3Stats.NflV3StatsPlayerGameStatsByTeamFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame[], NflV3Stats.NflV3StatsPlayerGameStatsByTeamFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nfl/stats/{format}/PlayerGameStatsByTeamFinal/{season}/{week}/{team}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
          { name: "team", value: request.team, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerGameStatsByTeamFinalError,
      },
      options,
    );
  }

  /**
   * Player Game Stats - by Team [Live & Final]
   *
   * @remarks
   * Returns the box score statistical record for all involved players across a given team's game in
   * a given week, updated live as the game takes place.
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsPlayerGameStatsByTeamLiveFinalError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsPlayerGameStatsByTeamLiveFinal(
    request: NflV3Stats.NflV3StatsPlayerGameStatsByTeamLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame[], NflV3Stats.NflV3StatsPlayerGameStatsByTeamLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nfl/stats/{format}/PlayerGameStatsByTeam/{season}/{week}/{team}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
          { name: "team", value: request.team, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerGameStatsByTeamLiveFinalError,
      },
      options,
    );
  }

  /**
   * Player Game Stats - by Week [Final]
   *
   * @remarks
   * Returns the box score statistical record for all involved players across all teams' games in a
   * given week after the game has concluded.
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsPlayerGameStatsByWeekFinalError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsPlayerGameStatsByWeekFinal(
    request: NflV3Stats.NflV3StatsPlayerGameStatsByWeekFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame[], NflV3Stats.NflV3StatsPlayerGameStatsByWeekFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nfl/stats/{format}/PlayerGameStatsByWeekFinal/{season}/{week}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerGameStatsByWeekFinalError,
      },
      options,
    );
  }

  /**
   * Player Game Stats - by Week [Live & Final]
   *
   * @remarks
   * Returns the box score statistical record for all involved players across a given week, updated
   * live as the game takes place.
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsPlayerGameStatsByWeekLiveFinalError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsPlayerGameStatsByWeekLiveFinal(
    request: NflV3Stats.NflV3StatsPlayerGameStatsByWeekLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame[], NflV3Stats.NflV3StatsPlayerGameStatsByWeekLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/stats/{format}/PlayerGameStatsByWeek/{season}/{week}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerGameStatsByWeekLiveFinalError,
      },
      options,
    );
  }

  /**
   * Player Game Stats Delta
   *
   * @remarks
   * This method returns all player game stats, but only returns player stats that have changed in
   * the last X minutes as specified in your API call. By definition this is a live endpoint, not
   * final.
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsPlayerGameStatsDeltaError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsPlayerGameStatsDelta(
    request: NflV3Stats.NflV3StatsPlayerGameStatsDeltaRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame[], NflV3Stats.NflV3StatsPlayerGameStatsDeltaError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/stats/{format}/PlayerGameStatsDelta/{minutes}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "minutes", value: request.minutes, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerGameStatsDeltaError,
      },
      options,
    );
  }

  /**
   * Player Game Stats Delta - by Week
   *
   * @remarks
   * This method returns all player scores for a given season and week, but only returns player
   * stats that have changed in the last X minutes as specified in your API call. Ideal for live
   * applications.
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsPlayerGameStatsDeltaByWeekError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsPlayerGameStatsDeltaByWeek(
    request: NflV3Stats.NflV3StatsPlayerGameStatsDeltaByWeekRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame[], NflV3Stats.NflV3StatsPlayerGameStatsDeltaByWeekError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nfl/stats/{format}/PlayerGameStatsByWeekDelta/{season}/{week}/{minutes}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerGameStatsDeltaByWeekError,
      },
      options,
    );
  }

  /**
   * Player Season Red Zone Stats
   *
   * @remarks
   * Delivers all offensive stats within the red zone (within the 20-yard line of the defensive
   * team) for all players in a given season (i.e. the season total, not each individual game
   * record.)
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsPlayerSeasonRedZoneStats(
    request: NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeasonRedZone[], NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/stats/{format}/PlayerSeasonRedZoneStats/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeasonRedZoneSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsError,
      },
      options,
    );
  }

  /**
   * Player Season Red Zone Stats (Inside Five)
   *
   * @remarks
   * Delivers all offensive stats within the 5-yard line of the defensive team for all players in a
   * given season (i.e. the season total, not each individual game record.)
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsInsideFiveError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsPlayerSeasonRedZoneStatsInsideFive(
    request: NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsInsideFiveRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeasonRedZone[], NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsInsideFiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nfl/stats/{format}/PlayerSeasonRedZoneInsideFiveStats/{season}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeasonRedZoneSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsInsideFiveError,
      },
      options,
    );
  }

  /**
   * Player Season Red Zone Stats (Inside Ten)
   *
   * @remarks
   * Delivers all offensive stats within the 10-yard line of the defensive team for all players in a
   * given season (i.e. the season total, not each individual game record.)
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsInsideTenError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsPlayerSeasonRedZoneStatsInsideTen(
    request: NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsInsideTenRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeasonRedZone[], NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsInsideTenError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nfl/stats/{format}/PlayerSeasonRedZoneInsideTenStats/{season}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeasonRedZoneSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsInsideTenError,
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
   * @throws {@link NflV3Stats.NflV3StatsPlayerSeasonStatsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsPlayerSeasonStats(
    request: NflV3Stats.NflV3StatsPlayerSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason[], NflV3Stats.NflV3StatsPlayerSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/stats/{format}/PlayerSeasonStats/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeasonSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerSeasonStatsError,
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
   * @throws {@link NflV3Stats.NflV3StatsPlayerSeasonStatsByTeamError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsPlayerSeasonStatsByTeam(
    request: NflV3Stats.NflV3StatsPlayerSeasonStatsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason[], NflV3Stats.NflV3StatsPlayerSeasonStatsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/stats/{format}/PlayerSeasonStatsByTeam/{season}/{team}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeasonSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerSeasonStatsByTeamError,
      },
      options,
    );
  }

  /**
   * Player Season Third Down Stats
   *
   * @remarks
   * Returns all season-long stats (i.e. the season total, not each individual game record) for all
   * players on the third down for a given season.
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsPlayerSeasonThirdDownStatsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsPlayerSeasonThirdDownStats(
    request: NflV3Stats.NflV3StatsPlayerSeasonThirdDownStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeasonThirdDown[], NflV3Stats.NflV3StatsPlayerSeasonThirdDownStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/stats/{format}/PlayerSeasonThirdDownStats/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeasonThirdDownSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerSeasonThirdDownStatsError,
      },
      options,
    );
  }

  /**
   * Pro Bowlers
   *
   * @remarks
   * A list of players involved in the Pro Bowl, by season.
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsProBowlersError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsProBowlers(
    request: NflV3Stats.NflV3StatsProBowlersRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerInfo[], NflV3Stats.NflV3StatsProBowlersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/stats/{format}/ProBowlers/{season}"),
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
        errorFactory: NflV3Stats.NflV3StatsProBowlersError,
      },
      options,
    );
  }

  /**
   * Team Game Stats - by Game [Final]
   *
   * @remarks
   * Returns the box score statistical record team-wide (aggregated from all players) for a given
   * team's game in a given week after the game has concluded.
   *
   * @returns Success
   *
   * @throws {@link NflV3Stats.NflV3StatsTeamGameStatsByGameFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3StatsTeamGameStatsByGameFinal(
    request: NflV3Stats.NflV3StatsTeamGameStatsByGameFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame[], NflV3Stats.NflV3StatsTeamGameStatsByGameFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/stats/{format}/TeamGameStatsFinal/{season}/{week}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamGameSchema)) },
        errorFactory: NflV3Stats.NflV3StatsTeamGameStatsByGameFinalError,
      },
      options,
    );
  }
}

export namespace NflV3Stats {
  export type NflV3StatsBoxScoreByTeamFinalRequest = {
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
    /** Abbreviation of a team playing in this game. Example: <code>WAS</code>. */
    hometeam: string;
  };

  export class NflV3StatsBoxScoreByTeamFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsBoxScoreByTeamFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsBoxScoreByTeamLiveFinalRequest = {
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
    /** Abbreviation of a team playing in this game. Example: <code>WAS</code>. */
    hometeam: string;
  };

  export class NflV3StatsBoxScoreByTeamLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsBoxScoreByTeamLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsBoxScoreFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The ScoreID of the game. Possible values include: <code>16247</code>, <code>16245</code>,
     * etc.
     */
    scoreid: string;
  };

  export class NflV3StatsBoxScoreFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsBoxScoreFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsBoxScoreLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The ScoreID of the game. Possible values include: <code>16247</code>, <code>16245</code>,
     * etc.
     */
    scoreid: string;
  };

  export class NflV3StatsBoxScoreLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsBoxScoreLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsBoxScoresByWeekFinalRequest = {
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
  };

  export class NflV3StatsBoxScoresByWeekFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsBoxScoresByWeekFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsBoxScoresDeltaByWeekRequest = {
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
     * The subcategory of players to include in the returned PlayerGame records. Possible values
     * include:<br><br> <code>all</code> Returns all players<br> <code>fantasy</code> Returns
     * traditional fantasy players (QB, RB, WR, TE, K, DST)<br> <code>idp</code> Returns traditional
     * fantasy players and IDP players.
     *
     * @default Playerstoinclude.All
     */
    playerstoinclude?: Playerstoinclude;
    /**
     * Only returns player statistics that have changed in the last X minutes. You specify how many
     * minutes in time to go back. Valid entries are:<br><code>1</code>, <code>2</code>, etc.
     */
    minutes: string;
  };

  export class NflV3StatsBoxScoresDeltaByWeekError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsBoxScoresDeltaByWeekError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsBoxScoresSimulationRequest = {
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

  export class NflV3StatsBoxScoresSimulationError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsBoxScoresSimulationError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsFantasyDefenseGameStatsAllRequest = {
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
  };

  export class NflV3StatsFantasyDefenseGameStatsAllError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsFantasyDefenseGameStatsAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsFantasyDefenseGameStatsByTeamRequest = {
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
    /** Abbreviation of the team. Example: <code>WAS</code>. */
    team: string;
  };

  export class NflV3StatsFantasyDefenseGameStatsByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsFantasyDefenseGameStatsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsFantasyDefenseSeasonStatsAllRequest = {
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
  };

  export class NflV3StatsFantasyDefenseSeasonStatsAllError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsFantasyDefenseSeasonStatsAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsFantasyDefenseSeasonStatsByTeamRequest = {
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
    /** Abbreviation of the team. Example: <code>WAS</code>. */
    team: string;
  };

  export class NflV3StatsFantasyDefenseSeasonStatsByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsFantasyDefenseSeasonStatsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsFantasyPlayerOwnershipPercentagesSeasonLongByWeekRequest = {
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
  };

  export class NflV3StatsFantasyPlayerOwnershipPercentagesSeasonLongByWeekError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsFantasyPlayerOwnershipPercentagesSeasonLongByWeekError> =
      [{ on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } }];
  }

  export type NflV3StatsFantasyPointsByWeekRequest = {
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
  };

  export class NflV3StatsFantasyPointsByWeekError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsFantasyPointsByWeekError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsGamesBySeasonFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season (with optional season type).<br>Examples: <code>2018</code>,
     * <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.
     */
    season: string;
  };

  export class NflV3StatsGamesBySeasonFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsGamesBySeasonFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsInjuriesAllRequest = {
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
  };

  export class NflV3StatsInjuriesAllError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsInjuriesAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsInjuriesByTeamRequest = {
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
    /** Abbreviation of the team. Example: <code>WAS</code>. */
    team: string;
  };

  export class NflV3StatsInjuriesByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsInjuriesByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerGameLogsBySeasonRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Season to get games from. Example <code>2019POST</code>, <code>2020</code> */
    season: string;
    /** Unique SportsDataIO Player ID. Example:<code>17920</code>. */
    playerid: string;
    /** How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code> */
    numberofgames: string;
  };

  export class NflV3StatsPlayerGameLogsBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsPlayerGameLogsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerGameRedZoneStatsRequest = {
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
  };

  export class NflV3StatsPlayerGameRedZoneStatsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsPlayerGameRedZoneStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerGameRedZoneStatsInsideFiveRequest = {
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
  };

  export class NflV3StatsPlayerGameRedZoneStatsInsideFiveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsPlayerGameRedZoneStatsInsideFiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerGameRedZoneStatsInsideTenRequest = {
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
  };

  export class NflV3StatsPlayerGameRedZoneStatsInsideTenError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsPlayerGameRedZoneStatsInsideTenError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerGameStatsByTeamFinalRequest = {
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
    /** Abbreviation of the team. Example: <code>WAS</code>. */
    team: string;
  };

  export class NflV3StatsPlayerGameStatsByTeamFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsPlayerGameStatsByTeamFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerGameStatsByTeamLiveFinalRequest = {
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
    /** Abbreviation of the team. Example: <code>WAS</code>. */
    team: string;
  };

  export class NflV3StatsPlayerGameStatsByTeamLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsPlayerGameStatsByTeamLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerGameStatsByWeekFinalRequest = {
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
  };

  export class NflV3StatsPlayerGameStatsByWeekFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsPlayerGameStatsByWeekFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerGameStatsByWeekLiveFinalRequest = {
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
  };

  export class NflV3StatsPlayerGameStatsByWeekLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsPlayerGameStatsByWeekLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerGameStatsDeltaRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Only returns player statistics that have changed in the last X minutes. You specify how many
     * minutes in time to go back. Valid entries are: <code>1</code> or <code>2</code>.
     */
    minutes: string;
  };

  export class NflV3StatsPlayerGameStatsDeltaError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsPlayerGameStatsDeltaError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerGameStatsDeltaByWeekRequest = {
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

  export class NflV3StatsPlayerGameStatsDeltaByWeekError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsPlayerGameStatsDeltaByWeekError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerSeasonRedZoneStatsRequest = {
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
  };

  export class NflV3StatsPlayerSeasonRedZoneStatsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsPlayerSeasonRedZoneStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerSeasonRedZoneStatsInsideFiveRequest = {
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
  };

  export class NflV3StatsPlayerSeasonRedZoneStatsInsideFiveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsPlayerSeasonRedZoneStatsInsideFiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerSeasonRedZoneStatsInsideTenRequest = {
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
  };

  export class NflV3StatsPlayerSeasonRedZoneStatsInsideTenError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsPlayerSeasonRedZoneStatsInsideTenError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerSeasonStatsRequest = {
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
  };

  export class NflV3StatsPlayerSeasonStatsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsPlayerSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerSeasonStatsByTeamRequest = {
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
    /** Abbreviation of the team. Example: <code>WAS</code>. */
    team: string;
  };

  export class NflV3StatsPlayerSeasonStatsByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsPlayerSeasonStatsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerSeasonThirdDownStatsRequest = {
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
  };

  export class NflV3StatsPlayerSeasonThirdDownStatsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsPlayerSeasonThirdDownStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsProBowlersRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season <br>Examples: <code>2016</code>, <code>2017</code> */
    season: string;
  };

  export class NflV3StatsProBowlersError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsProBowlersError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsTeamGameStatsByGameFinalRequest = {
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
  };

  export class NflV3StatsTeamGameStatsByGameFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3StatsTeamGameStatsByGameFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
