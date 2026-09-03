import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { conference1Schema, type Conference1 } from "../models/conference1.js";
import { Format, formatSchema } from "../models/format.js";
import { game9Schema, type Game9 } from "../models/game9.js";
import { playerBasic5Schema, type PlayerBasic5 } from "../models/player-basic5.js";
import { player5Schema, type Player5 } from "../models/player5.js";
import { scheduleBasic5Schema, type ScheduleBasic5 } from "../models/schedule-basic5.js";
import { scoreBasic5Schema, type ScoreBasic5 } from "../models/score-basic5.js";
import { season3Schema, type Season3 } from "../models/season3.js";
import { stadium1Schema, type Stadium1 } from "../models/stadium1.js";
import { teamBasic2Schema, type TeamBasic2 } from "../models/team-basic2.js";
import { teamGame5Schema, type TeamGame5 } from "../models/team-game5.js";
import { teamSeason5Schema, type TeamSeason5 } from "../models/team-season5.js";
import { team5Schema, type Team5 } from "../models/team5.js";
import { tournamentSchema, type Tournament } from "../models/tournament.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class CbbV3Scores {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  cbbV3ScoresAreGamesInProgress(
    request: CbbV3Scores.CbbV3ScoresAreGamesInProgressRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean, CbbV3Scores.CbbV3ScoresAreGamesInProgressError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/scores/{format}/AreAnyGamesInProgress"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.boolean() },
        errorFactory: CbbV3Scores.CbbV3ScoresAreGamesInProgressError,
      },
      options,
    );
  }

  cbbV3ScoresGamesByDateFinal(
    request: CbbV3Scores.CbbV3ScoresGamesByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game9[], CbbV3Scores.CbbV3ScoresGamesByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/scores/{format}/GamesByDateFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game9Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresGamesByDateFinalError,
      },
      options,
    );
  }

  cbbV3ScoresGamesByDateLiveFinal(
    request: CbbV3Scores.CbbV3ScoresGamesByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game9[], CbbV3Scores.CbbV3ScoresGamesByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/scores/{format}/GamesByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game9Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresGamesByDateLiveFinalError,
      },
      options,
    );
  }

  cbbV3ScoresGamesBySeason(
    request: CbbV3Scores.CbbV3ScoresGamesBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<Game9[], CbbV3Scores.CbbV3ScoresGamesBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/scores/{format}/Games/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game9Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresGamesBySeasonError,
      },
      options,
    );
  }

  cbbV3ScoresGamesBySeasonFinal(
    request: CbbV3Scores.CbbV3ScoresGamesBySeasonFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game9[], CbbV3Scores.CbbV3ScoresGamesBySeasonFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/scores/{format}/GamesFinal/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game9Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresGamesBySeasonFinalError,
      },
      options,
    );
  }

  cbbV3ScoresGamesBasicByDate(
    request: CbbV3Scores.CbbV3ScoresGamesBasicByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic5[], CbbV3Scores.CbbV3ScoresGamesBasicByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/scores/{format}/ScoresBasic/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasic5Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresGamesBasicByDateError,
      },
      options,
    );
  }

  cbbV3ScoresLeagueHierarchy(
    request: CbbV3Scores.CbbV3ScoresLeagueHierarchyRequest,
    options?: RequestOptions,
  ): ApiPromise<Conference1[], CbbV3Scores.CbbV3ScoresLeagueHierarchyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/scores/{format}/LeagueHierarchy"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => conference1Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresLeagueHierarchyError,
      },
      options,
    );
  }

  cbbV3ScoresPlayerDetailsByActive(
    request: CbbV3Scores.CbbV3ScoresPlayerDetailsByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Player5[], CbbV3Scores.CbbV3ScoresPlayerDetailsByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/scores/{format}/Players"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player5Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresPlayerDetailsByActiveError,
      },
      options,
    );
  }

  cbbV3ScoresPlayerDetailsByActive2(
    request: CbbV3Scores.CbbV3ScoresPlayerDetailsByActive2Request,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic5[], CbbV3Scores.CbbV3ScoresPlayerDetailsByActive2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/scores/{format}/PlayersByActive"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasic5Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresPlayerDetailsByActive2Error,
      },
      options,
    );
  }

  cbbV3ScoresPlayerDetailsByInjured(
    request: CbbV3Scores.CbbV3ScoresPlayerDetailsByInjuredRequest,
    options?: RequestOptions,
  ): ApiPromise<Player5[], CbbV3Scores.CbbV3ScoresPlayerDetailsByInjuredError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/scores/{format}/InjuredPlayers"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player5Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresPlayerDetailsByInjuredError,
      },
      options,
    );
  }

  cbbV3ScoresPlayerDetailsByTeam(
    request: CbbV3Scores.CbbV3ScoresPlayerDetailsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<Player5[], CbbV3Scores.CbbV3ScoresPlayerDetailsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/scores/{format}/Players/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player5Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresPlayerDetailsByTeamError,
      },
      options,
    );
  }

  cbbV3ScoresPlayerProfilesByTeam(
    request: CbbV3Scores.CbbV3ScoresPlayerProfilesByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic5[], CbbV3Scores.CbbV3ScoresPlayerProfilesByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/scores/{format}/PlayersBasic/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasic5Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresPlayerProfilesByTeamError,
      },
      options,
    );
  }

  cbbV3ScoresSchedulesByTeam(
    request: CbbV3Scores.CbbV3ScoresSchedulesByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<Game9[], CbbV3Scores.CbbV3ScoresSchedulesByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/scores/{format}/TeamSchedule/{season}/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game9Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresSchedulesByTeamError,
      },
      options,
    );
  }

  cbbV3ScoresSchedulesBasic(
    request: CbbV3Scores.CbbV3ScoresSchedulesBasicRequest,
    options?: RequestOptions,
  ): ApiPromise<ScheduleBasic5[], CbbV3Scores.CbbV3ScoresSchedulesBasicError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/scores/{format}/SchedulesBasic/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scheduleBasic5Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresSchedulesBasicError,
      },
      options,
    );
  }

  cbbV3ScoresSeasonCurrent(
    request: CbbV3Scores.CbbV3ScoresSeasonCurrentRequest,
    options?: RequestOptions,
  ): ApiPromise<Season3, CbbV3Scores.CbbV3ScoresSeasonCurrentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/scores/{format}/CurrentSeason"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: season3Schema },
        errorFactory: CbbV3Scores.CbbV3ScoresSeasonCurrentError,
      },
      options,
    );
  }

  cbbV3ScoresStadiums(
    request: CbbV3Scores.CbbV3ScoresStadiumsRequest,
    options?: RequestOptions,
  ): ApiPromise<Stadium1[], CbbV3Scores.CbbV3ScoresStadiumsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/scores/{format}/Stadiums"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => stadium1Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresStadiumsError,
      },
      options,
    );
  }

  cbbV3ScoresTeamGameLogsBySeason(
    request: CbbV3Scores.CbbV3ScoresTeamGameLogsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame5[], CbbV3Scores.CbbV3ScoresTeamGameLogsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/cbb/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame5Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresTeamGameLogsBySeasonError,
      },
      options,
    );
  }

  cbbV3ScoresTeamGameStatsByDateLiveFinal(
    request: CbbV3Scores.CbbV3ScoresTeamGameStatsByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame5[], CbbV3Scores.CbbV3ScoresTeamGameStatsByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/scores/{format}/TeamGameStatsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame5Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresTeamGameStatsByDateLiveFinalError,
      },
      options,
    );
  }

  cbbV3ScoresTeamProfilesAll(
    request: CbbV3Scores.CbbV3ScoresTeamProfilesAllRequest,
    options?: RequestOptions,
  ): ApiPromise<Team5[], CbbV3Scores.CbbV3ScoresTeamProfilesAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/scores/{format}/teams"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => team5Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresTeamProfilesAllError,
      },
      options,
    );
  }

  cbbV3ScoresTeamSeasonStats(
    request: CbbV3Scores.CbbV3ScoresTeamSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamSeason5[], CbbV3Scores.CbbV3ScoresTeamSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/scores/{format}/TeamSeasonStats/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamSeason5Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresTeamSeasonStatsError,
      },
      options,
    );
  }

  cbbV3ScoresTeamsBasicAll(
    request: CbbV3Scores.CbbV3ScoresTeamsBasicAllRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamBasic2[], CbbV3Scores.CbbV3ScoresTeamsBasicAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/scores/{format}/TeamsBasic"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamBasic2Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresTeamsBasicAllError,
      },
      options,
    );
  }

  cbbV3ScoresTournamentHierarchy(
    request: CbbV3Scores.CbbV3ScoresTournamentHierarchyRequest,
    options?: RequestOptions,
  ): ApiPromise<Tournament, CbbV3Scores.CbbV3ScoresTournamentHierarchyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/scores/{format}/Tournament/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tournamentSchema },
        errorFactory: CbbV3Scores.CbbV3ScoresTournamentHierarchyError,
      },
      options,
    );
  }
}

