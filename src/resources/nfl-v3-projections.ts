import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  dfsSlateWithOwnershipProjectionSchema,
  type DfsSlateWithOwnershipProjection,
} from "../models/dfs-slate-with-ownership-projection.js";
import { dfsSlateSchema, type DfsSlate } from "../models/dfs-slate.js";
import {
  fantasyDefenseGameProjectionSchema,
  type FantasyDefenseGameProjection,
} from "../models/fantasy-defense-game-projection.js";
import {
  fantasyDefenseSeasonProjectionSchema,
  type FantasyDefenseSeasonProjection,
} from "../models/fantasy-defense-season-projection.js";
import { Format, formatSchema } from "../models/format.js";
import { playerGameProjectionSchema, type PlayerGameProjection } from "../models/player-game-projection.js";
import {
  playerSeasonProjectionSchema,
  type PlayerSeasonProjection,
} from "../models/player-season-projection.js";
import { playerSchema, type Player } from "../models/player.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class NflV3Projections {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  nflV3ProjectionsDfsSlateOwnershipProjectionsBySlate(
    request: NflV3Projections.NflV3ProjectionsDfsSlateOwnershipProjectionsBySlateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    DfsSlateWithOwnershipProjection,
    NflV3Projections.NflV3ProjectionsDfsSlateOwnershipProjectionsBySlateError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nfl/projections/{format}/DfsSlateOwnershipProjectionsBySlateID/{slateId}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "slateId", value: request.slateId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dfsSlateWithOwnershipProjectionSchema },
        errorFactory: NflV3Projections.NflV3ProjectionsDfsSlateOwnershipProjectionsBySlateError,
      },
      options,
    );
  }

  nflV3ProjectionsDfsSlateOwnershipProjectionsUpcoming(
    request: NflV3Projections.NflV3ProjectionsDfsSlateOwnershipProjectionsUpcomingRequest,
    options?: RequestOptions,
  ): ApiPromise<
    DfsSlateWithOwnershipProjection[],
    NflV3Projections.NflV3ProjectionsDfsSlateOwnershipProjectionsUpcomingError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/projections/{format}/UpcomingDfsSlateOwnershipProjections"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dfsSlateWithOwnershipProjectionSchema)) },
        errorFactory: NflV3Projections.NflV3ProjectionsDfsSlateOwnershipProjectionsUpcomingError,
      },
      options,
    );
  }

  nflV3ProjectionsDfsSlatesByDate(
    request: NflV3Projections.NflV3ProjectionsDfsSlatesByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<DfsSlate[], NflV3Projections.NflV3ProjectionsDfsSlatesByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/projections/{format}/DfsSlatesByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dfsSlateSchema)) },
        errorFactory: NflV3Projections.NflV3ProjectionsDfsSlatesByDateError,
      },
      options,
    );
  }

  nflV3ProjectionsDfsSlatesByWeek(
    request: NflV3Projections.NflV3ProjectionsDfsSlatesByWeekRequest,
    options?: RequestOptions,
  ): ApiPromise<DfsSlate[], NflV3Projections.NflV3ProjectionsDfsSlatesByWeekError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/projections/{format}/DfsSlatesByWeek/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dfsSlateSchema)) },
        errorFactory: NflV3Projections.NflV3ProjectionsDfsSlatesByWeekError,
      },
      options,
    );
  }

  nflV3ProjectionsIdpProjectedPlayerGameStatsByTeam(
    request: NflV3Projections.NflV3ProjectionsIdpProjectedPlayerGameStatsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PlayerGameProjection[],
    NflV3Projections.NflV3ProjectionsIdpProjectedPlayerGameStatsByTeamError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nfl/projections/{format}/IdpPlayerGameProjectionStatsByTeam/{season}/{week}/{team}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameProjectionSchema)) },
        errorFactory: NflV3Projections.NflV3ProjectionsIdpProjectedPlayerGameStatsByTeamError,
      },
      options,
    );
  }

  nflV3ProjectionsIdpProjectedPlayerGameStatsByWeek(
    request: NflV3Projections.NflV3ProjectionsIdpProjectedPlayerGameStatsByWeekRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PlayerGameProjection[],
    NflV3Projections.NflV3ProjectionsIdpProjectedPlayerGameStatsByWeekError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nfl/projections/{format}/IdpPlayerGameProjectionStatsByWeek/{season}/{week}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameProjectionSchema)) },
        errorFactory: NflV3Projections.NflV3ProjectionsIdpProjectedPlayerGameStatsByWeekError,
      },
      options,
    );
  }

  nflV3ProjectionsPlayerDetailsByInjured(
    request: NflV3Projections.NflV3ProjectionsPlayerDetailsByInjuredRequest,
    options?: RequestOptions,
  ): ApiPromise<Player[], NflV3Projections.NflV3ProjectionsPlayerDetailsByInjuredError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/projections/{format}/InjuredPlayers"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSchema)) },
        errorFactory: NflV3Projections.NflV3ProjectionsPlayerDetailsByInjuredError,
      },
      options,
    );
  }

  nflV3ProjectionsProjectedFantasyDefenseGameStatsWithDfsSalaries(
    request: NflV3Projections.NflV3ProjectionsProjectedFantasyDefenseGameStatsWithDfsSalariesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    FantasyDefenseGameProjection[],
    NflV3Projections.NflV3ProjectionsProjectedFantasyDefenseGameStatsWithDfsSalariesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nfl/projections/{format}/FantasyDefenseProjectionsByGame/{season}/{week}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => fantasyDefenseGameProjectionSchema)) },
        errorFactory: NflV3Projections.NflV3ProjectionsProjectedFantasyDefenseGameStatsWithDfsSalariesError,
      },
      options,
    );
  }

  nflV3ProjectionsProjectedFantasyDefenseSeasonStatsWithAdp(
    request: NflV3Projections.NflV3ProjectionsProjectedFantasyDefenseSeasonStatsWithAdpRequest,
    options?: RequestOptions,
  ): ApiPromise<
    FantasyDefenseSeasonProjection[],
    NflV3Projections.NflV3ProjectionsProjectedFantasyDefenseSeasonStatsWithAdpError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/projections/{format}/FantasyDefenseProjectionsBySeason/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => fantasyDefenseSeasonProjectionSchema)) },
        errorFactory: NflV3Projections.NflV3ProjectionsProjectedFantasyDefenseSeasonStatsWithAdpError,
      },
      options,
    );
  }

  nflV3ProjectionsProjectedPlayerGameStatsByTeam(
    request: NflV3Projections.NflV3ProjectionsProjectedPlayerGameStatsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PlayerGameProjection[],
    NflV3Projections.NflV3ProjectionsProjectedPlayerGameStatsByTeamError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nfl/projections/{format}/PlayerGameProjectionStatsByTeam/{season}/{week}/{team}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameProjectionSchema)) },
        errorFactory: NflV3Projections.NflV3ProjectionsProjectedPlayerGameStatsByTeamError,
      },
      options,
    );
  }

  nflV3ProjectionsProjectedPlayerGameStatsByWeek(
    request: NflV3Projections.NflV3ProjectionsProjectedPlayerGameStatsByWeekRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PlayerGameProjection[],
    NflV3Projections.NflV3ProjectionsProjectedPlayerGameStatsByWeekError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nfl/projections/{format}/PlayerGameProjectionStatsByWeek/{season}/{week}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameProjectionSchema)) },
        errorFactory: NflV3Projections.NflV3ProjectionsProjectedPlayerGameStatsByWeekError,
      },
      options,
    );
  }

  nflV3ProjectionsProjectedPlayerSeasonStatsWithAdp(
    request: NflV3Projections.NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PlayerSeasonProjection[],
    NflV3Projections.NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/projections/{format}/PlayerSeasonProjectionStats/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeasonProjectionSchema)) },
        errorFactory: NflV3Projections.NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpError,
      },
      options,
    );
  }

  nflV3ProjectionsProjectedPlayerSeasonStatsWithAdpByTeam(
    request: NflV3Projections.NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PlayerSeasonProjection[],
    NflV3Projections.NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpByTeamError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nfl/projections/{format}/PlayerSeasonProjectionStatsByTeam/{season}/{team}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeasonProjectionSchema)) },
        errorFactory: NflV3Projections.NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpByTeamError,
      },
      options,
    );
  }
}

