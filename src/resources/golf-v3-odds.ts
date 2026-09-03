import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  bettingEntityMetadataCollection2Schema,
  type BettingEntityMetadataCollection2,
} from "../models/betting-entity-metadata-collection2.js";
import { bettingEvent4Schema, type BettingEvent4 } from "../models/betting-event4.js";
import { bettingMarket2Schema, type BettingMarket2 } from "../models/betting-market2.js";
import { Format, formatSchema } from "../models/format.js";
import { Include, includeSchema } from "../models/include.js";
import { sportsbookSchema, type Sportsbook } from "../models/sportsbook.js";
import { tournamentOddsSchema, type TournamentOdds } from "../models/tournament-odds.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class GolfV3Odds {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  golfV3OddsBettingEventsByDate(
    request: GolfV3Odds.GolfV3OddsBettingEventsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent4[], GolfV3Odds.GolfV3OddsBettingEventsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/golf/odds/{format}/BettingEventsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent4Schema)) },
        errorFactory: GolfV3Odds.GolfV3OddsBettingEventsByDateError,
      },
      options,
    );
  }

  golfV3OddsBettingEventsBySeason(
    request: GolfV3Odds.GolfV3OddsBettingEventsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEvent4[], GolfV3Odds.GolfV3OddsBettingEventsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/golf/odds/{format}/BettingEvents/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingEvent4Schema)) },
        errorFactory: GolfV3Odds.GolfV3OddsBettingEventsBySeasonError,
      },
      options,
    );
  }

  golfV3OddsBettingMarket(
    request: GolfV3Odds.GolfV3OddsBettingMarketRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket2, GolfV3Odds.GolfV3OddsBettingMarketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/golf/odds/{format}/BettingMarket/{marketId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "marketId", value: request.marketId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarket2Schema },
        errorFactory: GolfV3Odds.GolfV3OddsBettingMarketError,
      },
      options,
    );
  }

  golfV3OddsBettingMarketSportsbookGroup(
    request: GolfV3Odds.GolfV3OddsBettingMarketSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket2, GolfV3Odds.GolfV3OddsBettingMarketSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/golf/odds/{format}/BettingMarket/{marketId}/{sportsbookgroup}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "marketId", value: request.marketId, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingMarket2Schema },
        errorFactory: GolfV3Odds.GolfV3OddsBettingMarketSportsbookGroupError,
      },
      options,
    );
  }

  golfV3OddsBettingMarketsByEvent(
    request: GolfV3Odds.GolfV3OddsBettingMarketsByEventRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket2[], GolfV3Odds.GolfV3OddsBettingMarketsByEventError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/golf/odds/{format}/BettingMarkets/{eventId}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket2Schema)) },
        errorFactory: GolfV3Odds.GolfV3OddsBettingMarketsByEventError,
      },
      options,
    );
  }

  golfV3OddsBettingMarketsByEventSportsbookGroup(
    request: GolfV3Odds.GolfV3OddsBettingMarketsByEventSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket2[], GolfV3Odds.GolfV3OddsBettingMarketsByEventSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/golf/odds/{format}/BettingMarketsByEvent/{eventId}/{sportsbookgroup}",
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket2Schema)) },
        errorFactory: GolfV3Odds.GolfV3OddsBettingMarketsByEventSportsbookGroupError,
      },
      options,
    );
  }

  golfV3OddsBettingMarketsByMarketType(
    request: GolfV3Odds.GolfV3OddsBettingMarketsByMarketTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket2[], GolfV3Odds.GolfV3OddsBettingMarketsByMarketTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/golf/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket2Schema)) },
        errorFactory: GolfV3Odds.GolfV3OddsBettingMarketsByMarketTypeError,
      },
      options,
    );
  }

  golfV3OddsBettingMarketsByMarketTypeSportsbookGroup(
    request: GolfV3Odds.GolfV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket2[], GolfV3Odds.GolfV3OddsBettingMarketsByMarketTypeSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/golf/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}/{sportsbookgroup}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket2Schema)) },
        errorFactory: GolfV3Odds.GolfV3OddsBettingMarketsByMarketTypeSportsbookGroupError,
      },
      options,
    );
  }

  golfV3OddsBettingMarketsByTournament(
    request: GolfV3Odds.GolfV3OddsBettingMarketsByTournamentRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket2[], GolfV3Odds.GolfV3OddsBettingMarketsByTournamentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/golf/odds/{format}/BettingMarketsByTournamentID/{tournamentid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket2Schema)) },
        errorFactory: GolfV3Odds.GolfV3OddsBettingMarketsByTournamentError,
      },
      options,
    );
  }

  golfV3OddsBettingMarketsByTournamentSportsbookGroup(
    request: GolfV3Odds.GolfV3OddsBettingMarketsByTournamentSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket2[], GolfV3Odds.GolfV3OddsBettingMarketsByTournamentSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/golf/odds/{format}/BettingMarketsByTournamentID/{tournamentid}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket2Schema)) },
        errorFactory: GolfV3Odds.GolfV3OddsBettingMarketsByTournamentSportsbookGroupError,
      },
      options,
    );
  }

  golfV3OddsBettingMetadata(
    request: GolfV3Odds.GolfV3OddsBettingMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingEntityMetadataCollection2, GolfV3Odds.GolfV3OddsBettingMetadataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/golf/odds/{format}/BettingMetadata"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bettingEntityMetadataCollection2Schema },
        errorFactory: GolfV3Odds.GolfV3OddsBettingMetadataError,
      },
      options,
    );
  }

  golfV3OddsBettingPlayerPropsByTournamentSportsbookGroup(
    request: GolfV3Odds.GolfV3OddsBettingPlayerPropsByTournamentSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<BettingMarket2[], GolfV3Odds.GolfV3OddsBettingPlayerPropsByTournamentSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/golf/odds/{format}/BettingPlayerPropsByTournamentID/{tournamentid}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        query: [
          { name: "include", value: request.include, schema: s.defaulted(includeSchema, Include.Available) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => bettingMarket2Schema)) },
        errorFactory: GolfV3Odds.GolfV3OddsBettingPlayerPropsByTournamentSportsbookGroupError,
      },
      options,
    );
  }

  golfV3OddsInPlayTournamentOdds(
    request: GolfV3Odds.GolfV3OddsInPlayTournamentOddsRequest,
    options?: RequestOptions,
  ): ApiPromise<TournamentOdds, GolfV3Odds.GolfV3OddsInPlayTournamentOddsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/golf/odds/{format}/InPlayTournamentOdds/{tournamentid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tournamentOddsSchema },
        errorFactory: GolfV3Odds.GolfV3OddsInPlayTournamentOddsError,
      },
      options,
    );
  }

  golfV3OddsInPlayTournamentOddsSportsbookGroup(
    request: GolfV3Odds.GolfV3OddsInPlayTournamentOddsSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<TournamentOdds, GolfV3Odds.GolfV3OddsInPlayTournamentOddsSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/golf/odds/{format}/InPlayTournamentOdds/{tournamentid}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tournamentOddsSchema },
        errorFactory: GolfV3Odds.GolfV3OddsInPlayTournamentOddsSportsbookGroupError,
      },
      options,
    );
  }

  golfV3OddsInPlayTournamentOddsLineMovement(
    request: GolfV3Odds.GolfV3OddsInPlayTournamentOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<TournamentOdds, GolfV3Odds.GolfV3OddsInPlayTournamentOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/golf/odds/{format}/InPlayTournamentOddsLineMovement/{tournamentid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tournamentOddsSchema },
        errorFactory: GolfV3Odds.GolfV3OddsInPlayTournamentOddsLineMovementError,
      },
      options,
    );
  }

  golfV3OddsInPlayTournamentOddsLineMovementSportsbookGroup(
    request: GolfV3Odds.GolfV3OddsInPlayTournamentOddsLineMovementSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<TournamentOdds, GolfV3Odds.GolfV3OddsInPlayTournamentOddsLineMovementSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/golf/odds/{format}/InPlayTournamentOddsLineMovement/{tournamentid}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tournamentOddsSchema },
        errorFactory: GolfV3Odds.GolfV3OddsInPlayTournamentOddsLineMovementSportsbookGroupError,
      },
      options,
    );
  }

  golfV3OddsSportsbooksByActive(
    request: GolfV3Odds.GolfV3OddsSportsbooksByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Sportsbook[], GolfV3Odds.GolfV3OddsSportsbooksByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/golf/odds/{format}/ActiveSportsbooks"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sportsbookSchema)) },
        errorFactory: GolfV3Odds.GolfV3OddsSportsbooksByActiveError,
      },
      options,
    );
  }

  golfV3OddsTournamentOdds(
    request: GolfV3Odds.GolfV3OddsTournamentOddsRequest,
    options?: RequestOptions,
  ): ApiPromise<TournamentOdds, GolfV3Odds.GolfV3OddsTournamentOddsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/golf/odds/{format}/TournamentOdds/{tournamentid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tournamentOddsSchema },
        errorFactory: GolfV3Odds.GolfV3OddsTournamentOddsError,
      },
      options,
    );
  }

  golfV3OddsTournamentOddsSportsbookGroup(
    request: GolfV3Odds.GolfV3OddsTournamentOddsSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<TournamentOdds, GolfV3Odds.GolfV3OddsTournamentOddsSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/golf/odds/{format}/TournamentOdds/{tournamentid}/{sportsbookgroup}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tournamentOddsSchema },
        errorFactory: GolfV3Odds.GolfV3OddsTournamentOddsSportsbookGroupError,
      },
      options,
    );
  }

  golfV3OddsTournamentOddsLineMovement(
    request: GolfV3Odds.GolfV3OddsTournamentOddsLineMovementRequest,
    options?: RequestOptions,
  ): ApiPromise<TournamentOdds, GolfV3Odds.GolfV3OddsTournamentOddsLineMovementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/golf/odds/{format}/TournamentOddsLineMovement/{tournamentid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tournamentOddsSchema },
        errorFactory: GolfV3Odds.GolfV3OddsTournamentOddsLineMovementError,
      },
      options,
    );
  }

  golfV3OddsTournamentOddsLineMovementSportsbookGroup(
    request: GolfV3Odds.GolfV3OddsTournamentOddsLineMovementSportsbookGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<TournamentOdds, GolfV3Odds.GolfV3OddsTournamentOddsLineMovementSportsbookGroupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/golf/odds/{format}/TournamentOddsLineMovement/{tournamentid}/{sportsbookgroup}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
          { name: "sportsbookgroup", value: request.sportsbookgroup, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tournamentOddsSchema },
        errorFactory: GolfV3Odds.GolfV3OddsTournamentOddsLineMovementSportsbookGroupError,
      },
      options,
    );
  }
}

