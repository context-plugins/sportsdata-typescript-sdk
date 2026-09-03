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
import { bettingEventSchema, type BettingEvent } from "../models/betting-event.js";
import { bettingMarketResultSchema, type BettingMarketResult } from "../models/betting-market-result.js";
import { bettingMarketSplitSchema, type BettingMarketSplit } from "../models/betting-market-split.js";
import { bettingMarketSchema, type BettingMarket } from "../models/betting-market.js";
import { Format, formatSchema } from "../models/format.js";
import { gameBettingSplitSchema, type GameBettingSplit } from "../models/game-betting-split.js";
import { gameInfoResultSchema, type GameInfoResult } from "../models/game-info-result.js";
import { gameInfoSchema, type GameInfo } from "../models/game-info.js";
import { Include, includeSchema } from "../models/include.js";
import { matchupTrendsSchema, type MatchupTrends } from "../models/matchup-trends.js";
import { sportsbookSchema, type Sportsbook } from "../models/sportsbook.js";
import { teamTrendsSchema, type TeamTrends } from "../models/team-trends.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class NflV3Odds {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  nflV3OddsBettingEventsByDate(
    request: NflV3Odds.NflV3OddsBettingEventsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent[], NflV3Odds.NflV3OddsBettingEventsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/odds/{format}/BettingEventsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEventSchema)) },
        errorFactory: NflV3Odds.NflV3OddsBettingEventsByDateError,
      },
      options,
    );
  }

  nflV3OddsBettingEventsBySeason(
    request: NflV3Odds.NflV3OddsBettingEventsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent[], NflV3Odds.NflV3OddsBettingEventsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/odds/{format}/BettingEvents/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEventSchema)) },
        errorFactory: NflV3Odds.NflV3OddsBettingEventsBySeasonError,
      },
      options,
    );
  }

  nflV3OddsBettingFuturesBySeason(
    request: NflV3Odds.NflV3OddsBettingFuturesBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent[], NflV3Odds.NflV3OddsBettingFuturesBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/odds/{format}/BettingFuturesBySeason/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEventSchema)) },
        errorFactory: NflV3Odds.NflV3OddsBettingFuturesBySeasonError,
      },
      options,
    );
  }

  nflV3OddsBettingFuturesBySeasonSportsbookGroup(
    request: NflV3Odds.NflV3OddsBettingFuturesBySeasonSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent[], NflV3Odds.NflV3OddsBettingFuturesBySeasonSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/odds/{format}/BettingFuturesBySeason/{season}/{sportsbookgroup}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEventSchema)) },
        errorFactory: NflV3Odds.NflV3OddsBettingFuturesBySeasonSportsbookGroupError,
      },
      options,
    );
  }

  nflV3OddsBettingMarket(
    request: NflV3Odds.NflV3OddsBettingMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket, NflV3Odds.NflV3OddsBettingMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/odds/{format}/BettingMarket/{marketId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "marketId", value: request.marketId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarketSchema },
        errorFactory: NflV3Odds.NflV3OddsBettingMarketError,
      },
      options,
    );
  }

  nflV3OddsBettingMarketSportsbookGroup(
    request: NflV3Odds.NflV3OddsBettingMarketSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket, NflV3Odds.NflV3OddsBettingMarketSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/odds/{format}/BettingMarket/{marketId}/{sportsbookgroup}"),
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
        errorFactory: NflV3Odds.NflV3OddsBettingMarketSportsbookGroupError,
      },
      options,
    );
  }

  nflV3OddsBettingMarketsByEvent(
    request: NflV3Odds.NflV3OddsBettingMarketsByEventRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NflV3Odds.NflV3OddsBettingMarketsByEventError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/odds/{format}/BettingMarkets/{eventId}"),
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
        errorFactory: NflV3Odds.NflV3OddsBettingMarketsByEventError,
      },
      options,
    );
  }

  nflV3OddsBettingMarketsByEventSportsbookGroup(
    request: NflV3Odds.NflV3OddsBettingMarketsByEventSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NflV3Odds.NflV3OddsBettingMarketsByEventSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/odds/{format}/BettingMarketsByEvent/{eventId}/{sportsbookgroup}"),
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
        errorFactory: NflV3Odds.NflV3OddsBettingMarketsByEventSportsbookGroupError,
      },
      options,
    );
  }

  nflV3OddsBettingMarketsByGame(
    request: NflV3Odds.NflV3OddsBettingMarketsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NflV3Odds.NflV3OddsBettingMarketsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/odds/{format}/BettingMarketsByScoreID/{scoreid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "scoreid", value: request.scoreid, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: NflV3Odds.NflV3OddsBettingMarketsByGameError,
      },
      options,
    );
  }

  nflV3OddsBettingMarketsByGameSportsbookGroup(
    request: NflV3Odds.NflV3OddsBettingMarketsByGameSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NflV3Odds.NflV3OddsBettingMarketsByGameSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/odds/{format}/BettingMarketsByGameID/{gameid}/{sportsbookgroup}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: NflV3Odds.NflV3OddsBettingMarketsByGameSportsbookGroupError,
      },
      options,
    );
  }

  nflV3OddsBettingMarketsByMarketType(
    request: NflV3Odds.NflV3OddsBettingMarketsByMarketTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NflV3Odds.NflV3OddsBettingMarketsByMarketTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nfl/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}",
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
        errorFactory: NflV3Odds.NflV3OddsBettingMarketsByMarketTypeError,
      },
      options,
    );
  }

  nflV3OddsBettingMarketsByMarketTypeSportsbookGroup(
    request: NflV3Odds.NflV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NflV3Odds.NflV3OddsBettingMarketsByMarketTypeSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nfl/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}/{sportsbookgroup}",
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
        errorFactory: NflV3Odds.NflV3OddsBettingMarketsByMarketTypeSportsbookGroupError,
      },
      options,
    );
  }

  nflV3OddsBettingMetadata(
    request: NflV3Odds.NflV3OddsBettingMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEntityMetadataCollection, NflV3Odds.NflV3OddsBettingMetadataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/odds/{format}/BettingMetadata"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingEntityMetadataCollectionSchema },
        errorFactory: NflV3Odds.NflV3OddsBettingMetadataError,
      },
      options,
    );
  }

  nflV3OddsBettingPlayerPropsByGame(
    request: NflV3Odds.NflV3OddsBettingPlayerPropsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NflV3Odds.NflV3OddsBettingPlayerPropsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/odds/{format}/BettingPlayerPropsByScoreID/{scoreid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "scoreid", value: request.scoreid, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: NflV3Odds.NflV3OddsBettingPlayerPropsByGameError,
      },
      options,
    );
  }

  nflV3OddsBettingPlayerPropsByGameSportsbookGroup(
    request: NflV3Odds.NflV3OddsBettingPlayerPropsByGameSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], NflV3Odds.NflV3OddsBettingPlayerPropsByGameSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nfl/odds/{format}/BettingPlayerPropsByScoreID/{scoreid}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "scoreid", value: request.scoreid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: NflV3Odds.NflV3OddsBettingPlayerPropsByGameSportsbookGroupError,
      },
      options,
    );
  }

  nflV3OddsBettingResultsByMarket(
    request: NflV3Odds.NflV3OddsBettingResultsByMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarketResult, NflV3Odds.NflV3OddsBettingResultsByMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/odds/{format}/BettingMarketResults/{marketId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "marketId", value: request.marketId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarketResultSchema },
        errorFactory: NflV3Odds.NflV3OddsBettingResultsByMarketError,
      },
      options,
    );
  }

  nflV3OddsBettingResultsByMarketSportsbookGroup(
    request: NflV3Odds.NflV3OddsBettingResultsByMarketSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarketResult, NflV3Odds.NflV3OddsBettingResultsByMarketSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nfl/odds/{format}/BettingResultsByMarket/{marketId}/{sportsbookgroup}",
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
        errorFactory: NflV3Odds.NflV3OddsBettingResultsByMarketSportsbookGroupError,
      },
      options,
    );
  }

  nflV3OddsBettingSplitsByBettingMarket(
    request: NflV3Odds.NflV3OddsBettingSplitsByBettingMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarketSplit, NflV3Odds.NflV3OddsBettingSplitsByBettingMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/odds/{format}/BettingSplitsByMarketId/{marketId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "marketId", value: request.marketId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarketSplitSchema },
        errorFactory: NflV3Odds.NflV3OddsBettingSplitsByBettingMarketError,
      },
      options,
    );
  }

  nflV3OddsBettingSplitsByGame(
    request: NflV3Odds.NflV3OddsBettingSplitsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<GameBettingSplit, NflV3Odds.NflV3OddsBettingSplitsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/odds/{format}/BettingSplitsByScoreId/{scoreId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "scoreId", value: request.scoreId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: gameBettingSplitSchema },
        errorFactory: NflV3Odds.NflV3OddsBettingSplitsByGameError,
      },
      options,
    );
  }

  nflV3OddsBettingTrendsByMatchup(
    request: NflV3Odds.NflV3OddsBettingTrendsByMatchupRequest,
    options?: RequestOptions,
  ): ApiPromise<MatchupTrends, NflV3Odds.NflV3OddsBettingTrendsByMatchupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/odds/{format}/MatchupTrends/{team}/{opponent}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "team", value: request.team, schema: s.string() },
          { name: "opponent", value: request.opponent, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: matchupTrendsSchema },
        errorFactory: NflV3Odds.NflV3OddsBettingTrendsByMatchupError,
      },
      options,
    );
  }

  nflV3OddsBettingTrendsByTeam(
    request: NflV3Odds.NflV3OddsBettingTrendsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamTrends, NflV3Odds.NflV3OddsBettingTrendsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/odds/{format}/TeamTrends/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: teamTrendsSchema },
        errorFactory: NflV3Odds.NflV3OddsBettingTrendsByTeamError,
      },
      options,
    );
  }

  nflV3OddsInGameOddsByWeek(
    request: NflV3Odds.NflV3OddsInGameOddsByWeekRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo[], NflV3Odds.NflV3OddsInGameOddsByWeekError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/odds/{format}/LiveGameOddsByWeek/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoSchema)) },
        errorFactory: NflV3Odds.NflV3OddsInGameOddsByWeekError,
      },
      options,
    );
  }

  nflV3OddsInGameOddsByWeekSportsbookGroup(
    request: NflV3Odds.NflV3OddsInGameOddsByWeekSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo[], NflV3Odds.NflV3OddsInGameOddsByWeekSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nfl/odds/{format}/InGameOddsByWeek/{season}/{week}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoSchema)) },
        errorFactory: NflV3Odds.NflV3OddsInGameOddsByWeekSportsbookGroupError,
      },
      options,
    );
  }

  nflV3OddsInGameOddsLineMovement(
    request: NflV3Odds.NflV3OddsInGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo[], NflV3Odds.NflV3OddsInGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/odds/{format}/LiveGameOddsLineMovement/{scoreid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "scoreid", value: request.scoreid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoSchema)) },
        errorFactory: NflV3Odds.NflV3OddsInGameOddsLineMovementError,
      },
      options,
    );
  }

  nflV3OddsInGameOddsLineMovementSportsbookGroup(
    request: NflV3Odds.NflV3OddsInGameOddsLineMovementSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo[], NflV3Odds.NflV3OddsInGameOddsLineMovementSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/odds/{format}/InGameLineMovement/{scoreid}/{sportsbookgroup}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "scoreid", value: request.scoreid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoSchema)) },
        errorFactory: NflV3Odds.NflV3OddsInGameOddsLineMovementSportsbookGroupError,
      },
      options,
    );
  }

  nflV3OddsInGameOddsLineMovementWithResultingSportsbookGroup(
    request: NflV3Odds.NflV3OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GameInfoResult[],
    NflV3Odds.NflV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nfl/odds/{format}/InGameLineMovementWithResulting/{scoreid}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "scoreid", value: request.scoreid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoResultSchema)) },
        errorFactory: NflV3Odds.NflV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError,
      },
      options,
    );
  }

  nflV3OddsPeriodGameOddsByWeek(
    request: NflV3Odds.NflV3OddsPeriodGameOddsByWeekRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo[], NflV3Odds.NflV3OddsPeriodGameOddsByWeekError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/odds/{format}/AlternateMarketGameOddsByWeek/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoSchema)) },
        errorFactory: NflV3Odds.NflV3OddsPeriodGameOddsByWeekError,
      },
      options,
    );
  }

  nflV3OddsPeriodGameOddsLineMovement(
    request: NflV3Odds.NflV3OddsPeriodGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo[], NflV3Odds.NflV3OddsPeriodGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/odds/{format}/AlternateMarketGameOddsLineMovement/{scoreid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "scoreid", value: request.scoreid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoSchema)) },
        errorFactory: NflV3Odds.NflV3OddsPeriodGameOddsLineMovementError,
      },
      options,
    );
  }

  nflV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroup(
    request: NflV3Odds.NflV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo[], NflV3Odds.NflV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nfl/odds/{format}/PreGameOddsByWeek/{season}/{week}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoSchema)) },
        errorFactory: NflV3Odds.NflV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroupError,
      },
      options,
    );
  }

  nflV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup(
    request: NflV3Odds.NflV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo[], NflV3Odds.NflV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nfl/odds/{format}/PreGameOddsLineMovement/{scoreid}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "scoreid", value: request.scoreid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoSchema)) },
        errorFactory: NflV3Odds.NflV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError,
      },
      options,
    );
  }

  nflV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroup(
    request: NflV3Odds.NflV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GameInfoResult[],
    NflV3Odds.NflV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nfl/odds/{format}/PreGameOddsLineMovementWithResulting/{scoreid}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "scoreid", value: request.scoreid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoResultSchema)) },
        errorFactory:
          NflV3Odds.NflV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError,
      },
      options,
    );
  }

  nflV3OddsPreGameOddsByWeek(
    request: NflV3Odds.NflV3OddsPreGameOddsByWeekRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo[], NflV3Odds.NflV3OddsPreGameOddsByWeekError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/odds/{format}/GameOddsByWeek/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoSchema)) },
        errorFactory: NflV3Odds.NflV3OddsPreGameOddsByWeekError,
      },
      options,
    );
  }

  nflV3OddsPreGameOddsLineMovement(
    request: NflV3Odds.NflV3OddsPreGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo[], NflV3Odds.NflV3OddsPreGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/odds/{format}/GameOddsLineMovement/{scoreid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "scoreid", value: request.scoreid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoSchema)) },
        errorFactory: NflV3Odds.NflV3OddsPreGameOddsLineMovementError,
      },
      options,
    );
  }

  nflV3OddsSportsbooksActive(
    request: NflV3Odds.NflV3OddsSportsbooksActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Sportsbook[], NflV3Odds.NflV3OddsSportsbooksActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/odds/{format}/ActiveSportsbooks"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sportsbookSchema)) },
        errorFactory: NflV3Odds.NflV3OddsSportsbooksActiveError,
      },
      options,
    );
  }
}

