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
  playerGameProjection3Schema,
  type PlayerGameProjection3,
} from "../models/player-game-projection3.js";
import { player3Schema, type Player3 } from "../models/player3.js";
import { startingGoaltendersSchema, type StartingGoaltenders } from "../models/starting-goaltenders.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class NhlV3Projections {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  nhlV3ProjectionsDfsSlatesByDate(
    request: NhlV3Projections.NhlV3ProjectionsDfsSlatesByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<DfsSlate[], NhlV3Projections.NhlV3ProjectionsDfsSlatesByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/projections/{format}/DfsSlatesByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dfsSlateSchema)) },
        errorFactory: NhlV3Projections.NhlV3ProjectionsDfsSlatesByDateError,
      },
      options,
    );
  }

  nhlV3ProjectionsPlayerDetailsByInjured(
    request: NhlV3Projections.NhlV3ProjectionsPlayerDetailsByInjuredRequest,
    options?: RequestOptions,
  ): ApiPromise<Player3[], NhlV3Projections.NhlV3ProjectionsPlayerDetailsByInjuredError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/projections/{format}/InjuredPlayers"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player3Schema)) },
        errorFactory: NhlV3Projections.NhlV3ProjectionsPlayerDetailsByInjuredError,
      },
      options,
    );
  }

  nhlV3ProjectionsProjectedPlayerGameStatsByDate(
    request: NhlV3Projections.NhlV3ProjectionsProjectedPlayerGameStatsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PlayerGameProjection3[],
    NhlV3Projections.NhlV3ProjectionsProjectedPlayerGameStatsByDateError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/projections/{format}/PlayerGameProjectionStatsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameProjection3Schema)) },
        errorFactory: NhlV3Projections.NhlV3ProjectionsProjectedPlayerGameStatsByDateError,
      },
      options,
    );
  }

  nhlV3ProjectionsStartingGoaltendersByDate(
    request: NhlV3Projections.NhlV3ProjectionsStartingGoaltendersByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<StartingGoaltenders[], NhlV3Projections.NhlV3ProjectionsStartingGoaltendersByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/projections/{format}/StartingGoaltendersByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => startingGoaltendersSchema)) },
        errorFactory: NhlV3Projections.NhlV3ProjectionsStartingGoaltendersByDateError,
      },
      options,
    );
  }
}

export namespace NhlV3Projections {
  export type NhlV3ProjectionsDfsSlatesByDateRequest = {
    format?: Format;
    date: string;
  };

  export class NhlV3ProjectionsDfsSlatesByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3ProjectionsDfsSlatesByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ProjectionsPlayerDetailsByInjuredRequest = {
    format?: Format;
  };

  export class NhlV3ProjectionsPlayerDetailsByInjuredError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3ProjectionsPlayerDetailsByInjuredError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ProjectionsProjectedPlayerGameStatsByDateRequest = {
    format?: Format;
    date: string;
  };

  export class NhlV3ProjectionsProjectedPlayerGameStatsByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3ProjectionsProjectedPlayerGameStatsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ProjectionsStartingGoaltendersByDateRequest = {
    format?: Format;
    date: string;
  };

  export class NhlV3ProjectionsStartingGoaltendersByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3ProjectionsStartingGoaltendersByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