export namespace GolfV3Odds {
  export type GolfV3OddsBettingEventsByDateRequest = {
    format?: Format;
    date: string;
  };

  export class GolfV3OddsBettingEventsByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV3OddsBettingEventsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV3OddsBettingEventsBySeasonRequest = {
    format?: Format;
    season: string;
  };

  export class GolfV3OddsBettingEventsBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV3OddsBettingEventsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV3OddsBettingMarketRequest = {
    format?: Format;
    marketId: string;
  };

  export class GolfV3OddsBettingMarketError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<GolfV3OddsBettingMarketError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV3OddsBettingMarketSportsbookGroupRequest = {
    format?: Format;
    marketId: string;
    sportsbookgroup: string;
  };

  export class GolfV3OddsBettingMarketSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV3OddsBettingMarketSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV3OddsBettingMarketsByEventRequest = {
    format?: Format;
    eventId: string;
    include?: Include;
  };

  export class GolfV3OddsBettingMarketsByEventError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV3OddsBettingMarketsByEventError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV3OddsBettingMarketsByEventSportsbookGroupRequest = {
    format?: Format;
    eventId: string;
    sportsbookgroup: string;
    include?: Include;
  };

  export class GolfV3OddsBettingMarketsByEventSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV3OddsBettingMarketsByEventSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV3OddsBettingMarketsByMarketTypeRequest = {
    format?: Format;
    eventId: string;
    marketTypeId: string;
    include?: Include;
  };

