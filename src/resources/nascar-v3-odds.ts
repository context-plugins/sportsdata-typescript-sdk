import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * Betting Events - by Date
   *
   * @remarks
   * The list of current BettingEvents for the given date, from which Betting Market data can be
   * gathered via the Betting Markets by Event endpoint, for all available Betting Market types
   * (e.g. Player Props, Team Props.)
   *
   * @returns Success
   *
   * @throws {@link NascarV3Odds.NascarV3OddsBettingEventsByDateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nascarV3OddsBettingEventsByDate(
    request: NascarV3Odds.NascarV3OddsBettingEventsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent5[], NascarV3Odds.NascarV3OddsBettingEventsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nascar/odds/{format}/BettingEventsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent5Schema)) },
        errorFactory: NascarV3Odds.NascarV3OddsBettingEventsByDateError,
      },
      options,
    );
  }

  /**
   * Betting Events - by Season
   *
   * @remarks
   * The list of current BettingEvents for the given season, from which Betting Market data can be
   * gathered via the Betting Markets by Event endpoint, for all available Betting Market types
   * (e.g. Player Props, Team Props.)
   *
   * @returns Success
   *
   * @throws {@link NascarV3Odds.NascarV3OddsBettingEventsBySeasonError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nascarV3OddsBettingEventsBySeason(
    request: NascarV3Odds.NascarV3OddsBettingEventsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent5[], NascarV3Odds.NascarV3OddsBettingEventsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nascar/odds/{format}/BettingEvents/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent5Schema)) },
        errorFactory: NascarV3Odds.NascarV3OddsBettingEventsBySeasonError,
      },
      options,
    );
  }

  /**
   * Betting Market
   *
   * @remarks
   * Returns full line movement for a given BettingMarket. Due to the sheer size of the output and
   * the level of detail, it is intended for historical data purposes and not for the most
   * up-to-the-second lines.
   *
   * @returns Success
   *
   * @throws {@link NascarV3Odds.NascarV3OddsBettingMarketError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nascarV3OddsBettingMarket(
    request: NascarV3Odds.NascarV3OddsBettingMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket3, NascarV3Odds.NascarV3OddsBettingMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nascar/odds/{format}/BettingMarket/{marketId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "marketId", value: request.marketId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarket3Schema },
        errorFactory: NascarV3Odds.NascarV3OddsBettingMarketError,
      },
      options,
    );
  }

  /**
   * Betting Markets - by Event
   *
   * @remarks
   * Returns the markets of all available types (e.g. Player Props, Team Props) and available
   * outcomes for a given BettingEventID.
   *
   * @returns Success
   *
   * @throws {@link NascarV3Odds.NascarV3OddsBettingMarketsByEventError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nascarV3OddsBettingMarketsByEvent(
    request: NascarV3Odds.NascarV3OddsBettingMarketsByEventRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket3[], NascarV3Odds.NascarV3OddsBettingMarketsByEventError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nascar/odds/{format}/BettingMarkets/{eventId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "eventId", value: request.eventId, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket3Schema)) },
        errorFactory: NascarV3Odds.NascarV3OddsBettingMarketsByEventError,
      },
      options,
    );
  }

  /**
   * Betting Markets - by Market Type
   *
   * @remarks
   * Returns Markets and available outcomes for a given event and market type requested. A lighter
   * call than by BettingEventID as it only includes markets tagged with the specific MarketType, a
   * full list of which is available for each sport in its Betting Metadata endpoint.
   *
   * @returns Success
   *
   * @throws {@link NascarV3Odds.NascarV3OddsBettingMarketsByMarketTypeError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nascarV3OddsBettingMarketsByMarketType(
    request: NascarV3Odds.NascarV3OddsBettingMarketsByMarketTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket3[], NascarV3Odds.NascarV3OddsBettingMarketsByMarketTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
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
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket3Schema)) },
        errorFactory: NascarV3Odds.NascarV3OddsBettingMarketsByMarketTypeError,
      },
      options,
    );
  }

  /**
   * Betting Markets - by Race
   *
   * @remarks
   * Returns the markets and available outcomes for a given RaceID. Works the same as by
   * BettingEventID but requires less ID mapping.
   *
   * @returns Success
   *
   * @throws {@link NascarV3Odds.NascarV3OddsBettingMarketsByRaceError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nascarV3OddsBettingMarketsByRace(
    request: NascarV3Odds.NascarV3OddsBettingMarketsByRaceRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket3[], NascarV3Odds.NascarV3OddsBettingMarketsByRaceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nascar/odds/{format}/BettingMarketsByRaceID/{raceID}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "raceID", value: request.raceId, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket3Schema)) },
        errorFactory: NascarV3Odds.NascarV3OddsBettingMarketsByRaceError,
      },
      options,
    );
  }

  /**
   * Betting Metadata
   *
   * @remarks
   * Returns the list of MarketTypes, BetTypes, PeriodTypes, OutcomeTypes, and ResultTypes to map
   * the IDs to descriptive names. Also includes a list of the MarketType, BetType & PeriodType
   * combinations which we will have resulting for.
   *
   * @returns Success
   *
   * @throws {@link NascarV3Odds.NascarV3OddsBettingMetadataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nascarV3OddsBettingMetadata(
    request: NascarV3Odds.NascarV3OddsBettingMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEntityMetadataCollection3, NascarV3Odds.NascarV3OddsBettingMetadataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nascar/odds/{format}/BettingMetaData"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingEntityMetadataCollection3Schema },
        errorFactory: NascarV3Odds.NascarV3OddsBettingMetadataError,
      },
      options,
    );
  }

  /**
   * Race Odds
   *
   * @remarks
   * Returns pre-race for a given race. Only returns the most recently seen odds, not inclusive of
   * line movement.
   *
   * @returns Success
   *
   * @throws {@link NascarV3Odds.NascarV3OddsRaceOddsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nascarV3OddsRaceOdds(
    request: NascarV3Odds.NascarV3OddsRaceOddsRequest,
    options?: RequestOptions,
  ): ApiPromise<RaceOdds, NascarV3Odds.NascarV3OddsRaceOddsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nascar/odds/{format}/RaceOdds/{Raceid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "Raceid", value: request.raceid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: raceOddsSchema },
        errorFactory: NascarV3Odds.NascarV3OddsRaceOddsError,
      },
      options,
    );
  }

  /**
   * Race Odds Line Movement
   *
   * @remarks
   * Returns pre-race for a given race. Only returns the most recently seen odds. This is inclusive
   * of line movement; as it is best suited for viewing historical odds, its cache time is slower
   * than the Race Odds endpoint.
   *
   * @returns Success
   *
   * @throws {@link NascarV3Odds.NascarV3OddsRaceOddsLineMovementError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nascarV3OddsRaceOddsLineMovement(
    request: NascarV3Odds.NascarV3OddsRaceOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<RaceOdds, NascarV3Odds.NascarV3OddsRaceOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nascar/odds/{format}/RaceOddsLineMovement/{Raceid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "Raceid", value: request.raceid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: raceOddsSchema },
        errorFactory: NascarV3Odds.NascarV3OddsRaceOddsLineMovementError,
      },
      options,
    );
  }

  /**
   * Sportsbooks - by Active
   *
   * @remarks
   * A list of all available sportsbooks with their associated unique IDs.
   *
   * @returns Success
   *
   * @throws {@link NascarV3Odds.NascarV3OddsSportsbooksByActiveError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nascarV3OddsSportsbooksByActive(
    request: NascarV3Odds.NascarV3OddsSportsbooksByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Sportsbook[], NascarV3Odds.NascarV3OddsSportsbooksByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nascar/odds/{format}/ActiveSportsbooks"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
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
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the race(s). Examples: 2023-02-19. */
    date: string;
  };

  export class NascarV3OddsBettingEventsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NascarV3OddsBettingEventsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV3OddsBettingEventsBySeasonRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The season to get BettingEvents. Valid entries are formatted as years such as
     * <code>2023</code>
     */
    season: string;
  };

  export class NascarV3OddsBettingEventsBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NascarV3OddsBettingEventsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV3OddsBettingMarketRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The MarketId of the desired market for which to pull all outcomes/bets. */
    marketId: string;
  };

  export class NascarV3OddsBettingMarketError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NascarV3OddsBettingMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV3OddsBettingMarketsByEventRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The EventId of the desired event/game for which to pull all betting markets (includes
     * outcomes/bets).
     */
    eventId: string;
    /**
     * This parameter indicates which <code>BettingOutcome</code> records to return in the payload.
     * By default, this endpoint only returns available outcomes, excluding the unlisted bets.
     * <br><br><b>Important Note:</b> the default parameter of <code>available</code> is much faster
     * and provides the best performance. Passing unlisted will return unlisted odds, but these are
     * cached for much longer and may be several minutes old. For best performance, the default
     * parameter is highly recommended. <br><br>Possible values include:
     * <br><br><code>available</code> - excludes any betting outcomes that have been
     * removed/unlisted by the respective sportsbook. This is more lightweight and delivers odds
     * much faster than using unlisted. <br><br><code>unlisted</code> - includes the most recently
     * available betting outcome per sportsbook, for each listed market, even those outcomes are
     * expired/unlisted or otherwise unavailable from the respective sportsbook. This is a far
     * heavier payload, and it's cached for much longer than available. <br><br>
     *
     * @default Include.Available
     */
    include?: Include;
  };

  export class NascarV3OddsBettingMarketsByEventError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NascarV3OddsBettingMarketsByEventError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV3OddsBettingMarketsByMarketTypeRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The EventId of the desired event/game for which to pull all betting markets (includes
     * outcomes/bets).
     */
    eventId: string;
    /**
     * The Market Type ID of the desired MarketTypes to pull. Some common types include: 1 for Race
     * Lines, 2 for Driver Props, 3 for Head to Head Props, 4 for Group Props, 6 for Race Props
     */
    marketTypeId: string;
    /**
     * This parameter indicates which <code>BettingOutcome</code> records to return in the payload.
     * By default, this endpoint only returns available outcomes, excluding the unlisted bets.
     * <br><br><b>Important Note:</b> the default parameter of <code>available</code> is much faster
     * and provides the best performance. Passing unlisted will return unlisted odds, but these are
     * cached for much longer and may be several minutes old. For best performance, the default
     * parameter is highly recommended. <br><br>Possible values include:
     * <br><br><code>available</code> - excludes any betting outcomes that have been
     * removed/unlisted by the respective sportsbook. This is more lightweight and delivers odds
     * much faster than using unlisted. <br><br><code>unlisted</code> - includes the most recently
     * available betting outcome per sportsbook, for each listed market, even those outcomes are
     * expired/unlisted or otherwise unavailable from the respective sportsbook. This is a far
     * heavier payload, and it's cached for much longer than available. <br><br>
     *
     * @default Include.Available
     */
    include?: Include;
  };

  export class NascarV3OddsBettingMarketsByMarketTypeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NascarV3OddsBettingMarketsByMarketTypeError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV3OddsBettingMarketsByRaceRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The RaceID of the desired race for which to pull all betting markets (includes
     * outcomes/bets).
     */
    raceId: string;
    /**
     * This parameter indicates which <code>BettingOutcome</code> records to return in the payload.
     * By default, this endpoint only returns available outcomes, excluding the unlisted bets.
     * <br><br><b>Important Note:</b> the default parameter of <code>available</code> is much faster
     * and provides the best performance. Passing unlisted will return unlisted odds, but these are
     * cached for much longer and may be several minutes old. For best performance, the default
     * parameter is highly recommended. <br><br>Possible values include:
     * <br><br><code>available</code> - excludes any betting outcomes that have been
     * removed/unlisted by the respective sportsbook. This is more lightweight and delivers odds
     * much faster than using unlisted. <br><br><code>unlisted</code> - includes the most recently
     * available betting outcome per sportsbook, for each listed market, even those outcomes are
     * expired/unlisted or otherwise unavailable from the respective sportsbook. This is a far
     * heavier payload, and it's cached for much longer than available. <br><br>
     *
     * @default Include.Available
     */
    include?: Include;
  };

  export class NascarV3OddsBettingMarketsByRaceError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NascarV3OddsBettingMarketsByRaceError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV3OddsBettingMetadataRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NascarV3OddsBettingMetadataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NascarV3OddsBettingMetadataError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV3OddsRaceOddsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Unique FantasyData Race ID. Example:<code>1</code>, <code>2</code>, etc. */
    raceid: string;
  };

  export class NascarV3OddsRaceOddsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NascarV3OddsRaceOddsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV3OddsRaceOddsLineMovementRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Unique FantasyData Race ID. Example:<code>1</code>, <code>2</code>, etc. */
    raceid: string;
  };

  export class NascarV3OddsRaceOddsLineMovementError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NascarV3OddsRaceOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NascarV3OddsSportsbooksByActiveRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NascarV3OddsSportsbooksByActiveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NascarV3OddsSportsbooksByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
