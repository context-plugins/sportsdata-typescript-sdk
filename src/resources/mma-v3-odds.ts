import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  bettingEntityMetadataCollection4Schema,
  type BettingEntityMetadataCollection4,
} from "../models/betting-entity-metadata-collection4.js";
import { bettingEvent6Schema, type BettingEvent6 } from "../models/betting-event6.js";
import { bettingMarket4Schema, type BettingMarket4 } from "../models/betting-market4.js";
import { eventOddsSchema, type EventOdds } from "../models/event-odds.js";
import { Format, formatSchema } from "../models/format.js";
import { Include, includeSchema } from "../models/include.js";
import { sportsbookSchema, type Sportsbook } from "../models/sportsbook.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class MmaV3Odds {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  mmaV3OddsBettingEventsByEvent(
    request: MmaV3Odds.MmaV3OddsBettingEventsByEventRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent6[], MmaV3Odds.MmaV3OddsBettingEventsByEventError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mma/odds/{format}/BettingEventsByEvent/{eventId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "eventId", value: request.eventId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent6Schema)) },
        errorFactory: MmaV3Odds.MmaV3OddsBettingEventsByEventError,
      },
      options,
    );
  }

  mmaV3OddsBettingEventsUpcoming(
    request: MmaV3Odds.MmaV3OddsBettingEventsUpcomingRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent6[], MmaV3Odds.MmaV3OddsBettingEventsUpcomingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mma/odds/{format}/UpcomingBettingEvents"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent6Schema)) },
        errorFactory: MmaV3Odds.MmaV3OddsBettingEventsUpcomingError,
      },
      options,
    );
  }

  mmaV3OddsBettingFighterPropsByEvent(
    request: MmaV3Odds.MmaV3OddsBettingFighterPropsByEventRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket4[], MmaV3Odds.MmaV3OddsBettingFighterPropsByEventError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mma/odds/{format}/BettingFighterPropsByEvent/{eventId}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket4Schema)) },
        errorFactory: MmaV3Odds.MmaV3OddsBettingFighterPropsByEventError,
      },
      options,
    );
  }

  mmaV3OddsBettingMarket(
    request: MmaV3Odds.MmaV3OddsBettingMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket4, MmaV3Odds.MmaV3OddsBettingMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mma/odds/{format}/BettingMarket/{marketId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "marketId", value: request.marketId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarket4Schema },
        errorFactory: MmaV3Odds.MmaV3OddsBettingMarketError,
      },
      options,
    );
  }

  mmaV3OddsBettingMarketsByEvent(
    request: MmaV3Odds.MmaV3OddsBettingMarketsByEventRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket4[], MmaV3Odds.MmaV3OddsBettingMarketsByEventError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mma/odds/{format}/BettingMarketsByBettingEvent/{bettingEventId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "bettingEventId", value: request.bettingEventId, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket4Schema)) },
        errorFactory: MmaV3Odds.MmaV3OddsBettingMarketsByEventError,
      },
      options,
    );
  }

  mmaV3OddsBettingMarketsByMarketType(
    request: MmaV3Odds.MmaV3OddsBettingMarketsByMarketTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket4[], MmaV3Odds.MmaV3OddsBettingMarketsByMarketTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/mma/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeId}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "eventId", value: request.eventId, schema: s.string() },
          { name: "marketTypeId", value: request.marketTypeId, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket4Schema)) },
        errorFactory: MmaV3Odds.MmaV3OddsBettingMarketsByMarketTypeError,
      },
      options,
    );
  }

  mmaV3OddsBettingMetadata(
    request: MmaV3Odds.MmaV3OddsBettingMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEntityMetadataCollection4, MmaV3Odds.MmaV3OddsBettingMetadataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mma/odds/{format}/BettingMetadata"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingEntityMetadataCollection4Schema },
        errorFactory: MmaV3Odds.MmaV3OddsBettingMetadataError,
      },
      options,
    );
  }

  mmaV3OddsEventFightOdds(
    request: MmaV3Odds.MmaV3OddsEventFightOddsRequest,
    options?: RequestOptions,
  ): ApiPromise<EventOdds, MmaV3Odds.MmaV3OddsEventFightOddsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mma/odds/{format}/EventOdds/{eventid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "eventid", value: request.eventid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventOddsSchema },
        errorFactory: MmaV3Odds.MmaV3OddsEventFightOddsError,
      },
      options,
    );
  }

  mmaV3OddsEventFightOddsLineMovement(
    request: MmaV3Odds.MmaV3OddsEventFightOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<EventOdds, MmaV3Odds.MmaV3OddsEventFightOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mma/odds/{format}/EventOddsLineMovement/{eventid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "eventid", value: request.eventid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventOddsSchema },
        errorFactory: MmaV3Odds.MmaV3OddsEventFightOddsLineMovementError,
      },
      options,
    );
  }

  mmaV3OddsSportsbooksByActive(
    request: MmaV3Odds.MmaV3OddsSportsbooksByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Sportsbook[], MmaV3Odds.MmaV3OddsSportsbooksByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mma/odds/{format}/ActiveSportsbooks"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sportsbookSchema)) },
        errorFactory: MmaV3Odds.MmaV3OddsSportsbooksByActiveError,
      },
      options,
    );
  }
}

export namespace MmaV3Odds {
  export type MmaV3OddsBettingEventsByEventRequest = {
    format?: Format;
    eventId: string;
  };

  export class MmaV3OddsBettingEventsByEventError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MmaV3OddsBettingEventsByEventError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MmaV3OddsBettingEventsUpcomingRequest = {
    format?: Format;
  };

  export class MmaV3OddsBettingEventsUpcomingError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MmaV3OddsBettingEventsUpcomingError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MmaV3OddsBettingFighterPropsByEventRequest = {
    format?: Format;
    eventId: string;
    include?: Include;
  };

  export class MmaV3OddsBettingFighterPropsByEventError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MmaV3OddsBettingFighterPropsByEventError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MmaV3OddsBettingMarketRequest = {
    format?: Format;
    marketId: string;
  };

  export class MmaV3OddsBettingMarketError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<MmaV3OddsBettingMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MmaV3OddsBettingMarketsByEventRequest = {
    format?: Format;
    bettingEventId: string;
    include?: Include;
  };

  export class MmaV3OddsBettingMarketsByEventError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MmaV3OddsBettingMarketsByEventError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MmaV3OddsBettingMarketsByMarketTypeRequest = {
    format?: Format;
    eventId: string;
    marketTypeId: string;
    include?: Include;
  };

  export class MmaV3OddsBettingMarketsByMarketTypeError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MmaV3OddsBettingMarketsByMarketTypeError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MmaV3OddsBettingMetadataRequest = {
    format?: Format;
  };

  export class MmaV3OddsBettingMetadataError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<MmaV3OddsBettingMetadataError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MmaV3OddsEventFightOddsRequest = {
    format?: Format;
    eventid: string;
  };

  export class MmaV3OddsEventFightOddsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<MmaV3OddsEventFightOddsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MmaV3OddsEventFightOddsLineMovementRequest = {
    format?: Format;
    eventid: string;
  };

  export class MmaV3OddsEventFightOddsLineMovementError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MmaV3OddsEventFightOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MmaV3OddsSportsbooksByActiveRequest = {
    format?: Format;
  };

  export class MmaV3OddsSportsbooksByActiveError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MmaV3OddsSportsbooksByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
