import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { boxScore2Schema, type BoxScore2 } from "../models/box-score2.js";
import { fantasyGame3Schema, type FantasyGame3 } from "../models/fantasy-game3.js";
import { Format, formatSchema } from "../models/format.js";
import { playerGame3Schema, type PlayerGame3 } from "../models/player-game3.js";
import { playerSeason4Schema, type PlayerSeason4 } from "../models/player-season4.js";
import { teamGame3Schema, type TeamGame3 } from "../models/team-game3.js";
import { teamLineSchema, type TeamLine } from "../models/team-line.js";
import { teamSeason3Schema, type TeamSeason3 } from "../models/team-season3.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class NhlV3Stats {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  nhlV3StatsBoxScoreFinal(
    request: NhlV3Stats.NhlV3StatsBoxScoreFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore2, NhlV3Stats.NhlV3StatsBoxScoreFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/stats/{format}/BoxScoreFinal/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: boxScore2Schema },
        errorFactory: NhlV3Stats.NhlV3StatsBoxScoreFinalError,
      },
      options,
    );
  }

  nhlV3StatsBoxScoreLiveFinal(
    request: NhlV3Stats.NhlV3StatsBoxScoreLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore2, NhlV3Stats.NhlV3StatsBoxScoreLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/stats/{format}/BoxScore/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: boxScore2Schema },
        errorFactory: NhlV3Stats.NhlV3StatsBoxScoreLiveFinalError,
      },
      options,
    );
  }

  nhlV3StatsBoxScoresByDateFinal(
    request: NhlV3Stats.NhlV3StatsBoxScoresByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore2[], NhlV3Stats.NhlV3StatsBoxScoresByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/stats/{format}/BoxScoresFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore2Schema)) },
        errorFactory: NhlV3Stats.NhlV3StatsBoxScoresByDateFinalError,
      },
      options,
    );
  }

  nhlV3StatsBoxScoresByDateLiveFinal(
    request: NhlV3Stats.NhlV3StatsBoxScoresByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore2[], NhlV3Stats.NhlV3StatsBoxScoresByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/stats/{format}/BoxScores/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore2Schema)) },
        errorFactory: NhlV3Stats.NhlV3StatsBoxScoresByDateLiveFinalError,
      },
      options,
    );
  }

  nhlV3StatsBoxScoresDeltaByDate(
    request: NhlV3Stats.NhlV3StatsBoxScoresDeltaByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore2[], NhlV3Stats.NhlV3StatsBoxScoresDeltaByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/stats/{format}/BoxScoresDelta/{date}/{minutes}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
          { name: "minutes", value: request.minutes, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore2Schema)) },
        errorFactory: NhlV3Stats.NhlV3StatsBoxScoresDeltaByDateError,
      },
      options,
    );
  }

  nhlV3StatsFantasyPointsByDate(
    request: NhlV3Stats.NhlV3StatsFantasyPointsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<FantasyGame3[], NhlV3Stats.NhlV3StatsFantasyPointsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/stats/{format}/FantasyGameStatsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => fantasyGame3Schema)) },
        errorFactory: NhlV3Stats.NhlV3StatsFantasyPointsByDateError,
      },
      options,
    );
  }

  nhlV3StatsLineCombinationsBySeason(
    request: NhlV3Stats.NhlV3StatsLineCombinationsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamLine[], NhlV3Stats.NhlV3StatsLineCombinationsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/stats/{format}/LinesBySeason/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamLineSchema)) },
        errorFactory: NhlV3Stats.NhlV3StatsLineCombinationsBySeasonError,
      },
      options,
    );
  }

  nhlV3StatsPlayerGameLogsBySeason(
    request: NhlV3Stats.NhlV3StatsPlayerGameLogsBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame3[], NhlV3Stats.NhlV3StatsPlayerGameLogsBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v3/nhl/stats/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}",
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
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame3Schema)) },
        errorFactory: NhlV3Stats.NhlV3StatsPlayerGameLogsBySeasonError,
      },
      options,
    );
  }

  nhlV3StatsPlayerGameStatsByDateFinal(
    request: NhlV3Stats.NhlV3StatsPlayerGameStatsByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame3[], NhlV3Stats.NhlV3StatsPlayerGameStatsByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/stats/{format}/PlayerGameStatsByDateFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame3Schema)) },
        errorFactory: NhlV3Stats.NhlV3StatsPlayerGameStatsByDateFinalError,
      },
      options,
    );
  }

  nhlV3StatsPlayerGameStatsByDateLiveFinal(
    request: NhlV3Stats.NhlV3StatsPlayerGameStatsByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame3[], NhlV3Stats.NhlV3StatsPlayerGameStatsByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/stats/{format}/PlayerGameStatsByDate/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame3Schema)) },
        errorFactory: NhlV3Stats.NhlV3StatsPlayerGameStatsByDateLiveFinalError,
      },
      options,
    );
  }

  nhlV3StatsPlayerSeasonStats(
    request: NhlV3Stats.NhlV3StatsPlayerSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason4[], NhlV3Stats.NhlV3StatsPlayerSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/stats/{format}/PlayerSeasonStats/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason4Schema)) },
        errorFactory: NhlV3Stats.NhlV3StatsPlayerSeasonStatsError,
      },
      options,
    );
  }

  nhlV3StatsPlayerSeasonStatsByTeam(
    request: NhlV3Stats.NhlV3StatsPlayerSeasonStatsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerSeason4[], NhlV3Stats.NhlV3StatsPlayerSeasonStatsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/stats/{format}/PlayerSeasonStatsByTeam/{season}/{team}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
          { name: "team", value: request.team, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerSeason4Schema)) },
        errorFactory: NhlV3Stats.NhlV3StatsPlayerSeasonStatsByTeamError,
      },
      options,
    );
  }

  nhlV3StatsTeamGameStatsByDateFinal(
    request: NhlV3Stats.NhlV3StatsTeamGameStatsByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame3[], NhlV3Stats.NhlV3StatsTeamGameStatsByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/stats/{format}/TeamGameStatsByDateFinal/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame3Schema)) },
        errorFactory: NhlV3Stats.NhlV3StatsTeamGameStatsByDateFinalError,
      },
      options,
    );
  }

  nhlV3StatsTeamStatsAllowedByPosition(
    request: NhlV3Stats.NhlV3StatsTeamStatsAllowedByPositionRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamSeason3[], NhlV3Stats.NhlV3StatsTeamStatsAllowedByPositionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v3/nhl/stats/{format}/TeamStatsAllowedByPosition/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamSeason3Schema)) },
        errorFactory: NhlV3Stats.NhlV3StatsTeamStatsAllowedByPositionError,
      },
      options,
    );
  }
}

