import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { boxScore1Schema, type BoxScore1 } from "../models/box-score1.js";
import { fantasyGame2Schema, type FantasyGame2 } from "../models/fantasy-game2.js";
import { Format, formatSchema } from "../models/format.js";
import { playerGame2Schema, type PlayerGame2 } from "../models/player-game2.js";
import { playerSeason3Schema, type PlayerSeason3 } from "../models/player-season3.js";
import { Split, splitSchema } from "../models/split.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class MlbV3Stats {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  mlbV3StatsBatterVsPitcherStats(
    request: MlbV3Stats.MlbV3StatsBatterVsPitcherStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason3[], MlbV3Stats.MlbV3StatsBatterVsPitcherStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/stats/{format}/HitterVsPitcher/{hitterid}/{pitcherid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "hitterid", value: request.hitterid, schema: s.string() },
          { name: "pitcherid", value: request.pitcherid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason3Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsBatterVsPitcherStatsError,
      },
      options,
    );
  }

  mlbV3StatsBoxScoreFinal(
    request: MlbV3Stats.MlbV3StatsBoxScoreFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore1, MlbV3Stats.MlbV3StatsBoxScoreFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/stats/{format}/BoxScoreFinal/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: boxScore1Schema },
        errorFactory: MlbV3Stats.MlbV3StatsBoxScoreFinalError,
      },
      options,
    );
  }

  mlbV3StatsBoxScoreLiveFinal(
    request: MlbV3Stats.MlbV3StatsBoxScoreLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore1, MlbV3Stats.MlbV3StatsBoxScoreLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/stats/{format}/BoxScore/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: boxScore1Schema },
        errorFactory: MlbV3Stats.MlbV3StatsBoxScoreLiveFinalError,
      },
      options,
    );
  }

  mlbV3StatsBoxScoresByDateFinal(
    request: MlbV3Stats.MlbV3StatsBoxScoresByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore1[], MlbV3Stats.MlbV3StatsBoxScoresByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/stats/{format}/BoxScoresFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore1Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsBoxScoresByDateFinalError,
      },
      options,
    );
  }

  mlbV3StatsBoxScoresByDateLiveFinal(
    request: MlbV3Stats.MlbV3StatsBoxScoresByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore1[], MlbV3Stats.MlbV3StatsBoxScoresByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/stats/{format}/BoxScores/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore1Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsBoxScoresByDateLiveFinalError,
      },
      options,
    );
  }

  mlbV3StatsBoxScoresDeltaByDate(
    request: MlbV3Stats.MlbV3StatsBoxScoresDeltaByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore1[], MlbV3Stats.MlbV3StatsBoxScoresDeltaByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/stats/{format}/BoxScoresDelta/{date}/{minutes}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
          { name: "minutes", value: request.minutes, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore1Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsBoxScoresDeltaByDateError,
      },
      options,
    );
  }

  mlbV3StatsFantasyPointsByDate(
    request: MlbV3Stats.MlbV3StatsFantasyPointsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<FantasyGame2[], MlbV3Stats.MlbV3StatsFantasyPointsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/stats/{format}/FantasyGameStatsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => fantasyGame2Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsFantasyPointsByDateError,
      },
      options,
    );
  }

  mlbV3StatsPlayerGameLogsBySeason(
    request: MlbV3Stats.MlbV3StatsPlayerGameLogsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame2[], MlbV3Stats.MlbV3StatsPlayerGameLogsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/mlb/stats/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "playerid", value: request.playerid, schema: s.string() },
          { name: "numberofgames", value: request.numberofgames, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame2Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsPlayerGameLogsBySeasonError,
      },
      options,
    );
  }

  mlbV3StatsPlayerGameStatsByDateFinal(
    request: MlbV3Stats.MlbV3StatsPlayerGameStatsByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame2[], MlbV3Stats.MlbV3StatsPlayerGameStatsByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/stats/{format}/PlayerGameStatsByDateFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame2Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsPlayerGameStatsByDateFinalError,
      },
      options,
    );
  }

  mlbV3StatsPlayerGameStatsByDateLiveFinal(
    request: MlbV3Stats.MlbV3StatsPlayerGameStatsByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame2[], MlbV3Stats.MlbV3StatsPlayerGameStatsByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/stats/{format}/PlayerGameStatsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame2Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsPlayerGameStatsByDateLiveFinalError,
      },
      options,
    );
  }

  mlbV3StatsPlayerSeasonSplitStats(
    request: MlbV3Stats.MlbV3StatsPlayerSeasonSplitStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason3[], MlbV3Stats.MlbV3StatsPlayerSeasonSplitStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/stats/{format}/PlayerSeasonSplitStats/{season}/{split}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "split", value: request.split, schema: s.defaulted(splitSchema, Split.L) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason3Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsPlayerSeasonSplitStatsError,
      },
      options,
    );
  }

  mlbV3StatsPlayerSeasonStats(
    request: MlbV3Stats.MlbV3StatsPlayerSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason3[], MlbV3Stats.MlbV3StatsPlayerSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/stats/{format}/PlayerSeasonStats/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason3Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsPlayerSeasonStatsError,
      },
      options,
    );
  }

  mlbV3StatsPlayerSeasonStatsByAway(
    request: MlbV3Stats.MlbV3StatsPlayerSeasonStatsByAwayRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason3[], MlbV3Stats.MlbV3StatsPlayerSeasonStatsByAwayError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/stats/{format}/PlayerSeasonAwayStats/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason3Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsPlayerSeasonStatsByAwayError,
      },
      options,
    );
  }

  mlbV3StatsPlayerSeasonStatsByHome(
    request: MlbV3Stats.MlbV3StatsPlayerSeasonStatsByHomeRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason3[], MlbV3Stats.MlbV3StatsPlayerSeasonStatsByHomeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/stats/{format}/PlayerSeasonHomeStats/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason3Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsPlayerSeasonStatsByHomeError,
      },
      options,
    );
  }

  mlbV3StatsPlayerSeasonStatsByTeam(
    request: MlbV3Stats.MlbV3StatsPlayerSeasonStatsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason3[], MlbV3Stats.MlbV3StatsPlayerSeasonStatsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/stats/{format}/PlayerSeasonStatsByTeam/{season}/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason3Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsPlayerSeasonStatsByTeamError,
      },
      options,
    );
  }

  mlbV3StatsPlayerSeasonStatsSplitByTeam(
    request: MlbV3Stats.MlbV3StatsPlayerSeasonStatsSplitByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason3[], MlbV3Stats.MlbV3StatsPlayerSeasonStatsSplitByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/stats/{format}/PlayerSeasonStatsSplitByTeam/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason3Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsPlayerSeasonStatsSplitByTeamError,
      },
      options,
    );
  }

  mlbV3StatsTeamHittingVsStartingPitcher(
    request: MlbV3Stats.MlbV3StatsTeamHittingVsStartingPitcherRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason3[], MlbV3Stats.MlbV3StatsTeamHittingVsStartingPitcherError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/mlb/stats/{format}/TeamHittersVsPitcher/{gameid}/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason3Schema)) },
        errorFactory: MlbV3Stats.MlbV3StatsTeamHittingVsStartingPitcherError,
      },
      options,
    );
  }
}

