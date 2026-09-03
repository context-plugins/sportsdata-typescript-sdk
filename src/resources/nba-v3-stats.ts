import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { boxScoreSchema, type BoxScore } from "../models/box-score.js";
import { fantasyGame1Schema, type FantasyGame1 } from "../models/fantasy-game1.js";
import { Format, formatSchema } from "../models/format.js";
import { playerGame1Schema, type PlayerGame1 } from "../models/player-game1.js";
import { playerInfoSchema, type PlayerInfo } from "../models/player-info.js";
import { playerSeason1Schema, type PlayerSeason1 } from "../models/player-season1.js";
import { teamGame1Schema, type TeamGame1 } from "../models/team-game1.js";
import { teamSeason1Schema, type TeamSeason1 } from "../models/team-season1.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class NbaV3Stats {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  nbaV3StatsAllStars(
    request: NbaV3Stats.NbaV3StatsAllStarsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerInfo[], NbaV3Stats.NbaV3StatsAllStarsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/stats/{format}/AllStars/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerInfoSchema)) },
        errorFactory: NbaV3Stats.NbaV3StatsAllStarsError,
      },
      options,
    );
  }

  nbaV3StatsBoxScoreFinal(
    request: NbaV3Stats.NbaV3StatsBoxScoreFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore, NbaV3Stats.NbaV3StatsBoxScoreFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/stats/{format}/BoxScoreFinal/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: boxScoreSchema },
        errorFactory: NbaV3Stats.NbaV3StatsBoxScoreFinalError,
      },
      options,
    );
  }

  nbaV3StatsBoxScoreLiveFinal(
    request: NbaV3Stats.NbaV3StatsBoxScoreLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore, NbaV3Stats.NbaV3StatsBoxScoreLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/stats/{format}/BoxScore/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: boxScoreSchema },
        errorFactory: NbaV3Stats.NbaV3StatsBoxScoreLiveFinalError,
      },
      options,
    );
  }

  nbaV3StatsBoxScoresByDateFinal(
    request: NbaV3Stats.NbaV3StatsBoxScoresByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore[], NbaV3Stats.NbaV3StatsBoxScoresByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/stats/{format}/BoxScoresFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScoreSchema)) },
        errorFactory: NbaV3Stats.NbaV3StatsBoxScoresByDateFinalError,
      },
      options,
    );
  }

  nbaV3StatsBoxScoresByDateLiveFinal(
    request: NbaV3Stats.NbaV3StatsBoxScoresByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore[], NbaV3Stats.NbaV3StatsBoxScoresByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/stats/{format}/BoxScores/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScoreSchema)) },
        errorFactory: NbaV3Stats.NbaV3StatsBoxScoresByDateLiveFinalError,
      },
      options,
    );
  }

  nbaV3StatsBoxScoresDeltaByDate(
    request: NbaV3Stats.NbaV3StatsBoxScoresDeltaByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore[], NbaV3Stats.NbaV3StatsBoxScoresDeltaByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/stats/{format}/BoxScoresDelta/{date}/{minutes}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
          { name: "minutes", value: request.minutes, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScoreSchema)) },
        errorFactory: NbaV3Stats.NbaV3StatsBoxScoresDeltaByDateError,
      },
      options,
    );
  }

  nbaV3StatsFantasyPointsByDate(
    request: NbaV3Stats.NbaV3StatsFantasyPointsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<FantasyGame1[], NbaV3Stats.NbaV3StatsFantasyPointsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/stats/{format}/FantasyGameStatsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => fantasyGame1Schema)) },
        errorFactory: NbaV3Stats.NbaV3StatsFantasyPointsByDateError,
      },
      options,
    );
  }

  nbaV3StatsPlayerGameLogsBySeason(
    request: NbaV3Stats.NbaV3StatsPlayerGameLogsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame1[], NbaV3Stats.NbaV3StatsPlayerGameLogsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nba/stats/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame1Schema)) },
        errorFactory: NbaV3Stats.NbaV3StatsPlayerGameLogsBySeasonError,
      },
      options,
    );
  }

  nbaV3StatsPlayerGameStatsByDateFinal(
    request: NbaV3Stats.NbaV3StatsPlayerGameStatsByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame1[], NbaV3Stats.NbaV3StatsPlayerGameStatsByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/stats/{format}/PlayerGameStatsByDateFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame1Schema)) },
        errorFactory: NbaV3Stats.NbaV3StatsPlayerGameStatsByDateFinalError,
      },
      options,
    );
  }

  nbaV3StatsPlayerGameStatsByDateLiveFinal(
    request: NbaV3Stats.NbaV3StatsPlayerGameStatsByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame1[], NbaV3Stats.NbaV3StatsPlayerGameStatsByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/stats/{format}/PlayerGameStatsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame1Schema)) },
        errorFactory: NbaV3Stats.NbaV3StatsPlayerGameStatsByDateLiveFinalError,
      },
      options,
    );
  }

  nbaV3StatsPlayerSeasonStats(
    request: NbaV3Stats.NbaV3StatsPlayerSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason1[], NbaV3Stats.NbaV3StatsPlayerSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/stats/{format}/PlayerSeasonStats/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason1Schema)) },
        errorFactory: NbaV3Stats.NbaV3StatsPlayerSeasonStatsError,
      },
      options,
    );
  }

  nbaV3StatsPlayerSeasonStatsByTeam(
    request: NbaV3Stats.NbaV3StatsPlayerSeasonStatsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason1[], NbaV3Stats.NbaV3StatsPlayerSeasonStatsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/stats/{format}/PlayerSeasonStatsByTeam/{season}/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason1Schema)) },
        errorFactory: NbaV3Stats.NbaV3StatsPlayerSeasonStatsByTeamError,
      },
      options,
    );
  }

  nbaV3StatsTeamGameStatsByDateFinal(
    request: NbaV3Stats.NbaV3StatsTeamGameStatsByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame1[], NbaV3Stats.NbaV3StatsTeamGameStatsByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/stats/{format}/TeamGameStatsByDateFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame1Schema)) },
        errorFactory: NbaV3Stats.NbaV3StatsTeamGameStatsByDateFinalError,
      },
      options,
    );
  }

  nbaV3StatsTeamStatsAllowedByPosition(
    request: NbaV3Stats.NbaV3StatsTeamStatsAllowedByPositionRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamSeason1[], NbaV3Stats.NbaV3StatsTeamStatsAllowedByPositionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nba/stats/{format}/TeamStatsAllowedByPosition/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamSeason1Schema)) },
        errorFactory: NbaV3Stats.NbaV3StatsTeamStatsAllowedByPositionError,
      },
      options,
    );
  }
}

