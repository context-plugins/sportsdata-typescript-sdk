import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * Event
   *
   * @remarks
   * Returns all fights that will take place within a given EventId (fight card.)
   *
   * @returns Success
   *
   * @throws {@link MmaV3Scores.MmaV3ScoresEventError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mmaV3ScoresEvent(
    request: MmaV3Scores.MmaV3ScoresEventRequest,
    options?: RequestOptions,
  ): ApiPromise<EventDetail, MmaV3Scores.MmaV3ScoresEventError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mma/scores/{format}/Event/{eventid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "eventid", value: request.eventid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventDetailSchema },
        errorFactory: MmaV3Scores.MmaV3ScoresEventError,
      },
      options,
    );
  }

  /**
   * Fighter Profile - By Fighter
   *
   * @remarks
   * An individual fighter profile.
   *
   * @returns Success
   *
   * @throws {@link MmaV3Scores.MmaV3ScoresFighterProfileByFighterError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mmaV3ScoresFighterProfileByFighter(
    request: MmaV3Scores.MmaV3ScoresFighterProfileByFighterRequest,
    options?: RequestOptions,
  ): ApiPromise<Fighter, MmaV3Scores.MmaV3ScoresFighterProfileByFighterError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mma/scores/{format}/Fighter/{fighterid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "fighterid", value: request.fighterid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fighterSchema },
        errorFactory: MmaV3Scores.MmaV3ScoresFighterProfileByFighterError,
      },
      options,
    );
  }

  /**
   * Fighter Profiles - All
   *
   * @remarks
   * A list of all fighters with their basic biographical information and career records.
   *
   * @returns Success
   *
   * @throws {@link MmaV3Scores.MmaV3ScoresFighterProfilesAllError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mmaV3ScoresFighterProfilesAll(
    request: MmaV3Scores.MmaV3ScoresFighterProfilesAllRequest,
    options?: RequestOptions,
  ): ApiPromise<Fighter[], MmaV3Scores.MmaV3ScoresFighterProfilesAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mma/scores/{format}/Fighters"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => fighterSchema)) },
        errorFactory: MmaV3Scores.MmaV3ScoresFighterProfilesAllError,
      },
      options,
    );
  }

  /**
   * Fighter Profiles (Basic) - All
   *
   * @remarks
   * A stripped-down list of all fighters with basic profile information, ideal for simple
   * applications.
   *
   * @returns Success
   *
   * @throws {@link MmaV3Scores.MmaV3ScoresFighterProfilesBasicAllError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mmaV3ScoresFighterProfilesBasicAll(
    request: MmaV3Scores.MmaV3ScoresFighterProfilesBasicAllRequest,
    options?: RequestOptions,
  ): ApiPromise<FighterBasic[], MmaV3Scores.MmaV3ScoresFighterProfilesBasicAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mma/scores/{format}/FightersBasic"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => fighterBasicSchema)) },
        errorFactory: MmaV3Scores.MmaV3ScoresFighterProfilesBasicAllError,
      },
      options,
    );
  }

  /**
   * Leagues
   *
   * @remarks
   * A list of all leagues (currently this returns just UFC.)
   *
   * @returns Success
   *
   * @throws {@link MmaV3Scores.MmaV3ScoresLeaguesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mmaV3ScoresLeagues(
    request: MmaV3Scores.MmaV3ScoresLeaguesRequest,
    options?: RequestOptions,
  ): ApiPromise<League[], MmaV3Scores.MmaV3ScoresLeaguesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mma/scores/{format}/Leagues"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => leagueSchema)) },
        errorFactory: MmaV3Scores.MmaV3ScoresLeaguesError,
      },
      options,
    );
  }

  /**
   * Schedules
   *
   * @remarks
   * A list of all upcoming Events, from which the Fights can be discovered.
   *
   * @returns Success
   *
   * @throws {@link MmaV3Scores.MmaV3ScoresSchedulesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mmaV3ScoresSchedules(
    request: MmaV3Scores.MmaV3ScoresSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<Event[], MmaV3Scores.MmaV3ScoresSchedulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mma/scores/{format}/Schedule/{league}/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "league", value: request.league, schema: s.string() },
          { name: "season", value: request.season, schema: s.string() },
        ],
        query: [],
        headers: [],
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
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The unique ID of this event. <br> Examples: <code>51</code>, <code>52</code>, etc. */
    eventid: string;
  };

  export class MmaV3ScoresEventError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MmaV3ScoresEventError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MmaV3ScoresFighterProfileByFighterRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Each fighter has a unique ID assigned by FantasyData. Fighter IDs can be determined by
     * pulling player related data. Example: <code>140000098</code>
     */
    fighterid: string;
  };

  export class MmaV3ScoresFighterProfileByFighterError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MmaV3ScoresFighterProfileByFighterError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MmaV3ScoresFighterProfilesAllRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class MmaV3ScoresFighterProfilesAllError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MmaV3ScoresFighterProfilesAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MmaV3ScoresFighterProfilesBasicAllRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class MmaV3ScoresFighterProfilesBasicAllError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MmaV3ScoresFighterProfilesBasicAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MmaV3ScoresLeaguesRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class MmaV3ScoresLeaguesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MmaV3ScoresLeaguesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MmaV3ScoresSchedulesRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The name of the league.<br>Examples: <code>UFC</code>, etc */
    league: string;
    /** Year of the season.<br>Examples: <code>2019</code>, <code>2020</code>, etc. */
    season: string;
  };

  export class MmaV3ScoresSchedulesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MmaV3ScoresSchedulesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
