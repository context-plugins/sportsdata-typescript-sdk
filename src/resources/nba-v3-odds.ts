import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  nbaV3OddsBettingEventsByDate(
    request: NbaV3Odds.NbaV3OddsBettingEventsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], NbaV3Odds.NbaV3OddsBettingEventsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/odds/{format}/BettingEventsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent1Schema)) },
        errorFactory: NbaV3Odds.NbaV3OddsBettingEventsByDateError,
      },
      options,
    );
  }

  nbaV3OddsBettingEventsBySeason(
    request: NbaV3Odds.NbaV3OddsBettingEventsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], NbaV3Odds.NbaV3OddsBettingEventsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/odds/{format}/BettingEvents/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent1Schema)) },
        errorFactory: NbaV3Odds.NbaV3OddsBettingEventsBySeasonError,
      },
      options,
    );
  }

  nbaV3OddsBettingFuturesBySeason(
    request: NbaV3Odds.NbaV3OddsBettingFuturesBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], NbaV3Odds.NbaV3OddsBettingFuturesBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/odds/{format}/BettingFuturesBySeason/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent1Schema)) },
        errorFactory: NbaV3Odds.NbaV3OddsBettingFuturesBySeasonError,
      },
      options,
    );
  }

  nbaV3OddsBettingFuturesBySeasonSportsbookGroup(
    request: NbaV3Odds.NbaV3OddsBettingFuturesBySeasonSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], NbaV3Odds.NbaV3OddsBettingFuturesBySeasonSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/odds/{format}/BettingFuturesBySeason/{season}/{sportsbookgroup}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent1Schema)) },
        errorFactory: NbaV3Odds.NbaV3OddsBettingFuturesBySeasonSportsbookGroupError,
      },
      options,
    );
  }

  nbaV3OddsBettingMarket(
    request: NbaV3Odds.NbaV3OddsBettingMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket, NbaV3Odds.NbaV3OddsBettingMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/odds/{format}/BettingMarket/{marketId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "marketId", value: request.marketId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarketSchema },
        errorFactory: NbaV3Odds.NbaV3OddsBettingMarketError,
      },
      options,
    );
  }

  nbaV3OddsBettingMarketSportsbookGroup(
    request: NbaV3Odds.NbaV3OddsBettingMarketSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket, NbaV3Odds.NbaV3OddsBettingMarketSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/odds/{format}/BettingMarket/{marketId}/{sportsbookgroup}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "marketId", value: request.marketId, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarketSchema },
        errorFactory: NbaV3Odds.NbaV3OddsBettingMarketSportsbookGroupError,
      },
      options,
    );
  }

  nbaV3OddsBettingMarketsByEvent(
    request: NbaV3Odds.NbaV3OddsBettingMarketsByEventRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NbaV3Odds.NbaV3OddsBettingMarketsByEventError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/odds/{format}/BettingMarkets/{eventId}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: NbaV3Odds.NbaV3OddsBettingMarketsByEventError,
      },
      options,
    );
  }

  nbaV3OddsBettingMarketsByEventSportsbookGroup(
    request: NbaV3Odds.NbaV3OddsBettingMarketsByEventSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NbaV3Odds.NbaV3OddsBettingMarketsByEventSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/odds/{format}/BettingMarketsByEvent/{eventId}/{sportsbookgroup}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "eventId", value: request.eventId, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: NbaV3Odds.NbaV3OddsBettingMarketsByEventSportsbookGroupError,
      },
      options,
    );
  }

  nbaV3OddsBettingMarketsByGame(
    request: NbaV3Odds.NbaV3OddsBettingMarketsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NbaV3Odds.NbaV3OddsBettingMarketsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/odds/{format}/BettingMarketsByGameID/{gameID}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameID", value: request.gameId, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: NbaV3Odds.NbaV3OddsBettingMarketsByGameError,
      },
      options,
    );
  }

  nbaV3OddsBettingMarketsByGameSportsbookGroup(
    request: NbaV3Odds.NbaV3OddsBettingMarketsByGameSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NbaV3Odds.NbaV3OddsBettingMarketsByGameSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/odds/{format}/BettingMarketsByGameID/{gameID}/{sportsbookgroup}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameID", value: request.gameId, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: NbaV3Odds.NbaV3OddsBettingMarketsByGameSportsbookGroupError,
      },
      options,
    );
  }

  nbaV3OddsBettingMarketsByMarketType(
    request: NbaV3Odds.NbaV3OddsBettingMarketsByMarketTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NbaV3Odds.NbaV3OddsBettingMarketsByMarketTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: NbaV3Odds.NbaV3OddsBettingMarketsByMarketTypeError,
      },
      options,
    );
  }

  nbaV3OddsBettingMarketsByMarketTypeSportsbookGroup(
    request: NbaV3Odds.NbaV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NbaV3Odds.NbaV3OddsBettingMarketsByMarketTypeSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: NbaV3Odds.NbaV3OddsBettingMarketsByMarketTypeSportsbookGroupError,
      },
      options,
    );
  }

  nbaV3OddsBettingMetadata(
    request: NbaV3Odds.NbaV3OddsBettingMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEntityMetadataCollection, NbaV3Odds.NbaV3OddsBettingMetadataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/odds/{format}/BettingMetadata"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingEntityMetadataCollectionSchema },
        errorFactory: NbaV3Odds.NbaV3OddsBettingMetadataError,
      },
      options,
    );
  }

  nbaV3OddsBettingPlayerPropsByGame(
    request: NbaV3Odds.NbaV3OddsBettingPlayerPropsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NbaV3Odds.NbaV3OddsBettingPlayerPropsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/odds/{format}/BettingPlayerPropsByGameID/{gameId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameId", value: request.gameId, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: NbaV3Odds.NbaV3OddsBettingPlayerPropsByGameError,
      },
      options,
    );
  }

  nbaV3OddsBettingPlayerPropsByGameSportsbookGroup(
    request: NbaV3Odds.NbaV3OddsBettingPlayerPropsByGameSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NbaV3Odds.NbaV3OddsBettingPlayerPropsByGameSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: NbaV3Odds.NbaV3OddsBettingPlayerPropsByGameSportsbookGroupError,
      },
      options,
    );
  }

  nbaV3OddsBettingResultsByMarket(
    request: NbaV3Odds.NbaV3OddsBettingResultsByMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarketResult, NbaV3Odds.NbaV3OddsBettingResultsByMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/odds/{format}/BettingMarketResults/{marketId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "marketId", value: request.marketId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarketResultSchema },
        errorFactory: NbaV3Odds.NbaV3OddsBettingResultsByMarketError,
      },
      options,
    );
  }

  nbaV3OddsBettingResultsByMarketSportsbookGroup(
    request: NbaV3Odds.NbaV3OddsBettingResultsByMarketSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarketResult, NbaV3Odds.NbaV3OddsBettingResultsByMarketSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nba/odds/{format}/BettingResultsByMarket/{marketId}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "marketId", value: request.marketId, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarketResultSchema },
        errorFactory: NbaV3Odds.NbaV3OddsBettingResultsByMarketSportsbookGroupError,
      },
      options,
    );
  }

  nbaV3OddsBettingSplitsByBettingMarket(
    request: NbaV3Odds.NbaV3OddsBettingSplitsByBettingMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarketSplit, NbaV3Odds.NbaV3OddsBettingSplitsByBettingMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/odds/{format}/BettingSplitsByMarketId/{marketId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "marketId", value: request.marketId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarketSplitSchema },
        errorFactory: NbaV3Odds.NbaV3OddsBettingSplitsByBettingMarketError,
      },
      options,
    );
  }

  nbaV3OddsBettingSplitsByGame(
    request: NbaV3Odds.NbaV3OddsBettingSplitsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<GameBettingSplit1, NbaV3Odds.NbaV3OddsBettingSplitsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/odds/{format}/BettingSplitsByGameId/{gameId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameId", value: request.gameId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: gameBettingSplit1Schema },
        errorFactory: NbaV3Odds.NbaV3OddsBettingSplitsByGameError,
      },
      options,
    );
  }

  nbaV3OddsBettingTrendsByMatchup(
    request: NbaV3Odds.NbaV3OddsBettingTrendsByMatchupRequest,
    options?: RequestOptions,
  ): ApiPromise<MatchupTrends1, NbaV3Odds.NbaV3OddsBettingTrendsByMatchupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/odds/{format}/MatchupTrends/{team}/{opponent}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "team", value: request.team, schema: s.string() },
          { name: "opponent", value: request.opponent, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: matchupTrends1Schema },
        errorFactory: NbaV3Odds.NbaV3OddsBettingTrendsByMatchupError,
      },
      options,
    );
  }

  nbaV3OddsBettingTrendsByTeam(
    request: NbaV3Odds.NbaV3OddsBettingTrendsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamTrends1, NbaV3Odds.NbaV3OddsBettingTrendsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/odds/{format}/TeamTrends/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: teamTrends1Schema },
        errorFactory: NbaV3Odds.NbaV3OddsBettingTrendsByTeamError,
      },
      options,
    );
  }

  nbaV3OddsInGameOddsByDate(
    request: NbaV3Odds.NbaV3OddsInGameOddsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsInGameOddsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/odds/{format}/LiveGameOddsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo1Schema)) },
        errorFactory: NbaV3Odds.NbaV3OddsInGameOddsByDateError,
      },
      options,
    );
  }

  nbaV3OddsInGameOddsByDateSportsbookGroup(
    request: NbaV3Odds.NbaV3OddsInGameOddsByDateSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsInGameOddsByDateSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/odds/{format}/InGameOddsByDate/{date}/{sportsbookgroup}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo1Schema)) },
        errorFactory: NbaV3Odds.NbaV3OddsInGameOddsByDateSportsbookGroupError,
      },
      options,
    );
  }

  nbaV3OddsInGameOddsLineMovement(
    request: NbaV3Odds.NbaV3OddsInGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsInGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/odds/{format}/LiveGameOddsLineMovement/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo1Schema)) },
        errorFactory: NbaV3Odds.NbaV3OddsInGameOddsLineMovementError,
      },
      options,
    );
  }

  nbaV3OddsInGameOddsLineMovementSportsbookGroup(
    request: NbaV3Odds.NbaV3OddsInGameOddsLineMovementSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsInGameOddsLineMovementSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/odds/{format}/InGameLineMovement/{gameid}/{sportsbookgroup}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo1Schema)) },
        errorFactory: NbaV3Odds.NbaV3OddsInGameOddsLineMovementSportsbookGroupError,
      },
      options,
    );
  }

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
        url: this.#servers.default(
          "/v3/nba/odds/{format}/InGameLineMovementWithResulting/{gameid}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoResult1Schema)) },
        errorFactory: NbaV3Odds.NbaV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError,
      },
      options,
    );
  }

  nbaV3OddsPeriodGameOddsByDate(
    request: NbaV3Odds.NbaV3OddsPeriodGameOddsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsPeriodGameOddsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/odds/{format}/AlternateMarketGameOddsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo1Schema)) },
        errorFactory: NbaV3Odds.NbaV3OddsPeriodGameOddsByDateError,
      },
      options,
    );
  }

  nbaV3OddsPeriodGameOddsLineMovement(
    request: NbaV3Odds.NbaV3OddsPeriodGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsPeriodGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/odds/{format}/AlternateMarketGameOddsLineMovement/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo1Schema)) },
        errorFactory: NbaV3Odds.NbaV3OddsPeriodGameOddsLineMovementError,
      },
      options,
    );
  }

  nbaV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroup(
    request: NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/odds/{format}/PreGameOddsByDate/{date}/{sportsbookgroup}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo1Schema)) },
        errorFactory: NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError,
      },
      options,
    );
  }

  nbaV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup(
    request: NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nba/odds/{format}/PreGameOddsLineMovement/{gameid}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo1Schema)) },
        errorFactory: NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError,
      },
      options,
    );
  }

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
        url: this.#servers.default(
          "/v3/nba/odds/{format}/PreGameOddsLineMovementWithResulting/{gameid}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
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

  nbaV3OddsPreGameOddsByDate(
    request: NbaV3Odds.NbaV3OddsPreGameOddsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsPreGameOddsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/odds/{format}/GameOddsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo1Schema)) },
        errorFactory: NbaV3Odds.NbaV3OddsPreGameOddsByDateError,
      },
      options,
    );
  }

  nbaV3OddsPreGameOddsLineMovement(
    request: NbaV3Odds.NbaV3OddsPreGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsPreGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/odds/{format}/GameOddsLineMovement/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo1Schema)) },
        errorFactory: NbaV3Odds.NbaV3OddsPreGameOddsLineMovementError,
      },
      options,
    );
  }

  nbaV3OddsSportsbooksByActive(
    request: NbaV3Odds.NbaV3OddsSportsbooksByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Sportsbook[], NbaV3Odds.NbaV3OddsSportsbooksByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/odds/{format}/ActiveSportsbooks"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
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
    format?: Format;
    date: string;
  };

  export class NbaV3OddsBettingEventsByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsBettingEventsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingEventsBySeasonRequest = {
    format?: Format;
    season: string;
  };

  export class NbaV3OddsBettingEventsBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsBettingEventsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingFuturesBySeasonRequest = {
    format?: Format;
    season: string;
  };

  export class NbaV3OddsBettingFuturesBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsBettingFuturesBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingFuturesBySeasonSportsbookGroupRequest = {
    format?: Format;
    season: string;
    sportsbookgroup: string;
  };

  export class NbaV3OddsBettingFuturesBySeasonSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsBettingFuturesBySeasonSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingMarketRequest = {
    format?: Format;
    marketId: string;
  };

  export class NbaV3OddsBettingMarketError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NbaV3OddsBettingMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingMarketSportsbookGroupRequest = {
    format?: Format;
    marketId: string;
    sportsbookgroup: string;
  };

  export class NbaV3OddsBettingMarketSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsBettingMarketSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingMarketsByEventRequest = {
    format?: Format;
    eventId: string;
    include?: Include;
  };

  export class NbaV3OddsBettingMarketsByEventError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsBettingMarketsByEventError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingMarketsByEventSportsbookGroupRequest = {
    format?: Format;
    eventId: string;
    sportsbookgroup: string;
    include?: Include;
  };

  export class NbaV3OddsBettingMarketsByEventSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsBettingMarketsByEventSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingMarketsByGameRequest = {
    format?: Format;
    gameId: string;
    include?: Include;
  };

  export class NbaV3OddsBettingMarketsByGameError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsBettingMarketsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingMarketsByGameSportsbookGroupRequest = {
    format?: Format;
    gameId: string;
    sportsbookgroup: string;
    include?: Include;
  };

  export class NbaV3OddsBettingMarketsByGameSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsBettingMarketsByGameSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingMarketsByMarketTypeRequest = {
    format?: Format;
    eventId: string;
    marketTypeId: string;
    include?: Include;
  };

  export class NbaV3OddsBettingMarketsByMarketTypeError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsBettingMarketsByMarketTypeError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest = {
    format?: Format;
    eventId: string;
    marketTypeId: string;
    sportsbookgroup: string;
    include?: Include;
  };

  export class NbaV3OddsBettingMarketsByMarketTypeSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsBettingMarketsByMarketTypeSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingMetadataRequest = {
    format?: Format;
  };

  export class NbaV3OddsBettingMetadataError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NbaV3OddsBettingMetadataError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingPlayerPropsByGameRequest = {
    format?: Format;
    gameId: string;
    include?: Include;
  };

  export class NbaV3OddsBettingPlayerPropsByGameError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsBettingPlayerPropsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingPlayerPropsByGameSportsbookGroupRequest = {
    format?: Format;
    gameId: string;
    sportsbookgroup: string;
    include?: Include;
  };

  export class NbaV3OddsBettingPlayerPropsByGameSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsBettingPlayerPropsByGameSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingResultsByMarketRequest = {
    format?: Format;
    marketId: string;
  };

  export class NbaV3OddsBettingResultsByMarketError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsBettingResultsByMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingResultsByMarketSportsbookGroupRequest = {
    format?: Format;
    marketId: string;
    sportsbookgroup: string;
  };

  export class NbaV3OddsBettingResultsByMarketSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsBettingResultsByMarketSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingSplitsByBettingMarketRequest = {
    format?: Format;
    marketId: string;
  };

  export class NbaV3OddsBettingSplitsByBettingMarketError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsBettingSplitsByBettingMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingSplitsByGameRequest = {
    format?: Format;
    gameId: string;
  };

  export class NbaV3OddsBettingSplitsByGameError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsBettingSplitsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingTrendsByMatchupRequest = {
    format?: Format;
    team: string;
    opponent: string;
  };

  export class NbaV3OddsBettingTrendsByMatchupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsBettingTrendsByMatchupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsBettingTrendsByTeamRequest = {
    format?: Format;
    team: string;
  };

  export class NbaV3OddsBettingTrendsByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsBettingTrendsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsInGameOddsByDateRequest = {
    format?: Format;
    date: string;
  };

  export class NbaV3OddsInGameOddsByDateError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NbaV3OddsInGameOddsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsInGameOddsByDateSportsbookGroupRequest = {
    format?: Format;
    date: string;
    sportsbookgroup: string;
  };

  export class NbaV3OddsInGameOddsByDateSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsInGameOddsByDateSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsInGameOddsLineMovementRequest = {
    format?: Format;
    gameid: string;
  };

  export class NbaV3OddsInGameOddsLineMovementError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsInGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsInGameOddsLineMovementSportsbookGroupRequest = {
    format?: Format;
    gameid: string;
    sportsbookgroup: string;
  };

  export class NbaV3OddsInGameOddsLineMovementSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsInGameOddsLineMovementSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest = {
    format?: Format;
    gameid: string;
    sportsbookgroup: string;
  };

  export class NbaV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsPeriodGameOddsByDateRequest = {
    format?: Format;
    date: string;
  };

  export class NbaV3OddsPeriodGameOddsByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsPeriodGameOddsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsPeriodGameOddsLineMovementRequest = {
    format?: Format;
    gameid: string;
  };

  export class NbaV3OddsPeriodGameOddsLineMovementError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsPeriodGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupRequest = {
    format?: Format;
    date: string;
    sportsbookgroup: string;
  };

  export class NbaV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest = {
    format?: Format;
    gameid: string;
    sportsbookgroup: string;
  };

  export class NbaV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest = {
    format?: Format;
    gameid: string;
    sportsbookgroup: string;
  };

  export class NbaV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsPreGameOddsByDateRequest = {
    format?: Format;
    date: string;
  };

  export class NbaV3OddsPreGameOddsByDateError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NbaV3OddsPreGameOddsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsPreGameOddsLineMovementRequest = {
    format?: Format;
    gameid: string;
  };

  export class NbaV3OddsPreGameOddsLineMovementError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsPreGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3OddsSportsbooksByActiveRequest = {
    format?: Format;
  };

  export class NbaV3OddsSportsbooksByActiveError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3OddsSportsbooksByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
