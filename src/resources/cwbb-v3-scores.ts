import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { conference2Schema, type Conference2 } from "../models/conference2.js";
import { Format, formatSchema } from "../models/format.js";
import { game16Schema, type Game16 } from "../models/game16.js";
import { scheduleBasic6Schema, type ScheduleBasic6 } from "../models/schedule-basic6.js";
import { season5Schema, type Season5 } from "../models/season5.js";
import { team7Schema, type Team7 } from "../models/team7.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class CwbbV3Scores {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  cwbbV3ScoresAreAnyGamesInProgress(
    request: CwbbV3Scores.CwbbV3ScoresAreAnyGamesInProgressRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean, CwbbV3Scores.CwbbV3ScoresAreAnyGamesInProgressError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cwbb/scores/{format}/AreAnyGamesInProgress"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.boolean() },
        errorFactory: CwbbV3Scores.CwbbV3ScoresAreAnyGamesInProgressError,
      },
      options,
    );
  }

  cwbbV3ScoresGamesByDateFinal(
    request: CwbbV3Scores.CwbbV3ScoresGamesByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game16[], CwbbV3Scores.CwbbV3ScoresGamesByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cwbb/scores/{format}/GamesByDateFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game16Schema)) },
        errorFactory: CwbbV3Scores.CwbbV3ScoresGamesByDateFinalError,
      },
      options,
    );
  }

  cwbbV3ScoresGamesByDateLiveFinal(
    request: CwbbV3Scores.CwbbV3ScoresGamesByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game16[], CwbbV3Scores.CwbbV3ScoresGamesByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cwbb/scores/{format}/GamesByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game16Schema)) },
        errorFactory: CwbbV3Scores.CwbbV3ScoresGamesByDateLiveFinalError,
      },
      options,
    );
  }

  cwbbV3ScoresLeagueHierarchy(
    request: CwbbV3Scores.CwbbV3ScoresLeagueHierarchyRequest,
    options?: RequestOptions,
  ): ApiPromise<Conference2[], CwbbV3Scores.CwbbV3ScoresLeagueHierarchyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cwbb/scores/{format}/LeagueHierarchy"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => conference2Schema)) },
        errorFactory: CwbbV3Scores.CwbbV3ScoresLeagueHierarchyError,
      },
      options,
    );
  }

  cwbbV3ScoresSchedules(
    request: CwbbV3Scores.CwbbV3ScoresSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<Game16[], CwbbV3Scores.CwbbV3ScoresSchedulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cwbb/scores/{format}/Games/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game16Schema)) },
        errorFactory: CwbbV3Scores.CwbbV3ScoresSchedulesError,
      },
      options,
    );
  }

  cwbbV3ScoresSchedulesBasic(
    request: CwbbV3Scores.CwbbV3ScoresSchedulesBasicRequest,
    options?: RequestOptions,
  ): ApiPromise<ScheduleBasic6[], CwbbV3Scores.CwbbV3ScoresSchedulesBasicError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cwbb/scores/{format}/SchedulesBasic/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scheduleBasic6Schema)) },
        errorFactory: CwbbV3Scores.CwbbV3ScoresSchedulesBasicError,
      },
      options,
    );
  }

  cwbbV3ScoresSeasonCurrent(
    request: CwbbV3Scores.CwbbV3ScoresSeasonCurrentRequest,
    options?: RequestOptions,
  ): ApiPromise<Season5, CwbbV3Scores.CwbbV3ScoresSeasonCurrentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cwbb/scores/{format}/CurrentSeason"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: season5Schema },
        errorFactory: CwbbV3Scores.CwbbV3ScoresSeasonCurrentError,
      },
      options,
    );
  }

  cwbbV3ScoresTeamProfilesAll(
    request: CwbbV3Scores.CwbbV3ScoresTeamProfilesAllRequest,
    options?: RequestOptions,
  ): ApiPromise<Team7[], CwbbV3Scores.CwbbV3ScoresTeamProfilesAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/cwbb/scores/{format}/Teams"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => team7Schema)) },
        errorFactory: CwbbV3Scores.CwbbV3ScoresTeamProfilesAllError,
      },
      options,
    );
  }
}

export namespace CwbbV3Scores {
  export type CwbbV3ScoresAreAnyGamesInProgressRequest = {
    format?: Format;
  };

  export class CwbbV3ScoresAreAnyGamesInProgressError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CwbbV3ScoresAreAnyGamesInProgressError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CwbbV3ScoresGamesByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class CwbbV3ScoresGamesByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CwbbV3ScoresGamesByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CwbbV3ScoresGamesByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class CwbbV3ScoresGamesByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CwbbV3ScoresGamesByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CwbbV3ScoresLeagueHierarchyRequest = {
    format?: Format;
  };

  export class CwbbV3ScoresLeagueHierarchyError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CwbbV3ScoresLeagueHierarchyError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CwbbV3ScoresSchedulesRequest = {
    format?: Format;
    season: string;
  };

  export class CwbbV3ScoresSchedulesError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<CwbbV3ScoresSchedulesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CwbbV3ScoresSchedulesBasicRequest = {
    format?: Format;
    season: string;
  };

  export class CwbbV3ScoresSchedulesBasicError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<CwbbV3ScoresSchedulesBasicError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CwbbV3ScoresSeasonCurrentRequest = {
    format?: Format;
  };

  export class CwbbV3ScoresSeasonCurrentError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<CwbbV3ScoresSeasonCurrentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CwbbV3ScoresTeamProfilesAllRequest = {
    format?: Format;
  };

  export class CwbbV3ScoresTeamProfilesAllError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<CwbbV3ScoresTeamProfilesAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
