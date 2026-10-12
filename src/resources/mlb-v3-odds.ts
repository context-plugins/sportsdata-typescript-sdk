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
import { gameInfoResult2Schema, type GameInfoResult2 } from "../models/game-info-result2.js";
import { gameInfo2Schema, type GameInfo2 } from "../models/game-info2.js";
import { Include, includeSchema } from "../models/include.js";
import { matchupTrends2Schema, type MatchupTrends2 } from "../models/matchup-trends2.js";
import { sportsbookSchema, type Sportsbook } from "../models/sportsbook.js";
import { teamTrends1Schema, type TeamTrends1 } from "../models/team-trends1.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class MlbV3Odds {
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
   * @throws {@link MlbV3Odds.MlbV3OddsBettingEventsByDateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsBettingEventsByDate(
    request: MlbV3Odds.MlbV3OddsBettingEventsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], MlbV3Odds.MlbV3OddsBettingEventsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/odds/{format}/BettingEventsByDate/{date}"),
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
        errorFactory: MlbV3Odds.MlbV3OddsBettingEventsByDateError,
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
   * @throws {@link MlbV3Odds.MlbV3OddsBettingEventsBySeasonError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsBettingEventsBySeason(
    request: MlbV3Odds.MlbV3OddsBettingEventsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], MlbV3Odds.MlbV3OddsBettingEventsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/odds/{format}/BettingEvents/{season}"),
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
        errorFactory: MlbV3Odds.MlbV3OddsBettingEventsBySeasonError,
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
   * @throws {@link MlbV3Odds.MlbV3OddsBettingFuturesBySeasonError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsBettingFuturesBySeason(
    request: MlbV3Odds.MlbV3OddsBettingFuturesBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], MlbV3Odds.MlbV3OddsBettingFuturesBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/odds/{format}/BettingFuturesBySeason/{season}"),
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
        errorFactory: MlbV3Odds.MlbV3OddsBettingFuturesBySeasonError,
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
   * @throws {@link MlbV3Odds.MlbV3OddsBettingFuturesBySeasonSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsBettingFuturesBySeasonSportsbookGroup(
    request: MlbV3Odds.MlbV3OddsBettingFuturesBySeasonSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], MlbV3Odds.MlbV3OddsBettingFuturesBySeasonSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/mlb/odds/{format}/BettingFuturesBySeason/{season}/{sportsbookGroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "sportsbookGroup", value: request.sportsbookGroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent1Schema)) },
        errorFactory: MlbV3Odds.MlbV3OddsBettingFuturesBySeasonSportsbookGroupError,
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
   * @throws {@link MlbV3Odds.MlbV3OddsBettingMarketError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsBettingMarket(
    request: MlbV3Odds.MlbV3OddsBettingMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket, MlbV3Odds.MlbV3OddsBettingMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/odds/{format}/BettingMarket/{marketId}"),
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
        errorFactory: MlbV3Odds.MlbV3OddsBettingMarketError,
      },
      options,
    );
  }

  /**
   * Betting Market - [Sportsbook Group]
   *
   * @remarks
   * Returns full line movement for a given BettingMarket. Due to the sheer size of the output and
   * the level of detail, it is intended for historical data purposes and not for the most
   * up-to-the-second lines. A Sportsbook Group must be specified as a URL parameter.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Odds.MlbV3OddsBettingMarketSportsbookGroupError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsBettingMarketSportsbookGroup(
    request: MlbV3Odds.MlbV3OddsBettingMarketSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket, MlbV3Odds.MlbV3OddsBettingMarketSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/mlb/odds/{format}/BettingMarket/{marketId}/{sportsbookGroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "marketId", value: request.marketId, schema: s.string() },
          { name: "sportsbookGroup", value: request.sportsbookGroup, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarketSchema },
        errorFactory: MlbV3Odds.MlbV3OddsBettingMarketSportsbookGroupError,
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
   * @throws {@link MlbV3Odds.MlbV3OddsBettingMarketsByEventError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsBettingMarketsByEvent(
    request: MlbV3Odds.MlbV3OddsBettingMarketsByEventRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], MlbV3Odds.MlbV3OddsBettingMarketsByEventError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/odds/{format}/BettingMarkets/{eventId}"),
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
        errorFactory: MlbV3Odds.MlbV3OddsBettingMarketsByEventError,
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
   * @throws {@link MlbV3Odds.MlbV3OddsBettingMarketsByEventSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsBettingMarketsByEventSportsbookGroup(
    request: MlbV3Odds.MlbV3OddsBettingMarketsByEventSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], MlbV3Odds.MlbV3OddsBettingMarketsByEventSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/mlb/odds/{format}/BettingMarketsByEvent/{eventId}/{sportsbookGroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "eventId", value: request.eventId, schema: s.string() },
          { name: "sportsbookGroup", value: request.sportsbookGroup, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: MlbV3Odds.MlbV3OddsBettingMarketsByEventSportsbookGroupError,
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
   * @throws {@link MlbV3Odds.MlbV3OddsBettingMarketsByGameError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsBettingMarketsByGame(
    request: MlbV3Odds.MlbV3OddsBettingMarketsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], MlbV3Odds.MlbV3OddsBettingMarketsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/odds/{format}/BettingMarketsByGameID/{gameID}"),
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
        errorFactory: MlbV3Odds.MlbV3OddsBettingMarketsByGameError,
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
   * @throws {@link MlbV3Odds.MlbV3OddsBettingMarketsByGameSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsBettingMarketsByGameSportsbookGroup(
    request: MlbV3Odds.MlbV3OddsBettingMarketsByGameSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], MlbV3Odds.MlbV3OddsBettingMarketsByGameSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/mlb/odds/{format}/BettingMarketsByGameID/{gameID}/{sportsbookGroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameID", value: request.gameId, schema: s.string() },
          { name: "sportsbookGroup", value: request.sportsbookGroup, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: MlbV3Odds.MlbV3OddsBettingMarketsByGameSportsbookGroupError,
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
   * @throws {@link MlbV3Odds.MlbV3OddsBettingMarketsByMarketTypeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsBettingMarketsByMarketType(
    request: MlbV3Odds.MlbV3OddsBettingMarketsByMarketTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], MlbV3Odds.MlbV3OddsBettingMarketsByMarketTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/mlb/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}",
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
        errorFactory: MlbV3Odds.MlbV3OddsBettingMarketsByMarketTypeError,
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
   * @throws {@link MlbV3Odds.MlbV3OddsBettingMarketsByMarketTypeSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsBettingMarketsByMarketTypeSportsbookGroup(
    request: MlbV3Odds.MlbV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], MlbV3Odds.MlbV3OddsBettingMarketsByMarketTypeSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/mlb/odds/{format}/BettingMarketsByMarketType/{eventID}/{marketTypeID}/{sportsbookGroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "eventID", value: request.eventId, schema: s.string() },
          { name: "marketTypeID", value: request.marketTypeId, schema: s.string() },
          { name: "sportsbookGroup", value: request.sportsbookGroup, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: MlbV3Odds.MlbV3OddsBettingMarketsByMarketTypeSportsbookGroupError,
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
   * @throws {@link MlbV3Odds.MlbV3OddsBettingMetadataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsBettingMetadata(
    request: MlbV3Odds.MlbV3OddsBettingMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEntityMetadataCollection, MlbV3Odds.MlbV3OddsBettingMetadataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/odds/{format}/BettingMetadata"),
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
        errorFactory: MlbV3Odds.MlbV3OddsBettingMetadataError,
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
   * @throws {@link MlbV3Odds.MlbV3OddsBettingPlayerPropsByGameError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsBettingPlayerPropsByGame(
    request: MlbV3Odds.MlbV3OddsBettingPlayerPropsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], MlbV3Odds.MlbV3OddsBettingPlayerPropsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/odds/{format}/BettingPlayerPropsByGameID/{gameId}"),
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
        errorFactory: MlbV3Odds.MlbV3OddsBettingPlayerPropsByGameError,
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
   * @throws {@link MlbV3Odds.MlbV3OddsBettingPlayerPropsByGameSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsBettingPlayerPropsByGameSportsbookGroup(
    request: MlbV3Odds.MlbV3OddsBettingPlayerPropsByGameSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], MlbV3Odds.MlbV3OddsBettingPlayerPropsByGameSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/mlb/odds/{format}/BettingPlayerPropsByGameID/{gameId}/{sportsbookGroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameId", value: request.gameId, schema: s.string() },
          { name: "sportsbookGroup", value: request.sportsbookGroup, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: MlbV3Odds.MlbV3OddsBettingPlayerPropsByGameSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * Betting Results - by Market
   *
   * @remarks
   * Returns all outcomes under this market which have a result type associated. Will return empty
   * list if resulting has not yet processed for the given game. Resulting processes shortly after
   * game closing.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Odds.MlbV3OddsBettingResultsByMarketError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsBettingResultsByMarket(
    request: MlbV3Odds.MlbV3OddsBettingResultsByMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarketResult, MlbV3Odds.MlbV3OddsBettingResultsByMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/odds/{format}/BettingMarketResults/{marketId}"),
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
        errorFactory: MlbV3Odds.MlbV3OddsBettingResultsByMarketError,
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
   * @throws {@link MlbV3Odds.MlbV3OddsBettingResultsByMarketSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsBettingResultsByMarketSportsbookGroup(
    request: MlbV3Odds.MlbV3OddsBettingResultsByMarketSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarketResult, MlbV3Odds.MlbV3OddsBettingResultsByMarketSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/mlb/odds/{format}/BettingResultsByMarket/{marketID}/{sportsbookGroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "marketID", value: request.marketId, schema: s.string() },
          { name: "sportsbookGroup", value: request.sportsbookGroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarketResultSchema },
        errorFactory: MlbV3Odds.MlbV3OddsBettingResultsByMarketSportsbookGroupError,
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
   * @throws {@link MlbV3Odds.MlbV3OddsBettingSplitsByGameError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsBettingSplitsByGame(
    request: MlbV3Odds.MlbV3OddsBettingSplitsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<GameBettingSplit1, MlbV3Odds.MlbV3OddsBettingSplitsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/odds/{format}/BettingSplitsByGameId/{gameId}"),
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
        errorFactory: MlbV3Odds.MlbV3OddsBettingSplitsByGameError,
      },
      options,
    );
  }

  /**
   * Betting Splits by - Betting Market
   *
   * @remarks
   * List of Money and Bet Percentage splits for each outcome type available in this market. This
   * specific endpoint will return the movement from this market as well as the most recent.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Odds.MlbV3OddsBettingSplitsByBettingMarketError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsBettingSplitsByBettingMarket(
    request: MlbV3Odds.MlbV3OddsBettingSplitsByBettingMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarketSplit, MlbV3Odds.MlbV3OddsBettingSplitsByBettingMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/odds/{format}/BettingSplitsByMarketId/{marketId}"),
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
        errorFactory: MlbV3Odds.MlbV3OddsBettingSplitsByBettingMarketError,
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
   * @throws {@link MlbV3Odds.MlbV3OddsBettingTrendsByMatchupError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsBettingTrendsByMatchup(
    request: MlbV3Odds.MlbV3OddsBettingTrendsByMatchupRequest,
    options?: RequestOptions,
  ): ApiPromise<MatchupTrends2, MlbV3Odds.MlbV3OddsBettingTrendsByMatchupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/odds/{format}/MatchupTrends/{team}/{opponent}"),
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
        success: { kind: "json", schema: matchupTrends2Schema },
        errorFactory: MlbV3Odds.MlbV3OddsBettingTrendsByMatchupError,
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
   * @throws {@link MlbV3Odds.MlbV3OddsBettingTrendsByTeamError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsBettingTrendsByTeam(
    request: MlbV3Odds.MlbV3OddsBettingTrendsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamTrends1, MlbV3Odds.MlbV3OddsBettingTrendsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/odds/{format}/TeamTrends/{team}"),
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
        errorFactory: MlbV3Odds.MlbV3OddsBettingTrendsByTeamError,
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
   * @throws {@link MlbV3Odds.MlbV3OddsInGameOddsByDateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsInGameOddsByDate(
    request: MlbV3Odds.MlbV3OddsInGameOddsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsInGameOddsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/odds/{format}/LiveGameOddsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo2Schema)) },
        errorFactory: MlbV3Odds.MlbV3OddsInGameOddsByDateError,
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
   * @throws {@link MlbV3Odds.MlbV3OddsInGameOddsByDateSportsbookGroupError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsInGameOddsByDateSportsbookGroup(
    request: MlbV3Odds.MlbV3OddsInGameOddsByDateSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsInGameOddsByDateSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/odds/{format}/InGameOddsByDate/{date}/{sportsbookGroup}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
          { name: "sportsbookGroup", value: request.sportsbookGroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo2Schema)) },
        errorFactory: MlbV3Odds.MlbV3OddsInGameOddsByDateSportsbookGroupError,
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
   * @throws {@link MlbV3Odds.MlbV3OddsInGameOddsLineMovementError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsInGameOddsLineMovement(
    request: MlbV3Odds.MlbV3OddsInGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsInGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/odds/{format}/LiveGameOddsLineMovement/{gameid}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo2Schema)) },
        errorFactory: MlbV3Odds.MlbV3OddsInGameOddsLineMovementError,
      },
      options,
    );
  }

  /**
   * In-Game Odds Line Movement [Sportsbook Group]
   *
   * @remarks
   * Returns in-play game odds (spread, moneyline, total) for games in a given week and season.
   * Returns the full line movement for the given game. This endpoint has a longer cache as it is
   * meant for historical data/line movement rather than the most up to the second line. A
   * Sportsbook Group must be specified as a URL parameter.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Odds.MlbV3OddsInGameOddsLineMovementSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsInGameOddsLineMovementSportsbookGroup(
    request: MlbV3Odds.MlbV3OddsInGameOddsLineMovementSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsInGameOddsLineMovementSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/mlb/odds/{format}/InGameOddsLineMovement/{gameid}/{sportsbookGroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookGroup", value: request.sportsbookGroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo2Schema)) },
        errorFactory: MlbV3Odds.MlbV3OddsInGameOddsLineMovementSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * In-Game Odds Line Movement with Resulting [Sportsbook Group]
   *
   * @remarks
   * Returns in-play game odds (spread, moneyline, total) for games in a given week and season. This
   * also includes Resulting: for markets with a ResultType, each line will be graded and it will be
   * determined whether the bet would have won or lost. Returns the full line movement for the given
   * game. This endpoint has a longer cache as it is meant for historical data/line movement rather
   * than the most up to the second line. A Sportsbook Group must be specified as a URL parameter.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Odds.MlbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsInGameOddsLineMovementWithResultingSportsbookGroup(
    request: MlbV3Odds.MlbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GameInfoResult2[],
    MlbV3Odds.MlbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/mlb/odds/{format}/InGameOddsLineMovementWithResulting/{gameid}/{sportsbookGroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookGroup", value: request.sportsbookGroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoResult2Schema)) },
        errorFactory: MlbV3Odds.MlbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * Period Game Odds - by Date
   *
   * @remarks
   * Returns the non-full-game odds (spread, moneyline, total) for games on a given date.
   * Non-full-game means first five innings, for example, rather than full game. Only returns the
   * most recently seen odds, not inclusive of line movement.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Odds.MlbV3OddsPeriodGameOddsByDateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsPeriodGameOddsByDate(
    request: MlbV3Odds.MlbV3OddsPeriodGameOddsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsPeriodGameOddsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/odds/{format}/AlternateMarketGameOddsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo2Schema)) },
        errorFactory: MlbV3Odds.MlbV3OddsPeriodGameOddsByDateError,
      },
      options,
    );
  }

  /**
   * Period Game Odds Line Movement
   *
   * @remarks
   * Returns the non-full-game odds (spread, moneyline, total) for games on a given date.
   * Non-full-game means first five innings, for example, rather than full game. Returns the full
   * line movement for the given game. This endpoint has a longer cache as it is meant for
   * historical data/line movement rather than the most up to the second line.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Odds.MlbV3OddsPeriodGameOddsLineMovementError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsPeriodGameOddsLineMovement(
    request: MlbV3Odds.MlbV3OddsPeriodGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsPeriodGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/mlb/odds/{format}/AlternateMarketGameOddsLineMovement/{gameid}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo2Schema)) },
        errorFactory: MlbV3Odds.MlbV3OddsPeriodGameOddsLineMovementError,
      },
      options,
    );
  }

  /**
   * Pre-Game and Period Game Odds - by Date [Sportsbook Group]
   *
   * @remarks
   * Returns the full-game and non-full-game odds (spread, moneyline, total) for games on a given
   * date. Only returns the most recently seen odds, not inclusive of line movement. A Sportsbook
   * Group must be specified as a URL parameter.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroup(
    request: MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/mlb/odds/{format}/PreGameOddsByDate/{date}/{sportsbookGroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
          { name: "sportsbookGroup", value: request.sportsbookGroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo2Schema)) },
        errorFactory: MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * Pre-Game and Period Game Odds Line Movement [Sportsbook Group]
   *
   * @remarks
   * Returns the game odds ( for games in a given week and season. In this endpoint both full-game
   * and partial-game odds are included. Returns the full line movement for the given game. This
   * endpoint has a longer cache as it is meant for historical data/line movement rather than the
   * most up to the second line. A Sportsbook Group must be specified as a URL parameter.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup(
    request: MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/mlb/odds/{format}/PreGameOddsLineMovement/{gameid}/{sportsbookGroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookGroup", value: request.sportsbookGroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo2Schema)) },
        errorFactory: MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * Pre-Game and Period Game Odds Line Movement with Resulting [Sportsbook Group]
   *
   * @remarks
   * Returns the game odds ( for games in a given week and season. In this endpoint both full-game
   * and partial-game odds are included. This also includes Resulting: for markets with a
   * ResultType, each line will be graded and it will be determined whether the bet would have won
   * or lost. Returns the full line movement for the given game. This endpoint has a longer cache as
   * it is meant for historical data/line movement rather than the most up to the second line. A
   * Sportsbook Group must be specified as a URL parameter.
   *
   * @returns Success
   *
   * @throws {@link
   * MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroup(
    request: MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GameInfoResult2[],
    MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/mlb/odds/{format}/PreGameOddsLineMovementWithResulting/{gameid}/{sportsbookGroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookGroup", value: request.sportsbookGroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoResult2Schema)) },
        errorFactory:
          MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError,
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
   * @throws {@link MlbV3Odds.MlbV3OddsPreGameOddsByDateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsPreGameOddsByDate(
    request: MlbV3Odds.MlbV3OddsPreGameOddsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsPreGameOddsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/odds/{format}/GameOddsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo2Schema)) },
        errorFactory: MlbV3Odds.MlbV3OddsPreGameOddsByDateError,
      },
      options,
    );
  }

  /**
   * Pre-Game Odds Line Movement
   *
   * @remarks
   * Returns the non-full-game odds (spread, moneyline, total) for games in a given week and season.
   * Non-full-game means 1st-half or 1st-quarter, for example, rather than full game. Returns the
   * full line movement for the given game. This endpoint has a longer cache as it is meant for
   * historical data/line movement rather than the most up to the second line.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Odds.MlbV3OddsPreGameOddsLineMovementError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsPreGameOddsLineMovement(
    request: MlbV3Odds.MlbV3OddsPreGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsPreGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/odds/{format}/GameOddsLineMovement/{gameid}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo2Schema)) },
        errorFactory: MlbV3Odds.MlbV3OddsPreGameOddsLineMovementError,
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
   * @throws {@link MlbV3Odds.MlbV3OddsSportsbooksByActiveError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3OddsSportsbooksByActive(
    request: MlbV3Odds.MlbV3OddsSportsbooksByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Sportsbook[], MlbV3Odds.MlbV3OddsSportsbooksByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/odds/{format}/ActiveSportsbooks"),
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
        errorFactory: MlbV3Odds.MlbV3OddsSportsbooksByActiveError,
      },
      options,
    );
  }
}

export namespace MlbV3Odds {
  export type MlbV3OddsBettingEventsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the game(s). <br>Examples: <code>2020-08-20</code>, <code>2020-08-23</code>. */
    date: string;
  };

  export class MlbV3OddsBettingEventsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsBettingEventsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingEventsBySeasonRequest = {
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

  export class MlbV3OddsBettingEventsBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsBettingEventsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingFuturesBySeasonRequest = {
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

  export class MlbV3OddsBettingFuturesBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsBettingFuturesBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingFuturesBySeasonSportsbookGroupRequest = {
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
    /** The name of the sportsbook group that will filter outcomes. */
    sportsbookGroup: string;
  };

  export class MlbV3OddsBettingFuturesBySeasonSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsBettingFuturesBySeasonSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingMarketRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The MarketId of the desired market for which to pull all outcomes/bets. */
    marketId: string;
  };

  export class MlbV3OddsBettingMarketError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsBettingMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingMarketSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The MarketId of the desired market for which to pull all outcomes/bets. */
    marketId: string;
    /** The name of the sportsbook group that will filter outcomes. */
    sportsbookGroup: string;
    /**
     * This parameter indicates which <code>BettingOutcome</code> records to return in the payload.
     * By default, this endpoint only returns available outcomes, excluding the unlisted bets.
     * <br><br>
     *
     * <b>Important Note:</b> the default parameter of available is much faster and provides the
     * best performance. Passing unlisted will return unlisted odds, but these are cached for much
     * longer and may be several minutes old. For best performance, the default parameter is highly
     * recommended. <br><br>
     *
     * Possible values include: <br><br> <code>available</code> - excludes any betting outcomes that
     * have been removed/unlisted by the respective sportsbook. This is more lightweight and
     * delivers odds much faster than using unlisted. <br><br> <code>unlisted</code> - includes the
     * most recently available betting outcome per sportsbook, for each listed market, even those
     * outcomes are expired/unlisted or otherwise unavailable from the respective sportsbook. This
     * is a far heavier payload, and it's cached for much longer than available. <br><br>
     *
     * @default Include.Available
     */
    include?: Include;
  };

  export class MlbV3OddsBettingMarketSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsBettingMarketSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingMarketsByEventRequest = {
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

  export class MlbV3OddsBettingMarketsByEventError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsBettingMarketsByEventError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingMarketsByEventSportsbookGroupRequest = {
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
    /** The name of the sportsbook group that will filter outcomes. */
    sportsbookGroup: string;
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

  export class MlbV3OddsBettingMarketsByEventSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsBettingMarketsByEventSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingMarketsByGameRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of the desired game for which to pull all betting markets (includes
     * outcomes/bets).
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

  export class MlbV3OddsBettingMarketsByGameError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsBettingMarketsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingMarketsByGameSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of the desired game for which to pull all betting markets (includes
     * outcomes/bets).
     */
    gameId: string;
    /** The name of the sportsbook group that will filter outcomes. */
    sportsbookGroup: string;
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

  export class MlbV3OddsBettingMarketsByGameSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsBettingMarketsByGameSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingMarketsByMarketTypeRequest = {
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
     * The Market Type ID of the desired MarketTypes to pull. Some common types include:
     * <code>1</code> for Game Lines, <code>2</code> for Player Props, <code>3</code> for Team
     * Props, <code>6</code> for Game Props
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

  export class MlbV3OddsBettingMarketsByMarketTypeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsBettingMarketsByMarketTypeError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest = {
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
     * The Market Type ID of the desired MarketTypes to pull. Some common types include:
     * <code>1</code> for Game Lines, <code>2</code> for Player Props, <code>3</code> for Team
     * Props, <code>6</code> for Game Props
     */
    marketTypeId: string;
    /** The name of the sportsbook group that will filter outcomes. */
    sportsbookGroup: string;
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

  export class MlbV3OddsBettingMarketsByMarketTypeSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsBettingMarketsByMarketTypeSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingMetadataRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class MlbV3OddsBettingMetadataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsBettingMetadataError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingPlayerPropsByGameRequest = {
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

  export class MlbV3OddsBettingPlayerPropsByGameError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsBettingPlayerPropsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingPlayerPropsByGameSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The unique GameID of the game in question. */
    gameId: string;
    /** The name of the sportsbook group that will filter outcomes. */
    sportsbookGroup: string;
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

  export class MlbV3OddsBettingPlayerPropsByGameSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsBettingPlayerPropsByGameSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingResultsByMarketRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The MarketId of the desired market for which to pull all outcomes/bets. Valid IDs include
     * <code>837872</code>, <code>841068</code>
     */
    marketId: string;
  };

  export class MlbV3OddsBettingResultsByMarketError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsBettingResultsByMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingResultsByMarketSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The MarketId of the desired market for which to pull all outcomes/bets. Valid IDs include
     * <code>837872</code>, <code>841068</code>
     */
    marketId: string;
    /** The name of the sportsbook group that will filter outcomes. */
    sportsbookGroup: string;
  };

  export class MlbV3OddsBettingResultsByMarketSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsBettingResultsByMarketSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingSplitsByGameRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The ID of the game for which you want to receive splits for. Example <code>63266</code>. */
    gameId: string;
  };

  export class MlbV3OddsBettingSplitsByGameError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsBettingSplitsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingSplitsByBettingMarketRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The MarketId of the desired market for which to pull splits.. Valid IDs include
     * <code>837872</code>
     */
    marketId: string;
  };

  export class MlbV3OddsBettingSplitsByBettingMarketError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsBettingSplitsByBettingMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingTrendsByMatchupRequest = {
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

  export class MlbV3OddsBettingTrendsByMatchupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsBettingTrendsByMatchupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingTrendsByTeamRequest = {
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

  export class MlbV3OddsBettingTrendsByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsBettingTrendsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsInGameOddsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the game(s). <br>Examples: <code>2018-06-20</code>, <code>2018-06-23</code>. */
    date: string;
  };

  export class MlbV3OddsInGameOddsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsInGameOddsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsInGameOddsByDateSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the game(s). <br>Examples: <code>2018-06-20</code>, <code>2018-06-23</code>. */
    date: string;
    /** The name of the sportsbook group that will filter outcomes. */
    sportsbookGroup: string;
  };

  export class MlbV3OddsInGameOddsByDateSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsInGameOddsByDateSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsInGameOddsLineMovementRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an MLB game. GameIDs can be found in the Games API. Valid entries are
     * <code>51735</code> or <code>51745</code>
     */
    gameid: string;
  };

  export class MlbV3OddsInGameOddsLineMovementError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsInGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsInGameOddsLineMovementSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an MLB game. GameIDs can be found in the Games API. Valid entries are
     * <code>51735</code> or <code>51745</code>
     */
    gameid: string;
    /** The name of the sportsbook group that will filter outcomes. */
    sportsbookGroup: string;
  };

  export class MlbV3OddsInGameOddsLineMovementSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsInGameOddsLineMovementSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an MLB game. GameIDs can be found in the Games API. Valid entries are
     * <code>51735</code> or <code>51745</code>
     */
    gameid: string;
    /** The name of the sportsbook group that will filter outcomes. */
    sportsbookGroup: string;
  };

  export class MlbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError> =
      [{ on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } }];
  }

  export type MlbV3OddsPeriodGameOddsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the game(s). <br>Examples: <code>2018-06-20</code>, <code>2018-06-23</code>. */
    date: string;
  };

  export class MlbV3OddsPeriodGameOddsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsPeriodGameOddsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsPeriodGameOddsLineMovementRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an MLB game. GameIDs can be found in the Games API. Valid entries are
     * <code>51735</code> or <code>51745</code>
     */
    gameid: string;
  };

  export class MlbV3OddsPeriodGameOddsLineMovementError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsPeriodGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the game(s). <br>Examples: <code>2018-06-20</code>, <code>2018-06-23</code>. */
    date: string;
    /** The name of the sportsbook group that will filter outcomes. */
    sportsbookGroup: string;
  };

  export class MlbV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an MLB game. GameIDs can be found in the Games API. Valid entries are
     * <code>51735</code> or <code>51745</code>
     */
    gameid: string;
    /** The name of the sportsbook group that will filter outcomes. */
    sportsbookGroup: string;
  };

  export class MlbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError> =
      [{ on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } }];
  }

  export type MlbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an MLB game. GameIDs can be found in the Games API. Valid entries are
     * <code>51735</code> or <code>51745</code>
     */
    gameid: string;
    /** The name of the sportsbook group that will filter outcomes. */
    sportsbookGroup: string;
  };

  export class MlbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError> =
      [{ on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } }];
  }

  export type MlbV3OddsPreGameOddsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the game(s). <br>Examples: <code>2018-06-20</code>, <code>2018-06-23</code>. */
    date: string;
  };

  export class MlbV3OddsPreGameOddsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsPreGameOddsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsPreGameOddsLineMovementRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an MLB game. GameIDs can be found in the Games API. Valid entries are
     * <code>51735</code> or <code>51745</code>
     */
    gameid: string;
  };

  export class MlbV3OddsPreGameOddsLineMovementError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsPreGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsSportsbooksByActiveRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class MlbV3OddsSportsbooksByActiveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3OddsSportsbooksByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