export namespace NhlV3Stats {
  export type NhlV3StatsBoxScoreFinalRequest = {
    format?: Format;
    gameid: string;
  };

  export class NhlV3StatsBoxScoreFinalError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<NhlV3StatsBoxScoreFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3StatsBoxScoreLiveFinalRequest = {
    format?: Format;
    gameid: string;
  };

  export class NhlV3StatsBoxScoreLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3StatsBoxScoreLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3StatsBoxScoresByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class NhlV3StatsBoxScoresByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3StatsBoxScoresByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3StatsBoxScoresByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class NhlV3StatsBoxScoresByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3StatsBoxScoresByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3StatsBoxScoresDeltaByDateRequest = {
    format?: Format;
    date: string;
    minutes: string;
  };

  export class NhlV3StatsBoxScoresDeltaByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3StatsBoxScoresDeltaByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3StatsFantasyPointsByDateRequest = {
    format?: Format;
    date: string;
  };

  export class NhlV3StatsFantasyPointsByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3StatsFantasyPointsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3StatsLineCombinationsBySeasonRequest = {
    format?: Format;
    season: string;
  };

  export class NhlV3StatsLineCombinationsBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3StatsLineCombinationsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3StatsPlayerGameLogsBySeasonRequest = {
    format?: Format;
    season: string;
    playerid: string;
    numberofgames: string;
  };

  export class NhlV3StatsPlayerGameLogsBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3StatsPlayerGameLogsBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3StatsPlayerGameStatsByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class NhlV3StatsPlayerGameStatsByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3StatsPlayerGameStatsByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3StatsPlayerGameStatsByDateLiveFinalRequest = {
    format?: Format;
    date: string;
  };

  export class NhlV3StatsPlayerGameStatsByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3StatsPlayerGameStatsByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3StatsPlayerSeasonStatsRequest = {
    format?: Format;
    season: string;
  };

  export class NhlV3StatsPlayerSeasonStatsError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3StatsPlayerSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3StatsPlayerSeasonStatsByTeamRequest = {
    format?: Format;
    season: string;
    team: string;
  };

  export class NhlV3StatsPlayerSeasonStatsByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3StatsPlayerSeasonStatsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3StatsTeamGameStatsByDateFinalRequest = {
    format?: Format;
    date: string;
  };

  export class NhlV3StatsTeamGameStatsByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3StatsTeamGameStatsByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type NhlV3StatsTeamStatsAllowedByPositionRequest = {
    format?: Format;
    season: string;
  };

  export class NhlV3StatsTeamStatsAllowedByPositionError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<NhlV3StatsTeamStatsAllowedByPositionError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
