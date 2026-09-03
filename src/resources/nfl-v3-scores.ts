import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { byeSchema, type Bye } from "../models/bye.js";
import { Format, formatSchema } from "../models/format.js";
import { newsSchema, type News } from "../models/news.js";
import { playerBasicSchema, type PlayerBasic } from "../models/player-basic.js";
import { playerDetailSchema, type PlayerDetail } from "../models/player-detail.js";
import { playerSchema, type Player } from "../models/player.js";
import { refereeSchema, type Referee } from "../models/referee.js";
import { scheduleBasicSchema, type ScheduleBasic } from "../models/schedule-basic.js";
import { scheduleSchema, type Schedule } from "../models/schedule.js";
import { scoreBasicSchema, type ScoreBasic } from "../models/score-basic.js";
import { scoreSchema, type Score } from "../models/score.js";
import { stadiumSchema, type Stadium } from "../models/stadium.js";
import { standingSchema, type Standing } from "../models/standing.js";
import { teamBasicSchema, type TeamBasic } from "../models/team-basic.js";
import { teamDepthChartWeeklySchema, type TeamDepthChartWeekly } from "../models/team-depth-chart-weekly.js";
import { teamDepthChartSchema, type TeamDepthChart } from "../models/team-depth-chart.js";
import { teamGameSchema, type TeamGame } from "../models/team-game.js";
import { teamSeasonSchema, type TeamSeason } from "../models/team-season.js";
import { teamSchema, type Team } from "../models/team.js";
import { timeframeSchema, type Timeframe } from "../models/timeframe.js";
import { transactionSchema, type Transaction } from "../models/transaction.js";
import { Type, typeSchema } from "../models/type.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class NflV3Scores {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  nflV3ScoresAreGamesInProgress(
    request: NflV3Scores.NflV3ScoresAreGamesInProgressRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean, NflV3Scores.NflV3ScoresAreGamesInProgressError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/AreAnyGamesInProgress"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.boolean() },
        errorFactory: NflV3Scores.NflV3ScoresAreGamesInProgressError,
      },
      options,
    );
  }

  nflV3ScoresByeWeeks(
    request: NflV3Scores.NflV3ScoresByeWeeksRequest,
    options?: RequestOptions,
  ): ApiPromise<Bye[], NflV3Scores.NflV3ScoresByeWeeksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/Byes/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => byeSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresByeWeeksError,
      },
      options,
    );
  }

  nflV3ScoresDepthChartsAll(
    request: NflV3Scores.NflV3ScoresDepthChartsAllRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamDepthChart[], NflV3Scores.NflV3ScoresDepthChartsAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/DepthChartsAll"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamDepthChartSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresDepthChartsAllError,
      },
      options,
    );
  }

  nflV3ScoresDepthChartsByActive(
    request: NflV3Scores.NflV3ScoresDepthChartsByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamDepthChart[], NflV3Scores.NflV3ScoresDepthChartsByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/DepthCharts"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamDepthChartSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresDepthChartsByActiveError,
      },
      options,
    );
  }

  nflV3ScoresDepthChartsByWeek(
    request: NflV3Scores.NflV3ScoresDepthChartsByWeekRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamDepthChartWeekly[], NflV3Scores.NflV3ScoresDepthChartsByWeekError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/DepthChartsByWeek/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamDepthChartWeeklySchema)) },
        errorFactory: NflV3Scores.NflV3ScoresDepthChartsByWeekError,
      },
      options,
    );
  }

  nflV3ScoresGamesByDateFinal(
    request: NflV3Scores.NflV3ScoresGamesByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Score[], NflV3Scores.NflV3ScoresGamesByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/ScoresByDateFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresGamesByDateFinalError,
      },
      options,
    );
  }

  nflV3ScoresGamesByDateLiveFinal(
    request: NflV3Scores.NflV3ScoresGamesByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Score[], NflV3Scores.NflV3ScoresGamesByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/ScoresByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresGamesByDateLiveFinalError,
      },
      options,
    );
  }

  nflV3ScoresGamesBySeasonLiveFinal(
    request: NflV3Scores.NflV3ScoresGamesBySeasonLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Score[], NflV3Scores.NflV3ScoresGamesBySeasonLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/Scores/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresGamesBySeasonLiveFinalError,
      },
      options,
    );
  }

  nflV3ScoresGamesByWeekFinal(
    request: NflV3Scores.NflV3ScoresGamesByWeekFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Score[], NflV3Scores.NflV3ScoresGamesByWeekFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/ScoresByWeekFinal/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresGamesByWeekFinalError,
      },
      options,
    );
  }

  nflV3ScoresGamesByWeekLiveFinal(
    request: NflV3Scores.NflV3ScoresGamesByWeekLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Score[], NflV3Scores.NflV3ScoresGamesByWeekLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/ScoresByWeek/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresGamesByWeekLiveFinalError,
      },
      options,
    );
  }

  nflV3ScoresGamesBasicByWeekFinal(
    request: NflV3Scores.NflV3ScoresGamesBasicByWeekFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic[], NflV3Scores.NflV3ScoresGamesBasicByWeekFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/ScoresBasicFinal/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasicSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresGamesBasicByWeekFinalError,
      },
      options,
    );
  }

  nflV3ScoresGamesBasicByWeekLiveFinal(
    request: NflV3Scores.NflV3ScoresGamesBasicByWeekLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic[], NflV3Scores.NflV3ScoresGamesBasicByWeekLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/ScoresBasic/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasicSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresGamesBasicByWeekLiveFinalError,
      },
      options,
    );
  }

  nflV3ScoresNews(
    request: NflV3Scores.NflV3ScoresNewsRequest,
    options?: RequestOptions,
  ): ApiPromise<News[], NflV3Scores.NflV3ScoresNewsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/News"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => newsSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresNewsError,
      },
      options,
    );
  }

  nflV3ScoresNewsByDate(
    request: NflV3Scores.NflV3ScoresNewsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<News[], NflV3Scores.NflV3ScoresNewsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/NewsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => newsSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresNewsByDateError,
      },
      options,
    );
  }

  nflV3ScoresNewsByTeam(
    request: NflV3Scores.NflV3ScoresNewsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<News[], NflV3Scores.NflV3ScoresNewsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/NewsByTeam/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => newsSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresNewsByTeamError,
      },
      options,
    );
  }

  nflV3ScoresPlayerDetailsAll(
    request: NflV3Scores.NflV3ScoresPlayerDetailsAllRequest,
    options?: RequestOptions,
  ): ApiPromise<Player[], NflV3Scores.NflV3ScoresPlayerDetailsAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/Players"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresPlayerDetailsAllError,
      },
      options,
    );
  }

  nflV3ScoresPlayerDetailsByFreeAgents(
    request: NflV3Scores.NflV3ScoresPlayerDetailsByFreeAgentsRequest,
    options?: RequestOptions,
  ): ApiPromise<Player[], NflV3Scores.NflV3ScoresPlayerDetailsByFreeAgentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/FreeAgents"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresPlayerDetailsByFreeAgentsError,
      },
      options,
    );
  }

  nflV3ScoresPlayerDetailsByRookieDraftYear(
    request: NflV3Scores.NflV3ScoresPlayerDetailsByRookieDraftYearRequest,
    options?: RequestOptions,
  ): ApiPromise<Player[], NflV3Scores.NflV3ScoresPlayerDetailsByRookieDraftYearError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/Rookies/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresPlayerDetailsByRookieDraftYearError,
      },
      options,
    );
  }

  nflV3ScoresPlayerDetailsByTeam(
    request: NflV3Scores.NflV3ScoresPlayerDetailsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerDetail[], NflV3Scores.NflV3ScoresPlayerDetailsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/Players/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerDetailSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresPlayerDetailsByTeamError,
      },
      options,
    );
  }

  nflV3ScoresPlayerGameLogsBySeason(
    request: NflV3Scores.NflV3ScoresPlayerGameLogsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame[], NflV3Scores.NflV3ScoresPlayerGameLogsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nfl/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "teamid", value: request.teamid, schema: s.string() },
          { name: "numberofgames", value: request.numberofgames, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamGameSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresPlayerGameLogsBySeasonError,
      },
      options,
    );
  }

  nflV3ScoresPlayerProfilesAll(
    request: NflV3Scores.NflV3ScoresPlayerProfilesAllRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic[], NflV3Scores.NflV3ScoresPlayerProfilesAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/PlayersByAvailable"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasicSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresPlayerProfilesAllError,
      },
      options,
    );
  }

  nflV3ScoresPlayerProfilesByFreeAgent(
    request: NflV3Scores.NflV3ScoresPlayerProfilesByFreeAgentRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic[], NflV3Scores.NflV3ScoresPlayerProfilesByFreeAgentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/PlayersByFreeAgents"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasicSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresPlayerProfilesByFreeAgentError,
      },
      options,
    );
  }

  nflV3ScoresPlayerProfilesByRookieDraftYear(
    request: NflV3Scores.NflV3ScoresPlayerProfilesByRookieDraftYearRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic[], NflV3Scores.NflV3ScoresPlayerProfilesByRookieDraftYearError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/PlayersByRookieDraftYear/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasicSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresPlayerProfilesByRookieDraftYearError,
      },
      options,
    );
  }

  nflV3ScoresPlayerProfilesByTeam(
    request: NflV3Scores.NflV3ScoresPlayerProfilesByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic[], NflV3Scores.NflV3ScoresPlayerProfilesByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/PlayersBasic/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasicSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresPlayerProfilesByTeamError,
      },
      options,
    );
  }

  nflV3ScoresReferees(
    request: NflV3Scores.NflV3ScoresRefereesRequest,
    options?: RequestOptions,
  ): ApiPromise<Referee[], NflV3Scores.NflV3ScoresRefereesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/Referees"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => refereeSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresRefereesError,
      },
      options,
    );
  }

  nflV3ScoresSchedules(
    request: NflV3Scores.NflV3ScoresSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<Schedule[], NflV3Scores.NflV3ScoresSchedulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/Schedules/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scheduleSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresSchedulesError,
      },
      options,
    );
  }

  nflV3ScoresSchedulesBasic(
    request: NflV3Scores.NflV3ScoresSchedulesBasicRequest,
    options?: RequestOptions,
  ): ApiPromise<ScheduleBasic[], NflV3Scores.NflV3ScoresSchedulesBasicError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/SchedulesBasic/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scheduleBasicSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresSchedulesBasicError,
      },
      options,
    );
  }

  nflV3ScoresScoresByWeekSimulation(
    request: NflV3Scores.NflV3ScoresScoresByWeekSimulationRequest,
    options?: RequestOptions,
  ): ApiPromise<Score[], NflV3Scores.NflV3ScoresScoresByWeekSimulationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/SimulatedScores/{numberofplays}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "numberofplays", value: request.numberofplays, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresScoresByWeekSimulationError,
      },
      options,
    );
  }

  nflV3ScoresSeasonCurrent(
    request: NflV3Scores.NflV3ScoresSeasonCurrentRequest,
    options?: RequestOptions,
  ): ApiPromise<number | null, NflV3Scores.NflV3ScoresSeasonCurrentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/CurrentSeason"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.nullable(s.number()) },
        errorFactory: NflV3Scores.NflV3ScoresSeasonCurrentError,
      },
      options,
    );
  }

  nflV3ScoresSeasonLastCompleted(
    request: NflV3Scores.NflV3ScoresSeasonLastCompletedRequest,
    options?: RequestOptions,
  ): ApiPromise<number | null, NflV3Scores.NflV3ScoresSeasonLastCompletedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/LastCompletedSeason"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.nullable(s.number()) },
        errorFactory: NflV3Scores.NflV3ScoresSeasonLastCompletedError,
      },
      options,
    );
  }

  nflV3ScoresSeasonUpcoming(
    request: NflV3Scores.NflV3ScoresSeasonUpcomingRequest,
    options?: RequestOptions,
  ): ApiPromise<number | null, NflV3Scores.NflV3ScoresSeasonUpcomingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/UpcomingSeason"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.nullable(s.number()) },
        errorFactory: NflV3Scores.NflV3ScoresSeasonUpcomingError,
      },
      options,
    );
  }

  nflV3ScoresStadiums(
    request: NflV3Scores.NflV3ScoresStadiumsRequest,
    options?: RequestOptions,
  ): ApiPromise<Stadium[], NflV3Scores.NflV3ScoresStadiumsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/Stadiums"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => stadiumSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresStadiumsError,
      },
      options,
    );
  }

  nflV3ScoresStandings(
    request: NflV3Scores.NflV3ScoresStandingsRequest,
    options?: RequestOptions,
  ): ApiPromise<Standing[], NflV3Scores.NflV3ScoresStandingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/Standings/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => standingSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresStandingsError,
      },
      options,
    );
  }

  nflV3ScoresTeamGameStatsLiveFinal(
    request: NflV3Scores.NflV3ScoresTeamGameStatsLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame[], NflV3Scores.NflV3ScoresTeamGameStatsLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/TeamGameStats/{season}/{week}"),
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
        errorFactory: NflV3Scores.NflV3ScoresTeamGameStatsLiveFinalError,
      },
      options,
    );
  }

  nflV3ScoresTeamProfilesAll(
    request: NflV3Scores.NflV3ScoresTeamProfilesAllRequest,
    options?: RequestOptions,
  ): ApiPromise<Team[], NflV3Scores.NflV3ScoresTeamProfilesAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/AllTeams"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresTeamProfilesAllError,
      },
      options,
    );
  }

  nflV3ScoresTeamProfilesByActive(
    request: NflV3Scores.NflV3ScoresTeamProfilesByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Team[], NflV3Scores.NflV3ScoresTeamProfilesByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/Teams"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresTeamProfilesByActiveError,
      },
      options,
    );
  }

  nflV3ScoresTeamProfilesBySeason(
    request: NflV3Scores.NflV3ScoresTeamProfilesBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<Team[], NflV3Scores.NflV3ScoresTeamProfilesBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/Teams/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresTeamProfilesBySeasonError,
      },
      options,
    );
  }

  nflV3ScoresTeamProfilesBasicAll(
    request: NflV3Scores.NflV3ScoresTeamProfilesBasicAllRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamBasic[], NflV3Scores.NflV3ScoresTeamProfilesBasicAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/TeamsBasic"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamBasicSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresTeamProfilesBasicAllError,
      },
      options,
    );
  }

  nflV3ScoresTeamSeasonStats(
    request: NflV3Scores.NflV3ScoresTeamSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamSeason[], NflV3Scores.NflV3ScoresTeamSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/TeamSeasonStats/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamSeasonSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresTeamSeasonStatsError,
      },
      options,
    );
  }

  nflV3ScoresTimeframes(
    request: NflV3Scores.NflV3ScoresTimeframesRequest,
    options?: RequestOptions,
  ): ApiPromise<Timeframe[], NflV3Scores.NflV3ScoresTimeframesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/Timeframes/{type}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "type", value: request.type, schema: s.defaulted(typeSchema, Type.Current) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => timeframeSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresTimeframesError,
      },
      options,
    );
  }

  nflV3ScoresTransactionsByDate(
    request: NflV3Scores.NflV3ScoresTransactionsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<Transaction[], NflV3Scores.NflV3ScoresTransactionsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/TransactionsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => transactionSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresTransactionsByDateError,
      },
      options,
    );
  }

  nflV3ScoresWeekCurrent(
    request: NflV3Scores.NflV3ScoresWeekCurrentRequest,
    options?: RequestOptions,
  ): ApiPromise<number | null, NflV3Scores.NflV3ScoresWeekCurrentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/CurrentWeek"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.nullable(s.number()) },
        errorFactory: NflV3Scores.NflV3ScoresWeekCurrentError,
      },
      options,
    );
  }

  nflV3ScoresWeekLastCompleted(
    request: NflV3Scores.NflV3ScoresWeekLastCompletedRequest,
    options?: RequestOptions,
  ): ApiPromise<number | null, NflV3Scores.NflV3ScoresWeekLastCompletedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/LastCompletedWeek"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.nullable(s.number()) },
        errorFactory: NflV3Scores.NflV3ScoresWeekLastCompletedError,
      },
      options,
    );
  }

  nflV3ScoresWeekUpcoming(
    request: NflV3Scores.NflV3ScoresWeekUpcomingRequest,
    options?: RequestOptions,
  ): ApiPromise<number | null, NflV3Scores.NflV3ScoresWeekUpcomingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/scores/{format}/UpcomingWeek"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.nullable(s.number()) },
        errorFactory: NflV3Scores.NflV3ScoresWeekUpcomingError,
      },
      options,
    );
  }
}

