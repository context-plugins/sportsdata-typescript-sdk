import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { Format, formatSchema } from "../models/format.js";
import { game6Schema, type Game6 } from "../models/game6.js";
import { newsSchema, type News } from "../models/news.js";
import { playerBasic2Schema, type PlayerBasic2 } from "../models/player-basic2.js";
import { player2Schema, type Player2 } from "../models/player2.js";
import { scheduleBasic2Schema, type ScheduleBasic2 } from "../models/schedule-basic2.js";
import { scoreBasic2Schema, type ScoreBasic2 } from "../models/score-basic2.js";
import { season1Schema, type Season1 } from "../models/season1.js";
import { stadium3Schema, type Stadium3 } from "../models/stadium3.js";
import { standing2Schema, type Standing2 } from "../models/standing2.js";
import { teamGame2Schema, type TeamGame2 } from "../models/team-game2.js";
import { teamSeason2Schema, type TeamSeason2 } from "../models/team-season2.js";
import { team2Schema, type Team2 } from "../models/team2.js";
import { transactionSchema, type Transaction } from "../models/transaction.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class MlbV3Scores {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  mlbV3ScoresAreGamesInProgress(
    request: MlbV3Scores.MlbV3ScoresAreGamesInProgressRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean, MlbV3Scores.MlbV3ScoresAreGamesInProgressError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/scores/{format}/AreAnyGamesInProgress"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.boolean() },
        errorFactory: MlbV3Scores.MlbV3ScoresAreGamesInProgressError,
      },
      options,
    );
  }

  mlbV3ScoresGamesByDateFinal(
    request: MlbV3Scores.MlbV3ScoresGamesByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game6[], MlbV3Scores.MlbV3ScoresGamesByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/scores/{format}/GamesByDateFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game6Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresGamesByDateFinalError,
      },
      options,
    );
  }

  mlbV3ScoresGamesByDateLiveFinal(
    request: MlbV3Scores.MlbV3ScoresGamesByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game6[], MlbV3Scores.MlbV3ScoresGamesByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/scores/{format}/GamesByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game6Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresGamesByDateLiveFinalError,
      },
      options,
    );
  }

  mlbV3ScoresGamesBasicByDateFinal(
    request: MlbV3Scores.MlbV3ScoresGamesBasicByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic2[], MlbV3Scores.MlbV3ScoresGamesBasicByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/scores/{format}/ScoresBasicFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasic2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresGamesBasicByDateFinalError,
      },
      options,
    );
  }

  mlbV3ScoresGamesBasicByDateLiveFinal(
    request: MlbV3Scores.MlbV3ScoresGamesBasicByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic2[], MlbV3Scores.MlbV3ScoresGamesBasicByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/scores/{format}/ScoresBasic/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasic2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresGamesBasicByDateLiveFinalError,
      },
      options,
    );
  }

  mlbV3ScoresNews(
    request: MlbV3Scores.MlbV3ScoresNewsRequest,
    options?: RequestOptions,
  ): ApiPromise<News[], MlbV3Scores.MlbV3ScoresNewsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/scores/{format}/News"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => newsSchema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresNewsError,
      },
      options,
    );
  }

  mlbV3ScoresNewsByDate(
    request: MlbV3Scores.MlbV3ScoresNewsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<News[], MlbV3Scores.MlbV3ScoresNewsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/scores/{format}/NewsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => newsSchema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresNewsByDateError,
      },
      options,
    );
  }

  mlbV3ScoresPlayerDetailsByActive(
    request: MlbV3Scores.MlbV3ScoresPlayerDetailsByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Player2[], MlbV3Scores.MlbV3ScoresPlayerDetailsByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/scores/{format}/Players"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresPlayerDetailsByActiveError,
      },
      options,
    );
  }

  mlbV3ScoresPlayerDetailsByFreeAgents(
    request: MlbV3Scores.MlbV3ScoresPlayerDetailsByFreeAgentsRequest,
    options?: RequestOptions,
  ): ApiPromise<Player2[], MlbV3Scores.MlbV3ScoresPlayerDetailsByFreeAgentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/scores/{format}/FreeAgents"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresPlayerDetailsByFreeAgentsError,
      },
      options,
    );
  }

  mlbV3ScoresPlayerProfilesByActive(
    request: MlbV3Scores.MlbV3ScoresPlayerProfilesByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic2[], MlbV3Scores.MlbV3ScoresPlayerProfilesByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/scores/{format}/PlayersByActive"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasic2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresPlayerProfilesByActiveError,
      },
      options,
    );
  }

  mlbV3ScoresPlayerProfilesByFreeAgents(
    request: MlbV3Scores.MlbV3ScoresPlayerProfilesByFreeAgentsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic2[], MlbV3Scores.MlbV3ScoresPlayerProfilesByFreeAgentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/scores/{format}/PlayersByFreeAgents"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasic2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresPlayerProfilesByFreeAgentsError,
      },
      options,
    );
  }

  mlbV3ScoresPlayerProfilesByTeam(
    request: MlbV3Scores.MlbV3ScoresPlayerProfilesByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic2[], MlbV3Scores.MlbV3ScoresPlayerProfilesByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/scores/{format}/PlayersBasic/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasic2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresPlayerProfilesByTeamError,
      },
      options,
    );
  }

  mlbV3ScoresPlayersDetailsByTeam(
    request: MlbV3Scores.MlbV3ScoresPlayersDetailsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<Player2[], MlbV3Scores.MlbV3ScoresPlayersDetailsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/scores/{format}/Players/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresPlayersDetailsByTeamError,
      },
      options,
    );
  }

  mlbV3ScoresSchedules(
    request: MlbV3Scores.MlbV3ScoresSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<Game6[], MlbV3Scores.MlbV3ScoresSchedulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/scores/{format}/Games/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game6Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresSchedulesError,
      },
      options,
    );
  }

  mlbV3ScoresSchedulesBasic(
    request: MlbV3Scores.MlbV3ScoresSchedulesBasicRequest,
    options?: RequestOptions,
  ): ApiPromise<ScheduleBasic2[], MlbV3Scores.MlbV3ScoresSchedulesBasicError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/scores/{format}/SchedulesBasic/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scheduleBasic2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresSchedulesBasicError,
      },
      options,
    );
  }

  mlbV3ScoresSeasonCurrent(
    request: MlbV3Scores.MlbV3ScoresSeasonCurrentRequest,
    options?: RequestOptions,
  ): ApiPromise<Season1, MlbV3Scores.MlbV3ScoresSeasonCurrentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/scores/{format}/CurrentSeason"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: season1Schema },
        errorFactory: MlbV3Scores.MlbV3ScoresSeasonCurrentError,
      },
      options,
    );
  }

  mlbV3ScoresStadiums(
    request: MlbV3Scores.MlbV3ScoresStadiumsRequest,
    options?: RequestOptions,
  ): ApiPromise<Stadium3[], MlbV3Scores.MlbV3ScoresStadiumsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/scores/{format}/Stadiums"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => stadium3Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresStadiumsError,
      },
      options,
    );
  }

  mlbV3ScoresStandings(
    request: MlbV3Scores.MlbV3ScoresStandingsRequest,
    options?: RequestOptions,
  ): ApiPromise<Standing2[], MlbV3Scores.MlbV3ScoresStandingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/scores/{format}/Standings/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => standing2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresStandingsError,
      },
      options,
    );
  }

  mlbV3ScoresTeamGameLogsBySeason(
    request: MlbV3Scores.MlbV3ScoresTeamGameLogsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame2[], MlbV3Scores.MlbV3ScoresTeamGameLogsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/mlb/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresTeamGameLogsBySeasonError,
      },
      options,
    );
  }

  mlbV3ScoresTeamGameStatsByDateFinal(
    request: MlbV3Scores.MlbV3ScoresTeamGameStatsByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame2[], MlbV3Scores.MlbV3ScoresTeamGameStatsByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/scores/{format}/TeamGameStatsByDateFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresTeamGameStatsByDateFinalError,
      },
      options,
    );
  }

  mlbV3ScoresTeamGameStatsByDateLiveFinal(
    request: MlbV3Scores.MlbV3ScoresTeamGameStatsByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame2[], MlbV3Scores.MlbV3ScoresTeamGameStatsByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/scores/{format}/TeamGameStatsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresTeamGameStatsByDateLiveFinalError,
      },
      options,
    );
  }

  mlbV3ScoresTeamProfilesAll(
    request: MlbV3Scores.MlbV3ScoresTeamProfilesAllRequest,
    options?: RequestOptions,
  ): ApiPromise<Team2[], MlbV3Scores.MlbV3ScoresTeamProfilesAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/scores/{format}/AllTeams"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => team2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresTeamProfilesAllError,
      },
      options,
    );
  }

  mlbV3ScoresTeamProfilesByActive(
    request: MlbV3Scores.MlbV3ScoresTeamProfilesByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Team2[], MlbV3Scores.MlbV3ScoresTeamProfilesByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/scores/{format}/teams"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => team2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresTeamProfilesByActiveError,
      },
      options,
    );
  }

  mlbV3ScoresTeamProfilesBySeason(
    request: MlbV3Scores.MlbV3ScoresTeamProfilesBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<Team2[], MlbV3Scores.MlbV3ScoresTeamProfilesBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/scores/{format}/teams/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => team2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresTeamProfilesBySeasonError,
      },
      options,
    );
  }

  mlbV3ScoresTeamSeasonStats(
    request: MlbV3Scores.MlbV3ScoresTeamSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamSeason2[], MlbV3Scores.MlbV3ScoresTeamSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/scores/{format}/TeamSeasonStats/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamSeason2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresTeamSeasonStatsError,
      },
      options,
    );
  }

  mlbV3ScoresTransactions(
    request: MlbV3Scores.MlbV3ScoresTransactionsRequest,
    options?: RequestOptions,
  ): ApiPromise<Transaction[], MlbV3Scores.MlbV3ScoresTransactionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/scores/{format}/TransactionsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => transactionSchema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresTransactionsError,
      },
      options,
    );
  }
}

