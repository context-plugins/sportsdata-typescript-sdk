import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { conferenceSchema, type Conference } from "../models/conference.js";
import { Format, formatSchema } from "../models/format.js";
import { game8Schema, type Game8 } from "../models/game8.js";
import { playerBasic4Schema, type PlayerBasic4 } from "../models/player-basic4.js";
import { player4Schema, type Player4 } from "../models/player4.js";
import { scheduleBasic4Schema, type ScheduleBasic4 } from "../models/schedule-basic4.js";
import { scoreBasic4Schema, type ScoreBasic4 } from "../models/score-basic4.js";
import { season2Schema, type Season2 } from "../models/season2.js";
import { stadium5Schema, type Stadium5 } from "../models/stadium5.js";
import { teamBasic1Schema, type TeamBasic1 } from "../models/team-basic1.js";
import { teamGame4Schema, type TeamGame4 } from "../models/team-game4.js";
import { teamSeason4Schema, type TeamSeason4 } from "../models/team-season4.js";
import { team4Schema, type Team4 } from "../models/team4.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class CfbV3Scores {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  cfbV3ScoresAreGamesInProgress(
    request: CfbV3Scores.CfbV3ScoresAreGamesInProgressRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean, CfbV3Scores.CfbV3ScoresAreGamesInProgressError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/scores/{format}/AreAnyGamesInProgress"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.boolean() },
        errorFactory: CfbV3Scores.CfbV3ScoresAreGamesInProgressError,
      },
      options,
    );
  }

  cfbV3ScoresConferenceHierarchy(
    request: CfbV3Scores.CfbV3ScoresConferenceHierarchyRequest,
    options?: RequestOptions,
  ): ApiPromise<Conference[], CfbV3Scores.CfbV3ScoresConferenceHierarchyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/scores/{format}/LeagueHierarchy"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => conferenceSchema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresConferenceHierarchyError,
      },
      options,
    );
  }

  cfbV3ScoresGamesByDateLiveFinal(
    request: CfbV3Scores.CfbV3ScoresGamesByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game8[], CfbV3Scores.CfbV3ScoresGamesByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/scores/{format}/GamesByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game8Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresGamesByDateLiveFinalError,
      },
      options,
    );
  }

  cfbV3ScoresGamesByWeekFinal(
    request: CfbV3Scores.CfbV3ScoresGamesByWeekFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game8[], CfbV3Scores.CfbV3ScoresGamesByWeekFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/scores/{format}/GamesByWeekFinal/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game8Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresGamesByWeekFinalError,
      },
      options,
    );
  }

  cfbV3ScoresGamesByWeekLiveFinal(
    request: CfbV3Scores.CfbV3ScoresGamesByWeekLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game8[], CfbV3Scores.CfbV3ScoresGamesByWeekLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/scores/{format}/GamesByWeek/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game8Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresGamesByWeekLiveFinalError,
      },
      options,
    );
  }

  cfbV3ScoresGamesBasicByDateLiveFinal(
    request: CfbV3Scores.CfbV3ScoresGamesBasicByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic4[], CfbV3Scores.CfbV3ScoresGamesBasicByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/scores/{format}/ScoresBasic/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasic4Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresGamesBasicByDateLiveFinalError,
      },
      options,
    );
  }

  cfbV3ScoresGamesBasicByWeekFinal(
    request: CfbV3Scores.CfbV3ScoresGamesBasicByWeekFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic4[], CfbV3Scores.CfbV3ScoresGamesBasicByWeekFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/scores/{format}/ScoresBasicFinal/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasic4Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresGamesBasicByWeekFinalError,
      },
      options,
    );
  }

  cfbV3ScoresGamesBasicByDateFinal(
    request: CfbV3Scores.CfbV3ScoresGamesBasicByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic4[], CfbV3Scores.CfbV3ScoresGamesBasicByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/scores/{format}/ScoresBasicFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasic4Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresGamesBasicByDateFinalError,
      },
      options,
    );
  }

  cfbV3ScoresGamesByDateFinal(
    request: CfbV3Scores.CfbV3ScoresGamesByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game8[], CfbV3Scores.CfbV3ScoresGamesByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/scores/{format}/GamesByDateFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game8Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresGamesByDateFinalError,
      },
      options,
    );
  }

  cfbV3ScoresPlayerDetailsByActive(
    request: CfbV3Scores.CfbV3ScoresPlayerDetailsByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Player4[], CfbV3Scores.CfbV3ScoresPlayerDetailsByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/scores/{format}/Players"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player4Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresPlayerDetailsByActiveError,
      },
      options,
    );
  }

  cfbV3ScoresPlayerDetailsByActive2(
    request: CfbV3Scores.CfbV3ScoresPlayerDetailsByActive2Request,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic4[], CfbV3Scores.CfbV3ScoresPlayerDetailsByActive2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/scores/{format}/PlayersByActive"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasic4Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresPlayerDetailsByActive2Error,
      },
      options,
    );
  }

  cfbV3ScoresPlayerDetailsByInjured(
    request: CfbV3Scores.CfbV3ScoresPlayerDetailsByInjuredRequest,
    options?: RequestOptions,
  ): ApiPromise<Player4[], CfbV3Scores.CfbV3ScoresPlayerDetailsByInjuredError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/scores/{format}/InjuredPlayers"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player4Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresPlayerDetailsByInjuredError,
      },
      options,
    );
  }

  cfbV3ScoresPlayerDetailsByTeam(
    request: CfbV3Scores.CfbV3ScoresPlayerDetailsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<Player4[], CfbV3Scores.CfbV3ScoresPlayerDetailsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/scores/{format}/Players/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player4Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresPlayerDetailsByTeamError,
      },
      options,
    );
  }

  cfbV3ScoresPlayerProfilesByTeam(
    request: CfbV3Scores.CfbV3ScoresPlayerProfilesByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic4[], CfbV3Scores.CfbV3ScoresPlayerProfilesByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/scores/{format}/PlayersBasic/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasic4Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresPlayerProfilesByTeamError,
      },
      options,
    );
  }

  cfbV3ScoresSchedules(
    request: CfbV3Scores.CfbV3ScoresSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<Game8[], CfbV3Scores.CfbV3ScoresSchedulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/scores/{format}/Games/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game8Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresSchedulesError,
      },
      options,
    );
  }

  cfbV3ScoresSchedulesBasic(
    request: CfbV3Scores.CfbV3ScoresSchedulesBasicRequest,
    options?: RequestOptions,
  ): ApiPromise<ScheduleBasic4[], CfbV3Scores.CfbV3ScoresSchedulesBasicError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/scores/{format}/SchedulesBasic/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scheduleBasic4Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresSchedulesBasicError,
      },
      options,
    );
  }

  cfbV3ScoresSeasonCurrent(
    request: CfbV3Scores.CfbV3ScoresSeasonCurrentRequest,
    options?: RequestOptions,
  ): ApiPromise<number, CfbV3Scores.CfbV3ScoresSeasonCurrentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/scores/{format}/CurrentSeason"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.number() },
        errorFactory: CfbV3Scores.CfbV3ScoresSeasonCurrentError,
      },
      options,
    );
  }

  cfbV3ScoresSeasonCurrentDetails(
    request: CfbV3Scores.CfbV3ScoresSeasonCurrentDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<Season2, CfbV3Scores.CfbV3ScoresSeasonCurrentDetailsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/scores/{format}/CurrentSeasonDetails"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: season2Schema },
        errorFactory: CfbV3Scores.CfbV3ScoresSeasonCurrentDetailsError,
      },
      options,
    );
  }

  cfbV3ScoresSeasonTypeCurrent(
    request: CfbV3Scores.CfbV3ScoresSeasonTypeCurrentRequest,
    options?: RequestOptions,
  ): ApiPromise<string | null, CfbV3Scores.CfbV3ScoresSeasonTypeCurrentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/scores/{format}/CurrentSeasonType"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.nullable(s.string()) },
        errorFactory: CfbV3Scores.CfbV3ScoresSeasonTypeCurrentError,
      },
      options,
    );
  }

  cfbV3ScoresStadiums(
    request: CfbV3Scores.CfbV3ScoresStadiumsRequest,
    options?: RequestOptions,
  ): ApiPromise<Stadium5[], CfbV3Scores.CfbV3ScoresStadiumsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/scores/{format}/Stadiums"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => stadium5Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresStadiumsError,
      },
      options,
    );
  }

  cfbV3ScoresTeamGameLogsBySeason(
    request: CfbV3Scores.CfbV3ScoresTeamGameLogsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame4[], CfbV3Scores.CfbV3ScoresTeamGameLogsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/cfb/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame4Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresTeamGameLogsBySeasonError,
      },
      options,
    );
  }

  cfbV3ScoresTeamGameStatsByWeekLiveFinal(
    request: CfbV3Scores.CfbV3ScoresTeamGameStatsByWeekLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame4[], CfbV3Scores.CfbV3ScoresTeamGameStatsByWeekLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/scores/{format}/TeamGameStatsByWeek/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame4Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresTeamGameStatsByWeekLiveFinalError,
      },
      options,
    );
  }

  cfbV3ScoresTeamProfilesAll(
    request: CfbV3Scores.CfbV3ScoresTeamProfilesAllRequest,
    options?: RequestOptions,
  ): ApiPromise<Team4[], CfbV3Scores.CfbV3ScoresTeamProfilesAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/scores/{format}/Teams"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => team4Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresTeamProfilesAllError,
      },
      options,
    );
  }

  cfbV3ScoresTeamSeasonStatsStandings(
    request: CfbV3Scores.CfbV3ScoresTeamSeasonStatsStandingsRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamSeason4[], CfbV3Scores.CfbV3ScoresTeamSeasonStatsStandingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/scores/{format}/TeamSeasonStats/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamSeason4Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresTeamSeasonStatsStandingsError,
      },
      options,
    );
  }

  cfbV3ScoresTeamsBasicAll(
    request: CfbV3Scores.CfbV3ScoresTeamsBasicAllRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamBasic1[], CfbV3Scores.CfbV3ScoresTeamsBasicAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/scores/{format}/TeamsBasic"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamBasic1Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresTeamsBasicAllError,
      },
      options,
    );
  }

  cfbV3ScoresWeekCurrent(
    request: CfbV3Scores.CfbV3ScoresWeekCurrentRequest,
    options?: RequestOptions,
  ): ApiPromise<number | null, CfbV3Scores.CfbV3ScoresWeekCurrentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/scores/{format}/CurrentWeek"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.nullable(s.number()) },
        errorFactory: CfbV3Scores.CfbV3ScoresWeekCurrentError,
      },
      options,
    );
  }
}

