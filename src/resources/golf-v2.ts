import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { coursesSchema, type Courses } from "../models/courses.js";
import {
  dfsSlateWithOwnershipProjectionSchema,
  type DfsSlateWithOwnershipProjection,
} from "../models/dfs-slate-with-ownership-projection.js";
import { dfsSlate2Schema, type DfsSlate2 } from "../models/dfs-slate2.js";
import { fantasyTournamentSchema, type FantasyTournament } from "../models/fantasy-tournament.js";
import { Format, formatSchema } from "../models/format.js";
import { leaderboardBasicSchema, type LeaderboardBasic } from "../models/leaderboard-basic.js";
import { leaderboardSchema, type Leaderboard } from "../models/leaderboard.js";
import { news2Schema, type News2 } from "../models/news2.js";
import { playerSeason9Schema, type PlayerSeason9 } from "../models/player-season9.js";
import {
  playerTournamentBasicSchema,
  type PlayerTournamentBasic,
} from "../models/player-tournament-basic.js";
import {
  playerTournamentProjectionSchema,
  type PlayerTournamentProjection,
} from "../models/player-tournament-projection.js";
import { player8Schema, type Player8 } from "../models/player8.js";
import { season7Schema, type Season7 } from "../models/season7.js";
import { tournamentRoundSchema, type TournamentRound } from "../models/tournament-round.js";
import { tournament1Schema, type Tournament1 } from "../models/tournament1.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class GolfV2 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Courses
   *
   * @remarks
   * Courses
   *
   * @returns Success
   *
   * @throws {@link GolfV2.GolfV2CoursesCoursesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  golfV2CoursesCourses(
    request: GolfV2.GolfV2CoursesCoursesRequest,
    options?: RequestOptions,
  ): ApiPromise<Courses[], GolfV2.GolfV2CoursesCoursesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/golf/v2/{format}/Courses"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => coursesSchema)) },
        errorFactory: GolfV2.GolfV2CoursesCoursesError,
      },
      options,
    );
  }

  /**
   * Season Current
   *
   * @remarks
   * Season Current
   *
   * @returns Success
   *
   * @throws {@link GolfV2.GolfV2CurrentseasonSeasonCurrentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  golfV2CurrentseasonSeasonCurrent(
    request: GolfV2.GolfV2CurrentseasonSeasonCurrentRequest,
    options?: RequestOptions,
  ): ApiPromise<Season7, GolfV2.GolfV2CurrentseasonSeasonCurrentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/golf/v2/{format}/CurrentSeason"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: season7Schema },
        errorFactory: GolfV2.GolfV2CurrentseasonSeasonCurrentError,
      },
      options,
    );
  }

  /**
   * DFS Slate Ownership Projections - by Slate
   *
   * @remarks
   * Slate Ownership Projections for a specific slate. Projections are for Guaranteed Prize Pool
   * (GPP) format ownership. Will return an empty list if the slate is not yet projected or not a
   * slate we have projections for.
   *
   * @returns Success
   *
   * @throws {@link
   * GolfV2.GolfV2DfsslateownershipprojectionsbyslateidDfsSlateOwnershipProjectionsBySlateError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  golfV2DfsslateownershipprojectionsbyslateidDfsSlateOwnershipProjectionsBySlate(
    request: GolfV2.GolfV2DfsslateownershipprojectionsbyslateidDfsSlateOwnershipProjectionsBySlateRequest,
    options?: RequestOptions,
  ): ApiPromise<
    DfsSlateWithOwnershipProjection,
    GolfV2.GolfV2DfsslateownershipprojectionsbyslateidDfsSlateOwnershipProjectionsBySlateError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/golf/v2/{format}/DfsSlateOwnershipProjectionsBySlateID/{slateId}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "slateId", value: request.slateId, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dfsSlateWithOwnershipProjectionSchema },
        errorFactory:
          GolfV2.GolfV2DfsslateownershipprojectionsbyslateidDfsSlateOwnershipProjectionsBySlateError,
      },
      options,
    );
  }

  /**
   * DFS Slates - by Tournament
   *
   * @remarks
   * DFS Slates - by Tournament
   *
   * @returns Success
   *
   * @throws {@link GolfV2.GolfV2DfsslatesbytournamentDfsSlatesByTournamentError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  golfV2DfsslatesbytournamentDfsSlatesByTournament(
    request: GolfV2.GolfV2DfsslatesbytournamentDfsSlatesByTournamentRequest,
    options?: RequestOptions,
  ): ApiPromise<DfsSlate2[], GolfV2.GolfV2DfsslatesbytournamentDfsSlatesByTournamentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/golf/v2/{format}/DfsSlatesByTournament/{tournamentid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dfsSlate2Schema)) },
        errorFactory: GolfV2.GolfV2DfsslatesbytournamentDfsSlatesByTournamentError,
      },
      options,
    );
  }

  /**
   * Fantasy Points - by Tournament
   *
   * @remarks
   * Fantasy Points - by Tournament
   *
   * @returns Success
   *
   * @throws {@link GolfV2.GolfV2FantasygamestatsbytournamentFantasyPointsByTournamentError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  golfV2FantasygamestatsbytournamentFantasyPointsByTournament(
    request: GolfV2.GolfV2FantasygamestatsbytournamentFantasyPointsByTournamentRequest,
    options?: RequestOptions,
  ): ApiPromise<FantasyTournament, GolfV2.GolfV2FantasygamestatsbytournamentFantasyPointsByTournamentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/golf/v2/{format}/FantasyGameStatsByTournament/{tournamentid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fantasyTournamentSchema },
        errorFactory: GolfV2.GolfV2FantasygamestatsbytournamentFantasyPointsByTournamentError,
      },
      options,
    );
  }

  /**
   * Leaderboard [Live & Final]
   *
   * @remarks
   * Leaderboard [Live & Final]
   *
   * @returns Success
   *
   * @throws {@link GolfV2.GolfV2LeaderboardLeaderboardLiveFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  golfV2LeaderboardLeaderboardLiveFinal(
    request: GolfV2.GolfV2LeaderboardLeaderboardLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Leaderboard, GolfV2.GolfV2LeaderboardLeaderboardLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/golf/v2/{format}/Leaderboard/{tournamentid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: leaderboardSchema },
        errorFactory: GolfV2.GolfV2LeaderboardLeaderboardLiveFinalError,
      },
      options,
    );
  }

  /**
   * Leaderboard (Basic)
   *
   * @remarks
   * Leaderboard (Basic)
   *
   * @returns Success
   *
   * @throws {@link GolfV2.GolfV2LeaderboardbasicLeaderboardBasicError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  golfV2LeaderboardbasicLeaderboardBasic(
    request: GolfV2.GolfV2LeaderboardbasicLeaderboardBasicRequest,
    options?: RequestOptions,
  ): ApiPromise<LeaderboardBasic, GolfV2.GolfV2LeaderboardbasicLeaderboardBasicError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/golf/v2/{format}/LeaderboardBasic/{tournamentid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: leaderboardBasicSchema },
        errorFactory: GolfV2.GolfV2LeaderboardbasicLeaderboardBasicError,
      },
      options,
    );
  }

  /**
   * Leaderboard (Basic) [Final]
   *
   * @remarks
   * Leaderboard (Basic) [Final]
   *
   * @returns Success
   *
   * @throws {@link GolfV2.GolfV2LeaderboardbasicfinalLeaderboardBasicFinalError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  golfV2LeaderboardbasicfinalLeaderboardBasicFinal(
    request: GolfV2.GolfV2LeaderboardbasicfinalLeaderboardBasicFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<LeaderboardBasic, GolfV2.GolfV2LeaderboardbasicfinalLeaderboardBasicFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/golf/v2/{format}/LeaderboardBasicFinal/{tournamentid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: leaderboardBasicSchema },
        errorFactory: GolfV2.GolfV2LeaderboardbasicfinalLeaderboardBasicFinalError,
      },
      options,
    );
  }

  /**
   * Leaderboard [Final]
   *
   * @remarks
   * Leaderboard [Final]
   *
   * @returns Success
   *
   * @throws {@link GolfV2.GolfV2LeaderboardfinalLeaderboardFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  golfV2LeaderboardfinalLeaderboardFinal(
    request: GolfV2.GolfV2LeaderboardfinalLeaderboardFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Leaderboard, GolfV2.GolfV2LeaderboardfinalLeaderboardFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/golf/v2/{format}/LeaderboardFinal/{tournamentid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: leaderboardSchema },
        errorFactory: GolfV2.GolfV2LeaderboardfinalLeaderboardFinalError,
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
   * @throws {@link GolfV2.GolfV2NewsNewsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  golfV2NewsNews(
    request: GolfV2.GolfV2NewsNewsRequest,
    options?: RequestOptions,
  ): ApiPromise<News2[], GolfV2.GolfV2NewsNewsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/golf/v2/{format}/News"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => news2Schema)) },
        errorFactory: GolfV2.GolfV2NewsNewsError,
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
   * @throws {@link GolfV2.GolfV2NewsbydateNewsByDateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  golfV2NewsbydateNewsByDate(
    request: GolfV2.GolfV2NewsbydateNewsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<News2[], GolfV2.GolfV2NewsbydateNewsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/golf/v2/{format}/NewsByDate/{date}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => news2Schema)) },
        errorFactory: GolfV2.GolfV2NewsbydateNewsByDateError,
      },
      options,
    );
  }

  /**
   * Player
   *
   * @remarks
   * Player
   *
   * @returns Success
   *
   * @throws {@link GolfV2.GolfV2PlayerPlayerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  golfV2PlayerPlayer(
    request: GolfV2.GolfV2PlayerPlayerRequest,
    options?: RequestOptions,
  ): ApiPromise<Player8, GolfV2.GolfV2PlayerPlayerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/golf/v2/{format}/Player/{playerid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "playerid", value: request.playerid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: player8Schema },
        errorFactory: GolfV2.GolfV2PlayerPlayerError,
      },
      options,
    );
  }

  /**
   * Player Profiles - All
   *
   * @remarks
   * Player Profiles - All
   *
   * @returns Success
   *
   * @throws {@link GolfV2.GolfV2PlayersPlayerProfilesAllError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  golfV2PlayersPlayerProfilesAll(
    request: GolfV2.GolfV2PlayersPlayerProfilesAllRequest,
    options?: RequestOptions,
  ): ApiPromise<Player8[], GolfV2.GolfV2PlayersPlayerProfilesAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/golf/v2/{format}/Players"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player8Schema)) },
        errorFactory: GolfV2.GolfV2PlayersPlayerProfilesAllError,
      },
      options,
    );
  }

  /**
   * Player Season Stats
   *
   * @remarks
   * Player Season Stats
   *
   * @returns Success
   *
   * @throws {@link GolfV2.GolfV2PlayerseasonstatsPlayerSeasonStatsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  golfV2PlayerseasonstatsPlayerSeasonStats(
    request: GolfV2.GolfV2PlayerseasonstatsPlayerSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason9[], GolfV2.GolfV2PlayerseasonstatsPlayerSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/golf/v2/{format}/PlayerSeasonStats/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason9Schema)) },
        errorFactory: GolfV2.GolfV2PlayerseasonstatsPlayerSeasonStatsError,
      },
      options,
    );
  }

  /**
   * Player Hole Scores - by Tournament [Live & Final]
   *
   * @remarks
   * Player Hole Scores - by Tournament [Live & Final]
   *
   * @returns Success
   *
   * @throws {@link
   * GolfV2.GolfV2PlayertournamentholescoresPlayerHoleScoresByTournamentLiveFinalError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  golfV2PlayertournamentholescoresPlayerHoleScoresByTournamentLiveFinal(
    request: GolfV2.GolfV2PlayertournamentholescoresPlayerHoleScoresByTournamentLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PlayerTournamentBasic[],
    GolfV2.GolfV2PlayertournamentholescoresPlayerHoleScoresByTournamentLiveFinalError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/golf/v2/{format}/PlayerTournamentHoleScores/{tournamentid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerTournamentBasicSchema)) },
        errorFactory: GolfV2.GolfV2PlayertournamentholescoresPlayerHoleScoresByTournamentLiveFinalError,
      },
      options,
    );
  }

  /**
   * Player Hole Scores - by Tournament [Final]
   *
   * @remarks
   * Player Hole Scores - by Tournament [Final]
   *
   * @returns Success
   *
   * @throws {@link
   * GolfV2.GolfV2PlayertournamentholescoresfinalPlayerHoleScoresByTournamentFinalError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  golfV2PlayertournamentholescoresfinalPlayerHoleScoresByTournamentFinal(
    request: GolfV2.GolfV2PlayertournamentholescoresfinalPlayerHoleScoresByTournamentFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PlayerTournamentBasic[],
    GolfV2.GolfV2PlayertournamentholescoresfinalPlayerHoleScoresByTournamentFinalError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/golf/v2/{format}/PlayerTournamentHoleScoresFinal/{tournamentid}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerTournamentBasicSchema)) },
        errorFactory: GolfV2.GolfV2PlayertournamentholescoresfinalPlayerHoleScoresByTournamentFinalError,
      },
      options,
    );
  }

  /**
   * Player Projected Stats - by Tournament
   *
   * @remarks
   * Player Projected Stats - by Tournament
   *
   * @returns Success
   *
   * @throws {@link
   * GolfV2.GolfV2PlayertournamentprojectionstatsPlayerProjectedStatsByTournamentError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  golfV2PlayertournamentprojectionstatsPlayerProjectedStatsByTournament(
    request: GolfV2.GolfV2PlayertournamentprojectionstatsPlayerProjectedStatsByTournamentRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PlayerTournamentProjection[],
    GolfV2.GolfV2PlayertournamentprojectionstatsPlayerProjectedStatsByTournamentError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/golf/v2/{format}/PlayerTournamentProjectionStats/{tournamentid}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerTournamentProjectionSchema)) },
        errorFactory: GolfV2.GolfV2PlayertournamentprojectionstatsPlayerProjectedStatsByTournamentError,
      },
      options,
    );
  }

  /**
   * Scores - by Tournament [Live & Final]
   *
   * @remarks
   * Scores - by Tournament [Live & Final]
   *
   * @returns Success
   *
   * @throws {@link GolfV2.GolfV2PlayertournamentroundscoresScoresByTournamentLiveFinalError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  golfV2PlayertournamentroundscoresScoresByTournamentLiveFinal(
    request: GolfV2.GolfV2PlayertournamentroundscoresScoresByTournamentLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TournamentRound[], GolfV2.GolfV2PlayertournamentroundscoresScoresByTournamentLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/golf/v2/{format}/PlayerTournamentRoundScores/{tournamentid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => tournamentRoundSchema)) },
        errorFactory: GolfV2.GolfV2PlayertournamentroundscoresScoresByTournamentLiveFinalError,
      },
      options,
    );
  }

  /**
   * Scores - by Tournament [Final]
   *
   * @remarks
   * Scores - by Tournament [Final]
   *
   * @returns Success
   *
   * @throws {@link GolfV2.GolfV2PlayertournamentroundscoresfinalScoresByTournamentFinalError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  golfV2PlayertournamentroundscoresfinalScoresByTournamentFinal(
    request: GolfV2.GolfV2PlayertournamentroundscoresfinalScoresByTournamentFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TournamentRound[],
    GolfV2.GolfV2PlayertournamentroundscoresfinalScoresByTournamentFinalError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/golf/v2/{format}/PlayerTournamentRoundScoresFinal/{tournamentid}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => tournamentRoundSchema)) },
        errorFactory: GolfV2.GolfV2PlayertournamentroundscoresfinalScoresByTournamentFinalError,
      },
      options,
    );
  }

  /**
   * Rankings
   *
   * @remarks
   * Rankings
   *
   * @returns Success
   *
   * @throws {@link GolfV2.GolfV2RankingsRankingsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  golfV2RankingsRankings(
    request: GolfV2.GolfV2RankingsRankingsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason9[], GolfV2.GolfV2RankingsRankingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/golf/v2/{format}/Rankings/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason9Schema)) },
        errorFactory: GolfV2.GolfV2RankingsRankingsError,
      },
      options,
    );
  }

  /**
   * Schedule - by Season
   *
   * @remarks
   * Schedule - by Season
   *
   * @returns Success
   *
   * @throws {@link GolfV2.GolfV2TournamentsScheduleBySeasonError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  golfV2TournamentsScheduleBySeason(
    request: GolfV2.GolfV2TournamentsScheduleBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<Tournament1[], GolfV2.GolfV2TournamentsScheduleBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/golf/v2/{format}/Tournaments/{season}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => tournament1Schema)) },
        errorFactory: GolfV2.GolfV2TournamentsScheduleBySeasonError,
      },
      options,
    );
  }

  /**
   * Schedules
   *
   * @remarks
   * Schedules
   *
   * @returns Success
   *
   * @throws {@link GolfV2.GolfV2TournamentsSchedulesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  golfV2TournamentsSchedules(
    request: GolfV2.GolfV2TournamentsSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<Tournament1[], GolfV2.GolfV2TournamentsSchedulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/golf/v2/{format}/Tournaments"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => tournament1Schema)) },
        errorFactory: GolfV2.GolfV2TournamentsSchedulesError,
      },
      options,
    );
  }

  /**
   * DFS Slate Ownership Projections - Upcoming
   *
   * @remarks
   * Returns DFS Slates which have not yet started for which we have DFS Ownership projections.
   *
   * @returns Success
   *
   * @throws {@link
   * GolfV2.GolfV2UpcomingdfsslateownershipprojectionsDfsSlateOwnershipProjectionsUpcomingError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  golfV2UpcomingdfsslateownershipprojectionsDfsSlateOwnershipProjectionsUpcoming(
    request: GolfV2.GolfV2UpcomingdfsslateownershipprojectionsDfsSlateOwnershipProjectionsUpcomingRequest,
    options?: RequestOptions,
  ): ApiPromise<
    DfsSlateWithOwnershipProjection[],
    GolfV2.GolfV2UpcomingdfsslateownershipprojectionsDfsSlateOwnershipProjectionsUpcomingError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/golf/v2/{format}/UpcomingDfsSlateOwnershipProjections"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dfsSlateWithOwnershipProjectionSchema)) },
        errorFactory:
          GolfV2.GolfV2UpcomingdfsslateownershipprojectionsDfsSlateOwnershipProjectionsUpcomingError,
      },
      options,
    );
  }
}

export namespace GolfV2 {
  export type GolfV2CoursesCoursesRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class GolfV2CoursesCoursesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<GolfV2CoursesCoursesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2CurrentseasonSeasonCurrentRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class GolfV2CurrentseasonSeasonCurrentError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<GolfV2CurrentseasonSeasonCurrentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2DfsslateownershipprojectionsbyslateidDfsSlateOwnershipProjectionsBySlateRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * SlateID of the DFS Slate you wish to get ownership projections for. Will have an empty
     * SlateOwnershipProjections if this slate was not projected
     */
    slateId: number;
  };

  export class GolfV2DfsslateownershipprojectionsbyslateidDfsSlateOwnershipProjectionsBySlateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<GolfV2DfsslateownershipprojectionsbyslateidDfsSlateOwnershipProjectionsBySlateError> =
      [{ on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } }];
  }

  export type GolfV2DfsslatesbytournamentDfsSlatesByTournamentRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid
     * entries are <code>58</code>, <code>61</code>, etc.
     */
    tournamentid: string;
  };

  export class GolfV2DfsslatesbytournamentDfsSlatesByTournamentError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<GolfV2DfsslatesbytournamentDfsSlatesByTournamentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2FantasygamestatsbytournamentFantasyPointsByTournamentRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid
     * entries are <code>78</code>, <code>79</code>, <code>80</code>, etc.
     */
    tournamentid: string;
  };

  export class GolfV2FantasygamestatsbytournamentFantasyPointsByTournamentError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<GolfV2FantasygamestatsbytournamentFantasyPointsByTournamentError> =
      [{ on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } }];
  }

  export type GolfV2LeaderboardLeaderboardLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid
     * entries are <code>58</code>, <code>61</code>, etc.
     */
    tournamentid: string;
  };

  export class GolfV2LeaderboardLeaderboardLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<GolfV2LeaderboardLeaderboardLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2LeaderboardbasicLeaderboardBasicRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid
     * entries are <code>58</code>, <code>61</code>, etc.
     */
    tournamentid: string;
  };

  export class GolfV2LeaderboardbasicLeaderboardBasicError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<GolfV2LeaderboardbasicLeaderboardBasicError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2LeaderboardbasicfinalLeaderboardBasicFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid
     * entries are <code>58</code>, <code>61</code>, etc.
     */
    tournamentid: string;
  };

  export class GolfV2LeaderboardbasicfinalLeaderboardBasicFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<GolfV2LeaderboardbasicfinalLeaderboardBasicFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2LeaderboardfinalLeaderboardFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid
     * entries are <code>58</code>, <code>61</code>, etc.
     */
    tournamentid: string;
  };

  export class GolfV2LeaderboardfinalLeaderboardFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<GolfV2LeaderboardfinalLeaderboardFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2NewsNewsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class GolfV2NewsNewsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<GolfV2NewsNewsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2NewsbydateNewsByDateRequest = {
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

  export class GolfV2NewsbydateNewsByDateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<GolfV2NewsbydateNewsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2PlayerPlayerRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Unique FantasyData Player ID. Example:<code>40000019</code>. */
    playerid: string;
  };

  export class GolfV2PlayerPlayerError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<GolfV2PlayerPlayerError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2PlayersPlayerProfilesAllRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class GolfV2PlayersPlayerProfilesAllError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<GolfV2PlayersPlayerProfilesAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2PlayerseasonstatsPlayerSeasonStatsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2016</code>, <code>2017</code>. */
    season: string;
  };

  export class GolfV2PlayerseasonstatsPlayerSeasonStatsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<GolfV2PlayerseasonstatsPlayerSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2PlayertournamentholescoresPlayerHoleScoresByTournamentLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid
     * entries are <code>58</code>, <code>61</code>, etc.
     */
    tournamentid: string;
  };

  export class GolfV2PlayertournamentholescoresPlayerHoleScoresByTournamentLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<GolfV2PlayertournamentholescoresPlayerHoleScoresByTournamentLiveFinalError> =
      [{ on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } }];
  }

  export type GolfV2PlayertournamentholescoresfinalPlayerHoleScoresByTournamentFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid
     * entries are <code>58</code>, <code>61</code>, etc.
     */
    tournamentid: string;
  };

  export class GolfV2PlayertournamentholescoresfinalPlayerHoleScoresByTournamentFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<GolfV2PlayertournamentholescoresfinalPlayerHoleScoresByTournamentFinalError> =
      [{ on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } }];
  }

  export type GolfV2PlayertournamentprojectionstatsPlayerProjectedStatsByTournamentRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid
     * entries are <code>78</code>, <code>79</code>, <code>80</code>, etc.
     */
    tournamentid: string;
  };

  export class GolfV2PlayertournamentprojectionstatsPlayerProjectedStatsByTournamentError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<GolfV2PlayertournamentprojectionstatsPlayerProjectedStatsByTournamentError> =
      [{ on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } }];
  }

  export type GolfV2PlayertournamentroundscoresScoresByTournamentLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid
     * entries are <code>58</code>, <code>61</code>, etc.
     */
    tournamentid: string;
  };

  export class GolfV2PlayertournamentroundscoresScoresByTournamentLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<GolfV2PlayertournamentroundscoresScoresByTournamentLiveFinalError> =
      [{ on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } }];
  }

  export type GolfV2PlayertournamentroundscoresfinalScoresByTournamentFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * The TournamentID of a tournament. TournamentIDs can be found in the Tournaments API. Valid
     * entries are <code>58</code>, <code>61</code>, etc.
     */
    tournamentid: string;
  };

  export class GolfV2PlayertournamentroundscoresfinalScoresByTournamentFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<GolfV2PlayertournamentroundscoresfinalScoresByTournamentFinalError> =
      [{ on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } }];
  }

  export type GolfV2RankingsRankingsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2016</code>, <code>2017</code>. */
    season: string;
  };

  export class GolfV2RankingsRankingsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<GolfV2RankingsRankingsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2TournamentsScheduleBySeasonRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /** Year of the season. <br>Examples: <code>2016</code>, <code>2017</code>. */
    season: string;
  };

  export class GolfV2TournamentsScheduleBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<GolfV2TournamentsScheduleBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2TournamentsSchedulesRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class GolfV2TournamentsSchedulesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<GolfV2TournamentsSchedulesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2UpcomingdfsslateownershipprojectionsDfsSlateOwnershipProjectionsUpcomingRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class GolfV2UpcomingdfsslateownershipprojectionsDfsSlateOwnershipProjectionsUpcomingError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<GolfV2UpcomingdfsslateownershipprojectionsDfsSlateOwnershipProjectionsUpcomingError> =
      [{ on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } }];
  }
}
