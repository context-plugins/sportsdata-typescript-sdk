import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  bettingEntityMetadataCollection1Schema,
  type BettingEntityMetadataCollection1,
} from "../models/betting-entity-metadata-collection1.js";
import { bettingEvent3Schema, type BettingEvent3 } from "../models/betting-event3.js";
import { bettingMarket1Schema, type BettingMarket1 } from "../models/betting-market1.js";
import { Format, formatSchema } from "../models/format.js";
import { gameInfoResult6Schema, type GameInfoResult6 } from "../models/game-info-result6.js";
import { gameInfo7Schema, type GameInfo7 } from "../models/game-info7.js";
import { sportsbookSchema, type Sportsbook } from "../models/sportsbook.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class SoccerV4Odds {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  soccerV4OddsBettingEventsByDate(
    request: SoccerV4Odds.SoccerV4OddsBettingEventsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent3[], SoccerV4Odds.SoccerV4OddsBettingEventsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/odds/{format}/BettingEventsByDate/{competition}/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent3Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingEventsByDateError,
      },
      options,
    );
  }

  soccerV4OddsBettingEventsBySeason(
    request: SoccerV4Odds.SoccerV4OddsBettingEventsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent3[], SoccerV4Odds.SoccerV4OddsBettingEventsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/odds/{format}/BettingEventsBySeason/{competition}/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent3Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingEventsBySeasonError,
      },
      options,
    );
  }

  soccerV4OddsBettingFuturesBySeason(
    request: SoccerV4Odds.SoccerV4OddsBettingFuturesBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent3[], SoccerV4Odds.SoccerV4OddsBettingFuturesBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/odds/{format}/BettingFuturesBySeason/{competition}/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent3Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingFuturesBySeasonError,
      },
      options,
    );
  }

  soccerV4OddsBettingFuturesBySeasonSportsbookGroup(
    request: SoccerV4Odds.SoccerV4OddsBettingFuturesBySeasonSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent3[], SoccerV4Odds.SoccerV4OddsBettingFuturesBySeasonSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v4/soccer/odds/{format}/BettingFuturesBySeason/{competition}/{season}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "season", value: request.season, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent3Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingFuturesBySeasonSportsbookGroupError,
      },
      options,
    );
  }

  soccerV4OddsBettingMarket(
    request: SoccerV4Odds.SoccerV4OddsBettingMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket1, SoccerV4Odds.SoccerV4OddsBettingMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/odds/{format}/BettingMarket/{competition}/{marketId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "marketId", value: request.marketId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarket1Schema },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingMarketError,
      },
      options,
    );
  }

  soccerV4OddsBettingMarketSportsbookGroup(
    request: SoccerV4Odds.SoccerV4OddsBettingMarketSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket1, SoccerV4Odds.SoccerV4OddsBettingMarketSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v4/soccer/odds/{format}/BettingMarket/{competition}/{marketId}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "marketId", value: request.marketId, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarket1Schema },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingMarketSportsbookGroupError,
      },
      options,
    );
  }

  soccerV4OddsBettingMarketsByEvent(
    request: SoccerV4Odds.SoccerV4OddsBettingMarketsByEventRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket1[], SoccerV4Odds.SoccerV4OddsBettingMarketsByEventError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/odds/{format}/BettingMarkets/{competition}/{eventId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "eventId", value: request.eventId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket1Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingMarketsByEventError,
      },
      options,
    );
  }

  soccerV4OddsBettingMarketsByEventSportsbookGroup(
    request: SoccerV4Odds.SoccerV4OddsBettingMarketsByEventSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket1[], SoccerV4Odds.SoccerV4OddsBettingMarketsByEventSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v4/soccer/odds/{format}/BettingMarketsByEvent/{competition}/{eventId}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "eventId", value: request.eventId, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket1Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingMarketsByEventSportsbookGroupError,
      },
      options,
    );
  }

  soccerV4OddsBettingMarketsByGame(
    request: SoccerV4Odds.SoccerV4OddsBettingMarketsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket1[], SoccerV4Odds.SoccerV4OddsBettingMarketsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/odds/{format}/BettingMarketsByGameID/{competition}/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket1Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingMarketsByGameError,
      },
      options,
    );
  }

  soccerV4OddsBettingMarketsByGameSportsbookGroup(
    request: SoccerV4Odds.SoccerV4OddsBettingMarketsByGameSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket1[], SoccerV4Odds.SoccerV4OddsBettingMarketsByGameSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v4/soccer/odds/{format}/BettingMarketsByGameID/{competition}/{gameid}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket1Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingMarketsByGameSportsbookGroupError,
      },
      options,
    );
  }

  soccerV4OddsBettingMarketsByMarketType(
    request: SoccerV4Odds.SoccerV4OddsBettingMarketsByMarketTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket1[], SoccerV4Odds.SoccerV4OddsBettingMarketsByMarketTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v4/soccer/odds/{format}/BettingMarketsByMarketType/{competition}/{eventId}/{marketTypeID}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "eventId", value: request.eventId, schema: s.string() },
          { name: "marketTypeID", value: request.marketTypeId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket1Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingMarketsByMarketTypeError,
      },
      options,
    );
  }

  soccerV4OddsBettingMarketsByMarketTypeSportsbookGroup(
    request: SoccerV4Odds.SoccerV4OddsBettingMarketsByMarketTypeSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket1[], SoccerV4Odds.SoccerV4OddsBettingMarketsByMarketTypeSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v4/soccer/odds/{format}/BettingMarketsByMarketType/{competition}/{eventId}/{marketTypeID}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "eventId", value: request.eventId, schema: s.string() },
          { name: "marketTypeID", value: request.marketTypeId, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket1Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingMarketsByMarketTypeSportsbookGroupError,
      },
      options,
    );
  }

  soccerV4OddsBettingMetadata(
    request: SoccerV4Odds.SoccerV4OddsBettingMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEntityMetadataCollection1, SoccerV4Odds.SoccerV4OddsBettingMetadataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/odds/{format}/BettingMetadata"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingEntityMetadataCollection1Schema },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingMetadataError,
      },
      options,
    );
  }

  soccerV4OddsBettingPlayerPropsByGame(
    request: SoccerV4Odds.SoccerV4OddsBettingPlayerPropsByGameRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket1[], SoccerV4Odds.SoccerV4OddsBettingPlayerPropsByGameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v4/soccer/odds/{format}/BettingPlayerPropsByGameID/{competition}/{gameId}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "gameId", value: request.gameId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket1Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingPlayerPropsByGameError,
      },
      options,
    );
  }

  soccerV4OddsBettingPlayerPropsByGameSportsbookGroup(
    request: SoccerV4Odds.SoccerV4OddsBettingPlayerPropsByGameSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket1[], SoccerV4Odds.SoccerV4OddsBettingPlayerPropsByGameSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v4/soccer/odds/{format}/BettingPlayerPropsByGameID/{competition}/{gameId}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "gameId", value: request.gameId, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket1Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsBettingPlayerPropsByGameSportsbookGroupError,
      },
      options,
    );
  }

  soccerV4OddsInGameOddsByDate(
    request: SoccerV4Odds.SoccerV4OddsInGameOddsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsInGameOddsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/odds/{format}/LiveGameOddsByDate/{competition}/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo7Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsInGameOddsByDateError,
      },
      options,
    );
  }

  soccerV4OddsInGameOddsByDateSportsbookGroup(
    request: SoccerV4Odds.SoccerV4OddsInGameOddsByDateSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsInGameOddsByDateSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v4/soccer/odds/{format}/InGameOddsByDate/{competition}/{date}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo7Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsInGameOddsByDateSportsbookGroupError,
      },
      options,
    );
  }

  soccerV4OddsInGameOddsLineMovement(
    request: SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v4/soccer/odds/{format}/LiveGameOddsLineMovement/{competition}/{gameid}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo7Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementError,
      },
      options,
    );
  }

  soccerV4OddsInGameOddsLineMovementSportsbookGroup(
    request: SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v4/soccer/odds/{format}/InGameOddsLineMovement/{competition}/{gameid}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo7Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementSportsbookGroupError,
      },
      options,
    );
  }

  soccerV4OddsInGameOddsLineMovementWithResultingSportsbookGroup(
    request: SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GameInfoResult6[],
    SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementWithResultingSportsbookGroupError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v4/soccer/odds/{format}/InGameOddsLineMovementWithResulting/{competition}/{gameid}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoResult6Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementWithResultingSportsbookGroupError,
      },
      options,
    );
  }

  soccerV4OddsPeriodGameOddsByDate(
    request: SoccerV4Odds.SoccerV4OddsPeriodGameOddsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsPeriodGameOddsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v4/soccer/odds/{format}/AlternateMarketGameOddsByDate/{competition}/{date}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo7Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsPeriodGameOddsByDateError,
      },
      options,
    );
  }

  soccerV4OddsPeriodGameOddsLineMovement(
    request: SoccerV4Odds.SoccerV4OddsPeriodGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsPeriodGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v4/soccer/odds/{format}/AlternateMarketGameOddsLineMovement/{competition}/{gameid}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo7Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsPeriodGameOddsLineMovementError,
      },
      options,
    );
  }

  soccerV4OddsPreGameAndPeriodGameOddsByDateSportsbookGroup(
    request: SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsByDateSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v4/soccer/odds/{format}/PreGameOddsByDate/{competition}/{date}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo7Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError,
      },
      options,
    );
  }

  soccerV4OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup(
    request: SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GameInfo7[],
    SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v4/soccer/odds/{format}/PreGameOddsLineMovement/{competition}/{gameid}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo7Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError,
      },
      options,
    );
  }

  soccerV4OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroup(
    request: SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GameInfoResult6[],
    SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v4/soccer/odds/{format}/PreGameOddsLineMovementWithResulting/{competition}/{gameid}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfoResult6Schema)) },
        errorFactory:
          SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError,
      },
      options,
    );
  }

  soccerV4OddsPreGameOddsByDate(
    request: SoccerV4Odds.SoccerV4OddsPreGameOddsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsPreGameOddsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/odds/{format}/GameOddsByDate/{competition}/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo7Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsPreGameOddsByDateError,
      },
      options,
    );
  }

  soccerV4OddsPreGameOddsLineMovement(
    request: SoccerV4Odds.SoccerV4OddsPreGameOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsPreGameOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/odds/{format}/GameOddsLineMovement/{competition}/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => gameInfo7Schema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsPreGameOddsLineMovementError,
      },
      options,
    );
  }

  soccerV4OddsSportsbooksByActive(
    request: SoccerV4Odds.SoccerV4OddsSportsbooksByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Sportsbook[], SoccerV4Odds.SoccerV4OddsSportsbooksByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/odds/{format}/ActiveSportsbooks"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sportsbookSchema)) },
        errorFactory: SoccerV4Odds.SoccerV4OddsSportsbooksByActiveError,
      },
      options,
    );
  }
}