export namespace NflV3Odds {
  export type NflV3OddsBettingEventsByDateRequest = {
    format?: Format;
    date: string;
  };

  export class NflV3OddsBettingEventsByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsBettingEventsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsBettingEventsBySeasonRequest = {
    format?: Format;
    season: string;
  };

  export class NflV3OddsBettingEventsBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsBettingEventsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsBettingFuturesBySeasonRequest = {
    format?: Format;
    season: string;
  };

  export class NflV3OddsBettingFuturesBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsBettingFuturesBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsBettingFuturesBySeasonSportsbookGroupRequest = {
    format?: Format;
    season: string;
    sportsbookgroup: string;
  };

  export class NflV3OddsBettingFuturesBySeasonSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsBettingFuturesBySeasonSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsBettingMarketRequest = {
    format?: Format;
    marketId: string;
  };

  export class NflV3OddsBettingMarketError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3OddsBettingMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsBettingMarketSportsbookGroupRequest = {
    format?: Format;
    marketId: string;
    sportsbookgroup: string;
  };

  export class NflV3OddsBettingMarketSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsBettingMarketSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsBettingMarketsByEventRequest = {
    format?: Format;
    eventId: string;
    include?: Include;
  };

  export class NflV3OddsBettingMarketsByEventError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsBettingMarketsByEventError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsBettingMarketsByEventSportsbookGroupRequest = {
    format?: Format;
    eventId: string;
    sportsbookgroup: string;
    include?: Include;
  };

  export class NflV3OddsBettingMarketsByEventSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsBettingMarketsByEventSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsBettingMarketsByGameRequest = {
    format?: Format;
    scoreid: string;
    include?: Include;
  };

  export class NflV3OddsBettingMarketsByGameError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsBettingMarketsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsBettingMarketsByGameSportsbookGroupRequest = {
    format?: Format;
    gameid: string;
    sportsbookgroup: string;
    include?: Include;
  };

  export class NflV3OddsBettingMarketsByGameSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsBettingMarketsByGameSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsBettingMarketsByMarketTypeRequest = {
    format?: Format;
    eventId: string;
    marketTypeId: string;
    include?: Include;
  };

  export class NflV3OddsBettingMarketsByMarketTypeError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsBettingMarketsByMarketTypeError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest = {
    format?: Format;
    eventId: string;
    marketTypeId: string;
    sportsbookgroup: string;
    include?: Include;
  };

  export class NflV3OddsBettingMarketsByMarketTypeSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsBettingMarketsByMarketTypeSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsBettingMetadataRequest = {
    format?: Format;
  };

  export class NflV3OddsBettingMetadataError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3OddsBettingMetadataError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsBettingPlayerPropsByGameRequest = {
    format?: Format;
    scoreid: string;
    include?: Include;
  };