export namespace CfbV3Scores {
  export type CfbV3ScoresAreGamesInProgressRequest = {
    format?: Format;
  };

  export class CfbV3ScoresAreGamesInProgressError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3ScoresAreGamesInProgressError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresConferenceHierarchyRequest = {
    format?: Format;
  };

  export class CfbV3ScoresConferenceHierarchyError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3ScoresConferenceHierarchyError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresGamesByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class CfbV3ScoresGamesByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3ScoresGamesByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresGamesByWeekFinalRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class CfbV3ScoresGamesByWeekFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3ScoresGamesByWeekFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresGamesByWeekLiveFinalRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class CfbV3ScoresGamesByWeekLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3ScoresGamesByWeekLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresGamesBasicByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class CfbV3ScoresGamesBasicByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3ScoresGamesBasicByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresGamesBasicByWeekFinalRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class CfbV3ScoresGamesBasicByWeekFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3ScoresGamesBasicByWeekFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresGamesBasicByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class CfbV3ScoresGamesBasicByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3ScoresGamesBasicByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresGamesByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class CfbV3ScoresGamesByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3ScoresGamesByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresPlayerDetailsByActiveRequest = {
    format?: Format;
  };

  export class CfbV3ScoresPlayerDetailsByActiveError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3ScoresPlayerDetailsByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresPlayerDetailsByActive2Request = {
    format?: Format;
  };

