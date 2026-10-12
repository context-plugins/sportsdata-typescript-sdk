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
import { gameInfoResult1Schema, type GameInfoResult1 } from "../models/game-info-result1.js";
import { gameInfo1Schema, type GameInfo1 } from "../models/game-info1.js";
import { Include, includeSchema } from "../models/include.js";
import { matchupTrends1Schema, type MatchupTrends1 } from "../models/matchup-trends1.js";
import { sportsbookSchema, type Sportsbook } from "../models/sportsbook.js";
import { teamTrends1Schema, type TeamTrends1 } from "../models/team-trends1.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class NbaV3Odds {
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
   * The list of current BettingEvents for the given date. Events in this include market information
   * but no outcomes will be included here. Intended to allow both visibility to Events in order to
   * match up Events -> Games via the included GameID (where applicable) as well as provide a list
   * of MarketIDs which are included in the given event.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Odds.NbaV3OddsBettingEventsByDateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsBettingEventsByDate(
    request: NbaV3Odds.NbaV3OddsBettingEventsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], NbaV3Odds.NbaV3OddsBettingEventsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/odds/{format}/BettingEventsByDate/{date}"),
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
        errorFactory: NbaV3Odds.NbaV3OddsBettingEventsByDateError,
      },
      options,
    );
  }

  /**
   * Betting Events - by Season
   *
   * @remarks
   * Returns the full list of BetttingEvents for the given season. Intended for those who need to
   * tie BettingEventIDs to GameIDs.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Odds.NbaV3OddsBettingEventsBySeasonError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsBettingEventsBySeason(
    request: NbaV3Odds.NbaV3OddsBettingEventsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], NbaV3Odds.NbaV3OddsBettingEventsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/odds/{format}/BettingEvents/{season}"),
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
        errorFactory: NbaV3Odds.NbaV3OddsBettingEventsBySeasonError,
      },
      options,
    );
  }

  /**
   * Betting Futures - by Season
   *
   * @remarks
   * Returns available Futures outcomes for the given season. Does not include line movement.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Odds.NbaV3OddsBettingFuturesBySeasonError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsBettingFuturesBySeason(
    request: NbaV3Odds.NbaV3OddsBettingFuturesBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], NbaV3Odds.NbaV3OddsBettingFuturesBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/odds/{format}/BettingFuturesBySeason/{season}"),
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
        errorFactory: NbaV3Odds.NbaV3OddsBettingFuturesBySeasonError,
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
   * @throws {@link NbaV3Odds.NbaV3OddsBettingFuturesBySeasonSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsBettingFuturesBySeasonSportsbookGroup(
    request: NbaV3Odds.NbaV3OddsBettingFuturesBySeasonSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], NbaV3Odds.NbaV3OddsBettingFuturesBySeasonSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nba/odds/{format}/BettingFuturesBySeason/{season}/{sportsbookgroup}",
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
        errorFactory: NbaV3Odds.NbaV3OddsBettingFuturesBySeasonSportsbookGroupError,
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
   * @throws {@link NbaV3Odds.NbaV3OddsBettingMarketError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsBettingMarket(
    request: NbaV3Odds.NbaV3OddsBettingMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket, NbaV3Odds.NbaV3OddsBettingMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/odds/{format}/BettingMarket/{marketId}"),
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
        errorFactory: NbaV3Odds.NbaV3OddsBettingMarketError,
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
   * @throws {@link NbaV3Odds.NbaV3OddsBettingMarketSportsbookGroupError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsBettingMarketSportsbookGroup(
    request: NbaV3Odds.NbaV3OddsBettingMarketSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket, NbaV3Odds.NbaV3OddsBettingMarketSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nba/odds/{format}/BettingMarket/{marketId}/{sportsbookgroup}",
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
        errorFactory: NbaV3Odds.NbaV3OddsBettingMarketSportsbookGroupError,
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
   * @throws {@link NbaV3Odds.NbaV3OddsBettingMarketsByEventError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsBettingMarketsByEvent(
    request: NbaV3Odds.NbaV3OddsBettingMarketsByEventRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NbaV3Odds.NbaV3OddsBettingMarketsByEventError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/odds/{format}/BettingMarkets/{eventId}"),
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
        errorFactory: NbaV3Odds.NbaV3OddsBettingMarketsByEventError,
      },
      options,
    );
  }

  /**
   * Betting Markets - by Event [Sportsbook Group]
   *
   * @remarks
   * Returns the markets and available outcomes for a given BettingEventID.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Odds.NbaV3OddsBettingMarketsByEventSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsBettingMarketsByEventSportsbookGroup(
    request: NbaV3Odds.NbaV3OddsBettingMarketsByEventSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NbaV3Odds.NbaV3OddsBettingMarketsByEventSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nba/odds/{format}/BettingMarketsByEvent/{eventId}/{sportsbookgroup}",
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
        errorFactory: NbaV3Odds.NbaV3OddsBettingMarketsByEventSportsbookGroupError,
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
   * @throws {@link NbaV3Odds.NbaV3OddsBettingMarketsByGameError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsBettingMarketsByGame(
    request: NbaV3Odds.NbaV3OddsBettingMarketsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NbaV3Odds.NbaV3OddsBettingMarketsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/odds/{format}/BettingMarketsByGameID/{gameID}"),
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
        errorFactory: NbaV3Odds.NbaV3OddsBettingMarketsByGameError,
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
   * @throws {@link NbaV3Odds.NbaV3OddsBettingMarketsByGameSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsBettingMarketsByGameSportsbookGroup(
    request: NbaV3Odds.NbaV3OddsBettingMarketsByGameSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NbaV3Odds.NbaV3OddsBettingMarketsByGameSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nba/odds/{format}/BettingMarketsByGameID/{gameID}/{sportsbookgroup}",
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
        errorFactory: NbaV3Odds.NbaV3OddsBettingMarketsByGameSportsbookGroupError,
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
   * @throws {@link NbaV3Odds.NbaV3OddsBettingMarketsByMarketTypeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsBettingMarketsByMarketType(
    request: NbaV3Odds.NbaV3OddsBettingMarketsByMarketTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NbaV3Odds.NbaV3OddsBettingMarketsByMarketTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nba/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}",
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
        errorFactory: NbaV3Odds.NbaV3OddsBettingMarketsByMarketTypeError,
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
   * @throws {@link NbaV3Odds.NbaV3OddsBettingMarketsByMarketTypeSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsBettingMarketsByMarketTypeSportsbookGroup(
    request: NbaV3Odds.NbaV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NbaV3Odds.NbaV3OddsBettingMarketsByMarketTypeSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nba/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}/{sportsbookgroup}",
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
        errorFactory: NbaV3Odds.NbaV3OddsBettingMarketsByMarketTypeSportsbookGroupError,
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
   * @throws {@link NbaV3Odds.NbaV3OddsBettingMetadataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsBettingMetadata(
    request: NbaV3Odds.NbaV3OddsBettingMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEntityMetadataCollection, NbaV3Odds.NbaV3OddsBettingMetadataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/odds/{format}/BettingMetadata"),
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
        errorFactory: NbaV3Odds.NbaV3OddsBettingMetadataError,
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
   * @throws {@link NbaV3Odds.NbaV3OddsBettingPlayerPropsByGameError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsBettingPlayerPropsByGame(
    request: NbaV3Odds.NbaV3OddsBettingPlayerPropsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NbaV3Odds.NbaV3OddsBettingPlayerPropsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/odds/{format}/BettingPlayerPropsByGameID/{gameId}"),
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
        errorFactory: NbaV3Odds.NbaV3OddsBettingPlayerPropsByGameError,
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
   * @throws {@link NbaV3Odds.NbaV3OddsBettingPlayerPropsByGameSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsBettingPlayerPropsByGameSportsbookGroup(
    request: NbaV3Odds.NbaV3OddsBettingPlayerPropsByGameSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NbaV3Odds.NbaV3OddsBettingPlayerPropsByGameSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nba/odds/{format}/BettingPlayerPropsByGameID/{gameId}/{sportsbookgroup}",
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
        errorFactory: NbaV3Odds.NbaV3OddsBettingPlayerPropsByGameSportsbookGroupError,
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
   * @throws {@link NbaV3Odds.NbaV3OddsBettingResultsByMarketError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsBettingResultsByMarket(
    request: NbaV3Odds.NbaV3OddsBettingResultsByMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarketResult, NbaV3Odds.NbaV3OddsBettingResultsByMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/odds/{format}/BettingMarketResults/{marketId}"),
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
        errorFactory: NbaV3Odds.NbaV3OddsBettingResultsByMarketError,
      },
      options,
    );
  }

  /**
   * Betting Results - by Market [Sportsbook Group]
   *
   * @remarks
   * Provide a market ID that supports resulting (i.e. has a ResultType) and this endpoint will
   * return a result: for markets with a ResultType, each line will be graded and it will be
   * determined whether the bet would have won or lost. A Sportsbook Group must be specified as a
   * URL parameter.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Odds.NbaV3OddsBettingResultsByMarketSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsBettingResultsByMarketSportsbookGroup(
    request: NbaV3Odds.NbaV3OddsBettingResultsByMarketSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarketResult, NbaV3Odds.NbaV3OddsBettingResultsByMarketSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nba/odds/{format}/BettingResultsByMarket/{marketId}/{sportsbookgroup}",
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
        errorFactory: NbaV3Odds.NbaV3OddsBettingResultsByMarketSportsbookGroupError,
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
   * @throws {@link NbaV3Odds.NbaV3OddsBettingSplitsByBettingMarketError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsBettingSplitsByBettingMarket(
    request: NbaV3Odds.NbaV3OddsBettingSplitsByBettingMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarketSplit, NbaV3Odds.NbaV3OddsBettingSplitsByBettingMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/odds/{format}/BettingSplitsByMarketId/{marketId}"),
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
        errorFactory: NbaV3Odds.NbaV3OddsBettingSplitsByBettingMarketError,
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
   * @throws {@link NbaV3Odds.NbaV3OddsBettingSplitsByGameError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsBettingSplitsByGame(
    request: NbaV3Odds.NbaV3OddsBettingSplitsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<GameBettingSplit1, NbaV3Odds.NbaV3OddsBettingSplitsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/odds/{format}/BettingSplitsByGameId/{gameId}"),
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
        errorFactory: NbaV3Odds.NbaV3OddsBettingSplitsByGameError,
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
   * @throws {@link NbaV3Odds.NbaV3OddsBettingTrendsByMatchupError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsBettingTrendsByMatchup(
    request: NbaV3Odds.NbaV3OddsBettingTrendsByMatchupRequest,
    options?: RequestOptions,
  ): ApiPromise<MatchupTrends1, NbaV3Odds.NbaV3OddsBettingTrendsByMatchupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/odds/{format}/MatchupTrends/{team}/{opponent}"),
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
        success: { kind: "json", schema: matchupTrends1Schema },
        errorFactory: NbaV3Odds.NbaV3OddsBettingTrendsByMatchupError,
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
   * @throws {@link NbaV3Odds.NbaV3OddsBettingTrendsByTeamError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsBettingTrendsByTeam(
    request: NbaV3Odds.NbaV3OddsBettingTrendsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamTrends1, NbaV3Odds.NbaV3OddsBettingTrendsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/odds/{format}/TeamTrends/{team}"),
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
        errorFactory: NbaV3Odds.NbaV3OddsBettingTrendsByTeamError,
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
   * @throws {@link NbaV3Odds.NbaV3OddsInGameOddsByDateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsInGameOddsByDate(
    request: NbaV3Odds.NbaV3OddsInGameOddsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsInGameOddsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/odds/{format}/LiveGameOddsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo1Schema)) },
        errorFactory: NbaV3Odds.NbaV3OddsInGameOddsByDateError,
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
   * @throws {@link NbaV3Odds.NbaV3OddsInGameOddsByDateSportsbookGroupError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsInGameOddsByDateSportsbookGroup(
    request: NbaV3Odds.NbaV3OddsInGameOddsByDateSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsInGameOddsByDateSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/odds/{format}/InGameOddsByDate/{date}/{sportsbookgroup}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo1Schema)) },
        errorFactory: NbaV3Odds.NbaV3OddsInGameOddsByDateSportsbookGroupError,
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
   * @throws {@link NbaV3Odds.NbaV3OddsInGameOddsLineMovementError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsInGameOddsLineMovement(
    request: NbaV3Odds.NbaV3OddsInGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsInGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/odds/{format}/LiveGameOddsLineMovement/{gameid}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo1Schema)) },
        errorFactory: NbaV3Odds.NbaV3OddsInGameOddsLineMovementError,
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
   * @throws {@link NbaV3Odds.NbaV3OddsInGameOddsLineMovementSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsInGameOddsLineMovementSportsbookGroup(
    request: NbaV3Odds.NbaV3OddsInGameOddsLineMovementSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsInGameOddsLineMovementSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nba/odds/{format}/InGameLineMovement/{gameid}/{sportsbookgroup}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo1Schema)) },
        errorFactory: NbaV3Odds.NbaV3OddsInGameOddsLineMovementSportsbookGroupError,
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
   * @throws {@link NbaV3Odds.NbaV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsInGameOddsLineMovementWithResultingSportsbookGroup(
    request: NbaV3Odds.NbaV3OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GameInfoResult1[],
    NbaV3Odds.NbaV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nba/odds/{format}/InGameLineMovementWithResulting/{gameid}/{sportsbookgroup}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoResult1Schema)) },
        errorFactory: NbaV3Odds.NbaV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * Period Game Odds - by Date
   *
   * @remarks
   * Returns the non-full-game odds (spread, moneyline, total) for games on a given date.
   * Non-full-game means 1st-half or 1st-quarter, for example, rather than full game. Only returns
   * the most recently seen odds, not inclusive of line movement.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Odds.NbaV3OddsPeriodGameOddsByDateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsPeriodGameOddsByDate(
    request: NbaV3Odds.NbaV3OddsPeriodGameOddsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsPeriodGameOddsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/odds/{format}/AlternateMarketGameOddsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo1Schema)) },
        errorFactory: NbaV3Odds.NbaV3OddsPeriodGameOddsByDateError,
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
   * full line movement for the given game. This endpoint has a longer cache as it is meant for
   * historical data/line movement rather than the most up to the second line.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Odds.NbaV3OddsPeriodGameOddsLineMovementError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsPeriodGameOddsLineMovement(
    request: NbaV3Odds.NbaV3OddsPeriodGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsPeriodGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nba/odds/{format}/AlternateMarketGameOddsLineMovement/{gameid}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo1Schema)) },
        errorFactory: NbaV3Odds.NbaV3OddsPeriodGameOddsLineMovementError,
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
   * @throws {@link NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroup(
    request: NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nba/odds/{format}/PreGameOddsByDate/{date}/{sportsbookgroup}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo1Schema)) },
        errorFactory: NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError,
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
   * @throws {@link NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup(
    request: NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nba/odds/{format}/PreGameOddsLineMovement/{gameid}/{sportsbookgroup}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo1Schema)) },
        errorFactory: NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError,
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
   * NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroup(
    request: NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GameInfoResult1[],
    NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nba/odds/{format}/PreGameOddsLineMovementWithResulting/{gameid}/{sportsbookgroup}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoResult1Schema)) },
        errorFactory:
          NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError,
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
   * @throws {@link NbaV3Odds.NbaV3OddsPreGameOddsByDateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsPreGameOddsByDate(
    request: NbaV3Odds.NbaV3OddsPreGameOddsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsPreGameOddsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/odds/{format}/GameOddsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo1Schema)) },
        errorFactory: NbaV3Odds.NbaV3OddsPreGameOddsByDateError,
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
   * @throws {@link NbaV3Odds.NbaV3OddsPreGameOddsLineMovementError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsPreGameOddsLineMovement(
    request: NbaV3Odds.NbaV3OddsPreGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsPreGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/odds/{format}/GameOddsLineMovement/{gameid}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo1Schema)) },
        errorFactory: NbaV3Odds.NbaV3OddsPreGameOddsLineMovementError,
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
   * @throws {@link NbaV3Odds.NbaV3OddsSportsbooksByActiveError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3OddsSportsbooksByActive(
    request: NbaV3Odds.NbaV3OddsSportsbooksByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Sportsbook[], NbaV3Odds.NbaV3OddsSportsbooksByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/odds/{format}/ActiveSportsbooks"),
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
        errorFactory: NbaV3Odds.NbaV3OddsSportsbooksByActiveError,
      },
      options,
    );
  }
}

export namespace NbaV3Odds {
  export type NbaV3OddsBettingEventsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the game(s). <br>Examples: <code>2020-02-15</code>, <code>2020-02-23</code>. */
    date: string;
  };

  export class NbaV3OddsBettingEventsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsBettingEventsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingEventsBySeasonRequest = {
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

  export class NbaV3OddsBettingEventsBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsBettingEventsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingFuturesBySeasonRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season <br>Examples: <code>2020</code>, <code>2021</code>, etc */
    season: string;
  };

  export class NbaV3OddsBettingFuturesBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsBettingFuturesBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingFuturesBySeasonSportsbookGroupRequest = {
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

  export class NbaV3OddsBettingFuturesBySeasonSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsBettingFuturesBySeasonSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingMarketRequest = {
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

  export class NbaV3OddsBettingMarketError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsBettingMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingMarketSportsbookGroupRequest = {
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

  export class NbaV3OddsBettingMarketSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsBettingMarketSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingMarketsByEventRequest = {
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

  export class NbaV3OddsBettingMarketsByEventError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsBettingMarketsByEventError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingMarketsByEventSportsbookGroupRequest = {
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

  export class NbaV3OddsBettingMarketsByEventSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsBettingMarketsByEventSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingMarketsByGameRequest = {
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

  export class NbaV3OddsBettingMarketsByGameError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsBettingMarketsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingMarketsByGameSportsbookGroupRequest = {
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

  export class NbaV3OddsBettingMarketsByGameSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsBettingMarketsByGameSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingMarketsByMarketTypeRequest = {
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

  export class NbaV3OddsBettingMarketsByMarketTypeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsBettingMarketsByMarketTypeError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest = {
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

  export class NbaV3OddsBettingMarketsByMarketTypeSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsBettingMarketsByMarketTypeSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingMetadataRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NbaV3OddsBettingMetadataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsBettingMetadataError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingPlayerPropsByGameRequest = {
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

  export class NbaV3OddsBettingPlayerPropsByGameError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsBettingPlayerPropsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingPlayerPropsByGameSportsbookGroupRequest = {
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

  export class NbaV3OddsBettingPlayerPropsByGameSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsBettingPlayerPropsByGameSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingResultsByMarketRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The MarketId of the desired market for which to pull all outcomes/bets. Valid entries
     * include: <code>406451</code>, <code>404168</code>, etc.
     */
    marketId: string;
  };

  export class NbaV3OddsBettingResultsByMarketError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsBettingResultsByMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingResultsByMarketSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The MarketId of the desired market for which to pull all outcomes/bets. Valid entries
     * include: <code>406451</code>, <code>404168</code>, etc.
     */
    marketId: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class NbaV3OddsBettingResultsByMarketSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsBettingResultsByMarketSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingSplitsByBettingMarketRequest = {
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

  export class NbaV3OddsBettingSplitsByBettingMarketError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsBettingSplitsByBettingMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingSplitsByGameRequest = {
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

  export class NbaV3OddsBettingSplitsByGameError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsBettingSplitsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingTrendsByMatchupRequest = {
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

  export class NbaV3OddsBettingTrendsByMatchupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsBettingTrendsByMatchupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingTrendsByTeamRequest = {
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

  export class NbaV3OddsBettingTrendsByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsBettingTrendsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsInGameOddsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the game(s). <br>Examples: <code>2018-06-20</code>, <code>2018-06-23</code>. */
    date: string;
  };

  export class NbaV3OddsInGameOddsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsInGameOddsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsInGameOddsByDateSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the game(s). <br>Examples: <code>2018-06-20</code>, <code>2018-06-23</code>. */
    date: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class NbaV3OddsInGameOddsByDateSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsInGameOddsByDateSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsInGameOddsLineMovementRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an NBA game. GameIDs can be found in the Games API. Valid entries are
     * <code>12780</code> or <code>12781</code>
     */
    gameid: string;
  };

  export class NbaV3OddsInGameOddsLineMovementError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsInGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsInGameOddsLineMovementSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an NBA game. GameIDs can be found in the Games API. Valid entries are
     * <code>12780</code> or <code>12781</code>
     */
    gameid: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class NbaV3OddsInGameOddsLineMovementSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsInGameOddsLineMovementSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an NBA game. GameIDs can be found in the Games API. Valid entries are
     * <code>12780</code> or <code>12781</code>
     */
    gameid: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class NbaV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError> =
      [{ on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } }];
  }

  export type NbaV3OddsPeriodGameOddsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the game(s). <br>Examples: <code>2018-06-20</code>, <code>2018-06-23</code>. */
    date: string;
  };

  export class NbaV3OddsPeriodGameOddsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsPeriodGameOddsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsPeriodGameOddsLineMovementRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an NBA game. GameIDs can be found in the Games API. Valid entries are
     * <code>12780</code> or <code>12781</code>
     */
    gameid: string;
  };

  export class NbaV3OddsPeriodGameOddsLineMovementError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsPeriodGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the game(s). <br>Examples: <code>2018-06-20</code>, <code>2018-06-23</code>. */
    date: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class NbaV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an NBA game. GameIDs can be found in the Games API. Valid entries are
     * <code>12780</code> or <code>12781</code>
     */
    gameid: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class NbaV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError> =
      [{ on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } }];
  }

  export type NbaV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an NBA game. GameIDs can be found in the Games API. Valid entries are
     * <code>12780</code> or <code>12781</code>
     */
    gameid: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class NbaV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError> =
      [{ on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } }];
  }

  export type NbaV3OddsPreGameOddsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the game(s). <br>Examples: <code>2018-06-20</code>, <code>2018-06-23</code>. */
    date: string;
  };

  export class NbaV3OddsPreGameOddsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsPreGameOddsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsPreGameOddsLineMovementRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an NBA game. GameIDs can be found in the Games API. Valid entries are
     * <code>12780</code> or <code>12781</code>
     */
    gameid: string;
  };

  export class NbaV3OddsPreGameOddsLineMovementError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsPreGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsSportsbooksByActiveRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NbaV3OddsSportsbooksByActiveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3OddsSportsbooksByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
