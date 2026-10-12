import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * Depth Charts
   *
   * @remarks
   * Returns Depth Charts for all active MLB teams.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Projections.MlbV3ProjectionsDepthChartsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ProjectionsDepthCharts(
    request: MlbV3Projections.MlbV3ProjectionsDepthChartsRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamDepthChart1[], MlbV3Projections.MlbV3ProjectionsDepthChartsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/projections/{format}/DepthCharts"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamDepthChart1Schema)) },
        errorFactory: MlbV3Projections.MlbV3ProjectionsDepthChartsError,
      },
      options,
    );
  }

  /**
   * DFS Slate Ownership Projections - by Slate
   *
   * @remarks
   * Slate Ownership Projections for a specific slate. Projections are for Guaranteed Prize Pool
   * (GPP) format ownership. Will return an empty list if the slate is not yet projected or not a
   * slate we have projections for.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Projections.MlbV3ProjectionsDfsSlateOwnershipProjectionsBySlateError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default(
          "/v3/mlb/projections/{format}/DfsSlateOwnershipProjectionsBySlateID/{slateId}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "slateId", value: request.slateId, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dfsSlateWithOwnershipProjectionSchema },
        errorFactory: MlbV3Projections.MlbV3ProjectionsDfsSlateOwnershipProjectionsBySlateError,
      },
      options,
    );
  }

  /**
   * DFS Slate Ownership Projections - Upcoming
   *
   * @remarks
   * Returns DFS Slates which have not yet started for which we have DFS Ownership projections.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Projections.MlbV3ProjectionsDfsSlateOwnershipProjectionsUpcomingError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default(
          "/v3/mlb/projections/{format}/UpcomingDfsSlateOwnershipProjections",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dfsSlateWithOwnershipProjectionSchema)) },
        errorFactory: MlbV3Projections.MlbV3ProjectionsDfsSlateOwnershipProjectionsUpcomingError,
      },
      options,
    );
  }

  /**
   * DFS Slates - by Date
   *
   * @remarks
   * Returns DFS Slates which have not yet started for which we have DFS projections.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Projections.MlbV3ProjectionsDfsSlatesByDateError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ProjectionsDfsSlatesByDate(
    request: MlbV3Projections.MlbV3ProjectionsDfsSlatesByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<DfsSlate[], MlbV3Projections.MlbV3ProjectionsDfsSlatesByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/projections/{format}/DfsSlatesByDate/{date}"),
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
        errorFactory: MlbV3Projections.MlbV3ProjectionsDfsSlatesByDateError,
      },
      options,
    );
  }

  /**
   * Player Details - by Injured
   *
   * @remarks
   * This endpoint provides all currently injured MLB players, along with injury details.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Projections.MlbV3ProjectionsPlayerDetailsByInjuredError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ProjectionsPlayerDetailsByInjured(
    request: MlbV3Projections.MlbV3ProjectionsPlayerDetailsByInjuredRequest,
    options?: RequestOptions,
  ): ApiPromise<Player2[], MlbV3Projections.MlbV3ProjectionsPlayerDetailsByInjuredError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/projections/{format}/InjuredPlayers"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player2Schema)) },
        errorFactory: MlbV3Projections.MlbV3ProjectionsPlayerDetailsByInjuredError,
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
   * @throws {@link MlbV3Projections.MlbV3ProjectionsProjectedPlayerGameStatsByDateError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default(
          "/v3/mlb/projections/{format}/PlayerGameProjectionStatsByDate/{date}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameProjection2Schema)) },
        errorFactory: MlbV3Projections.MlbV3ProjectionsProjectedPlayerGameStatsByDateError,
      },
      options,
    );
  }

  /**
   * Projected Player Season Stats With ADP
   *
   * @remarks
   * SportsDataIO's proprietary projections, including average draft position, for all active
   * players for the season.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Projections.MlbV3ProjectionsProjectedPlayerSeasonStatsWithAdpError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default(
          "/v3/mlb/projections/{format}/PlayerSeasonProjectionStats/{season}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeasonProjection2Schema)) },
        errorFactory: MlbV3Projections.MlbV3ProjectionsProjectedPlayerSeasonStatsWithAdpError,
      },
      options,
    );
  }

  /**
   * Starting Lineups - by Date
   *
   * @remarks
   * Returns both projected and confirmed starting lineups for all games on a given date.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Projections.MlbV3ProjectionsStartingLineupsByDateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ProjectionsStartingLineupsByDate(
    request: MlbV3Projections.MlbV3ProjectionsStartingLineupsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<StartingLineups1[], MlbV3Projections.MlbV3ProjectionsStartingLineupsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/projections/{format}/StartingLineupsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => startingLineups1Schema)) },
        errorFactory: MlbV3Projections.MlbV3ProjectionsStartingLineupsByDateError,
      },
      options,
    );
  }
}

export namespace MlbV3Projections {
  export type MlbV3ProjectionsDepthChartsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class MlbV3ProjectionsDepthChartsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ProjectionsDepthChartsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ProjectionsDfsSlateOwnershipProjectionsBySlateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * SlateID of the DFS Slate you wish to get ownership projections for. Will have an empty
     * SlateOwnershipProjections if this slate was not projected
     */
    slateId: number;
  };

  export class MlbV3ProjectionsDfsSlateOwnershipProjectionsBySlateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ProjectionsDfsSlateOwnershipProjectionsBySlateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ProjectionsDfsSlateOwnershipProjectionsUpcomingRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class MlbV3ProjectionsDfsSlateOwnershipProjectionsUpcomingError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ProjectionsDfsSlateOwnershipProjectionsUpcomingError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ProjectionsDfsSlatesByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the slates. <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>. */
    date: string;
  };

  export class MlbV3ProjectionsDfsSlatesByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ProjectionsDfsSlatesByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ProjectionsPlayerDetailsByInjuredRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class MlbV3ProjectionsPlayerDetailsByInjuredError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ProjectionsPlayerDetailsByInjuredError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ProjectionsProjectedPlayerGameStatsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.
     */
    date: string;
  };

  export class MlbV3ProjectionsProjectedPlayerGameStatsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ProjectionsProjectedPlayerGameStatsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ProjectionsProjectedPlayerSeasonStatsWithAdpRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2017</code>, <code>2018</code>. */
    season: string;
  };

  export class MlbV3ProjectionsProjectedPlayerSeasonStatsWithAdpError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ProjectionsProjectedPlayerSeasonStatsWithAdpError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ProjectionsStartingLineupsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the slates. <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>. */
    date: string;
  };

  export class MlbV3ProjectionsStartingLineupsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ProjectionsStartingLineupsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
