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
import { bettingEvent2Schema, type BettingEvent2 } from "../models/betting-event2.js";
import { bettingMarketResultSchema, type BettingMarketResult } from "../models/betting-market-result.js";
import { bettingMarketSplitSchema, type BettingMarketSplit } from "../models/betting-market-split.js";
import { bettingMarketSchema, type BettingMarket } from "../models/betting-market.js";
import { Format, formatSchema } from "../models/format.js";
import { gameBettingSplit2Schema, type GameBettingSplit2 } from "../models/game-betting-split2.js";
import { gameInfoResult4Schema, type GameInfoResult4 } from "../models/game-info-result4.js";
import { gameInfo4Schema, type GameInfo4 } from "../models/game-info4.js";
import { Include, includeSchema } from "../models/include.js";
import { matchupTrends4Schema, type MatchupTrends4 } from "../models/matchup-trends4.js";
import { sportsbookSchema, type Sportsbook } from "../models/sportsbook.js";
import { teamTrends2Schema, type TeamTrends2 } from "../models/team-trends2.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class CfbV3Odds {
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
   * @throws {@link CfbV3Odds.CfbV3OddsBettingEventsByDateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsBettingEventsByDate(
    request: CfbV3Odds.CfbV3OddsBettingEventsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent2[], CfbV3Odds.CfbV3OddsBettingEventsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/odds/{format}/BettingEventsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent2Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsBettingEventsByDateError,
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
   * @throws {@link CfbV3Odds.CfbV3OddsBettingEventsBySeasonError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsBettingEventsBySeason(
    request: CfbV3Odds.CfbV3OddsBettingEventsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent2[], CfbV3Odds.CfbV3OddsBettingEventsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/odds/{format}/BettingEvents/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent2Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsBettingEventsBySeasonError,
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
   * @throws {@link CfbV3Odds.CfbV3OddsBettingFuturesBySeasonError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsBettingFuturesBySeason(
    request: CfbV3Odds.CfbV3OddsBettingFuturesBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent2[], CfbV3Odds.CfbV3OddsBettingFuturesBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/odds/{format}/BettingFuturesBySeason/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent2Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsBettingFuturesBySeasonError,
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
   * @throws {@link CfbV3Odds.CfbV3OddsBettingFuturesBySeasonSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsBettingFuturesBySeasonSportsbookGroup(
    request: CfbV3Odds.CfbV3OddsBettingFuturesBySeasonSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent2[], CfbV3Odds.CfbV3OddsBettingFuturesBySeasonSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/cfb/odds/{format}/BettingFuturesBySeason/{season}/{sportsbookgroup}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent2Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsBettingFuturesBySeasonSportsbookGroupError,
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
   * @throws {@link CfbV3Odds.CfbV3OddsBettingMarketError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsBettingMarket(
    request: CfbV3Odds.CfbV3OddsBettingMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket, CfbV3Odds.CfbV3OddsBettingMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/odds/{format}/BettingMarket/{marketId}"),
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
        errorFactory: CfbV3Odds.CfbV3OddsBettingMarketError,
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
   * @throws {@link CfbV3Odds.CfbV3OddsBettingMarketSportsbookGroupError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsBettingMarketSportsbookGroup(
    request: CfbV3Odds.CfbV3OddsBettingMarketSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket, CfbV3Odds.CfbV3OddsBettingMarketSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/cfb/odds/{format}/BettingMarket/{marketId}/{sportsbookgroup}",
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
        errorFactory: CfbV3Odds.CfbV3OddsBettingMarketSportsbookGroupError,
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
   * @throws {@link CfbV3Odds.CfbV3OddsBettingMarketsByEventError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsBettingMarketsByEvent(
    request: CfbV3Odds.CfbV3OddsBettingMarketsByEventRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], CfbV3Odds.CfbV3OddsBettingMarketsByEventError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/odds/{format}/BettingMarkets/{eventId}"),
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
        errorFactory: CfbV3Odds.CfbV3OddsBettingMarketsByEventError,
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
   * @throws {@link CfbV3Odds.CfbV3OddsBettingMarketsByEventSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsBettingMarketsByEventSportsbookGroup(
    request: CfbV3Odds.CfbV3OddsBettingMarketsByEventSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], CfbV3Odds.CfbV3OddsBettingMarketsByEventSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/cfb/odds/{format}/BettingMarketsByEvent/{eventId}/{sportsbookgroup}",
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
        errorFactory: CfbV3Odds.CfbV3OddsBettingMarketsByEventSportsbookGroupError,
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
   * @throws {@link CfbV3Odds.CfbV3OddsBettingMarketsByGameError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsBettingMarketsByGame(
    request: CfbV3Odds.CfbV3OddsBettingMarketsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], CfbV3Odds.CfbV3OddsBettingMarketsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/odds/{format}/BettingMarketsByGameID/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: CfbV3Odds.CfbV3OddsBettingMarketsByGameError,
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
   * @throws {@link CfbV3Odds.CfbV3OddsBettingMarketsByGameSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsBettingMarketsByGameSportsbookGroup(
    request: CfbV3Odds.CfbV3OddsBettingMarketsByGameSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], CfbV3Odds.CfbV3OddsBettingMarketsByGameSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/cfb/odds/{format}/BettingMarketsByGameID/{gameid}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
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
        errorFactory: CfbV3Odds.CfbV3OddsBettingMarketsByGameSportsbookGroupError,
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
   * @throws {@link CfbV3Odds.CfbV3OddsBettingMarketsByMarketTypeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsBettingMarketsByMarketType(
    request: CfbV3Odds.CfbV3OddsBettingMarketsByMarketTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], CfbV3Odds.CfbV3OddsBettingMarketsByMarketTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/cfb/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}",
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
        errorFactory: CfbV3Odds.CfbV3OddsBettingMarketsByMarketTypeError,
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
   * @throws {@link CfbV3Odds.CfbV3OddsBettingMarketsByMarketTypeSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsBettingMarketsByMarketTypeSportsbookGroup(
    request: CfbV3Odds.CfbV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], CfbV3Odds.CfbV3OddsBettingMarketsByMarketTypeSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/cfb/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}/{sportsbookgroup}",
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
        errorFactory: CfbV3Odds.CfbV3OddsBettingMarketsByMarketTypeSportsbookGroupError,
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
   * @throws {@link CfbV3Odds.CfbV3OddsBettingMetadataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsBettingMetadata(
    request: CfbV3Odds.CfbV3OddsBettingMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEntityMetadataCollection, CfbV3Odds.CfbV3OddsBettingMetadataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/odds/{format}/BettingMetadata"),
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
        errorFactory: CfbV3Odds.CfbV3OddsBettingMetadataError,
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
   * @throws {@link CfbV3Odds.CfbV3OddsBettingPlayerPropsByGameError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsBettingPlayerPropsByGame(
    request: CfbV3Odds.CfbV3OddsBettingPlayerPropsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], CfbV3Odds.CfbV3OddsBettingPlayerPropsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/odds/{format}/BettingPlayerPropsByGameID/{gameId}"),
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
        errorFactory: CfbV3Odds.CfbV3OddsBettingPlayerPropsByGameError,
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
   * @throws {@link CfbV3Odds.CfbV3OddsBettingPlayerPropsByGameSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsBettingPlayerPropsByGameSportsbookGroup(
    request: CfbV3Odds.CfbV3OddsBettingPlayerPropsByGameSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], CfbV3Odds.CfbV3OddsBettingPlayerPropsByGameSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/cfb/odds/{format}/BettingPlayerPropsByGameID/{gameId}/{sportsbookgroup}",
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
        errorFactory: CfbV3Odds.CfbV3OddsBettingPlayerPropsByGameSportsbookGroupError,
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
   * @throws {@link CfbV3Odds.CfbV3OddsBettingResultsByMarketError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsBettingResultsByMarket(
    request: CfbV3Odds.CfbV3OddsBettingResultsByMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarketResult, CfbV3Odds.CfbV3OddsBettingResultsByMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/odds/{format}/BettingMarketResults/{marketId}"),
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
        errorFactory: CfbV3Odds.CfbV3OddsBettingResultsByMarketError,
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
   * @throws {@link CfbV3Odds.CfbV3OddsBettingResultsByMarketSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsBettingResultsByMarketSportsbookGroup(
    request: CfbV3Odds.CfbV3OddsBettingResultsByMarketSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarketResult, CfbV3Odds.CfbV3OddsBettingResultsByMarketSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/cfb/odds/{format}/BettingResultsByMarket/{marketId}/{sportsbookgroup}",
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
        errorFactory: CfbV3Odds.CfbV3OddsBettingResultsByMarketSportsbookGroupError,
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
   * @throws {@link CfbV3Odds.CfbV3OddsBettingSplitsByBettingMarketError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsBettingSplitsByBettingMarket(
    request: CfbV3Odds.CfbV3OddsBettingSplitsByBettingMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarketSplit, CfbV3Odds.CfbV3OddsBettingSplitsByBettingMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/odds/{format}/BettingSplitsByMarketId/{marketId}"),
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
        errorFactory: CfbV3Odds.CfbV3OddsBettingSplitsByBettingMarketError,
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
   * @throws {@link CfbV3Odds.CfbV3OddsBettingSplitsByGameError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsBettingSplitsByGame(
    request: CfbV3Odds.CfbV3OddsBettingSplitsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<GameBettingSplit2, CfbV3Odds.CfbV3OddsBettingSplitsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/odds/{format}/BettingSplitsByGameId/{gameid}"),
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
        success: { kind: "json", schema: gameBettingSplit2Schema },
        errorFactory: CfbV3Odds.CfbV3OddsBettingSplitsByGameError,
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
   * @throws {@link CfbV3Odds.CfbV3OddsBettingTrendsByMatchupError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsBettingTrendsByMatchup(
    request: CfbV3Odds.CfbV3OddsBettingTrendsByMatchupRequest,
    options?: RequestOptions,
  ): ApiPromise<MatchupTrends4, CfbV3Odds.CfbV3OddsBettingTrendsByMatchupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/odds/{format}/MatchupTrends/{team}/{opponent}"),
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
        success: { kind: "json", schema: matchupTrends4Schema },
        errorFactory: CfbV3Odds.CfbV3OddsBettingTrendsByMatchupError,
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
   * @throws {@link CfbV3Odds.CfbV3OddsBettingTrendsByTeamError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsBettingTrendsByTeam(
    request: CfbV3Odds.CfbV3OddsBettingTrendsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamTrends2, CfbV3Odds.CfbV3OddsBettingTrendsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/odds/{format}/TeamTrends/{team}"),
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
        success: { kind: "json", schema: teamTrends2Schema },
        errorFactory: CfbV3Odds.CfbV3OddsBettingTrendsByTeamError,
      },
      options,
    );
  }

  /**
   * In-Game Odds - by Week
   *
   * @remarks
   * Returns in-play game odds (spread, moneyline, total) for games in a given week and season. Only
   * returns the most recently seen odds, not inclusive of line movement. As this is in-game, it
   * will only return results while the game is in progress.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Odds.CfbV3OddsInGameOddsByWeekError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsInGameOddsByWeek(
    request: CfbV3Odds.CfbV3OddsInGameOddsByWeekRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo4[], CfbV3Odds.CfbV3OddsInGameOddsByWeekError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/odds/{format}/LiveGameOddsByWeek/{season}/{week}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo4Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsInGameOddsByWeekError,
      },
      options,
    );
  }

  /**
   * In-Game Odds - by Week [Sportsbook Group]
   *
   * @remarks
   * Returns in-play game odds (spread, moneyline, total) for games in a given week and season. Only
   * returns the most recently seen odds, not inclusive of line movement. As this is in-game, it
   * will only return results while the game is in progress. A Sportsbook Group must be specified as
   * a URL parameter.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Odds.CfbV3OddsInGameOddsByWeekSportsbookGroupError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsInGameOddsByWeekSportsbookGroup(
    request: CfbV3Odds.CfbV3OddsInGameOddsByWeekSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo4[], CfbV3Odds.CfbV3OddsInGameOddsByWeekSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/cfb/odds/{format}/InGameOddsByWeek/{season}/{week}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo4Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsInGameOddsByWeekSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * In-Game Odds Line Movement
   *
   * @remarks
   * Returns in-play game odds (spread, moneyline, total) for games in a given week and season.
   * Returns the full line movement for the given game. This endpoint has a longer cache as it is
   * meant for historical data/line movement rather than the most up to the second line.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Odds.CfbV3OddsInGameOddsLineMovementError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsInGameOddsLineMovement(
    request: CfbV3Odds.CfbV3OddsInGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo4[], CfbV3Odds.CfbV3OddsInGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/odds/{format}/LiveGameOddsLineMovement/{gameid}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo4Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsInGameOddsLineMovementError,
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
   * @throws {@link CfbV3Odds.CfbV3OddsInGameOddsLineMovementSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsInGameOddsLineMovementSportsbookGroup(
    request: CfbV3Odds.CfbV3OddsInGameOddsLineMovementSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo4[], CfbV3Odds.CfbV3OddsInGameOddsLineMovementSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/cfb/odds/{format}/InGameLineMovement/{gameid}/{sportsbookgroup}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo4Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsInGameOddsLineMovementSportsbookGroupError,
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
   * @throws {@link CfbV3Odds.CfbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsInGameOddsLineMovementWithResultingSportsbookGroup(
    request: CfbV3Odds.CfbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GameInfoResult4[],
    CfbV3Odds.CfbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/cfb/odds/{format}/InGameLineMovementWithResulting/{gameid}/{sportsbookgroup}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoResult4Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * Period Game Odds - by Week
   *
   * @remarks
   * Returns the non-full-game odds (spread, moneyline, total) for games in a given week and season.
   * Non-full-game means 1st-half or 1st-quarter, for example, rather than full game. Only returns
   * the most recently seen odds, not inclusive of line movement.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Odds.CfbV3OddsPeriodGameOddsByWeekError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsPeriodGameOddsByWeek(
    request: CfbV3Odds.CfbV3OddsPeriodGameOddsByWeekRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo4[], CfbV3Odds.CfbV3OddsPeriodGameOddsByWeekError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/cfb/odds/{format}/AlternateMarketGameOddsByWeek/{season}/{week}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo4Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsPeriodGameOddsByWeekError,
      },
      options,
    );
  }

  /**
   * Period Game Odds Line Movement
   *
   * @remarks
   * Returns the non-full-game odds (spread, moneyline, total) for games in a given week and season.
   * Non-full-game means 1st-half or 1st-quarter, for example, rather than full game. Returns the
   * full line movement for the given game. This endpoint has a longer cache as it is meant for
   * historical data/line movement rather than the most up to the second line.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Odds.CfbV3OddsPeriodGameOddsLineMovementError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsPeriodGameOddsLineMovement(
    request: CfbV3Odds.CfbV3OddsPeriodGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo4[], CfbV3Odds.CfbV3OddsPeriodGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/cfb/odds/{format}/AlternateMarketGameOddsLineMovement/{gameid}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo4Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsPeriodGameOddsLineMovementError,
      },
      options,
    );
  }

  /**
   * Pre-Game and Period Game Odds - by Week [Sportsbook Group]
   *
   * @remarks
   * Returns the full-game and non-full-game odds (spread, moneyline, total) for games in a given
   * week and season. Only returns the most recently seen odds, not inclusive of line movement. A
   * Sportsbook Group must be specified as a URL parameter.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Odds.CfbV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroupError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroup(
    request: CfbV3Odds.CfbV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo4[], CfbV3Odds.CfbV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/cfb/odds/{format}/PreGameOddsByWeek/{season}/{week}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo4Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroupError,
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
   * @throws {@link CfbV3Odds.CfbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup(
    request: CfbV3Odds.CfbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo4[], CfbV3Odds.CfbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/cfb/odds/{format}/PreGameOddsLineMovement/{gameid}/{sportsbookgroup}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo4Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError,
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
   * CfbV3Odds.CfbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroup(
    request: CfbV3Odds.CfbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GameInfoResult4[],
    CfbV3Odds.CfbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/cfb/odds/{format}/PreGameOddsLineMovementWithResulting/{gameid}/{sportsbookgroup}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoResult4Schema)) },
        errorFactory:
          CfbV3Odds.CfbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * Pre-Game Odds - by Week
   *
   * @remarks
   * Returns full game odds (spread, moneyline, total) for games in a given week and season. Only
   * returns the most recently seen odds, not inclusive of line movement.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Odds.CfbV3OddsPreGameOddsByWeekError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsPreGameOddsByWeek(
    request: CfbV3Odds.CfbV3OddsPreGameOddsByWeekRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo4[], CfbV3Odds.CfbV3OddsPreGameOddsByWeekError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/odds/{format}/GameOddsByWeek/{season}/{week}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo4Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsPreGameOddsByWeekError,
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
   * @throws {@link CfbV3Odds.CfbV3OddsPreGameOddsLineMovementError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsPreGameOddsLineMovement(
    request: CfbV3Odds.CfbV3OddsPreGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo4[], CfbV3Odds.CfbV3OddsPreGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/odds/{format}/GameOddsLineMovement/{gameid}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo4Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsPreGameOddsLineMovementError,
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
   * @throws {@link CfbV3Odds.CfbV3OddsSportsbooksByActiveError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3OddsSportsbooksByActive(
    request: CfbV3Odds.CfbV3OddsSportsbooksByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Sportsbook[], CfbV3Odds.CfbV3OddsSportsbooksByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/odds/{format}/ActiveSportsbooks"),
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
        errorFactory: CfbV3Odds.CfbV3OddsSportsbooksByActiveError,
      },
      options,
    );
  }
}

export namespace CfbV3Odds {
  export type CfbV3OddsBettingEventsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the game(s). <br>Examples: <code>2020-10-17</code> */
    date: string;
  };

  export class CfbV3OddsBettingEventsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsBettingEventsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingEventsBySeasonRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season<br>Examples: <code>2021</code>, <code>2022</code>, etc. */
    season: string;
  };

  export class CfbV3OddsBettingEventsBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsBettingEventsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingFuturesBySeasonRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season<br>Examples: <code>2020</code>, <code>2021</code>, etc. */
    season: string;
  };

  export class CfbV3OddsBettingFuturesBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsBettingFuturesBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingFuturesBySeasonSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season<br>Examples: <code>2020</code>, <code>2021</code>, etc. */
    season: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class CfbV3OddsBettingFuturesBySeasonSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsBettingFuturesBySeasonSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingMarketRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The MarketId of the desired market for which to pull all outcomes/bets. */
    marketId: string;
  };

  export class CfbV3OddsBettingMarketError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsBettingMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingMarketSportsbookGroupRequest = {
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

  export class CfbV3OddsBettingMarketSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsBettingMarketSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingMarketsByEventRequest = {
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

  export class CfbV3OddsBettingMarketsByEventError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsBettingMarketsByEventError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingMarketsByEventSportsbookGroupRequest = {
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

  export class CfbV3OddsBettingMarketsByEventSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsBettingMarketsByEventSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingMarketsByGameRequest = {
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
    gameid: string;
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

  export class CfbV3OddsBettingMarketsByGameError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsBettingMarketsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingMarketsByGameSportsbookGroupRequest = {
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
    gameid: string;
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

  export class CfbV3OddsBettingMarketsByGameSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsBettingMarketsByGameSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingMarketsByMarketTypeRequest = {
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

  export class CfbV3OddsBettingMarketsByMarketTypeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsBettingMarketsByMarketTypeError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest = {
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

  export class CfbV3OddsBettingMarketsByMarketTypeSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsBettingMarketsByMarketTypeSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingMetadataRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class CfbV3OddsBettingMetadataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsBettingMetadataError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingPlayerPropsByGameRequest = {
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

  export class CfbV3OddsBettingPlayerPropsByGameError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsBettingPlayerPropsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingPlayerPropsByGameSportsbookGroupRequest = {
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

  export class CfbV3OddsBettingPlayerPropsByGameSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsBettingPlayerPropsByGameSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingResultsByMarketRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * BettingMarketID of the market for which you would like to see resulted outcomes. Valid
     * example ID <code>17819</code>
     */
    marketId: string;
  };

  export class CfbV3OddsBettingResultsByMarketError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsBettingResultsByMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingResultsByMarketSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * BettingMarketID of the market for which you would like to see resulted outcomes. Valid
     * example ID <code>17819</code>
     */
    marketId: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class CfbV3OddsBettingResultsByMarketSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsBettingResultsByMarketSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingSplitsByBettingMarketRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The MarketId of the desired market for which to pull splits. */
    marketId: string;
  };

  export class CfbV3OddsBettingSplitsByBettingMarketError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsBettingSplitsByBettingMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingSplitsByGameRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The ID of the game for which you want to receive splits for. Example <code>11778</code> */
    gameid: string;
  };

  export class CfbV3OddsBettingSplitsByGameError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsBettingSplitsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingTrendsByMatchupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The abbreviation of the requested team. <br> Examples: <code>MIA</code>, <code>ND</code>,
     * <code>PITT</code>, etc.
     */
    team: string;
    /**
     * The abbreviation of the requested opponent. <br> Examples: <code>MIA</code>, <code>ND</code>,
     * <code>PITT</code>, etc.
     */
    opponent: string;
  };

  export class CfbV3OddsBettingTrendsByMatchupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsBettingTrendsByMatchupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingTrendsByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The abbreviation of the requested team. <br> Examples: <code>MIA</code>, <code>ND</code>,
     * <code>PITT</code>, etc.
     */
    team: string;
  };

  export class CfbV3OddsBettingTrendsByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsBettingTrendsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsInGameOddsByWeekRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season, with optional season type. <br>Examples: <code>2018</code>,
     * <code>2018POST</code>, etc.
     */
    season: string;
    /** The week of the game(s). <br>Examples: <code>1</code>, <code>2</code>, etc. */
    week: string;
  };

  export class CfbV3OddsInGameOddsByWeekError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsInGameOddsByWeekError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsInGameOddsByWeekSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season, with optional season type. <br>Examples: <code>2018</code>,
     * <code>2018POST</code>, etc.
     */
    season: string;
    /** The week of the game(s). <br>Examples: <code>1</code>, <code>2</code>, etc. */
    week: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class CfbV3OddsInGameOddsByWeekSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsInGameOddsByWeekSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsInGameOddsLineMovementRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an CFB game. GameIDs can be found in the Games API. Valid entries are
     * <code>8487</code> or <code>8657</code>
     */
    gameid: string;
  };

  export class CfbV3OddsInGameOddsLineMovementError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsInGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsInGameOddsLineMovementSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an CFB game. GameIDs can be found in the Games API. Valid entries are
     * <code>8487</code> or <code>8657</code>
     */
    gameid: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class CfbV3OddsInGameOddsLineMovementSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsInGameOddsLineMovementSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an CFB game. GameIDs can be found in the Games API. Valid entries are
     * <code>8487</code> or <code>8657</code>
     */
    gameid: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class CfbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError> =
      [{ on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } }];
  }

  export type CfbV3OddsPeriodGameOddsByWeekRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season, with optional season type. <br>Examples: <code>2018</code>,
     * <code>2018POST</code>, etc.
     */
    season: string;
    /** The week of the game(s). <br>Examples: <code>1</code>, <code>2</code>, etc. */
    week: string;
  };

  export class CfbV3OddsPeriodGameOddsByWeekError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsPeriodGameOddsByWeekError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsPeriodGameOddsLineMovementRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an CFB game. GameIDs can be found in the Games API. Valid entries are
     * <code>8487</code> or <code>8657</code>
     */
    gameid: string;
  };

  export class CfbV3OddsPeriodGameOddsLineMovementError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsPeriodGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season, with optional season type. <br>Examples: <code>2018</code>,
     * <code>2018POST</code>, etc.
     */
    season: string;
    /** The week of the game(s). <br>Examples: <code>1</code>, <code>2</code>, etc. */
    week: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class CfbV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an CFB game. GameIDs can be found in the Games API. Valid entries are
     * <code>8487</code> or <code>8657</code>
     */
    gameid: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class CfbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError> =
      [{ on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } }];
  }

  export type CfbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an CFB game. GameIDs can be found in the Games API. Valid entries are
     * <code>8487</code> or <code>8657</code>
     */
    gameid: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class CfbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError> =
      [{ on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } }];
  }

  export type CfbV3OddsPreGameOddsByWeekRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season, with optional season type. <br>Examples: <code>2018</code>,
     * <code>2018POST</code>, etc.
     */
    season: string;
    /** The week of the game(s). <br>Examples: <code>1</code>, <code>2</code>, etc. */
    week: string;
  };

  export class CfbV3OddsPreGameOddsByWeekError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsPreGameOddsByWeekError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsPreGameOddsLineMovementRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an CFB game. GameIDs can be found in the Games API. Valid entries are
     * <code>8487</code> or <code>8657</code>
     */
    gameid: string;
  };

  export class CfbV3OddsPreGameOddsLineMovementError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsPreGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsSportsbooksByActiveRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class CfbV3OddsSportsbooksByActiveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3OddsSportsbooksByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
