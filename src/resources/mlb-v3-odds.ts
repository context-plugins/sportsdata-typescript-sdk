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

  mlbV3OddsBettingEventsByDate(
    request: MlbV3Odds.MlbV3OddsBettingEventsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], MlbV3Odds.MlbV3OddsBettingEventsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/odds/{format}/BettingEventsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent1Schema)) },
        errorFactory: MlbV3Odds.MlbV3OddsBettingEventsByDateError,
      },
      options,
    );
  }

  mlbV3OddsBettingEventsBySeason(
    request: MlbV3Odds.MlbV3OddsBettingEventsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], MlbV3Odds.MlbV3OddsBettingEventsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/odds/{format}/BettingEvents/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent1Schema)) },
        errorFactory: MlbV3Odds.MlbV3OddsBettingEventsBySeasonError,
      },
      options,
    );
  }

  mlbV3OddsBettingFuturesBySeason(
    request: MlbV3Odds.MlbV3OddsBettingFuturesBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], MlbV3Odds.MlbV3OddsBettingFuturesBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/odds/{format}/BettingFuturesBySeason/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent1Schema)) },
        errorFactory: MlbV3Odds.MlbV3OddsBettingFuturesBySeasonError,
      },
      options,
    );
  }

  mlbV3OddsBettingFuturesBySeasonSportsbookGroup(
    request: MlbV3Odds.MlbV3OddsBettingFuturesBySeasonSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], MlbV3Odds.MlbV3OddsBettingFuturesBySeasonSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/odds/{format}/BettingFuturesBySeason/{season}/{sportsbookGroup}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "sportsbookGroup", value: request.sportsbookGroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent1Schema)) },
        errorFactory: MlbV3Odds.MlbV3OddsBettingFuturesBySeasonSportsbookGroupError,
      },
      options,
    );
  }

  mlbV3OddsBettingMarket(
    request: MlbV3Odds.MlbV3OddsBettingMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket, MlbV3Odds.MlbV3OddsBettingMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/odds/{format}/BettingMarket/{marketId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "marketId", value: request.marketId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarketSchema },
        errorFactory: MlbV3Odds.MlbV3OddsBettingMarketError,
      },
      options,
    );
  }

  mlbV3OddsBettingMarketSportsbookGroup(
    request: MlbV3Odds.MlbV3OddsBettingMarketSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket, MlbV3Odds.MlbV3OddsBettingMarketSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/odds/{format}/BettingMarket/{marketId}/{sportsbookGroup}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "marketId", value: request.marketId, schema: s.string() },
          { name: "sportsbookGroup", value: request.sportsbookGroup, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarketSchema },
        errorFactory: MlbV3Odds.MlbV3OddsBettingMarketSportsbookGroupError,
      },
      options,
    );
  }

  mlbV3OddsBettingMarketsByEvent(
    request: MlbV3Odds.MlbV3OddsBettingMarketsByEventRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], MlbV3Odds.MlbV3OddsBettingMarketsByEventError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/odds/{format}/BettingMarkets/{eventId}"),
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
        errorFactory: MlbV3Odds.MlbV3OddsBettingMarketsByEventError,
      },
      options,
    );
  }

  mlbV3OddsBettingMarketsByEventSportsbookGroup(
    request: MlbV3Odds.MlbV3OddsBettingMarketsByEventSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], MlbV3Odds.MlbV3OddsBettingMarketsByEventSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/odds/{format}/BettingMarketsByEvent/{eventId}/{sportsbookGroup}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "eventId", value: request.eventId, schema: s.string() },
          { name: "sportsbookGroup", value: request.sportsbookGroup, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: MlbV3Odds.MlbV3OddsBettingMarketsByEventSportsbookGroupError,
      },
      options,
    );
  }

  mlbV3OddsBettingMarketsByGame(
    request: MlbV3Odds.MlbV3OddsBettingMarketsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], MlbV3Odds.MlbV3OddsBettingMarketsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/odds/{format}/BettingMarketsByGameID/{gameID}"),
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
        errorFactory: MlbV3Odds.MlbV3OddsBettingMarketsByGameError,
      },
      options,
    );
  }

  mlbV3OddsBettingMarketsByGameSportsbookGroup(
    request: MlbV3Odds.MlbV3OddsBettingMarketsByGameSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], MlbV3Odds.MlbV3OddsBettingMarketsByGameSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/odds/{format}/BettingMarketsByGameID/{gameID}/{sportsbookGroup}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameID", value: request.gameId, schema: s.string() },
          { name: "sportsbookGroup", value: request.sportsbookGroup, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: MlbV3Odds.MlbV3OddsBettingMarketsByGameSportsbookGroupError,
      },
      options,
    );
  }

  mlbV3OddsBettingMarketsByMarketType(
    request: MlbV3Odds.MlbV3OddsBettingMarketsByMarketTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], MlbV3Odds.MlbV3OddsBettingMarketsByMarketTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: MlbV3Odds.MlbV3OddsBettingMarketsByMarketTypeError,
      },
      options,
    );
  }

  mlbV3OddsBettingMarketsByMarketTypeSportsbookGroup(
    request: MlbV3Odds.MlbV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], MlbV3Odds.MlbV3OddsBettingMarketsByMarketTypeSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: MlbV3Odds.MlbV3OddsBettingMarketsByMarketTypeSportsbookGroupError,
      },
      options,
    );
  }

  mlbV3OddsBettingMetadata(
    request: MlbV3Odds.MlbV3OddsBettingMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEntityMetadataCollection, MlbV3Odds.MlbV3OddsBettingMetadataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/odds/{format}/BettingMetadata"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingEntityMetadataCollectionSchema },
        errorFactory: MlbV3Odds.MlbV3OddsBettingMetadataError,
      },
      options,
    );
  }

  mlbV3OddsBettingPlayerPropsByGame(
    request: MlbV3Odds.MlbV3OddsBettingPlayerPropsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], MlbV3Odds.MlbV3OddsBettingPlayerPropsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/odds/{format}/BettingPlayerPropsByGameID/{gameId}"),
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
        errorFactory: MlbV3Odds.MlbV3OddsBettingPlayerPropsByGameError,
      },
      options,
    );
  }

  mlbV3OddsBettingPlayerPropsByGameSportsbookGroup(
    request: MlbV3Odds.MlbV3OddsBettingPlayerPropsByGameSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], MlbV3Odds.MlbV3OddsBettingPlayerPropsByGameSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: MlbV3Odds.MlbV3OddsBettingPlayerPropsByGameSportsbookGroupError,
      },
      options,
    );
  }

  mlbV3OddsBettingResultsByMarket(
    request: MlbV3Odds.MlbV3OddsBettingResultsByMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarketResult, MlbV3Odds.MlbV3OddsBettingResultsByMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/odds/{format}/BettingMarketResults/{marketId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "marketId", value: request.marketId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarketResultSchema },
        errorFactory: MlbV3Odds.MlbV3OddsBettingResultsByMarketError,
      },
      options,
    );
  }

  mlbV3OddsBettingResultsByMarketSportsbookGroup(
    request: MlbV3Odds.MlbV3OddsBettingResultsByMarketSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarketResult, MlbV3Odds.MlbV3OddsBettingResultsByMarketSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/mlb/odds/{format}/BettingResultsByMarket/{marketID}/{sportsbookGroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "marketID", value: request.marketId, schema: s.string() },
          { name: "sportsbookGroup", value: request.sportsbookGroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarketResultSchema },
        errorFactory: MlbV3Odds.MlbV3OddsBettingResultsByMarketSportsbookGroupError,
      },
      options,
    );
  }

  mlbV3OddsBettingSplitsByGame(
    request: MlbV3Odds.MlbV3OddsBettingSplitsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<GameBettingSplit1, MlbV3Odds.MlbV3OddsBettingSplitsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/odds/{format}/BettingSplitsByGameId/{gameId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameId", value: request.gameId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: gameBettingSplit1Schema },
        errorFactory: MlbV3Odds.MlbV3OddsBettingSplitsByGameError,
      },
      options,
    );
  }

  mlbV3OddsBettingSplitsByBettingMarket(
    request: MlbV3Odds.MlbV3OddsBettingSplitsByBettingMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarketSplit, MlbV3Odds.MlbV3OddsBettingSplitsByBettingMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/odds/{format}/BettingSplitsByMarketId/{marketId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "marketId", value: request.marketId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarketSplitSchema },
        errorFactory: MlbV3Odds.MlbV3OddsBettingSplitsByBettingMarketError,
      },
      options,
    );
  }

  mlbV3OddsBettingTrendsByMatchup(
    request: MlbV3Odds.MlbV3OddsBettingTrendsByMatchupRequest,
    options?: RequestOptions,
  ): ApiPromise<MatchupTrends2, MlbV3Odds.MlbV3OddsBettingTrendsByMatchupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/odds/{format}/MatchupTrends/{team}/{opponent}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "team", value: request.team, schema: s.string() },
          { name: "opponent", value: request.opponent, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: matchupTrends2Schema },
        errorFactory: MlbV3Odds.MlbV3OddsBettingTrendsByMatchupError,
      },
      options,
    );
  }

  mlbV3OddsBettingTrendsByTeam(
    request: MlbV3Odds.MlbV3OddsBettingTrendsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamTrends1, MlbV3Odds.MlbV3OddsBettingTrendsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/odds/{format}/TeamTrends/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: teamTrends1Schema },
        errorFactory: MlbV3Odds.MlbV3OddsBettingTrendsByTeamError,
      },
      options,
    );
  }

  mlbV3OddsInGameOddsByDate(
    request: MlbV3Odds.MlbV3OddsInGameOddsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsInGameOddsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/odds/{format}/LiveGameOddsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo2Schema)) },
        errorFactory: MlbV3Odds.MlbV3OddsInGameOddsByDateError,
      },
      options,
    );
  }

  mlbV3OddsInGameOddsByDateSportsbookGroup(
    request: MlbV3Odds.MlbV3OddsInGameOddsByDateSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsInGameOddsByDateSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/odds/{format}/InGameOddsByDate/{date}/{sportsbookGroup}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
          { name: "sportsbookGroup", value: request.sportsbookGroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo2Schema)) },
        errorFactory: MlbV3Odds.MlbV3OddsInGameOddsByDateSportsbookGroupError,
      },
      options,
    );
  }

  mlbV3OddsInGameOddsLineMovement(
    request: MlbV3Odds.MlbV3OddsInGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsInGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/odds/{format}/LiveGameOddsLineMovement/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo2Schema)) },
        errorFactory: MlbV3Odds.MlbV3OddsInGameOddsLineMovementError,
      },
      options,
    );
  }

  mlbV3OddsInGameOddsLineMovementSportsbookGroup(
    request: MlbV3Odds.MlbV3OddsInGameOddsLineMovementSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsInGameOddsLineMovementSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/odds/{format}/InGameOddsLineMovement/{gameid}/{sportsbookGroup}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookGroup", value: request.sportsbookGroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo2Schema)) },
        errorFactory: MlbV3Odds.MlbV3OddsInGameOddsLineMovementSportsbookGroupError,
      },
      options,
    );
  }

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
        url: this.#servers.default(
          "/v3/mlb/odds/{format}/InGameOddsLineMovementWithResulting/{gameid}/{sportsbookGroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookGroup", value: request.sportsbookGroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoResult2Schema)) },
        errorFactory: MlbV3Odds.MlbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError,
      },
      options,
    );
  }

  mlbV3OddsPeriodGameOddsByDate(
    request: MlbV3Odds.MlbV3OddsPeriodGameOddsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsPeriodGameOddsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/odds/{format}/AlternateMarketGameOddsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo2Schema)) },
        errorFactory: MlbV3Odds.MlbV3OddsPeriodGameOddsByDateError,
      },
      options,
    );
  }

  mlbV3OddsPeriodGameOddsLineMovement(
    request: MlbV3Odds.MlbV3OddsPeriodGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsPeriodGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/odds/{format}/AlternateMarketGameOddsLineMovement/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo2Schema)) },
        errorFactory: MlbV3Odds.MlbV3OddsPeriodGameOddsLineMovementError,
      },
      options,
    );
  }

  mlbV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroup(
    request: MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/odds/{format}/PreGameOddsByDate/{date}/{sportsbookGroup}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
          { name: "sportsbookGroup", value: request.sportsbookGroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo2Schema)) },
        errorFactory: MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError,
      },
      options,
    );
  }

  mlbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup(
    request: MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/mlb/odds/{format}/PreGameOddsLineMovement/{gameid}/{sportsbookGroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookGroup", value: request.sportsbookGroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo2Schema)) },
        errorFactory: MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError,
      },
      options,
    );
  }

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
        url: this.#servers.default(
          "/v3/mlb/odds/{format}/PreGameOddsLineMovementWithResulting/{gameid}/{sportsbookGroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookGroup", value: request.sportsbookGroup, schema: s.string() },
        ],
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

  mlbV3OddsPreGameOddsByDate(
    request: MlbV3Odds.MlbV3OddsPreGameOddsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsPreGameOddsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/odds/{format}/GameOddsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo2Schema)) },
        errorFactory: MlbV3Odds.MlbV3OddsPreGameOddsByDateError,
      },
      options,
    );
  }

  mlbV3OddsPreGameOddsLineMovement(
    request: MlbV3Odds.MlbV3OddsPreGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsPreGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/odds/{format}/GameOddsLineMovement/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo2Schema)) },
        errorFactory: MlbV3Odds.MlbV3OddsPreGameOddsLineMovementError,
      },
      options,
    );
  }

  mlbV3OddsSportsbooksByActive(
    request: MlbV3Odds.MlbV3OddsSportsbooksByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Sportsbook[], MlbV3Odds.MlbV3OddsSportsbooksByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/odds/{format}/ActiveSportsbooks"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
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
    format?: Format;
    date: string;
  };

  export class MlbV3OddsBettingEventsByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsBettingEventsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingEventsBySeasonRequest = {
    format?: Format;
    season: string;
  };

  export class MlbV3OddsBettingEventsBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsBettingEventsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingFuturesBySeasonRequest = {
    format?: Format;
    season: string;
  };

  export class MlbV3OddsBettingFuturesBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsBettingFuturesBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingFuturesBySeasonSportsbookGroupRequest = {
    format?: Format;
    season: string;
    sportsbookGroup: string;
  };

  export class MlbV3OddsBettingFuturesBySeasonSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsBettingFuturesBySeasonSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingMarketRequest = {
    format?: Format;
    marketId: string;
  };

  export class MlbV3OddsBettingMarketError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<MlbV3OddsBettingMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingMarketSportsbookGroupRequest = {
    format?: Format;
    marketId: string;
    sportsbookGroup: string;
    include?: Include;
  };

  export class MlbV3OddsBettingMarketSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsBettingMarketSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingMarketsByEventRequest = {
    format?: Format;
    eventId: string;
    include?: Include;
  };

  export class MlbV3OddsBettingMarketsByEventError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsBettingMarketsByEventError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingMarketsByEventSportsbookGroupRequest = {
    format?: Format;
    eventId: string;
    sportsbookGroup: string;
    include?: Include;
  };

  export class MlbV3OddsBettingMarketsByEventSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsBettingMarketsByEventSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingMarketsByGameRequest = {
    format?: Format;
    gameId: string;
    include?: Include;
  };

  export class MlbV3OddsBettingMarketsByGameError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsBettingMarketsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingMarketsByGameSportsbookGroupRequest = {
    format?: Format;
    gameId: string;
    sportsbookGroup: string;
    include?: Include;
  };

  export class MlbV3OddsBettingMarketsByGameSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsBettingMarketsByGameSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingMarketsByMarketTypeRequest = {
    format?: Format;
    eventId: string;
    marketTypeId: string;
    include?: Include;
  };

  export class MlbV3OddsBettingMarketsByMarketTypeError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsBettingMarketsByMarketTypeError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest = {
    format?: Format;
    eventId: string;
    marketTypeId: string;
    sportsbookGroup: string;
    include?: Include;
  };

  export class MlbV3OddsBettingMarketsByMarketTypeSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsBettingMarketsByMarketTypeSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingMetadataRequest = {
    format?: Format;
  };

  export class MlbV3OddsBettingMetadataError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<MlbV3OddsBettingMetadataError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingPlayerPropsByGameRequest = {
    format?: Format;
    gameId: string;
    include?: Include;
  };

  export class MlbV3OddsBettingPlayerPropsByGameError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsBettingPlayerPropsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingPlayerPropsByGameSportsbookGroupRequest = {
    format?: Format;
    gameId: string;
    sportsbookGroup: string;
    include?: Include;
  };

  export class MlbV3OddsBettingPlayerPropsByGameSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsBettingPlayerPropsByGameSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingResultsByMarketRequest = {
    format?: Format;
    marketId: string;
  };

  export class MlbV3OddsBettingResultsByMarketError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsBettingResultsByMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingResultsByMarketSportsbookGroupRequest = {
    format?: Format;
    marketId: string;
    sportsbookGroup: string;
  };

  export class MlbV3OddsBettingResultsByMarketSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsBettingResultsByMarketSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingSplitsByGameRequest = {
    format?: Format;
    gameId: string;
  };

  export class MlbV3OddsBettingSplitsByGameError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsBettingSplitsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingSplitsByBettingMarketRequest = {
    format?: Format;
    marketId: string;
  };

  export class MlbV3OddsBettingSplitsByBettingMarketError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsBettingSplitsByBettingMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingTrendsByMatchupRequest = {
    format?: Format;
    team: string;
    opponent: string;
  };

  export class MlbV3OddsBettingTrendsByMatchupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsBettingTrendsByMatchupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsBettingTrendsByTeamRequest = {
    format?: Format;
    team: string;
  };

  export class MlbV3OddsBettingTrendsByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsBettingTrendsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsInGameOddsByDateRequest = {
    format?: Format;
    date: string;
  };

  export class MlbV3OddsInGameOddsByDateError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<MlbV3OddsInGameOddsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsInGameOddsByDateSportsbookGroupRequest = {
    format?: Format;
    date: string;
    sportsbookGroup: string;
  };

  export class MlbV3OddsInGameOddsByDateSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsInGameOddsByDateSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsInGameOddsLineMovementRequest = {
    format?: Format;
    gameid: string;
  };

  export class MlbV3OddsInGameOddsLineMovementError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsInGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsInGameOddsLineMovementSportsbookGroupRequest = {
    format?: Format;
    gameid: string;
    sportsbookGroup: string;
  };

  export class MlbV3OddsInGameOddsLineMovementSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsInGameOddsLineMovementSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest = {
    format?: Format;
    gameid: string;
    sportsbookGroup: string;
  };

  export class MlbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsPeriodGameOddsByDateRequest = {
    format?: Format;
    date: string;
  };

  export class MlbV3OddsPeriodGameOddsByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsPeriodGameOddsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsPeriodGameOddsLineMovementRequest = {
    format?: Format;
    gameid: string;
  };

  export class MlbV3OddsPeriodGameOddsLineMovementError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsPeriodGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupRequest = {
    format?: Format;
    date: string;
    sportsbookGroup: string;
  };

  export class MlbV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest = {
    format?: Format;
    gameid: string;
    sportsbookGroup: string;
  };

  export class MlbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest = {
    format?: Format;
    gameid: string;
    sportsbookGroup: string;
  };

  export class MlbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsPreGameOddsByDateRequest = {
    format?: Format;
    date: string;
  };

  export class MlbV3OddsPreGameOddsByDateError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<MlbV3OddsPreGameOddsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsPreGameOddsLineMovementRequest = {
    format?: Format;
    gameid: string;
  };

  export class MlbV3OddsPreGameOddsLineMovementError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsPreGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3OddsSportsbooksByActiveRequest = {
    format?: Format;
  };

  export class MlbV3OddsSportsbooksByActiveError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3OddsSportsbooksByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
