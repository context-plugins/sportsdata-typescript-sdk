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
import { bettingMarketSchema, type BettingMarket } from "../models/betting-market.js";
import { boxScore5Schema, type BoxScore5 } from "../models/box-score5.js";
import { Format, formatSchema } from "../models/format.js";
import { gameInfo6Schema, type GameInfo6 } from "../models/game-info6.js";
import { game10Schema, type Game10 } from "../models/game10.js";
import { playerSeason7Schema, type PlayerSeason7 } from "../models/player-season7.js";
import { player6Schema, type Player6 } from "../models/player6.js";
import { schedulesBasicSchema, type SchedulesBasic } from "../models/schedules-basic.js";
import { scoreBasic6Schema, type ScoreBasic6 } from "../models/score-basic6.js";
import { season4Schema, type Season4 } from "../models/season4.js";
import { sportsbookSchema, type Sportsbook } from "../models/sportsbook.js";
import { stadium6Schema, type Stadium6 } from "../models/stadium6.js";
import { teamGame6Schema, type TeamGame6 } from "../models/team-game6.js";
import { teamSeason6Schema, type TeamSeason6 } from "../models/team-season6.js";
import { team6Schema, type Team6 } from "../models/team6.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class WnbaV3Scores {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Are Games In Progress
   *
   * @remarks
   * Are Games In Progress
   *
   * @returns Success
   *
   * @throws {@link WnbaV3Scores.WnbaV3ScoresAreGamesInProgressError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresAreGamesInProgress(
    request: WnbaV3Scores.WnbaV3ScoresAreGamesInProgressRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean, WnbaV3Scores.WnbaV3ScoresAreGamesInProgressError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/AreAnyGamesInProgress"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.boolean() },
        errorFactory: WnbaV3Scores.WnbaV3ScoresAreGamesInProgressError,
      },
      options,
    );
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
   * @throws {@link WnbaV3Scores.WnbaV3ScoresBettingEventsByDateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresBettingEventsByDate(
    request: WnbaV3Scores.WnbaV3ScoresBettingEventsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], WnbaV3Scores.WnbaV3ScoresBettingEventsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/BettingEventsByDate/{date}"),
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
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingEventsByDateError,
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
   * @throws {@link WnbaV3Scores.WnbaV3ScoresBettingEventsBySeasonError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresBettingEventsBySeason(
    request: WnbaV3Scores.WnbaV3ScoresBettingEventsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], WnbaV3Scores.WnbaV3ScoresBettingEventsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/BettingEvents/{season}"),
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
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingEventsBySeasonError,
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
   * @throws {@link WnbaV3Scores.WnbaV3ScoresBettingFuturesBySeasonError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresBettingFuturesBySeason(
    request: WnbaV3Scores.WnbaV3ScoresBettingFuturesBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], WnbaV3Scores.WnbaV3ScoresBettingFuturesBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/BettingFuturesBySeason/{season}"),
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
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingFuturesBySeasonError,
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
   * @throws {@link WnbaV3Scores.WnbaV3ScoresBettingFuturesBySeasonSportsbookGroupError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresBettingFuturesBySeasonSportsbookGroup(
    request: WnbaV3Scores.WnbaV3ScoresBettingFuturesBySeasonSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], WnbaV3Scores.WnbaV3ScoresBettingFuturesBySeasonSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/wnba/scores/{format}/BettingFuturesBySeason/{season}/{sportsbookgroup}",
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
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingFuturesBySeasonSportsbookGroupError,
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
   * @throws {@link WnbaV3Scores.WnbaV3ScoresBettingMarketError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresBettingMarket(
    request: WnbaV3Scores.WnbaV3ScoresBettingMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket, WnbaV3Scores.WnbaV3ScoresBettingMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/BettingMarket/{marketId}"),
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
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingMarketError,
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
   * @throws {@link WnbaV3Scores.WnbaV3ScoresBettingMarketSportsbookGroupError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresBettingMarketSportsbookGroup(
    request: WnbaV3Scores.WnbaV3ScoresBettingMarketSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket, WnbaV3Scores.WnbaV3ScoresBettingMarketSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/wnba/scores/{format}/BettingMarket/{marketId}/{sportsbookgroup}",
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
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingMarketSportsbookGroupError,
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
   * @throws {@link WnbaV3Scores.WnbaV3ScoresBettingMarketsByEventError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresBettingMarketsByEvent(
    request: WnbaV3Scores.WnbaV3ScoresBettingMarketsByEventRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], WnbaV3Scores.WnbaV3ScoresBettingMarketsByEventError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/BettingMarkets/{eventId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "eventId", value: request.eventId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingMarketsByEventError,
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
   * @throws {@link WnbaV3Scores.WnbaV3ScoresBettingMarketsByEventSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresBettingMarketsByEventSportsbookGroup(
    request: WnbaV3Scores.WnbaV3ScoresBettingMarketsByEventSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], WnbaV3Scores.WnbaV3ScoresBettingMarketsByEventSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/wnba/scores/{format}/BettingMarketsByEvent/{eventId}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "eventId", value: request.eventId, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingMarketsByEventSportsbookGroupError,
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
   * @throws {@link WnbaV3Scores.WnbaV3ScoresBettingMarketsByGameError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresBettingMarketsByGame(
    request: WnbaV3Scores.WnbaV3ScoresBettingMarketsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], WnbaV3Scores.WnbaV3ScoresBettingMarketsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/BettingMarketsByGameID/{gameID}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameID", value: request.gameId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingMarketsByGameError,
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
   * @throws {@link WnbaV3Scores.WnbaV3ScoresBettingMarketsByGameSportsbookGroupError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresBettingMarketsByGameSportsbookGroup(
    request: WnbaV3Scores.WnbaV3ScoresBettingMarketsByGameSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], WnbaV3Scores.WnbaV3ScoresBettingMarketsByGameSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/wnba/scores/{format}/BettingMarketsByGameID/{gameID}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameID", value: request.gameId, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingMarketsByGameSportsbookGroupError,
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
   * @throws {@link WnbaV3Scores.WnbaV3ScoresBettingMarketsByMarketTypeError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresBettingMarketsByMarketType(
    request: WnbaV3Scores.WnbaV3ScoresBettingMarketsByMarketTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], WnbaV3Scores.WnbaV3ScoresBettingMarketsByMarketTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/wnba/scores/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "eventId", value: request.eventId, schema: s.string() },
          { name: "marketTypeID", value: request.marketTypeId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingMarketsByMarketTypeError,
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
   * @throws {@link WnbaV3Scores.WnbaV3ScoresBettingMarketsByMarketTypeSportsbookGroupError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresBettingMarketsByMarketTypeSportsbookGroup(
    request: WnbaV3Scores.WnbaV3ScoresBettingMarketsByMarketTypeSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], WnbaV3Scores.WnbaV3ScoresBettingMarketsByMarketTypeSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/wnba/scores/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "eventId", value: request.eventId, schema: s.string() },
          { name: "marketTypeID", value: request.marketTypeId, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingMarketsByMarketTypeSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * Betting Metadata
   *
   * @remarks
   * Returns the list of MarketTypes, BetTypes, PeriodTypes, OutcomeTypes, and ResultTypes to map
   * the IDs to descriptive names.
   *
   * @returns Success
   *
   * @throws {@link WnbaV3Scores.WnbaV3ScoresBettingMetadataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresBettingMetadata(
    request: WnbaV3Scores.WnbaV3ScoresBettingMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEntityMetadataCollection, WnbaV3Scores.WnbaV3ScoresBettingMetadataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/BettingMetadata"),
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
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingMetadataError,
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
   * @throws {@link WnbaV3Scores.WnbaV3ScoresBettingPlayerPropsByGameError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresBettingPlayerPropsByGame(
    request: WnbaV3Scores.WnbaV3ScoresBettingPlayerPropsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], WnbaV3Scores.WnbaV3ScoresBettingPlayerPropsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/BettingPlayerPropsByGameID/{gameId}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingPlayerPropsByGameError,
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
   * @throws {@link WnbaV3Scores.WnbaV3ScoresBettingPlayerPropsByGameSportsbookGroupError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresBettingPlayerPropsByGameSportsbookGroup(
    request: WnbaV3Scores.WnbaV3ScoresBettingPlayerPropsByGameSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], WnbaV3Scores.WnbaV3ScoresBettingPlayerPropsByGameSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/wnba/scores/{format}/BettingPlayerPropsByGameID/{gameId}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameId", value: request.gameId, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingPlayerPropsByGameSportsbookGroupError,
      },
      options,
    );
  }

  /**
   * Box Score [Final]
   *
   * @remarks
   * Full statistical information for a specified game, down to the team and player stat level,
   * delivered after the game is complete.
   *
   * @returns Success
   *
   * @throws {@link WnbaV3Scores.WnbaV3ScoresBoxScoreFinalError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresBoxScoreFinal(
    request: WnbaV3Scores.WnbaV3ScoresBoxScoreFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore5, WnbaV3Scores.WnbaV3ScoresBoxScoreFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/BoxScoreFinal/{gameid}"),
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
        success: { kind: "json", schema: boxScore5Schema },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBoxScoreFinalError,
      },
      options,
    );
  }

  /**
   * Box Score [Live & Final]
   *
   * @remarks
   * Full statistical information for a specified game, down to the team and player stat level,
   * delivered live during the game, called per individual game.
   *
   * @returns Success
   *
   * @throws {@link WnbaV3Scores.WnbaV3ScoresBoxScoreLiveFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresBoxScoreLiveFinal(
    request: WnbaV3Scores.WnbaV3ScoresBoxScoreLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore5, WnbaV3Scores.WnbaV3ScoresBoxScoreLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/BoxScore/{gameid}"),
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
        success: { kind: "json", schema: boxScore5Schema },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBoxScoreLiveFinalError,
      },
      options,
    );
  }

  /**
   * Box Scores - by Date [Final]
   *
   * @remarks
   * Full statistical information for a specified date for each game that took place, down to the
   * team and player stat level, delivered after the game is complete.
   *
   * @returns Success
   *
   * @throws {@link WnbaV3Scores.WnbaV3ScoresBoxScoresByDateFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresBoxScoresByDateFinal(
    request: WnbaV3Scores.WnbaV3ScoresBoxScoresByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore5[], WnbaV3Scores.WnbaV3ScoresBoxScoresByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/BoxScoresFinal/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore5Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBoxScoresByDateFinalError,
      },
      options,
    );
  }

  /**
   * Box Scores - by Date [Live & Final]
   *
   * @remarks
   * Full statistical information for a specified game, down to the team and player stat level,
   * delivered live during the games, called for all games on a given date.
   *
   * @returns Success
   *
   * @throws {@link WnbaV3Scores.WnbaV3ScoresBoxScoresByDateLiveFinalError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresBoxScoresByDateLiveFinal(
    request: WnbaV3Scores.WnbaV3ScoresBoxScoresByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore5[], WnbaV3Scores.WnbaV3ScoresBoxScoresByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/BoxScores/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore5Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBoxScoresByDateLiveFinalError,
      },
      options,
    );
  }

  /**
   * Games - by Date [Final]
   *
   * @remarks
   * Full scores and gameday info, as well as all of the quarter scores and full-time score,
   * delivered as the game ends.
   *
   * @returns Success
   *
   * @throws {@link WnbaV3Scores.WnbaV3ScoresGamesByDateFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresGamesByDateFinal(
    request: WnbaV3Scores.WnbaV3ScoresGamesByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game10[], WnbaV3Scores.WnbaV3ScoresGamesByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/GamesByDateFinal/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => game10Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresGamesByDateFinalError,
      },
      options,
    );
  }

  /**
   * Games - by Date [Live & Final]
   *
   * @remarks
   * Full scores and gameday info delivered live and post-game. Live data includes half and score
   * info. Gameday info includes TV channel etc
   *
   * @returns Success
   *
   * @throws {@link WnbaV3Scores.WnbaV3ScoresGamesByDateLiveFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresGamesByDateLiveFinal(
    request: WnbaV3Scores.WnbaV3ScoresGamesByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game10[], WnbaV3Scores.WnbaV3ScoresGamesByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/GamesByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => game10Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresGamesByDateLiveFinalError,
      },
      options,
    );
  }

  /**
   * Games (Basic) - by Date [Final]
   *
   * @remarks
   * A slimmed-down score endpoint, giving just the quarter scores and final score, for simple
   * applications.
   *
   * @returns Success
   *
   * @throws {@link WnbaV3Scores.WnbaV3ScoresGamesBasicByDateFinalError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresGamesBasicByDateFinal(
    request: WnbaV3Scores.WnbaV3ScoresGamesBasicByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic6[], WnbaV3Scores.WnbaV3ScoresGamesBasicByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/ScoresBasicFinal/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasic6Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresGamesBasicByDateFinalError,
      },
      options,
    );
  }

  /**
   * Games (Basic) - by Date [Live & Final]
   *
   * @remarks
   * A slimmed-down score endpoint, giving just the quarter scores and full gane score, for simple
   * applications, updated live.
   *
   * @returns Success
   *
   * @throws {@link WnbaV3Scores.WnbaV3ScoresGamesBasicByDateLiveFinalError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresGamesBasicByDateLiveFinal(
    request: WnbaV3Scores.WnbaV3ScoresGamesBasicByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic6[], WnbaV3Scores.WnbaV3ScoresGamesBasicByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/ScoresBasic/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasic6Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresGamesBasicByDateLiveFinalError,
      },
      options,
    );
  }

  /**
   * Player Details - by Active
   *
   * @remarks
   * Full player bio and details, including injury notes, for all active players.
   *
   * @returns Success
   *
   * @throws {@link WnbaV3Scores.WnbaV3ScoresPlayerDetailsByActiveError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresPlayerDetailsByActive(
    request: WnbaV3Scores.WnbaV3ScoresPlayerDetailsByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Player6[], WnbaV3Scores.WnbaV3ScoresPlayerDetailsByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/Players"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player6Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresPlayerDetailsByActiveError,
      },
      options,
    );
  }

  /**
   * Player Details - by Team
   *
   * @remarks
   * Full player bio and details, including injury notes, for all available players by team.
   *
   * @returns Success
   *
   * @throws {@link WnbaV3Scores.WnbaV3ScoresPlayerDetailsByTeamError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresPlayerDetailsByTeam(
    request: WnbaV3Scores.WnbaV3ScoresPlayerDetailsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<Player6[], WnbaV3Scores.WnbaV3ScoresPlayerDetailsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/Players/{team}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => player6Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresPlayerDetailsByTeamError,
      },
      options,
    );
  }

  /**
   * Player Season Stats
   *
   * @remarks
   * Returns all season-long stats (i.e. the season total, not each individual game record) for all
   * players for a given season.
   *
   * @returns Success
   *
   * @throws {@link WnbaV3Scores.WnbaV3ScoresPlayerSeasonStatsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresPlayerSeasonStats(
    request: WnbaV3Scores.WnbaV3ScoresPlayerSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason7[], WnbaV3Scores.WnbaV3ScoresPlayerSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/PlayerSeasonStats/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason7Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresPlayerSeasonStatsError,
      },
      options,
    );
  }

  /**
   * Player Season Stats - by Team
   *
   * @remarks
   * Returns all season-long stats (i.e. the season total, not each individual game record) for all
   * players for a given season on a given team.
   *
   * @returns Success
   *
   * @throws {@link WnbaV3Scores.WnbaV3ScoresPlayerSeasonStatsByTeamError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresPlayerSeasonStatsByTeam(
    request: WnbaV3Scores.WnbaV3ScoresPlayerSeasonStatsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason7[], WnbaV3Scores.WnbaV3ScoresPlayerSeasonStatsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/wnba/scores/{format}/PlayerSeasonStatsByTeam/{season}/{team}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "team", value: request.team, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason7Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresPlayerSeasonStatsByTeamError,
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
   * @throws {@link WnbaV3Scores.WnbaV3ScoresPreGameOddsByDateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresPreGameOddsByDate(
    request: WnbaV3Scores.WnbaV3ScoresPreGameOddsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo6[], WnbaV3Scores.WnbaV3ScoresPreGameOddsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/GameOddsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo6Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresPreGameOddsByDateError,
      },
      options,
    );
  }

  /**
   * Pre-Game Odds Line Movement
   *
   * @remarks
   * Returns the full-game odds (spread, moneyline, total) for games on a given date. Returns the
   * full line movement for the given game. This endpoint has a longer cache as it is meant for
   * historical data/line movement rather than the most up to the second line.
   *
   * @returns Success
   *
   * @throws {@link WnbaV3Scores.WnbaV3ScoresPreGameOddsLineMovementError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresPreGameOddsLineMovement(
    request: WnbaV3Scores.WnbaV3ScoresPreGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo6[], WnbaV3Scores.WnbaV3ScoresPreGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/GameOddsLineMovement/{gameid}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo6Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresPreGameOddsLineMovementError,
      },
      options,
    );
  }

  /**
   * Schedules
   *
   * @remarks
   * Home and away teams, date and time, season type and week etc. are included. Also includes
   * gameday information. This includes full stadium information (capacity, lat/long, surface etc.),
   * top-line betting information (spread, moneyline, total), and broadcast information.
   *
   * @returns Success
   *
   * @throws {@link WnbaV3Scores.WnbaV3ScoresSchedulesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresSchedules(
    request: WnbaV3Scores.WnbaV3ScoresSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<Game10[], WnbaV3Scores.WnbaV3ScoresSchedulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/Games/{Season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "Season", value: request.season, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game10Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresSchedulesError,
      },
      options,
    );
  }

  /**
   * Schedules (Basic)
   *
   * @remarks
   * A lightweight schedule endpoint without gameday information. Home and away teams, the date and
   * time of the game, and season type, week etc. are included. Ideal for the most basic information
   * required to build a schedule.
   *
   * @returns Success
   *
   * @throws {@link WnbaV3Scores.WnbaV3ScoresSchedulesBasicError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresSchedulesBasic(
    request: WnbaV3Scores.WnbaV3ScoresSchedulesBasicRequest,
    options?: RequestOptions,
  ): ApiPromise<SchedulesBasic[], WnbaV3Scores.WnbaV3ScoresSchedulesBasicError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/SchedulesBasic/{Season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "Season", value: request.season, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => schedulesBasicSchema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresSchedulesBasicError,
      },
      options,
    );
  }

  /**
   * Season - Current
   *
   * @remarks
   * Year of the current season. This value changes at the start of the new league year. For leagues
   * that run over two years, this is the year the season starts, not ends.
   *
   * @returns Success
   *
   * @throws {@link WnbaV3Scores.WnbaV3ScoresSeasonCurrentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresSeasonCurrent(
    request: WnbaV3Scores.WnbaV3ScoresSeasonCurrentRequest,
    options?: RequestOptions,
  ): ApiPromise<Season4, WnbaV3Scores.WnbaV3ScoresSeasonCurrentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/CurrentSeason"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: season4Schema },
        errorFactory: WnbaV3Scores.WnbaV3ScoresSeasonCurrentError,
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
   * @throws {@link WnbaV3Scores.WnbaV3ScoresSportsbooksByActiveError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresSportsbooksByActive(
    request: WnbaV3Scores.WnbaV3ScoresSportsbooksByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Sportsbook[], WnbaV3Scores.WnbaV3ScoresSportsbooksByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/ActiveSportsbooks"),
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
        errorFactory: WnbaV3Scores.WnbaV3ScoresSportsbooksByActiveError,
      },
      options,
    );
  }

  /**
   * Stadiums
   *
   * @remarks
   * Returns all stadiums in the league with capacity, surface, latitude/longitude, city and state
   * (and where applicable country.)
   *
   * @returns Success
   *
   * @throws {@link WnbaV3Scores.WnbaV3ScoresStadiumsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresStadiums(
    request: WnbaV3Scores.WnbaV3ScoresStadiumsRequest,
    options?: RequestOptions,
  ): ApiPromise<Stadium6[], WnbaV3Scores.WnbaV3ScoresStadiumsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/Stadiums"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => stadium6Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresStadiumsError,
      },
      options,
    );
  }

  /**
   * Standings
   *
   * @remarks
   * Includes regular season standings in division and conference, from which postseason seeding can
   * be derived.
   *
   * @returns Success
   *
   * @throws {@link WnbaV3Scores.WnbaV3ScoresStandingsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresStandings(
    request: WnbaV3Scores.WnbaV3ScoresStandingsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, WnbaV3Scores.WnbaV3ScoresStandingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/Standings/{season}"),
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
        success: { kind: "empty" },
        errorFactory: WnbaV3Scores.WnbaV3ScoresStandingsError,
      },
      options,
    );
  }

  /**
   * Team Game Stats - by Date [Final]
   *
   * @remarks
   * Returns the box score statistical record team-wide (aggregated from all players) for a games on
   * a given date, delivered as each game concludes.
   *
   * @returns Success
   *
   * @throws {@link WnbaV3Scores.WnbaV3ScoresTeamGameStatsByDateFinalError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresTeamGameStatsByDateFinal(
    request: WnbaV3Scores.WnbaV3ScoresTeamGameStatsByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame6[], WnbaV3Scores.WnbaV3ScoresTeamGameStatsByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/TeamGameStatsByDateFinal/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame6Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresTeamGameStatsByDateFinalError,
      },
      options,
    );
  }

  /**
   * Team Game Stats - by Date [Live & Final]
   *
   * @remarks
   * Returns the box score statistical record team-wide (aggregated from all players) for all games
   * on a given date, both live and post-game.
   *
   * @returns Success
   *
   * @throws {@link WnbaV3Scores.WnbaV3ScoresTeamGameStatsByDateLiveFinalError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresTeamGameStatsByDateLiveFinal(
    request: WnbaV3Scores.WnbaV3ScoresTeamGameStatsByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame6[], WnbaV3Scores.WnbaV3ScoresTeamGameStatsByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/TeamGameStatsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame6Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresTeamGameStatsByDateLiveFinalError,
      },
      options,
    );
  }

  /**
   * Team Profiles - All
   *
   * @remarks
   * Full team information: team name and city, conference and division, and colors. Also contains
   * basic fantasy info such as IDs as well as full stadium data. This endpoint returns all teams
   * regardless of current active status.
   *
   * @returns Success
   *
   * @throws {@link WnbaV3Scores.WnbaV3ScoresTeamProfilesAllError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresTeamProfilesAll(
    request: WnbaV3Scores.WnbaV3ScoresTeamProfilesAllRequest,
    options?: RequestOptions,
  ): ApiPromise<Team6[], WnbaV3Scores.WnbaV3ScoresTeamProfilesAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/Teams"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => team6Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresTeamProfilesAllError,
      },
      options,
    );
  }

  /**
   * Team Season Stats
   *
   * @remarks
   * Returns all season-long stats (i.e. the season total, not each individual game record) for all
   * teams (aggregated from all players) for a given season.
   *
   * @returns Success
   *
   * @throws {@link WnbaV3Scores.WnbaV3ScoresTeamSeasonStatsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wnbaV3ScoresTeamSeasonStats(
    request: WnbaV3Scores.WnbaV3ScoresTeamSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamSeason6[], WnbaV3Scores.WnbaV3ScoresTeamSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/wnba/scores/{format}/TeamSeasonStats/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamSeason6Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresTeamSeasonStatsError,
      },
      options,
    );
  }
}

export namespace WnbaV3Scores {
  export type WnbaV3ScoresAreGamesInProgressRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class WnbaV3ScoresAreGamesInProgressError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresAreGamesInProgressError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingEventsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the game(s). <br>Examples: <code>2025-05-30</code>, <code>2025-MAY-28</code>. */
    date: string;
  };

  export class WnbaV3ScoresBettingEventsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingEventsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingEventsBySeasonRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season. Just the api year, no season codes. <br>Examples: <code>2025</code>, etc
     */
    season: string;
  };

  export class WnbaV3ScoresBettingEventsBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingEventsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingFuturesBySeasonRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season. Just the api year, no season codes. <br>Examples: <code>2025</code>, etc
     */
    season: string;
  };

  export class WnbaV3ScoresBettingFuturesBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingFuturesBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingFuturesBySeasonSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season. Just the api year, no season codes. <br>Examples: <code>2025</code>, etc
     */
    season: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class WnbaV3ScoresBettingFuturesBySeasonSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingFuturesBySeasonSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingMarketRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The MarketId of the desired market for which to pull all outcomes/bets. Valid entries
     * include: <code>36</code>, <code>342</code>, etc.
     */
    marketId: string;
  };

  export class WnbaV3ScoresBettingMarketError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingMarketSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The MarketId of the desired market for which to pull all outcomes/bets. Valid entries
     * include: <code>36</code>, <code>342</code>, etc.
     */
    marketId: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code>, <code>G1001</code> */
    sportsbookgroup: string;
  };

  export class WnbaV3ScoresBettingMarketSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingMarketSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingMarketsByEventRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The EventId of the desired event/game for which to pull all betting markets (includes
     * outcomes/bets). Valid entries include: <code>12</code>, <code>8</code>, etc.
     */
    eventId: string;
  };

  export class WnbaV3ScoresBettingMarketsByEventError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingMarketsByEventError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingMarketsByEventSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The EventId of the desired event/game for which to pull all betting markets (includes
     * outcomes/bets). Valid entries include: <code>12</code>, <code>8</code>, etc.
     */
    eventId: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class WnbaV3ScoresBettingMarketsByEventSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingMarketsByEventSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingMarketsByGameRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of the desired game for which to pull all betting markets (includes
     * outcomes/bets). Valid entries include: <code>1934</code>
     */
    gameId: string;
  };

  export class WnbaV3ScoresBettingMarketsByGameError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingMarketsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingMarketsByGameSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of the desired game for which to pull all betting markets (includes
     * outcomes/bets). Valid entries include: <code>1934</code>
     */
    gameId: string;
    /** The name of the Sportsbook grouping. <br>Examples: <code>G1100</code> */
    sportsbookgroup: string;
  };

  export class WnbaV3ScoresBettingMarketsByGameSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingMarketsByGameSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingMarketsByMarketTypeRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The EventId of the desired event/game for which to pull all betting markets (includes
     * outcomes/bets). Valid entries include: <code>12</code>, <code>8</code>, etc.
     */
    eventId: string;
    /**
     * The Market Type ID of the desired MarketTypes to pull. Some common types include:
     * <code>1</code> for `Game Lines` <code>2</code> for `Player Props` <code>3</code> for `Team
     * Props` <code>6</code> for `Game Props`
     */
    marketTypeId: string;
  };

  export class WnbaV3ScoresBettingMarketsByMarketTypeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingMarketsByMarketTypeError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingMarketsByMarketTypeSportsbookGroupRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The EventId of the desired event/game for which to pull all betting markets (includes
     * outcomes/bets). Valid entries include: <code>12</code>, <code>8</code>, etc.
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
  };

  export class WnbaV3ScoresBettingMarketsByMarketTypeSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingMarketsByMarketTypeSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingMetadataRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class WnbaV3ScoresBettingMetadataError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingMetadataError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingPlayerPropsByGameRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The unique GameID of the game in question. */
    gameId: string;
  };

  export class WnbaV3ScoresBettingPlayerPropsByGameError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingPlayerPropsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingPlayerPropsByGameSportsbookGroupRequest = {
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
  };

  export class WnbaV3ScoresBettingPlayerPropsByGameSportsbookGroupError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingPlayerPropsByGameSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBoxScoreFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an WNBA game. GameIDs can be found in the Games API. Valid entries are
     * <code>1686</code>, <code>1899</code>, etc.
     */
    gameid: string;
  };

  export class WnbaV3ScoresBoxScoreFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresBoxScoreFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBoxScoreLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The GameID of an WNBA game. GameIDs can be found in the Games API. Valid entries are
     * <code>1686</code>, <code>1899</code>, etc.
     */
    gameid: string;
  };

  export class WnbaV3ScoresBoxScoreLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresBoxScoreLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBoxScoresByDateFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s).<br>Examples: <code>2024-MAY-16</code>, <code>2023-OCT-20</code>,
     * etc.
     */
    date: string;
  };

  export class WnbaV3ScoresBoxScoresByDateFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresBoxScoresByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBoxScoresByDateLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s).<br>Examples: <code>2024-MAY-16</code>, <code>2024-OCT-20</code>,
     * etc.
     */
    date: string;
  };

  export class WnbaV3ScoresBoxScoresByDateLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresBoxScoresByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresGamesByDateFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s).<br>Examples: <code>2019-MAY-16</code>, <code>2019-MAY-25</code>,
     * etc.
     */
    date: string;
  };

  export class WnbaV3ScoresGamesByDateFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresGamesByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresGamesByDateLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s).<br>Examples: <code>2019-MAY-16</code>, <code>2019-MAY-25</code>,
     * etc.
     */
    date: string;
  };

  export class WnbaV3ScoresGamesByDateLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresGamesByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresGamesBasicByDateFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    date: string;
  };

  export class WnbaV3ScoresGamesBasicByDateFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresGamesBasicByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresGamesBasicByDateLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    date: string;
  };

  export class WnbaV3ScoresGamesBasicByDateLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresGamesBasicByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresPlayerDetailsByActiveRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class WnbaV3ScoresPlayerDetailsByActiveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresPlayerDetailsByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresPlayerDetailsByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The abbreviation of the requested team. <br>Examples: <code>LA</code>, <code>IND</code>. */
    team: string;
  };

  export class WnbaV3ScoresPlayerDetailsByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresPlayerDetailsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresPlayerSeasonStatsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    season: string;
  };

  export class WnbaV3ScoresPlayerSeasonStatsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresPlayerSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresPlayerSeasonStatsByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    season: string;
    team: string;
  };

  export class WnbaV3ScoresPlayerSeasonStatsByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresPlayerSeasonStatsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresPreGameOddsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s).<br>Examples: <code>2019-MAY-16</code>, <code>2019-MAY-25</code>,
     * etc.
     */
    date: string;
  };

  export class WnbaV3ScoresPreGameOddsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresPreGameOddsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresPreGameOddsLineMovementRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The unique GameID of the game for which to pull data. */
    gameid: string;
  };

  export class WnbaV3ScoresPreGameOddsLineMovementError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresPreGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresSchedulesRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season (with optional season type).<br>Examples: <code>2019</code>,
     * <code>2019PRE</code>, <code>2019POST</code>, <code>2019REG</code>, etc.
     */
    season: string;
  };

  export class WnbaV3ScoresSchedulesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresSchedulesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresSchedulesBasicRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season (with optional season type).<br>Examples: <code>2019</code>,
     * <code>2019PRE</code>, <code>2019POST</code>, <code>2019REG</code>, etc.
     */
    season: string;
  };

  export class WnbaV3ScoresSchedulesBasicError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresSchedulesBasicError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresSeasonCurrentRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class WnbaV3ScoresSeasonCurrentError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresSeasonCurrentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresSportsbooksByActiveRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class WnbaV3ScoresSportsbooksByActiveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresSportsbooksByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresStadiumsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class WnbaV3ScoresStadiumsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresStadiumsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresStandingsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    season: string;
  };

  export class WnbaV3ScoresStandingsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresStandingsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresTeamGameStatsByDateFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    date: string;
  };

  export class WnbaV3ScoresTeamGameStatsByDateFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresTeamGameStatsByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresTeamGameStatsByDateLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    date: string;
  };

  export class WnbaV3ScoresTeamGameStatsByDateLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresTeamGameStatsByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresTeamProfilesAllRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class WnbaV3ScoresTeamProfilesAllError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresTeamProfilesAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresTeamSeasonStatsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    season: string;
  };

  export class WnbaV3ScoresTeamSeasonStatsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<WnbaV3ScoresTeamSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