export namespace CbbV3Scores {
  export type CbbV3ScoresAreGamesInProgressRequest = {
    format?: Format;
  };

  export class CbbV3ScoresAreGamesInProgressError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CbbV3ScoresAreGamesInProgressError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresGamesByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class CbbV3ScoresGamesByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CbbV3ScoresGamesByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresGamesByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class CbbV3ScoresGamesByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CbbV3ScoresGamesByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresGamesBySeasonRequest = {
    format?: Format;
    season: string;
  };

  export class CbbV3ScoresGamesBySeasonError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<CbbV3ScoresGamesBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresGamesBySeasonFinalRequest = {
    format?: Format;
    season: string;
  };

  export class CbbV3ScoresGamesBySeasonFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CbbV3ScoresGamesBySeasonFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresGamesBasicByDateRequest = {
    format?: Format;
    date: string;
  };

  export class CbbV3ScoresGamesBasicByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CbbV3ScoresGamesBasicByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresLeagueHierarchyRequest = {
    format?: Format;
  };

  export class CbbV3ScoresLeagueHierarchyError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<CbbV3ScoresLeagueHierarchyError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresPlayerDetailsByActiveRequest = {
    format?: Format;
  };

  export class CbbV3ScoresPlayerDetailsByActiveError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CbbV3ScoresPlayerDetailsByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresPlayerDetailsByActive2Request = {
    format?: Format;
  };

