import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { dfsSlate1Schema, type DfsSlate1 } from "../models/dfs-slate1.js";
import { Format, formatSchema } from "../models/format.js";
import {
  playerGameProjection4Schema,
  type PlayerGameProjection4,
} from "../models/player-game-projection4.js";
import { player7Schema, type Player7 } from "../models/player7.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class SoccerV4Projections {
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
   * @throws {@link SoccerV4Projections.SoccerV4ProjectionsDfsSlatesByDateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4ProjectionsDfsSlatesByDate(
    request: SoccerV4Projections.SoccerV4ProjectionsDfsSlatesByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<DfsSlate1[], SoccerV4Projections.SoccerV4ProjectionsDfsSlatesByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/projections/{format}/DfsSlatesByDate/{competition}/{date}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dfsSlate1Schema)) },
        errorFactory: SoccerV4Projections.SoccerV4ProjectionsDfsSlatesByDateError,
      },
      options,
    );
  }

  /**
   * Player Details - by Injured
   *
   * @remarks
   * This endpoint provides all currently injured soccer players by competition, along with injury
   * details.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Projections.SoccerV4ProjectionsPlayerDetailsByInjuredError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4ProjectionsPlayerDetailsByInjured(
    request: SoccerV4Projections.SoccerV4ProjectionsPlayerDetailsByInjuredRequest,
    options?: RequestOptions,
  ): ApiPromise<Player7[], SoccerV4Projections.SoccerV4ProjectionsPlayerDetailsByInjuredError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/soccer/projections/{format}/InjuredPlayers/{competition}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player7Schema)) },
        errorFactory: SoccerV4Projections.SoccerV4ProjectionsPlayerDetailsByInjuredError,
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
   * @throws {@link SoccerV4Projections.SoccerV4ProjectionsProjectedPlayerGameStatsByDateError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4ProjectionsProjectedPlayerGameStatsByDate(
    request: SoccerV4Projections.SoccerV4ProjectionsProjectedPlayerGameStatsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PlayerGameProjection4[],
    SoccerV4Projections.SoccerV4ProjectionsProjectedPlayerGameStatsByDateError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/projections/{format}/PlayerGameProjectionStatsByDate/{competition}/{date}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameProjection4Schema)) },
        errorFactory: SoccerV4Projections.SoccerV4ProjectionsProjectedPlayerGameStatsByDateError,
      },
      options,
    );
  }

  /**
   * Upcoming DFS Slates - by Competition
   *
   * @remarks
   * Returns upcoming DFS Slates which have not yet started, with their player and salary
   * information, by competition.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Projections.SoccerV4ProjectionsUpcomingDfsSlatesByCompetitionError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4ProjectionsUpcomingDfsSlatesByCompetition(
    request: SoccerV4Projections.SoccerV4ProjectionsUpcomingDfsSlatesByCompetitionRequest,
    options?: RequestOptions,
  ): ApiPromise<DfsSlate1[], SoccerV4Projections.SoccerV4ProjectionsUpcomingDfsSlatesByCompetitionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/projections/{format}/UpcomingDfsSlatesByCompetition/{competition}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dfsSlate1Schema)) },
        errorFactory: SoccerV4Projections.SoccerV4ProjectionsUpcomingDfsSlatesByCompetitionError,
      },
      options,
    );
  }
}

export namespace SoccerV4Projections {
  export type SoccerV4ProjectionsDfsSlatesByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
    /** The date of the game(s). <br>Examples: <code>2020-02-18</code> */
    date: string;
  };

  export class SoccerV4ProjectionsDfsSlatesByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4ProjectionsDfsSlatesByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ProjectionsPlayerDetailsByInjuredRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
  };

  export class SoccerV4ProjectionsPlayerDetailsByInjuredError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4ProjectionsPlayerDetailsByInjuredError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ProjectionsProjectedPlayerGameStatsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
    /** The date of the game(s). <br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>. */
    date: string;
  };

  export class SoccerV4ProjectionsProjectedPlayerGameStatsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4ProjectionsProjectedPlayerGameStatsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ProjectionsUpcomingDfsSlatesByCompetitionRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
  };

  export class SoccerV4ProjectionsUpcomingDfsSlatesByCompetitionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4ProjectionsUpcomingDfsSlatesByCompetitionError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
