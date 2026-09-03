import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { Format, formatSchema } from "../models/format.js";
import { gameSchema, type Game } from "../models/game.js";
import { newsSchema, type News } from "../models/news.js";
import { playerBasic1Schema, type PlayerBasic1 } from "../models/player-basic1.js";
import { player1Schema, type Player1 } from "../models/player1.js";
import { referee1Schema, type Referee1 } from "../models/referee1.js";
import { scheduleBasic1Schema, type ScheduleBasic1 } from "../models/schedule-basic1.js";
import { scoreBasic1Schema, type ScoreBasic1 } from "../models/score-basic1.js";
import { seasonSchema, type Season } from "../models/season.js";
import { stadium1Schema, type Stadium1 } from "../models/stadium1.js";
import { standing1Schema, type Standing1 } from "../models/standing1.js";
import { teamDepthChart1Schema, type TeamDepthChart1 } from "../models/team-depth-chart1.js";
import { teamGame1Schema, type TeamGame1 } from "../models/team-game1.js";
import { teamSeason1Schema, type TeamSeason1 } from "../models/team-season1.js";
import { team1Schema, type Team1 } from "../models/team1.js";
import { transactionSchema, type Transaction } from "../models/transaction.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class NbaV3Scores {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  nbaV3ScoresAreGamesInProgress(
    request: NbaV3Scores.NbaV3ScoresAreGamesInProgressRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean, NbaV3Scores.NbaV3ScoresAreGamesInProgressError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/scores/{format}/AreAnyGamesInProgress"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.boolean() },
        errorFactory: NbaV3Scores.NbaV3ScoresAreGamesInProgressError,
      },
      options,
    );
  }

  nbaV3ScoresDepthCharts(
    request: NbaV3Scores.NbaV3ScoresDepthChartsRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamDepthChart1[], NbaV3Scores.NbaV3ScoresDepthChartsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/scores/{format}/DepthCharts"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamDepthChart1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresDepthChartsError,
      },
      options,
    );
  }

  nbaV3ScoresGamesByDateFinal(
    request: NbaV3Scores.NbaV3ScoresGamesByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game[], NbaV3Scores.NbaV3ScoresGamesByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/scores/{format}/GamesByDateFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameSchema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresGamesByDateFinalError,
      },
      options,
    );
  }

  nbaV3ScoresGamesByDateLiveFinal(
    request: NbaV3Scores.NbaV3ScoresGamesByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game[], NbaV3Scores.NbaV3ScoresGamesByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/scores/{format}/GamesByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameSchema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresGamesByDateLiveFinalError,
      },
      options,
    );
  }

  nbaV3ScoresGamesBasicByDateFinal(
    request: NbaV3Scores.NbaV3ScoresGamesBasicByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic1[], NbaV3Scores.NbaV3ScoresGamesBasicByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/scores/{format}/ScoresBasicFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasic1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresGamesBasicByDateFinalError,
      },
      options,
    );
  }

  nbaV3ScoresGamesBasicByDateLiveFinal(
    request: NbaV3Scores.NbaV3ScoresGamesBasicByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic1[], NbaV3Scores.NbaV3ScoresGamesBasicByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/scores/{format}/ScoresBasic/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasic1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresGamesBasicByDateLiveFinalError,
      },
      options,
    );
  }

  nbaV3ScoresNews(
    request: NbaV3Scores.NbaV3ScoresNewsRequest,
    options?: RequestOptions,
  ): ApiPromise<News[], NbaV3Scores.NbaV3ScoresNewsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/scores/{format}/News"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => newsSchema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresNewsError,
      },
      options,
    );
  }

  nbaV3ScoresNewsByDate(
    request: NbaV3Scores.NbaV3ScoresNewsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<News[], NbaV3Scores.NbaV3ScoresNewsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/scores/{format}/NewsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => newsSchema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresNewsByDateError,
      },
      options,
    );
  }

  nbaV3ScoresPlayerDetailsByActive(
    request: NbaV3Scores.NbaV3ScoresPlayerDetailsByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Player1[], NbaV3Scores.NbaV3ScoresPlayerDetailsByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/scores/{format}/Players"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresPlayerDetailsByActiveError,
      },
      options,
    );
  }

  nbaV3ScoresPlayerDetailsByFreeAgent(
    request: NbaV3Scores.NbaV3ScoresPlayerDetailsByFreeAgentRequest,
    options?: RequestOptions,
  ): ApiPromise<Player1[], NbaV3Scores.NbaV3ScoresPlayerDetailsByFreeAgentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/scores/{format}/FreeAgents"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresPlayerDetailsByFreeAgentError,
      },
      options,
    );
  }

  nbaV3ScoresPlayerDetailsByTeam(
    request: NbaV3Scores.NbaV3ScoresPlayerDetailsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<Player1[], NbaV3Scores.NbaV3ScoresPlayerDetailsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/scores/{format}/Players/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresPlayerDetailsByTeamError,
      },
      options,
    );
  }

  nbaV3ScoresPlayerProfilesByActive(
    request: NbaV3Scores.NbaV3ScoresPlayerProfilesByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic1[], NbaV3Scores.NbaV3ScoresPlayerProfilesByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/scores/{format}/PlayersActiveBasic"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasic1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresPlayerProfilesByActiveError,
      },
      options,
    );
  }

  nbaV3ScoresPlayerProfilesByFreeAgent(
    request: NbaV3Scores.NbaV3ScoresPlayerProfilesByFreeAgentRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic1[], NbaV3Scores.NbaV3ScoresPlayerProfilesByFreeAgentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/scores/{format}/PlayersByFreeAgents"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasic1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresPlayerProfilesByFreeAgentError,
      },
      options,
    );
  }

  nbaV3ScoresPlayersProfilesByTeam(
    request: NbaV3Scores.NbaV3ScoresPlayersProfilesByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic1[], NbaV3Scores.NbaV3ScoresPlayersProfilesByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/scores/{format}/PlayersBasic/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasic1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresPlayersProfilesByTeamError,
      },
      options,
    );
  }

  nbaV3ScoresReferees(
    request: NbaV3Scores.NbaV3ScoresRefereesRequest,
    options?: RequestOptions,
  ): ApiPromise<Referee1[], NbaV3Scores.NbaV3ScoresRefereesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/scores/{format}/Referees"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => referee1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresRefereesError,
      },
      options,
    );
  }

  nbaV3ScoresSchedules(
    request: NbaV3Scores.NbaV3ScoresSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<Game[], NbaV3Scores.NbaV3ScoresSchedulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/scores/{format}/Games/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameSchema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresSchedulesError,
      },
      options,
    );
  }

  nbaV3ScoresSchedulesBasic(
    request: NbaV3Scores.NbaV3ScoresSchedulesBasicRequest,
    options?: RequestOptions,
  ): ApiPromise<ScheduleBasic1[], NbaV3Scores.NbaV3ScoresSchedulesBasicError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/scores/{format}/SchedulesBasic/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scheduleBasic1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresSchedulesBasicError,
      },
      options,
    );
  }

  nbaV3ScoresSeasonCurrent(
    request: NbaV3Scores.NbaV3ScoresSeasonCurrentRequest,
    options?: RequestOptions,
  ): ApiPromise<Season, NbaV3Scores.NbaV3ScoresSeasonCurrentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/scores/{format}/CurrentSeason"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: seasonSchema },
        errorFactory: NbaV3Scores.NbaV3ScoresSeasonCurrentError,
      },
      options,
    );
  }

  nbaV3ScoresStadiums(
    request: NbaV3Scores.NbaV3ScoresStadiumsRequest,
    options?: RequestOptions,
  ): ApiPromise<Stadium1[], NbaV3Scores.NbaV3ScoresStadiumsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/scores/{format}/Stadiums"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => stadium1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresStadiumsError,
      },
      options,
    );
  }

  nbaV3ScoresStandings(
    request: NbaV3Scores.NbaV3ScoresStandingsRequest,
    options?: RequestOptions,
  ): ApiPromise<Standing1[], NbaV3Scores.NbaV3ScoresStandingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/scores/{format}/Standings/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => standing1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresStandingsError,
      },
      options,
    );
  }

  nbaV3ScoresTeamGameLogsBySeason(
    request: NbaV3Scores.NbaV3ScoresTeamGameLogsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame1[], NbaV3Scores.NbaV3ScoresTeamGameLogsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nba/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresTeamGameLogsBySeasonError,
      },
      options,
    );
  }

  nbaV3ScoresTeamGameStatsByDateLiveFinal(
    request: NbaV3Scores.NbaV3ScoresTeamGameStatsByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame1[], NbaV3Scores.NbaV3ScoresTeamGameStatsByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/scores/{format}/TeamGameStatsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresTeamGameStatsByDateLiveFinalError,
      },
      options,
    );
  }

  nbaV3ScoresTeamProfilesAll(
    request: NbaV3Scores.NbaV3ScoresTeamProfilesAllRequest,
    options?: RequestOptions,
  ): ApiPromise<Team1[], NbaV3Scores.NbaV3ScoresTeamProfilesAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/scores/{format}/AllTeams"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => team1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresTeamProfilesAllError,
      },
      options,
    );
  }

  nbaV3ScoresTeamProfilesByActive(
    request: NbaV3Scores.NbaV3ScoresTeamProfilesByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Team1[], NbaV3Scores.NbaV3ScoresTeamProfilesByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/scores/{format}/teams"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => team1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresTeamProfilesByActiveError,
      },
      options,
    );
  }

  nbaV3ScoresTeamProfilesBySeason(
    request: NbaV3Scores.NbaV3ScoresTeamProfilesBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<Team1[], NbaV3Scores.NbaV3ScoresTeamProfilesBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/scores/{format}/teams/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => team1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresTeamProfilesBySeasonError,
      },
      options,
    );
  }

  nbaV3ScoresTeamSeasonStats(
    request: NbaV3Scores.NbaV3ScoresTeamSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamSeason1[], NbaV3Scores.NbaV3ScoresTeamSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/scores/{format}/TeamSeasonStats/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamSeason1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresTeamSeasonStatsError,
      },
      options,
    );
  }

  nbaV3ScoresTransactions(
    request: NbaV3Scores.NbaV3ScoresTransactionsRequest,
    options?: RequestOptions,
  ): ApiPromise<Transaction[], NbaV3Scores.NbaV3ScoresTransactionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/scores/{format}/TransactionsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => transactionSchema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresTransactionsError,
      },
      options,
    );
  }
}

