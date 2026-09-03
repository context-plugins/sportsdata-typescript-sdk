import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { eventDetailSchema, type EventDetail } from "../models/event-detail.js";
import { eventSchema, type Event } from "../models/event.js";
import { fighterBasicSchema, type FighterBasic } from "../models/fighter-basic.js";
import { fighterSchema, type Fighter } from "../models/fighter.js";
import { Format, formatSchema } from "../models/format.js";
import { leagueSchema, type League } from "../models/league.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class MmaV3Scores {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  mmaV3ScoresEvent(
    request: MmaV3Scores.MmaV3ScoresEventRequest,
    options?: RequestOptions,
  ): ApiPromise<EventDetail, MmaV3Scores.MmaV3ScoresEventError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mma/scores/{format}/Event/{eventid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "eventid", value: request.eventid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventDetailSchema },
        errorFactory: MmaV3Scores.MmaV3ScoresEventError,
      },
      options,
    );
  }

  mmaV3ScoresFighterProfileByFighter(
    request: MmaV3Scores.MmaV3ScoresFighterProfileByFighterRequest,
    options?: RequestOptions,
  ): ApiPromise<Fighter, MmaV3Scores.MmaV3ScoresFighterProfileByFighterError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mma/scores/{format}/Fighter/{fighterid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "fighterid", value: request.fighterid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fighterSchema },
        errorFactory: MmaV3Scores.MmaV3ScoresFighterProfileByFighterError,
      },
      options,
    );
  }

  mmaV3ScoresFighterProfilesAll(
    request: MmaV3Scores.MmaV3ScoresFighterProfilesAllRequest,
    options?: RequestOptions,
  ): ApiPromise<Fighter[], MmaV3Scores.MmaV3ScoresFighterProfilesAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mma/scores/{format}/Fighters"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => fighterSchema)) },
        errorFactory: MmaV3Scores.MmaV3ScoresFighterProfilesAllError,
      },
      options,
    );
  }

  mmaV3ScoresFighterProfilesBasicAll(
    request: MmaV3Scores.MmaV3ScoresFighterProfilesBasicAllRequest,
    options?: RequestOptions,
  ): ApiPromise<FighterBasic[], MmaV3Scores.MmaV3ScoresFighterProfilesBasicAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mma/scores/{format}/FightersBasic"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => fighterBasicSchema)) },
        errorFactory: MmaV3Scores.MmaV3ScoresFighterProfilesBasicAllError,
      },
      options,
    );
  }

  mmaV3ScoresLeagues(
    request: MmaV3Scores.MmaV3ScoresLeaguesRequest,
    options?: RequestOptions,
  ): ApiPromise<League[], MmaV3Scores.MmaV3ScoresLeaguesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mma/scores/{format}/Leagues"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => leagueSchema)) },
        errorFactory: MmaV3Scores.MmaV3ScoresLeaguesError,
      },
      options,
    );
  }

  mmaV3ScoresSchedules(
    request: MmaV3Scores.MmaV3ScoresSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<Event[], MmaV3Scores.MmaV3ScoresSchedulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mma/scores/{format}/Schedule/{league}/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "league", value: request.league, schema: s.string() },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => eventSchema)) },
        errorFactory: MmaV3Scores.MmaV3ScoresSchedulesError,
      },
      options,
    );
  }
}

export namespace MmaV3Scores {
  export type MmaV3ScoresEventRequest = {
    format?: Format;
    eventid: string;
  };

  export class MmaV3ScoresEventError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<MmaV3ScoresEventError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MmaV3ScoresFighterProfileByFighterRequest = {
    format?: Format;
    fighterid: string;
  };

  export class MmaV3ScoresFighterProfileByFighterError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MmaV3ScoresFighterProfileByFighterError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MmaV3ScoresFighterProfilesAllRequest = {
    format?: Format;
  };

  export class MmaV3ScoresFighterProfilesAllError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MmaV3ScoresFighterProfilesAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MmaV3ScoresFighterProfilesBasicAllRequest = {
    format?: Format;
  };

  export class MmaV3ScoresFighterProfilesBasicAllError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MmaV3ScoresFighterProfilesBasicAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MmaV3ScoresLeaguesRequest = {
    format?: Format;
  };

  export class MmaV3ScoresLeaguesError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<MmaV3ScoresLeaguesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MmaV3ScoresSchedulesRequest = {
    format?: Format;
    league: string;
    season: string;
  };

  export class MmaV3ScoresSchedulesError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<MmaV3ScoresSchedulesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