export namespace NflV3Scores {
  export type NflV3ScoresAreGamesInProgressRequest = {
    format?: Format;
  };

  export class NflV3ScoresAreGamesInProgressError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ScoresAreGamesInProgressError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresByeWeeksRequest = {
    format?: Format;
    season: string;
  };

  export class NflV3ScoresByeWeeksError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3ScoresByeWeeksError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresDepthChartsAllRequest = {
    format?: Format;
  };

  export class NflV3ScoresDepthChartsAllError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3ScoresDepthChartsAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresDepthChartsByActiveRequest = {
    format?: Format;
  };

  export class NflV3ScoresDepthChartsByActiveError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ScoresDepthChartsByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresDepthChartsByWeekRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class NflV3ScoresDepthChartsByWeekError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ScoresDepthChartsByWeekError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresGamesByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class NflV3ScoresGamesByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ScoresGamesByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresGamesByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class NflV3ScoresGamesByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ScoresGamesByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresGamesBySeasonLiveFinalRequest = {
    format?: Format;
    season: string;
  };

  export class NflV3ScoresGamesBySeasonLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ScoresGamesBySeasonLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresGamesByWeekFinalRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class NflV3ScoresGamesByWeekFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ScoresGamesByWeekFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresGamesByWeekLiveFinalRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class NflV3ScoresGamesByWeekLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ScoresGamesByWeekLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresGamesBasicByWeekFinalRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class NflV3ScoresGamesBasicByWeekFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ScoresGamesBasicByWeekFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresGamesBasicByWeekLiveFinalRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class NflV3ScoresGamesBasicByWeekLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ScoresGamesBasicByWeekLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresNewsRequest = {
    format?: Format;
  };

