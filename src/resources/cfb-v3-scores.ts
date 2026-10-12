import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { conferenceSchema, type Conference } from "../models/conference.js";
import { Format, formatSchema } from "../models/format.js";
import { game8Schema, type Game8 } from "../models/game8.js";
import { playerBasic4Schema, type PlayerBasic4 } from "../models/player-basic4.js";
import { player4Schema, type Player4 } from "../models/player4.js";
import { scheduleBasic4Schema, type ScheduleBasic4 } from "../models/schedule-basic4.js";
import { scoreBasic4Schema, type ScoreBasic4 } from "../models/score-basic4.js";
import { season2Schema, type Season2 } from "../models/season2.js";
import { stadium5Schema, type Stadium5 } from "../models/stadium5.js";
import { teamBasic1Schema, type TeamBasic1 } from "../models/team-basic1.js";
import { teamGame4Schema, type TeamGame4 } from "../models/team-game4.js";
import { teamSeason4Schema, type TeamSeason4 } from "../models/team-season4.js";
import { team4Schema, type Team4 } from "../models/team4.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class CfbV3Scores {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Are Games In Progress
   *
   * @remarks
   * Returns <code>true</code> if there is at least one game being played at the time of the request
   * or <code>false</code> if there are none.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Scores.CfbV3ScoresAreGamesInProgressError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3ScoresAreGamesInProgress(
    request: CfbV3Scores.CfbV3ScoresAreGamesInProgressRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean, CfbV3Scores.CfbV3ScoresAreGamesInProgressError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/scores/{format}/AreAnyGamesInProgress"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.boolean() },
        errorFactory: CfbV3Scores.CfbV3ScoresAreGamesInProgressError,
      },
      options,
    );
  }

  /**
   * Conference Hierarchy
   *
   * @remarks
   * A list of all conferences and their associated teams. Standings can be found here for each
   * conference.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Scores.CfbV3ScoresConferenceHierarchyError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3ScoresConferenceHierarchy(
    request: CfbV3Scores.CfbV3ScoresConferenceHierarchyRequest,
    options?: RequestOptions,
  ): ApiPromise<Conference[], CfbV3Scores.CfbV3ScoresConferenceHierarchyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/scores/{format}/LeagueHierarchy"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => conferenceSchema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresConferenceHierarchyError,
      },
      options,
    );
  }

  /**
   * Games - by Date [Live & Final]
   *
   * @remarks
   * Full scores and gameday info delivered live and post-game for a given date. Live data includes
   * down and distance, as well as game clock. Gameday info includes referee, weather, TV channel
   * etc.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Scores.CfbV3ScoresGamesByDateLiveFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3ScoresGamesByDateLiveFinal(
    request: CfbV3Scores.CfbV3ScoresGamesByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game8[], CfbV3Scores.CfbV3ScoresGamesByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/scores/{format}/GamesByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game8Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresGamesByDateLiveFinalError,
      },
      options,
    );
  }

  /**
   * Games - by Week [Final]
   *
   * @remarks
   * Full scores and gameday info, including weather, referee, infotainment odds, as well as all of
   * the quarter scores and full-time score, delivered as the game ends.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Scores.CfbV3ScoresGamesByWeekFinalError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3ScoresGamesByWeekFinal(
    request: CfbV3Scores.CfbV3ScoresGamesByWeekFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game8[], CfbV3Scores.CfbV3ScoresGamesByWeekFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/scores/{format}/GamesByWeekFinal/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game8Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresGamesByWeekFinalError,
      },
      options,
    );
  }

  /**
   * Games - by Week [Live & Final]
   *
   * @remarks
   * Full scores and gameday info delivered live and post-game for a given gameweek. Live data
   * includes down and distance, as well as game clock. Gameday info includes referee, weather, TV
   * channel etc.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Scores.CfbV3ScoresGamesByWeekLiveFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3ScoresGamesByWeekLiveFinal(
    request: CfbV3Scores.CfbV3ScoresGamesByWeekLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game8[], CfbV3Scores.CfbV3ScoresGamesByWeekLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/scores/{format}/GamesByWeek/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game8Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresGamesByWeekLiveFinalError,
      },
      options,
    );
  }

  /**
   * Games (Basic) - by Date [Live & Final]
   *
   * @remarks
   * This endpoint simply delivers quarter, clock, and total score live; no down and distance and no
   * gameday info such as weather.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Scores.CfbV3ScoresGamesBasicByDateLiveFinalError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3ScoresGamesBasicByDateLiveFinal(
    request: CfbV3Scores.CfbV3ScoresGamesBasicByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic4[], CfbV3Scores.CfbV3ScoresGamesBasicByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/scores/{format}/ScoresBasic/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasic4Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresGamesBasicByDateLiveFinalError,
      },
      options,
    );
  }

  /**
   * Games (Basic) - by Week [Final]
   *
   * @remarks
   * A slimmed-down score endpoint, giving just the quarter scores and final score, for simple
   * applications, delivered as the game ends, called by week.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Scores.CfbV3ScoresGamesBasicByWeekFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3ScoresGamesBasicByWeekFinal(
    request: CfbV3Scores.CfbV3ScoresGamesBasicByWeekFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic4[], CfbV3Scores.CfbV3ScoresGamesBasicByWeekFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/scores/{format}/ScoresBasicFinal/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasic4Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresGamesBasicByWeekFinalError,
      },
      options,
    );
  }

  /**
   * Games (Basic) by Date - [Final]
   *
   * @remarks
   * A slimmed-down score endpoint, giving just the quarter scores and final score, for simple
   * applications, delivered as the game ends, called by date.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Scores.CfbV3ScoresGamesBasicByDateFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3ScoresGamesBasicByDateFinal(
    request: CfbV3Scores.CfbV3ScoresGamesBasicByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic4[], CfbV3Scores.CfbV3ScoresGamesBasicByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/scores/{format}/ScoresBasicFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasic4Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresGamesBasicByDateFinalError,
      },
      options,
    );
  }

  /**
   * Games by Date - [Final]
   *
   * @remarks
   * Full scores and gameday info, including weather, referee, infotainment odds, as well as all of
   * the quarter scores and full-time score as the game ends.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Scores.CfbV3ScoresGamesByDateFinalError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3ScoresGamesByDateFinal(
    request: CfbV3Scores.CfbV3ScoresGamesByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game8[], CfbV3Scores.CfbV3ScoresGamesByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/scores/{format}/GamesByDateFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game8Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresGamesByDateFinalError,
      },
      options,
    );
  }

  /**
   * Player Details - by Active
   *
   * @remarks
   * Full player bio and details, including injury notes, for all active players.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Scores.CfbV3ScoresPlayerDetailsByActiveError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3ScoresPlayerDetailsByActive(
    request: CfbV3Scores.CfbV3ScoresPlayerDetailsByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Player4[], CfbV3Scores.CfbV3ScoresPlayerDetailsByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/scores/{format}/Players"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player4Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresPlayerDetailsByActiveError,
      },
      options,
    );
  }

  /**
   * Player Details - by Active
   *
   * @remarks
   * Full player bio and details, including injury notes, for all active players.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Scores.CfbV3ScoresPlayerDetailsByActive2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3ScoresPlayerDetailsByActive2(
    request: CfbV3Scores.CfbV3ScoresPlayerDetailsByActive2Request,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic4[], CfbV3Scores.CfbV3ScoresPlayerDetailsByActive2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/scores/{format}/PlayersByActive"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasic4Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresPlayerDetailsByActive2Error,
      },
      options,
    );
  }

  /**
   * Player Details - by Injured
   *
   * @remarks
   * This endpoint provides all currently injured college football players, along with injury
   * details.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Scores.CfbV3ScoresPlayerDetailsByInjuredError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3ScoresPlayerDetailsByInjured(
    request: CfbV3Scores.CfbV3ScoresPlayerDetailsByInjuredRequest,
    options?: RequestOptions,
  ): ApiPromise<Player4[], CfbV3Scores.CfbV3ScoresPlayerDetailsByInjuredError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/scores/{format}/InjuredPlayers"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player4Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresPlayerDetailsByInjuredError,
      },
      options,
    );
  }

  /**
   * Player Details - by Team
   *
   * @remarks
   * Full player bio and details, including injury notes, for all available players by team.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Scores.CfbV3ScoresPlayerDetailsByTeamError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3ScoresPlayerDetailsByTeam(
    request: CfbV3Scores.CfbV3ScoresPlayerDetailsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<Player4[], CfbV3Scores.CfbV3ScoresPlayerDetailsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/scores/{format}/Players/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "team", value: request.team, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player4Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresPlayerDetailsByTeamError,
      },
      options,
    );
  }

  /**
   * Player Profiles - by Team
   *
   * @remarks
   * Roster information for a given team. Player profiles include basic biographical information,
   * position, college, and current team (if attached to a team.) Specify a team tricode parameter
   * to receive all players currently on that team.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Scores.CfbV3ScoresPlayerProfilesByTeamError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3ScoresPlayerProfilesByTeam(
    request: CfbV3Scores.CfbV3ScoresPlayerProfilesByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic4[], CfbV3Scores.CfbV3ScoresPlayerProfilesByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/scores/{format}/PlayersBasic/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "team", value: request.team, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasic4Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresPlayerProfilesByTeamError,
      },
      options,
    );
  }

  /**
   * Schedules
   *
   * @remarks
   * Home and away teams, date and time, season type and week etc. are included. Also includes
   * gameday information. This includes full stadium information (capacity, lat/long, surface etc.),
   * top-line betting information (spread, moneyline, total), weather conditions, and broadcast
   * information.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Scores.CfbV3ScoresSchedulesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3ScoresSchedules(
    request: CfbV3Scores.CfbV3ScoresSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<Game8[], CfbV3Scores.CfbV3ScoresSchedulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/scores/{format}/Games/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game8Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresSchedulesError,
      },
      options,
    );
  }

  /**
   * Schedules (Basic)
   *
   * @remarks
   * A lightweight schedule endpoint without gameday information. Home and away teams, the date and
   * time of the game, and season type, week etc. are included. Ideal for the most basic information
   * required to build a schedule.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Scores.CfbV3ScoresSchedulesBasicError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3ScoresSchedulesBasic(
    request: CfbV3Scores.CfbV3ScoresSchedulesBasicRequest,
    options?: RequestOptions,
  ): ApiPromise<ScheduleBasic4[], CfbV3Scores.CfbV3ScoresSchedulesBasicError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/scores/{format}/SchedulesBasic/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scheduleBasic4Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresSchedulesBasicError,
      },
      options,
    );
  }

  /**
   * Season Current
   *
   * @remarks
   * Year of the current season. This value changes at the start of the new league year. For leagues
   * that run over two years, this is the year the season starts, not ends.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Scores.CfbV3ScoresSeasonCurrentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3ScoresSeasonCurrent(
    request: CfbV3Scores.CfbV3ScoresSeasonCurrentRequest,
    options?: RequestOptions,
  ): ApiPromise<number, CfbV3Scores.CfbV3ScoresSeasonCurrentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/scores/{format}/CurrentSeason"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.int() },
        errorFactory: CfbV3Scores.CfbV3ScoresSeasonCurrentError,
      },
      options,
    );
  }

  /**
   * Season Current - Details
   *
   * @remarks
   * The current season year, its start and end years, season type, week etc.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Scores.CfbV3ScoresSeasonCurrentDetailsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3ScoresSeasonCurrentDetails(
    request: CfbV3Scores.CfbV3ScoresSeasonCurrentDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<Season2, CfbV3Scores.CfbV3ScoresSeasonCurrentDetailsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/scores/{format}/CurrentSeasonDetails"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: season2Schema },
        errorFactory: CfbV3Scores.CfbV3ScoresSeasonCurrentDetailsError,
      },
      options,
    );
  }

  /**
   * Season Type - Current
   *
   * @remarks
   * The current type of season (e.g. REG, POST for regular or playoff.)
   *
   * @returns Success
   *
   * @throws {@link CfbV3Scores.CfbV3ScoresSeasonTypeCurrentError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3ScoresSeasonTypeCurrent(
    request: CfbV3Scores.CfbV3ScoresSeasonTypeCurrentRequest,
    options?: RequestOptions,
  ): ApiPromise<string | null, CfbV3Scores.CfbV3ScoresSeasonTypeCurrentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/scores/{format}/CurrentSeasonType"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.nullable(s.string()) },
        errorFactory: CfbV3Scores.CfbV3ScoresSeasonTypeCurrentError,
      },
      options,
    );
  }

  /**
   * Stadiums
   *
   * @remarks
   * Returns all stadiums in the league with capacity, surface, latitude/longitude, city and state
   * (and where applicable country.)
   *
   * @returns Success
   *
   * @throws {@link CfbV3Scores.CfbV3ScoresStadiumsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3ScoresStadiums(
    request: CfbV3Scores.CfbV3ScoresStadiumsRequest,
    options?: RequestOptions,
  ): ApiPromise<Stadium5[], CfbV3Scores.CfbV3ScoresStadiumsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/scores/{format}/Stadiums"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => stadium5Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresStadiumsError,
      },
      options,
    );
  }

  /**
   * Team Game Logs - by Season
   *
   * @remarks
   * Game by game log of total team statistics.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Scores.CfbV3ScoresTeamGameLogsBySeasonError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3ScoresTeamGameLogsBySeason(
    request: CfbV3Scores.CfbV3ScoresTeamGameLogsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame4[], CfbV3Scores.CfbV3ScoresTeamGameLogsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/cfb/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "teamid", value: request.teamid, schema: s.string() },
          { name: "numberofgames", value: request.numberofgames, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame4Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresTeamGameLogsBySeasonError,
      },
      options,
    );
  }

  /**
   * Team Game Stats - by Week [Live & Final]
   *
   * @remarks
   * Returns the box score statistical record team-wide (aggregated from all players) for a all
   * teams' games in a given week, both live and post-game.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Scores.CfbV3ScoresTeamGameStatsByWeekLiveFinalError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3ScoresTeamGameStatsByWeekLiveFinal(
    request: CfbV3Scores.CfbV3ScoresTeamGameStatsByWeekLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame4[], CfbV3Scores.CfbV3ScoresTeamGameStatsByWeekLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/scores/{format}/TeamGameStatsByWeek/{season}/{week}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "week", value: request.week, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame4Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresTeamGameStatsByWeekLiveFinalError,
      },
      options,
    );
  }

  /**
   * Team Profiles - All
   *
   * @remarks
   * Full team information: team name, school and city, conference and division, and colors. Also
   * contains basic fantasy info such as IDs as well as full stadium data. This endpoint returns all
   * teams regardless of current active status.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Scores.CfbV3ScoresTeamProfilesAllError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3ScoresTeamProfilesAll(
    request: CfbV3Scores.CfbV3ScoresTeamProfilesAllRequest,
    options?: RequestOptions,
  ): ApiPromise<Team4[], CfbV3Scores.CfbV3ScoresTeamProfilesAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/scores/{format}/Teams"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => team4Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresTeamProfilesAllError,
      },
      options,
    );
  }

  /**
   * Team Season Stats & Standings
   *
   * @remarks
   * Returns all season-long stats (i.e. the season total, not each individual game record) for all
   * teams (aggregated from all players) for a given season. Also includes their standing
   * information.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Scores.CfbV3ScoresTeamSeasonStatsStandingsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3ScoresTeamSeasonStatsStandings(
    request: CfbV3Scores.CfbV3ScoresTeamSeasonStatsStandingsRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamSeason4[], CfbV3Scores.CfbV3ScoresTeamSeasonStatsStandingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/scores/{format}/TeamSeasonStats/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamSeason4Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresTeamSeasonStatsStandingsError,
      },
      options,
    );
  }

  /**
   * Teams (Basic) - All
   *
   * @remarks
   * The most basic top-line team information, such as team name and city, conference and division,
   * stadium ID, coach info, and team colors. Returns all teams regardless of current active status.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Scores.CfbV3ScoresTeamsBasicAllError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3ScoresTeamsBasicAll(
    request: CfbV3Scores.CfbV3ScoresTeamsBasicAllRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamBasic1[], CfbV3Scores.CfbV3ScoresTeamsBasicAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/scores/{format}/TeamsBasic"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamBasic1Schema)) },
        errorFactory: CfbV3Scores.CfbV3ScoresTeamsBasicAllError,
      },
      options,
    );
  }

  /**
   * Week Current
   *
   * @remarks
   * Number of the current week of the season. This value usually changes on Saturday into Sunday
   * overnight, but in the rare case of a rescheduled or special game with a non-standard gameday
   * this could change.
   *
   * @returns Success
   *
   * @throws {@link CfbV3Scores.CfbV3ScoresWeekCurrentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cfbV3ScoresWeekCurrent(
    request: CfbV3Scores.CfbV3ScoresWeekCurrentRequest,
    options?: RequestOptions,
  ): ApiPromise<number | null, CfbV3Scores.CfbV3ScoresWeekCurrentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cfb/scores/{format}/CurrentWeek"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.nullable(s.int()) },
        errorFactory: CfbV3Scores.CfbV3ScoresWeekCurrentError,
      },
      options,
    );
  }
}

export namespace CfbV3Scores {
  export type CfbV3ScoresAreGamesInProgressRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class CfbV3ScoresAreGamesInProgressError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3ScoresAreGamesInProgressError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresConferenceHierarchyRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class CfbV3ScoresConferenceHierarchyError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3ScoresConferenceHierarchyError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresGamesByDateLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2016-SEP-01</code>, <code>2017-SEP-10</code>.
     */
    date: string;
  };

  export class CfbV3ScoresGamesByDateLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3ScoresGamesByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresGamesByWeekFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2015</code>, <code>2016</code>, etc. */
    season: string;
    /**
     * The week of the game(s). <br>Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.
     */
    week: string;
  };

  export class CfbV3ScoresGamesByWeekFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3ScoresGamesByWeekFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresGamesByWeekLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2015</code>, <code>2016</code>, etc. */
    season: string;
    /**
     * The week of the game(s). <br>Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.
     */
    week: string;
  };

  export class CfbV3ScoresGamesByWeekLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3ScoresGamesByWeekLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresGamesBasicByDateLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2016-SEP-01</code>, <code>2017-SEP-10</code>.
     */
    date: string;
  };

  export class CfbV3ScoresGamesBasicByDateLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3ScoresGamesBasicByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresGamesBasicByWeekFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2015</code>, <code>2016</code>, etc. */
    season: string;
    /**
     * The week of the game(s). <br>Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.
     */
    week: string;
  };

  export class CfbV3ScoresGamesBasicByWeekFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3ScoresGamesBasicByWeekFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresGamesBasicByDateFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the games.<br>Examples: <code>2021-SEP-12</code>, <code>2021-NOV-28</code>. */
    date: string;
  };

  export class CfbV3ScoresGamesBasicByDateFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3ScoresGamesBasicByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresGamesByDateFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2016-SEP-01</code>, <code>2017-SEP-10</code>.
     */
    date: string;
  };

  export class CfbV3ScoresGamesByDateFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3ScoresGamesByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresPlayerDetailsByActiveRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class CfbV3ScoresPlayerDetailsByActiveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3ScoresPlayerDetailsByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresPlayerDetailsByActive2Request = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class CfbV3ScoresPlayerDetailsByActive2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3ScoresPlayerDetailsByActive2Error> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresPlayerDetailsByInjuredRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class CfbV3ScoresPlayerDetailsByInjuredError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3ScoresPlayerDetailsByInjuredError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresPlayerDetailsByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The abbreviation of the requested team. <br>Examples: <code>SF</code>, <code>NYY</code>. */
    team: string;
  };

  export class CfbV3ScoresPlayerDetailsByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3ScoresPlayerDetailsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresPlayerProfilesByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The abbreviation of the requested team. <br>Examples: <code>SF</code>, <code>NYY</code>. */
    team: string;
  };

  export class CfbV3ScoresPlayerProfilesByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3ScoresPlayerProfilesByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresSchedulesRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season (with optional season type).<br>Examples: <code>2018</code>,
     * <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.
     */
    season: string;
  };

  export class CfbV3ScoresSchedulesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3ScoresSchedulesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresSchedulesBasicRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season (with optional season type).<br>Examples: <code>2018</code>,
     * <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.
     */
    season: string;
  };

  export class CfbV3ScoresSchedulesBasicError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3ScoresSchedulesBasicError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresSeasonCurrentRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class CfbV3ScoresSeasonCurrentError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3ScoresSeasonCurrentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresSeasonCurrentDetailsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class CfbV3ScoresSeasonCurrentDetailsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3ScoresSeasonCurrentDetailsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresSeasonTypeCurrentRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class CfbV3ScoresSeasonTypeCurrentError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3ScoresSeasonTypeCurrentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresStadiumsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class CfbV3ScoresStadiumsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3ScoresStadiumsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresTeamGameLogsBySeasonRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Season to get games from. Example <code>2019POST</code>, <code>2020</code> */
    season: string;
    /** Unique ID of team. Example <code> 1 </code> */
    teamid: string;
    /** How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code> */
    numberofgames: string;
  };

  export class CfbV3ScoresTeamGameLogsBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3ScoresTeamGameLogsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresTeamGameStatsByWeekLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2015</code>, <code>2016</code>, etc. */
    season: string;
    /**
     * The week of the game(s). <br>Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc.
     */
    week: string;
  };

  export class CfbV3ScoresTeamGameStatsByWeekLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3ScoresTeamGameStatsByWeekLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresTeamProfilesAllRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class CfbV3ScoresTeamProfilesAllError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3ScoresTeamProfilesAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresTeamSeasonStatsStandingsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season (with optional season type).<br>Examples: <code>2017</code>,
     * <code>2017POST</code>, <code>2018</code>.
     */
    season: string;
  };

  export class CfbV3ScoresTeamSeasonStatsStandingsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3ScoresTeamSeasonStatsStandingsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresTeamsBasicAllRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class CfbV3ScoresTeamsBasicAllError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3ScoresTeamsBasicAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CfbV3ScoresWeekCurrentRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class CfbV3ScoresWeekCurrentError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CfbV3ScoresWeekCurrentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
