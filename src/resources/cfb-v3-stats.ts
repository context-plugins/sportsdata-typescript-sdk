import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  cfbV3StatsBoxScoreFinal(
    request: CfbV3Stats.CfbV3StatsBoxScoreFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore3[], CfbV3Stats.CfbV3StatsBoxScoreFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/stats/{format}/BoxScoreFinal/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore3Schema)) },
        errorFactory: CfbV3Stats.CfbV3StatsBoxScoreFinalError,
      },
      options,
    );
  }

  cfbV3StatsBoxScoreLiveFinal(
    request: CfbV3Stats.CfbV3StatsBoxScoreLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore3[], CfbV3Stats.CfbV3StatsBoxScoreLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/stats/{format}/BoxScore/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore3Schema)) },
        errorFactory: CfbV3Stats.CfbV3StatsBoxScoreLiveFinalError,
      },
      options,
    );
  }

  cfbV3StatsBoxScoresByDateFinal(
    request: CfbV3Stats.CfbV3StatsBoxScoresByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore3[], CfbV3Stats.CfbV3StatsBoxScoresByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/stats/{format}/BoxScoresFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore3Schema)) },
        errorFactory: CfbV3Stats.CfbV3StatsBoxScoresByDateFinalError,
      },
      options,
    );
  }

  cfbV3StatsBoxScoresByDateLiveFinal(
    request: CfbV3Stats.CfbV3StatsBoxScoresByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore3[], CfbV3Stats.CfbV3StatsBoxScoresByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/stats/{format}/BoxScoresByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore3Schema)) },
        errorFactory: CfbV3Stats.CfbV3StatsBoxScoresByDateLiveFinalError,
      },
      options,
    );
  }

  cfbV3StatsBoxScoresByWeekFinal(
    request: CfbV3Stats.CfbV3StatsBoxScoresByWeekFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore3[], CfbV3Stats.CfbV3StatsBoxScoresByWeekFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/stats/{format}/BoxScoresByWeekFinal/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore3Schema)) },
        errorFactory: CfbV3Stats.CfbV3StatsBoxScoresByWeekFinalError,
      },
      options,
    );
  }

  cfbV3StatsBoxScoresByWeekLiveFinal(
    request: CfbV3Stats.CfbV3StatsBoxScoresByWeekLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore3[], CfbV3Stats.CfbV3StatsBoxScoresByWeekLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/stats/{format}/BoxScoresByWeek/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore3Schema)) },
        errorFactory: CfbV3Stats.CfbV3StatsBoxScoresByWeekLiveFinalError,
      },
      options,
    );
  }

  cfbV3StatsBoxScoresDeltaByWeek(
    request: CfbV3Stats.CfbV3StatsBoxScoresDeltaByWeekRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore3[], CfbV3Stats.CfbV3StatsBoxScoresDeltaByWeekError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/stats/{format}/BoxScoresByWeekDelta/{season}/{week}/{minutes}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore3Schema)) },
        errorFactory: CfbV3Stats.CfbV3StatsBoxScoresDeltaByWeekError,
      },
      options,
    );
  }

  cfbV3StatsPlayerGameLogsBySeason(
    request: CfbV3Stats.CfbV3StatsPlayerGameLogsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame4[], CfbV3Stats.CfbV3StatsPlayerGameLogsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/cfb/stats/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame4Schema)) },
        errorFactory: CfbV3Stats.CfbV3StatsPlayerGameLogsBySeasonError,
      },
      options,
    );
  }

  cfbV3StatsPlayerGameStatsByWeekFinal(
    request: CfbV3Stats.CfbV3StatsPlayerGameStatsByWeekFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame4[], CfbV3Stats.CfbV3StatsPlayerGameStatsByWeekFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/stats/{format}/PlayerGameStatsByWeekFinal/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame4Schema)) },
        errorFactory: CfbV3Stats.CfbV3StatsPlayerGameStatsByWeekFinalError,
      },
      options,
    );
  }

  cfbV3StatsPlayerGameStatsByWeekLiveFinal(
    request: CfbV3Stats.CfbV3StatsPlayerGameStatsByWeekLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame4[], CfbV3Stats.CfbV3StatsPlayerGameStatsByWeekLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/stats/{format}/PlayerGameStatsByWeek/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame4Schema)) },
        errorFactory: CfbV3Stats.CfbV3StatsPlayerGameStatsByWeekLiveFinalError,
      },
      options,
    );
  }

  cfbV3StatsPlayerSeasonStats(
    request: CfbV3Stats.CfbV3StatsPlayerSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason5[], CfbV3Stats.CfbV3StatsPlayerSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/stats/{format}/PlayerSeasonStats/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason5Schema)) },
        errorFactory: CfbV3Stats.CfbV3StatsPlayerSeasonStatsError,
      },
      options,
    );
  }

  cfbV3StatsPlayerSeasonStatsByTeam(
    request: CfbV3Stats.CfbV3StatsPlayerSeasonStatsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason5[], CfbV3Stats.CfbV3StatsPlayerSeasonStatsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/stats/{format}/PlayerSeasonStatsByTeam/{season}/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason5Schema)) },
        errorFactory: CfbV3Stats.CfbV3StatsPlayerSeasonStatsByTeamError,
      },
      options,
    );
  }

  cfbV3StatsTeamGameStatsByWeekFinal(
    request: CfbV3Stats.CfbV3StatsTeamGameStatsByWeekFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame4[], CfbV3Stats.CfbV3StatsTeamGameStatsByWeekFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/stats/{format}/TeamGameStatsByWeekFinal/{season}/{week}"),
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
        errorFactory: CfbV3Stats.CfbV3StatsTeamGameStatsByWeekFinalError,
      },
      options,
    );
  }
}