export namespace NbaV3Scores {
  export type NbaV3ScoresAreGamesInProgressRequest = {
    format?: Format;
  };

  export class NbaV3ScoresAreGamesInProgressError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3ScoresAreGamesInProgressError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresDepthChartsRequest = {
    format?: Format;
  };

  export class NbaV3ScoresDepthChartsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NbaV3ScoresDepthChartsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresGamesByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class NbaV3ScoresGamesByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3ScoresGamesByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresGamesByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class NbaV3ScoresGamesByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3ScoresGamesByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresGamesBasicByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class NbaV3ScoresGamesBasicByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3ScoresGamesBasicByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresGamesBasicByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class NbaV3ScoresGamesBasicByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3ScoresGamesBasicByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresNewsRequest = {
    format?: Format;
  };

  export class NbaV3ScoresNewsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NbaV3ScoresNewsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresNewsByDateRequest = {
    format?: Format;
    date: string;
  };

  export class NbaV3ScoresNewsByDateError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NbaV3ScoresNewsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresPlayerDetailsByActiveRequest = {
    format?: Format;
  };

  export class NbaV3ScoresPlayerDetailsByActiveError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3ScoresPlayerDetailsByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresPlayerDetailsByFreeAgentRequest = {
    format?: Format;
  };

