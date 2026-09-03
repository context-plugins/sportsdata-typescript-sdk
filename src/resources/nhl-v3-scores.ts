import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { Format, formatSchema } from "../models/format.js";
import { game7Schema, type Game7 } from "../models/game7.js";
import { news1Schema, type News1 } from "../models/news1.js";
import { playerBasic3Schema, type PlayerBasic3 } from "../models/player-basic3.js";
import { player3Schema, type Player3 } from "../models/player3.js";
import { referee1Schema, type Referee1 } from "../models/referee1.js";
import { scheduleBasic3Schema, type ScheduleBasic3 } from "../models/schedule-basic3.js";
import { scoreBasic3Schema, type ScoreBasic3 } from "../models/score-basic3.js";
import { seasonSchema, type Season } from "../models/season.js";
import { stadium1Schema, type Stadium1 } from "../models/stadium1.js";
import { standing3Schema, type Standing3 } from "../models/standing3.js";
import { teamGame3Schema, type TeamGame3 } from "../models/team-game3.js";
import { teamGoalieDepthChartSchema, type TeamGoalieDepthChart } from "../models/team-goalie-depth-chart.js";
import { teamSeason3Schema, type TeamSeason3 } from "../models/team-season3.js";
import { team3Schema, type Team3 } from "../models/team3.js";
import { transactionSchema, type Transaction } from "../models/transaction.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class NhlV3Scores {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  nhlV3ScoresAreGamesInProgress(
    request: NhlV3Scores.NhlV3ScoresAreGamesInProgressRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean, NhlV3Scores.NhlV3ScoresAreGamesInProgressError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/scores/{format}/AreAnyGamesInProgress"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.boolean() },
        errorFactory: NhlV3Scores.NhlV3ScoresAreGamesInProgressError,
      },
      options,
    );
  }

  nhlV3ScoresDepthChartsGoalies(
    request: NhlV3Scores.NhlV3ScoresDepthChartsGoaliesRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGoalieDepthChart[], NhlV3Scores.NhlV3ScoresDepthChartsGoaliesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/scores/{format}/GoalieDepthCharts"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamGoalieDepthChartSchema)) },
        errorFactory: NhlV3Scores.NhlV3ScoresDepthChartsGoaliesError,
      },
      options,
    );
  }

  nhlV3ScoresGamesByDateFinal(
    request: NhlV3Scores.NhlV3ScoresGamesByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game7[], NhlV3Scores.NhlV3ScoresGamesByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/scores/{format}/GamesByDateFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game7Schema)) },
        errorFactory: NhlV3Scores.NhlV3ScoresGamesByDateFinalError,
      },
      options,
    );
  }

  nhlV3ScoresGamesByDateLiveFinal(
    request: NhlV3Scores.NhlV3ScoresGamesByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game7[], NhlV3Scores.NhlV3ScoresGamesByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/scores/{format}/GamesByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game7Schema)) },
        errorFactory: NhlV3Scores.NhlV3ScoresGamesByDateLiveFinalError,
      },
      options,
    );
  }

  nhlV3ScoresGamesBasicByDateFinal(
    request: NhlV3Scores.NhlV3ScoresGamesBasicByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic3[], NhlV3Scores.NhlV3ScoresGamesBasicByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/scores/{format}/ScoresBasicFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasic3Schema)) },
        errorFactory: NhlV3Scores.NhlV3ScoresGamesBasicByDateFinalError,
      },
      options,
    );
  }

  nhlV3ScoresGamesBasicByDateLiveFinal(
    request: NhlV3Scores.NhlV3ScoresGamesBasicByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic3[], NhlV3Scores.NhlV3ScoresGamesBasicByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/scores/{format}/ScoresBasic/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasic3Schema)) },
        errorFactory: NhlV3Scores.NhlV3ScoresGamesBasicByDateLiveFinalError,
      },
      options,
    );
  }

  nhlV3ScoresNews(
    request: NhlV3Scores.NhlV3ScoresNewsRequest,
    options?: RequestOptions,
  ): ApiPromise<News1[], NhlV3Scores.NhlV3ScoresNewsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/scores/{format}/News"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => news1Schema)) },
        errorFactory: NhlV3Scores.NhlV3ScoresNewsError,
      },
      options,
    );
  }

  nhlV3ScoresNewsByDate(
    request: NhlV3Scores.NhlV3ScoresNewsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<News1[], NhlV3Scores.NhlV3ScoresNewsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/scores/{format}/NewsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => news1Schema)) },
        errorFactory: NhlV3Scores.NhlV3ScoresNewsByDateError,
      },
      options,
    );
  }

  nhlV3ScoresPlayerDetailsByActive(
    request: NhlV3Scores.NhlV3ScoresPlayerDetailsByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Player3[], NhlV3Scores.NhlV3ScoresPlayerDetailsByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/scores/{format}/Players"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player3Schema)) },
        errorFactory: NhlV3Scores.NhlV3ScoresPlayerDetailsByActiveError,
      },
      options,
    );
  }

  nhlV3ScoresPlayerDetailsByActive2(
    request: NhlV3Scores.NhlV3ScoresPlayerDetailsByActive2Request,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic3[], NhlV3Scores.NhlV3ScoresPlayerDetailsByActive2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/scores/{format}/PlayersByActive"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasic3Schema)) },
        errorFactory: NhlV3Scores.NhlV3ScoresPlayerDetailsByActive2Error,
      },
      options,
    );
  }

  nhlV3ScoresPlayerDetailsByFreeAgents(
    request: NhlV3Scores.NhlV3ScoresPlayerDetailsByFreeAgentsRequest,
    options?: RequestOptions,
  ): ApiPromise<Player3[], NhlV3Scores.NhlV3ScoresPlayerDetailsByFreeAgentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/scores/{format}/FreeAgents"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player3Schema)) },
        errorFactory: NhlV3Scores.NhlV3ScoresPlayerDetailsByFreeAgentsError,
      },
      options,
    );
  }

  nhlV3ScoresPlayerDetailsByFreeAgents2(
    request: NhlV3Scores.NhlV3ScoresPlayerDetailsByFreeAgents2Request,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic3[], NhlV3Scores.NhlV3ScoresPlayerDetailsByFreeAgents2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/scores/{format}/PlayersByFreeAgents"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasic3Schema)) },
        errorFactory: NhlV3Scores.NhlV3ScoresPlayerDetailsByFreeAgents2Error,
      },
      options,
    );
  }

  nhlV3ScoresPlayersDetailsByTeam(
    request: NhlV3Scores.NhlV3ScoresPlayersDetailsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<Player3[], NhlV3Scores.NhlV3ScoresPlayersDetailsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/scores/{format}/Players/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player3Schema)) },
        errorFactory: NhlV3Scores.NhlV3ScoresPlayersDetailsByTeamError,
      },
      options,
    );
  }

  nhlV3ScoresPlayersProfilesByTeam(
    request: NhlV3Scores.NhlV3ScoresPlayersProfilesByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic3[], NhlV3Scores.NhlV3ScoresPlayersProfilesByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/scores/{format}/PlayersBasic/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasic3Schema)) },
        errorFactory: NhlV3Scores.NhlV3ScoresPlayersProfilesByTeamError,
      },
      options,
    );
  }

  nhlV3ScoresReferees(
    request: NhlV3Scores.NhlV3ScoresRefereesRequest,
    options?: RequestOptions,
  ): ApiPromise<Referee1[], NhlV3Scores.NhlV3ScoresRefereesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/scores/{format}/Referees"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => referee1Schema)) },
        errorFactory: NhlV3Scores.NhlV3ScoresRefereesError,
      },
      options,
    );
  }

  nhlV3ScoresSchedules(
    request: NhlV3Scores.NhlV3ScoresSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<Game7[], NhlV3Scores.NhlV3ScoresSchedulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/scores/{format}/Games/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game7Schema)) },
        errorFactory: NhlV3Scores.NhlV3ScoresSchedulesError,
      },
      options,
    );
  }

  nhlV3ScoresSchedulesBasic(
    request: NhlV3Scores.NhlV3ScoresSchedulesBasicRequest,
    options?: RequestOptions,
  ): ApiPromise<ScheduleBasic3[], NhlV3Scores.NhlV3ScoresSchedulesBasicError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/scores/{format}/SchedulesBasic/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scheduleBasic3Schema)) },
        errorFactory: NhlV3Scores.NhlV3ScoresSchedulesBasicError,
      },
      options,
    );
  }

  nhlV3ScoresSeasonCurrent(
    request: NhlV3Scores.NhlV3ScoresSeasonCurrentRequest,
    options?: RequestOptions,
  ): ApiPromise<Season, NhlV3Scores.NhlV3ScoresSeasonCurrentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/scores/{format}/CurrentSeason"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: seasonSchema },
        errorFactory: NhlV3Scores.NhlV3ScoresSeasonCurrentError,
      },
      options,
    );
  }

  nhlV3ScoresStadiums(
    request: NhlV3Scores.NhlV3ScoresStadiumsRequest,
    options?: RequestOptions,
  ): ApiPromise<Stadium1[], NhlV3Scores.NhlV3ScoresStadiumsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/scores/{format}/Stadiums"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => stadium1Schema)) },
        errorFactory: NhlV3Scores.NhlV3ScoresStadiumsError,
      },
      options,
    );
  }

  nhlV3ScoresStandings(
    request: NhlV3Scores.NhlV3ScoresStandingsRequest,
    options?: RequestOptions,
  ): ApiPromise<Standing3[], NhlV3Scores.NhlV3ScoresStandingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/scores/{format}/Standings/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => standing3Schema)) },
        errorFactory: NhlV3Scores.NhlV3ScoresStandingsError,
      },
      options,
    );
  }

  nhlV3ScoresTeamGameLogsBySeason(
    request: NhlV3Scores.NhlV3ScoresTeamGameLogsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame3[], NhlV3Scores.NhlV3ScoresTeamGameLogsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nhl/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame3Schema)) },
        errorFactory: NhlV3Scores.NhlV3ScoresTeamGameLogsBySeasonError,
      },
      options,
    );
  }

  nhlV3ScoresTeamGameStatsByDateLiveFinal(
    request: NhlV3Scores.NhlV3ScoresTeamGameStatsByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame3[], NhlV3Scores.NhlV3ScoresTeamGameStatsByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/scores/{format}/TeamGameStatsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame3Schema)) },
        errorFactory: NhlV3Scores.NhlV3ScoresTeamGameStatsByDateLiveFinalError,
      },
      options,
    );
  }

  nhlV3ScoresTeamProfilesAll(
    request: NhlV3Scores.NhlV3ScoresTeamProfilesAllRequest,
    options?: RequestOptions,
  ): ApiPromise<Team3[], NhlV3Scores.NhlV3ScoresTeamProfilesAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/scores/{format}/AllTeams"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => team3Schema)) },
        errorFactory: NhlV3Scores.NhlV3ScoresTeamProfilesAllError,
      },
      options,
    );
  }

  nhlV3ScoresTeamProfilesByActive(
    request: NhlV3Scores.NhlV3ScoresTeamProfilesByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Team3[], NhlV3Scores.NhlV3ScoresTeamProfilesByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/scores/{format}/teams"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => team3Schema)) },
        errorFactory: NhlV3Scores.NhlV3ScoresTeamProfilesByActiveError,
      },
      options,
    );
  }

  nhlV3ScoresTeamProfilesBySeason(
    request: NhlV3Scores.NhlV3ScoresTeamProfilesBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<Team3[], NhlV3Scores.NhlV3ScoresTeamProfilesBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/scores/{format}/teams/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => team3Schema)) },
        errorFactory: NhlV3Scores.NhlV3ScoresTeamProfilesBySeasonError,
      },
      options,
    );
  }

  nhlV3ScoresTeamSeasonStats(
    request: NhlV3Scores.NhlV3ScoresTeamSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamSeason3[], NhlV3Scores.NhlV3ScoresTeamSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/scores/{format}/TeamSeasonStats/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamSeason3Schema)) },
        errorFactory: NhlV3Scores.NhlV3ScoresTeamSeasonStatsError,
      },
      options,
    );
  }

  nhlV3ScoresTransactions(
    request: NhlV3Scores.NhlV3ScoresTransactionsRequest,
    options?: RequestOptions,
  ): ApiPromise<Transaction[], NhlV3Scores.NhlV3ScoresTransactionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/scores/{format}/TransactionsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => transactionSchema)) },
        errorFactory: NhlV3Scores.NhlV3ScoresTransactionsError,
      },
      options,
    );
  }
}

