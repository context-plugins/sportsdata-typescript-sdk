import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { Format, formatSchema } from "../models/format.js";
import { gameSchema, type Game } from "../models/game.js";
import { newsSchema, type News } from "../models/news.js";
import { playerBasic1Schema, type PlayerBasic1 } from "../models/player-basic1.js";
import { player1Schema, type Player1 } from "../models/player1.js";
import { referee1Schema, type Referee1 } from "../models/referee1.js";
import { scheduleBasic1Schema, type ScheduleBasic1 } from "../models/schedule-basic1.js";
import { scoreBasic1Schema, type ScoreBasic1 } from "../models/score-basic1.js";
import { seasonSchema, type Season } from "../models/season.js";
import { stadium1Schema, type Stadium1 } from "../models/stadium1.js";
import { standing1Schema, type Standing1 } from "../models/standing1.js";
import { teamDepthChart1Schema, type TeamDepthChart1 } from "../models/team-depth-chart1.js";
import { teamGame1Schema, type TeamGame1 } from "../models/team-game1.js";
import { teamSeason1Schema, type TeamSeason1 } from "../models/team-season1.js";
import { team1Schema, type Team1 } from "../models/team1.js";
import { transactionSchema, type Transaction } from "../models/transaction.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class NbaV3Scores {
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
   * @throws {@link NbaV3Scores.NbaV3ScoresAreGamesInProgressError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ScoresAreGamesInProgress(
    request: NbaV3Scores.NbaV3ScoresAreGamesInProgressRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean, NbaV3Scores.NbaV3ScoresAreGamesInProgressError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/scores/{format}/AreAnyGamesInProgress"),
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
        errorFactory: NbaV3Scores.NbaV3ScoresAreGamesInProgressError,
      },
      options,
    );
  }

  /**
   * Depth Charts
   *
   * @remarks
   * Returns the full list of NBA Depth Charts as of the time of the call.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Scores.NbaV3ScoresDepthChartsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ScoresDepthCharts(
    request: NbaV3Scores.NbaV3ScoresDepthChartsRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamDepthChart1[], NbaV3Scores.NbaV3ScoresDepthChartsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/scores/{format}/DepthCharts"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamDepthChart1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresDepthChartsError,
      },
      options,
    );
  }

  /**
   * Games - by Date [Final]
   *
   * @remarks
   * Full scores and gameday info, including referee, infotainment odds, as well as all of the
   * quarter scores and full-time score, delivered as the game ends.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Scores.NbaV3ScoresGamesByDateFinalError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ScoresGamesByDateFinal(
    request: NbaV3Scores.NbaV3ScoresGamesByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game[], NbaV3Scores.NbaV3ScoresGamesByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/scores/{format}/GamesByDateFinal/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameSchema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresGamesByDateFinalError,
      },
      options,
    );
  }

  /**
   * Games - by Date [Live & Final]
   *
   * @remarks
   * Full scores and gameday info delivered live and post-game. Live data includes half and score
   * info. Gameday info includes TV channel etc
   *
   * @returns Success
   *
   * @throws {@link NbaV3Scores.NbaV3ScoresGamesByDateLiveFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ScoresGamesByDateLiveFinal(
    request: NbaV3Scores.NbaV3ScoresGamesByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game[], NbaV3Scores.NbaV3ScoresGamesByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/scores/{format}/GamesByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameSchema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresGamesByDateLiveFinalError,
      },
      options,
    );
  }

  /**
   * Games (Basic) - by Date [Final]
   *
   * @remarks
   * A slimmed-down score endpoint, giving just the quarter scores and final score, for simple
   * applications.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Scores.NbaV3ScoresGamesBasicByDateFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ScoresGamesBasicByDateFinal(
    request: NbaV3Scores.NbaV3ScoresGamesBasicByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic1[], NbaV3Scores.NbaV3ScoresGamesBasicByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/scores/{format}/ScoresBasicFinal/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasic1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresGamesBasicByDateFinalError,
      },
      options,
    );
  }

  /**
   * Games (Basic) - by Date [Live & Final]
   *
   * @remarks
   * This endpoint simply delivers the quarter, time, quarter scores, and total score live; no
   * gameday info is provided.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Scores.NbaV3ScoresGamesBasicByDateLiveFinalError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ScoresGamesBasicByDateLiveFinal(
    request: NbaV3Scores.NbaV3ScoresGamesBasicByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic1[], NbaV3Scores.NbaV3ScoresGamesBasicByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/scores/{format}/ScoresBasic/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasic1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresGamesBasicByDateLiveFinalError,
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
   * @throws {@link NbaV3Scores.NbaV3ScoresNewsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ScoresNews(
    request: NbaV3Scores.NbaV3ScoresNewsRequest,
    options?: RequestOptions,
  ): ApiPromise<News[], NbaV3Scores.NbaV3ScoresNewsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/scores/{format}/News"),
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
        errorFactory: NbaV3Scores.NbaV3ScoresNewsError,
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
   * @throws {@link NbaV3Scores.NbaV3ScoresNewsByDateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ScoresNewsByDate(
    request: NbaV3Scores.NbaV3ScoresNewsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<News[], NbaV3Scores.NbaV3ScoresNewsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/scores/{format}/NewsByDate/{date}"),
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
        errorFactory: NbaV3Scores.NbaV3ScoresNewsByDateError,
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
   * @throws {@link NbaV3Scores.NbaV3ScoresPlayerDetailsByActiveError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ScoresPlayerDetailsByActive(
    request: NbaV3Scores.NbaV3ScoresPlayerDetailsByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Player1[], NbaV3Scores.NbaV3ScoresPlayerDetailsByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/scores/{format}/Players"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresPlayerDetailsByActiveError,
      },
      options,
    );
  }

  /**
   * Player Details - by Free Agent
   *
   * @remarks
   * Full player bio and details, including injury notes, for all available free agents unattached
   * to a team.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Scores.NbaV3ScoresPlayerDetailsByFreeAgentError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ScoresPlayerDetailsByFreeAgent(
    request: NbaV3Scores.NbaV3ScoresPlayerDetailsByFreeAgentRequest,
    options?: RequestOptions,
  ): ApiPromise<Player1[], NbaV3Scores.NbaV3ScoresPlayerDetailsByFreeAgentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/scores/{format}/FreeAgents"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresPlayerDetailsByFreeAgentError,
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
   * @throws {@link NbaV3Scores.NbaV3ScoresPlayerDetailsByTeamError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ScoresPlayerDetailsByTeam(
    request: NbaV3Scores.NbaV3ScoresPlayerDetailsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<Player1[], NbaV3Scores.NbaV3ScoresPlayerDetailsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/scores/{format}/Players/{team}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => player1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresPlayerDetailsByTeamError,
      },
      options,
    );
  }

  /**
   * Player Profiles - by Active
   *
   * @remarks
   * Player profiles include basic biographical information, position, college, and current team (if
   * attached to a team.) This returns all players currently active.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Scores.NbaV3ScoresPlayerProfilesByActiveError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ScoresPlayerProfilesByActive(
    request: NbaV3Scores.NbaV3ScoresPlayerProfilesByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic1[], NbaV3Scores.NbaV3ScoresPlayerProfilesByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/scores/{format}/PlayersActiveBasic"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasic1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresPlayerProfilesByActiveError,
      },
      options,
    );
  }

  /**
   * Player Profiles - by Free Agent
   *
   * @remarks
   * Player profiles include basic biographical information, position, college, and current team (if
   * attached to a team.) This returns all free agents not currently attached to a team.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Scores.NbaV3ScoresPlayerProfilesByFreeAgentError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ScoresPlayerProfilesByFreeAgent(
    request: NbaV3Scores.NbaV3ScoresPlayerProfilesByFreeAgentRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic1[], NbaV3Scores.NbaV3ScoresPlayerProfilesByFreeAgentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/scores/{format}/PlayersByFreeAgents"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasic1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresPlayerProfilesByFreeAgentError,
      },
      options,
    );
  }

  /**
   * Players Profiles - by Team
   *
   * @remarks
   * Roster information for a given team. Player profiles include basic biographical information,
   * position, college, and current team (if attached to a team.) Specify a team tricode parameter
   * to receive all players currently on that team.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Scores.NbaV3ScoresPlayersProfilesByTeamError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ScoresPlayersProfilesByTeam(
    request: NbaV3Scores.NbaV3ScoresPlayersProfilesByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic1[], NbaV3Scores.NbaV3ScoresPlayersProfilesByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/scores/{format}/PlayersBasic/{team}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasic1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresPlayersProfilesByTeamError,
      },
      options,
    );
  }

  /**
   * Referees
   *
   * @remarks
   * Returns the full list of NBA Referees.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Scores.NbaV3ScoresRefereesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ScoresReferees(
    request: NbaV3Scores.NbaV3ScoresRefereesRequest,
    options?: RequestOptions,
  ): ApiPromise<Referee1[], NbaV3Scores.NbaV3ScoresRefereesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/scores/{format}/Referees"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => referee1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresRefereesError,
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
   * @throws {@link NbaV3Scores.NbaV3ScoresSchedulesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ScoresSchedules(
    request: NbaV3Scores.NbaV3ScoresSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<Game[], NbaV3Scores.NbaV3ScoresSchedulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/scores/{format}/Games/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => gameSchema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresSchedulesError,
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
   * @throws {@link NbaV3Scores.NbaV3ScoresSchedulesBasicError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ScoresSchedulesBasic(
    request: NbaV3Scores.NbaV3ScoresSchedulesBasicRequest,
    options?: RequestOptions,
  ): ApiPromise<ScheduleBasic1[], NbaV3Scores.NbaV3ScoresSchedulesBasicError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/scores/{format}/SchedulesBasic/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => scheduleBasic1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresSchedulesBasicError,
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
   * @throws {@link NbaV3Scores.NbaV3ScoresSeasonCurrentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ScoresSeasonCurrent(
    request: NbaV3Scores.NbaV3ScoresSeasonCurrentRequest,
    options?: RequestOptions,
  ): ApiPromise<Season, NbaV3Scores.NbaV3ScoresSeasonCurrentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/scores/{format}/CurrentSeason"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: seasonSchema },
        errorFactory: NbaV3Scores.NbaV3ScoresSeasonCurrentError,
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
   * @throws {@link NbaV3Scores.NbaV3ScoresStadiumsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ScoresStadiums(
    request: NbaV3Scores.NbaV3ScoresStadiumsRequest,
    options?: RequestOptions,
  ): ApiPromise<Stadium1[], NbaV3Scores.NbaV3ScoresStadiumsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/scores/{format}/Stadiums"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => stadium1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresStadiumsError,
      },
      options,
    );
  }

  /**
   * Standings
   *
   * @remarks
   * Includes regular season standings in division and conference, from which postseason seeding can
   * be derived.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Scores.NbaV3ScoresStandingsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ScoresStandings(
    request: NbaV3Scores.NbaV3ScoresStandingsRequest,
    options?: RequestOptions,
  ): ApiPromise<Standing1[], NbaV3Scores.NbaV3ScoresStandingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/scores/{format}/Standings/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => standing1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresStandingsError,
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
   * @throws {@link NbaV3Scores.NbaV3ScoresTeamGameLogsBySeasonError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ScoresTeamGameLogsBySeason(
    request: NbaV3Scores.NbaV3ScoresTeamGameLogsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame1[], NbaV3Scores.NbaV3ScoresTeamGameLogsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nba/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresTeamGameLogsBySeasonError,
      },
      options,
    );
  }

  /**
   * Team Game Stats - by Date [Live & Final]
   *
   * @remarks
   * Returns the box score statistical record team-wide (aggregated from all players) for all games
   * on a given date, both live and post-game.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Scores.NbaV3ScoresTeamGameStatsByDateLiveFinalError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ScoresTeamGameStatsByDateLiveFinal(
    request: NbaV3Scores.NbaV3ScoresTeamGameStatsByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame1[], NbaV3Scores.NbaV3ScoresTeamGameStatsByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/scores/{format}/TeamGameStatsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresTeamGameStatsByDateLiveFinalError,
      },
      options,
    );
  }

  /**
   * Team Profiles - All
   *
   * @remarks
   * Full team information: team name and city, conference and division, and colors. Also contains
   * basic fantasy info such as IDs as well as full stadium data. This endpoint returns all teams
   * regardless of current active status.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Scores.NbaV3ScoresTeamProfilesAllError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ScoresTeamProfilesAll(
    request: NbaV3Scores.NbaV3ScoresTeamProfilesAllRequest,
    options?: RequestOptions,
  ): ApiPromise<Team1[], NbaV3Scores.NbaV3ScoresTeamProfilesAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/scores/{format}/AllTeams"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => team1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresTeamProfilesAllError,
      },
      options,
    );
  }

  /**
   * Team Profiles - by Active
   *
   * @remarks
   * Full team information: team name and city, conference and division, and colors. Also contains
   * basic fantasy info such as IDs as well as full stadium data. This endpoint returns the teams
   * currently active in the league.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Scores.NbaV3ScoresTeamProfilesByActiveError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ScoresTeamProfilesByActive(
    request: NbaV3Scores.NbaV3ScoresTeamProfilesByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Team1[], NbaV3Scores.NbaV3ScoresTeamProfilesByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/scores/{format}/teams"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => team1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresTeamProfilesByActiveError,
      },
      options,
    );
  }

  /**
   * Team Profiles - by Season
   *
   * @remarks
   * Full team information: team name and city, conference and division, and colors. Also contains
   * basic fantasy info such as IDs as well as full stadium data. This endpoint returns the active
   * teams for a given season.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Scores.NbaV3ScoresTeamProfilesBySeasonError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ScoresTeamProfilesBySeason(
    request: NbaV3Scores.NbaV3ScoresTeamProfilesBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<Team1[], NbaV3Scores.NbaV3ScoresTeamProfilesBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/scores/{format}/teams/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => team1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresTeamProfilesBySeasonError,
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
   * @throws {@link NbaV3Scores.NbaV3ScoresTeamSeasonStatsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ScoresTeamSeasonStats(
    request: NbaV3Scores.NbaV3ScoresTeamSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamSeason1[], NbaV3Scores.NbaV3ScoresTeamSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/scores/{format}/TeamSeasonStats/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamSeason1Schema)) },
        errorFactory: NbaV3Scores.NbaV3ScoresTeamSeasonStatsError,
      },
      options,
    );
  }

  /**
   * Transactions
   *
   * @remarks
   * A list of transactions, such as player trades, injuries, assignments etc., delivered by date.
   *
   * @returns Success
   *
   * @throws {@link NbaV3Scores.NbaV3ScoresTransactionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nbaV3ScoresTransactions(
    request: NbaV3Scores.NbaV3ScoresTransactionsRequest,
    options?: RequestOptions,
  ): ApiPromise<Transaction[], NbaV3Scores.NbaV3ScoresTransactionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nba/scores/{format}/TransactionsByDate/{date}"),
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
        errorFactory: NbaV3Scores.NbaV3ScoresTransactionsError,
      },
      options,
    );
  }
}

export namespace NbaV3Scores {
  export type NbaV3ScoresAreGamesInProgressRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NbaV3ScoresAreGamesInProgressError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ScoresAreGamesInProgressError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresDepthChartsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NbaV3ScoresDepthChartsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ScoresDepthChartsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresGamesByDateFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.
     */
    date: string;
  };

  export class NbaV3ScoresGamesByDateFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ScoresGamesByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresGamesByDateLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.
     */
    date: string;
  };

  export class NbaV3ScoresGamesByDateLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ScoresGamesByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresGamesBasicByDateFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.
     */
    date: string;
  };

  export class NbaV3ScoresGamesBasicByDateFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ScoresGamesBasicByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresGamesBasicByDateLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.
     */
    date: string;
  };

  export class NbaV3ScoresGamesBasicByDateLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ScoresGamesBasicByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresNewsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NbaV3ScoresNewsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ScoresNewsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresNewsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the news. <br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>. */
    date: string;
  };

  export class NbaV3ScoresNewsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ScoresNewsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresPlayerDetailsByActiveRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NbaV3ScoresPlayerDetailsByActiveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ScoresPlayerDetailsByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresPlayerDetailsByFreeAgentRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NbaV3ScoresPlayerDetailsByFreeAgentError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ScoresPlayerDetailsByFreeAgentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresPlayerDetailsByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The abbreviation of the requested team.<br>Examples: <code>PHI</code>, <code>BKN</code>. */
    team: string;
  };

  export class NbaV3ScoresPlayerDetailsByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ScoresPlayerDetailsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresPlayerProfilesByActiveRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NbaV3ScoresPlayerProfilesByActiveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ScoresPlayerProfilesByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresPlayerProfilesByFreeAgentRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NbaV3ScoresPlayerProfilesByFreeAgentError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ScoresPlayerProfilesByFreeAgentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresPlayersProfilesByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The abbreviation of the requested team.<br>Examples: <code>PHI</code>, <code>BKN</code>. */
    team: string;
  };

  export class NbaV3ScoresPlayersProfilesByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ScoresPlayersProfilesByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresRefereesRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NbaV3ScoresRefereesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ScoresRefereesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresSchedulesRequest = {
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

  export class NbaV3ScoresSchedulesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ScoresSchedulesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresSchedulesBasicRequest = {
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

  export class NbaV3ScoresSchedulesBasicError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ScoresSchedulesBasicError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresSeasonCurrentRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NbaV3ScoresSeasonCurrentError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ScoresSeasonCurrentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresStadiumsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NbaV3ScoresStadiumsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ScoresStadiumsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresStandingsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2015</code>, <code>2016</code>. */
    season: string;
  };

  export class NbaV3ScoresStandingsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ScoresStandingsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresTeamGameLogsBySeasonRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Season to get games from. Example <code>2019POST</code>, <code>2020</code> */
    season: string;
    /** Unique ID of team. Example <code> 8 </code> */
    teamid: string;
    /** How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code> */
    numberofgames: string;
  };

  export class NbaV3ScoresTeamGameLogsBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ScoresTeamGameLogsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresTeamGameStatsByDateLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>.
     */
    date: string;
  };

  export class NbaV3ScoresTeamGameStatsByDateLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ScoresTeamGameStatsByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresTeamProfilesAllRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NbaV3ScoresTeamProfilesAllError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ScoresTeamProfilesAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresTeamProfilesByActiveRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NbaV3ScoresTeamProfilesByActiveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ScoresTeamProfilesByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresTeamProfilesBySeasonRequest = {
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

  export class NbaV3ScoresTeamProfilesBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ScoresTeamProfilesBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresTeamSeasonStatsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2015</code>, <code>2016</code>. */
    season: string;
  };

  export class NbaV3ScoresTeamSeasonStatsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ScoresTeamSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3ScoresTransactionsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the news. <br>Examples: <code>2015-JUL-31</code>, <code>2015-SEP-01</code>. */
    date: string;
  };

  export class NbaV3ScoresTransactionsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NbaV3ScoresTransactionsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
