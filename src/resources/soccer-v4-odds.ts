import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  bettingEntityMetadataCollection1Schema,
  type BettingEntityMetadataCollection1,
} from "../models/betting-entity-metadata-collection1.js";
import { bettingEvent3Schema, type BettingEvent3 } from "../models/betting-event3.js";
import { bettingMarket1Schema, type BettingMarket1 } from "../models/betting-market1.js";
import { Format, formatSchema } from "../models/format.js";
import { gameInfoResult6Schema, type GameInfoResult6 } from "../models/game-info-result6.js";
import { gameInfo7Schema, type GameInfo7 } from "../models/game-info7.js";
import { sportsbookSchema, type Sportsbook } from "../models/sportsbook.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class SoccerV4Odds {
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
   * The list of current BettingEvents for the given date and competition, from which Betting Market
   * data can be gathered via the Betting Markets by Event endpoint, for all available Betting
   * Market types (e.g. Player Props, Team Props.)
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Odds.SoccerV4OddsBettingEventsByDateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsBettingEventsByDate(
    request: SoccerV4Odds.SoccerV4OddsBettingEventsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent3[], SoccerV4Odds.SoccerV4OddsBettingEventsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/odds/{format}/BettingEventsByDate/{competition}/{date}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent3Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingEventsByDateError,
      },
      options,
    );
  }

  /**
   * Betting Events - by Season
   *
   * @remarks
   * The list of current BettingEvents for the given season within a given competition, from which
   * Betting Market data can be gathered via the Betting Markets by Event endpoint, for all
   * available Betting Market types (e.g. Player Props, Team Props.)
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Odds.SoccerV4OddsBettingEventsBySeasonError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsBettingEventsBySeason(
    request: SoccerV4Odds.SoccerV4OddsBettingEventsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent3[], SoccerV4Odds.SoccerV4OddsBettingEventsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/odds/{format}/BettingEventsBySeason/{competition}/{season}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "season", value: request.season, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent3Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingEventsBySeasonError,
      },
      options,
    );
  }

  /**
   * Betting Futures - by Season
   *
   * @remarks
   * Returns available Futures markets for the given season and a given competition. Does not
   * include line movement.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Odds.SoccerV4OddsBettingFuturesBySeasonError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsBettingFuturesBySeason(
    request: SoccerV4Odds.SoccerV4OddsBettingFuturesBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent3[], SoccerV4Odds.SoccerV4OddsBettingFuturesBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/odds/{format}/BettingFuturesBySeason/{competition}/{season}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "season", value: request.season, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent3Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingFuturesBySeasonError,
      },
      options,
    );
  }

  /**
   * Betting Futures - by Season [Sportsbook Group]
   *
   * @remarks
   * Returns available Futures markets for the given season. Does not include line movement. A
   * Sportsbook Group must be specified as a URL parameter.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Odds.SoccerV4OddsBettingFuturesBySeasonSportsbookGroupError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsBettingFuturesBySeasonSportsbookGroup(
    request: SoccerV4Odds.SoccerV4OddsBettingFuturesBySeasonSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent3[], SoccerV4Odds.SoccerV4OddsBettingFuturesBySeasonSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/odds/{format}/BettingFuturesBySeason/{competition}/{season}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "season", value: request.season, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent3Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingFuturesBySeasonSportsbookGroupError,
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
   * @throws {@link SoccerV4Odds.SoccerV4OddsBettingMarketError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsBettingMarket(
    request: SoccerV4Odds.SoccerV4OddsBettingMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket1, SoccerV4Odds.SoccerV4OddsBettingMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/soccer/odds/{format}/BettingMarket/{competition}/{marketId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "marketId", value: request.marketId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarket1Schema },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingMarketError,
      },
      options,
    );
  }

  /**
   * Betting Market [Sportsbook Group]
   *
   * @remarks
   * Returns full line movement for a given BettingMarket. Due to the sheer size of the output and
   * the level of detail, it is intended for historical data purposes and not for the most
   * up-to-the-second lines. A Sportsbook Group must be specified as a URL parameter.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Odds.SoccerV4OddsBettingMarketSportsbookGroupError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsBettingMarketSportsbookGroup(
    request: SoccerV4Odds.SoccerV4OddsBettingMarketSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket1, SoccerV4Odds.SoccerV4OddsBettingMarketSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/odds/{format}/BettingMarket/{competition}/{marketId}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "marketId", value: request.marketId, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarket1Schema },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingMarketSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * Betting Markets - by Event
   *
   * @remarks
   * Returns the markets of all available types (e.g. Player Props, Team Props) and available
   * outcomes for a given BettingEventID within a given competition.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Odds.SoccerV4OddsBettingMarketsByEventError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsBettingMarketsByEvent(
    request: SoccerV4Odds.SoccerV4OddsBettingMarketsByEventRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket1[], SoccerV4Odds.SoccerV4OddsBettingMarketsByEventError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/soccer/odds/{format}/BettingMarkets/{competition}/{eventId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "eventId", value: request.eventId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket1Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingMarketsByEventError,
      },
      options,
    );
  }

  /**
   * Betting Markets - by Event [Sportsbook Group]
   *
   * @remarks
   * Returns the markets and available outcomes for a given BettingEventID. A Sportsbook Group must
   * be specified as a URL parameter.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Odds.SoccerV4OddsBettingMarketsByEventSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsBettingMarketsByEventSportsbookGroup(
    request: SoccerV4Odds.SoccerV4OddsBettingMarketsByEventSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket1[], SoccerV4Odds.SoccerV4OddsBettingMarketsByEventSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/odds/{format}/BettingMarketsByEvent/{competition}/{eventId}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "eventId", value: request.eventId, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket1Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingMarketsByEventSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * Betting Markets - by Game
   *
   * @remarks
   * Returns the markets of all available types (e.g. Player Props, Team Props) and available
   * outcomes for a given GameID within a given competition.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Odds.SoccerV4OddsBettingMarketsByGameError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsBettingMarketsByGame(
    request: SoccerV4Odds.SoccerV4OddsBettingMarketsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket1[], SoccerV4Odds.SoccerV4OddsBettingMarketsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/odds/{format}/BettingMarketsByGameID/{competition}/{gameid}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket1Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingMarketsByGameError,
      },
      options,
    );
  }

  /**
   * Betting Markets - by Game [Sportsbook Group]
   *
   * @remarks
   * Returns the markets of all available types (e.g. Player Props, Team Props) and available
   * outcomes for a given GameID in a competition. A Sportsbook Group must be specified as a URL
   * parameter.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Odds.SoccerV4OddsBettingMarketsByGameSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsBettingMarketsByGameSportsbookGroup(
    request: SoccerV4Odds.SoccerV4OddsBettingMarketsByGameSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket1[], SoccerV4Odds.SoccerV4OddsBettingMarketsByGameSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/odds/{format}/BettingMarketsByGameID/{competition}/{gameid}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket1Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingMarketsByGameSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * Betting Markets - by Market Type
   *
   * @remarks
   * Returns Markets and available outcomes for a given event (within a competition) and market type
   * requested. A lighter call than by BettingEventID as it only includes markets tagged with the
   * specific MarketType, a full list of which is available for each sport in its Betting Metadata
   * endpoint.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Odds.SoccerV4OddsBettingMarketsByMarketTypeError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsBettingMarketsByMarketType(
    request: SoccerV4Odds.SoccerV4OddsBettingMarketsByMarketTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket1[], SoccerV4Odds.SoccerV4OddsBettingMarketsByMarketTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/odds/{format}/BettingMarketsByMarketType/{competition}/{eventId}/{marketTypeID}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "eventId", value: request.eventId, schema: s.string() },
          { name: "marketTypeID", value: request.marketTypeId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket1Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingMarketsByMarketTypeError,
      },
      options,
    );
  }

  /**
   * Betting Markets - by Market Type [Sportsbook Group]
   *
   * @remarks
   * Returns Markets and available outcomes for a given event and market type requested. A lighter
   * call than by BettingEventID as it only includes markets tagged with the specific MarketType, a
   * full list of which is available for each sport in its Betting Metadata endpoint. A Sportsbook
   * Group must be specified as a URL parameter.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Odds.SoccerV4OddsBettingMarketsByMarketTypeSportsbookGroupError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsBettingMarketsByMarketTypeSportsbookGroup(
    request: SoccerV4Odds.SoccerV4OddsBettingMarketsByMarketTypeSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket1[], SoccerV4Odds.SoccerV4OddsBettingMarketsByMarketTypeSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/odds/{format}/BettingMarketsByMarketType/{competition}/{eventId}/{marketTypeID}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "eventId", value: request.eventId, schema: s.string() },
          { name: "marketTypeID", value: request.marketTypeId, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket1Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingMarketsByMarketTypeSportsbookGroupError,
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
   * @throws {@link SoccerV4Odds.SoccerV4OddsBettingMetadataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsBettingMetadata(
    request: SoccerV4Odds.SoccerV4OddsBettingMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEntityMetadataCollection1, SoccerV4Odds.SoccerV4OddsBettingMetadataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/soccer/odds/{format}/BettingMetadata"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingEntityMetadataCollection1Schema },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingMetadataError,
      },
      options,
    );
  }

  /**
   * Betting Player Props - by Game
   *
   * @remarks
   * This works in the same way as Betting Markets by Market Type but is prefiltered to the Player
   * Props type only. Ideal if your application will only ever require Player Props, but if you also
   * want Team Props etc. it is recommended to use the by Market Type endpoint.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Odds.SoccerV4OddsBettingPlayerPropsByGameError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsBettingPlayerPropsByGame(
    request: SoccerV4Odds.SoccerV4OddsBettingPlayerPropsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket1[], SoccerV4Odds.SoccerV4OddsBettingPlayerPropsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/odds/{format}/BettingPlayerPropsByGameID/{competition}/{gameId}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "gameId", value: request.gameId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket1Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingPlayerPropsByGameError,
      },
      options,
    );
  }

  /**
   * Betting Player Props - by Game [Sportsbook Group]
   *
   * @remarks
   * This works in the same way as Betting Markets by Market Type but is prefiltered to the Player
   * Props type only. Ideal if your application will only ever require Player Props, but if you also
   * want Team Props etc. it is recommended to use the by Market Type endpoint. A Sportsbook Group
   * must be specified as a URL parameter.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Odds.SoccerV4OddsBettingPlayerPropsByGameSportsbookGroupError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsBettingPlayerPropsByGameSportsbookGroup(
    request: SoccerV4Odds.SoccerV4OddsBettingPlayerPropsByGameSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket1[], SoccerV4Odds.SoccerV4OddsBettingPlayerPropsByGameSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/odds/{format}/BettingPlayerPropsByGameID/{competition}/{gameId}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "gameId", value: request.gameId, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket1Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingPlayerPropsByGameSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * In-Game Odds - by Date
   *
   * @remarks
   * Returns in-play game odds (spread, moneyline, total) for games on a given date in a given
   * competition. Only returns the most recently seen odds, not inclusive of line movement. As this
   * is in-game, it will only return results while the game is in progress.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Odds.SoccerV4OddsInGameOddsByDateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsInGameOddsByDate(
    request: SoccerV4Odds.SoccerV4OddsInGameOddsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsInGameOddsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/odds/{format}/LiveGameOddsByDate/{competition}/{date}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo7Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsInGameOddsByDateError,
      },
      options,
    );
  }

  /**
   * In-Game Odds - by Date [Sportsbook Group]
   *
   * @remarks
   * Returns in-play game odds (spread, moneyline, total) for games on a given date and competition.
   * Only returns the most recently seen odds, not inclusive of line movement. As this is in-game,
   * it will only return results while the game is in progress. A Sportsbook Group must be specified
   * as a URL parameter.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Odds.SoccerV4OddsInGameOddsByDateSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsInGameOddsByDateSportsbookGroup(
    request: SoccerV4Odds.SoccerV4OddsInGameOddsByDateSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsInGameOddsByDateSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/odds/{format}/InGameOddsByDate/{competition}/{date}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo7Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsInGameOddsByDateSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * In-Game Odds Line Movement
   *
   * @remarks
   * Returns in-play game odds (spread, moneyline, total) for a given game in a given competition.
   * Returns the full line movement for the given game. This endpoint has a longer cache as it is
   * meant for historical data/line movement rather than the most up to the second line.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsInGameOddsLineMovement(
    request: SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/odds/{format}/LiveGameOddsLineMovement/{competition}/{gameid}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo7Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementError,
      },
      options,
    );
  }

  /**
   * In-Game Odds Line Movement [Sportsbook Group]
   *
   * @remarks
   * Returns in-play game odds (spread, moneyline, total) for a given game and competition. Returns
   * the full line movement for the given game. This endpoint has a longer cache as it is meant for
   * historical data/line movement rather than the most up to the second line. A Sportsbook Group
   * must be specified as a URL parameter.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementSportsbookGroupError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsInGameOddsLineMovementSportsbookGroup(
    request: SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/odds/{format}/InGameOddsLineMovement/{competition}/{gameid}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo7Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * In-Game Odds Line Movement with Resulting [Sportsbook Group]
   *
   * @remarks
   * Returns in-play game odds (spread, moneyline, total) for a given game in a competition. This
   * also includes Resulting: for markets with a ResultType, each line will be graded and it will be
   * determined whether the bet would have won or lost. Returns the full line movement for the given
   * game. This endpoint has a longer cache as it is meant for historical data/line movement rather
   * than the most up to the second line. A Sportsbook Group must be specified as a URL parameter.
   *
   * @returns Success
   *
   * @throws {@link
   * SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementWithResultingSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsInGameOddsLineMovementWithResultingSportsbookGroup(
    request: SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GameInfoResult6[],
    SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementWithResultingSportsbookGroupError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/odds/{format}/InGameOddsLineMovementWithResulting/{competition}/{gameid}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoResult6Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementWithResultingSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * Period Game Odds - by Date
   *
   * @remarks
   * Returns the non-full-game odds (spread, moneyline, total) for games on a given date in a given
   * competition. Non-full-game means 1st-half or 1st-quarter, for example, rather than full game.
   * Only returns the most recently seen odds, not inclusive of line movement.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Odds.SoccerV4OddsPeriodGameOddsByDateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsPeriodGameOddsByDate(
    request: SoccerV4Odds.SoccerV4OddsPeriodGameOddsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsPeriodGameOddsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/odds/{format}/AlternateMarketGameOddsByDate/{competition}/{date}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo7Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsPeriodGameOddsByDateError,
      },
      options,
    );
  }

  /**
   * Period Game Odds Line Movement
   *
   * @remarks
   * Returns the non-full-game odds (spread, moneyline, total) for games on a given date.
   * Non-full-game means 1st-half or 1st-quarter, for example, rather than full game. Returns the
   * full line movement for the given game within a competition. This endpoint has a longer cache as
   * it is meant for historical data/line movement rather than the most up to the second line.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Odds.SoccerV4OddsPeriodGameOddsLineMovementError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsPeriodGameOddsLineMovement(
    request: SoccerV4Odds.SoccerV4OddsPeriodGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsPeriodGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/odds/{format}/AlternateMarketGameOddsLineMovement/{competition}/{gameid}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo7Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsPeriodGameOddsLineMovementError,
      },
      options,
    );
  }

  /**
   * Pre-Game and Period Game Odds - by Date [Sportsbook Group]
   *
   * @remarks
   * Returns the full-game and non-full-game odds (spread, moneyline, total) for games on a given
   * date for a given competition. Only returns the most recently seen odds, not inclusive of line
   * movement. A Sportsbook Group must be specified as a URL parameter.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsPreGameAndPeriodGameOddsByDateSportsbookGroup(
    request: SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsByDateSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/odds/{format}/PreGameOddsByDate/{competition}/{date}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo7Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * Pre-Game and Period Game Odds Line Movement [Sportsbook Group]
   *
   * @remarks
   * Returns the game odds for a given game in a given competition. In this endpoint both full-game
   * and partial-game odds are included. Returns the full line movement for the given game. This
   * endpoint has a longer cache as it is meant for historical data/line movement rather than the
   * most up to the second line. A Sportsbook Group must be specified as a URL parameter.
   *
   * @returns Success
   *
   * @throws {@link
   * SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup(
    request: SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GameInfo7[],
    SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/odds/{format}/PreGameOddsLineMovement/{competition}/{gameid}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo7Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * Pre-Game and Period Game Odds Line Movement with Resulting [Sportsbook Group]
   *
   * @remarks
   * Returns the game odds for a given game and competition. In this endpoint both full-game and
   * partial-game odds are included. This also includes Resulting: for markets with a ResultType,
   * each line will be graded and it will be determined whether the bet would have won or lost.
   * Returns the full line movement for the given game. This endpoint has a longer cache as it is
   * meant for historical data/line movement rather than the most up to the second line. A
   * Sportsbook Group must be specified as a URL parameter.
   *
   * @returns Success
   *
   * @throws {@link
   * SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroup(
    request: SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GameInfoResult6[],
    SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/odds/{format}/PreGameOddsLineMovementWithResulting/{competition}/{gameid}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoResult6Schema)) },
        errorFactory:
          SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * Pre-Game Odds - by Date
   *
   * @remarks
   * Returns full game odds (spread, moneyline, total) for games from a given competition on a given
   * date. Only returns the most recently seen odds, not inclusive of line movement.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Odds.SoccerV4OddsPreGameOddsByDateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsPreGameOddsByDate(
    request: SoccerV4Odds.SoccerV4OddsPreGameOddsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsPreGameOddsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/soccer/odds/{format}/GameOddsByDate/{competition}/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo7Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsPreGameOddsByDateError,
      },
      options,
    );
  }

  /**
   * Pre-Game Odds Line Movement
   *
   * @remarks
   * Returns the non-full-game odds (spread, moneyline, total) for games on a given date.
   * Non-full-game means 1st-half or 1st-quarter, for example, rather than full game. Returns the
   * full line movement for the given game within a competition. This endpoint has a longer cache as
   * it is meant for historical data/line movement rather than the most up to the second line.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Odds.SoccerV4OddsPreGameOddsLineMovementError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsPreGameOddsLineMovement(
    request: SoccerV4Odds.SoccerV4OddsPreGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsPreGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/odds/{format}/GameOddsLineMovement/{competition}/{gameid}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo7Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsPreGameOddsLineMovementError,
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
   * @throws {@link SoccerV4Odds.SoccerV4OddsSportsbooksByActiveError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4OddsSportsbooksByActive(
    request: SoccerV4Odds.SoccerV4OddsSportsbooksByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Sportsbook[], SoccerV4Odds.SoccerV4OddsSportsbooksByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/soccer/odds/{format}/ActiveSportsbooks"),
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
        errorFactory: SoccerV4Odds.SoccerV4OddsSportsbooksByActiveError,
      },
      options,
    );
  }
}

export namespace SoccerV4Odds {
  export type SoccerV4OddsBettingEventsByDateRequest = {
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
    /** The date of the game(s). <br>Examples: <code>2018-11-20</code>, <code>2018-11-23</code>. */
    date: string;
  };

  export class SoccerV4OddsBettingEventsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsBettingEventsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingEventsBySeasonRequest = {
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
    /** Year of the season<br>Examples: <code>2020</code>, <code>2021</code>, etc. */
    season: string;
  };

  export class SoccerV4OddsBettingEventsBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsBettingEventsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingFuturesBySeasonRequest = {
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
    /** Year of the season<br>Examples: <code>2020</code>, <code>2021</code>, etc. */
    season: string;
  };

  export class SoccerV4OddsBettingFuturesBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsBettingFuturesBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingFuturesBySeasonSportsbookGroupRequest = {
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
    /** Year of the season<br>Examples: <code>2020</code>, <code>2021</code>, etc. */
    season: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class SoccerV4OddsBettingFuturesBySeasonSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsBettingFuturesBySeasonSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingMarketRequest = {
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
    /** The MarketId of the desired market for which to pull all outcomes/bets. */
    marketId: string;
  };

  export class SoccerV4OddsBettingMarketError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsBettingMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingMarketSportsbookGroupRequest = {
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
    /** The MarketId of the desired market for which to pull all outcomes/bets. */
    marketId: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class SoccerV4OddsBettingMarketSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsBettingMarketSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingMarketsByEventRequest = {
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
    /**
     * The EventId of the desired event/game for which to pull all betting markets (includes
     * outcomes/bets).
     */
    eventId: string;
  };

  export class SoccerV4OddsBettingMarketsByEventError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsBettingMarketsByEventError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingMarketsByEventSportsbookGroupRequest = {
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
    /**
     * The EventId of the desired event/game for which to pull all betting markets (includes
     * outcomes/bets).
     */
    eventId: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class SoccerV4OddsBettingMarketsByEventSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsBettingMarketsByEventSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingMarketsByGameRequest = {
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
    /**
     * The GameID of the desired game for which to pull all betting markets (includes
     * outcomes/bets).
     */
    gameid: string;
  };

  export class SoccerV4OddsBettingMarketsByGameError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsBettingMarketsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingMarketsByGameSportsbookGroupRequest = {
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
    /**
     * The GameID of the desired game for which to pull all betting markets (includes
     * outcomes/bets).
     */
    gameid: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class SoccerV4OddsBettingMarketsByGameSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsBettingMarketsByGameSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingMarketsByMarketTypeRequest = {
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
    /**
     * The EventId of the desired event/game for which to pull all betting markets (includes
     * outcomes/bets).
     */
    eventId: string;
    /**
     * The Market Type ID of the desired MarketTypes to pull. Some common types include:
     * <code>1</code> for Game Lines, <code>2</code> for Player Props, <code>3</code> for Team
     * Props, <code>6</code> for Game Props
     */
    marketTypeId: string;
  };

  export class SoccerV4OddsBettingMarketsByMarketTypeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsBettingMarketsByMarketTypeError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingMarketsByMarketTypeSportsbookGroupRequest = {
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
    /**
     * The EventId of the desired event/game for which to pull all betting markets (includes
     * outcomes/bets).
     */
    eventId: string;
    /**
     * The Market Type ID of the desired MarketTypes to pull. Some common types include:
     * <code>1</code> for Game Lines, <code>2</code> for Player Props, <code>3</code> for Team
     * Props, <code>6</code> for Game Props
     */
    marketTypeId: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class SoccerV4OddsBettingMarketsByMarketTypeSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsBettingMarketsByMarketTypeSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingMetadataRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class SoccerV4OddsBettingMetadataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsBettingMetadataError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingPlayerPropsByGameRequest = {
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
    /** The unique GameID of the game in question. */
    gameId: string;
  };

  export class SoccerV4OddsBettingPlayerPropsByGameError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsBettingPlayerPropsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingPlayerPropsByGameSportsbookGroupRequest = {
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
    /** The unique GameID of the game in question. */
    gameId: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class SoccerV4OddsBettingPlayerPropsByGameSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsBettingPlayerPropsByGameSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsInGameOddsByDateRequest = {
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
    /** The date of the game(s). <br>Examples: <code>2018-06-20</code>, <code>2018-06-23</code>. */
    date: string;
  };

  export class SoccerV4OddsInGameOddsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsInGameOddsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsInGameOddsByDateSportsbookGroupRequest = {
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
    /** The date of the game(s). <br>Examples: <code>2018-06-20</code>, <code>2018-06-23</code>. */
    date: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class SoccerV4OddsInGameOddsByDateSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsInGameOddsByDateSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsInGameOddsLineMovementRequest = {
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
    /**
     * The GameID of a Soccer game. GameIDs can be found in the Games API. Valid entries are
     * <code>14060</code>, <code>14061</code>, etc.
     */
    gameid: string;
  };

  export class SoccerV4OddsInGameOddsLineMovementError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsInGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsInGameOddsLineMovementSportsbookGroupRequest = {
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
    /**
     * The GameID of a Soccer game. GameIDs can be found in the Games API. Valid entries are
     * <code>14060</code>, <code>14061</code>, etc.
     */
    gameid: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class SoccerV4OddsInGameOddsLineMovementSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsInGameOddsLineMovementSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest = {
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
    /**
     * The GameID of a Soccer game. GameIDs can be found in the Games API. Valid entries are
     * <code>14060</code>, <code>14061</code>, etc.
     */
    gameid: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class SoccerV4OddsInGameOddsLineMovementWithResultingSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsInGameOddsLineMovementWithResultingSportsbookGroupError> =
      [{ on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } }];
  }

  export type SoccerV4OddsPeriodGameOddsByDateRequest = {
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

  export class SoccerV4OddsPeriodGameOddsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsPeriodGameOddsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsPeriodGameOddsLineMovementRequest = {
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
    /**
     * The GameID of a Soccer game. GameIDs can be found in the Games API. Valid entries are
     * <code>41323</code>
     */
    gameid: string;
  };

  export class SoccerV4OddsPeriodGameOddsLineMovementError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsPeriodGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsPreGameAndPeriodGameOddsByDateSportsbookGroupRequest = {
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
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class SoccerV4OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest = {
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
    /**
     * The GameID of a Soccer game. GameIDs can be found in the Games API. Valid entries are
     * <code>14060</code>, <code>14061</code>, etc.
     */
    gameid: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class SoccerV4OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError> =
      [{ on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } }];
  }

  export type SoccerV4OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest = {
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
    /**
     * The GameID of a Soccer game. GameIDs can be found in the Games API. Valid entries are
     * <code>14060</code>, <code>14061</code>, etc.
     */
    gameid: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class SoccerV4OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError> =
      [{ on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } }];
  }

  export type SoccerV4OddsPreGameOddsByDateRequest = {
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

  export class SoccerV4OddsPreGameOddsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsPreGameOddsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsPreGameOddsLineMovementRequest = {
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
    /**
     * The GameID of a Soccer game. GameIDs can be found in the Games API. Valid entries are
     * <code>14060</code>, <code>14061</code>, etc.
     */
    gameid: string;
  };

  export class SoccerV4OddsPreGameOddsLineMovementError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsPreGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsSportsbooksByActiveRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class SoccerV4OddsSportsbooksByActiveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4OddsSportsbooksByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