  export class NflV3ScoresNewsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3ScoresNewsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresNewsByDateRequest = {
    format?: Format;
    date: string;
  };

  export class NflV3ScoresNewsByDateError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3ScoresNewsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresNewsByTeamRequest = {
    format?: Format;
    team: string;
  };

  export class NflV3ScoresNewsByTeamError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3ScoresNewsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresPlayerDetailsAllRequest = {
    format?: Format;
  };

  export class NflV3ScoresPlayerDetailsAllError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ScoresPlayerDetailsAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresPlayerDetailsByFreeAgentsRequest = {
    format?: Format;
  };

  export class NflV3ScoresPlayerDetailsByFreeAgentsError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ScoresPlayerDetailsByFreeAgentsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresPlayerDetailsByRookieDraftYearRequest = {
    format?: Format;
    season: string;
  };

  export class NflV3ScoresPlayerDetailsByRookieDraftYearError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ScoresPlayerDetailsByRookieDraftYearError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresPlayerDetailsByTeamRequest = {
    format?: Format;
    team: string;
  };

  export class NflV3ScoresPlayerDetailsByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ScoresPlayerDetailsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresPlayerGameLogsBySeasonRequest = {
    format?: Format;
    season: string;
    teamid: string;
    numberofgames: string;
  };

  export class NflV3ScoresPlayerGameLogsBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ScoresPlayerGameLogsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresPlayerProfilesAllRequest = {
    format?: Format;
  };

