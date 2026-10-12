import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * DFS Slates - by Date
   *
   * @remarks
   * Returns DFS Slates which have not yet started, with their player and salary information.
   *
   * @returns Success
   *
   * @throws {@link NhlV3Projections.NhlV3ProjectionsDfsSlatesByDateError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3ProjectionsDfsSlatesByDate(
    request: NhlV3Projections.NhlV3ProjectionsDfsSlatesByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<DfsSlate[], NhlV3Projections.NhlV3ProjectionsDfsSlatesByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/projections/{format}/DfsSlatesByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dfsSlateSchema)) },
        errorFactory: NhlV3Projections.NhlV3ProjectionsDfsSlatesByDateError,
      },
      options,
    );
  }

  /**
   * Player Details - by Injured
   *
   * @remarks
   * This endpoint provides all currently injured NHL players, along with injury details.
   *
   * @returns Success
   *
   * @throws {@link NhlV3Projections.NhlV3ProjectionsPlayerDetailsByInjuredError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3ProjectionsPlayerDetailsByInjured(
    request: NhlV3Projections.NhlV3ProjectionsPlayerDetailsByInjuredRequest,
    options?: RequestOptions,
  ): ApiPromise<Player3[], NhlV3Projections.NhlV3ProjectionsPlayerDetailsByInjuredError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/projections/{format}/InjuredPlayers"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player3Schema)) },
        errorFactory: NhlV3Projections.NhlV3ProjectionsPlayerDetailsByInjuredError,
      },
      options,
    );
  }

  /**
   * Projected Player Game Stats - by Date
   *
   * @remarks
   * SportsDataIO's proprietary projections, including DFS salary information and injuries, for
   * fantasy players, called by date.
   *
   * @returns Success
   *
   * @throws {@link NhlV3Projections.NhlV3ProjectionsProjectedPlayerGameStatsByDateError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default(
          "/v3/nhl/projections/{format}/PlayerGameProjectionStatsByDate/{date}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameProjection3Schema)) },
        errorFactory: NhlV3Projections.NhlV3ProjectionsProjectedPlayerGameStatsByDateError,
      },
      options,
    );
  }

  /**
   * Starting Goaltenders - by Date
   *
   * @remarks
   * This endpoint provides the projected and confirmed starting goaltenders for NHL games on a
   * given date.
   *
   * @returns Success
   *
   * @throws {@link NhlV3Projections.NhlV3ProjectionsStartingGoaltendersByDateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3ProjectionsStartingGoaltendersByDate(
    request: NhlV3Projections.NhlV3ProjectionsStartingGoaltendersByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<StartingGoaltenders[], NhlV3Projections.NhlV3ProjectionsStartingGoaltendersByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/projections/{format}/StartingGoaltendersByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        query: [],
        headers: [],
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
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2017-DEC-01</code>, <code>2018-FEB-15</code>.
     */
    date: string;
  };

  export class NhlV3ProjectionsDfsSlatesByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3ProjectionsDfsSlatesByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ProjectionsPlayerDetailsByInjuredRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NhlV3ProjectionsPlayerDetailsByInjuredError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3ProjectionsPlayerDetailsByInjuredError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ProjectionsProjectedPlayerGameStatsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.
     */
    date: string;
  };

  export class NhlV3ProjectionsProjectedPlayerGameStatsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3ProjectionsProjectedPlayerGameStatsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3ProjectionsStartingGoaltendersByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2021-OCT-12</code>, <code>2021-DEC-09</code>.
     */
    date: string;
  };

  export class NhlV3ProjectionsStartingGoaltendersByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3ProjectionsStartingGoaltendersByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