  export class GolfV3OddsBettingMarketsByMarketTypeError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV3OddsBettingMarketsByMarketTypeError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest = {
    format?: Format;
    eventId: string;
    marketTypeId: string;
    sportsbookgroup: string;
    include?: Include;
  };

  export class GolfV3OddsBettingMarketsByMarketTypeSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV3OddsBettingMarketsByMarketTypeSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV3OddsBettingMarketsByTournamentRequest = {
    format?: Format;
    tournamentid: string;
    include?: Include;
  };

  export class GolfV3OddsBettingMarketsByTournamentError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV3OddsBettingMarketsByTournamentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV3OddsBettingMarketsByTournamentSportsbookGroupRequest = {
    format?: Format;
    tournamentid: string;
    sportsbookgroup: string;
    include?: Include;
  };

  export class GolfV3OddsBettingMarketsByTournamentSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV3OddsBettingMarketsByTournamentSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV3OddsBettingMetadataRequest = {
    format?: Format;
  };

  export class GolfV3OddsBettingMetadataError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<GolfV3OddsBettingMetadataError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV3OddsBettingPlayerPropsByTournamentSportsbookGroupRequest = {
    format?: Format;
    tournamentid: string;
    sportsbookgroup: string;
    include?: Include;
  };

  export class GolfV3OddsBettingPlayerPropsByTournamentSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV3OddsBettingPlayerPropsByTournamentSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV3OddsInPlayTournamentOddsRequest = {
    format?: Format;
    tournamentid: string;
  };

