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
   * @throws {@link NflV3Projections.NflV3ProjectionsDfsSlateOwnershipProjectionsBySlateError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default(
          "/v3/nfl/projections/{format}/DfsSlateOwnershipProjectionsBySlateID/{slateId}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "slateId", value: request.slateId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dfsSlateWithOwnershipProjectionSchema },
        errorFactory: NflV3Projections.NflV3ProjectionsDfsSlateOwnershipProjectionsBySlateError,
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
   * @throws {@link NflV3Projections.NflV3ProjectionsDfsSlateOwnershipProjectionsUpcomingError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default(
          "/v3/nfl/projections/{format}/UpcomingDfsSlateOwnershipProjections",
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
        errorFactory: NflV3Projections.NflV3ProjectionsDfsSlateOwnershipProjectionsUpcomingError,
      },
      options,
    );
  }

  /**
   * DFS Slates - by Date
   *
   * @remarks
   * Returns DFS slates, including eligible games, positions, captain mode, players and salaries,
   * for a given date.
   *
   * @returns Success
   *
   * @throws {@link NflV3Projections.NflV3ProjectionsDfsSlatesByDateError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ProjectionsDfsSlatesByDate(
    request: NflV3Projections.NflV3ProjectionsDfsSlatesByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<DfsSlate[], NflV3Projections.NflV3ProjectionsDfsSlatesByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/projections/{format}/DfsSlatesByDate/{date}"),
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
        errorFactory: NflV3Projections.NflV3ProjectionsDfsSlatesByDateError,
      },
      options,
    );
  }

  /**
   * DFS Slates - by Week
   *
   * @remarks
   * Returns DFS slates, including eligible games, positions, captain mode, players and salaries,
   * for a given week.
   *
   * @returns Success
   *
   * @throws {@link NflV3Projections.NflV3ProjectionsDfsSlatesByWeekError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ProjectionsDfsSlatesByWeek(
    request: NflV3Projections.NflV3ProjectionsDfsSlatesByWeekRequest,
    options?: RequestOptions,
  ): ApiPromise<DfsSlate[], NflV3Projections.NflV3ProjectionsDfsSlatesByWeekError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/projections/{format}/DfsSlatesByWeek/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dfsSlateSchema)) },
        errorFactory: NflV3Projections.NflV3ProjectionsDfsSlatesByWeekError,
      },
      options,
    );
  }

  /**
   * IDP Projected Player Game Stats - by Team
   *
   * @remarks
   * Individual Defensive Player (IDP stats, including DFS salary information and injuries, for
   * fantasy players, called by team.
   *
   * @returns Success
   *
   * @throws {@link NflV3Projections.NflV3ProjectionsIdpProjectedPlayerGameStatsByTeamError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default(
          "/v3/nfl/projections/{format}/IdpPlayerGameProjectionStatsByTeam/{season}/{week}/{team}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
          { name: "team", value: request.team, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameProjectionSchema)) },
        errorFactory: NflV3Projections.NflV3ProjectionsIdpProjectedPlayerGameStatsByTeamError,
      },
      options,
    );
  }

  /**
   * IDP Projected Player Game Stats - by Week
   *
   * @remarks
   * Individual Defensive Player (IDP stats, including DFS salary information and injuries, for
   * fantasy players, called by week.
   *
   * @returns Success
   *
   * @throws {@link NflV3Projections.NflV3ProjectionsIdpProjectedPlayerGameStatsByWeekError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default(
          "/v3/nfl/projections/{format}/IdpPlayerGameProjectionStatsByWeek/{season}/{week}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameProjectionSchema)) },
        errorFactory: NflV3Projections.NflV3ProjectionsIdpProjectedPlayerGameStatsByWeekError,
      },
      options,
    );
  }

  /**
   * Player Details - by Injured
   *
   * @remarks
   * This endpoint provides all currently injured NFL players, along with injury details.
   *
   * @returns Success
   *
   * @throws {@link NflV3Projections.NflV3ProjectionsPlayerDetailsByInjuredError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ProjectionsPlayerDetailsByInjured(
    request: NflV3Projections.NflV3ProjectionsPlayerDetailsByInjuredRequest,
    options?: RequestOptions,
  ): ApiPromise<Player[], NflV3Projections.NflV3ProjectionsPlayerDetailsByInjuredError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/projections/{format}/InjuredPlayers"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSchema)) },
        errorFactory: NflV3Projections.NflV3ProjectionsPlayerDetailsByInjuredError,
      },
      options,
    );
  }

  /**
   * Projected Fantasy Defense Game Stats With DFS Salaries
   *
   * @remarks
   * SportsDataIO's proprietary projections, including DFS salary information, for all fantasy
   * defense teams. Called by season and week. Does not contain Individual Defensive Players (IDP),
   * which have their own endpoint.
   *
   * @returns Success
   *
   * @throws {@link
   * NflV3Projections.NflV3ProjectionsProjectedFantasyDefenseGameStatsWithDfsSalariesError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default(
          "/v3/nfl/projections/{format}/FantasyDefenseProjectionsByGame/{season}/{week}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => fantasyDefenseGameProjectionSchema)) },
        errorFactory: NflV3Projections.NflV3ProjectionsProjectedFantasyDefenseGameStatsWithDfsSalariesError,
      },
      options,
    );
  }

  /**
   * Projected Fantasy Defense Season Stats With ADP
   *
   * @remarks
   * SportsDataIO's proprietary projections, including average draft position, for all fantasy
   * defense teams for the season. Does not contain Individual Defensive Players (IDP), which have
   * their own endpoint.
   *
   * @returns Success
   *
   * @throws {@link NflV3Projections.NflV3ProjectionsProjectedFantasyDefenseSeasonStatsWithAdpError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default(
          "/v3/nfl/projections/{format}/FantasyDefenseProjectionsBySeason/{season}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => fantasyDefenseSeasonProjectionSchema)) },
        errorFactory: NflV3Projections.NflV3ProjectionsProjectedFantasyDefenseSeasonStatsWithAdpError,
      },
      options,
    );
  }

  /**
   * Projected Player Game Stats - by Team
   *
   * @remarks
   * SportsDataIO's proprietary projections, including DFS salary information and injuries, for
   * fantasy players, for a given game, called by team.
   *
   * @returns Success
   *
   * @throws {@link NflV3Projections.NflV3ProjectionsProjectedPlayerGameStatsByTeamError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default(
          "/v3/nfl/projections/{format}/PlayerGameProjectionStatsByTeam/{season}/{week}/{team}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
          { name: "team", value: request.team, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameProjectionSchema)) },
        errorFactory: NflV3Projections.NflV3ProjectionsProjectedPlayerGameStatsByTeamError,
      },
      options,
    );
  }

  /**
   * Projected Player Game Stats - by Week
   *
   * @remarks
   * SportsDataIO's proprietary projections, including DFS salary information and injuries, for
   * fantasy players, called by week.
   *
   * @returns Success
   *
   * @throws {@link NflV3Projections.NflV3ProjectionsProjectedPlayerGameStatsByWeekError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default(
          "/v3/nfl/projections/{format}/PlayerGameProjectionStatsByWeek/{season}/{week}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameProjectionSchema)) },
        errorFactory: NflV3Projections.NflV3ProjectionsProjectedPlayerGameStatsByWeekError,
      },
      options,
    );
  }

  /**
   * Projected Player Season Stats With ADP
   *
   * @remarks
   * SportsDataIO's proprietary projections on a season-long basis, including Average Draft Position
   * (ADP), for fantasy players, for a given season.
   *
   * @returns Success
   *
   * @throws {@link NflV3Projections.NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default(
          "/v3/nfl/projections/{format}/PlayerSeasonProjectionStats/{season}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeasonProjectionSchema)) },
        errorFactory: NflV3Projections.NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpError,
      },
      options,
    );
  }

  /**
   * Projected Player Season Stats With ADP - by Team
   *
   * @remarks
   * SportsDataIO's proprietary projections on a season-long basis, including ADP, for fantasy
   * players, for a given season and team.
   *
   * @returns Success
   *
   * @throws {@link NflV3Projections.NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpByTeamError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default(
          "/v3/nfl/projections/{format}/PlayerSeasonProjectionStatsByTeam/{season}/{team}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "team", value: request.team, schema: s.string() },
        ],
        query: [],
        headers: [],
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
    slateId: string;
  };

  export class NflV3ProjectionsDfsSlateOwnershipProjectionsBySlateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ProjectionsDfsSlateOwnershipProjectionsBySlateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ProjectionsDfsSlateOwnershipProjectionsUpcomingRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NflV3ProjectionsDfsSlateOwnershipProjectionsUpcomingError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ProjectionsDfsSlateOwnershipProjectionsUpcomingError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ProjectionsDfsSlatesByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the slates. <br>Examples: <code>2017-SEP-25</code>, <code>2017-10-31</code>. */
    date: string;
  };

  export class NflV3ProjectionsDfsSlatesByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ProjectionsDfsSlatesByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ProjectionsDfsSlatesByWeekRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season and the season type. If no season type is provided, then the default is
     * regular season. <br>Examples: <code>2015REG</code>, <code>2015PRE</code>,
     * <code>2015POST</code>
     */
    season: string;
    /**
     * Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17,
     * Postseason 1 to 4. Example: <code>1</code>
     */
    week: string;
  };

  export class NflV3ProjectionsDfsSlatesByWeekError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ProjectionsDfsSlatesByWeekError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ProjectionsIdpProjectedPlayerGameStatsByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season and the season type. If no season type is provided, then the default is
     * regular season. <br>Examples: <code>2015REG</code>, <code>2015PRE</code>,
     * <code>2015POST</code>.
     */
    season: string;
    /**
     * Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17,
     * Postseason 1 to 4. Example: <code>1</code>
     */
    week: string;
    /** Abbreviation of the team. Example: <code>WAS</code>. */
    team: string;
  };

  export class NflV3ProjectionsIdpProjectedPlayerGameStatsByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ProjectionsIdpProjectedPlayerGameStatsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ProjectionsIdpProjectedPlayerGameStatsByWeekRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season and the season type. If no season type is provided, then the default is
     * regular season. <br>Examples: <code>2015REG</code>, <code>2015PRE</code>,
     * <code>2015POST</code>.
     */
    season: string;
    /**
     * Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17,
     * Postseason 1 to 4. Example: <code>1</code>
     */
    week: string;
  };

  export class NflV3ProjectionsIdpProjectedPlayerGameStatsByWeekError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ProjectionsIdpProjectedPlayerGameStatsByWeekError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ProjectionsPlayerDetailsByInjuredRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NflV3ProjectionsPlayerDetailsByInjuredError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ProjectionsPlayerDetailsByInjuredError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ProjectionsProjectedFantasyDefenseGameStatsWithDfsSalariesRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season and the season type. If no season type is provided, then the default is
     * regular season. <br>Examples: <code>2015REG</code>, <code>2015PRE</code>,
     * <code>2015POST</code>.
     */
    season: string;
    /**
     * Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17,
     * Postseason 1 to 4. Example: <code>1</code>
     */
    week: string;
  };

  export class NflV3ProjectionsProjectedFantasyDefenseGameStatsWithDfsSalariesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ProjectionsProjectedFantasyDefenseGameStatsWithDfsSalariesError> =
      [{ on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } }];
  }

  export type NflV3ProjectionsProjectedFantasyDefenseSeasonStatsWithAdpRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season and the season type. If no season type is provided, then the default is
     * regular season. <br>Examples: <code>2015REG</code>, <code>2015PRE</code>,
     * <code>2015POST</code>.
     */
    season: string;
  };

  export class NflV3ProjectionsProjectedFantasyDefenseSeasonStatsWithAdpError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ProjectionsProjectedFantasyDefenseSeasonStatsWithAdpError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ProjectionsProjectedPlayerGameStatsByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season and the season type. If no season type is provided, then the default is
     * regular season. <br>Examples: <code>2015REG</code>, <code>2015PRE</code>,
     * <code>2015POST</code>.
     */
    season: string;
    /**
     * Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17,
     * Postseason 1 to 4. Example: <code>1</code>
     */
    week: string;
    /** Abbreviation of the team. Example: <code>WAS</code>. */
    team: string;
  };

  export class NflV3ProjectionsProjectedPlayerGameStatsByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ProjectionsProjectedPlayerGameStatsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ProjectionsProjectedPlayerGameStatsByWeekRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season and the season type. If no season type is provided, then the default is
     * regular season. <br>Examples: <code>2015REG</code>, <code>2015PRE</code>,
     * <code>2015POST</code>.
     */
    season: string;
    /**
     * Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17,
     * Postseason 1 to 4. Example: <code>1</code>
     */
    week: string;
  };

  export class NflV3ProjectionsProjectedPlayerGameStatsByWeekError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ProjectionsProjectedPlayerGameStatsByWeekError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season and the season type. If no season type is provided, then the default is
     * regular season. <br>Examples: <code>2015REG</code>, <code>2015PRE</code>,
     * <code>2015POST</code>.
     */
    season: string;
  };

  export class NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season and the season type. If no season type is provided, then the default is
     * regular season. <br>Examples: <code>2015REG</code>, <code>2015PRE</code>,
     * <code>2015POST</code>.
     */
    season: string;
    /** Abbreviation of the team. Example: <code>WAS</code>. */
    team: string;
  };

  export class NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
