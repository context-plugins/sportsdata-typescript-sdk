import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  nflV3StatsBoxScoreByTeamFinal(
    request: NflV3Stats.NflV3StatsBoxScoreByTeamFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScoreV3, NflV3Stats.NflV3StatsBoxScoreByTeamFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/BoxScoreByTeamFinal/{season}/{week}/{hometeam}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
          { name: "hometeam", value: request.hometeam, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: boxScoreV3Schema },
        errorFactory: NflV3Stats.NflV3StatsBoxScoreByTeamFinalError,
      },
      options,
    );
  }

  nflV3StatsBoxScoreByTeamLiveFinal(
    request: NflV3Stats.NflV3StatsBoxScoreByTeamLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScoreV3, NflV3Stats.NflV3StatsBoxScoreByTeamLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/BoxScoreV3/{season}/{week}/{hometeam}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
          { name: "hometeam", value: request.hometeam, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: boxScoreV3Schema },
        errorFactory: NflV3Stats.NflV3StatsBoxScoreByTeamLiveFinalError,
      },
      options,
    );
  }

  nflV3StatsBoxScoreFinal(
    request: NflV3Stats.NflV3StatsBoxScoreFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScoreV3, NflV3Stats.NflV3StatsBoxScoreFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/BoxScoreFinal/{scoreid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "scoreid", value: request.scoreid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: boxScoreV3Schema },
        errorFactory: NflV3Stats.NflV3StatsBoxScoreFinalError,
      },
      options,
    );
  }

  nflV3StatsBoxScoreLiveFinal(
    request: NflV3Stats.NflV3StatsBoxScoreLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScoreV3, NflV3Stats.NflV3StatsBoxScoreLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/BoxScoreByScoreIDV3/{scoreid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "scoreid", value: request.scoreid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: boxScoreV3Schema },
        errorFactory: NflV3Stats.NflV3StatsBoxScoreLiveFinalError,
      },
      options,
    );
  }

  nflV3StatsBoxScoresByWeekFinal(
    request: NflV3Stats.NflV3StatsBoxScoresByWeekFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScoreV3[], NflV3Stats.NflV3StatsBoxScoresByWeekFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/BoxScoresFinal/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScoreV3Schema)) },
        errorFactory: NflV3Stats.NflV3StatsBoxScoresByWeekFinalError,
      },
      options,
    );
  }

  nflV3StatsBoxScoresDeltaByWeek(
    request: NflV3Stats.NflV3StatsBoxScoresDeltaByWeekRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScoreV3[], NflV3Stats.NflV3StatsBoxScoresDeltaByWeekError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScoreV3Schema)) },
        errorFactory: NflV3Stats.NflV3StatsBoxScoresDeltaByWeekError,
      },
      options,
    );
  }

  nflV3StatsBoxScoresSimulation(
    request: NflV3Stats.NflV3StatsBoxScoresSimulationRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScoreV3[], NflV3Stats.NflV3StatsBoxScoresSimulationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/SimulatedBoxScoresV3/{numberofplays}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "numberofplays", value: request.numberofplays, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScoreV3Schema)) },
        errorFactory: NflV3Stats.NflV3StatsBoxScoresSimulationError,
      },
      options,
    );
  }

  nflV3StatsFantasyDefenseGameStatsAll(
    request: NflV3Stats.NflV3StatsFantasyDefenseGameStatsAllRequest,
    options?: RequestOptions,
  ): ApiPromise<FantasyDefenseGame[], NflV3Stats.NflV3StatsFantasyDefenseGameStatsAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/FantasyDefenseByGame/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => fantasyDefenseGameSchema)) },
        errorFactory: NflV3Stats.NflV3StatsFantasyDefenseGameStatsAllError,
      },
      options,
    );
  }

  nflV3StatsFantasyDefenseGameStatsByTeam(
    request: NflV3Stats.NflV3StatsFantasyDefenseGameStatsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<FantasyDefenseGame, NflV3Stats.NflV3StatsFantasyDefenseGameStatsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nfl/stats/{format}/FantasyDefenseByGameByTeam/{season}/{week}/{team}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fantasyDefenseGameSchema },
        errorFactory: NflV3Stats.NflV3StatsFantasyDefenseGameStatsByTeamError,
      },
      options,
    );
  }

  nflV3StatsFantasyDefenseSeasonStatsAll(
    request: NflV3Stats.NflV3StatsFantasyDefenseSeasonStatsAllRequest,
    options?: RequestOptions,
  ): ApiPromise<FantasyDefenseSeason[], NflV3Stats.NflV3StatsFantasyDefenseSeasonStatsAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/FantasyDefenseBySeason/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => fantasyDefenseSeasonSchema)) },
        errorFactory: NflV3Stats.NflV3StatsFantasyDefenseSeasonStatsAllError,
      },
      options,
    );
  }

  nflV3StatsFantasyDefenseSeasonStatsByTeam(
    request: NflV3Stats.NflV3StatsFantasyDefenseSeasonStatsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<FantasyDefenseSeason, NflV3Stats.NflV3StatsFantasyDefenseSeasonStatsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/FantasyDefenseBySeasonByTeam/{season}/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fantasyDefenseSeasonSchema },
        errorFactory: NflV3Stats.NflV3StatsFantasyDefenseSeasonStatsByTeamError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/v3/nfl/stats/{format}/PlayerOwnership/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerOwnershipSchema)) },
        errorFactory: NflV3Stats.NflV3StatsFantasyPlayerOwnershipPercentagesSeasonLongByWeekError,
      },
      options,
    );
  }

  nflV3StatsFantasyPointsByWeek(
    request: NflV3Stats.NflV3StatsFantasyPointsByWeekRequest,
    options?: RequestOptions,
  ): ApiPromise<FantasyGame[], NflV3Stats.NflV3StatsFantasyPointsByWeekError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/FantasyGameStatsByWeek/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => fantasyGameSchema)) },
        errorFactory: NflV3Stats.NflV3StatsFantasyPointsByWeekError,
      },
      options,
    );
  }

  nflV3StatsGamesBySeasonFinal(
    request: NflV3Stats.NflV3StatsGamesBySeasonFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Score[], NflV3Stats.NflV3StatsGamesBySeasonFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/ScoresFinal/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreSchema)) },
        errorFactory: NflV3Stats.NflV3StatsGamesBySeasonFinalError,
      },
      options,
    );
  }

  nflV3StatsInjuriesAll(
    request: NflV3Stats.NflV3StatsInjuriesAllRequest,
    options?: RequestOptions,
  ): ApiPromise<Injury[], NflV3Stats.NflV3StatsInjuriesAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/Injuries/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => injurySchema)) },
        errorFactory: NflV3Stats.NflV3StatsInjuriesAllError,
      },
      options,
    );
  }

  nflV3StatsInjuriesByTeam(
    request: NflV3Stats.NflV3StatsInjuriesByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<Injury[], NflV3Stats.NflV3StatsInjuriesByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/Injuries/{season}/{week}/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => injurySchema)) },
        errorFactory: NflV3Stats.NflV3StatsInjuriesByTeamError,
      },
      options,
    );
  }

  nflV3StatsPlayerGameLogsBySeason(
    request: NflV3Stats.NflV3StatsPlayerGameLogsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame[], NflV3Stats.NflV3StatsPlayerGameLogsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nfl/stats/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "playerid", value: request.playerid, schema: s.string() },
          { name: "numberofgames", value: request.numberofgames, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerGameLogsBySeasonError,
      },
      options,
    );
  }

  nflV3StatsPlayerGameRedZoneStats(
    request: NflV3Stats.NflV3StatsPlayerGameRedZoneStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGameRedZone[], NflV3Stats.NflV3StatsPlayerGameRedZoneStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/PlayerGameRedZoneStats/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameRedZoneSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerGameRedZoneStatsError,
      },
      options,
    );
  }

  nflV3StatsPlayerGameRedZoneStatsInsideFive(
    request: NflV3Stats.NflV3StatsPlayerGameRedZoneStatsInsideFiveRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGameRedZone[], NflV3Stats.NflV3StatsPlayerGameRedZoneStatsInsideFiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/PlayerGameRedZoneInsideFiveStats/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameRedZoneSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerGameRedZoneStatsInsideFiveError,
      },
      options,
    );
  }

  nflV3StatsPlayerGameRedZoneStatsInsideTen(
    request: NflV3Stats.NflV3StatsPlayerGameRedZoneStatsInsideTenRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGameRedZone[], NflV3Stats.NflV3StatsPlayerGameRedZoneStatsInsideTenError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/PlayerGameRedZoneInsideTenStats/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameRedZoneSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerGameRedZoneStatsInsideTenError,
      },
      options,
    );
  }

  nflV3StatsPlayerGameStatsByTeamFinal(
    request: NflV3Stats.NflV3StatsPlayerGameStatsByTeamFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame[], NflV3Stats.NflV3StatsPlayerGameStatsByTeamFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nfl/stats/{format}/PlayerGameStatsByTeamFinal/{season}/{week}/{team}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerGameStatsByTeamFinalError,
      },
      options,
    );
  }

  nflV3StatsPlayerGameStatsByTeamLiveFinal(
    request: NflV3Stats.NflV3StatsPlayerGameStatsByTeamLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame[], NflV3Stats.NflV3StatsPlayerGameStatsByTeamLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/PlayerGameStatsByTeam/{season}/{week}/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerGameStatsByTeamLiveFinalError,
      },
      options,
    );
  }

  nflV3StatsPlayerGameStatsByWeekFinal(
    request: NflV3Stats.NflV3StatsPlayerGameStatsByWeekFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame[], NflV3Stats.NflV3StatsPlayerGameStatsByWeekFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/PlayerGameStatsByWeekFinal/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerGameStatsByWeekFinalError,
      },
      options,
    );
  }

  nflV3StatsPlayerGameStatsByWeekLiveFinal(
    request: NflV3Stats.NflV3StatsPlayerGameStatsByWeekLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame[], NflV3Stats.NflV3StatsPlayerGameStatsByWeekLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/PlayerGameStatsByWeek/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerGameStatsByWeekLiveFinalError,
      },
      options,
    );
  }

  nflV3StatsPlayerGameStatsDelta(
    request: NflV3Stats.NflV3StatsPlayerGameStatsDeltaRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame[], NflV3Stats.NflV3StatsPlayerGameStatsDeltaError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/PlayerGameStatsDelta/{minutes}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "minutes", value: request.minutes, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerGameStatsDeltaError,
      },
      options,
    );
  }

  nflV3StatsPlayerGameStatsDeltaByWeek(
    request: NflV3Stats.NflV3StatsPlayerGameStatsDeltaByWeekRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame[], NflV3Stats.NflV3StatsPlayerGameStatsDeltaByWeekError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nfl/stats/{format}/PlayerGameStatsByWeekDelta/{season}/{week}/{minutes}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
          { name: "minutes", value: request.minutes, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerGameStatsDeltaByWeekError,
      },
      options,
    );
  }

  nflV3StatsPlayerSeasonRedZoneStats(
    request: NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeasonRedZone[], NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/PlayerSeasonRedZoneStats/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeasonRedZoneSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsError,
      },
      options,
    );
  }

  nflV3StatsPlayerSeasonRedZoneStatsInsideFive(
    request: NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsInsideFiveRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeasonRedZone[], NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsInsideFiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/PlayerSeasonRedZoneInsideFiveStats/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeasonRedZoneSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsInsideFiveError,
      },
      options,
    );
  }

  nflV3StatsPlayerSeasonRedZoneStatsInsideTen(
    request: NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsInsideTenRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeasonRedZone[], NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsInsideTenError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/PlayerSeasonRedZoneInsideTenStats/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeasonRedZoneSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsInsideTenError,
      },
      options,
    );
  }

  nflV3StatsPlayerSeasonStats(
    request: NflV3Stats.NflV3StatsPlayerSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason[], NflV3Stats.NflV3StatsPlayerSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/PlayerSeasonStats/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeasonSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerSeasonStatsError,
      },
      options,
    );
  }

  nflV3StatsPlayerSeasonStatsByTeam(
    request: NflV3Stats.NflV3StatsPlayerSeasonStatsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason[], NflV3Stats.NflV3StatsPlayerSeasonStatsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/PlayerSeasonStatsByTeam/{season}/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeasonSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerSeasonStatsByTeamError,
      },
      options,
    );
  }

  nflV3StatsPlayerSeasonThirdDownStats(
    request: NflV3Stats.NflV3StatsPlayerSeasonThirdDownStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeasonThirdDown[], NflV3Stats.NflV3StatsPlayerSeasonThirdDownStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/PlayerSeasonThirdDownStats/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeasonThirdDownSchema)) },
        errorFactory: NflV3Stats.NflV3StatsPlayerSeasonThirdDownStatsError,
      },
      options,
    );
  }

  nflV3StatsProBowlers(
    request: NflV3Stats.NflV3StatsProBowlersRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerInfo[], NflV3Stats.NflV3StatsProBowlersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/ProBowlers/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerInfoSchema)) },
        errorFactory: NflV3Stats.NflV3StatsProBowlersError,
      },
      options,
    );
  }

  nflV3StatsTeamGameStatsByGameFinal(
    request: NflV3Stats.NflV3StatsTeamGameStatsByGameFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame[], NflV3Stats.NflV3StatsTeamGameStatsByGameFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/stats/{format}/TeamGameStatsFinal/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
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
    format?: Format;
    season: string;
    week: string;
    hometeam: string;
  };

  export class NflV3StatsBoxScoreByTeamFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsBoxScoreByTeamFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsBoxScoreByTeamLiveFinalRequest = {
    format?: Format;
    season: string;
    week: string;
    hometeam: string;
  };

  export class NflV3StatsBoxScoreByTeamLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsBoxScoreByTeamLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsBoxScoreFinalRequest = {
    format?: Format;
    scoreid: string;
  };

  export class NflV3StatsBoxScoreFinalError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3StatsBoxScoreFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsBoxScoreLiveFinalRequest = {
    format?: Format;
    scoreid: string;
  };

  export class NflV3StatsBoxScoreLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsBoxScoreLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsBoxScoresByWeekFinalRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class NflV3StatsBoxScoresByWeekFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsBoxScoresByWeekFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsBoxScoresDeltaByWeekRequest = {
    format?: Format;
    season: string;
    week: string;
    playerstoinclude?: Playerstoinclude;
    minutes: string;
  };

  export class NflV3StatsBoxScoresDeltaByWeekError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsBoxScoresDeltaByWeekError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsBoxScoresSimulationRequest = {
    format?: Format;
    numberofplays: string;
  };

  export class NflV3StatsBoxScoresSimulationError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsBoxScoresSimulationError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsFantasyDefenseGameStatsAllRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class NflV3StatsFantasyDefenseGameStatsAllError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsFantasyDefenseGameStatsAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsFantasyDefenseGameStatsByTeamRequest = {
    format?: Format;
    season: string;
    week: string;
    team: string;
  };

  export class NflV3StatsFantasyDefenseGameStatsByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsFantasyDefenseGameStatsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsFantasyDefenseSeasonStatsAllRequest = {
    format?: Format;
    season: string;
  };

  export class NflV3StatsFantasyDefenseSeasonStatsAllError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsFantasyDefenseSeasonStatsAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsFantasyDefenseSeasonStatsByTeamRequest = {
    format?: Format;
    season: string;
    team: string;
  };

  export class NflV3StatsFantasyDefenseSeasonStatsByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsFantasyDefenseSeasonStatsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsFantasyPlayerOwnershipPercentagesSeasonLongByWeekRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class NflV3StatsFantasyPlayerOwnershipPercentagesSeasonLongByWeekError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsFantasyPlayerOwnershipPercentagesSeasonLongByWeekError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsFantasyPointsByWeekRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class NflV3StatsFantasyPointsByWeekError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsFantasyPointsByWeekError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsGamesBySeasonFinalRequest = {
    format?: Format;
    season: string;
  };

  export class NflV3StatsGamesBySeasonFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsGamesBySeasonFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsInjuriesAllRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class NflV3StatsInjuriesAllError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3StatsInjuriesAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsInjuriesByTeamRequest = {
    format?: Format;
    season: string;
    week: string;
    team: string;
  };

  export class NflV3StatsInjuriesByTeamError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3StatsInjuriesByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerGameLogsBySeasonRequest = {
    format?: Format;
    season: string;
    playerid: string;
    numberofgames: string;
  };

  export class NflV3StatsPlayerGameLogsBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsPlayerGameLogsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerGameRedZoneStatsRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class NflV3StatsPlayerGameRedZoneStatsError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsPlayerGameRedZoneStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerGameRedZoneStatsInsideFiveRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class NflV3StatsPlayerGameRedZoneStatsInsideFiveError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsPlayerGameRedZoneStatsInsideFiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerGameRedZoneStatsInsideTenRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class NflV3StatsPlayerGameRedZoneStatsInsideTenError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsPlayerGameRedZoneStatsInsideTenError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerGameStatsByTeamFinalRequest = {
    format?: Format;
    season: string;
    week: string;
    team: string;
  };

  export class NflV3StatsPlayerGameStatsByTeamFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsPlayerGameStatsByTeamFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerGameStatsByTeamLiveFinalRequest = {
    format?: Format;
    season: string;
    week: string;
    team: string;
  };

  export class NflV3StatsPlayerGameStatsByTeamLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsPlayerGameStatsByTeamLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerGameStatsByWeekFinalRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class NflV3StatsPlayerGameStatsByWeekFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsPlayerGameStatsByWeekFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerGameStatsByWeekLiveFinalRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class NflV3StatsPlayerGameStatsByWeekLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsPlayerGameStatsByWeekLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerGameStatsDeltaRequest = {
    format?: Format;
    minutes: string;
  };

  export class NflV3StatsPlayerGameStatsDeltaError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsPlayerGameStatsDeltaError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerGameStatsDeltaByWeekRequest = {
    format?: Format;
    season: string;
    week: string;
    minutes: string;
  };

  export class NflV3StatsPlayerGameStatsDeltaByWeekError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsPlayerGameStatsDeltaByWeekError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerSeasonRedZoneStatsRequest = {
    format?: Format;
    season: string;
  };

  export class NflV3StatsPlayerSeasonRedZoneStatsError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsPlayerSeasonRedZoneStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerSeasonRedZoneStatsInsideFiveRequest = {
    format?: Format;
    season: string;
  };

  export class NflV3StatsPlayerSeasonRedZoneStatsInsideFiveError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsPlayerSeasonRedZoneStatsInsideFiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerSeasonRedZoneStatsInsideTenRequest = {
    format?: Format;
    season: string;
  };

  export class NflV3StatsPlayerSeasonRedZoneStatsInsideTenError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsPlayerSeasonRedZoneStatsInsideTenError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerSeasonStatsRequest = {
    format?: Format;
    season: string;
  };

  export class NflV3StatsPlayerSeasonStatsError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsPlayerSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerSeasonStatsByTeamRequest = {
    format?: Format;
    season: string;
    team: string;
  };

  export class NflV3StatsPlayerSeasonStatsByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsPlayerSeasonStatsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsPlayerSeasonThirdDownStatsRequest = {
    format?: Format;
    season: string;
  };

  export class NflV3StatsPlayerSeasonThirdDownStatsError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsPlayerSeasonThirdDownStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsProBowlersRequest = {
    format?: Format;
    season: string;
  };

  export class NflV3StatsProBowlersError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3StatsProBowlersError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3StatsTeamGameStatsByGameFinalRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class NflV3StatsTeamGameStatsByGameFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3StatsTeamGameStatsByGameFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
