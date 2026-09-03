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

  cfbV3OddsBettingEventsByDate(
    request: CfbV3Odds.CfbV3OddsBettingEventsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent2[], CfbV3Odds.CfbV3OddsBettingEventsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/odds/{format}/BettingEventsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent2Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsBettingEventsByDateError,
      },
      options,
    );
  }

  cfbV3OddsBettingEventsBySeason(
    request: CfbV3Odds.CfbV3OddsBettingEventsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent2[], CfbV3Odds.CfbV3OddsBettingEventsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/odds/{format}/BettingEvents/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent2Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsBettingEventsBySeasonError,
      },
      options,
    );
  }

  cfbV3OddsBettingFuturesBySeason(
    request: CfbV3Odds.CfbV3OddsBettingFuturesBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent2[], CfbV3Odds.CfbV3OddsBettingFuturesBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/odds/{format}/BettingFuturesBySeason/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent2Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsBettingFuturesBySeasonError,
      },
      options,
    );
  }

  cfbV3OddsBettingFuturesBySeasonSportsbookGroup(
    request: CfbV3Odds.CfbV3OddsBettingFuturesBySeasonSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent2[], CfbV3Odds.CfbV3OddsBettingFuturesBySeasonSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/odds/{format}/BettingFuturesBySeason/{season}/{sportsbookgroup}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent2Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsBettingFuturesBySeasonSportsbookGroupError,
      },
      options,
    );
  }

  cfbV3OddsBettingMarket(
    request: CfbV3Odds.CfbV3OddsBettingMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket, CfbV3Odds.CfbV3OddsBettingMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/odds/{format}/BettingMarket/{marketId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "marketId", value: request.marketId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarketSchema },
        errorFactory: CfbV3Odds.CfbV3OddsBettingMarketError,
      },
      options,
    );
  }

  cfbV3OddsBettingMarketSportsbookGroup(
    request: CfbV3Odds.CfbV3OddsBettingMarketSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket, CfbV3Odds.CfbV3OddsBettingMarketSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/odds/{format}/BettingMarket/{marketId}/{sportsbookgroup}"),
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
        errorFactory: CfbV3Odds.CfbV3OddsBettingMarketSportsbookGroupError,
      },
      options,
    );
  }

  cfbV3OddsBettingMarketsByEvent(
    request: CfbV3Odds.CfbV3OddsBettingMarketsByEventRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], CfbV3Odds.CfbV3OddsBettingMarketsByEventError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/odds/{format}/BettingMarkets/{eventId}"),
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
        errorFactory: CfbV3Odds.CfbV3OddsBettingMarketsByEventError,
      },
      options,
    );
  }

  cfbV3OddsBettingMarketsByEventSportsbookGroup(
    request: CfbV3Odds.CfbV3OddsBettingMarketsByEventSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], CfbV3Odds.CfbV3OddsBettingMarketsByEventSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/odds/{format}/BettingMarketsByEvent/{eventId}/{sportsbookgroup}"),
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
        errorFactory: CfbV3Odds.CfbV3OddsBettingMarketsByEventSportsbookGroupError,
      },
      options,
    );
  }

  cfbV3OddsBettingMarketsByGame(
    request: CfbV3Odds.CfbV3OddsBettingMarketsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], CfbV3Odds.CfbV3OddsBettingMarketsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/odds/{format}/BettingMarketsByGameID/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: CfbV3Odds.CfbV3OddsBettingMarketsByGameError,
      },
      options,
    );
  }

  cfbV3OddsBettingMarketsByGameSportsbookGroup(
    request: CfbV3Odds.CfbV3OddsBettingMarketsByGameSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], CfbV3Odds.CfbV3OddsBettingMarketsByGameSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/odds/{format}/BettingMarketsByGameID/{gameid}/{sportsbookgroup}"),
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
        errorFactory: CfbV3Odds.CfbV3OddsBettingMarketsByGameSportsbookGroupError,
      },
      options,
    );
  }

  cfbV3OddsBettingMarketsByMarketType(
    request: CfbV3Odds.CfbV3OddsBettingMarketsByMarketTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], CfbV3Odds.CfbV3OddsBettingMarketsByMarketTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: CfbV3Odds.CfbV3OddsBettingMarketsByMarketTypeError,
      },
      options,
    );
  }

  cfbV3OddsBettingMarketsByMarketTypeSportsbookGroup(
    request: CfbV3Odds.CfbV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], CfbV3Odds.CfbV3OddsBettingMarketsByMarketTypeSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: CfbV3Odds.CfbV3OddsBettingMarketsByMarketTypeSportsbookGroupError,
      },
      options,
    );
  }

  cfbV3OddsBettingMetadata(
    request: CfbV3Odds.CfbV3OddsBettingMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEntityMetadataCollection, CfbV3Odds.CfbV3OddsBettingMetadataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/odds/{format}/BettingMetadata"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingEntityMetadataCollectionSchema },
        errorFactory: CfbV3Odds.CfbV3OddsBettingMetadataError,
      },
      options,
    );
  }

  cfbV3OddsBettingPlayerPropsByGame(
    request: CfbV3Odds.CfbV3OddsBettingPlayerPropsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], CfbV3Odds.CfbV3OddsBettingPlayerPropsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/odds/{format}/BettingPlayerPropsByGameID/{gameId}"),
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
        errorFactory: CfbV3Odds.CfbV3OddsBettingPlayerPropsByGameError,
      },
      options,
    );
  }

  cfbV3OddsBettingPlayerPropsByGameSportsbookGroup(
    request: CfbV3Odds.CfbV3OddsBettingPlayerPropsByGameSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], CfbV3Odds.CfbV3OddsBettingPlayerPropsByGameSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: CfbV3Odds.CfbV3OddsBettingPlayerPropsByGameSportsbookGroupError,
      },
      options,
    );
  }

  cfbV3OddsBettingResultsByMarket(
    request: CfbV3Odds.CfbV3OddsBettingResultsByMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarketResult, CfbV3Odds.CfbV3OddsBettingResultsByMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/odds/{format}/BettingMarketResults/{marketId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "marketId", value: request.marketId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarketResultSchema },
        errorFactory: CfbV3Odds.CfbV3OddsBettingResultsByMarketError,
      },
      options,
    );
  }

  cfbV3OddsBettingResultsByMarketSportsbookGroup(
    request: CfbV3Odds.CfbV3OddsBettingResultsByMarketSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarketResult, CfbV3Odds.CfbV3OddsBettingResultsByMarketSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/cfb/odds/{format}/BettingResultsByMarket/{marketId}/{sportsbookgroup}",
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
        errorFactory: CfbV3Odds.CfbV3OddsBettingResultsByMarketSportsbookGroupError,
      },
      options,
    );
  }

  cfbV3OddsBettingSplitsByBettingMarket(
    request: CfbV3Odds.CfbV3OddsBettingSplitsByBettingMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarketSplit, CfbV3Odds.CfbV3OddsBettingSplitsByBettingMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/odds/{format}/BettingSplitsByMarketId/{marketId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "marketId", value: request.marketId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarketSplitSchema },
        errorFactory: CfbV3Odds.CfbV3OddsBettingSplitsByBettingMarketError,
      },
      options,
    );
  }

  cfbV3OddsBettingSplitsByGame(
    request: CfbV3Odds.CfbV3OddsBettingSplitsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<GameBettingSplit2, CfbV3Odds.CfbV3OddsBettingSplitsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/odds/{format}/BettingSplitsByGameId/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: gameBettingSplit2Schema },
        errorFactory: CfbV3Odds.CfbV3OddsBettingSplitsByGameError,
      },
      options,
    );
  }

  cfbV3OddsBettingTrendsByMatchup(
    request: CfbV3Odds.CfbV3OddsBettingTrendsByMatchupRequest,
    options?: RequestOptions,
  ): ApiPromise<MatchupTrends4, CfbV3Odds.CfbV3OddsBettingTrendsByMatchupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/odds/{format}/MatchupTrends/{team}/{opponent}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "team", value: request.team, schema: s.string() },
          { name: "opponent", value: request.opponent, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: matchupTrends4Schema },
        errorFactory: CfbV3Odds.CfbV3OddsBettingTrendsByMatchupError,
      },
      options,
    );
  }

  cfbV3OddsBettingTrendsByTeam(
    request: CfbV3Odds.CfbV3OddsBettingTrendsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamTrends2, CfbV3Odds.CfbV3OddsBettingTrendsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/odds/{format}/TeamTrends/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: teamTrends2Schema },
        errorFactory: CfbV3Odds.CfbV3OddsBettingTrendsByTeamError,
      },
      options,
    );
  }

  cfbV3OddsInGameOddsByWeek(
    request: CfbV3Odds.CfbV3OddsInGameOddsByWeekRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo4[], CfbV3Odds.CfbV3OddsInGameOddsByWeekError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/odds/{format}/LiveGameOddsByWeek/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo4Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsInGameOddsByWeekError,
      },
      options,
    );
  }

  cfbV3OddsInGameOddsByWeekSportsbookGroup(
    request: CfbV3Odds.CfbV3OddsInGameOddsByWeekSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo4[], CfbV3Odds.CfbV3OddsInGameOddsByWeekSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/cfb/odds/{format}/InGameOddsByWeek/{season}/{week}/{sportsbookgroup}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo4Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsInGameOddsByWeekSportsbookGroupError,
      },
      options,
    );
  }

  cfbV3OddsInGameOddsLineMovement(
    request: CfbV3Odds.CfbV3OddsInGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo4[], CfbV3Odds.CfbV3OddsInGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/odds/{format}/LiveGameOddsLineMovement/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo4Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsInGameOddsLineMovementError,
      },
      options,
    );
  }

  cfbV3OddsInGameOddsLineMovementSportsbookGroup(
    request: CfbV3Odds.CfbV3OddsInGameOddsLineMovementSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo4[], CfbV3Odds.CfbV3OddsInGameOddsLineMovementSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/odds/{format}/InGameLineMovement/{gameid}/{sportsbookgroup}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo4Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsInGameOddsLineMovementSportsbookGroupError,
      },
      options,
    );
  }

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
        url: this.#servers.default(
          "/v3/cfb/odds/{format}/InGameLineMovementWithResulting/{gameid}/{sportsbookgroup}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoResult4Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError,
      },
      options,
    );
  }

  cfbV3OddsPeriodGameOddsByWeek(
    request: CfbV3Odds.CfbV3OddsPeriodGameOddsByWeekRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo4[], CfbV3Odds.CfbV3OddsPeriodGameOddsByWeekError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/odds/{format}/AlternateMarketGameOddsByWeek/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo4Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsPeriodGameOddsByWeekError,
      },
      options,
    );
  }

  cfbV3OddsPeriodGameOddsLineMovement(
    request: CfbV3Odds.CfbV3OddsPeriodGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo4[], CfbV3Odds.CfbV3OddsPeriodGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/odds/{format}/AlternateMarketGameOddsLineMovement/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo4Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsPeriodGameOddsLineMovementError,
      },
      options,
    );
  }

  cfbV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroup(
    request: CfbV3Odds.CfbV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo4[], CfbV3Odds.CfbV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/cfb/odds/{format}/PreGameOddsByWeek/{season}/{week}/{sportsbookgroup}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo4Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroupError,
      },
      options,
    );
  }

  cfbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup(
    request: CfbV3Odds.CfbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo4[], CfbV3Odds.CfbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/cfb/odds/{format}/PreGameOddsLineMovement/{gameid}/{sportsbookgroup}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo4Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError,
      },
      options,
    );
  }

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
        url: this.#servers.default(
          "/v3/cfb/odds/{format}/PreGameOddsLineMovementWithResulting/{gameid}/{sportsbookgroup}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoResult4Schema)) },
        errorFactory:
          CfbV3Odds.CfbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError,
      },
      options,
    );
  }

  cfbV3OddsPreGameOddsByWeek(
    request: CfbV3Odds.CfbV3OddsPreGameOddsByWeekRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo4[], CfbV3Odds.CfbV3OddsPreGameOddsByWeekError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/odds/{format}/GameOddsByWeek/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo4Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsPreGameOddsByWeekError,
      },
      options,
    );
  }

  cfbV3OddsPreGameOddsLineMovement(
    request: CfbV3Odds.CfbV3OddsPreGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo4[], CfbV3Odds.CfbV3OddsPreGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/odds/{format}/GameOddsLineMovement/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo4Schema)) },
        errorFactory: CfbV3Odds.CfbV3OddsPreGameOddsLineMovementError,
      },
      options,
    );
  }

  cfbV3OddsSportsbooksByActive(
    request: CfbV3Odds.CfbV3OddsSportsbooksByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Sportsbook[], CfbV3Odds.CfbV3OddsSportsbooksByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cfb/odds/{format}/ActiveSportsbooks"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
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
    format?: Format;
    date: string;
  };

  export class CfbV3OddsBettingEventsByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsBettingEventsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingEventsBySeasonRequest = {
    format?: Format;
    season: string;
  };

  export class CfbV3OddsBettingEventsBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsBettingEventsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingFuturesBySeasonRequest = {
    format?: Format;
    season: string;
  };

  export class CfbV3OddsBettingFuturesBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsBettingFuturesBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingFuturesBySeasonSportsbookGroupRequest = {
    format?: Format;
    season: string;
    sportsbookgroup: string;
  };

  export class CfbV3OddsBettingFuturesBySeasonSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsBettingFuturesBySeasonSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingMarketRequest = {
    format?: Format;
    marketId: string;
  };

  export class CfbV3OddsBettingMarketError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<CfbV3OddsBettingMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingMarketSportsbookGroupRequest = {
    format?: Format;
    marketId: string;
    sportsbookgroup: string;
  };

  export class CfbV3OddsBettingMarketSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsBettingMarketSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingMarketsByEventRequest = {
    format?: Format;
    eventId: string;
    include?: Include;
  };

  export class CfbV3OddsBettingMarketsByEventError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsBettingMarketsByEventError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingMarketsByEventSportsbookGroupRequest = {
    format?: Format;
    eventId: string;
    sportsbookgroup: string;
    include?: Include;
  };

  export class CfbV3OddsBettingMarketsByEventSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsBettingMarketsByEventSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingMarketsByGameRequest = {
    format?: Format;
    gameid: string;
    include?: Include;
  };

  export class CfbV3OddsBettingMarketsByGameError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsBettingMarketsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingMarketsByGameSportsbookGroupRequest = {
    format?: Format;
    gameid: string;
    sportsbookgroup: string;
    include?: Include;
  };

  export class CfbV3OddsBettingMarketsByGameSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsBettingMarketsByGameSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingMarketsByMarketTypeRequest = {
    format?: Format;
    eventId: string;
    marketTypeId: string;
    include?: Include;
  };

  export class CfbV3OddsBettingMarketsByMarketTypeError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsBettingMarketsByMarketTypeError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest = {
    format?: Format;
    eventId: string;
    marketTypeId: string;
    sportsbookgroup: string;
    include?: Include;
  };

  export class CfbV3OddsBettingMarketsByMarketTypeSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsBettingMarketsByMarketTypeSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingMetadataRequest = {
    format?: Format;
  };

  export class CfbV3OddsBettingMetadataError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<CfbV3OddsBettingMetadataError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingPlayerPropsByGameRequest = {
    format?: Format;
    gameId: string;
    include?: Include;
  };

  export class CfbV3OddsBettingPlayerPropsByGameError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsBettingPlayerPropsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingPlayerPropsByGameSportsbookGroupRequest = {
    format?: Format;
    gameId: string;
    sportsbookgroup: string;
    include?: Include;
  };

  export class CfbV3OddsBettingPlayerPropsByGameSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsBettingPlayerPropsByGameSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingResultsByMarketRequest = {
    format?: Format;
    marketId: string;
  };

  export class CfbV3OddsBettingResultsByMarketError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsBettingResultsByMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingResultsByMarketSportsbookGroupRequest = {
    format?: Format;
    marketId: string;
    sportsbookgroup: string;
  };

  export class CfbV3OddsBettingResultsByMarketSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsBettingResultsByMarketSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingSplitsByBettingMarketRequest = {
    format?: Format;
    marketId: string;
  };

  export class CfbV3OddsBettingSplitsByBettingMarketError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsBettingSplitsByBettingMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingSplitsByGameRequest = {
    format?: Format;
    gameid: string;
  };

  export class CfbV3OddsBettingSplitsByGameError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsBettingSplitsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingTrendsByMatchupRequest = {
    format?: Format;
    team: string;
    opponent: string;
  };

  export class CfbV3OddsBettingTrendsByMatchupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsBettingTrendsByMatchupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsBettingTrendsByTeamRequest = {
    format?: Format;
    team: string;
  };

  export class CfbV3OddsBettingTrendsByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsBettingTrendsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsInGameOddsByWeekRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class CfbV3OddsInGameOddsByWeekError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<CfbV3OddsInGameOddsByWeekError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsInGameOddsByWeekSportsbookGroupRequest = {
    format?: Format;
    season: string;
    week: string;
    sportsbookgroup: string;
  };

  export class CfbV3OddsInGameOddsByWeekSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsInGameOddsByWeekSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsInGameOddsLineMovementRequest = {
    format?: Format;
    gameid: string;
  };

  export class CfbV3OddsInGameOddsLineMovementError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsInGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsInGameOddsLineMovementSportsbookGroupRequest = {
    format?: Format;
    gameid: string;
    sportsbookgroup: string;
  };

  export class CfbV3OddsInGameOddsLineMovementSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsInGameOddsLineMovementSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest = {
    format?: Format;
    gameid: string;
    sportsbookgroup: string;
  };

  export class CfbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsPeriodGameOddsByWeekRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class CfbV3OddsPeriodGameOddsByWeekError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsPeriodGameOddsByWeekError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsPeriodGameOddsLineMovementRequest = {
    format?: Format;
    gameid: string;
  };

  export class CfbV3OddsPeriodGameOddsLineMovementError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsPeriodGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroupRequest = {
    format?: Format;
    season: string;
    week: string;
    sportsbookgroup: string;
  };

  export class CfbV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest = {
    format?: Format;
    gameid: string;
    sportsbookgroup: string;
  };

  export class CfbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest = {
    format?: Format;
    gameid: string;
    sportsbookgroup: string;
  };

  export class CfbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsPreGameOddsByWeekRequest = {
    format?: Format;
    season: string;
    week: string;
  };

  export class CfbV3OddsPreGameOddsByWeekError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<CfbV3OddsPreGameOddsByWeekError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsPreGameOddsLineMovementRequest = {
    format?: Format;
    gameid: string;
  };

  export class CfbV3OddsPreGameOddsLineMovementError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsPreGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3OddsSportsbooksByActiveRequest = {
    format?: Format;
  };

  export class CfbV3OddsSportsbooksByActiveError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CfbV3OddsSportsbooksByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