export namespace NhlV3Scores {
  export type NhlV3ScoresAreGamesInProgressRequest = {
    format?: Format;
  };

  export class NhlV3ScoresAreGamesInProgressError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3ScoresAreGamesInProgressError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ScoresDepthChartsGoaliesRequest = {
    format?: Format;
  };

  export class NhlV3ScoresDepthChartsGoaliesError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3ScoresDepthChartsGoaliesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ScoresGamesByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class NhlV3ScoresGamesByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3ScoresGamesByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ScoresGamesByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class NhlV3ScoresGamesByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3ScoresGamesByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ScoresGamesBasicByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class NhlV3ScoresGamesBasicByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3ScoresGamesBasicByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ScoresGamesBasicByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class NhlV3ScoresGamesBasicByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3ScoresGamesBasicByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ScoresNewsRequest = {
    format?: Format;
  };

  export class NhlV3ScoresNewsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NhlV3ScoresNewsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ScoresNewsByDateRequest = {
    format?: Format;
    date: string;
  };

  export class NhlV3ScoresNewsByDateError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NhlV3ScoresNewsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ScoresPlayerDetailsByActiveRequest = {
    format?: Format;
  };

  export class NhlV3ScoresPlayerDetailsByActiveError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3ScoresPlayerDetailsByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ScoresPlayerDetailsByActive2Request = {
    format?: Format;
  };

