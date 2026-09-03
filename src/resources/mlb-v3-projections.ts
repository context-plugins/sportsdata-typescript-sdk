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
import { Format, formatSchema } from "../models/format.js";
import {
  playerGameProjection2Schema,
  type PlayerGameProjection2,
} from "../models/player-game-projection2.js";
import {
  playerSeasonProjection2Schema,
  type PlayerSeasonProjection2,
} from "../models/player-season-projection2.js";
import { player2Schema, type Player2 } from "../models/player2.js";
import { startingLineups1Schema, type StartingLineups1 } from "../models/starting-lineups1.js";
import { teamDepthChart1Schema, type TeamDepthChart1 } from "../models/team-depth-chart1.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class MlbV3Projections {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  mlbV3ProjectionsDepthCharts(
    request: MlbV3Projections.MlbV3ProjectionsDepthChartsRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamDepthChart1[], MlbV3Projections.MlbV3ProjectionsDepthChartsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/projections/{format}/DepthCharts"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamDepthChart1Schema)) },
        errorFactory: MlbV3Projections.MlbV3ProjectionsDepthChartsError,
      },
      options,
    );
  }

  mlbV3ProjectionsDfsSlateOwnershipProjectionsBySlate(
    request: MlbV3Projections.MlbV3ProjectionsDfsSlateOwnershipProjectionsBySlateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    DfsSlateWithOwnershipProjection,
    MlbV3Projections.MlbV3ProjectionsDfsSlateOwnershipProjectionsBySlateError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/mlb/projections/{format}/DfsSlateOwnershipProjectionsBySlateID/{slateId}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "slateId", value: request.slateId, schema: s.number() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dfsSlateWithOwnershipProjectionSchema },
        errorFactory: MlbV3Projections.MlbV3ProjectionsDfsSlateOwnershipProjectionsBySlateError,
      },
      options,
    );
  }

  mlbV3ProjectionsDfsSlateOwnershipProjectionsUpcoming(
    request: MlbV3Projections.MlbV3ProjectionsDfsSlateOwnershipProjectionsUpcomingRequest,
    options?: RequestOptions,
  ): ApiPromise<
    DfsSlateWithOwnershipProjection[],
    MlbV3Projections.MlbV3ProjectionsDfsSlateOwnershipProjectionsUpcomingError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/projections/{format}/UpcomingDfsSlateOwnershipProjections"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dfsSlateWithOwnershipProjectionSchema)) },
        errorFactory: MlbV3Projections.MlbV3ProjectionsDfsSlateOwnershipProjectionsUpcomingError,
      },
      options,
    );
  }

  mlbV3ProjectionsDfsSlatesByDate(
    request: MlbV3Projections.MlbV3ProjectionsDfsSlatesByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<DfsSlate[], MlbV3Projections.MlbV3ProjectionsDfsSlatesByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/projections/{format}/DfsSlatesByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dfsSlateSchema)) },
        errorFactory: MlbV3Projections.MlbV3ProjectionsDfsSlatesByDateError,
      },
      options,
    );
  }

  mlbV3ProjectionsPlayerDetailsByInjured(
    request: MlbV3Projections.MlbV3ProjectionsPlayerDetailsByInjuredRequest,
    options?: RequestOptions,
  ): ApiPromise<Player2[], MlbV3Projections.MlbV3ProjectionsPlayerDetailsByInjuredError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/projections/{format}/InjuredPlayers"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player2Schema)) },
        errorFactory: MlbV3Projections.MlbV3ProjectionsPlayerDetailsByInjuredError,
      },
      options,
    );
  }

  mlbV3ProjectionsProjectedPlayerGameStatsByDate(
    request: MlbV3Projections.MlbV3ProjectionsProjectedPlayerGameStatsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PlayerGameProjection2[],
    MlbV3Projections.MlbV3ProjectionsProjectedPlayerGameStatsByDateError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/projections/{format}/PlayerGameProjectionStatsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameProjection2Schema)) },
        errorFactory: MlbV3Projections.MlbV3ProjectionsProjectedPlayerGameStatsByDateError,
      },
      options,
    );
  }

  mlbV3ProjectionsProjectedPlayerSeasonStatsWithAdp(
    request: MlbV3Projections.MlbV3ProjectionsProjectedPlayerSeasonStatsWithAdpRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PlayerSeasonProjection2[],
    MlbV3Projections.MlbV3ProjectionsProjectedPlayerSeasonStatsWithAdpError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/projections/{format}/PlayerSeasonProjectionStats/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeasonProjection2Schema)) },
        errorFactory: MlbV3Projections.MlbV3ProjectionsProjectedPlayerSeasonStatsWithAdpError,
      },
      options,
    );
  }

  mlbV3ProjectionsStartingLineupsByDate(
    request: MlbV3Projections.MlbV3ProjectionsStartingLineupsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<StartingLineups1[], MlbV3Projections.MlbV3ProjectionsStartingLineupsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/projections/{format}/StartingLineupsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => startingLineups1Schema)) },
        errorFactory: MlbV3Projections.MlbV3ProjectionsStartingLineupsByDateError,
      },
      options,
    );
  }
}

export namespace MlbV3Projections {
  export type MlbV3ProjectionsDepthChartsRequest = {
    format?: Format;
  };

  export class MlbV3ProjectionsDepthChartsError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3ProjectionsDepthChartsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ProjectionsDfsSlateOwnershipProjectionsBySlateRequest = {
    format?: Format;
    slateId: number;
  };

  export class MlbV3ProjectionsDfsSlateOwnershipProjectionsBySlateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3ProjectionsDfsSlateOwnershipProjectionsBySlateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ProjectionsDfsSlateOwnershipProjectionsUpcomingRequest = {
    format?: Format;
  };

  export class MlbV3ProjectionsDfsSlateOwnershipProjectionsUpcomingError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3ProjectionsDfsSlateOwnershipProjectionsUpcomingError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ProjectionsDfsSlatesByDateRequest = {
    format?: Format;
    date: string;
  };

  export class MlbV3ProjectionsDfsSlatesByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3ProjectionsDfsSlatesByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ProjectionsPlayerDetailsByInjuredRequest = {
    format?: Format;
  };

  export class MlbV3ProjectionsPlayerDetailsByInjuredError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3ProjectionsPlayerDetailsByInjuredError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ProjectionsProjectedPlayerGameStatsByDateRequest = {
    format?: Format;
    date: string;
  };

  export class MlbV3ProjectionsProjectedPlayerGameStatsByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3ProjectionsProjectedPlayerGameStatsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ProjectionsProjectedPlayerSeasonStatsWithAdpRequest = {
    format?: Format;
    season: string;
  };

  export class MlbV3ProjectionsProjectedPlayerSeasonStatsWithAdpError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3ProjectionsProjectedPlayerSeasonStatsWithAdpError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ProjectionsStartingLineupsByDateRequest = {
    format?: Format;
    date: string;
  };

  export class MlbV3ProjectionsStartingLineupsByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3ProjectionsStartingLineupsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