export namespace MlbV3Stats {
  export type MlbV3StatsBatterVsPitcherStatsRequest = {
    format?: Format;
    hitterid: string;
    pitcherid: string;
  };

  export class MlbV3StatsBatterVsPitcherStatsError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3StatsBatterVsPitcherStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsBoxScoreFinalRequest = {
    format?: Format;
    gameid: string;
  };

  export class MlbV3StatsBoxScoreFinalError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<MlbV3StatsBoxScoreFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsBoxScoreLiveFinalRequest = {
    format?: Format;
    gameid: string;
  };

  export class MlbV3StatsBoxScoreLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3StatsBoxScoreLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsBoxScoresByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class MlbV3StatsBoxScoresByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3StatsBoxScoresByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsBoxScoresByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class MlbV3StatsBoxScoresByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3StatsBoxScoresByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsBoxScoresDeltaByDateRequest = {
    format?: Format;
    date: string;
    minutes: string;
  };

  export class MlbV3StatsBoxScoresDeltaByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3StatsBoxScoresDeltaByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsFantasyPointsByDateRequest = {
    format?: Format;
    date: string;
  };

  export class MlbV3StatsFantasyPointsByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3StatsFantasyPointsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsPlayerGameLogsBySeasonRequest = {
    format?: Format;
    season: string;
    playerid: string;
    numberofgames: string;
  };

  export class MlbV3StatsPlayerGameLogsBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3StatsPlayerGameLogsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsPlayerGameStatsByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class MlbV3StatsPlayerGameStatsByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3StatsPlayerGameStatsByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsPlayerGameStatsByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class MlbV3StatsPlayerGameStatsByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3StatsPlayerGameStatsByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsPlayerSeasonSplitStatsRequest = {
    format?: Format;
    season: string;
    split?: Split;
  };

  export class MlbV3StatsPlayerSeasonSplitStatsError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3StatsPlayerSeasonSplitStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsPlayerSeasonStatsRequest = {
    format?: Format;
    season: string;
  };

  export class MlbV3StatsPlayerSeasonStatsError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3StatsPlayerSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsPlayerSeasonStatsByAwayRequest = {
    format?: Format;
    season: string;
  };

  export class MlbV3StatsPlayerSeasonStatsByAwayError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3StatsPlayerSeasonStatsByAwayError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsPlayerSeasonStatsByHomeRequest = {
    format?: Format;
    season: string;
  };

  export class MlbV3StatsPlayerSeasonStatsByHomeError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3StatsPlayerSeasonStatsByHomeError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsPlayerSeasonStatsByTeamRequest = {
    format?: Format;
    season: string;
    team: string;
  };

  export class MlbV3StatsPlayerSeasonStatsByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3StatsPlayerSeasonStatsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsPlayerSeasonStatsSplitByTeamRequest = {
    format?: Format;
    season: string;
  };

  export class MlbV3StatsPlayerSeasonStatsSplitByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3StatsPlayerSeasonStatsSplitByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type MlbV3StatsTeamHittingVsStartingPitcherRequest = {
    format?: Format;
    gameid: string;
    team: string;
  };

  export class MlbV3StatsTeamHittingVsStartingPitcherError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<MlbV3StatsTeamHittingVsStartingPitcherError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