  export class NhlV3ScoresPlayerDetailsByActive2Error extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3ScoresPlayerDetailsByActive2Error> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ScoresPlayerDetailsByFreeAgentsRequest = {
    format?: Format;
  };

  export class NhlV3ScoresPlayerDetailsByFreeAgentsError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3ScoresPlayerDetailsByFreeAgentsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ScoresPlayerDetailsByFreeAgents2Request = {
    format?: Format;
  };

  export class NhlV3ScoresPlayerDetailsByFreeAgents2Error extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3ScoresPlayerDetailsByFreeAgents2Error> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ScoresPlayersDetailsByTeamRequest = {
    format?: Format;
    team: string;
  };

  export class NhlV3ScoresPlayersDetailsByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3ScoresPlayersDetailsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ScoresPlayersProfilesByTeamRequest = {
    format?: Format;
    team: string;
  };

  export class NhlV3ScoresPlayersProfilesByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3ScoresPlayersProfilesByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ScoresRefereesRequest = {
    format?: Format;
  };

  export class NhlV3ScoresRefereesError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NhlV3ScoresRefereesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ScoresSchedulesRequest = {
    format?: Format;
    season: string;
  };

  export class NhlV3ScoresSchedulesError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NhlV3ScoresSchedulesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ScoresSchedulesBasicRequest = {
    format?: Format;
    season: string;
  };