export namespace SoccerV4Odds {
  export type SoccerV4OddsBettingEventsByDateRequest = {
    format?: Format;
    competition: string;
    date: string;
  };

  export class SoccerV4OddsBettingEventsByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4OddsBettingEventsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingEventsBySeasonRequest = {
    format?: Format;
    competition: string;
    season: string;
  };

  export class SoccerV4OddsBettingEventsBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4OddsBettingEventsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingFuturesBySeasonRequest = {
    format?: Format;
    competition: string;
    season: string;
  };

  export class SoccerV4OddsBettingFuturesBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4OddsBettingFuturesBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingFuturesBySeasonSportsbookGroupRequest = {
    format?: Format;
    competition: string;
    season: string;
    sportsbookgroup: string;
  };

  export class SoccerV4OddsBettingFuturesBySeasonSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4OddsBettingFuturesBySeasonSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingMarketRequest = {
    format?: Format;
    competition: string;
    marketId: string;
  };

  export class SoccerV4OddsBettingMarketError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<SoccerV4OddsBettingMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingMarketSportsbookGroupRequest = {
    format?: Format;
    competition: string;
    marketId: string;
    sportsbookgroup: string;
  };

  export class SoccerV4OddsBettingMarketSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4OddsBettingMarketSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingMarketsByEventRequest = {
    format?: Format;
    competition: string;
    eventId: string;
  };