export namespace CfbV3Stats {
  export type CfbV3StatsBoxScoreFinalRequest = {
    format?: Format;
    gameid: string;
  };

  export class CfbV3StatsBoxScoreFinalError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<CfbV3StatsBoxScoreFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3StatsBoxScoreLiveFinalRequest = {
    format?: Format;
    gameid: string;
  };

  export class CfbV3StatsBoxScoreLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3StatsBoxScoreLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3StatsBoxScoresByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class CfbV3StatsBoxScoresByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3StatsBoxScoresByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3StatsBoxScoresByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class CfbV3StatsBoxScoresByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3StatsBoxScoresByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3StatsBoxScoresByWeekFinalRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class CfbV3StatsBoxScoresByWeekFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3StatsBoxScoresByWeekFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3StatsBoxScoresByWeekLiveFinalRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class CfbV3StatsBoxScoresByWeekLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3StatsBoxScoresByWeekLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3StatsBoxScoresDeltaByWeekRequest = {
    format?: Format;
    season: string;
    week: string;
    minutes: string;
  };

  export class CfbV3StatsBoxScoresDeltaByWeekError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3StatsBoxScoresDeltaByWeekError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3StatsPlayerGameLogsBySeasonRequest = {
    format?: Format;
    season: string;
    playerid: string;
    numberofgames: string;
  };

  export class CfbV3StatsPlayerGameLogsBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3StatsPlayerGameLogsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3StatsPlayerGameStatsByWeekFinalRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class CfbV3StatsPlayerGameStatsByWeekFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3StatsPlayerGameStatsByWeekFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3StatsPlayerGameStatsByWeekLiveFinalRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class CfbV3StatsPlayerGameStatsByWeekLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3StatsPlayerGameStatsByWeekLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3StatsPlayerSeasonStatsRequest = {
    format?: Format;
    season: string;
  };

  export class CfbV3StatsPlayerSeasonStatsError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3StatsPlayerSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3StatsPlayerSeasonStatsByTeamRequest = {
    format?: Format;
    season: string;
    team: string;
  };

  export class CfbV3StatsPlayerSeasonStatsByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3StatsPlayerSeasonStatsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3StatsTeamGameStatsByWeekFinalRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class CfbV3StatsTeamGameStatsByWeekFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3StatsTeamGameStatsByWeekFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