  export class CbbV3ScoresPlayerDetailsByActive2Error extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CbbV3ScoresPlayerDetailsByActive2Error> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresPlayerDetailsByInjuredRequest = {
    format?: Format;
  };

  export class CbbV3ScoresPlayerDetailsByInjuredError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CbbV3ScoresPlayerDetailsByInjuredError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresPlayerDetailsByTeamRequest = {
    format?: Format;
    team: string;
  };

  export class CbbV3ScoresPlayerDetailsByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CbbV3ScoresPlayerDetailsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresPlayerProfilesByTeamRequest = {
    format?: Format;
    team: string;
  };

  export class CbbV3ScoresPlayerProfilesByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CbbV3ScoresPlayerProfilesByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresSchedulesByTeamRequest = {
    format?: Format;
    season: string;
    team: string;
  };

  export class CbbV3ScoresSchedulesByTeamError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<CbbV3ScoresSchedulesByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresSchedulesBasicRequest = {
    format?: Format;
    season: string;
  };

  export class CbbV3ScoresSchedulesBasicError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<CbbV3ScoresSchedulesBasicError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresSeasonCurrentRequest = {
    format?: Format;
  };

  export class CbbV3ScoresSeasonCurrentError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<CbbV3ScoresSeasonCurrentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresStadiumsRequest = {
    format?: Format;
  };

  export class CbbV3ScoresStadiumsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<CbbV3ScoresStadiumsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresTeamGameLogsBySeasonRequest = {
    format?: Format;
    season: string;
    teamid: string;
    numberofgames: string;
  };

  export class CbbV3ScoresTeamGameLogsBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CbbV3ScoresTeamGameLogsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresTeamGameStatsByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class CbbV3ScoresTeamGameStatsByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CbbV3ScoresTeamGameStatsByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresTeamProfilesAllRequest = {
    format?: Format;
  };

  export class CbbV3ScoresTeamProfilesAllError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<CbbV3ScoresTeamProfilesAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresTeamSeasonStatsRequest = {
    format?: Format;
    season: string;
  };

  export class CbbV3ScoresTeamSeasonStatsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<CbbV3ScoresTeamSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresTeamsBasicAllRequest = {
    format?: Format;
  };

  export class CbbV3ScoresTeamsBasicAllError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<CbbV3ScoresTeamsBasicAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresTournamentHierarchyRequest = {
    format?: Format;
    season: string;
  };

  export class CbbV3ScoresTournamentHierarchyError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CbbV3ScoresTournamentHierarchyError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