  export class SoccerV4OddsBettingMarketsByEventError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4OddsBettingMarketsByEventError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingMarketsByEventSportsbookGroupRequest = {
    format?: Format;
    competition: string;
    eventId: string;
    sportsbookgroup: string;
  };

  export class SoccerV4OddsBettingMarketsByEventSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4OddsBettingMarketsByEventSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingMarketsByGameRequest = {
    format?: Format;
    competition: string;
    gameid: string;
  };

  export class SoccerV4OddsBettingMarketsByGameError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4OddsBettingMarketsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingMarketsByGameSportsbookGroupRequest = {
    format?: Format;
    competition: string;
    gameid: string;
    sportsbookgroup: string;
  };

  export class SoccerV4OddsBettingMarketsByGameSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4OddsBettingMarketsByGameSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingMarketsByMarketTypeRequest = {
    format?: Format;
    competition: string;
    eventId: string;
    marketTypeId: string;
  };

  export class SoccerV4OddsBettingMarketsByMarketTypeError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4OddsBettingMarketsByMarketTypeError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingMarketsByMarketTypeSportsbookGroupRequest = {
    format?: Format;
    competition: string;
    eventId: string;
    marketTypeId: string;
    sportsbookgroup: string;
  };

  export class SoccerV4OddsBettingMarketsByMarketTypeSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4OddsBettingMarketsByMarketTypeSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingMetadataRequest = {
    format?: Format;
  };

