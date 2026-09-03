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

  wnbaV3ScoresAreGamesInProgress(
    request: WnbaV3Scores.WnbaV3ScoresAreGamesInProgressRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean, WnbaV3Scores.WnbaV3ScoresAreGamesInProgressError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/AreAnyGamesInProgress"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.boolean() },
        errorFactory: WnbaV3Scores.WnbaV3ScoresAreGamesInProgressError,
      },
      options,
    );
  }

  wnbaV3ScoresBettingEventsByDate(
    request: WnbaV3Scores.WnbaV3ScoresBettingEventsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], WnbaV3Scores.WnbaV3ScoresBettingEventsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/BettingEventsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent1Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingEventsByDateError,
      },
      options,
    );
  }

  wnbaV3ScoresBettingEventsBySeason(
    request: WnbaV3Scores.WnbaV3ScoresBettingEventsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], WnbaV3Scores.WnbaV3ScoresBettingEventsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/BettingEvents/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent1Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingEventsBySeasonError,
      },
      options,
    );
  }

  wnbaV3ScoresBettingFuturesBySeason(
    request: WnbaV3Scores.WnbaV3ScoresBettingFuturesBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], WnbaV3Scores.WnbaV3ScoresBettingFuturesBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/BettingFuturesBySeason/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent1Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingFuturesBySeasonError,
      },
      options,
    );
  }

  wnbaV3ScoresBettingFuturesBySeasonSportsbookGroup(
    request: WnbaV3Scores.WnbaV3ScoresBettingFuturesBySeasonSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent1[], WnbaV3Scores.WnbaV3ScoresBettingFuturesBySeasonSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/wnba/scores/{format}/BettingFuturesBySeason/{season}/{sportsbookgroup}",
        ),
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
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingFuturesBySeasonSportsbookGroupError,
      },
      options,
    );
  }

  wnbaV3ScoresBettingMarket(
    request: WnbaV3Scores.WnbaV3ScoresBettingMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket, WnbaV3Scores.WnbaV3ScoresBettingMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/BettingMarket/{marketId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "marketId", value: request.marketId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarketSchema },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingMarketError,
      },
      options,
    );
  }

  wnbaV3ScoresBettingMarketSportsbookGroup(
    request: WnbaV3Scores.WnbaV3ScoresBettingMarketSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket, WnbaV3Scores.WnbaV3ScoresBettingMarketSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/BettingMarket/{marketId}/{sportsbookgroup}"),
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
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingMarketSportsbookGroupError,
      },
      options,
    );
  }

  wnbaV3ScoresBettingMarketsByEvent(
    request: WnbaV3Scores.WnbaV3ScoresBettingMarketsByEventRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], WnbaV3Scores.WnbaV3ScoresBettingMarketsByEventError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/BettingMarkets/{eventId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "eventId", value: request.eventId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingMarketsByEventError,
      },
      options,
    );
  }

  wnbaV3ScoresBettingMarketsByEventSportsbookGroup(
    request: WnbaV3Scores.WnbaV3ScoresBettingMarketsByEventSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], WnbaV3Scores.WnbaV3ScoresBettingMarketsByEventSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/wnba/scores/{format}/BettingMarketsByEvent/{eventId}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "eventId", value: request.eventId, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingMarketsByEventSportsbookGroupError,
      },
      options,
    );
  }

  wnbaV3ScoresBettingMarketsByGame(
    request: WnbaV3Scores.WnbaV3ScoresBettingMarketsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], WnbaV3Scores.WnbaV3ScoresBettingMarketsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/BettingMarketsByGameID/{gameID}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameID", value: request.gameId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingMarketsByGameError,
      },
      options,
    );
  }

  wnbaV3ScoresBettingMarketsByGameSportsbookGroup(
    request: WnbaV3Scores.WnbaV3ScoresBettingMarketsByGameSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], WnbaV3Scores.WnbaV3ScoresBettingMarketsByGameSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/wnba/scores/{format}/BettingMarketsByGameID/{gameID}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameID", value: request.gameId, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingMarketsByGameSportsbookGroupError,
      },
      options,
    );
  }

  wnbaV3ScoresBettingMarketsByMarketType(
    request: WnbaV3Scores.WnbaV3ScoresBettingMarketsByMarketTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], WnbaV3Scores.WnbaV3ScoresBettingMarketsByMarketTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/wnba/scores/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "eventId", value: request.eventId, schema: s.string() },
          { name: "marketTypeID", value: request.marketTypeId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingMarketsByMarketTypeError,
      },
      options,
    );
  }

  wnbaV3ScoresBettingMarketsByMarketTypeSportsbookGroup(
    request: WnbaV3Scores.WnbaV3ScoresBettingMarketsByMarketTypeSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], WnbaV3Scores.WnbaV3ScoresBettingMarketsByMarketTypeSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/wnba/scores/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "eventId", value: request.eventId, schema: s.string() },
          { name: "marketTypeID", value: request.marketTypeId, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingMarketsByMarketTypeSportsbookGroupError,
      },
      options,
    );
  }

  wnbaV3ScoresBettingMetadata(
    request: WnbaV3Scores.WnbaV3ScoresBettingMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEntityMetadataCollection, WnbaV3Scores.WnbaV3ScoresBettingMetadataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/BettingMetadata"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingEntityMetadataCollectionSchema },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingMetadataError,
      },
      options,
    );
  }

  wnbaV3ScoresBettingPlayerPropsByGame(
    request: WnbaV3Scores.WnbaV3ScoresBettingPlayerPropsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], WnbaV3Scores.WnbaV3ScoresBettingPlayerPropsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/BettingPlayerPropsByGameID/{gameId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameId", value: request.gameId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingPlayerPropsByGameError,
      },
      options,
    );
  }

  wnbaV3ScoresBettingPlayerPropsByGameSportsbookGroup(
    request: WnbaV3Scores.WnbaV3ScoresBettingPlayerPropsByGameSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket[], WnbaV3Scores.WnbaV3ScoresBettingPlayerPropsByGameSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/wnba/scores/{format}/BettingPlayerPropsByGameID/{gameId}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameId", value: request.gameId, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarketSchema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBettingPlayerPropsByGameSportsbookGroupError,
      },
      options,
    );
  }

  wnbaV3ScoresBoxScoreFinal(
    request: WnbaV3Scores.WnbaV3ScoresBoxScoreFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore5, WnbaV3Scores.WnbaV3ScoresBoxScoreFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/BoxScoreFinal/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: boxScore5Schema },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBoxScoreFinalError,
      },
      options,
    );
  }

  wnbaV3ScoresBoxScoreLiveFinal(
    request: WnbaV3Scores.WnbaV3ScoresBoxScoreLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore5, WnbaV3Scores.WnbaV3ScoresBoxScoreLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/BoxScore/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: boxScore5Schema },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBoxScoreLiveFinalError,
      },
      options,
    );
  }

  wnbaV3ScoresBoxScoresByDateFinal(
    request: WnbaV3Scores.WnbaV3ScoresBoxScoresByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore5[], WnbaV3Scores.WnbaV3ScoresBoxScoresByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/BoxScoresFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore5Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBoxScoresByDateFinalError,
      },
      options,
    );
  }

  wnbaV3ScoresBoxScoresByDateLiveFinal(
    request: WnbaV3Scores.WnbaV3ScoresBoxScoresByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore5[], WnbaV3Scores.WnbaV3ScoresBoxScoresByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/BoxScores/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore5Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresBoxScoresByDateLiveFinalError,
      },
      options,
    );
  }

  wnbaV3ScoresGamesByDateFinal(
    request: WnbaV3Scores.WnbaV3ScoresGamesByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game10[], WnbaV3Scores.WnbaV3ScoresGamesByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/GamesByDateFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game10Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresGamesByDateFinalError,
      },
      options,
    );
  }

  wnbaV3ScoresGamesByDateLiveFinal(
    request: WnbaV3Scores.WnbaV3ScoresGamesByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game10[], WnbaV3Scores.WnbaV3ScoresGamesByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/GamesByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game10Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresGamesByDateLiveFinalError,
      },
      options,
    );
  }

  wnbaV3ScoresGamesBasicByDateFinal(
    request: WnbaV3Scores.WnbaV3ScoresGamesBasicByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic6[], WnbaV3Scores.WnbaV3ScoresGamesBasicByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/ScoresBasicFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasic6Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresGamesBasicByDateFinalError,
      },
      options,
    );
  }

  wnbaV3ScoresGamesBasicByDateLiveFinal(
    request: WnbaV3Scores.WnbaV3ScoresGamesBasicByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic6[], WnbaV3Scores.WnbaV3ScoresGamesBasicByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/ScoresBasic/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasic6Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresGamesBasicByDateLiveFinalError,
      },
      options,
    );
  }

  wnbaV3ScoresPlayerDetailsByActive(
    request: WnbaV3Scores.WnbaV3ScoresPlayerDetailsByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Player6[], WnbaV3Scores.WnbaV3ScoresPlayerDetailsByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/Players"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player6Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresPlayerDetailsByActiveError,
      },
      options,
    );
  }

  wnbaV3ScoresPlayerDetailsByTeam(
    request: WnbaV3Scores.WnbaV3ScoresPlayerDetailsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<Player6[], WnbaV3Scores.WnbaV3ScoresPlayerDetailsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/Players/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player6Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresPlayerDetailsByTeamError,
      },
      options,
    );
  }

  wnbaV3ScoresPlayerSeasonStats(
    request: WnbaV3Scores.WnbaV3ScoresPlayerSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason7[], WnbaV3Scores.WnbaV3ScoresPlayerSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/PlayerSeasonStats/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason7Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresPlayerSeasonStatsError,
      },
      options,
    );
  }

  wnbaV3ScoresPlayerSeasonStatsByTeam(
    request: WnbaV3Scores.WnbaV3ScoresPlayerSeasonStatsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason7[], WnbaV3Scores.WnbaV3ScoresPlayerSeasonStatsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/PlayerSeasonStatsByTeam/{season}/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason7Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresPlayerSeasonStatsByTeamError,
      },
      options,
    );
  }

  wnbaV3ScoresPreGameOddsByDate(
    request: WnbaV3Scores.WnbaV3ScoresPreGameOddsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo6[], WnbaV3Scores.WnbaV3ScoresPreGameOddsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/GameOddsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo6Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresPreGameOddsByDateError,
      },
      options,
    );
  }

  wnbaV3ScoresPreGameOddsLineMovement(
    request: WnbaV3Scores.WnbaV3ScoresPreGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo6[], WnbaV3Scores.WnbaV3ScoresPreGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/GameOddsLineMovement/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo6Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresPreGameOddsLineMovementError,
      },
      options,
    );
  }

  wnbaV3ScoresSchedules(
    request: WnbaV3Scores.WnbaV3ScoresSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<Game10[], WnbaV3Scores.WnbaV3ScoresSchedulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/Games/{Season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "Season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game10Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresSchedulesError,
      },
      options,
    );
  }

  wnbaV3ScoresSchedulesBasic(
    request: WnbaV3Scores.WnbaV3ScoresSchedulesBasicRequest,
    options?: RequestOptions,
  ): ApiPromise<SchedulesBasic[], WnbaV3Scores.WnbaV3ScoresSchedulesBasicError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/SchedulesBasic/{Season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "Season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => schedulesBasicSchema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresSchedulesBasicError,
      },
      options,
    );
  }

  wnbaV3ScoresSeasonCurrent(
    request: WnbaV3Scores.WnbaV3ScoresSeasonCurrentRequest,
    options?: RequestOptions,
  ): ApiPromise<Season4, WnbaV3Scores.WnbaV3ScoresSeasonCurrentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/CurrentSeason"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: season4Schema },
        errorFactory: WnbaV3Scores.WnbaV3ScoresSeasonCurrentError,
      },
      options,
    );
  }

  wnbaV3ScoresSportsbooksByActive(
    request: WnbaV3Scores.WnbaV3ScoresSportsbooksByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Sportsbook[], WnbaV3Scores.WnbaV3ScoresSportsbooksByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/ActiveSportsbooks"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sportsbookSchema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresSportsbooksByActiveError,
      },
      options,
    );
  }

  wnbaV3ScoresStadiums(
    request: WnbaV3Scores.WnbaV3ScoresStadiumsRequest,
    options?: RequestOptions,
  ): ApiPromise<Stadium6[], WnbaV3Scores.WnbaV3ScoresStadiumsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/Stadiums"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => stadium6Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresStadiumsError,
      },
      options,
    );
  }

  wnbaV3ScoresStandings(
    request: WnbaV3Scores.WnbaV3ScoresStandingsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, WnbaV3Scores.WnbaV3ScoresStandingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/Standings/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: WnbaV3Scores.WnbaV3ScoresStandingsError,
      },
      options,
    );
  }

  wnbaV3ScoresTeamGameStatsByDateFinal(
    request: WnbaV3Scores.WnbaV3ScoresTeamGameStatsByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame6[], WnbaV3Scores.WnbaV3ScoresTeamGameStatsByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/TeamGameStatsByDateFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame6Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresTeamGameStatsByDateFinalError,
      },
      options,
    );
  }

  wnbaV3ScoresTeamGameStatsByDateLiveFinal(
    request: WnbaV3Scores.WnbaV3ScoresTeamGameStatsByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame6[], WnbaV3Scores.WnbaV3ScoresTeamGameStatsByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/TeamGameStatsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame6Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresTeamGameStatsByDateLiveFinalError,
      },
      options,
    );
  }

  wnbaV3ScoresTeamProfilesAll(
    request: WnbaV3Scores.WnbaV3ScoresTeamProfilesAllRequest,
    options?: RequestOptions,
  ): ApiPromise<Team6[], WnbaV3Scores.WnbaV3ScoresTeamProfilesAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/Teams"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => team6Schema)) },
        errorFactory: WnbaV3Scores.WnbaV3ScoresTeamProfilesAllError,
      },
      options,
    );
  }

  wnbaV3ScoresTeamSeasonStats(
    request: WnbaV3Scores.WnbaV3ScoresTeamSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamSeason6[], WnbaV3Scores.WnbaV3ScoresTeamSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/wnba/scores/{format}/TeamSeasonStats/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
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
    format?: Format;
  };

  export class WnbaV3ScoresAreGamesInProgressError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresAreGamesInProgressError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingEventsByDateRequest = {
    format?: Format;
    date: string;
  };

  export class WnbaV3ScoresBettingEventsByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingEventsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingEventsBySeasonRequest = {
    format?: Format;
    season: string;
  };

  export class WnbaV3ScoresBettingEventsBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingEventsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingFuturesBySeasonRequest = {
    format?: Format;
    season: string;
  };

  export class WnbaV3ScoresBettingFuturesBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingFuturesBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingFuturesBySeasonSportsbookGroupRequest = {
    format?: Format;
    season: string;
    sportsbookgroup: string;
  };

  export class WnbaV3ScoresBettingFuturesBySeasonSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingFuturesBySeasonSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingMarketRequest = {
    format?: Format;
    marketId: string;
  };

  export class WnbaV3ScoresBettingMarketError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingMarketSportsbookGroupRequest = {
    format?: Format;
    marketId: string;
    sportsbookgroup: string;
  };

  export class WnbaV3ScoresBettingMarketSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingMarketSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingMarketsByEventRequest = {
    format?: Format;
    eventId: string;
  };

  export class WnbaV3ScoresBettingMarketsByEventError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingMarketsByEventError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingMarketsByEventSportsbookGroupRequest = {
    format?: Format;
    eventId: string;
    sportsbookgroup: string;
  };

  export class WnbaV3ScoresBettingMarketsByEventSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingMarketsByEventSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingMarketsByGameRequest = {
    format?: Format;
    gameId: string;
  };

  export class WnbaV3ScoresBettingMarketsByGameError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingMarketsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingMarketsByGameSportsbookGroupRequest = {
    format?: Format;
    gameId: string;
    sportsbookgroup: string;
  };

  export class WnbaV3ScoresBettingMarketsByGameSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingMarketsByGameSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingMarketsByMarketTypeRequest = {
    format?: Format;
    eventId: string;
    marketTypeId: string;
  };

  export class WnbaV3ScoresBettingMarketsByMarketTypeError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingMarketsByMarketTypeError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingMarketsByMarketTypeSportsbookGroupRequest = {
    format?: Format;
    eventId: string;
    marketTypeId: string;
    sportsbookgroup: string;
  };

  export class WnbaV3ScoresBettingMarketsByMarketTypeSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingMarketsByMarketTypeSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingMetadataRequest = {
    format?: Format;
  };

  export class WnbaV3ScoresBettingMetadataError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingMetadataError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingPlayerPropsByGameRequest = {
    format?: Format;
    gameId: string;
  };

  export class WnbaV3ScoresBettingPlayerPropsByGameError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingPlayerPropsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBettingPlayerPropsByGameSportsbookGroupRequest = {
    format?: Format;
    gameId: string;
    sportsbookgroup: string;
  };

  export class WnbaV3ScoresBettingPlayerPropsByGameSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresBettingPlayerPropsByGameSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBoxScoreFinalRequest = {
    format?: Format;
    gameid: string;
  };

  export class WnbaV3ScoresBoxScoreFinalError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<WnbaV3ScoresBoxScoreFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBoxScoreLiveFinalRequest = {
    format?: Format;
    gameid: string;
  };

  export class WnbaV3ScoresBoxScoreLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresBoxScoreLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBoxScoresByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class WnbaV3ScoresBoxScoresByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresBoxScoresByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresBoxScoresByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class WnbaV3ScoresBoxScoresByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresBoxScoresByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresGamesByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class WnbaV3ScoresGamesByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresGamesByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresGamesByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class WnbaV3ScoresGamesByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresGamesByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresGamesBasicByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class WnbaV3ScoresGamesBasicByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresGamesBasicByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresGamesBasicByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class WnbaV3ScoresGamesBasicByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresGamesBasicByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresPlayerDetailsByActiveRequest = {
    format?: Format;
  };

  export class WnbaV3ScoresPlayerDetailsByActiveError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresPlayerDetailsByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresPlayerDetailsByTeamRequest = {
    format?: Format;
    team: string;
  };

  export class WnbaV3ScoresPlayerDetailsByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresPlayerDetailsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresPlayerSeasonStatsRequest = {
    format?: Format;
    season: string;
  };

  export class WnbaV3ScoresPlayerSeasonStatsError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresPlayerSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresPlayerSeasonStatsByTeamRequest = {
    format?: Format;
    season: string;
    team: string;
  };

  export class WnbaV3ScoresPlayerSeasonStatsByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresPlayerSeasonStatsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresPreGameOddsByDateRequest = {
    format?: Format;
    date: string;
  };

  export class WnbaV3ScoresPreGameOddsByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresPreGameOddsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresPreGameOddsLineMovementRequest = {
    format?: Format;
    gameid: string;
  };

  export class WnbaV3ScoresPreGameOddsLineMovementError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresPreGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresSchedulesRequest = {
    format?: Format;
    season: string;
  };

  export class WnbaV3ScoresSchedulesError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<WnbaV3ScoresSchedulesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresSchedulesBasicRequest = {
    format?: Format;
    season: string;
  };

  export class WnbaV3ScoresSchedulesBasicError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<WnbaV3ScoresSchedulesBasicError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresSeasonCurrentRequest = {
    format?: Format;
  };

  export class WnbaV3ScoresSeasonCurrentError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<WnbaV3ScoresSeasonCurrentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresSportsbooksByActiveRequest = {
    format?: Format;
  };

  export class WnbaV3ScoresSportsbooksByActiveError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresSportsbooksByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresStadiumsRequest = {
    format?: Format;
  };

  export class WnbaV3ScoresStadiumsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<WnbaV3ScoresStadiumsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresStandingsRequest = {
    format?: Format;
    season: string;
  };

  export class WnbaV3ScoresStandingsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<WnbaV3ScoresStandingsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresTeamGameStatsByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class WnbaV3ScoresTeamGameStatsByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresTeamGameStatsByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresTeamGameStatsByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class WnbaV3ScoresTeamGameStatsByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresTeamGameStatsByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresTeamProfilesAllRequest = {
    format?: Format;
  };

  export class WnbaV3ScoresTeamProfilesAllError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresTeamProfilesAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type WnbaV3ScoresTeamSeasonStatsRequest = {
    format?: Format;
    season: string;
  };

  export class WnbaV3ScoresTeamSeasonStatsError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<WnbaV3ScoresTeamSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
