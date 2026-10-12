import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  bettingEntityMetadataCollectionSchema,
  type BettingEntityMetadataCollection,
} from "../models/betting-entity-metadata-collection.js";
import { bettingEvent1Schema, type BettingEvent1 } from "../models/betting-event1.js";
import { bettingMarketResultSchema, type BettingMarketResult } from "../models/betting-market-result.js";
import { bettingMarketSplitSchema, type BettingMarketSplit } from "../models/betting-market-split.js";
import { bettingMarketSchema, type BettingMarket } from "../models/betting-market.js";
import { Format, formatSchema } from "../models/format.js";
import { gameBettingSplit1Schema, type GameBettingSplit1 } from "../models/game-betting-split1.js";
import { gameInfoResult3Schema, type GameInfoResult3 } from "../models/game-info-result3.js";
import { gameInfo3Schema, type GameInfo3 } from "../models/game-info3.js";
import { Include, includeSchema } from "../models/include.js";
import { matchupTrends3Schema, type MatchupTrends3 } from "../models/matchup-trends3.js";
import { sportsbookSchema, type Sportsbook } from "../models/sportsbook.js";
import { teamTrends1Schema, type TeamTrends1 } from "../models/team-trends1.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class NhlV3Odds {
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
   * @throws {@link NhlV3Odds.NhlV3OddsBettingEventsByDateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsBettingEventsByDate(
    request: NhlV3Odds.NhlV3OddsBettingEventsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], NhlV3Odds.NhlV3OddsBettingEventsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/odds/{format}/BettingEventsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent1Schema)) },
        errorFactory: NhlV3Odds.NhlV3OddsBettingEventsByDateError,
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
   * @throws {@link NhlV3Odds.NhlV3OddsBettingEventsBySeasonError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsBettingEventsBySeason(
    request: NhlV3Odds.NhlV3OddsBettingEventsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], NhlV3Odds.NhlV3OddsBettingEventsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/odds/{format}/BettingEvents/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent1Schema)) },
        errorFactory: NhlV3Odds.NhlV3OddsBettingEventsBySeasonError,
      },
      options,
    );
  }

  /**
   * Betting Futures - by Season
   *
   * @remarks
   * Returns available Futures markets for the given season. Does not include line movement.
   *
   * @returns Success
   *
   * @throws {@link NhlV3Odds.NhlV3OddsBettingFuturesBySeasonError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsBettingFuturesBySeason(
    request: NhlV3Odds.NhlV3OddsBettingFuturesBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], NhlV3Odds.NhlV3OddsBettingFuturesBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/odds/{format}/BettingFuturesBySeason/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent1Schema)) },
        errorFactory: NhlV3Odds.NhlV3OddsBettingFuturesBySeasonError,
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
   * @throws {@link NhlV3Odds.NhlV3OddsBettingFuturesBySeasonSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsBettingFuturesBySeasonSportsbookGroup(
    request: NhlV3Odds.NhlV3OddsBettingFuturesBySeasonSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], NhlV3Odds.NhlV3OddsBettingFuturesBySeasonSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nhl/odds/{format}/BettingFuturesBySeason/{season}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent1Schema)) },
        errorFactory: NhlV3Odds.NhlV3OddsBettingFuturesBySeasonSportsbookGroupError,
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
   * @throws {@link NhlV3Odds.NhlV3OddsBettingMarketError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsBettingMarket(
    request: NhlV3Odds.NhlV3OddsBettingMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket, NhlV3Odds.NhlV3OddsBettingMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/odds/{format}/BettingMarket/{marketId}"),
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
        success: { kind: "json", schema: bettingMarketSchema },
        errorFactory: NhlV3Odds.NhlV3OddsBettingMarketError,
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
   * @throws {@link NhlV3Odds.NhlV3OddsBettingMarketSportsbookGroupError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsBettingMarketSportsbookGroup(
    request: NhlV3Odds.NhlV3OddsBettingMarketSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket, NhlV3Odds.NhlV3OddsBettingMarketSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nhl/odds/{format}/BettingMarket/{marketId}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "marketId", value: request.marketId, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarketSchema },
        errorFactory: NhlV3Odds.NhlV3OddsBettingMarketSportsbookGroupError,
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
   * @throws {@link NhlV3Odds.NhlV3OddsBettingMarketsByEventError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsBettingMarketsByEvent(
    request: NhlV3Odds.NhlV3OddsBettingMarketsByEventRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NhlV3Odds.NhlV3OddsBettingMarketsByEventError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/odds/{format}/BettingMarkets/{eventId}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: NhlV3Odds.NhlV3OddsBettingMarketsByEventError,
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
   * @throws {@link NhlV3Odds.NhlV3OddsBettingMarketsByEventSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsBettingMarketsByEventSportsbookGroup(
    request: NhlV3Odds.NhlV3OddsBettingMarketsByEventSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NhlV3Odds.NhlV3OddsBettingMarketsByEventSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nhl/odds/{format}/BettingMarketsByEvent/{eventId}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "eventId", value: request.eventId, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: NhlV3Odds.NhlV3OddsBettingMarketsByEventSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * Betting Markets - by Game
   *
   * @remarks
   * Returns the markets of all available types (e.g. Player Props, Team Props) and available
   * outcomes for a given GameID.
   *
   * @returns Success
   *
   * @throws {@link NhlV3Odds.NhlV3OddsBettingMarketsByGameError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsBettingMarketsByGame(
    request: NhlV3Odds.NhlV3OddsBettingMarketsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NhlV3Odds.NhlV3OddsBettingMarketsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/odds/{format}/BettingMarketsByGameID/{gameID}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameID", value: request.gameId, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: NhlV3Odds.NhlV3OddsBettingMarketsByGameError,
      },
      options,
    );
  }

  /**
   * Betting Markets - by Game [Sportsbook Group]
   *
   * @remarks
   * Returns the markets of all available types (e.g. Player Props, Team Props) and available
   * outcomes for a given GameID. A Sportsbook Group must be specified as a URL parameter.
   *
   * @returns Success
   *
   * @throws {@link NhlV3Odds.NhlV3OddsBettingMarketsByGameSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsBettingMarketsByGameSportsbookGroup(
    request: NhlV3Odds.NhlV3OddsBettingMarketsByGameSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NhlV3Odds.NhlV3OddsBettingMarketsByGameSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nhl/odds/{format}/BettingMarketsByGameID/{gameID}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameID", value: request.gameId, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: NhlV3Odds.NhlV3OddsBettingMarketsByGameSportsbookGroupError,
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
   * @throws {@link NhlV3Odds.NhlV3OddsBettingMarketsByMarketTypeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsBettingMarketsByMarketType(
    request: NhlV3Odds.NhlV3OddsBettingMarketsByMarketTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NhlV3Odds.NhlV3OddsBettingMarketsByMarketTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nhl/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "eventId", value: request.eventId, schema: s.string() },
          { name: "marketTypeID", value: request.marketTypeId, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: NhlV3Odds.NhlV3OddsBettingMarketsByMarketTypeError,
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
   * @throws {@link NhlV3Odds.NhlV3OddsBettingMarketsByMarketTypeSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsBettingMarketsByMarketTypeSportsbookGroup(
    request: NhlV3Odds.NhlV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NhlV3Odds.NhlV3OddsBettingMarketsByMarketTypeSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nhl/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "eventId", value: request.eventId, schema: s.string() },
          { name: "marketTypeID", value: request.marketTypeId, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: NhlV3Odds.NhlV3OddsBettingMarketsByMarketTypeSportsbookGroupError,
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
   * @throws {@link NhlV3Odds.NhlV3OddsBettingMetadataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsBettingMetadata(
    request: NhlV3Odds.NhlV3OddsBettingMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEntityMetadataCollection, NhlV3Odds.NhlV3OddsBettingMetadataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/odds/{format}/Bettingmetadata"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingEntityMetadataCollectionSchema },
        errorFactory: NhlV3Odds.NhlV3OddsBettingMetadataError,
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
   * @throws {@link NhlV3Odds.NhlV3OddsBettingPlayerPropsByGameError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsBettingPlayerPropsByGame(
    request: NhlV3Odds.NhlV3OddsBettingPlayerPropsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NhlV3Odds.NhlV3OddsBettingPlayerPropsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/odds/{format}/BettingPlayerPropsByGameID/{gameId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameId", value: request.gameId, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: NhlV3Odds.NhlV3OddsBettingPlayerPropsByGameError,
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
   * @throws {@link NhlV3Odds.NhlV3OddsBettingPlayerPropsByGameSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsBettingPlayerPropsByGameSportsbookGroup(
    request: NhlV3Odds.NhlV3OddsBettingPlayerPropsByGameSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NhlV3Odds.NhlV3OddsBettingPlayerPropsByGameSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nhl/odds/{format}/BettingPlayerPropsByGameID/{gameId}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameId", value: request.gameId, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: NhlV3Odds.NhlV3OddsBettingPlayerPropsByGameSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * Betting Results - by Market
   *
   * @remarks
   * Provide a market ID that supports resulting (i.e. has a ResultType) and this endpoint will
   * return a result: for markets with a ResultType, each line will be graded and it will be
   * determined whether the bet would have won or lost.
   *
   * @returns Success
   *
   * @throws {@link NhlV3Odds.NhlV3OddsBettingResultsByMarketError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsBettingResultsByMarket(
    request: NhlV3Odds.NhlV3OddsBettingResultsByMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarketResult, NhlV3Odds.NhlV3OddsBettingResultsByMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/odds/{format}/BettingMarketResults/{marketId}"),
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
        success: { kind: "json", schema: bettingMarketResultSchema },
        errorFactory: NhlV3Odds.NhlV3OddsBettingResultsByMarketError,
      },
      options,
    );
  }

  /**
   * Betting Results - by Market [Sportsbook Group]
   *
   * @remarks
   * Returns all outcomes under this market which have a result type associated. Will return empty
   * list if resulting has not yet processed for the given game. Resulting processes shortly after
   * game closing.
   *
   * @returns Success
   *
   * @throws {@link NhlV3Odds.NhlV3OddsBettingResultsByMarketSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsBettingResultsByMarketSportsbookGroup(
    request: NhlV3Odds.NhlV3OddsBettingResultsByMarketSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarketResult, NhlV3Odds.NhlV3OddsBettingResultsByMarketSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nhl/odds/{format}/BettingResultsByMarket/{marketId}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "marketId", value: request.marketId, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarketResultSchema },
        errorFactory: NhlV3Odds.NhlV3OddsBettingResultsByMarketSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * Betting Splits - by Betting Market
   *
   * @remarks
   * List of Money and Bet Percentage splits for each outcome type available in this market. This
   * specific endpoint will return the movement from this market as well as the most recent.
   *
   * @returns Success
   *
   * @throws {@link NhlV3Odds.NhlV3OddsBettingSplitsByBettingMarketError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsBettingSplitsByBettingMarket(
    request: NhlV3Odds.NhlV3OddsBettingSplitsByBettingMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarketSplit, NhlV3Odds.NhlV3OddsBettingSplitsByBettingMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/odds/{format}/BettingSplitsByMarketId/{marketId}"),
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
        success: { kind: "json", schema: bettingMarketSplitSchema },
        errorFactory: NhlV3Odds.NhlV3OddsBettingSplitsByBettingMarketError,
      },
      options,
    );
  }

  /**
   * Betting Splits - by Game
   *
   * @remarks
   * List of Money and Bet Percentage splits for each market and their respective outcome types
   * available in this game. This specific endpoint will return current splits for each available
   * market and no line movement.
   *
   * @returns Success
   *
   * @throws {@link NhlV3Odds.NhlV3OddsBettingSplitsByGameError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsBettingSplitsByGame(
    request: NhlV3Odds.NhlV3OddsBettingSplitsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<GameBettingSplit1, NhlV3Odds.NhlV3OddsBettingSplitsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/odds/{format}/BettingSplitsByGameId/{gameId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameId", value: request.gameId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: gameBettingSplit1Schema },
        errorFactory: NhlV3Odds.NhlV3OddsBettingSplitsByGameError,
      },
      options,
    );
  }

  /**
   * Betting Trends - by Matchup
   *
   * @remarks
   * Returns trends data for a given pairing of teams. Will return data even if the teams are not
   * set to play this season. Intended for use on a specific game, though it will work for other
   * comparisons if applicable.
   *
   * @returns Success
   *
   * @throws {@link NhlV3Odds.NhlV3OddsBettingTrendsByMatchupError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsBettingTrendsByMatchup(
    request: NhlV3Odds.NhlV3OddsBettingTrendsByMatchupRequest,
    options?: RequestOptions,
  ): ApiPromise<MatchupTrends3, NhlV3Odds.NhlV3OddsBettingTrendsByMatchupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/odds/{format}/MatchupTrends/{team}/{opponent}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "team", value: request.team, schema: s.string() },
          { name: "opponent", value: request.opponent, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: matchupTrends3Schema },
        errorFactory: NhlV3Odds.NhlV3OddsBettingTrendsByMatchupError,
      },
      options,
    );
  }

  /**
   * Betting Trends - by Team
   *
   * @remarks
   * Describes recent team trends and performance against betting data in recent sets of games.
   *
   * @returns Success
   *
   * @throws {@link NhlV3Odds.NhlV3OddsBettingTrendsByTeamError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsBettingTrendsByTeam(
    request: NhlV3Odds.NhlV3OddsBettingTrendsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamTrends1, NhlV3Odds.NhlV3OddsBettingTrendsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/odds/{format}/TeamTrends/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "team", value: request.team, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: teamTrends1Schema },
        errorFactory: NhlV3Odds.NhlV3OddsBettingTrendsByTeamError,
      },
      options,
    );
  }

  /**
   * In-Game Odds - by Date
   *
   * @remarks
   * Returns in-play game odds (spread, moneyline, total) for games on a given date. Only returns
   * the most recently seen odds, not inclusive of line movement. As this is in-game, it will only
   * return results while the game is in progress.
   *
   * @returns Success
   *
   * @throws {@link NhlV3Odds.NhlV3OddsInGameOddsByDateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsInGameOddsByDate(
    request: NhlV3Odds.NhlV3OddsInGameOddsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo3[], NhlV3Odds.NhlV3OddsInGameOddsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/odds/{format}/LiveGameOddsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo3Schema)) },
        errorFactory: NhlV3Odds.NhlV3OddsInGameOddsByDateError,
      },
      options,
    );
  }

  /**
   * In-Game Odds - by Date [Sportsbook Group]
   *
   * @remarks
   * Returns in-play game odds (spread, moneyline, total) for games on a given date. Only returns
   * the most recently seen odds, not inclusive of line movement. As this is in-game, it will only
   * return results while the game is in progress. A Sportsbook Group must be specified as a URL
   * parameter.
   *
   * @returns Success
   *
   * @throws {@link NhlV3Odds.NhlV3OddsInGameOddsByDateSportsbookGroupError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsInGameOddsByDateSportsbookGroup(
    request: NhlV3Odds.NhlV3OddsInGameOddsByDateSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo3[], NhlV3Odds.NhlV3OddsInGameOddsByDateSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/odds/{format}/InGameOddsByDate/{date}/{sportsbookgroup}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo3Schema)) },
        errorFactory: NhlV3Odds.NhlV3OddsInGameOddsByDateSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * In-Game Odds Line Movement
   *
   * @remarks
   * Returns in-play game odds (spread, moneyline, total) for games on a given date. Returns the
   * full line movement for the given game. This endpoint has a longer cache as it is meant for
   * historical data/line movement rather than the most up to the second line.
   *
   * @returns Success
   *
   * @throws {@link NhlV3Odds.NhlV3OddsInGameOddsLineMovementError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsInGameOddsLineMovement(
    request: NhlV3Odds.NhlV3OddsInGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo3[], NhlV3Odds.NhlV3OddsInGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/odds/{format}/LiveGameOddsLineMovement/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo3Schema)) },
        errorFactory: NhlV3Odds.NhlV3OddsInGameOddsLineMovementError,
      },
      options,
    );
  }

  /**
   * In-Game Odds Line Movement [Sportsbook Group]
   *
   * @remarks
   * Returns in-play game odds (spread, moneyline, total) for games on a given date. Returns the
   * full line movement for the given game. This endpoint has a longer cache as it is meant for
   * historical data/line movement rather than the most up to the second line. A Sportsbook Group
   * must be specified as a URL parameter.
   *
   * @returns Success
   *
   * @throws {@link NhlV3Odds.NhlV3OddsInGameOddsLineMovementSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsInGameOddsLineMovementSportsbookGroup(
    request: NhlV3Odds.NhlV3OddsInGameOddsLineMovementSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo3[], NhlV3Odds.NhlV3OddsInGameOddsLineMovementSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nhl/odds/{format}/InGameLineMovement/{gameid}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo3Schema)) },
        errorFactory: NhlV3Odds.NhlV3OddsInGameOddsLineMovementSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * In-Game Odds Line Movement with Resulting [Sportsbook Group]
   *
   * @remarks
   * Returns in-play game odds (spread, moneyline, total) for games on a given date. This also
   * includes Resulting: for markets with a ResultType, each line will be graded and it will be
   * determined whether the bet would have won or lost. Returns the full line movement for the given
   * game. This endpoint has a longer cache as it is meant for historical data/line movement rather
   * than the most up to the second line. A Sportsbook Group must be specified as a URL parameter.
   *
   * @returns Success
   *
   * @throws {@link NhlV3Odds.NhlV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsInGameOddsLineMovementWithResultingSportsbookGroup(
    request: NhlV3Odds.NhlV3OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GameInfoResult3[],
    NhlV3Odds.NhlV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nhl/odds/{format}/InGameLineMovementWithResulting/{gameid}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoResult3Schema)) },
        errorFactory: NhlV3Odds.NhlV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * Period Game Odds - by Date
   *
   * @remarks
   * Returns the non-full-game odds (spread, moneyline, total) for games on a given date.
   * Non-full-game means 1st-period or, for example, rather than full game. Only returns the most
   * recently seen odds, not inclusive of line movement.
   *
   * @returns Success
   *
   * @throws {@link NhlV3Odds.NhlV3OddsPeriodGameOddsByDateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsPeriodGameOddsByDate(
    request: NhlV3Odds.NhlV3OddsPeriodGameOddsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo3[], NhlV3Odds.NhlV3OddsPeriodGameOddsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/odds/{format}/AlternateMarketGameOddsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo3Schema)) },
        errorFactory: NhlV3Odds.NhlV3OddsPeriodGameOddsByDateError,
      },
      options,
    );
  }

  /**
   * Period Game Odds Line Movement
   *
   * @remarks
   * Returns the non-full-game odds (spread, moneyline, total) for games on a given date.
   * Non-full-game means 1st-period, for example, rather than full game. Returns the full line
   * movement for the given game. This endpoint has a longer cache as it is meant for historical
   * data/line movement rather than the most up to the second line.
   *
   * @returns Success
   *
   * @throws {@link NhlV3Odds.NhlV3OddsPeriodGameOddsLineMovementError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsPeriodGameOddsLineMovement(
    request: NhlV3Odds.NhlV3OddsPeriodGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo3[], NhlV3Odds.NhlV3OddsPeriodGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nhl/odds/{format}/AlternateMarketGameOddsLineMovement/{gameid}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo3Schema)) },
        errorFactory: NhlV3Odds.NhlV3OddsPeriodGameOddsLineMovementError,
      },
      options,
    );
  }

  /**
   * Pre-Game and Period Game Odds - by Date [Sportsbook Group]
   *
   * @remarks
   * Returns the full-game and non-full-game odds (spread, moneyline, total) for games in a given
   * week and season. Only returns the most recently seen odds, not inclusive of line movement. A
   * Sportsbook Group must be specified as a URL parameter.
   *
   * @returns Success
   *
   * @throws {@link NhlV3Odds.NhlV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroup(
    request: NhlV3Odds.NhlV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo3[], NhlV3Odds.NhlV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nhl/odds/{format}/PreGameOddsByDate/{date}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo3Schema)) },
        errorFactory: NhlV3Odds.NhlV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * Pre-Game and Period Game Odds Line Movement [Sportsbook Group]
   *
   * @remarks
   * Returns the game odds ( for games on a given date. In this endpoint both full-game and
   * partial-game odds are included. Returns the full line movement for the given game. This
   * endpoint has a longer cache as it is meant for historical data/line movement rather than the
   * most up to the second line. A Sportsbook Group must be specified as a URL parameter.
   *
   * @returns Success
   *
   * @throws {@link NhlV3Odds.NhlV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup(
    request: NhlV3Odds.NhlV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo3[], NhlV3Odds.NhlV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nhl/odds/{format}/PreGameOddsLineMovement/{gameid}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo3Schema)) },
        errorFactory: NhlV3Odds.NhlV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * Pre-Game and Period Game Odds Line Movement with Resulting [Sportsbook Group]
   *
   * @remarks
   * Returns the game odds ( for games on a given date. In this endpoint both full-game and
   * partial-game odds are included. This also includes Resulting: for markets with a ResultType,
   * each line will be graded and it will be determined whether the bet would have won or lost.
   * Returns the full line movement for the given game. This endpoint has a longer cache as it is
   * meant for historical data/line movement rather than the most up to the second line. A
   * Sportsbook Group must be specified as a URL parameter.
   *
   * @returns Success
   *
   * @throws {@link
   * NhlV3Odds.NhlV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroup(
    request: NhlV3Odds.NhlV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GameInfoResult3[],
    NhlV3Odds.NhlV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nhl/odds/{format}/PreGameOddsLineMovementWithResulting/{gameid}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoResult3Schema)) },
        errorFactory:
          NhlV3Odds.NhlV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * Pre-Game Odds - by Date
   *
   * @remarks
   * Returns full game odds (spread, moneyline, total) for games on a given date. Only returns the
   * most recently seen odds, not inclusive of line movement.
   *
   * @returns Success
   *
   * @throws {@link NhlV3Odds.NhlV3OddsPreGameOddsByDateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsPreGameOddsByDate(
    request: NhlV3Odds.NhlV3OddsPreGameOddsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo3[], NhlV3Odds.NhlV3OddsPreGameOddsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/odds/{format}/GameOddsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo3Schema)) },
        errorFactory: NhlV3Odds.NhlV3OddsPreGameOddsByDateError,
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
   * full line movement for the given game. This endpoint has a longer cache as it is meant for
   * historical data/line movement rather than the most up to the second line.
   *
   * @returns Success
   *
   * @throws {@link NhlV3Odds.NhlV3OddsPreGameOddsLineMovementError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsPreGameOddsLineMovement(
    request: NhlV3Odds.NhlV3OddsPreGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo3[], NhlV3Odds.NhlV3OddsPreGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/odds/{format}/GameOddsLineMovement/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo3Schema)) },
        errorFactory: NhlV3Odds.NhlV3OddsPreGameOddsLineMovementError,
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
   * @throws {@link NhlV3Odds.NhlV3OddsSportsbooksByActiveError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nhlV3OddsSportsbooksByActive(
    request: NhlV3Odds.NhlV3OddsSportsbooksByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Sportsbook[], NhlV3Odds.NhlV3OddsSportsbooksByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nhl/odds/{format}/ActiveSportsbooks"),
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
        errorFactory: NhlV3Odds.NhlV3OddsSportsbooksByActiveError,
      },
      options,
    );
  }
}

export namespace NhlV3Odds {
  export type NhlV3OddsBettingEventsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the game(s). <br>Examples: <code>2020-02-15</code>, <code>2020-02-23</code>. */
    date: string;
  };

  export class NhlV3OddsBettingEventsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsBettingEventsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsBettingEventsBySeasonRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season (with optional season type).<br>Examples: <code>2020</code>,
     * <code>2020PRE</code>, <code>2020POST</code>, <code>2020STAR</code>, <code>2021</code>, etc.
     */
    season: string;
  };

  export class NhlV3OddsBettingEventsBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsBettingEventsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsBettingFuturesBySeasonRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season <br>Examples: <code>2020</code>, <code>2021</code>, etc */
    season: string;
  };

  export class NhlV3OddsBettingFuturesBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsBettingFuturesBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsBettingFuturesBySeasonSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season <br>Examples: <code>2020</code>, <code>2021</code>, etc */
    season: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class NhlV3OddsBettingFuturesBySeasonSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsBettingFuturesBySeasonSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsBettingMarketRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The MarketId of the desired market for which to pull all outcomes/bets. Valid entries
     * include: <code>421</code>, <code>1041</code>, etc.
     */
    marketId: string;
  };

  export class NhlV3OddsBettingMarketError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsBettingMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsBettingMarketSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The MarketId of the desired market for which to pull all outcomes/bets. Valid entries
     * include: <code>421</code>, <code>1041</code>, etc.
     */
    marketId: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class NhlV3OddsBettingMarketSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsBettingMarketSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsBettingMarketsByEventRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The EventId of the desired event/game for which to pull all betting markets (includes
     * outcomes/bets). Valid entries include: <code>134</code>, <code>155</code>, etc.
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

  export class NhlV3OddsBettingMarketsByEventError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsBettingMarketsByEventError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsBettingMarketsByEventSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The EventId of the desired event/game for which to pull all betting markets (includes
     * outcomes/bets). Valid entries include: <code>134</code>, <code>155</code>, etc.
     */
    eventId: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
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

  export class NhlV3OddsBettingMarketsByEventSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsBettingMarketsByEventSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsBettingMarketsByGameRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of the desired game for which to pull all betting markets (includes
     * outcomes/bets). Valid entries include: <code>14814</code>
     */
    gameId: string;
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

  export class NhlV3OddsBettingMarketsByGameError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsBettingMarketsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsBettingMarketsByGameSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of the desired game for which to pull all betting markets (includes
     * outcomes/bets). Valid entries include: <code>14814</code>
     */
    gameId: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
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

  export class NhlV3OddsBettingMarketsByGameSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsBettingMarketsByGameSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsBettingMarketsByMarketTypeRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The EventId of the desired event/game for which to pull all betting markets (includes
     * outcomes/bets). Valid entries include: <code>134</code>, <code>155</code>, etc.
     */
    eventId: string;
    /**
     * The Market Type ID of the desired MarketTypes to pull. Some common types include:
     * <code>1</code> for `Game Lines` <code>2</code> for `Player Props` <code>3</code> for `Team
     * Props` <code>6</code> for `Game Props`
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

  export class NhlV3OddsBettingMarketsByMarketTypeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsBettingMarketsByMarketTypeError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The EventId of the desired event/game for which to pull all betting markets (includes
     * outcomes/bets). Valid entries include: <code>134</code>, <code>155</code>, etc.
     */
    eventId: string;
    /**
     * The Market Type ID of the desired MarketTypes to pull. Some common types include:
     * <code>1</code> for `Game Lines` <code>2</code> for `Player Props` <code>3</code> for `Team
     * Props` <code>6</code> for `Game Props`
     */
    marketTypeId: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
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

  export class NhlV3OddsBettingMarketsByMarketTypeSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsBettingMarketsByMarketTypeSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsBettingMetadataRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NhlV3OddsBettingMetadataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsBettingMetadataError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsBettingPlayerPropsByGameRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The unique GameID of the game in question. */
    gameId: string;
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

  export class NhlV3OddsBettingPlayerPropsByGameError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsBettingPlayerPropsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsBettingPlayerPropsByGameSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The unique GameID of the game in question. */
    gameId: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
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

  export class NhlV3OddsBettingPlayerPropsByGameSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsBettingPlayerPropsByGameSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsBettingResultsByMarketRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The MarketId of the desired market for which to pull all outcomes/bets. */
    marketId: string;
  };

  export class NhlV3OddsBettingResultsByMarketError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsBettingResultsByMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsBettingResultsByMarketSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The MarketId of the desired market for which to pull all outcomes/bets. */
    marketId: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class NhlV3OddsBettingResultsByMarketSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsBettingResultsByMarketSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsBettingSplitsByBettingMarketRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The MarketId of the desired market for which to pull splits. MarketIds are pulled from the
     * Betting Markets endpoints.
     */
    marketId: string;
  };

  export class NhlV3OddsBettingSplitsByBettingMarketError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsBettingSplitsByBettingMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsBettingSplitsByGameRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The ID of the game for which you want to receive splits for. GameIds are pulled from the
     * Schedules and Games by Date endpoints.
     */
    gameId: string;
  };

  export class NhlV3OddsBettingSplitsByGameError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsBettingSplitsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsBettingTrendsByMatchupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The abbreviation of the requested team. <br> Examples: <code>PHI</code>, <code>MIN</code>,
     * <code>DET</code>, etc.
     */
    team: string;
    /**
     * The abbreviation of the requested opponent. <br> Examples: <code>PHI</code>,
     * <code>MIN</code>, <code>DET</code>, etc.
     */
    opponent: string;
  };

  export class NhlV3OddsBettingTrendsByMatchupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsBettingTrendsByMatchupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsBettingTrendsByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The abbreviation of the requested team. <br> Examples: <code>PHI</code>, <code>MIN</code>,
     * <code>DET</code>, etc.
     */
    team: string;
  };

  export class NhlV3OddsBettingTrendsByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsBettingTrendsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsInGameOddsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the game(s). <br>Examples: <code>2018-11-20</code>, <code>2018-11-23</code>. */
    date: string;
  };

  export class NhlV3OddsInGameOddsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsInGameOddsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsInGameOddsByDateSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the game(s). <br>Examples: <code>2018-11-20</code>, <code>2018-11-23</code>. */
    date: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class NhlV3OddsInGameOddsByDateSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsInGameOddsByDateSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsInGameOddsLineMovementRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an NHL game. GameIDs can be found in the Games API. Valid entries are
     * <code>13096</code> or <code>13110</code>
     */
    gameid: string;
  };

  export class NhlV3OddsInGameOddsLineMovementError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsInGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsInGameOddsLineMovementSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an NHL game. GameIDs can be found in the Games API. Valid entries are
     * <code>13096</code> or <code>13110</code>
     */
    gameid: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class NhlV3OddsInGameOddsLineMovementSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsInGameOddsLineMovementSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an NHL game. GameIDs can be found in the Games API. Valid entries are
     * <code>13096</code> or <code>13110</code>
     */
    gameid: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class NhlV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError> =
      [{ on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } }];
  }

  export type NhlV3OddsPeriodGameOddsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the game(s). <br>Examples: <code>2018-11-20</code>, <code>2018-11-23</code>. */
    date: string;
  };

  export class NhlV3OddsPeriodGameOddsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsPeriodGameOddsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsPeriodGameOddsLineMovementRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an NHL game. GameIDs can be found in the Games API. Valid entries are
     * <code>13096</code> or <code>13110</code>
     */
    gameid: string;
  };

  export class NhlV3OddsPeriodGameOddsLineMovementError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsPeriodGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the game(s). <br>Examples: <code>2018-11-20</code>, <code>2018-11-23</code>. */
    date: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class NhlV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an NHL game. GameIDs can be found in the Games API. Valid entries are
     * <code>13096</code> or <code>13110</code>
     */
    gameid: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class NhlV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError> =
      [{ on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } }];
  }

  export type NhlV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an NHL game. GameIDs can be found in the Games API. Valid entries are
     * <code>13096</code> or <code>13110</code>
     */
    gameid: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class NhlV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError> =
      [{ on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } }];
  }

  export type NhlV3OddsPreGameOddsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the game(s). <br>Examples: <code>2018-11-20</code>, <code>2018-11-23</code>. */
    date: string;
  };

  export class NhlV3OddsPreGameOddsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsPreGameOddsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsPreGameOddsLineMovementRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an NHL game. GameIDs can be found in the Games API. Valid entries are
     * <code>13096</code> or <code>13110</code>
     */
    gameid: string;
  };

  export class NhlV3OddsPreGameOddsLineMovementError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsPreGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3OddsSportsbooksByActiveRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NhlV3OddsSportsbooksByActiveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NhlV3OddsSportsbooksByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
