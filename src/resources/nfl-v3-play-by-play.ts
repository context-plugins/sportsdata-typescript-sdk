import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { Format, formatSchema } from "../models/format.js";
import { playByPlaySchema, type PlayByPlay } from "../models/play-by-play.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class NflV3PlayByPlay {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  nflV3PbpPlayByPlayByTeamFinal(
    request: NflV3PlayByPlay.NflV3PbpPlayByPlayByTeamFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayByPlay, NflV3PlayByPlay.NflV3PbpPlayByPlayByTeamFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/pbp/{format}/PlayByPlayFinal/{season}/{week}/{hometeam}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
          { name: "hometeam", value: request.hometeam, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: playByPlaySchema },
        errorFactory: NflV3PlayByPlay.NflV3PbpPlayByPlayByTeamFinalError,
      },
      options,
    );
  }

  nflV3PbpPlayByPlayByTeamLiveFinal(
    request: NflV3PlayByPlay.NflV3PbpPlayByPlayByTeamLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayByPlay, NflV3PlayByPlay.NflV3PbpPlayByPlayByTeamLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/pbp/{format}/PlayByPlay/{season}/{week}/{hometeam}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
          { name: "hometeam", value: request.hometeam, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: playByPlaySchema },
        errorFactory: NflV3PlayByPlay.NflV3PbpPlayByPlayByTeamLiveFinalError,
      },
      options,
    );
  }

  nflV3PbpPlayByPlayFinal(
    request: NflV3PlayByPlay.NflV3PbpPlayByPlayFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayByPlay, NflV3PlayByPlay.NflV3PbpPlayByPlayFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/pbp/{format}/PlayByPlayFinal/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: playByPlaySchema },
        errorFactory: NflV3PlayByPlay.NflV3PbpPlayByPlayFinalError,
      },
      options,
    );
  }

  nflV3PbpPlayByPlayLiveFinal(
    request: NflV3PlayByPlay.NflV3PbpPlayByPlayLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayByPlay, NflV3PlayByPlay.NflV3PbpPlayByPlayLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/pbp/{format}/PlayByPlay/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: playByPlaySchema },
        errorFactory: NflV3PlayByPlay.NflV3PbpPlayByPlayLiveFinalError,
      },
      options,
    );
  }

  nflV3PbpPlayByPlayDelta(
    request: NflV3PlayByPlay.NflV3PbpPlayByPlayDeltaRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayByPlay[], NflV3PlayByPlay.NflV3PbpPlayByPlayDeltaError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/pbp/{format}/PlayByPlayDelta/{season}/{week}/{minutes}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
          { name: "minutes", value: request.minutes, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playByPlaySchema)) },
        errorFactory: NflV3PlayByPlay.NflV3PbpPlayByPlayDeltaError,
      },
      options,
    );
  }

  nflV3PbpPlayByPlaySimulation(
    request: NflV3PlayByPlay.NflV3PbpPlayByPlaySimulationRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayByPlay[], NflV3PlayByPlay.NflV3PbpPlayByPlaySimulationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nfl/pbp/{format}/SimulatedPlayByPlay/{numberofplays}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "numberofplays", value: request.numberofplays, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playByPlaySchema)) },
        errorFactory: NflV3PlayByPlay.NflV3PbpPlayByPlaySimulationError,
      },
      options,
    );
  }
}

export namespace NflV3PlayByPlay {
  export type NflV3PbpPlayByPlayByTeamFinalRequest = {
    format?: Format;
    season: string;
    week: string;
    hometeam: string;
  };

  export class NflV3PbpPlayByPlayByTeamFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3PbpPlayByPlayByTeamFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3PbpPlayByPlayByTeamLiveFinalRequest = {
    format?: Format;
    season: string;
    week: string;
    hometeam: string;
  };

  export class NflV3PbpPlayByPlayByTeamLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3PbpPlayByPlayByTeamLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3PbpPlayByPlayFinalRequest = {
    format?: Format;
    gameid: string;
  };

  export class NflV3PbpPlayByPlayFinalError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3PbpPlayByPlayFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3PbpPlayByPlayLiveFinalRequest = {
    format?: Format;
    gameid: string;
  };

  export class NflV3PbpPlayByPlayLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3PbpPlayByPlayLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3PbpPlayByPlayDeltaRequest = {
    format?: Format;
    season: string;
    week: string;
    minutes: string;
  };

  export class NflV3PbpPlayByPlayDeltaError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NflV3PbpPlayByPlayDeltaError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3PbpPlayByPlaySimulationRequest = {
    format?: Format;
    numberofplays: string;
  };

  export class NflV3PbpPlayByPlaySimulationError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NflV3PbpPlayByPlaySimulationError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
