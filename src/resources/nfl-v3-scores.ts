import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { byeSchema, type Bye } from "../models/bye.js";
import { Format, formatSchema } from "../models/format.js";
import { newsSchema, type News } from "../models/news.js";
import { playerBasicSchema, type PlayerBasic } from "../models/player-basic.js";
import { playerDetailSchema, type PlayerDetail } from "../models/player-detail.js";
import { playerSchema, type Player } from "../models/player.js";
import { refereeSchema, type Referee } from "../models/referee.js";
import { scheduleBasicSchema, type ScheduleBasic } from "../models/schedule-basic.js";
import { scheduleSchema, type Schedule } from "../models/schedule.js";
import { scoreBasicSchema, type ScoreBasic } from "../models/score-basic.js";
import { scoreSchema, type Score } from "../models/score.js";
import { stadiumSchema, type Stadium } from "../models/stadium.js";
import { standingSchema, type Standing } from "../models/standing.js";
import { teamBasicSchema, type TeamBasic } from "../models/team-basic.js";
import { teamDepthChartWeeklySchema, type TeamDepthChartWeekly } from "../models/team-depth-chart-weekly.js";
import { teamDepthChartSchema, type TeamDepthChart } from "../models/team-depth-chart.js";
import { teamGameSchema, type TeamGame } from "../models/team-game.js";
import { teamSeasonSchema, type TeamSeason } from "../models/team-season.js";
import { teamSchema, type Team } from "../models/team.js";
import { timeframeSchema, type Timeframe } from "../models/timeframe.js";
import { transactionSchema, type Transaction } from "../models/transaction.js";
import { Type, typeSchema } from "../models/type.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class NflV3Scores {
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
   * @throws {@link NflV3Scores.NflV3ScoresAreGamesInProgressError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresAreGamesInProgress(
    request: NflV3Scores.NflV3ScoresAreGamesInProgressRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean, NflV3Scores.NflV3ScoresAreGamesInProgressError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/AreAnyGamesInProgress"),
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
        errorFactory: NflV3Scores.NflV3ScoresAreGamesInProgressError,
      },
      options,
    );
  }

  /**
   * Bye Weeks
   *
   * @remarks
   * Get bye weeks for the teams during a specified NFL season.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresByeWeeksError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresByeWeeks(
    request: NflV3Scores.NflV3ScoresByeWeeksRequest,
    options?: RequestOptions,
  ): ApiPromise<Bye[], NflV3Scores.NflV3ScoresByeWeeksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/Byes/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => byeSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresByeWeeksError,
      },
      options,
    );
  }

  /**
   * Depth Charts - All
   *
   * @remarks
   * Depth charts for all players in all NFL teams split by offensive, defensive, and special teams
   * position groupings.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresDepthChartsAllError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresDepthChartsAll(
    request: NflV3Scores.NflV3ScoresDepthChartsAllRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamDepthChart[], NflV3Scores.NflV3ScoresDepthChartsAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/DepthChartsAll"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamDepthChartSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresDepthChartsAllError,
      },
      options,
    );
  }

  /**
   * Depth Charts - by Active
   *
   * @remarks
   * Depth charts for all active players NFL teams split by offensive, defensive, and special teams
   * position groupings.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresDepthChartsByActiveError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresDepthChartsByActive(
    request: NflV3Scores.NflV3ScoresDepthChartsByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamDepthChart[], NflV3Scores.NflV3ScoresDepthChartsByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/DepthCharts"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamDepthChartSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresDepthChartsByActiveError,
      },
      options,
    );
  }

  /**
   * Depth Charts - by Week
   *
   * @remarks
   * Depth charts for active players by week in all NFL teams split by offensive, defensive, and
   * special teams position groupings.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresDepthChartsByWeekError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresDepthChartsByWeek(
    request: NflV3Scores.NflV3ScoresDepthChartsByWeekRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamDepthChartWeekly[], NflV3Scores.NflV3ScoresDepthChartsByWeekError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/DepthChartsByWeek/{season}/{week}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamDepthChartWeeklySchema)) },
        errorFactory: NflV3Scores.NflV3ScoresDepthChartsByWeekError,
      },
      options,
    );
  }

  /**
   * Games - by Date [Final]
   *
   * @remarks
   * Full scores and gameday info, including weather, referee, infotainment odds, as well as all of
   * the quarter scores and full-time score.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresGamesByDateFinalError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresGamesByDateFinal(
    request: NflV3Scores.NflV3ScoresGamesByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Score[], NflV3Scores.NflV3ScoresGamesByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/ScoresByDateFinal/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => scoreSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresGamesByDateFinalError,
      },
      options,
    );
  }

  /**
   * Games - by Date [Live & Final]
   *
   * @remarks
   * Full scores and gameday info delivered live and post-game. Live data includes down and
   * distance, as well as game clock. Gameday info includes referee, weather, TV channel etc.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresGamesByDateLiveFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresGamesByDateLiveFinal(
    request: NflV3Scores.NflV3ScoresGamesByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Score[], NflV3Scores.NflV3ScoresGamesByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/ScoresByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => scoreSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresGamesByDateLiveFinalError,
      },
      options,
    );
  }

  /**
   * Games - by Season [Live & Final]
   *
   * @remarks
   * Full scores and gameday info delivered live and post-game. Live data includes down and
   * distance, as well as game clock. Gameday info includes referee, weather, TV channel etc.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresGamesBySeasonLiveFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresGamesBySeasonLiveFinal(
    request: NflV3Scores.NflV3ScoresGamesBySeasonLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Score[], NflV3Scores.NflV3ScoresGamesBySeasonLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/Scores/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => scoreSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresGamesBySeasonLiveFinalError,
      },
      options,
    );
  }

  /**
   * Games - by Week [Final]
   *
   * @remarks
   * Full scores and gameday info, including weather, referee, infotainment odds, as well as all of
   * the quarter scores and full-time score.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresGamesByWeekFinalError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresGamesByWeekFinal(
    request: NflV3Scores.NflV3ScoresGamesByWeekFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Score[], NflV3Scores.NflV3ScoresGamesByWeekFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/ScoresByWeekFinal/{season}/{week}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => scoreSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresGamesByWeekFinalError,
      },
      options,
    );
  }

  /**
   * Games - by Week [Live & Final]
   *
   * @remarks
   * Full scores and gameday info delivered live and post-game. Live data includes down and
   * distance, as well as game clock. Gameday info includes referee, weather, TV channel etc.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresGamesByWeekLiveFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresGamesByWeekLiveFinal(
    request: NflV3Scores.NflV3ScoresGamesByWeekLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Score[], NflV3Scores.NflV3ScoresGamesByWeekLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/ScoresByWeek/{season}/{week}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => scoreSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresGamesByWeekLiveFinalError,
      },
      options,
    );
  }

  /**
   * Games (Basic) - by Week [Final]
   *
   * @remarks
   * A slimmed-down score endpoint, giving just the quarter scores and final score, for simple
   * applications.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresGamesBasicByWeekFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresGamesBasicByWeekFinal(
    request: NflV3Scores.NflV3ScoresGamesBasicByWeekFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic[], NflV3Scores.NflV3ScoresGamesBasicByWeekFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/ScoresBasicFinal/{season}/{week}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasicSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresGamesBasicByWeekFinalError,
      },
      options,
    );
  }

  /**
   * Games (Basic) - by Week [Live & Final]
   *
   * @remarks
   * This endpoint simply delivers the game clock and quarter and total scores live; no down and
   * distance and no gameday info such as weather.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresGamesBasicByWeekLiveFinalError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresGamesBasicByWeekLiveFinal(
    request: NflV3Scores.NflV3ScoresGamesBasicByWeekLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic[], NflV3Scores.NflV3ScoresGamesBasicByWeekLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/ScoresBasic/{season}/{week}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasicSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresGamesBasicByWeekLiveFinalError,
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
   * @throws {@link NflV3Scores.NflV3ScoresNewsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresNews(
    request: NflV3Scores.NflV3ScoresNewsRequest,
    options?: RequestOptions,
  ): ApiPromise<News[], NflV3Scores.NflV3ScoresNewsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/News"),
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
        errorFactory: NflV3Scores.NflV3ScoresNewsError,
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
   * @throws {@link NflV3Scores.NflV3ScoresNewsByDateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresNewsByDate(
    request: NflV3Scores.NflV3ScoresNewsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<News[], NflV3Scores.NflV3ScoresNewsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/NewsByDate/{date}"),
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
        errorFactory: NflV3Scores.NflV3ScoresNewsByDateError,
      },
      options,
    );
  }

  /**
   * News - by Team
   *
   * @remarks
   * Basic RotoBaller news feed, with limited stories available - usually 0-1 stories per day. Ideal
   * for test purposes.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresNewsByTeamError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresNewsByTeam(
    request: NflV3Scores.NflV3ScoresNewsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<News[], NflV3Scores.NflV3ScoresNewsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/NewsByTeam/{team}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => newsSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresNewsByTeamError,
      },
      options,
    );
  }

  /**
   * Player Details - All
   *
   * @remarks
   * Full player bio and details, including injury notes, for all NFL players in our database.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresPlayerDetailsAllError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresPlayerDetailsAll(
    request: NflV3Scores.NflV3ScoresPlayerDetailsAllRequest,
    options?: RequestOptions,
  ): ApiPromise<Player[], NflV3Scores.NflV3ScoresPlayerDetailsAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/Players"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresPlayerDetailsAllError,
      },
      options,
    );
  }

  /**
   * Player Details - by Free Agents
   *
   * @remarks
   * Full player bio and details, including injury notes, for all available NFL free agents
   * unattached to a team.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresPlayerDetailsByFreeAgentsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresPlayerDetailsByFreeAgents(
    request: NflV3Scores.NflV3ScoresPlayerDetailsByFreeAgentsRequest,
    options?: RequestOptions,
  ): ApiPromise<Player[], NflV3Scores.NflV3ScoresPlayerDetailsByFreeAgentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/FreeAgents"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresPlayerDetailsByFreeAgentsError,
      },
      options,
    );
  }

  /**
   * Player Details - by Rookie Draft Year
   *
   * @remarks
   * Full player bio and details, including injury notes, for all available NFL players by a
   * specified draft year.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresPlayerDetailsByRookieDraftYearError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresPlayerDetailsByRookieDraftYear(
    request: NflV3Scores.NflV3ScoresPlayerDetailsByRookieDraftYearRequest,
    options?: RequestOptions,
  ): ApiPromise<Player[], NflV3Scores.NflV3ScoresPlayerDetailsByRookieDraftYearError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/Rookies/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresPlayerDetailsByRookieDraftYearError,
      },
      options,
    );
  }

  /**
   * Player Details - by Team
   *
   * @remarks
   * Full player bio and details, including injury notes, for all available NFL players by team.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresPlayerDetailsByTeamError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresPlayerDetailsByTeam(
    request: NflV3Scores.NflV3ScoresPlayerDetailsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerDetail[], NflV3Scores.NflV3ScoresPlayerDetailsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/Players/{team}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerDetailSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresPlayerDetailsByTeamError,
      },
      options,
    );
  }

  /**
   * Player Game Logs - by Season
   *
   * @remarks
   * Specify a season, a player, and number of games (either an integer or <code>all</code>) to see
   * all of their box score logs. Refreshed after their most recent game is complete.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresPlayerGameLogsBySeasonError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresPlayerGameLogsBySeason(
    request: NflV3Scores.NflV3ScoresPlayerGameLogsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame[], NflV3Scores.NflV3ScoresPlayerGameLogsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/nfl/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamGameSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresPlayerGameLogsBySeasonError,
      },
      options,
    );
  }

  /**
   * Player Profiles - All
   *
   * @remarks
   * Player profiles include basic biographical information, position, college, and current team (if
   * attached to a team.) This returns all players.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresPlayerProfilesAllError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresPlayerProfilesAll(
    request: NflV3Scores.NflV3ScoresPlayerProfilesAllRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic[], NflV3Scores.NflV3ScoresPlayerProfilesAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/PlayersByAvailable"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasicSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresPlayerProfilesAllError,
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
   * @throws {@link NflV3Scores.NflV3ScoresPlayerProfilesByFreeAgentError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresPlayerProfilesByFreeAgent(
    request: NflV3Scores.NflV3ScoresPlayerProfilesByFreeAgentRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic[], NflV3Scores.NflV3ScoresPlayerProfilesByFreeAgentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/PlayersByFreeAgents"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasicSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresPlayerProfilesByFreeAgentError,
      },
      options,
    );
  }

  /**
   * Player Profiles - by Rookie Draft Year
   *
   * @remarks
   * Player profiles include basic biographical information, position, college, and current team (if
   * attached to a team.) Specify a year parameter to receive all player profiles from that rookie
   * draft year.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresPlayerProfilesByRookieDraftYearError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresPlayerProfilesByRookieDraftYear(
    request: NflV3Scores.NflV3ScoresPlayerProfilesByRookieDraftYearRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic[], NflV3Scores.NflV3ScoresPlayerProfilesByRookieDraftYearError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/PlayersByRookieDraftYear/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasicSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresPlayerProfilesByRookieDraftYearError,
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
   * @throws {@link NflV3Scores.NflV3ScoresPlayerProfilesByTeamError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresPlayerProfilesByTeam(
    request: NflV3Scores.NflV3ScoresPlayerProfilesByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic[], NflV3Scores.NflV3ScoresPlayerProfilesByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/PlayersBasic/{team}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasicSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresPlayerProfilesByTeamError,
      },
      options,
    );
  }

  /**
   * Referees
   *
   * @remarks
   * Returns referees with name, numbers, position (e.g. FJ for Field Judge), college, and years of
   * experience.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresRefereesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresReferees(
    request: NflV3Scores.NflV3ScoresRefereesRequest,
    options?: RequestOptions,
  ): ApiPromise<Referee[], NflV3Scores.NflV3ScoresRefereesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/Referees"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => refereeSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresRefereesError,
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
   * @throws {@link NflV3Scores.NflV3ScoresSchedulesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresSchedules(
    request: NflV3Scores.NflV3ScoresSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<Schedule[], NflV3Scores.NflV3ScoresSchedulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/Schedules/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => scheduleSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresSchedulesError,
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
   * @throws {@link NflV3Scores.NflV3ScoresSchedulesBasicError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresSchedulesBasic(
    request: NflV3Scores.NflV3ScoresSchedulesBasicRequest,
    options?: RequestOptions,
  ): ApiPromise<ScheduleBasic[], NflV3Scores.NflV3ScoresSchedulesBasicError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/SchedulesBasic/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => scheduleBasicSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresSchedulesBasicError,
      },
      options,
    );
  }

  /**
   * Scores by Week Simulation
   *
   * @remarks
   * Gets simulated live scores of NFL games, covering the Conference Championship games on January
   * 21, 2018.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresScoresByWeekSimulationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresScoresByWeekSimulation(
    request: NflV3Scores.NflV3ScoresScoresByWeekSimulationRequest,
    options?: RequestOptions,
  ): ApiPromise<Score[], NflV3Scores.NflV3ScoresScoresByWeekSimulationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/SimulatedScores/{numberofplays}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "numberofplays", value: request.numberofplays, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresScoresByWeekSimulationError,
      },
      options,
    );
  }

  /**
   * Season - Current
   *
   * @remarks
   * Year of the current NFL season. This value changes at the start of the new NFL league year. NFL
   * seasons run across two calendar years; the league year is the one in which it starts, not ends
   * (that is, a season starting in 2023 and ending in 2024 will have the league year of 2023.)
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresSeasonCurrentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresSeasonCurrent(
    request: NflV3Scores.NflV3ScoresSeasonCurrentRequest,
    options?: RequestOptions,
  ): ApiPromise<number | null, NflV3Scores.NflV3ScoresSeasonCurrentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/CurrentSeason"),
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
        errorFactory: NflV3Scores.NflV3ScoresSeasonCurrentError,
      },
      options,
    );
  }

  /**
   * Season - Last Completed
   *
   * @remarks
   * Year of the most recently completed NFL season. This value changes immediately after the Super
   * Bowl. NFL seasons run across two calendar years; the league year is the one in which it starts,
   * not ends (that is, a season starting in 2023 and ending in 2024 will have the league year of
   * 2023.)
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresSeasonLastCompletedError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresSeasonLastCompleted(
    request: NflV3Scores.NflV3ScoresSeasonLastCompletedRequest,
    options?: RequestOptions,
  ): ApiPromise<number | null, NflV3Scores.NflV3ScoresSeasonLastCompletedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/LastCompletedSeason"),
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
        errorFactory: NflV3Scores.NflV3ScoresSeasonLastCompletedError,
      },
      options,
    );
  }

  /**
   * Season - Upcoming
   *
   * @remarks
   * Year of the current NFL season, if we are in the mid-season. If we are in the off-season, then
   * year of the next upcoming season. This value changes immediately after the Super Bowl. NFL
   * seasons run across two calendar years; the league year is the one in which it starts, not ends
   * (that is, a season starting in 2023 and ending in 2024 will have the league year of 2023.)
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresSeasonUpcomingError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresSeasonUpcoming(
    request: NflV3Scores.NflV3ScoresSeasonUpcomingRequest,
    options?: RequestOptions,
  ): ApiPromise<number | null, NflV3Scores.NflV3ScoresSeasonUpcomingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/UpcomingSeason"),
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
        errorFactory: NflV3Scores.NflV3ScoresSeasonUpcomingError,
      },
      options,
    );
  }

  /**
   * Stadiums
   *
   * @remarks
   * Returns all stadiums in the NFL with capacity, surface, latitude/longitude, city and state
   * (and, where applicable, country.)
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresStadiumsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresStadiums(
    request: NflV3Scores.NflV3ScoresStadiumsRequest,
    options?: RequestOptions,
  ): ApiPromise<Stadium[], NflV3Scores.NflV3ScoresStadiumsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/Stadiums"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => stadiumSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresStadiumsError,
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
   * @throws {@link NflV3Scores.NflV3ScoresStandingsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresStandings(
    request: NflV3Scores.NflV3ScoresStandingsRequest,
    options?: RequestOptions,
  ): ApiPromise<Standing[], NflV3Scores.NflV3ScoresStandingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/Standings/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => standingSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresStandingsError,
      },
      options,
    );
  }

  /**
   * Team Game Stats [Live & Final]
   *
   * @remarks
   * Returns the box score statistical record team-wide (aggregated from all players) for a given
   * team's game in a given week, during the game and with final stats after it ends.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresTeamGameStatsLiveFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresTeamGameStatsLiveFinal(
    request: NflV3Scores.NflV3ScoresTeamGameStatsLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame[], NflV3Scores.NflV3ScoresTeamGameStatsLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/TeamGameStats/{season}/{week}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamGameSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresTeamGameStatsLiveFinalError,
      },
      options,
    );
  }

  /**
   * Team Profiles - All
   *
   * @remarks
   * Full team information: team name and city, conference and division, colors, coaching and scheme
   * info. Also contains basic fantasy info such as IDs as well as full stadium data. This endpoint
   * returns all teams regardless of current active status.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresTeamProfilesAllError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresTeamProfilesAll(
    request: NflV3Scores.NflV3ScoresTeamProfilesAllRequest,
    options?: RequestOptions,
  ): ApiPromise<Team[], NflV3Scores.NflV3ScoresTeamProfilesAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/AllTeams"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresTeamProfilesAllError,
      },
      options,
    );
  }

  /**
   * Team Profiles - by Active
   *
   * @remarks
   * Full team information: team name and city, conference and division, colors, coaching and scheme
   * info. Also contains basic fantasy info such as IDs as well as full stadium data. This endpoint
   * returns the teams currently active in the league.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresTeamProfilesByActiveError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresTeamProfilesByActive(
    request: NflV3Scores.NflV3ScoresTeamProfilesByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Team[], NflV3Scores.NflV3ScoresTeamProfilesByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/Teams"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresTeamProfilesByActiveError,
      },
      options,
    );
  }

  /**
   * Team Profiles - by Season
   *
   * @remarks
   * Full team information: team name and city, conference and division, colors, coaching and scheme
   * info. Also contains basic fantasy info such as IDs as well as full stadium data. This endpoint
   * returns the active teams for a given season.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresTeamProfilesBySeasonError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresTeamProfilesBySeason(
    request: NflV3Scores.NflV3ScoresTeamProfilesBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<Team[], NflV3Scores.NflV3ScoresTeamProfilesBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/Teams/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresTeamProfilesBySeasonError,
      },
      options,
    );
  }

  /**
   * Team Profiles (Basic) - All
   *
   * @remarks
   * The most basic top-line team information, such as team name and city, conference and division,
   * stadium ID, coach info, and team colors. Returns all teams regardless of current active status.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresTeamProfilesBasicAllError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresTeamProfilesBasicAll(
    request: NflV3Scores.NflV3ScoresTeamProfilesBasicAllRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamBasic[], NflV3Scores.NflV3ScoresTeamProfilesBasicAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/TeamsBasic"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamBasicSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresTeamProfilesBasicAllError,
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
   * @throws {@link NflV3Scores.NflV3ScoresTeamSeasonStatsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresTeamSeasonStats(
    request: NflV3Scores.NflV3ScoresTeamSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamSeason[], NflV3Scores.NflV3ScoresTeamSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/TeamSeasonStats/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamSeasonSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresTeamSeasonStatsError,
      },
      options,
    );
  }

  /**
   * Timeframes
   *
   * @remarks
   * Timeframes for the NFL refer to current weeks, season status etc.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresTimeframesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresTimeframes(
    request: NflV3Scores.NflV3ScoresTimeframesRequest,
    options?: RequestOptions,
  ): ApiPromise<Timeframe[], NflV3Scores.NflV3ScoresTimeframesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/Timeframes/{type}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "type", value: request.type, schema: s.defaulted(typeSchema, Type.Current) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => timeframeSchema)) },
        errorFactory: NflV3Scores.NflV3ScoresTimeframesError,
      },
      options,
    );
  }

  /**
   * Transactions - by Date
   *
   * @remarks
   * Includes a list of transactions for a given date, with type (e.g. trade, injury listing,
   * assignment) and a brief note.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresTransactionsByDateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresTransactionsByDate(
    request: NflV3Scores.NflV3ScoresTransactionsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<Transaction[], NflV3Scores.NflV3ScoresTransactionsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/TransactionsByDate/{date}"),
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
        errorFactory: NflV3Scores.NflV3ScoresTransactionsByDateError,
      },
      options,
    );
  }

  /**
   * Week - Current
   *
   * @remarks
   * Number of the current week of the NFL season. This value usually changes on Tuesday nights or
   * Wednesday mornings at midnight ET but in the rare case of a rescheduled or overseas game with a
   * non-standard gameday this could change.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresWeekCurrentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresWeekCurrent(
    request: NflV3Scores.NflV3ScoresWeekCurrentRequest,
    options?: RequestOptions,
  ): ApiPromise<number | null, NflV3Scores.NflV3ScoresWeekCurrentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/CurrentWeek"),
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
        errorFactory: NflV3Scores.NflV3ScoresWeekCurrentError,
      },
      options,
    );
  }

  /**
   * Week - Last Completed
   *
   * @remarks
   * Number of the last completed week of the NFL season. This value usually changes on Tuesday
   * nights or Wednesday mornings at midnight ET but in the rare case of a rescheduled or overseas
   * game with a non-standard gameday this could change.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresWeekLastCompletedError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresWeekLastCompleted(
    request: NflV3Scores.NflV3ScoresWeekLastCompletedRequest,
    options?: RequestOptions,
  ): ApiPromise<number | null, NflV3Scores.NflV3ScoresWeekLastCompletedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/LastCompletedWeek"),
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
        errorFactory: NflV3Scores.NflV3ScoresWeekLastCompletedError,
      },
      options,
    );
  }

  /**
   * Week - Upcoming
   *
   * @remarks
   * Number of the next upcoming week of the NFL season. This value usually changes on Tuesday
   * nights or Wednesday mornings at midnight ET but in the rare case of a rescheduled or overseas
   * game with a non-standard gameday this could change.
   *
   * @returns Success
   *
   * @throws {@link NflV3Scores.NflV3ScoresWeekUpcomingError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nflV3ScoresWeekUpcoming(
    request: NflV3Scores.NflV3ScoresWeekUpcomingRequest,
    options?: RequestOptions,
  ): ApiPromise<number | null, NflV3Scores.NflV3ScoresWeekUpcomingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/nfl/scores/{format}/UpcomingWeek"),
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
        errorFactory: NflV3Scores.NflV3ScoresWeekUpcomingError,
      },
      options,
    );
  }
}

export namespace NflV3Scores {
  export type NflV3ScoresAreGamesInProgressRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NflV3ScoresAreGamesInProgressError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresAreGamesInProgressError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresByeWeeksRequest = {
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

  export class NflV3ScoresByeWeeksError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresByeWeeksError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresDepthChartsAllRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NflV3ScoresDepthChartsAllError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresDepthChartsAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresDepthChartsByActiveRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NflV3ScoresDepthChartsByActiveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresDepthChartsByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresDepthChartsByWeekRequest = {
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
    /**
     * Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17,
     * Postseason 1 to 4. Example: <code>1</code>
     */
    week: string;
  };

  export class NflV3ScoresDepthChartsByWeekError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresDepthChartsByWeekError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresGamesByDateFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the games.<br>Examples: <code>2021-SEP-12</code>, <code>2021-NOV-28</code>. */
    date: string;
  };

  export class NflV3ScoresGamesByDateFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresGamesByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresGamesByDateLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the games.<br>Examples: <code>2021-SEP-12</code>, <code>2021-NOV-28</code>. */
    date: string;
  };

  export class NflV3ScoresGamesByDateLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresGamesByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresGamesBySeasonLiveFinalRequest = {
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

  export class NflV3ScoresGamesBySeasonLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresGamesBySeasonLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresGamesByWeekFinalRequest = {
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
    /**
     * Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17,
     * Postseason 1 to 4. Example: <code>1</code>
     */
    week: string;
  };

  export class NflV3ScoresGamesByWeekFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresGamesByWeekFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresGamesByWeekLiveFinalRequest = {
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
    /**
     * Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17,
     * Postseason 1 to 4. Example: <code>1</code>
     */
    week: string;
  };

  export class NflV3ScoresGamesByWeekLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresGamesByWeekLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresGamesBasicByWeekFinalRequest = {
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
    /**
     * Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17,
     * Postseason 1 to 4. Example: <code>1</code>
     */
    week: string;
  };

  export class NflV3ScoresGamesBasicByWeekFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresGamesBasicByWeekFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresGamesBasicByWeekLiveFinalRequest = {
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
    /**
     * Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17,
     * Postseason 1 to 4. Example: <code>1</code>
     */
    week: string;
  };

  export class NflV3ScoresGamesBasicByWeekLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresGamesBasicByWeekLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresNewsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NflV3ScoresNewsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresNewsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresNewsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the news. <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>. */
    date: string;
  };

  export class NflV3ScoresNewsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresNewsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresNewsByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Abbreviation of the team. Example: <code>WAS</code>. */
    team: string;
  };

  export class NflV3ScoresNewsByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresNewsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresPlayerDetailsAllRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NflV3ScoresPlayerDetailsAllError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresPlayerDetailsAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresPlayerDetailsByFreeAgentsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NflV3ScoresPlayerDetailsByFreeAgentsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresPlayerDetailsByFreeAgentsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresPlayerDetailsByRookieDraftYearRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season.<br>Examples: <code>2018</code>, <code>2019</code>, etc. */
    season: string;
  };

  export class NflV3ScoresPlayerDetailsByRookieDraftYearError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresPlayerDetailsByRookieDraftYearError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresPlayerDetailsByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Abbreviation of the team. Example: <code>WAS</code>. */
    team: string;
  };

  export class NflV3ScoresPlayerDetailsByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresPlayerDetailsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresPlayerGameLogsBySeasonRequest = {
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

  export class NflV3ScoresPlayerGameLogsBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresPlayerGameLogsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresPlayerProfilesAllRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NflV3ScoresPlayerProfilesAllError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresPlayerProfilesAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresPlayerProfilesByFreeAgentRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NflV3ScoresPlayerProfilesByFreeAgentError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresPlayerProfilesByFreeAgentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresPlayerProfilesByRookieDraftYearRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season.<br>Examples: <code>2018</code>, <code>2019</code>, etc. */
    season: string;
  };

  export class NflV3ScoresPlayerProfilesByRookieDraftYearError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresPlayerProfilesByRookieDraftYearError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresPlayerProfilesByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Abbreviation of the team. Example: <code>WAS</code>. */
    team: string;
  };

  export class NflV3ScoresPlayerProfilesByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresPlayerProfilesByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresRefereesRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NflV3ScoresRefereesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresRefereesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresSchedulesRequest = {
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

  export class NflV3ScoresSchedulesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresSchedulesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresSchedulesBasicRequest = {
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

  export class NflV3ScoresSchedulesBasicError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresSchedulesBasicError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresScoresByWeekSimulationRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The number of plays to progress in this NFL live game simulation. Example entries are
     * <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>150</code>,
     * <code>200</code>, etc.
     */
    numberofplays: string;
  };

  export class NflV3ScoresScoresByWeekSimulationError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresScoresByWeekSimulationError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresSeasonCurrentRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NflV3ScoresSeasonCurrentError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresSeasonCurrentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresSeasonLastCompletedRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NflV3ScoresSeasonLastCompletedError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresSeasonLastCompletedError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresSeasonUpcomingRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NflV3ScoresSeasonUpcomingError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresSeasonUpcomingError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresStadiumsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NflV3ScoresStadiumsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresStadiumsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresStandingsRequest = {
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

  export class NflV3ScoresStandingsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresStandingsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresTeamGameStatsLiveFinalRequest = {
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
    /**
     * Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17,
     * Postseason 1 to 4. Example: <code>1</code>
     */
    week: string;
  };

  export class NflV3ScoresTeamGameStatsLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresTeamGameStatsLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresTeamProfilesAllRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NflV3ScoresTeamProfilesAllError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresTeamProfilesAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresTeamProfilesByActiveRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NflV3ScoresTeamProfilesByActiveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresTeamProfilesByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresTeamProfilesBySeasonRequest = {
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

  export class NflV3ScoresTeamProfilesBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresTeamProfilesBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresTeamProfilesBasicAllRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NflV3ScoresTeamProfilesBasicAllError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresTeamProfilesBasicAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresTeamSeasonStatsRequest = {
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

  export class NflV3ScoresTeamSeasonStatsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresTeamSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresTimeframesRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The type of timeframes to return. Valid entries are <code>current</code> or
     * <code>upcoming</code> or <code>completed</code> or <code>recent</code> or <code>all</code>.
     *
     * @default Type.Current
     */
    type?: Type;
  };

  export class NflV3ScoresTimeframesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresTimeframesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresTransactionsByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The date of the news. <br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>. */
    date: string;
  };

  export class NflV3ScoresTransactionsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresTransactionsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresWeekCurrentRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NflV3ScoresWeekCurrentError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresWeekCurrentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresWeekLastCompletedRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NflV3ScoresWeekLastCompletedError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresWeekLastCompletedError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NflV3ScoresWeekUpcomingRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class NflV3ScoresWeekUpcomingError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<NflV3ScoresWeekUpcomingError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