  export class SoccerV4OddsBettingMetadataError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4OddsBettingMetadataError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingPlayerPropsByGameRequest = {
    format?: Format;
    competition: string;
    gameId: string;
  };

  export class SoccerV4OddsBettingPlayerPropsByGameError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4OddsBettingPlayerPropsByGameError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsBettingPlayerPropsByGameSportsbookGroupRequest = {
    format?: Format;
    competition: string;
    gameId: string;
    sportsbookgroup: string;
  };

  export class SoccerV4OddsBettingPlayerPropsByGameSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4OddsBettingPlayerPropsByGameSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsInGameOddsByDateRequest = {
    format?: Format;
    competition: string;
    date: string;
  };

  export class SoccerV4OddsInGameOddsByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4OddsInGameOddsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsInGameOddsByDateSportsbookGroupRequest = {
    format?: Format;
    competition: string;
    date: string;
    sportsbookgroup: string;
  };

  export class SoccerV4OddsInGameOddsByDateSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4OddsInGameOddsByDateSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsInGameOddsLineMovementRequest = {
    format?: Format;
    competition: string;
    gameid: string;
  };

  export class SoccerV4OddsInGameOddsLineMovementError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4OddsInGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsInGameOddsLineMovementSportsbookGroupRequest = {
    format?: Format;
    competition: string;
    gameid: string;
    sportsbookgroup: string;
  };

  export class SoccerV4OddsInGameOddsLineMovementSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4OddsInGameOddsLineMovementSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest = {
    format?: Format;
    competition: string;
    gameid: string;
    sportsbookgroup: string;
  };

  export class SoccerV4OddsInGameOddsLineMovementWithResultingSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4OddsInGameOddsLineMovementWithResultingSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsPeriodGameOddsByDateRequest = {
    format?: Format;
    competition: string;
    date: string;
  };

  export class SoccerV4OddsPeriodGameOddsByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4OddsPeriodGameOddsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsPeriodGameOddsLineMovementRequest = {
    format?: Format;
    competition: string;
    gameid: string;
  };

  export class SoccerV4OddsPeriodGameOddsLineMovementError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4OddsPeriodGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsPreGameAndPeriodGameOddsByDateSportsbookGroupRequest = {
    format?: Format;
    competition: string;
    date: string;
    sportsbookgroup: string;
  };

  export class SoccerV4OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest = {
    format?: Format;
    competition: string;
    gameid: string;
    sportsbookgroup: string;
  };

  export class SoccerV4OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest = {
    format?: Format;
    competition: string;
    gameid: string;
    sportsbookgroup: string;
  };

  export class SoccerV4OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsPreGameOddsByDateRequest = {
    format?: Format;
    competition: string;
    date: string;
  };

  export class SoccerV4OddsPreGameOddsByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4OddsPreGameOddsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsPreGameOddsLineMovementRequest = {
    format?: Format;
    competition: string;
    gameid: string;
  };

  export class SoccerV4OddsPreGameOddsLineMovementError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4OddsPreGameOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4OddsSportsbooksByActiveRequest = {
    format?: Format;
  };

  export class SoccerV4OddsSportsbooksByActiveError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4OddsSportsbooksByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