export namespace MlbV3Scores {
  export type MlbV3ScoresAreGamesInProgressRequest = {
    format?: Format;
  };

  export class MlbV3ScoresAreGamesInProgressError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3ScoresAreGamesInProgressError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresGamesByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class MlbV3ScoresGamesByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3ScoresGamesByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresGamesByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class MlbV3ScoresGamesByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3ScoresGamesByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresGamesBasicByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class MlbV3ScoresGamesBasicByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3ScoresGamesBasicByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresGamesBasicByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class MlbV3ScoresGamesBasicByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3ScoresGamesBasicByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresNewsRequest = {
    format?: Format;
  };

  export class MlbV3ScoresNewsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<MlbV3ScoresNewsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresNewsByDateRequest = {
    format?: Format;
    date: string;
  };

  export class MlbV3ScoresNewsByDateError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<MlbV3ScoresNewsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresPlayerDetailsByActiveRequest = {
    format?: Format;
  };

  export class MlbV3ScoresPlayerDetailsByActiveError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3ScoresPlayerDetailsByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresPlayerDetailsByFreeAgentsRequest = {
    format?: Format;
  };

  export class MlbV3ScoresPlayerDetailsByFreeAgentsError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3ScoresPlayerDetailsByFreeAgentsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresPlayerProfilesByActiveRequest = {
    format?: Format;
  };

