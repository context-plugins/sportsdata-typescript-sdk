import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { dfsSlateSchema, type DfsSlate } from "../models/dfs-slate.js";
import { Format, formatSchema } from "../models/format.js";
import {
  playerGameProjection1Schema,
  type PlayerGameProjection1,
} from "../models/player-game-projection1.js";
import {
  playerSeasonProjection1Schema,
  type PlayerSeasonProjection1,
} from "../models/player-season-projection1.js";
import { player1Schema, type Player1 } from "../models/player1.js";
import { startingLineupsSchema, type StartingLineups } from "../models/starting-lineups.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class NbaV3Projections {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  nbaV3ProjectionsDfsSlatesByDate(
    request: NbaV3Projections.NbaV3ProjectionsDfsSlatesByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<DfsSlate[], NbaV3Projections.NbaV3ProjectionsDfsSlatesByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/projections/{format}/DfsSlatesByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dfsSlateSchema)) },
        errorFactory: NbaV3Projections.NbaV3ProjectionsDfsSlatesByDateError,
      },
      options,
    );
  }

  nbaV3ProjectionsPlayerDetailsByInjured(
    request: NbaV3Projections.NbaV3ProjectionsPlayerDetailsByInjuredRequest,
    options?: RequestOptions,
  ): ApiPromise<Player1[], NbaV3Projections.NbaV3ProjectionsPlayerDetailsByInjuredError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/projections/{format}/InjuredPlayers"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player1Schema)) },
        errorFactory: NbaV3Projections.NbaV3ProjectionsPlayerDetailsByInjuredError,
      },
      options,
    );
  }

  nbaV3ProjectionsProjectedPlayerGameStatsByDate(
    request: NbaV3Projections.NbaV3ProjectionsProjectedPlayerGameStatsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PlayerGameProjection1[],
    NbaV3Projections.NbaV3ProjectionsProjectedPlayerGameStatsByDateError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/projections/{format}/PlayerGameProjectionStatsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameProjection1Schema)) },
        errorFactory: NbaV3Projections.NbaV3ProjectionsProjectedPlayerGameStatsByDateError,
      },
      options,
    );
  }

  nbaV3ProjectionsProjectedPlayerSeasonStats(
    request: NbaV3Projections.NbaV3ProjectionsProjectedPlayerSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeasonProjection1[], NbaV3Projections.NbaV3ProjectionsProjectedPlayerSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/projections/{format}/PlayerSeasonProjectionStats/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeasonProjection1Schema)) },
        errorFactory: NbaV3Projections.NbaV3ProjectionsProjectedPlayerSeasonStatsError,
      },
      options,
    );
  }

  nbaV3ProjectionsProjectedPlayerSeasonStatsByTeam(
    request: NbaV3Projections.NbaV3ProjectionsProjectedPlayerSeasonStatsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PlayerSeasonProjection1[],
    NbaV3Projections.NbaV3ProjectionsProjectedPlayerSeasonStatsByTeamError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nba/projections/{format}/PlayerSeasonProjectionStatsByTeam/{season}/{team}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeasonProjection1Schema)) },
        errorFactory: NbaV3Projections.NbaV3ProjectionsProjectedPlayerSeasonStatsByTeamError,
      },
      options,
    );
  }

  nbaV3ProjectionsStartingLineupsByDate(
    request: NbaV3Projections.NbaV3ProjectionsStartingLineupsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<StartingLineups[], NbaV3Projections.NbaV3ProjectionsStartingLineupsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/projections/{format}/StartingLineupsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => startingLineupsSchema)) },
        errorFactory: NbaV3Projections.NbaV3ProjectionsStartingLineupsByDateError,
      },
      options,
    );
  }
}

export namespace NbaV3Projections {
  export type NbaV3ProjectionsDfsSlatesByDateRequest = {
    format?: Format;
    date: string;
  };

  export class NbaV3ProjectionsDfsSlatesByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3ProjectionsDfsSlatesByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ProjectionsPlayerDetailsByInjuredRequest = {
    format?: Format;
  };

  export class NbaV3ProjectionsPlayerDetailsByInjuredError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3ProjectionsPlayerDetailsByInjuredError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ProjectionsProjectedPlayerGameStatsByDateRequest = {
    format?: Format;
    date: string;
  };

  export class NbaV3ProjectionsProjectedPlayerGameStatsByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3ProjectionsProjectedPlayerGameStatsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ProjectionsProjectedPlayerSeasonStatsRequest = {
    format?: Format;
    season: string;
  };

  export class NbaV3ProjectionsProjectedPlayerSeasonStatsError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3ProjectionsProjectedPlayerSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ProjectionsProjectedPlayerSeasonStatsByTeamRequest = {
    format?: Format;
    season: string;
    team: string;
  };

  export class NbaV3ProjectionsProjectedPlayerSeasonStatsByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3ProjectionsProjectedPlayerSeasonStatsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ProjectionsStartingLineupsByDateRequest = {
    format?: Format;
    date: string;
  };

  export class NbaV3ProjectionsStartingLineupsByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3ProjectionsStartingLineupsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
