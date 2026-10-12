import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { Format, formatSchema } from "../models/format.js";
import { game6Schema, type Game6 } from "../models/game6.js";
import { newsSchema, type News } from "../models/news.js";
import { playerBasic2Schema, type PlayerBasic2 } from "../models/player-basic2.js";
import { player2Schema, type Player2 } from "../models/player2.js";
import { scheduleBasic2Schema, type ScheduleBasic2 } from "../models/schedule-basic2.js";
import { scoreBasic2Schema, type ScoreBasic2 } from "../models/score-basic2.js";
import { season1Schema, type Season1 } from "../models/season1.js";
import { stadium3Schema, type Stadium3 } from "../models/stadium3.js";
import { standing2Schema, type Standing2 } from "../models/standing2.js";
import { teamGame2Schema, type TeamGame2 } from "../models/team-game2.js";
import { teamSeason2Schema, type TeamSeason2 } from "../models/team-season2.js";
import { team2Schema, type Team2 } from "../models/team2.js";
import { transactionSchema, type Transaction } from "../models/transaction.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class MlbV3Scores {
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
   * @throws {@link MlbV3Scores.MlbV3ScoresAreGamesInProgressError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ScoresAreGamesInProgress(
    request: MlbV3Scores.MlbV3ScoresAreGamesInProgressRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean, MlbV3Scores.MlbV3ScoresAreGamesInProgressError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/scores/{format}/AreAnyGamesInProgress"),
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
        errorFactory: MlbV3Scores.MlbV3ScoresAreGamesInProgressError,
      },
      options,
    );
  }

  /**
   * Games - by Date [Final]
   *
   * @remarks
   * Full scores and gameday info, including weather, referee, infotainment odds, as well as all of
   * the innings scores and full-time score, delivered as the game ends.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Scores.MlbV3ScoresGamesByDateFinalError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ScoresGamesByDateFinal(
    request: MlbV3Scores.MlbV3ScoresGamesByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game6[], MlbV3Scores.MlbV3ScoresGamesByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/scores/{format}/GamesByDateFinal/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => game6Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresGamesByDateFinalError,
      },
      options,
    );
  }

  /**
   * Games - by Date [Live & Final]
   *
   * @remarks
   * Full scores and gameday info delivered live and post-game. Live data includes innings, scores,
   * pitch count etc. Gameday info includes referee, weather, TV channel etc.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Scores.MlbV3ScoresGamesByDateLiveFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ScoresGamesByDateLiveFinal(
    request: MlbV3Scores.MlbV3ScoresGamesByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game6[], MlbV3Scores.MlbV3ScoresGamesByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/scores/{format}/GamesByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => game6Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresGamesByDateLiveFinalError,
      },
      options,
    );
  }

  /**
   * Games (Basic) - by Date [Final]
   *
   * @remarks
   * A slimmed-down score endpoint, giving just the innings scores and final score, for simple
   * applications. Delivered after the game ends.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Scores.MlbV3ScoresGamesBasicByDateFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ScoresGamesBasicByDateFinal(
    request: MlbV3Scores.MlbV3ScoresGamesBasicByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic2[], MlbV3Scores.MlbV3ScoresGamesBasicByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/scores/{format}/ScoresBasicFinal/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasic2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresGamesBasicByDateFinalError,
      },
      options,
    );
  }

  /**
   * Games (Basic) - by Date [Live & Final]
   *
   * @remarks
   * This endpoint simply delivers the innings count and total score live; no down and distance and
   * no gameday info such as weather.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Scores.MlbV3ScoresGamesBasicByDateLiveFinalError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ScoresGamesBasicByDateLiveFinal(
    request: MlbV3Scores.MlbV3ScoresGamesBasicByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic2[], MlbV3Scores.MlbV3ScoresGamesBasicByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/scores/{format}/ScoresBasic/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasic2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresGamesBasicByDateLiveFinalError,
      },
      options,
    );
  }

  /**
   * News
   *
   * @remarks
   * Basic RotoBaller news feed, with limited stories available - usually 0-1 stories per day. Ideal
   * for test purposes.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Scores.MlbV3ScoresNewsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ScoresNews(
    request: MlbV3Scores.MlbV3ScoresNewsRequest,
    options?: RequestOptions,
  ): ApiPromise<News[], MlbV3Scores.MlbV3ScoresNewsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/scores/{format}/News"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => newsSchema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresNewsError,
      },
      options,
    );
  }

  /**
   * News - by Date
   *
   * @remarks
   * Basic RotoBaller news feed, with limited stories available - usually 0-1 stories per day. Ideal
   * for test purposes.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Scores.MlbV3ScoresNewsByDateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ScoresNewsByDate(
    request: MlbV3Scores.MlbV3ScoresNewsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<News[], MlbV3Scores.MlbV3ScoresNewsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/scores/{format}/NewsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => newsSchema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresNewsByDateError,
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
   * @throws {@link MlbV3Scores.MlbV3ScoresPlayerDetailsByActiveError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ScoresPlayerDetailsByActive(
    request: MlbV3Scores.MlbV3ScoresPlayerDetailsByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Player2[], MlbV3Scores.MlbV3ScoresPlayerDetailsByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/scores/{format}/Players"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresPlayerDetailsByActiveError,
      },
      options,
    );
  }

  /**
   * Player Details - by Free Agents
   *
   * @remarks
   * Full player bio and details, including injury notes, for all available free agents unattached
   * to a team.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Scores.MlbV3ScoresPlayerDetailsByFreeAgentsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ScoresPlayerDetailsByFreeAgents(
    request: MlbV3Scores.MlbV3ScoresPlayerDetailsByFreeAgentsRequest,
    options?: RequestOptions,
  ): ApiPromise<Player2[], MlbV3Scores.MlbV3ScoresPlayerDetailsByFreeAgentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/scores/{format}/FreeAgents"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresPlayerDetailsByFreeAgentsError,
      },
      options,
    );
  }

  /**
   * Player Profiles - by Active
   *
   * @remarks
   * A more stripped-down list of players on a given team, for simple applications, including all
   * active players.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Scores.MlbV3ScoresPlayerProfilesByActiveError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ScoresPlayerProfilesByActive(
    request: MlbV3Scores.MlbV3ScoresPlayerProfilesByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic2[], MlbV3Scores.MlbV3ScoresPlayerProfilesByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/scores/{format}/PlayersByActive"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasic2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresPlayerProfilesByActiveError,
      },
      options,
    );
  }

  /**
   * Player Profiles - by Free Agents
   *
   * @remarks
   * A more stripped-down list of players on a given team, for simple applications, sorted by free
   * agents.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Scores.MlbV3ScoresPlayerProfilesByFreeAgentsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ScoresPlayerProfilesByFreeAgents(
    request: MlbV3Scores.MlbV3ScoresPlayerProfilesByFreeAgentsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic2[], MlbV3Scores.MlbV3ScoresPlayerProfilesByFreeAgentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/scores/{format}/PlayersByFreeAgents"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasic2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresPlayerProfilesByFreeAgentsError,
      },
      options,
    );
  }

  /**
   * Player Profiles - by Team
   *
   * @remarks
   * A more stripped-down list of players on a given team, for simple applications.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Scores.MlbV3ScoresPlayerProfilesByTeamError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ScoresPlayerProfilesByTeam(
    request: MlbV3Scores.MlbV3ScoresPlayerProfilesByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic2[], MlbV3Scores.MlbV3ScoresPlayerProfilesByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/scores/{format}/PlayersBasic/{team}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasic2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresPlayerProfilesByTeamError,
      },
      options,
    );
  }

  /**
   * Players Details - by Team
   *
   * @remarks
   * Full player bio and details, including injury notes, for all available players by team.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Scores.MlbV3ScoresPlayersDetailsByTeamError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ScoresPlayersDetailsByTeam(
    request: MlbV3Scores.MlbV3ScoresPlayersDetailsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<Player2[], MlbV3Scores.MlbV3ScoresPlayersDetailsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/scores/{format}/Players/{team}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => player2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresPlayersDetailsByTeamError,
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
   * @throws {@link MlbV3Scores.MlbV3ScoresSchedulesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ScoresSchedules(
    request: MlbV3Scores.MlbV3ScoresSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<Game6[], MlbV3Scores.MlbV3ScoresSchedulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/scores/{format}/Games/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => game6Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresSchedulesError,
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
   * @throws {@link MlbV3Scores.MlbV3ScoresSchedulesBasicError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ScoresSchedulesBasic(
    request: MlbV3Scores.MlbV3ScoresSchedulesBasicRequest,
    options?: RequestOptions,
  ): ApiPromise<ScheduleBasic2[], MlbV3Scores.MlbV3ScoresSchedulesBasicError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/scores/{format}/SchedulesBasic/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => scheduleBasic2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresSchedulesBasicError,
      },
      options,
    );
  }

  /**
   * Season - Current
   *
   * @remarks
   * Year of the current season. This value changes at the start of the new league year. For leagues
   * that run over two years, this is the year the season starts, not ends.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Scores.MlbV3ScoresSeasonCurrentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ScoresSeasonCurrent(
    request: MlbV3Scores.MlbV3ScoresSeasonCurrentRequest,
    options?: RequestOptions,
  ): ApiPromise<Season1, MlbV3Scores.MlbV3ScoresSeasonCurrentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/scores/{format}/CurrentSeason"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: season1Schema },
        errorFactory: MlbV3Scores.MlbV3ScoresSeasonCurrentError,
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
   * @throws {@link MlbV3Scores.MlbV3ScoresStadiumsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ScoresStadiums(
    request: MlbV3Scores.MlbV3ScoresStadiumsRequest,
    options?: RequestOptions,
  ): ApiPromise<Stadium3[], MlbV3Scores.MlbV3ScoresStadiumsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/scores/{format}/Stadiums"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => stadium3Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresStadiumsError,
      },
      options,
    );
  }

  /**
   * Standings
   *
   * @remarks
   * Includes regular season standings in division and league, from which postseason seeding can be
   * derived.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Scores.MlbV3ScoresStandingsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ScoresStandings(
    request: MlbV3Scores.MlbV3ScoresStandingsRequest,
    options?: RequestOptions,
  ): ApiPromise<Standing2[], MlbV3Scores.MlbV3ScoresStandingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/scores/{format}/Standings/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => standing2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresStandingsError,
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
   * @throws {@link MlbV3Scores.MlbV3ScoresTeamGameLogsBySeasonError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ScoresTeamGameLogsBySeason(
    request: MlbV3Scores.MlbV3ScoresTeamGameLogsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame2[], MlbV3Scores.MlbV3ScoresTeamGameLogsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/mlb/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresTeamGameLogsBySeasonError,
      },
      options,
    );
  }

  /**
   * Team Game Stats - by Date [Final]
   *
   * @remarks
   * Returns the box score statistical record team-wide (aggregated from all players) for all games
   * on a given date after the game has concluded.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Scores.MlbV3ScoresTeamGameStatsByDateFinalError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ScoresTeamGameStatsByDateFinal(
    request: MlbV3Scores.MlbV3ScoresTeamGameStatsByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame2[], MlbV3Scores.MlbV3ScoresTeamGameStatsByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/scores/{format}/TeamGameStatsByDateFinal/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresTeamGameStatsByDateFinalError,
      },
      options,
    );
  }

  /**
   * Team Game Stats - by Date [Live & Final]
   *
   * @remarks
   * Returns the box score statistical record team-wide (aggregated from all players) for a given
   * team's game in a given week, both live and post-game.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Scores.MlbV3ScoresTeamGameStatsByDateLiveFinalError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ScoresTeamGameStatsByDateLiveFinal(
    request: MlbV3Scores.MlbV3ScoresTeamGameStatsByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame2[], MlbV3Scores.MlbV3ScoresTeamGameStatsByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/scores/{format}/TeamGameStatsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresTeamGameStatsByDateLiveFinalError,
      },
      options,
    );
  }

  /**
   * Team Profiles - All
   *
   * @remarks
   * Full team information: team name and city, league and division, and colors. Also contains basic
   * fantasy info such as IDs as well as full stadium data. This endpoint returns all teams
   * regardless of current active status.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Scores.MlbV3ScoresTeamProfilesAllError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ScoresTeamProfilesAll(
    request: MlbV3Scores.MlbV3ScoresTeamProfilesAllRequest,
    options?: RequestOptions,
  ): ApiPromise<Team2[], MlbV3Scores.MlbV3ScoresTeamProfilesAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/scores/{format}/AllTeams"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => team2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresTeamProfilesAllError,
      },
      options,
    );
  }

  /**
   * Team Profiles - by Active
   *
   * @remarks
   * Full team information: team name and city, league and division, and colors. Also contains basic
   * fantasy info such as IDs as well as full stadium data. This endpoint returns the teams
   * currently active in the league.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Scores.MlbV3ScoresTeamProfilesByActiveError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ScoresTeamProfilesByActive(
    request: MlbV3Scores.MlbV3ScoresTeamProfilesByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Team2[], MlbV3Scores.MlbV3ScoresTeamProfilesByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/scores/{format}/teams"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => team2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresTeamProfilesByActiveError,
      },
      options,
    );
  }

  /**
   * Team Profiles - by Season
   *
   * @remarks
   * List of teams playing in a specified season, with their profile info.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Scores.MlbV3ScoresTeamProfilesBySeasonError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ScoresTeamProfilesBySeason(
    request: MlbV3Scores.MlbV3ScoresTeamProfilesBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<Team2[], MlbV3Scores.MlbV3ScoresTeamProfilesBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/scores/{format}/teams/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => team2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresTeamProfilesBySeasonError,
      },
      options,
    );
  }

  /**
   * Team Season Stats
   *
   * @remarks
   * Returns all season-long stats (i.e. the season total, not each individual game record) for all
   * teams (aggregated from all players) for a given season.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Scores.MlbV3ScoresTeamSeasonStatsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ScoresTeamSeasonStats(
    request: MlbV3Scores.MlbV3ScoresTeamSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamSeason2[], MlbV3Scores.MlbV3ScoresTeamSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/scores/{format}/TeamSeasonStats/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamSeason2Schema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresTeamSeasonStatsError,
      },
      options,
    );
  }

  /**
   * Transactions
   *
   * @remarks
   * A list of transactions, such as assignments, placement on the injury list, player trades etc.,
   * delivered by date.
   *
   * @returns Success
   *
   * @throws {@link MlbV3Scores.MlbV3ScoresTransactionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mlbV3ScoresTransactions(
    request: MlbV3Scores.MlbV3ScoresTransactionsRequest,
    options?: RequestOptions,
  ): ApiPromise<Transaction[], MlbV3Scores.MlbV3ScoresTransactionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mlb/scores/{format}/TransactionsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => transactionSchema)) },
        errorFactory: MlbV3Scores.MlbV3ScoresTransactionsError,
      },
      options,
    );
  }
}

export namespace MlbV3Scores {
  export type MlbV3ScoresAreGamesInProgressRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class MlbV3ScoresAreGamesInProgressError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ScoresAreGamesInProgressError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresGamesByDateFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.
     */
    date: string;
  };

  export class MlbV3ScoresGamesByDateFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ScoresGamesByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresGamesByDateLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.
     */
    date: string;
  };

  export class MlbV3ScoresGamesByDateLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ScoresGamesByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresGamesBasicByDateFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.
     */
    date: string;
  };

  export class MlbV3ScoresGamesBasicByDateFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ScoresGamesBasicByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresGamesBasicByDateLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.
     */
    date: string;
  };

  export class MlbV3ScoresGamesBasicByDateLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ScoresGamesBasicByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresNewsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class MlbV3ScoresNewsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ScoresNewsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresNewsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the news. <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>. */
    date: string;
  };

  export class MlbV3ScoresNewsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ScoresNewsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresPlayerDetailsByActiveRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class MlbV3ScoresPlayerDetailsByActiveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ScoresPlayerDetailsByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresPlayerDetailsByFreeAgentsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class MlbV3ScoresPlayerDetailsByFreeAgentsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ScoresPlayerDetailsByFreeAgentsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresPlayerProfilesByActiveRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class MlbV3ScoresPlayerProfilesByActiveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ScoresPlayerProfilesByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresPlayerProfilesByFreeAgentsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class MlbV3ScoresPlayerProfilesByFreeAgentsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ScoresPlayerProfilesByFreeAgentsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresPlayerProfilesByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The abbreviation of the requested team. <br>Examples: <code>SF</code>, <code>NYY</code>. */
    team: string;
  };

  export class MlbV3ScoresPlayerProfilesByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ScoresPlayerProfilesByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresPlayersDetailsByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The abbreviation of the requested team. <br>Examples: <code>SF</code>, <code>NYY</code>. */
    team: string;
  };

  export class MlbV3ScoresPlayersDetailsByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ScoresPlayersDetailsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresSchedulesRequest = {
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

  export class MlbV3ScoresSchedulesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ScoresSchedulesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresSchedulesBasicRequest = {
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

  export class MlbV3ScoresSchedulesBasicError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ScoresSchedulesBasicError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresSeasonCurrentRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class MlbV3ScoresSeasonCurrentError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ScoresSeasonCurrentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresStadiumsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class MlbV3ScoresStadiumsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ScoresStadiumsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresStandingsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2017</code>, <code>2018</code>. */
    season: string;
  };

  export class MlbV3ScoresStandingsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ScoresStandingsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresTeamGameLogsBySeasonRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Season to get games from. Example <code>2019POST</code>, <code>2020</code> */
    season: string;
    /** Unique ID of team. Example <code> 12 </code> */
    teamid: string;
    /** How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code> */
    numberofgames: string;
  };

  export class MlbV3ScoresTeamGameLogsBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ScoresTeamGameLogsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresTeamGameStatsByDateFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.
     */
    date: string;
  };

  export class MlbV3ScoresTeamGameStatsByDateFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ScoresTeamGameStatsByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresTeamGameStatsByDateLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.
     */
    date: string;
  };

  export class MlbV3ScoresTeamGameStatsByDateLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ScoresTeamGameStatsByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresTeamProfilesAllRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class MlbV3ScoresTeamProfilesAllError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ScoresTeamProfilesAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresTeamProfilesByActiveRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class MlbV3ScoresTeamProfilesByActiveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ScoresTeamProfilesByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresTeamProfilesBySeasonRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season and the season type. If no season type is provided, then the default is
     * regular season. <br>Examples: <code>2015REG</code>, <code>2015PRE</code>,
     * <code>2015POST</code>.
     */
    season: string;
  };

  export class MlbV3ScoresTeamProfilesBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ScoresTeamProfilesBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresTeamSeasonStatsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2017</code>, <code>2018</code>. */
    season: string;
  };

  export class MlbV3ScoresTeamSeasonStatsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ScoresTeamSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3ScoresTransactionsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the news. <br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>. */
    date: string;
  };

  export class MlbV3ScoresTransactionsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<MlbV3ScoresTransactionsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