  export class NflV3OddsBettingPlayerPropsByGameError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsBettingPlayerPropsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsBettingPlayerPropsByGameSportsbookGroupRequest = {
    format?: Format;
    scoreid: string;
    sportsbookgroup: string;
    include?: Include;
  };

  export class NflV3OddsBettingPlayerPropsByGameSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsBettingPlayerPropsByGameSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsBettingResultsByMarketRequest = {
    format?: Format;
    marketId: string;
  };

  export class NflV3OddsBettingResultsByMarketError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsBettingResultsByMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsBettingResultsByMarketSportsbookGroupRequest = {
    format?: Format;
    marketId: string;
    sportsbookgroup: string;
  };

  export class NflV3OddsBettingResultsByMarketSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsBettingResultsByMarketSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsBettingSplitsByBettingMarketRequest = {
    format?: Format;
    marketId: string;
  };

  export class NflV3OddsBettingSplitsByBettingMarketError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsBettingSplitsByBettingMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsBettingSplitsByGameRequest = {
    format?: Format;
    scoreId: string;
  };

  export class NflV3OddsBettingSplitsByGameError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsBettingSplitsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsBettingTrendsByMatchupRequest = {
    format?: Format;
    team: string;
    opponent: string;
  };

  export class NflV3OddsBettingTrendsByMatchupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsBettingTrendsByMatchupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsBettingTrendsByTeamRequest = {
    format?: Format;
    team: string;
  };