  export class MlbV3ScoresPlayerProfilesByActiveError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3ScoresPlayerProfilesByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresPlayerProfilesByFreeAgentsRequest = {
    format?: Format;
  };

  export class MlbV3ScoresPlayerProfilesByFreeAgentsError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3ScoresPlayerProfilesByFreeAgentsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresPlayerProfilesByTeamRequest = {
    format?: Format;
    team: string;
  };

  export class MlbV3ScoresPlayerProfilesByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3ScoresPlayerProfilesByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresPlayersDetailsByTeamRequest = {
    format?: Format;
    team: string;
  };

  export class MlbV3ScoresPlayersDetailsByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3ScoresPlayersDetailsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresSchedulesRequest = {
    format?: Format;
    season: string;
  };

  export class MlbV3ScoresSchedulesError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<MlbV3ScoresSchedulesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresSchedulesBasicRequest = {
    format?: Format;
    season: string;
  };

  export class MlbV3ScoresSchedulesBasicError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<MlbV3ScoresSchedulesBasicError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresSeasonCurrentRequest = {
    format?: Format;
  };

  export class MlbV3ScoresSeasonCurrentError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<MlbV3ScoresSeasonCurrentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresStadiumsRequest = {
    format?: Format;
  };

  export class MlbV3ScoresStadiumsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<MlbV3ScoresStadiumsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresStandingsRequest = {
    format?: Format;
    season: string;
  };

  export class MlbV3ScoresStandingsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<MlbV3ScoresStandingsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresTeamGameLogsBySeasonRequest = {
    format?: Format;
    season: string;
    teamid: string;
    numberofgames: string;
  };

  export class MlbV3ScoresTeamGameLogsBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3ScoresTeamGameLogsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresTeamGameStatsByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class MlbV3ScoresTeamGameStatsByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3ScoresTeamGameStatsByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresTeamGameStatsByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class MlbV3ScoresTeamGameStatsByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3ScoresTeamGameStatsByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresTeamProfilesAllRequest = {
    format?: Format;
  };

  export class MlbV3ScoresTeamProfilesAllError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<MlbV3ScoresTeamProfilesAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresTeamProfilesByActiveRequest = {
    format?: Format;
  };

  export class MlbV3ScoresTeamProfilesByActiveError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3ScoresTeamProfilesByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresTeamProfilesBySeasonRequest = {
    format?: Format;
    season: string;
  };

  export class MlbV3ScoresTeamProfilesBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3ScoresTeamProfilesBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresTeamSeasonStatsRequest = {
    format?: Format;
    season: string;
  };

  export class MlbV3ScoresTeamSeasonStatsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<MlbV3ScoresTeamSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresTransactionsRequest = {
    format?: Format;
    date: string;
  };

  export class MlbV3ScoresTransactionsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<MlbV3ScoresTransactionsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