export namespace NbaV3Stats {
  export type NbaV3StatsAllStarsRequest = {
    format?: Format;
    season: string;
  };

  export class NbaV3StatsAllStarsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NbaV3StatsAllStarsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3StatsBoxScoreFinalRequest = {
    format?: Format;
    gameid: string;
  };

  export class NbaV3StatsBoxScoreFinalError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NbaV3StatsBoxScoreFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3StatsBoxScoreLiveFinalRequest = {
    format?: Format;
    gameid: string;
  };

  export class NbaV3StatsBoxScoreLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3StatsBoxScoreLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3StatsBoxScoresByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class NbaV3StatsBoxScoresByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3StatsBoxScoresByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3StatsBoxScoresByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class NbaV3StatsBoxScoresByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3StatsBoxScoresByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3StatsBoxScoresDeltaByDateRequest = {
    format?: Format;
    date: string;
    minutes: string;
  };

  export class NbaV3StatsBoxScoresDeltaByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3StatsBoxScoresDeltaByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3StatsFantasyPointsByDateRequest = {
    format?: Format;
    date: string;
  };

  export class NbaV3StatsFantasyPointsByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3StatsFantasyPointsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3StatsPlayerGameLogsBySeasonRequest = {
    format?: Format;
    season: string;
    playerid: string;
    numberofgames: string;
  };

  export class NbaV3StatsPlayerGameLogsBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3StatsPlayerGameLogsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3StatsPlayerGameStatsByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class NbaV3StatsPlayerGameStatsByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3StatsPlayerGameStatsByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3StatsPlayerGameStatsByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class NbaV3StatsPlayerGameStatsByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3StatsPlayerGameStatsByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3StatsPlayerSeasonStatsRequest = {
    format?: Format;
    season: string;
  };

  export class NbaV3StatsPlayerSeasonStatsError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3StatsPlayerSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3StatsPlayerSeasonStatsByTeamRequest = {
    format?: Format;
    season: string;
    team: string;
  };

  export class NbaV3StatsPlayerSeasonStatsByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3StatsPlayerSeasonStatsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3StatsTeamGameStatsByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class NbaV3StatsTeamGameStatsByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3StatsTeamGameStatsByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NbaV3StatsTeamStatsAllowedByPositionRequest = {
    format?: Format;
    season: string;
  };

  export class NbaV3StatsTeamStatsAllowedByPositionError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NbaV3StatsTeamStatsAllowedByPositionError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