  export class CfbV3ScoresPlayerDetailsByActive2Error extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3ScoresPlayerDetailsByActive2Error> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresPlayerDetailsByInjuredRequest = {
    format?: Format;
  };

  export class CfbV3ScoresPlayerDetailsByInjuredError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3ScoresPlayerDetailsByInjuredError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresPlayerDetailsByTeamRequest = {
    format?: Format;
    team: string;
  };

  export class CfbV3ScoresPlayerDetailsByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3ScoresPlayerDetailsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresPlayerProfilesByTeamRequest = {
    format?: Format;
    team: string;
  };

  export class CfbV3ScoresPlayerProfilesByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3ScoresPlayerProfilesByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresSchedulesRequest = {
    format?: Format;
    season: string;
  };

  export class CfbV3ScoresSchedulesError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<CfbV3ScoresSchedulesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresSchedulesBasicRequest = {
    format?: Format;
    season: string;
  };

  export class CfbV3ScoresSchedulesBasicError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<CfbV3ScoresSchedulesBasicError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresSeasonCurrentRequest = {
    format?: Format;
  };

  export class CfbV3ScoresSeasonCurrentError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<CfbV3ScoresSeasonCurrentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresSeasonCurrentDetailsRequest = {
    format?: Format;
  };

  export class CfbV3ScoresSeasonCurrentDetailsError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3ScoresSeasonCurrentDetailsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresSeasonTypeCurrentRequest = {
    format?: Format;
  };

  export class CfbV3ScoresSeasonTypeCurrentError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3ScoresSeasonTypeCurrentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresStadiumsRequest = {
    format?: Format;
  };

  export class CfbV3ScoresStadiumsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<CfbV3ScoresStadiumsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresTeamGameLogsBySeasonRequest = {
    format?: Format;
    season: string;
    teamid: string;
    numberofgames: string;
  };

  export class CfbV3ScoresTeamGameLogsBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3ScoresTeamGameLogsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresTeamGameStatsByWeekLiveFinalRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class CfbV3ScoresTeamGameStatsByWeekLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3ScoresTeamGameStatsByWeekLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresTeamProfilesAllRequest = {
    format?: Format;
  };

  export class CfbV3ScoresTeamProfilesAllError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<CfbV3ScoresTeamProfilesAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresTeamSeasonStatsStandingsRequest = {
    format?: Format;
    season: string;
  };

  export class CfbV3ScoresTeamSeasonStatsStandingsError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3ScoresTeamSeasonStatsStandingsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresTeamsBasicAllRequest = {
    format?: Format;
  };

  export class CfbV3ScoresTeamsBasicAllError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<CfbV3ScoresTeamsBasicAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresWeekCurrentRequest = {
    format?: Format;
  };

  export class CfbV3ScoresWeekCurrentError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<CfbV3ScoresWeekCurrentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