  export class NflV3ScoresPlayerProfilesAllError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ScoresPlayerProfilesAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresPlayerProfilesByFreeAgentRequest = {
    format?: Format;
  };

  export class NflV3ScoresPlayerProfilesByFreeAgentError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ScoresPlayerProfilesByFreeAgentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresPlayerProfilesByRookieDraftYearRequest = {
    format?: Format;
    season: string;
  };

  export class NflV3ScoresPlayerProfilesByRookieDraftYearError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ScoresPlayerProfilesByRookieDraftYearError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresPlayerProfilesByTeamRequest = {
    format?: Format;
    team: string;
  };

  export class NflV3ScoresPlayerProfilesByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ScoresPlayerProfilesByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresRefereesRequest = {
    format?: Format;
  };

  export class NflV3ScoresRefereesError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3ScoresRefereesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresSchedulesRequest = {
    format?: Format;
    season: string;
  };

  export class NflV3ScoresSchedulesError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3ScoresSchedulesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresSchedulesBasicRequest = {
    format?: Format;
    season: string;
  };

  export class NflV3ScoresSchedulesBasicError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3ScoresSchedulesBasicError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresScoresByWeekSimulationRequest = {
    format?: Format;
    numberofplays: string;
  };

  export class NflV3ScoresScoresByWeekSimulationError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ScoresScoresByWeekSimulationError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresSeasonCurrentRequest = {
    format?: Format;
  };