  export class NflV3OddsBettingTrendsByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsBettingTrendsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsInGameOddsByWeekRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class NflV3OddsInGameOddsByWeekError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3OddsInGameOddsByWeekError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsInGameOddsByWeekSportsbookGroupRequest = {
    format?: Format;
    season: string;
    week: string;
    sportsbookgroup: string;
  };

  export class NflV3OddsInGameOddsByWeekSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsInGameOddsByWeekSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsInGameOddsLineMovementRequest = {
    format?: Format;
    scoreid: string;
  };

  export class NflV3OddsInGameOddsLineMovementError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsInGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsInGameOddsLineMovementSportsbookGroupRequest = {
    format?: Format;
    scoreid: string;
    sportsbookgroup: string;
  };

  export class NflV3OddsInGameOddsLineMovementSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsInGameOddsLineMovementSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest = {
    format?: Format;
    scoreid: string;
    sportsbookgroup: string;
  };

  export class NflV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsPeriodGameOddsByWeekRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class NflV3OddsPeriodGameOddsByWeekError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsPeriodGameOddsByWeekError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsPeriodGameOddsLineMovementRequest = {
    format?: Format;
    scoreid: string;
  };

  export class NflV3OddsPeriodGameOddsLineMovementError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsPeriodGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroupRequest = {
    format?: Format;
    season: string;
    week: string;
    sportsbookgroup: string;
  };

  export class NflV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest = {
    format?: Format;
    scoreid: string;
    sportsbookgroup: string;
  };

  export class NflV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest = {
    format?: Format;
    scoreid: string;
    sportsbookgroup: string;
  };

  export class NflV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsPreGameOddsByWeekRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class NflV3OddsPreGameOddsByWeekError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3OddsPreGameOddsByWeekError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsPreGameOddsLineMovementRequest = {
    format?: Format;
    scoreid: string;
  };

  export class NflV3OddsPreGameOddsLineMovementError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3OddsPreGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3OddsSportsbooksActiveRequest = {
    format?: Format;
  };

  export class NflV3OddsSportsbooksActiveError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3OddsSportsbooksActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
