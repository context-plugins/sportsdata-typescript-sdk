import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { boxScore6Schema, type BoxScore6 } from "../models/box-score6.js";
import { fantasyGame4Schema, type FantasyGame4 } from "../models/fantasy-game4.js";
import { Format, formatSchema } from "../models/format.js";
import { playerGameBasicSchema, type PlayerGameBasic } from "../models/player-game-basic.js";
import { playerGame7Schema, type PlayerGame7 } from "../models/player-game7.js";
import { roundSchema, type Round } from "../models/round.js";
import { teamGame7Schema, type TeamGame7 } from "../models/team-game7.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class SoccerV4Stats {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Box Score [Final]
   *
   * @remarks
   * Full statistical information for a specified game, down to the team and player stat level,
   * delivered after the game is complete.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Stats.SoccerV4StatsBoxScoreFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4StatsBoxScoreFinal(
    request: SoccerV4Stats.SoccerV4StatsBoxScoreFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore6[], SoccerV4Stats.SoccerV4StatsBoxScoreFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/soccer/stats/{format}/BoxScoreFinal/{competition}/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore6Schema)) },
        errorFactory: SoccerV4Stats.SoccerV4StatsBoxScoreFinalError,
      },
      options,
    );
  }

  /**
   * Box Score [Live & Final]
   *
   * @remarks
   * Full statistical information for a specified game, down to the team and player stat level,
   * delivered live during the game, called per individual game.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Stats.SoccerV4StatsBoxScoreLiveFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4StatsBoxScoreLiveFinal(
    request: SoccerV4Stats.SoccerV4StatsBoxScoreLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore6[], SoccerV4Stats.SoccerV4StatsBoxScoreLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/soccer/stats/{format}/BoxScore/{competition}/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore6Schema)) },
        errorFactory: SoccerV4Stats.SoccerV4StatsBoxScoreLiveFinalError,
      },
      options,
    );
  }

  /**
   * Box Scores - by Date [Final]
   *
   * @remarks
   * Full statistical information for a specified date for each game that took place, down to the
   * team and player stat level, delivered after the game is complete.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Stats.SoccerV4StatsBoxScoresByDateFinalError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4StatsBoxScoresByDateFinal(
    request: SoccerV4Stats.SoccerV4StatsBoxScoresByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore6[], SoccerV4Stats.SoccerV4StatsBoxScoresByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/soccer/stats/{format}/BoxScoresFinal/{competition}/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore6Schema)) },
        errorFactory: SoccerV4Stats.SoccerV4StatsBoxScoresByDateFinalError,
      },
      options,
    );
  }

  /**
   * Box Scores - by Date [Live & Final]
   *
   * @remarks
   * Full statistical information for a specified game, down to the team and player stat level,
   * delivered live during the games, called for all games on a given date within a competition.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Stats.SoccerV4StatsBoxScoresByDateLiveFinalError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4StatsBoxScoresByDateLiveFinal(
    request: SoccerV4Stats.SoccerV4StatsBoxScoresByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore6[], SoccerV4Stats.SoccerV4StatsBoxScoresByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/soccer/stats/{format}/BoxScoresByDate/{competition}/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore6Schema)) },
        errorFactory: SoccerV4Stats.SoccerV4StatsBoxScoresByDateLiveFinalError,
      },
      options,
    );
  }

  /**
   * Box Scores Delta - by Date
   *
   * @remarks
   * This method returns all box scores for a given date in a given competition, but only returns
   * player stats that have changed in the last X minutes as specified in your API call. By
   * definition this is a live endpoint, not final.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Stats.SoccerV4StatsBoxScoresDeltaByDateError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4StatsBoxScoresDeltaByDate(
    request: SoccerV4Stats.SoccerV4StatsBoxScoresDeltaByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore6[], SoccerV4Stats.SoccerV4StatsBoxScoresDeltaByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/stats/{format}/BoxScoresDeltaByDate/{competition}/{date}/{minutes}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
          { name: "minutes", value: request.minutes, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore6Schema)) },
        errorFactory: SoccerV4Stats.SoccerV4StatsBoxScoresDeltaByDateError,
      },
      options,
    );
  }

  /**
   * Fantasy Points - by Date
   *
   * @remarks
   * A simple list of fantasy points awarded to players who took part in a given competition's games
   * on a given date.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Stats.SoccerV4StatsFantasyPointsByDateError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4StatsFantasyPointsByDate(
    request: SoccerV4Stats.SoccerV4StatsFantasyPointsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<FantasyGame4[], SoccerV4Stats.SoccerV4StatsFantasyPointsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/stats/{format}/FantasyGameStatsByDate/{competition}/{date}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => fantasyGame4Schema)) },
        errorFactory: SoccerV4Stats.SoccerV4StatsFantasyPointsByDateError,
      },
      options,
    );
  }

  /**
   * Lineups - by Date
   *
   * @remarks
   * Projected and confirmed starting XIs and substitute benches for a given competition on a given
   * date.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Stats.SoccerV4StatsLineupsByDateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4StatsLineupsByDate(
    request: SoccerV4Stats.SoccerV4StatsLineupsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGameBasic[], SoccerV4Stats.SoccerV4StatsLineupsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/soccer/stats/{format}/LineupsByDate/{competition}/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameBasicSchema)) },
        errorFactory: SoccerV4Stats.SoccerV4StatsLineupsByDateError,
      },
      options,
    );
  }

  /**
   * Player Game Stats - by Date [Final]
   *
   * @remarks
   * Returns the box score statistical record for all involved players across all teams' games for a
   * given competition on a given date after each game has concluded.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Stats.SoccerV4StatsPlayerGameStatsByDateFinalError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4StatsPlayerGameStatsByDateFinal(
    request: SoccerV4Stats.SoccerV4StatsPlayerGameStatsByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame7[], SoccerV4Stats.SoccerV4StatsPlayerGameStatsByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/stats/{format}/PlayerGameStatsByDateFinal/{competition}/{date}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame7Schema)) },
        errorFactory: SoccerV4Stats.SoccerV4StatsPlayerGameStatsByDateFinalError,
      },
      options,
    );
  }

  /**
   * Player Game Stats - by Date [Live & Final]
   *
   * @remarks
   * Returns the box score statistical record for all involved players across all teams' games on a
   * given date in a given competition, both live and after each game has concluded.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Stats.SoccerV4StatsPlayerGameStatsByDateLiveFinalError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4StatsPlayerGameStatsByDateLiveFinal(
    request: SoccerV4Stats.SoccerV4StatsPlayerGameStatsByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame7[], SoccerV4Stats.SoccerV4StatsPlayerGameStatsByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/stats/{format}/PlayerGameStatsByDate/{competition}/{date}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame7Schema)) },
        errorFactory: SoccerV4Stats.SoccerV4StatsPlayerGameStatsByDateLiveFinalError,
      },
      options,
    );
  }

  /**
   * Player Season Stats
   *
   * @remarks
   * Returns all season-long stats (i.e. the season total, not each individual game record) for all
   * players for a given season.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Stats.SoccerV4StatsPlayerSeasonStatsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4StatsPlayerSeasonStats(
    request: SoccerV4Stats.SoccerV4StatsPlayerSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<Round[], SoccerV4Stats.SoccerV4StatsPlayerSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/stats/{format}/PlayerSeasonStats/{competition}/{season}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "season", value: request.season, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => roundSchema)) },
        errorFactory: SoccerV4Stats.SoccerV4StatsPlayerSeasonStatsError,
      },
      options,
    );
  }

  /**
   * Team Game Stats - by Date [Final]
   *
   * @remarks
   * Returns the box score statistical record team-wide (aggregated from all players) for a games in
   * a given competition on a given date, updated as each game has concluded.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Stats.SoccerV4StatsTeamGameStatsByDateFinalError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4StatsTeamGameStatsByDateFinal(
    request: SoccerV4Stats.SoccerV4StatsTeamGameStatsByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame7[], SoccerV4Stats.SoccerV4StatsTeamGameStatsByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/stats/{format}/TeamGameStatsByDateFinal/{competition}/{date}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame7Schema)) },
        errorFactory: SoccerV4Stats.SoccerV4StatsTeamGameStatsByDateFinalError,
      },
      options,
    );
  }
}

export namespace SoccerV4Stats {
  export type SoccerV4StatsBoxScoreFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
    /**
     * The GameID of a Soccer game. GameIDs can be found in the Games API. Valid entries are
     * <code>702</code>, <code>1274</code>, etc.
     */
    gameid: string;
  };

  export class SoccerV4StatsBoxScoreFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4StatsBoxScoreFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4StatsBoxScoreLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
    /**
     * The GameID of a Soccer game. GameIDs can be found in the Games API. Valid entries are
     * <code>702</code>, <code>1274</code>, etc.
     */
    gameid: string;
  };

  export class SoccerV4StatsBoxScoreLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4StatsBoxScoreLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4StatsBoxScoresByDateFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
    /** The date of the game(s). <br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>. */
    date: string;
  };

  export class SoccerV4StatsBoxScoresByDateFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4StatsBoxScoresByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4StatsBoxScoresByDateLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
    /** The date of the game(s). <br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>. */
    date: string;
  };

  export class SoccerV4StatsBoxScoresByDateLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4StatsBoxScoresByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4StatsBoxScoresDeltaByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
    /** The date of the game(s). <br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>. */
    date: string;
    /**
     * Only returns player statistics that have changed in the last X minutes. You specify how many
     * minutes in time to go back. Valid entries are: <code>1</code>, <code>2</code> ...
     * <code>all</code>.
     */
    minutes: string;
  };

  export class SoccerV4StatsBoxScoresDeltaByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4StatsBoxScoresDeltaByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4StatsFantasyPointsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
    /** The date of the game(s). <br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>. */
    date: string;
  };

  export class SoccerV4StatsFantasyPointsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4StatsFantasyPointsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4StatsLineupsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
    /** The date of the game(s). <br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>. */
    date: string;
  };

  export class SoccerV4StatsLineupsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4StatsLineupsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4StatsPlayerGameStatsByDateFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
    /** The date of the game(s). <br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>. */
    date: string;
  };

  export class SoccerV4StatsPlayerGameStatsByDateFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4StatsPlayerGameStatsByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4StatsPlayerGameStatsByDateLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
    /** The date of the game(s). <br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>. */
    date: string;
  };

  export class SoccerV4StatsPlayerGameStatsByDateLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4StatsPlayerGameStatsByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4StatsPlayerSeasonStatsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
    /** Year of the season<br>Examples: <code>2020</code>, <code>2021</code>, etc. */
    season: string;
  };

  export class SoccerV4StatsPlayerSeasonStatsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4StatsPlayerSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4StatsTeamGameStatsByDateFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
    /** The date of the game(s). <br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>. */
    date: string;
  };

  export class SoccerV4StatsTeamGameStatsByDateFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4StatsTeamGameStatsByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