  export class NflV3ScoresSeasonCurrentError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3ScoresSeasonCurrentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresSeasonLastCompletedRequest = {
    format?: Format;
  };

  export class NflV3ScoresSeasonLastCompletedError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ScoresSeasonLastCompletedError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresSeasonUpcomingRequest = {
    format?: Format;
  };

  export class NflV3ScoresSeasonUpcomingError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3ScoresSeasonUpcomingError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresStadiumsRequest = {
    format?: Format;
  };

  export class NflV3ScoresStadiumsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3ScoresStadiumsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresStandingsRequest = {
    format?: Format;
    season: string;
  };

  export class NflV3ScoresStandingsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3ScoresStandingsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresTeamGameStatsLiveFinalRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class NflV3ScoresTeamGameStatsLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ScoresTeamGameStatsLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresTeamProfilesAllRequest = {
    format?: Format;
  };

  export class NflV3ScoresTeamProfilesAllError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3ScoresTeamProfilesAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresTeamProfilesByActiveRequest = {
    format?: Format;
  };

  export class NflV3ScoresTeamProfilesByActiveError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ScoresTeamProfilesByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresTeamProfilesBySeasonRequest = {
    format?: Format;
    season: string;
  };

  export class NflV3ScoresTeamProfilesBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ScoresTeamProfilesBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresTeamProfilesBasicAllRequest = {
    format?: Format;
  };

  export class NflV3ScoresTeamProfilesBasicAllError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ScoresTeamProfilesBasicAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresTeamSeasonStatsRequest = {
    format?: Format;
    season: string;
  };

  export class NflV3ScoresTeamSeasonStatsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3ScoresTeamSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresTimeframesRequest = {
    format?: Format;
    type?: Type;
  };

  export class NflV3ScoresTimeframesError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3ScoresTimeframesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresTransactionsByDateRequest = {
    format?: Format;
    date: string;
  };

  export class NflV3ScoresTransactionsByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ScoresTransactionsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresWeekCurrentRequest = {
    format?: Format;
  };

  export class NflV3ScoresWeekCurrentError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3ScoresWeekCurrentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresWeekLastCompletedRequest = {
    format?: Format;
  };

  export class NflV3ScoresWeekLastCompletedError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ScoresWeekLastCompletedError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresWeekUpcomingRequest = {
    format?: Format;
  };

  export class NflV3ScoresWeekUpcomingError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3ScoresWeekUpcomingError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
