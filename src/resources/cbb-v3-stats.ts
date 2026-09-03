import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { boxScore4Schema, type BoxScore4 } from "../models/box-score4.js";
import { Format, formatSchema } from "../models/format.js";
import { playerGame5Schema, type PlayerGame5 } from "../models/player-game5.js";
import { playerSeason6Schema, type PlayerSeason6 } from "../models/player-season6.js";
import { teamGame5Schema, type TeamGame5 } from "../models/team-game5.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class CbbV3Stats {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  cbbV3StatsBoxScoreFinal(
    request: CbbV3Stats.CbbV3StatsBoxScoreFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore4, CbbV3Stats.CbbV3StatsBoxScoreFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/stats/{format}/BoxScoreFinal/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: boxScore4Schema },
        errorFactory: CbbV3Stats.CbbV3StatsBoxScoreFinalError,
      },
      options,
    );
  }

  cbbV3StatsBoxScoreLiveFinal(
    request: CbbV3Stats.CbbV3StatsBoxScoreLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore4, CbbV3Stats.CbbV3StatsBoxScoreLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/stats/{format}/BoxScore/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: boxScore4Schema },
        errorFactory: CbbV3Stats.CbbV3StatsBoxScoreLiveFinalError,
      },
      options,
    );
  }

  cbbV3StatsBoxScoresByDateFinal(
    request: CbbV3Stats.CbbV3StatsBoxScoresByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore4[], CbbV3Stats.CbbV3StatsBoxScoresByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/stats/{format}/BoxScoresFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore4Schema)) },
        errorFactory: CbbV3Stats.CbbV3StatsBoxScoresByDateFinalError,
      },
      options,
    );
  }

  cbbV3StatsBoxScoresByDateLiveFinal(
    request: CbbV3Stats.CbbV3StatsBoxScoresByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore4[], CbbV3Stats.CbbV3StatsBoxScoresByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/stats/{format}/BoxScores/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore4Schema)) },
        errorFactory: CbbV3Stats.CbbV3StatsBoxScoresByDateLiveFinalError,
      },
      options,
    );
  }

  cbbV3StatsBoxScoresDeltaByDate(
    request: CbbV3Stats.CbbV3StatsBoxScoresDeltaByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore4[], CbbV3Stats.CbbV3StatsBoxScoresDeltaByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/stats/{format}/BoxScoresDelta/{date}/{minutes}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
          { name: "minutes", value: request.minutes, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore4Schema)) },
        errorFactory: CbbV3Stats.CbbV3StatsBoxScoresDeltaByDateError,
      },
      options,
    );
  }

  cbbV3StatsPlayerGameLogsBySeason(
    request: CbbV3Stats.CbbV3StatsPlayerGameLogsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame5[], CbbV3Stats.CbbV3StatsPlayerGameLogsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/cbb/stats/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame5Schema)) },
        errorFactory: CbbV3Stats.CbbV3StatsPlayerGameLogsBySeasonError,
      },
      options,
    );
  }

  cbbV3StatsPlayerGameStatsByDateFinal(
    request: CbbV3Stats.CbbV3StatsPlayerGameStatsByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame5[], CbbV3Stats.CbbV3StatsPlayerGameStatsByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/stats/{format}/PlayerGameStatsByDateFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame5Schema)) },
        errorFactory: CbbV3Stats.CbbV3StatsPlayerGameStatsByDateFinalError,
      },
      options,
    );
  }

  cbbV3StatsPlayerGameStatsByDateLiveFinal(
    request: CbbV3Stats.CbbV3StatsPlayerGameStatsByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame5[], CbbV3Stats.CbbV3StatsPlayerGameStatsByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/stats/{format}/PlayerGameStatsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame5Schema)) },
        errorFactory: CbbV3Stats.CbbV3StatsPlayerGameStatsByDateLiveFinalError,
      },
      options,
    );
  }

  cbbV3StatsPlayerSeasonStats(
    request: CbbV3Stats.CbbV3StatsPlayerSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason6[], CbbV3Stats.CbbV3StatsPlayerSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/stats/{format}/PlayerSeasonStats/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason6Schema)) },
        errorFactory: CbbV3Stats.CbbV3StatsPlayerSeasonStatsError,
      },
      options,
    );
  }

  cbbV3StatsPlayerSeasonStatsByTeam(
    request: CbbV3Stats.CbbV3StatsPlayerSeasonStatsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason6[], CbbV3Stats.CbbV3StatsPlayerSeasonStatsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/stats/{format}/PlayerSeasonStatsByTeam/{season}/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason6Schema)) },
        errorFactory: CbbV3Stats.CbbV3StatsPlayerSeasonStatsByTeamError,
      },
      options,
    );
  }

  cbbV3StatsTeamGameStatsByDateFinal(
    request: CbbV3Stats.CbbV3StatsTeamGameStatsByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame5[], CbbV3Stats.CbbV3StatsTeamGameStatsByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cbb/stats/{format}/TeamGameStatsByDateFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame5Schema)) },
        errorFactory: CbbV3Stats.CbbV3StatsTeamGameStatsByDateFinalError,
      },
      options,
    );
  }
}

export namespace CbbV3Stats {
  export type CbbV3StatsBoxScoreFinalRequest = {
    format?: Format;
    gameid: string;
  };

  export class CbbV3StatsBoxScoreFinalError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<CbbV3StatsBoxScoreFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3StatsBoxScoreLiveFinalRequest = {
    format?: Format;
    gameid: string;
  };

  export class CbbV3StatsBoxScoreLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CbbV3StatsBoxScoreLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3StatsBoxScoresByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class CbbV3StatsBoxScoresByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CbbV3StatsBoxScoresByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3StatsBoxScoresByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class CbbV3StatsBoxScoresByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CbbV3StatsBoxScoresByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3StatsBoxScoresDeltaByDateRequest = {
    format?: Format;
    date: string;
    minutes: string;
  };

  export class CbbV3StatsBoxScoresDeltaByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CbbV3StatsBoxScoresDeltaByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3StatsPlayerGameLogsBySeasonRequest = {
    format?: Format;
    season: string;
    playerid: string;
    numberofgames: string;
  };

  export class CbbV3StatsPlayerGameLogsBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CbbV3StatsPlayerGameLogsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3StatsPlayerGameStatsByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class CbbV3StatsPlayerGameStatsByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CbbV3StatsPlayerGameStatsByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3StatsPlayerGameStatsByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class CbbV3StatsPlayerGameStatsByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CbbV3StatsPlayerGameStatsByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3StatsPlayerSeasonStatsRequest = {
    format?: Format;
    season: string;
  };

  export class CbbV3StatsPlayerSeasonStatsError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CbbV3StatsPlayerSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3StatsPlayerSeasonStatsByTeamRequest = {
    format?: Format;
    season: string;
    team: string;
  };

  export class CbbV3StatsPlayerSeasonStatsByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CbbV3StatsPlayerSeasonStatsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3StatsTeamGameStatsByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class CbbV3StatsTeamGameStatsByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CbbV3StatsTeamGameStatsByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
