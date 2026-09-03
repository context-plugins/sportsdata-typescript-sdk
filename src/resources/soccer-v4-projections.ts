import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { dfsSlate1Schema, type DfsSlate1 } from "../models/dfs-slate1.js";
import { Format, formatSchema } from "../models/format.js";
import {
  playerGameProjection4Schema,
  type PlayerGameProjection4,
} from "../models/player-game-projection4.js";
import { player7Schema, type Player7 } from "../models/player7.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class SoccerV4Projections {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  soccerV4ProjectionsDfsSlatesByDate(
    request: SoccerV4Projections.SoccerV4ProjectionsDfsSlatesByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<DfsSlate1[], SoccerV4Projections.SoccerV4ProjectionsDfsSlatesByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/projections/{format}/DfsSlatesByDate/{competition}/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dfsSlate1Schema)) },
        errorFactory: SoccerV4Projections.SoccerV4ProjectionsDfsSlatesByDateError,
      },
      options,
    );
  }

  soccerV4ProjectionsPlayerDetailsByInjured(
    request: SoccerV4Projections.SoccerV4ProjectionsPlayerDetailsByInjuredRequest,
    options?: RequestOptions,
  ): ApiPromise<Player7[], SoccerV4Projections.SoccerV4ProjectionsPlayerDetailsByInjuredError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/projections/{format}/InjuredPlayers/{competition}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player7Schema)) },
        errorFactory: SoccerV4Projections.SoccerV4ProjectionsPlayerDetailsByInjuredError,
      },
      options,
    );
  }

  soccerV4ProjectionsProjectedPlayerGameStatsByDate(
    request: SoccerV4Projections.SoccerV4ProjectionsProjectedPlayerGameStatsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PlayerGameProjection4[],
    SoccerV4Projections.SoccerV4ProjectionsProjectedPlayerGameStatsByDateError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v4/soccer/projections/{format}/PlayerGameProjectionStatsByDate/{competition}/{date}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameProjection4Schema)) },
        errorFactory: SoccerV4Projections.SoccerV4ProjectionsProjectedPlayerGameStatsByDateError,
      },
      options,
    );
  }

  soccerV4ProjectionsUpcomingDfsSlatesByCompetition(
    request: SoccerV4Projections.SoccerV4ProjectionsUpcomingDfsSlatesByCompetitionRequest,
    options?: RequestOptions,
  ): ApiPromise<DfsSlate1[], SoccerV4Projections.SoccerV4ProjectionsUpcomingDfsSlatesByCompetitionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v4/soccer/projections/{format}/UpcomingDfsSlatesByCompetition/{competition}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dfsSlate1Schema)) },
        errorFactory: SoccerV4Projections.SoccerV4ProjectionsUpcomingDfsSlatesByCompetitionError,
      },
      options,
    );
  }
}

export namespace SoccerV4Projections {
  export type SoccerV4ProjectionsDfsSlatesByDateRequest = {
    format?: Format;
    competition: string;
    date: string;
  };

  export class SoccerV4ProjectionsDfsSlatesByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4ProjectionsDfsSlatesByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ProjectionsPlayerDetailsByInjuredRequest = {
    format?: Format;
    competition: string;
  };

  export class SoccerV4ProjectionsPlayerDetailsByInjuredError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4ProjectionsPlayerDetailsByInjuredError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ProjectionsProjectedPlayerGameStatsByDateRequest = {
    format?: Format;
    competition: string;
    date: string;
  };

  export class SoccerV4ProjectionsProjectedPlayerGameStatsByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4ProjectionsProjectedPlayerGameStatsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ProjectionsUpcomingDfsSlatesByCompetitionRequest = {
    format?: Format;
    competition: string;
  };

  export class SoccerV4ProjectionsUpcomingDfsSlatesByCompetitionError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4ProjectionsUpcomingDfsSlatesByCompetitionError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