  export class NbaV3ScoresPlayerDetailsByFreeAgentError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3ScoresPlayerDetailsByFreeAgentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresPlayerDetailsByTeamRequest = {
    format?: Format;
    team: string;
  };

  export class NbaV3ScoresPlayerDetailsByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3ScoresPlayerDetailsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresPlayerProfilesByActiveRequest = {
    format?: Format;
  };

  export class NbaV3ScoresPlayerProfilesByActiveError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3ScoresPlayerProfilesByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresPlayerProfilesByFreeAgentRequest = {
    format?: Format;
  };

  export class NbaV3ScoresPlayerProfilesByFreeAgentError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3ScoresPlayerProfilesByFreeAgentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresPlayersProfilesByTeamRequest = {
    format?: Format;
    team: string;
  };

  export class NbaV3ScoresPlayersProfilesByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3ScoresPlayersProfilesByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresRefereesRequest = {
    format?: Format;
  };

  export class NbaV3ScoresRefereesError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NbaV3ScoresRefereesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresSchedulesRequest = {
    format?: Format;
    season: string;
  };

  export class NbaV3ScoresSchedulesError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NbaV3ScoresSchedulesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresSchedulesBasicRequest = {
    format?: Format;
    season: string;
  };

  export class NbaV3ScoresSchedulesBasicError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NbaV3ScoresSchedulesBasicError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresSeasonCurrentRequest = {
    format?: Format;
  };

  export class NbaV3ScoresSeasonCurrentError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NbaV3ScoresSeasonCurrentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresStadiumsRequest = {
    format?: Format;
  };

  export class NbaV3ScoresStadiumsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NbaV3ScoresStadiumsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresStandingsRequest = {
    format?: Format;
    season: string;
  };

  export class NbaV3ScoresStandingsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NbaV3ScoresStandingsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresTeamGameLogsBySeasonRequest = {
    format?: Format;
    season: string;
    teamid: string;
    numberofgames: string;
  };

  export class NbaV3ScoresTeamGameLogsBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3ScoresTeamGameLogsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresTeamGameStatsByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class NbaV3ScoresTeamGameStatsByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3ScoresTeamGameStatsByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresTeamProfilesAllRequest = {
    format?: Format;
  };

  export class NbaV3ScoresTeamProfilesAllError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NbaV3ScoresTeamProfilesAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresTeamProfilesByActiveRequest = {
    format?: Format;
  };

  export class NbaV3ScoresTeamProfilesByActiveError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3ScoresTeamProfilesByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresTeamProfilesBySeasonRequest = {
    format?: Format;
    season: string;
  };

  export class NbaV3ScoresTeamProfilesBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3ScoresTeamProfilesBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresTeamSeasonStatsRequest = {
    format?: Format;
    season: string;
  };

  export class NbaV3ScoresTeamSeasonStatsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NbaV3ScoresTeamSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresTransactionsRequest = {
    format?: Format;
    date: string;
  };

  export class NbaV3ScoresTransactionsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NbaV3ScoresTransactionsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
