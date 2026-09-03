import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { Format, formatSchema } from "../models/format.js";
import { playByPlay2Schema, type PlayByPlay2 } from "../models/play-by-play2.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class MlbV3PlayByPlay {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  mlbV3PbpPlayByPlayFinal(
    request: MlbV3PlayByPlay.MlbV3PbpPlayByPlayFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayByPlay2, MlbV3PlayByPlay.MlbV3PbpPlayByPlayFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/pbp/{format}/PlayByPlayFinal/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: playByPlay2Schema },
        errorFactory: MlbV3PlayByPlay.MlbV3PbpPlayByPlayFinalError,
      },
      options,
    );
  }

  mlbV3PbpPlayByPlayLiveFinal(
    request: MlbV3PlayByPlay.MlbV3PbpPlayByPlayLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayByPlay2, MlbV3PlayByPlay.MlbV3PbpPlayByPlayLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/pbp/{format}/PlayByPlay/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: playByPlay2Schema },
        errorFactory: MlbV3PlayByPlay.MlbV3PbpPlayByPlayLiveFinalError,
      },
      options,
    );
  }

  mlbV3PbpPlayByPlayDelta(
    request: MlbV3PlayByPlay.MlbV3PbpPlayByPlayDeltaRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayByPlay2[], MlbV3PlayByPlay.MlbV3PbpPlayByPlayDeltaError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/pbp/{format}/PlayByPlayDelta/{date}/{minutes}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
          { name: "minutes", value: request.minutes, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playByPlay2Schema)) },
        errorFactory: MlbV3PlayByPlay.MlbV3PbpPlayByPlayDeltaError,
      },
      options,
    );
  }
}

export namespace MlbV3PlayByPlay {
  export type MlbV3PbpPlayByPlayFinalRequest = {
    format?: Format;
    gameid: string;
  };

  export class MlbV3PbpPlayByPlayFinalError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<MlbV3PbpPlayByPlayFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3PbpPlayByPlayLiveFinalRequest = {
    format?: Format;
    gameid: string;
  };

  export class MlbV3PbpPlayByPlayLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3PbpPlayByPlayLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3PbpPlayByPlayDeltaRequest = {
    format?: Format;
    date: string;
    minutes: string;
  };

  export class MlbV3PbpPlayByPlayDeltaError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<MlbV3PbpPlayByPlayDeltaError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
