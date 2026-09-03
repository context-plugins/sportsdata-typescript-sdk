import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  golfV2CoursesCourses(
    request: GolfV2.GolfV2CoursesCoursesRequest,
    options?: RequestOptions,
  ): ApiPromise<Courses[], GolfV2.GolfV2CoursesCoursesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/golf/v2/{format}/Courses"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => coursesSchema)) },
        errorFactory: GolfV2.GolfV2CoursesCoursesError,
      },
      options,
    );
  }

  golfV2CurrentseasonSeasonCurrent(
    request: GolfV2.GolfV2CurrentseasonSeasonCurrentRequest,
    options?: RequestOptions,
  ): ApiPromise<Season7, GolfV2.GolfV2CurrentseasonSeasonCurrentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/golf/v2/{format}/CurrentSeason"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: season7Schema },
        errorFactory: GolfV2.GolfV2CurrentseasonSeasonCurrentError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/golf/v2/{format}/DfsSlateOwnershipProjectionsBySlateID/{slateId}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "slateId", value: request.slateId, schema: s.number() },
        ],
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

  golfV2DfsslatesbytournamentDfsSlatesByTournament(
    request: GolfV2.GolfV2DfsslatesbytournamentDfsSlatesByTournamentRequest,
    options?: RequestOptions,
  ): ApiPromise<DfsSlate2[], GolfV2.GolfV2DfsslatesbytournamentDfsSlatesByTournamentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/golf/v2/{format}/DfsSlatesByTournament/{tournamentid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dfsSlate2Schema)) },
        errorFactory: GolfV2.GolfV2DfsslatesbytournamentDfsSlatesByTournamentError,
      },
      options,
    );
  }

  golfV2FantasygamestatsbytournamentFantasyPointsByTournament(
    request: GolfV2.GolfV2FantasygamestatsbytournamentFantasyPointsByTournamentRequest,
    options?: RequestOptions,
  ): ApiPromise<FantasyTournament, GolfV2.GolfV2FantasygamestatsbytournamentFantasyPointsByTournamentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/golf/v2/{format}/FantasyGameStatsByTournament/{tournamentid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fantasyTournamentSchema },
        errorFactory: GolfV2.GolfV2FantasygamestatsbytournamentFantasyPointsByTournamentError,
      },
      options,
    );
  }

  golfV2LeaderboardLeaderboardLiveFinal(
    request: GolfV2.GolfV2LeaderboardLeaderboardLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Leaderboard, GolfV2.GolfV2LeaderboardLeaderboardLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/golf/v2/{format}/Leaderboard/{tournamentid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: leaderboardSchema },
        errorFactory: GolfV2.GolfV2LeaderboardLeaderboardLiveFinalError,
      },
      options,
    );
  }

  golfV2LeaderboardbasicLeaderboardBasic(
    request: GolfV2.GolfV2LeaderboardbasicLeaderboardBasicRequest,
    options?: RequestOptions,
  ): ApiPromise<LeaderboardBasic, GolfV2.GolfV2LeaderboardbasicLeaderboardBasicError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/golf/v2/{format}/LeaderboardBasic/{tournamentid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: leaderboardBasicSchema },
        errorFactory: GolfV2.GolfV2LeaderboardbasicLeaderboardBasicError,
      },
      options,
    );
  }

  golfV2LeaderboardbasicfinalLeaderboardBasicFinal(
    request: GolfV2.GolfV2LeaderboardbasicfinalLeaderboardBasicFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<LeaderboardBasic, GolfV2.GolfV2LeaderboardbasicfinalLeaderboardBasicFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/golf/v2/{format}/LeaderboardBasicFinal/{tournamentid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: leaderboardBasicSchema },
        errorFactory: GolfV2.GolfV2LeaderboardbasicfinalLeaderboardBasicFinalError,
      },
      options,
    );
  }

  golfV2LeaderboardfinalLeaderboardFinal(
    request: GolfV2.GolfV2LeaderboardfinalLeaderboardFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Leaderboard, GolfV2.GolfV2LeaderboardfinalLeaderboardFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/golf/v2/{format}/LeaderboardFinal/{tournamentid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: leaderboardSchema },
        errorFactory: GolfV2.GolfV2LeaderboardfinalLeaderboardFinalError,
      },
      options,
    );
  }

  golfV2NewsNews(
    request: GolfV2.GolfV2NewsNewsRequest,
    options?: RequestOptions,
  ): ApiPromise<News2[], GolfV2.GolfV2NewsNewsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/golf/v2/{format}/News"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => news2Schema)) },
        errorFactory: GolfV2.GolfV2NewsNewsError,
      },
      options,
    );
  }

  golfV2NewsbydateNewsByDate(
    request: GolfV2.GolfV2NewsbydateNewsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<News2[], GolfV2.GolfV2NewsbydateNewsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/golf/v2/{format}/NewsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => news2Schema)) },
        errorFactory: GolfV2.GolfV2NewsbydateNewsByDateError,
      },
      options,
    );
  }

  golfV2PlayerPlayer(
    request: GolfV2.GolfV2PlayerPlayerRequest,
    options?: RequestOptions,
  ): ApiPromise<Player8, GolfV2.GolfV2PlayerPlayerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/golf/v2/{format}/Player/{playerid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "playerid", value: request.playerid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: player8Schema },
        errorFactory: GolfV2.GolfV2PlayerPlayerError,
      },
      options,
    );
  }

  golfV2PlayersPlayerProfilesAll(
    request: GolfV2.GolfV2PlayersPlayerProfilesAllRequest,
    options?: RequestOptions,
  ): ApiPromise<Player8[], GolfV2.GolfV2PlayersPlayerProfilesAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/golf/v2/{format}/Players"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player8Schema)) },
        errorFactory: GolfV2.GolfV2PlayersPlayerProfilesAllError,
      },
      options,
    );
  }

  golfV2PlayerseasonstatsPlayerSeasonStats(
    request: GolfV2.GolfV2PlayerseasonstatsPlayerSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason9[], GolfV2.GolfV2PlayerseasonstatsPlayerSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/golf/v2/{format}/PlayerSeasonStats/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason9Schema)) },
        errorFactory: GolfV2.GolfV2PlayerseasonstatsPlayerSeasonStatsError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/golf/v2/{format}/PlayerTournamentHoleScores/{tournamentid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerTournamentBasicSchema)) },
        errorFactory: GolfV2.GolfV2PlayertournamentholescoresPlayerHoleScoresByTournamentLiveFinalError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/golf/v2/{format}/PlayerTournamentHoleScoresFinal/{tournamentid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerTournamentBasicSchema)) },
        errorFactory: GolfV2.GolfV2PlayertournamentholescoresfinalPlayerHoleScoresByTournamentFinalError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/golf/v2/{format}/PlayerTournamentProjectionStats/{tournamentid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerTournamentProjectionSchema)) },
        errorFactory: GolfV2.GolfV2PlayertournamentprojectionstatsPlayerProjectedStatsByTournamentError,
      },
      options,
    );
  }

  golfV2PlayertournamentroundscoresScoresByTournamentLiveFinal(
    request: GolfV2.GolfV2PlayertournamentroundscoresScoresByTournamentLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TournamentRound[], GolfV2.GolfV2PlayertournamentroundscoresScoresByTournamentLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/golf/v2/{format}/PlayerTournamentRoundScores/{tournamentid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => tournamentRoundSchema)) },
        errorFactory: GolfV2.GolfV2PlayertournamentroundscoresScoresByTournamentLiveFinalError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/golf/v2/{format}/PlayerTournamentRoundScoresFinal/{tournamentid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "tournamentid", value: request.tournamentid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => tournamentRoundSchema)) },
        errorFactory: GolfV2.GolfV2PlayertournamentroundscoresfinalScoresByTournamentFinalError,
      },
      options,
    );
  }

  golfV2RankingsRankings(
    request: GolfV2.GolfV2RankingsRankingsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason9[], GolfV2.GolfV2RankingsRankingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/golf/v2/{format}/Rankings/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason9Schema)) },
        errorFactory: GolfV2.GolfV2RankingsRankingsError,
      },
      options,
    );
  }

  golfV2TournamentsScheduleBySeason(
    request: GolfV2.GolfV2TournamentsScheduleBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<Tournament1[], GolfV2.GolfV2TournamentsScheduleBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/golf/v2/{format}/Tournaments/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => tournament1Schema)) },
        errorFactory: GolfV2.GolfV2TournamentsScheduleBySeasonError,
      },
      options,
    );
  }

  golfV2TournamentsSchedules(
    request: GolfV2.GolfV2TournamentsSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<Tournament1[], GolfV2.GolfV2TournamentsSchedulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/golf/v2/{format}/Tournaments"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => tournament1Schema)) },
        errorFactory: GolfV2.GolfV2TournamentsSchedulesError,
      },
      options,
    );
  }

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
        url: this.#servers.default("/golf/v2/{format}/UpcomingDfsSlateOwnershipProjections"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
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
    format?: Format;
  };

  export class GolfV2CoursesCoursesError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<GolfV2CoursesCoursesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2CurrentseasonSeasonCurrentRequest = {
    format?: Format;
  };

  export class GolfV2CurrentseasonSeasonCurrentError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV2CurrentseasonSeasonCurrentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2DfsslateownershipprojectionsbyslateidDfsSlateOwnershipProjectionsBySlateRequest = {
    format?: Format;
    slateId: number;
  };

  export class GolfV2DfsslateownershipprojectionsbyslateidDfsSlateOwnershipProjectionsBySlateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV2DfsslateownershipprojectionsbyslateidDfsSlateOwnershipProjectionsBySlateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2DfsslatesbytournamentDfsSlatesByTournamentRequest = {
    format?: Format;
    tournamentid: string;
  };

  export class GolfV2DfsslatesbytournamentDfsSlatesByTournamentError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV2DfsslatesbytournamentDfsSlatesByTournamentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2FantasygamestatsbytournamentFantasyPointsByTournamentRequest = {
    format?: Format;
    tournamentid: string;
  };

  export class GolfV2FantasygamestatsbytournamentFantasyPointsByTournamentError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV2FantasygamestatsbytournamentFantasyPointsByTournamentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2LeaderboardLeaderboardLiveFinalRequest = {
    format?: Format;
    tournamentid: string;
  };

  export class GolfV2LeaderboardLeaderboardLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV2LeaderboardLeaderboardLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2LeaderboardbasicLeaderboardBasicRequest = {
    format?: Format;
    tournamentid: string;
  };

  export class GolfV2LeaderboardbasicLeaderboardBasicError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV2LeaderboardbasicLeaderboardBasicError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2LeaderboardbasicfinalLeaderboardBasicFinalRequest = {
    format?: Format;
    tournamentid: string;
  };

  export class GolfV2LeaderboardbasicfinalLeaderboardBasicFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV2LeaderboardbasicfinalLeaderboardBasicFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2LeaderboardfinalLeaderboardFinalRequest = {
    format?: Format;
    tournamentid: string;
  };

  export class GolfV2LeaderboardfinalLeaderboardFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV2LeaderboardfinalLeaderboardFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2NewsNewsRequest = {
    format?: Format;
  };

  export class GolfV2NewsNewsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<GolfV2NewsNewsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2NewsbydateNewsByDateRequest = {
    format?: Format;
    date: string;
  };

  export class GolfV2NewsbydateNewsByDateError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<GolfV2NewsbydateNewsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2PlayerPlayerRequest = {
    format?: Format;
    playerid: string;
  };

  export class GolfV2PlayerPlayerError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<GolfV2PlayerPlayerError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2PlayersPlayerProfilesAllRequest = {
    format?: Format;
  };

  export class GolfV2PlayersPlayerProfilesAllError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV2PlayersPlayerProfilesAllError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2PlayerseasonstatsPlayerSeasonStatsRequest = {
    format?: Format;
    season: string;
  };

  export class GolfV2PlayerseasonstatsPlayerSeasonStatsError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV2PlayerseasonstatsPlayerSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2PlayertournamentholescoresPlayerHoleScoresByTournamentLiveFinalRequest = {
    format?: Format;
    tournamentid: string;
  };

  export class GolfV2PlayertournamentholescoresPlayerHoleScoresByTournamentLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV2PlayertournamentholescoresPlayerHoleScoresByTournamentLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2PlayertournamentholescoresfinalPlayerHoleScoresByTournamentFinalRequest = {
    format?: Format;
    tournamentid: string;
  };

  export class GolfV2PlayertournamentholescoresfinalPlayerHoleScoresByTournamentFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV2PlayertournamentholescoresfinalPlayerHoleScoresByTournamentFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2PlayertournamentprojectionstatsPlayerProjectedStatsByTournamentRequest = {
    format?: Format;
    tournamentid: string;
  };

  export class GolfV2PlayertournamentprojectionstatsPlayerProjectedStatsByTournamentError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV2PlayertournamentprojectionstatsPlayerProjectedStatsByTournamentError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2PlayertournamentroundscoresScoresByTournamentLiveFinalRequest = {
    format?: Format;
    tournamentid: string;
  };

  export class GolfV2PlayertournamentroundscoresScoresByTournamentLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV2PlayertournamentroundscoresScoresByTournamentLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2PlayertournamentroundscoresfinalScoresByTournamentFinalRequest = {
    format?: Format;
    tournamentid: string;
  };

  export class GolfV2PlayertournamentroundscoresfinalScoresByTournamentFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV2PlayertournamentroundscoresfinalScoresByTournamentFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2RankingsRankingsRequest = {
    format?: Format;
    season: string;
  };

  export class GolfV2RankingsRankingsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<GolfV2RankingsRankingsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2TournamentsScheduleBySeasonRequest = {
    format?: Format;
    season: string;
  };

  export class GolfV2TournamentsScheduleBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV2TournamentsScheduleBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2TournamentsSchedulesRequest = {
    format?: Format;
  };

  export class GolfV2TournamentsSchedulesError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<GolfV2TournamentsSchedulesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type GolfV2UpcomingdfsslateownershipprojectionsDfsSlateOwnershipProjectionsUpcomingRequest = {
    format?: Format;
  };

  export class GolfV2UpcomingdfsslateownershipprojectionsDfsSlateOwnershipProjectionsUpcomingError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<GolfV2UpcomingdfsslateownershipprojectionsDfsSlateOwnershipProjectionsUpcomingError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
