import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { conference1Schema, type Conference1 } from "../models/conference1.js";
import { Format, formatSchema } from "../models/format.js";
import { game9Schema, type Game9 } from "../models/game9.js";
import { playerBasic5Schema, type PlayerBasic5 } from "../models/player-basic5.js";
import { player5Schema, type Player5 } from "../models/player5.js";
import { scheduleBasic5Schema, type ScheduleBasic5 } from "../models/schedule-basic5.js";
import { scoreBasic5Schema, type ScoreBasic5 } from "../models/score-basic5.js";
import { season3Schema, type Season3 } from "../models/season3.js";
import { stadium1Schema, type Stadium1 } from "../models/stadium1.js";
import { teamBasic2Schema, type TeamBasic2 } from "../models/team-basic2.js";
import { teamGame5Schema, type TeamGame5 } from "../models/team-game5.js";
import { teamSeason5Schema, type TeamSeason5 } from "../models/team-season5.js";
import { team5Schema, type Team5 } from "../models/team5.js";
import { tournamentSchema, type Tournament } from "../models/tournament.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class CbbV3Scores {
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
   * @throws {@link CbbV3Scores.CbbV3ScoresAreGamesInProgressError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cbbV3ScoresAreGamesInProgress(
    request: CbbV3Scores.CbbV3ScoresAreGamesInProgressRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean, CbbV3Scores.CbbV3ScoresAreGamesInProgressError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cbb/scores/{format}/AreAnyGamesInProgress"),
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
        errorFactory: CbbV3Scores.CbbV3ScoresAreGamesInProgressError,
      },
      options,
    );
  }

  /**
   * Games - by Date [Final]
   *
   * @remarks
   * Full scores and gameday info, including half scores, delivered after the game ends.
   *
   * @returns Success
   *
   * @throws {@link CbbV3Scores.CbbV3ScoresGamesByDateFinalError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cbbV3ScoresGamesByDateFinal(
    request: CbbV3Scores.CbbV3ScoresGamesByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game9[], CbbV3Scores.CbbV3ScoresGamesByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cbb/scores/{format}/GamesByDateFinal/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => game9Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresGamesByDateFinalError,
      },
      options,
    );
  }

  /**
   * Games - by Date [Live & Final]
   *
   * @remarks
   * Full scores and gameday info delivered live and post-game. Live data includes half and score
   * info. Gameday info includes weather, TV channel etc
   *
   * @returns Success
   *
   * @throws {@link CbbV3Scores.CbbV3ScoresGamesByDateLiveFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cbbV3ScoresGamesByDateLiveFinal(
    request: CbbV3Scores.CbbV3ScoresGamesByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game9[], CbbV3Scores.CbbV3ScoresGamesByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cbb/scores/{format}/GamesByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => game9Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresGamesByDateLiveFinalError,
      },
      options,
    );
  }

  /**
   * Games - by Season
   *
   * @remarks
   * A full schedule of games for a given season.
   *
   * @returns Success
   *
   * @throws {@link CbbV3Scores.CbbV3ScoresGamesBySeasonError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cbbV3ScoresGamesBySeason(
    request: CbbV3Scores.CbbV3ScoresGamesBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<Game9[], CbbV3Scores.CbbV3ScoresGamesBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cbb/scores/{format}/Games/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => game9Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresGamesBySeasonError,
      },
      options,
    );
  }

  /**
   * Games - by Season [Final]
   *
   * @remarks
   * Full scores and gameday info, including half scores, for all games of a given season, delivered
   * after each game ends
   *
   * @returns Success
   *
   * @throws {@link CbbV3Scores.CbbV3ScoresGamesBySeasonFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cbbV3ScoresGamesBySeasonFinal(
    request: CbbV3Scores.CbbV3ScoresGamesBySeasonFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game9[], CbbV3Scores.CbbV3ScoresGamesBySeasonFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cbb/scores/{format}/GamesFinal/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => game9Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresGamesBySeasonFinalError,
      },
      options,
    );
  }

  /**
   * Games (Basic) - by Date
   *
   * @remarks
   * A slimmed-down score endpoint, giving just the quarter scores and final score, for simple
   * applications.
   *
   * @returns Success
   *
   * @throws {@link CbbV3Scores.CbbV3ScoresGamesBasicByDateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cbbV3ScoresGamesBasicByDate(
    request: CbbV3Scores.CbbV3ScoresGamesBasicByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic5[], CbbV3Scores.CbbV3ScoresGamesBasicByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cbb/scores/{format}/ScoresBasic/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasic5Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresGamesBasicByDateError,
      },
      options,
    );
  }

  /**
   * League Hierarchy
   *
   * @remarks
   * Returns the list of conferences, their teams, and standings.
   *
   * @returns Success
   *
   * @throws {@link CbbV3Scores.CbbV3ScoresLeagueHierarchyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cbbV3ScoresLeagueHierarchy(
    request: CbbV3Scores.CbbV3ScoresLeagueHierarchyRequest,
    options?: RequestOptions,
  ): ApiPromise<Conference1[], CbbV3Scores.CbbV3ScoresLeagueHierarchyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cbb/scores/{format}/LeagueHierarchy"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => conference1Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresLeagueHierarchyError,
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
   * @throws {@link CbbV3Scores.CbbV3ScoresPlayerDetailsByActiveError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cbbV3ScoresPlayerDetailsByActive(
    request: CbbV3Scores.CbbV3ScoresPlayerDetailsByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Player5[], CbbV3Scores.CbbV3ScoresPlayerDetailsByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cbb/scores/{format}/Players"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player5Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresPlayerDetailsByActiveError,
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
   * @throws {@link CbbV3Scores.CbbV3ScoresPlayerDetailsByActive2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cbbV3ScoresPlayerDetailsByActive2(
    request: CbbV3Scores.CbbV3ScoresPlayerDetailsByActive2Request,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic5[], CbbV3Scores.CbbV3ScoresPlayerDetailsByActive2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cbb/scores/{format}/PlayersByActive"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasic5Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresPlayerDetailsByActive2Error,
      },
      options,
    );
  }

  /**
   * Player Details - by Injured
   *
   * @remarks
   * This endpoint provides all currently injured college basketball players, along with injury
   * details.
   *
   * @returns Success
   *
   * @throws {@link CbbV3Scores.CbbV3ScoresPlayerDetailsByInjuredError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cbbV3ScoresPlayerDetailsByInjured(
    request: CbbV3Scores.CbbV3ScoresPlayerDetailsByInjuredRequest,
    options?: RequestOptions,
  ): ApiPromise<Player5[], CbbV3Scores.CbbV3ScoresPlayerDetailsByInjuredError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cbb/scores/{format}/InjuredPlayers"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player5Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresPlayerDetailsByInjuredError,
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
   * @throws {@link CbbV3Scores.CbbV3ScoresPlayerDetailsByTeamError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cbbV3ScoresPlayerDetailsByTeam(
    request: CbbV3Scores.CbbV3ScoresPlayerDetailsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<Player5[], CbbV3Scores.CbbV3ScoresPlayerDetailsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cbb/scores/{format}/Players/{team}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => player5Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresPlayerDetailsByTeamError,
      },
      options,
    );
  }

  /**
   * Player Profiles - by Team
   *
   * @remarks
   * Roster information for a given team. Player profiles include basic biographical information,
   * position, etc. Specify a team code parameter to receive all players currently on that team.
   *
   * @returns Success
   *
   * @throws {@link CbbV3Scores.CbbV3ScoresPlayerProfilesByTeamError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cbbV3ScoresPlayerProfilesByTeam(
    request: CbbV3Scores.CbbV3ScoresPlayerProfilesByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic5[], CbbV3Scores.CbbV3ScoresPlayerProfilesByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cbb/scores/{format}/PlayersBasic/{team}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasic5Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresPlayerProfilesByTeamError,
      },
      options,
    );
  }

  /**
   * Schedules - by Team
   *
   * @remarks
   * A list of all a team's games for a given season.
   *
   * @returns Success
   *
   * @throws {@link CbbV3Scores.CbbV3ScoresSchedulesByTeamError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cbbV3ScoresSchedulesByTeam(
    request: CbbV3Scores.CbbV3ScoresSchedulesByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<Game9[], CbbV3Scores.CbbV3ScoresSchedulesByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cbb/scores/{format}/TeamSchedule/{season}/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "team", value: request.team, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game9Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresSchedulesByTeamError,
      },
      options,
    );
  }

  /**
   * Schedules (Basic)
   *
   * @remarks
   * A lightweight schedule endpoint without gameday information. Home and away teams, the date and
   * time of the game, and season type etc. are included. Ideal for the most basic information
   * required to build a schedule.
   *
   * @returns Success
   *
   * @throws {@link CbbV3Scores.CbbV3ScoresSchedulesBasicError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cbbV3ScoresSchedulesBasic(
    request: CbbV3Scores.CbbV3ScoresSchedulesBasicRequest,
    options?: RequestOptions,
  ): ApiPromise<ScheduleBasic5[], CbbV3Scores.CbbV3ScoresSchedulesBasicError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cbb/scores/{format}/SchedulesBasic/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => scheduleBasic5Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresSchedulesBasicError,
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
   * @throws {@link CbbV3Scores.CbbV3ScoresSeasonCurrentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cbbV3ScoresSeasonCurrent(
    request: CbbV3Scores.CbbV3ScoresSeasonCurrentRequest,
    options?: RequestOptions,
  ): ApiPromise<Season3, CbbV3Scores.CbbV3ScoresSeasonCurrentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cbb/scores/{format}/CurrentSeason"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: season3Schema },
        errorFactory: CbbV3Scores.CbbV3ScoresSeasonCurrentError,
      },
      options,
    );
  }

  /**
   * Stadiums
   *
   * @remarks
   * Returns all stadiums in CBB with school, capacity, latitude/longitude, city and state (and
   * where applicable country.)
   *
   * @returns Success
   *
   * @throws {@link CbbV3Scores.CbbV3ScoresStadiumsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cbbV3ScoresStadiums(
    request: CbbV3Scores.CbbV3ScoresStadiumsRequest,
    options?: RequestOptions,
  ): ApiPromise<Stadium1[], CbbV3Scores.CbbV3ScoresStadiumsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cbb/scores/{format}/Stadiums"),
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
        errorFactory: CbbV3Scores.CbbV3ScoresStadiumsError,
      },
      options,
    );
  }

  /**
   * Team Game Logs By Season
   *
   * @remarks
   * Game by game log of total team statistics.
   *
   * @returns Success
   *
   * @throws {@link CbbV3Scores.CbbV3ScoresTeamGameLogsBySeasonError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cbbV3ScoresTeamGameLogsBySeason(
    request: CbbV3Scores.CbbV3ScoresTeamGameLogsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame5[], CbbV3Scores.CbbV3ScoresTeamGameLogsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/cbb/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame5Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresTeamGameLogsBySeasonError,
      },
      options,
    );
  }

  /**
   * Team Game Stats - by Date [Live & Final]
   *
   * @remarks
   * Returns the box score statistical record team-wide (aggregated from all players) for teams
   * playing on a given date, both live and post-game.
   *
   * @returns Success
   *
   * @throws {@link CbbV3Scores.CbbV3ScoresTeamGameStatsByDateLiveFinalError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cbbV3ScoresTeamGameStatsByDateLiveFinal(
    request: CbbV3Scores.CbbV3ScoresTeamGameStatsByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame5[], CbbV3Scores.CbbV3ScoresTeamGameStatsByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cbb/scores/{format}/TeamGameStatsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame5Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresTeamGameStatsByDateLiveFinalError,
      },
      options,
    );
  }

  /**
   * Team Profiles - All
   *
   * @remarks
   * Full team information: team name and city, school, conference, and colors. Also contains full
   * stadium data. This endpoint returns all teams regardless of current active status.
   *
   * @returns Success
   *
   * @throws {@link CbbV3Scores.CbbV3ScoresTeamProfilesAllError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cbbV3ScoresTeamProfilesAll(
    request: CbbV3Scores.CbbV3ScoresTeamProfilesAllRequest,
    options?: RequestOptions,
  ): ApiPromise<Team5[], CbbV3Scores.CbbV3ScoresTeamProfilesAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cbb/scores/{format}/teams"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => team5Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresTeamProfilesAllError,
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
   * @throws {@link CbbV3Scores.CbbV3ScoresTeamSeasonStatsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cbbV3ScoresTeamSeasonStats(
    request: CbbV3Scores.CbbV3ScoresTeamSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamSeason5[], CbbV3Scores.CbbV3ScoresTeamSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cbb/scores/{format}/TeamSeasonStats/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => teamSeason5Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresTeamSeasonStatsError,
      },
      options,
    );
  }

  /**
   * Teams (Basic) - All
   *
   * @remarks
   * The most basic top-line team information, such as team name, school and city, conference and
   * division, stadium ID, and team colors. Returns all teams regardless of current active status.
   *
   * @returns Success
   *
   * @throws {@link CbbV3Scores.CbbV3ScoresTeamsBasicAllError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cbbV3ScoresTeamsBasicAll(
    request: CbbV3Scores.CbbV3ScoresTeamsBasicAllRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamBasic2[], CbbV3Scores.CbbV3ScoresTeamsBasicAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cbb/scores/{format}/TeamsBasic"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamBasic2Schema)) },
        errorFactory: CbbV3Scores.CbbV3ScoresTeamsBasicAllError,
      },
      options,
    );
  }

  /**
   * Tournament Hierarchy
   *
   * @remarks
   * Returns tournament info and games associated with the NCAA Tournament for the given season.
   *
   * @returns Success
   *
   * @throws {@link CbbV3Scores.CbbV3ScoresTournamentHierarchyError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cbbV3ScoresTournamentHierarchy(
    request: CbbV3Scores.CbbV3ScoresTournamentHierarchyRequest,
    options?: RequestOptions,
  ): ApiPromise<Tournament, CbbV3Scores.CbbV3ScoresTournamentHierarchyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/cbb/scores/{format}/Tournament/{season}"),
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
        success: { kind: "json", schema: tournamentSchema },
        errorFactory: CbbV3Scores.CbbV3ScoresTournamentHierarchyError,
      },
      options,
    );
  }
}

export namespace CbbV3Scores {
  export type CbbV3ScoresAreGamesInProgressRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class CbbV3ScoresAreGamesInProgressError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CbbV3ScoresAreGamesInProgressError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresGamesByDateFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.
     */
    date: string;
  };

  export class CbbV3ScoresGamesByDateFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CbbV3ScoresGamesByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresGamesByDateLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.
     */
    date: string;
  };

  export class CbbV3ScoresGamesByDateLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CbbV3ScoresGamesByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresGamesBySeasonRequest = {
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

  export class CbbV3ScoresGamesBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CbbV3ScoresGamesBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresGamesBySeasonFinalRequest = {
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

  export class CbbV3ScoresGamesBySeasonFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CbbV3ScoresGamesBySeasonFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresGamesBasicByDateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.
     */
    date: string;
  };

  export class CbbV3ScoresGamesBasicByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CbbV3ScoresGamesBasicByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresLeagueHierarchyRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class CbbV3ScoresLeagueHierarchyError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CbbV3ScoresLeagueHierarchyError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresPlayerDetailsByActiveRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class CbbV3ScoresPlayerDetailsByActiveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CbbV3ScoresPlayerDetailsByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresPlayerDetailsByActive2Request = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class CbbV3ScoresPlayerDetailsByActive2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CbbV3ScoresPlayerDetailsByActive2Error> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresPlayerDetailsByInjuredRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class CbbV3ScoresPlayerDetailsByInjuredError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CbbV3ScoresPlayerDetailsByInjuredError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresPlayerDetailsByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** The abbreviation of the requested team. <br>Examples: <code>SF</code>, <code>NYY</code>. */
    team: string;
  };

  export class CbbV3ScoresPlayerDetailsByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CbbV3ScoresPlayerDetailsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresPlayerProfilesByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The abbreviation of the requested team. <br>Examples: <code>SMU</code>, <code>UCLA</code>.
     */
    team: string;
  };

  export class CbbV3ScoresPlayerProfilesByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CbbV3ScoresPlayerProfilesByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresSchedulesByTeamRequest = {
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
    /** The abbreviation of the requested team. Examples: <code>SF</code>, <code>NYY</code>. */
    team: string;
  };

  export class CbbV3ScoresSchedulesByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CbbV3ScoresSchedulesByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresSchedulesBasicRequest = {
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

  export class CbbV3ScoresSchedulesBasicError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CbbV3ScoresSchedulesBasicError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresSeasonCurrentRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class CbbV3ScoresSeasonCurrentError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CbbV3ScoresSeasonCurrentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresStadiumsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class CbbV3ScoresStadiumsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CbbV3ScoresStadiumsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresTeamGameLogsBySeasonRequest = {
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

  export class CbbV3ScoresTeamGameLogsBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CbbV3ScoresTeamGameLogsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresTeamGameStatsByDateLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The date of the game(s). <br>Examples: <code>2018-FEB-27</code>, <code>2017-DEC-01</code>.
     */
    date: string;
  };

  export class CbbV3ScoresTeamGameStatsByDateLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CbbV3ScoresTeamGameStatsByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresTeamProfilesAllRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class CbbV3ScoresTeamProfilesAllError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CbbV3ScoresTeamProfilesAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresTeamSeasonStatsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * Year of the season (with optional season type).<br>Examples: <code>2018</code>,
     * <code>2018POST</code>, <code>2019</code>.
     */
    season: string;
  };

  export class CbbV3ScoresTeamSeasonStatsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CbbV3ScoresTeamSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresTeamsBasicAllRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class CbbV3ScoresTeamsBasicAllError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CbbV3ScoresTeamsBasicAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type CbbV3ScoresTournamentHierarchyRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season.<br>Examples: <code>2018</code>, <code>2019</code>. */
    season: string;
  };

  export class CbbV3ScoresTournamentHierarchyError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<CbbV3ScoresTournamentHierarchyError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
