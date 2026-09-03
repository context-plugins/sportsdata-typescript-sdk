import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  nascarV2DriverDriverProfilesByDriver(
    request: NascarV2.NascarV2DriverDriverProfilesByDriverRequest,
    options?: RequestOptions,
  ): ApiPromise<Driver, NascarV2.NascarV2DriverDriverProfilesByDriverError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/nascar/v2/{format}/driver/{driverid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "driverid", value: request.driverid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: driverSchema },
        errorFactory: NascarV2.NascarV2DriverDriverProfilesByDriverError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/nascar/v2/{format}/DriverRaceProjections/{raceid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "raceid", value: request.raceid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => driverRaceProjectionSchema)) },
        errorFactory: NascarV2.NascarV2DriverraceprojectionsProjectedPlayerRaceStatsByRaceError,
      },
      options,
    );
  }

  nascarV2DriversDriverProfilesAll(
    request: NascarV2.NascarV2DriversDriverProfilesAllRequest,
    options?: RequestOptions,
  ): ApiPromise<Driver[], NascarV2.NascarV2DriversDriverProfilesAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/nascar/v2/{format}/drivers"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => driverSchema)) },
        errorFactory: NascarV2.NascarV2DriversDriverProfilesAllError,
      },
      options,
    );
  }

  nascarV2DriversbyactiveDriversByActive(
    request: NascarV2.NascarV2DriversbyactiveDriversByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<DriverBasic[], NascarV2.NascarV2DriversbyactiveDriversByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/nascar/v2/{format}/driversbyactive"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => driverBasicSchema)) },
        errorFactory: NascarV2.NascarV2DriversbyactiveDriversByActiveError,
      },
      options,
    );
  }

  nascarV2EntrylistbyraceEntryListByRace(
    request: NascarV2.NascarV2EntrylistbyraceEntryListByRaceRequest,
    options?: RequestOptions,
  ): ApiPromise<DriverRaceBasic[], NascarV2.NascarV2EntrylistbyraceEntryListByRaceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/nascar/v2/{format}/EntryListbyRace/{raceid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "raceid", value: request.raceid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => driverRaceBasicSchema)) },
        errorFactory: NascarV2.NascarV2EntrylistbyraceEntryListByRaceError,
      },
      options,
    );
  }

  nascarV2FantasygamestatsbyraceFantasyPointsByRace(
    request: NascarV2.NascarV2FantasygamestatsbyraceFantasyPointsByRaceRequest,
    options?: RequestOptions,
  ): ApiPromise<FantasyRace, NascarV2.NascarV2FantasygamestatsbyraceFantasyPointsByRaceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/nascar/v2/{format}/FantasyGameStatsByRace/{raceid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "raceid", value: request.raceid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fantasyRaceSchema },
        errorFactory: NascarV2.NascarV2FantasygamestatsbyraceFantasyPointsByRaceError,
      },
      options,
    );
  }

  nascarV2LeaderboardbasicLeaderboardBasic(
    request: NascarV2.NascarV2LeaderboardbasicLeaderboardBasicRequest,
    options?: RequestOptions,
  ): ApiPromise<RaceResultBasic, NascarV2.NascarV2LeaderboardbasicLeaderboardBasicError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/nascar/v2/{format}/LeaderboardBasic/{raceid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "raceid", value: request.raceid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: raceResultBasicSchema },
        errorFactory: NascarV2.NascarV2LeaderboardbasicLeaderboardBasicError,
      },
      options,
    );
  }

  nascarV2LeaderboardbasicfinalLeaderboardBasicFinal(
    request: NascarV2.NascarV2LeaderboardbasicfinalLeaderboardBasicFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<RaceResultBasic, NascarV2.NascarV2LeaderboardbasicfinalLeaderboardBasicFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/nascar/v2/{format}/LeaderboardBasicFinal/{raceid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "raceid", value: request.raceid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: raceResultBasicSchema },
        errorFactory: NascarV2.NascarV2LeaderboardbasicfinalLeaderboardBasicFinalError,
      },
      options,
    );
  }

  nascarV2RaceresultLeaderboardLiveFinal(
    request: NascarV2.NascarV2RaceresultLeaderboardLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<RaceResult, NascarV2.NascarV2RaceresultLeaderboardLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/nascar/v2/{format}/raceresult/{raceid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "raceid", value: request.raceid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: raceResultSchema },
        errorFactory: NascarV2.NascarV2RaceresultLeaderboardLiveFinalError,
      },
      options,
    );
  }

  nascarV2RaceresultfinalLeaderboardFinal(
    request: NascarV2.NascarV2RaceresultfinalLeaderboardFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<RaceResult, NascarV2.NascarV2RaceresultfinalLeaderboardFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/nascar/v2/{format}/raceresultfinal/{raceid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "raceid", value: request.raceid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: raceResultSchema },
        errorFactory: NascarV2.NascarV2RaceresultfinalLeaderboardFinalError,
      },
      options,
    );
  }

  nascarV2RacesSchedules(
    request: NascarV2.NascarV2RacesSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<Race[], NascarV2.NascarV2RacesSchedulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/nascar/v2/{format}/races/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => raceSchema)) },
        errorFactory: NascarV2.NascarV2RacesSchedulesError,
      },
      options,
    );
  }

  nascarV2SeriesSeries(
    request: NascarV2.NascarV2SeriesSeriesRequest,
    options?: RequestOptions,
  ): ApiPromise<Series1[], NascarV2.NascarV2SeriesSeriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/nascar/v2/{format}/series"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => series1Schema)) },
        errorFactory: NascarV2.NascarV2SeriesSeriesError,
      },
      options,
    );
  }

  nascarV2TracksTracks(
    request: NascarV2.NascarV2TracksTracksRequest,
    options?: RequestOptions,
  ): ApiPromise<Tracks[], NascarV2.NascarV2TracksTracksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/nascar/v2/{format}/tracks/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
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
    format?: Format;
    driverid: string;
  };

  export class NascarV2DriverDriverProfilesByDriverError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NascarV2DriverDriverProfilesByDriverError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV2DriverraceprojectionsProjectedPlayerRaceStatsByRaceRequest = {
    format?: Format;
    raceid: string;
  };

  export class NascarV2DriverraceprojectionsProjectedPlayerRaceStatsByRaceError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NascarV2DriverraceprojectionsProjectedPlayerRaceStatsByRaceError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV2DriversDriverProfilesAllRequest = {
    format?: Format;
  };

  export class NascarV2DriversDriverProfilesAllError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NascarV2DriversDriverProfilesAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV2DriversbyactiveDriversByActiveRequest = {
    format?: Format;
  };

  export class NascarV2DriversbyactiveDriversByActiveError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NascarV2DriversbyactiveDriversByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV2EntrylistbyraceEntryListByRaceRequest = {
    format?: Format;
    raceid: string;
  };

  export class NascarV2EntrylistbyraceEntryListByRaceError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NascarV2EntrylistbyraceEntryListByRaceError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV2FantasygamestatsbyraceFantasyPointsByRaceRequest = {
    format?: Format;
    raceid: string;
  };

  export class NascarV2FantasygamestatsbyraceFantasyPointsByRaceError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NascarV2FantasygamestatsbyraceFantasyPointsByRaceError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV2LeaderboardbasicLeaderboardBasicRequest = {
    format?: Format;
    raceid: string;
  };

  export class NascarV2LeaderboardbasicLeaderboardBasicError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NascarV2LeaderboardbasicLeaderboardBasicError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV2LeaderboardbasicfinalLeaderboardBasicFinalRequest = {
    format?: Format;
    raceid: string;
  };

  export class NascarV2LeaderboardbasicfinalLeaderboardBasicFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NascarV2LeaderboardbasicfinalLeaderboardBasicFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV2RaceresultLeaderboardLiveFinalRequest = {
    format?: Format;
    raceid: string;
  };

  export class NascarV2RaceresultLeaderboardLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NascarV2RaceresultLeaderboardLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV2RaceresultfinalLeaderboardFinalRequest = {
    format?: Format;
    raceid: string;
  };

  export class NascarV2RaceresultfinalLeaderboardFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NascarV2RaceresultfinalLeaderboardFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV2RacesSchedulesRequest = {
    format?: Format;
    season: string;
  };

  export class NascarV2RacesSchedulesError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NascarV2RacesSchedulesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV2SeriesSeriesRequest = {
    format?: Format;
  };

  export class NascarV2SeriesSeriesError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NascarV2SeriesSeriesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV2TracksTracksRequest = {
    format?: Format;
    season: string;
  };

  export class NascarV2TracksTracksError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NascarV2TracksTracksError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