export namespace NflV3Projections {
  export type NflV3ProjectionsDfsSlateOwnershipProjectionsBySlateRequest = {
    format?: Format;
    slateId: string;
  };

  export class NflV3ProjectionsDfsSlateOwnershipProjectionsBySlateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ProjectionsDfsSlateOwnershipProjectionsBySlateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ProjectionsDfsSlateOwnershipProjectionsUpcomingRequest = {
    format?: Format;
  };

  export class NflV3ProjectionsDfsSlateOwnershipProjectionsUpcomingError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ProjectionsDfsSlateOwnershipProjectionsUpcomingError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ProjectionsDfsSlatesByDateRequest = {
    format?: Format;
    date: string;
  };

  export class NflV3ProjectionsDfsSlatesByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ProjectionsDfsSlatesByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ProjectionsDfsSlatesByWeekRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class NflV3ProjectionsDfsSlatesByWeekError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ProjectionsDfsSlatesByWeekError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ProjectionsIdpProjectedPlayerGameStatsByTeamRequest = {
    format?: Format;
    season: string;
    week: string;
    team: string;
  };

  export class NflV3ProjectionsIdpProjectedPlayerGameStatsByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ProjectionsIdpProjectedPlayerGameStatsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ProjectionsIdpProjectedPlayerGameStatsByWeekRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class NflV3ProjectionsIdpProjectedPlayerGameStatsByWeekError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ProjectionsIdpProjectedPlayerGameStatsByWeekError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ProjectionsPlayerDetailsByInjuredRequest = {
    format?: Format;
  };

  export class NflV3ProjectionsPlayerDetailsByInjuredError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ProjectionsPlayerDetailsByInjuredError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ProjectionsProjectedFantasyDefenseGameStatsWithDfsSalariesRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class NflV3ProjectionsProjectedFantasyDefenseGameStatsWithDfsSalariesError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ProjectionsProjectedFantasyDefenseGameStatsWithDfsSalariesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ProjectionsProjectedFantasyDefenseSeasonStatsWithAdpRequest = {
    format?: Format;
    season: string;
  };

  export class NflV3ProjectionsProjectedFantasyDefenseSeasonStatsWithAdpError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ProjectionsProjectedFantasyDefenseSeasonStatsWithAdpError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ProjectionsProjectedPlayerGameStatsByTeamRequest = {
    format?: Format;
    season: string;
    week: string;
    team: string;
  };

  export class NflV3ProjectionsProjectedPlayerGameStatsByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ProjectionsProjectedPlayerGameStatsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ProjectionsProjectedPlayerGameStatsByWeekRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class NflV3ProjectionsProjectedPlayerGameStatsByWeekError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ProjectionsProjectedPlayerGameStatsByWeekError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpRequest = {
    format?: Format;
    season: string;
  };

  export class NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpByTeamRequest = {
    format?: Format;
    season: string;
    team: string;
  };

  export class NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