  export class NhlV3ScoresSchedulesBasicError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NhlV3ScoresSchedulesBasicError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ScoresSeasonCurrentRequest = {
    format?: Format;
  };

  export class NhlV3ScoresSeasonCurrentError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NhlV3ScoresSeasonCurrentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ScoresStadiumsRequest = {
    format?: Format;
  };

  export class NhlV3ScoresStadiumsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NhlV3ScoresStadiumsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ScoresStandingsRequest = {
    format?: Format;
    season: string;
  };

  export class NhlV3ScoresStandingsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NhlV3ScoresStandingsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ScoresTeamGameLogsBySeasonRequest = {
    format?: Format;
    season: string;
    teamid: string;
    numberofgames: string;
  };

  export class NhlV3ScoresTeamGameLogsBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3ScoresTeamGameLogsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ScoresTeamGameStatsByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class NhlV3ScoresTeamGameStatsByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3ScoresTeamGameStatsByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ScoresTeamProfilesAllRequest = {
    format?: Format;
  };

  export class NhlV3ScoresTeamProfilesAllError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NhlV3ScoresTeamProfilesAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ScoresTeamProfilesByActiveRequest = {
    format?: Format;
  };

  export class NhlV3ScoresTeamProfilesByActiveError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3ScoresTeamProfilesByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ScoresTeamProfilesBySeasonRequest = {
    format?: Format;
    season: string;
  };

  export class NhlV3ScoresTeamProfilesBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3ScoresTeamProfilesBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ScoresTeamSeasonStatsRequest = {
    format?: Format;
    season: string;
  };

  export class NhlV3ScoresTeamSeasonStatsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NhlV3ScoresTeamSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ScoresTransactionsRequest = {
    format?: Format;
    date: string;
  };

  export class NhlV3ScoresTransactionsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NhlV3ScoresTransactionsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
