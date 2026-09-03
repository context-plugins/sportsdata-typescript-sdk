import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  bettingEntityMetadataCollection3Schema,
  type BettingEntityMetadataCollection3,
} from "../models/betting-entity-metadata-collection3.js";
import { bettingEvent5Schema, type BettingEvent5 } from "../models/betting-event5.js";
import { bettingMarket3Schema, type BettingMarket3 } from "../models/betting-market3.js";
import { Format, formatSchema } from "../models/format.js";
import { Include, includeSchema } from "../models/include.js";
import { raceOddsSchema, type RaceOdds } from "../models/race-odds.js";
import { sportsbookSchema, type Sportsbook } from "../models/sportsbook.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class NascarV3Odds {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  nascarV3OddsBettingEventsByDate(
    request: NascarV3Odds.NascarV3OddsBettingEventsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent5[], NascarV3Odds.NascarV3OddsBettingEventsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nascar/odds/{format}/BettingEventsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent5Schema)) },
        errorFactory: NascarV3Odds.NascarV3OddsBettingEventsByDateError,
      },
      options,
    );
  }

  nascarV3OddsBettingEventsBySeason(
    request: NascarV3Odds.NascarV3OddsBettingEventsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent5[], NascarV3Odds.NascarV3OddsBettingEventsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nascar/odds/{format}/BettingEvents/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent5Schema)) },
        errorFactory: NascarV3Odds.NascarV3OddsBettingEventsBySeasonError,
      },
      options,
    );
  }

  nascarV3OddsBettingMarket(
    request: NascarV3Odds.NascarV3OddsBettingMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket3, NascarV3Odds.NascarV3OddsBettingMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nascar/odds/{format}/BettingMarket/{marketId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "marketId", value: request.marketId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarket3Schema },
        errorFactory: NascarV3Odds.NascarV3OddsBettingMarketError,
      },
      options,
    );
  }

  nascarV3OddsBettingMarketsByEvent(
    request: NascarV3Odds.NascarV3OddsBettingMarketsByEventRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket3[], NascarV3Odds.NascarV3OddsBettingMarketsByEventError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nascar/odds/{format}/BettingMarkets/{eventId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "eventId", value: request.eventId, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket3Schema)) },
        errorFactory: NascarV3Odds.NascarV3OddsBettingMarketsByEventError,
      },
      options,
    );
  }

  nascarV3OddsBettingMarketsByMarketType(
    request: NascarV3Odds.NascarV3OddsBettingMarketsByMarketTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket3[], NascarV3Odds.NascarV3OddsBettingMarketsByMarketTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nascar/odds/{format}/BettingMarketsByMarketType/{eventID}/{marketTypeID}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "eventID", value: request.eventId, schema: s.string() },
          { name: "marketTypeID", value: request.marketTypeId, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket3Schema)) },
        errorFactory: NascarV3Odds.NascarV3OddsBettingMarketsByMarketTypeError,
      },
      options,
    );
  }

  nascarV3OddsBettingMarketsByRace(
    request: NascarV3Odds.NascarV3OddsBettingMarketsByRaceRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket3[], NascarV3Odds.NascarV3OddsBettingMarketsByRaceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nascar/odds/{format}/BettingMarketsByRaceID/{raceID}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "raceID", value: request.raceId, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket3Schema)) },
        errorFactory: NascarV3Odds.NascarV3OddsBettingMarketsByRaceError,
      },
      options,
    );
  }

  nascarV3OddsBettingMetadata(
    request: NascarV3Odds.NascarV3OddsBettingMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEntityMetadataCollection3, NascarV3Odds.NascarV3OddsBettingMetadataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nascar/odds/{format}/BettingMetaData"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingEntityMetadataCollection3Schema },
        errorFactory: NascarV3Odds.NascarV3OddsBettingMetadataError,
      },
      options,
    );
  }

  nascarV3OddsRaceOdds(
    request: NascarV3Odds.NascarV3OddsRaceOddsRequest,
    options?: RequestOptions,
  ): ApiPromise<RaceOdds, NascarV3Odds.NascarV3OddsRaceOddsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nascar/odds/{format}/RaceOdds/{Raceid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "Raceid", value: request.raceid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: raceOddsSchema },
        errorFactory: NascarV3Odds.NascarV3OddsRaceOddsError,
      },
      options,
    );
  }

  nascarV3OddsRaceOddsLineMovement(
    request: NascarV3Odds.NascarV3OddsRaceOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<RaceOdds, NascarV3Odds.NascarV3OddsRaceOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nascar/odds/{format}/RaceOddsLineMovement/{Raceid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "Raceid", value: request.raceid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: raceOddsSchema },
        errorFactory: NascarV3Odds.NascarV3OddsRaceOddsLineMovementError,
      },
      options,
    );
  }

  nascarV3OddsSportsbooksByActive(
    request: NascarV3Odds.NascarV3OddsSportsbooksByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Sportsbook[], NascarV3Odds.NascarV3OddsSportsbooksByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nascar/odds/{format}/ActiveSportsbooks"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sportsbookSchema)) },
        errorFactory: NascarV3Odds.NascarV3OddsSportsbooksByActiveError,
      },
      options,
    );
  }
}

export namespace NascarV3Odds {
  export type NascarV3OddsBettingEventsByDateRequest = {
    format?: Format;
    date: string;
  };

  export class NascarV3OddsBettingEventsByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NascarV3OddsBettingEventsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV3OddsBettingEventsBySeasonRequest = {
    format?: Format;
    season: string;
  };

  export class NascarV3OddsBettingEventsBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NascarV3OddsBettingEventsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV3OddsBettingMarketRequest = {
    format?: Format;
    marketId: string;
  };

  export class NascarV3OddsBettingMarketError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NascarV3OddsBettingMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV3OddsBettingMarketsByEventRequest = {
    format?: Format;
    eventId: string;
    include?: Include;
  };

  export class NascarV3OddsBettingMarketsByEventError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NascarV3OddsBettingMarketsByEventError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV3OddsBettingMarketsByMarketTypeRequest = {
    format?: Format;
    eventId: string;
    marketTypeId: string;
    include?: Include;
  };

  export class NascarV3OddsBettingMarketsByMarketTypeError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NascarV3OddsBettingMarketsByMarketTypeError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV3OddsBettingMarketsByRaceRequest = {
    format?: Format;
    raceId: string;
    include?: Include;
  };

  export class NascarV3OddsBettingMarketsByRaceError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NascarV3OddsBettingMarketsByRaceError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV3OddsBettingMetadataRequest = {
    format?: Format;
  };

  export class NascarV3OddsBettingMetadataError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NascarV3OddsBettingMetadataError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV3OddsRaceOddsRequest = {
    format?: Format;
    raceid: string;
  };

  export class NascarV3OddsRaceOddsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NascarV3OddsRaceOddsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV3OddsRaceOddsLineMovementRequest = {
    format?: Format;
    raceid: string;
  };

  export class NascarV3OddsRaceOddsLineMovementError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NascarV3OddsRaceOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV3OddsSportsbooksByActiveRequest = {
    format?: Format;
  };

  export class NascarV3OddsSportsbooksByActiveError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NascarV3OddsSportsbooksByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
