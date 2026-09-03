import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { fightBasicSchema, type FightBasic } from "../models/fight-basic.js";
import { fightDetailSchema, type FightDetail } from "../models/fight-detail.js";
import { Format, formatSchema } from "../models/format.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class MmaV3Stats {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  mmaV3StatsFightBasicFinal(
    request: MmaV3Stats.MmaV3StatsFightBasicFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<FightBasic, MmaV3Stats.MmaV3StatsFightBasicFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mma/stats/{format}/FightBasicFinal/{fightid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "fightid", value: request.fightid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fightBasicSchema },
        errorFactory: MmaV3Stats.MmaV3StatsFightBasicFinalError,
      },
      options,
    );
  }

  mmaV3StatsFightBasicLiveFinal(
    request: MmaV3Stats.MmaV3StatsFightBasicLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<FightBasic, MmaV3Stats.MmaV3StatsFightBasicLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mma/stats/{format}/FightBasic/{fightid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "fightid", value: request.fightid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fightBasicSchema },
        errorFactory: MmaV3Stats.MmaV3StatsFightBasicLiveFinalError,
      },
      options,
    );
  }

  mmaV3StatsFightFinal(
    request: MmaV3Stats.MmaV3StatsFightFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<FightDetail, MmaV3Stats.MmaV3StatsFightFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mma/stats/{format}/FightFinal/{fightid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "fightid", value: request.fightid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fightDetailSchema },
        errorFactory: MmaV3Stats.MmaV3StatsFightFinalError,
      },
      options,
    );
  }

  mmaV3StatsFightLiveFinal(
    request: MmaV3Stats.MmaV3StatsFightLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<FightDetail, MmaV3Stats.MmaV3StatsFightLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mma/stats/{format}/Fight/{fightid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "fightid", value: request.fightid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fightDetailSchema },
        errorFactory: MmaV3Stats.MmaV3StatsFightLiveFinalError,
      },
      options,
    );
  }
}

export namespace MmaV3Stats {
  export type MmaV3StatsFightBasicFinalRequest = {
    format?: Format;
    fightid: string;
  };

  export class MmaV3StatsFightBasicFinalError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<MmaV3StatsFightBasicFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MmaV3StatsFightBasicLiveFinalRequest = {
    format?: Format;
    fightid: string;
  };

  export class MmaV3StatsFightBasicLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MmaV3StatsFightBasicLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MmaV3StatsFightFinalRequest = {
    format?: Format;
    fightid: string;
  };

  export class MmaV3StatsFightFinalError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<MmaV3StatsFightFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MmaV3StatsFightLiveFinalRequest = {
    format?: Format;
    fightid: string;
  };

  export class MmaV3StatsFightLiveFinalError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<MmaV3StatsFightLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