  export class GolfV3OddsInPlayTournamentOddsError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV3OddsInPlayTournamentOddsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV3OddsInPlayTournamentOddsSportsbookGroupRequest = {
    format?: Format;
    tournamentid: string;
    sportsbookgroup: string;
  };

  export class GolfV3OddsInPlayTournamentOddsSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV3OddsInPlayTournamentOddsSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV3OddsInPlayTournamentOddsLineMovementRequest = {
    format?: Format;
    tournamentid: string;
  };

  export class GolfV3OddsInPlayTournamentOddsLineMovementError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV3OddsInPlayTournamentOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV3OddsInPlayTournamentOddsLineMovementSportsbookGroupRequest = {
    format?: Format;
    tournamentid: string;
    sportsbookgroup: string;
  };

  export class GolfV3OddsInPlayTournamentOddsLineMovementSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV3OddsInPlayTournamentOddsLineMovementSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV3OddsSportsbooksByActiveRequest = {
    format?: Format;
  };

  export class GolfV3OddsSportsbooksByActiveError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV3OddsSportsbooksByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV3OddsTournamentOddsRequest = {
    format?: Format;
    tournamentid: string;
  };

  export class GolfV3OddsTournamentOddsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<GolfV3OddsTournamentOddsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV3OddsTournamentOddsSportsbookGroupRequest = {
    format?: Format;
    tournamentid: string;
    sportsbookgroup: string;
  };

  export class GolfV3OddsTournamentOddsSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV3OddsTournamentOddsSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV3OddsTournamentOddsLineMovementRequest = {
    format?: Format;
    tournamentid: string;
  };

  export class GolfV3OddsTournamentOddsLineMovementError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV3OddsTournamentOddsLineMovementError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV3OddsTournamentOddsLineMovementSportsbookGroupRequest = {
    format?: Format;
    tournamentid: string;
    sportsbookgroup: string;
  };

  export class GolfV3OddsTournamentOddsLineMovementSportsbookGroupError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV3OddsTournamentOddsLineMovementSportsbookGroupError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
