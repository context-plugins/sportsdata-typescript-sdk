import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { driverBasicSchema, type DriverBasic } from "../models/driver-basic.js";
import { driverRaceBasicSchema, type DriverRaceBasic } from "../models/driver-race-basic.js";
import { driverRaceProjectionSchema, type DriverRaceProjection } from "../models/driver-race-projection.js";
import { driverSchema, type Driver } from "../models/driver.js";
import { fantasyRaceSchema, type FantasyRace } from "../models/fantasy-race.js";
import { Format, formatSchema } from "../models/format.js";
import { raceResultBasicSchema, type RaceResultBasic } from "../models/race-result-basic.js";
import { raceResultSchema, type RaceResult } from "../models/race-result.js";
import { raceSchema, type Race } from "../models/race.js";
import { series1Schema, type Series1 } from "../models/series1.js";
import { tracksSchema, type Tracks } from "../models/tracks.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class NascarV2 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Driver Profiles - by Driver
   *
   * @remarks
   * Driver Profiles - by Driver
   *
   * @returns Success
   *
   * @throws {@link NascarV2.NascarV2DriverDriverProfilesByDriverError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nascarV2DriverDriverProfilesByDriver(
    request: NascarV2.NascarV2DriverDriverProfilesByDriverRequest,
    options?: RequestOptions,
  ): ApiPromise<Driver, NascarV2.NascarV2DriverDriverProfilesByDriverError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/nascar/v2/{format}/driver/{driverid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "driverid", value: request.driverid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: driverSchema },
        errorFactory: NascarV2.NascarV2DriverDriverProfilesByDriverError,
      },
      options,
    );
  }

  /**
   * Projected Player Race Stats - by Race
   *
   * @remarks
   * Projected Player Race Stats - by Race
   *
   * @returns Success
   *
   * @throws {@link NascarV2.NascarV2DriverraceprojectionsProjectedPlayerRaceStatsByRaceError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nascarV2DriverraceprojectionsProjectedPlayerRaceStatsByRace(
    request: NascarV2.NascarV2DriverraceprojectionsProjectedPlayerRaceStatsByRaceRequest,
    options?: RequestOptions,
  ): ApiPromise<
    DriverRaceProjection[],
    NascarV2.NascarV2DriverraceprojectionsProjectedPlayerRaceStatsByRaceError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/nascar/v2/{format}/DriverRaceProjections/{raceid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "raceid", value: request.raceid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => driverRaceProjectionSchema)) },
        errorFactory: NascarV2.NascarV2DriverraceprojectionsProjectedPlayerRaceStatsByRaceError,
      },
      options,
    );
  }

  /**
   * Driver Profiles - All
   *
   * @remarks
   * Driver Profiles - All
   *
   * @returns Success
   *
   * @throws {@link NascarV2.NascarV2DriversDriverProfilesAllError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nascarV2DriversDriverProfilesAll(
    request: NascarV2.NascarV2DriversDriverProfilesAllRequest,
    options?: RequestOptions,
  ): ApiPromise<Driver[], NascarV2.NascarV2DriversDriverProfilesAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/nascar/v2/{format}/drivers"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => driverSchema)) },
        errorFactory: NascarV2.NascarV2DriversDriverProfilesAllError,
      },
      options,
    );
  }

  /**
   * Drivers - by Active
   *
   * @remarks
   * Drivers - by Active
   *
   * @returns Success
   *
   * @throws {@link NascarV2.NascarV2DriversbyactiveDriversByActiveError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nascarV2DriversbyactiveDriversByActive(
    request: NascarV2.NascarV2DriversbyactiveDriversByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<DriverBasic[], NascarV2.NascarV2DriversbyactiveDriversByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/nascar/v2/{format}/driversbyactive"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => driverBasicSchema)) },
        errorFactory: NascarV2.NascarV2DriversbyactiveDriversByActiveError,
      },
      options,
    );
  }

  /**
   * Entry List - by Race
   *
   * @remarks
   * Entry List - by Race
   *
   * @returns Success
   *
   * @throws {@link NascarV2.NascarV2EntrylistbyraceEntryListByRaceError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nascarV2EntrylistbyraceEntryListByRace(
    request: NascarV2.NascarV2EntrylistbyraceEntryListByRaceRequest,
    options?: RequestOptions,
  ): ApiPromise<DriverRaceBasic[], NascarV2.NascarV2EntrylistbyraceEntryListByRaceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/nascar/v2/{format}/EntryListbyRace/{raceid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "raceid", value: request.raceid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => driverRaceBasicSchema)) },
        errorFactory: NascarV2.NascarV2EntrylistbyraceEntryListByRaceError,
      },
      options,
    );
  }

  /**
   * Fantasy Points - by Race
   *
   * @remarks
   * Fantasy Points - by Race
   *
   * @returns Success
   *
   * @throws {@link NascarV2.NascarV2FantasygamestatsbyraceFantasyPointsByRaceError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nascarV2FantasygamestatsbyraceFantasyPointsByRace(
    request: NascarV2.NascarV2FantasygamestatsbyraceFantasyPointsByRaceRequest,
    options?: RequestOptions,
  ): ApiPromise<FantasyRace, NascarV2.NascarV2FantasygamestatsbyraceFantasyPointsByRaceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/nascar/v2/{format}/FantasyGameStatsByRace/{raceid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "raceid", value: request.raceid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fantasyRaceSchema },
        errorFactory: NascarV2.NascarV2FantasygamestatsbyraceFantasyPointsByRaceError,
      },
      options,
    );
  }

  /**
   * Leaderboard (Basic)
   *
   * @remarks
   * Leaderboard (Basic)
   *
   * @returns Success
   *
   * @throws {@link NascarV2.NascarV2LeaderboardbasicLeaderboardBasicError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nascarV2LeaderboardbasicLeaderboardBasic(
    request: NascarV2.NascarV2LeaderboardbasicLeaderboardBasicRequest,
    options?: RequestOptions,
  ): ApiPromise<RaceResultBasic, NascarV2.NascarV2LeaderboardbasicLeaderboardBasicError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/nascar/v2/{format}/LeaderboardBasic/{raceid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "raceid", value: request.raceid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: raceResultBasicSchema },
        errorFactory: NascarV2.NascarV2LeaderboardbasicLeaderboardBasicError,
      },
      options,
    );
  }

  /**
   * Leaderboard (Basic) [Final]
   *
   * @remarks
   * Leaderboard (Basic) [Final]
   *
   * @returns Success
   *
   * @throws {@link NascarV2.NascarV2LeaderboardbasicfinalLeaderboardBasicFinalError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nascarV2LeaderboardbasicfinalLeaderboardBasicFinal(
    request: NascarV2.NascarV2LeaderboardbasicfinalLeaderboardBasicFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<RaceResultBasic, NascarV2.NascarV2LeaderboardbasicfinalLeaderboardBasicFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/nascar/v2/{format}/LeaderboardBasicFinal/{raceid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "raceid", value: request.raceid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: raceResultBasicSchema },
        errorFactory: NascarV2.NascarV2LeaderboardbasicfinalLeaderboardBasicFinalError,
      },
      options,
    );
  }

  /**
   * Leaderboard [Live & Final]
   *
   * @remarks
   * Leaderboard [Live & Final]
   *
   * @returns Success
   *
   * @throws {@link NascarV2.NascarV2RaceresultLeaderboardLiveFinalError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nascarV2RaceresultLeaderboardLiveFinal(
    request: NascarV2.NascarV2RaceresultLeaderboardLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<RaceResult, NascarV2.NascarV2RaceresultLeaderboardLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/nascar/v2/{format}/raceresult/{raceid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "raceid", value: request.raceid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: raceResultSchema },
        errorFactory: NascarV2.NascarV2RaceresultLeaderboardLiveFinalError,
      },
      options,
    );
  }

  /**
   * Leaderboard [Final]
   *
   * @remarks
   * Leaderboard [Final]
   *
   * @returns Success
   *
   * @throws {@link NascarV2.NascarV2RaceresultfinalLeaderboardFinalError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nascarV2RaceresultfinalLeaderboardFinal(
    request: NascarV2.NascarV2RaceresultfinalLeaderboardFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<RaceResult, NascarV2.NascarV2RaceresultfinalLeaderboardFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/nascar/v2/{format}/raceresultfinal/{raceid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "raceid", value: request.raceid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: raceResultSchema },
        errorFactory: NascarV2.NascarV2RaceresultfinalLeaderboardFinalError,
      },
      options,
    );
  }

  /**
   * Schedules
   *
   * @remarks
   * Schedules
   *
   * @returns Success
   *
   * @throws {@link NascarV2.NascarV2RacesSchedulesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nascarV2RacesSchedules(
    request: NascarV2.NascarV2RacesSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<Race[], NascarV2.NascarV2RacesSchedulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/nascar/v2/{format}/races/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => raceSchema)) },
        errorFactory: NascarV2.NascarV2RacesSchedulesError,
      },
      options,
    );
  }

  /**
   * Series
   *
   * @remarks
   * Lists the different Series - the type of races administered by NASCAR - currently active.
   *
   * @returns Success
   *
   * @throws {@link NascarV2.NascarV2SeriesSeriesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nascarV2SeriesSeries(
    request: NascarV2.NascarV2SeriesSeriesRequest,
    options?: RequestOptions,
  ): ApiPromise<Series1[], NascarV2.NascarV2SeriesSeriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/nascar/v2/{format}/series"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => series1Schema)) },
        errorFactory: NascarV2.NascarV2SeriesSeriesError,
      },
      options,
    );
  }

  /**
   * Tracks
   *
   * @remarks
   * Tracks
   *
   * @returns Success
   *
   * @throws {@link NascarV2.NascarV2TracksTracksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nascarV2TracksTracks(
    request: NascarV2.NascarV2TracksTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<Tracks[], NascarV2.NascarV2TracksTracksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/nascar/v2/{format}/tracks/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => tracksSchema)) },
        errorFactory: NascarV2.NascarV2TracksTracksError,
      },
      options,
    );
  }
}

export namespace NascarV2 {
  export type NascarV2DriverDriverProfilesByDriverRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Unique FantasyData Driver ID. Example:<code>80000268</code>. */
    driverid: string;
  };

  export class NascarV2DriverDriverProfilesByDriverError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NascarV2DriverDriverProfilesByDriverError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV2DriverraceprojectionsProjectedPlayerRaceStatsByRaceRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Unique FantasyData Race ID. Example:<code>1</code>, <code>2</code>, etc. */
    raceid: string;
  };

  export class NascarV2DriverraceprojectionsProjectedPlayerRaceStatsByRaceError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NascarV2DriverraceprojectionsProjectedPlayerRaceStatsByRaceError> =
      [{ on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } }];
  }

  export type NascarV2DriversDriverProfilesAllRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NascarV2DriversDriverProfilesAllError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NascarV2DriversDriverProfilesAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV2DriversbyactiveDriversByActiveRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NascarV2DriversbyactiveDriversByActiveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NascarV2DriversbyactiveDriversByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV2EntrylistbyraceEntryListByRaceRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Unique FantasyData Race ID. Example:<code>1</code>, <code>2</code>, etc. */
    raceid: string;
  };

  export class NascarV2EntrylistbyraceEntryListByRaceError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NascarV2EntrylistbyraceEntryListByRaceError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV2FantasygamestatsbyraceFantasyPointsByRaceRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Unique FantasyData Race ID. Example:<code>1</code>, <code>2</code>, etc. */
    raceid: string;
  };

  export class NascarV2FantasygamestatsbyraceFantasyPointsByRaceError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NascarV2FantasygamestatsbyraceFantasyPointsByRaceError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV2LeaderboardbasicLeaderboardBasicRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Unique FantasyData Race ID. Example:<code>1</code>, <code>2</code>, etc. */
    raceid: string;
  };

  export class NascarV2LeaderboardbasicLeaderboardBasicError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NascarV2LeaderboardbasicLeaderboardBasicError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV2LeaderboardbasicfinalLeaderboardBasicFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Unique FantasyData Race ID. Example:<code>1</code>, <code>2</code>, etc. */
    raceid: string;
  };

  export class NascarV2LeaderboardbasicfinalLeaderboardBasicFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NascarV2LeaderboardbasicfinalLeaderboardBasicFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV2RaceresultLeaderboardLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Unique FantasyData Race ID. Example:<code>1</code>, <code>2</code>, etc. */
    raceid: string;
  };

  export class NascarV2RaceresultLeaderboardLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NascarV2RaceresultLeaderboardLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV2RaceresultfinalLeaderboardFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Unique FantasyData Race ID. Example:<code>1</code>, <code>2</code>, etc. */
    raceid: string;
  };

  export class NascarV2RaceresultfinalLeaderboardFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NascarV2RaceresultfinalLeaderboardFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV2RacesSchedulesRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2015</code>, <code>2016</code>. */
    season: string;
  };

  export class NascarV2RacesSchedulesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NascarV2RacesSchedulesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV2SeriesSeriesRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NascarV2SeriesSeriesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NascarV2SeriesSeriesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV2TracksTracksRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2015</code>, <code>2016</code>. */
    season: string;
  };

  export class NascarV2TracksTracksError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NascarV2TracksTracksError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
