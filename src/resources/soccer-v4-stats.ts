import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { boxScore6Schema, type BoxScore6 } from "../models/box-score6.js";
import { fantasyGame4Schema, type FantasyGame4 } from "../models/fantasy-game4.js";
import { Format, formatSchema } from "../models/format.js";
import { playerGameBasicSchema, type PlayerGameBasic } from "../models/player-game-basic.js";
import { playerGame7Schema, type PlayerGame7 } from "../models/player-game7.js";
import { roundSchema, type Round } from "../models/round.js";
import { teamGame7Schema, type TeamGame7 } from "../models/team-game7.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import type { Servers } from "../servers.js";

export class SoccerV4Stats {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  soccerV4StatsBoxScoreFinal(
    request: SoccerV4Stats.SoccerV4StatsBoxScoreFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore6[], SoccerV4Stats.SoccerV4StatsBoxScoreFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/stats/{format}/BoxScoreFinal/{competition}/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore6Schema)) },
        errorFactory: SoccerV4Stats.SoccerV4StatsBoxScoreFinalError,
      },
      options,
    );
  }

  soccerV4StatsBoxScoreLiveFinal(
    request: SoccerV4Stats.SoccerV4StatsBoxScoreLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore6[], SoccerV4Stats.SoccerV4StatsBoxScoreLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/stats/{format}/BoxScore/{competition}/{gameid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "gameid", value: request.gameid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore6Schema)) },
        errorFactory: SoccerV4Stats.SoccerV4StatsBoxScoreLiveFinalError,
      },
      options,
    );
  }

  soccerV4StatsBoxScoresByDateFinal(
    request: SoccerV4Stats.SoccerV4StatsBoxScoresByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore6[], SoccerV4Stats.SoccerV4StatsBoxScoresByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/stats/{format}/BoxScoresFinal/{competition}/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore6Schema)) },
        errorFactory: SoccerV4Stats.SoccerV4StatsBoxScoresByDateFinalError,
      },
      options,
    );
  }

  soccerV4StatsBoxScoresByDateLiveFinal(
    request: SoccerV4Stats.SoccerV4StatsBoxScoresByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore6[], SoccerV4Stats.SoccerV4StatsBoxScoresByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/stats/{format}/BoxScoresByDate/{competition}/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore6Schema)) },
        errorFactory: SoccerV4Stats.SoccerV4StatsBoxScoresByDateLiveFinalError,
      },
      options,
    );
  }

  soccerV4StatsBoxScoresDeltaByDate(
    request: SoccerV4Stats.SoccerV4StatsBoxScoresDeltaByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<BoxScore6[], SoccerV4Stats.SoccerV4StatsBoxScoresDeltaByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v4/soccer/stats/{format}/BoxScoresDeltaByDate/{competition}/{date}/{minutes}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
          { name: "minutes", value: request.minutes, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => boxScore6Schema)) },
        errorFactory: SoccerV4Stats.SoccerV4StatsBoxScoresDeltaByDateError,
      },
      options,
    );
  }

  soccerV4StatsFantasyPointsByDate(
    request: SoccerV4Stats.SoccerV4StatsFantasyPointsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<FantasyGame4[], SoccerV4Stats.SoccerV4StatsFantasyPointsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/stats/{format}/FantasyGameStatsByDate/{competition}/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => fantasyGame4Schema)) },
        errorFactory: SoccerV4Stats.SoccerV4StatsFantasyPointsByDateError,
      },
      options,
    );
  }

  soccerV4StatsLineupsByDate(
    request: SoccerV4Stats.SoccerV4StatsLineupsByDateRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGameBasic[], SoccerV4Stats.SoccerV4StatsLineupsByDateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/stats/{format}/LineupsByDate/{competition}/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGameBasicSchema)) },
        errorFactory: SoccerV4Stats.SoccerV4StatsLineupsByDateError,
      },
      options,
    );
  }

  soccerV4StatsPlayerGameStatsByDateFinal(
    request: SoccerV4Stats.SoccerV4StatsPlayerGameStatsByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame7[], SoccerV4Stats.SoccerV4StatsPlayerGameStatsByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v4/soccer/stats/{format}/PlayerGameStatsByDateFinal/{competition}/{date}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame7Schema)) },
        errorFactory: SoccerV4Stats.SoccerV4StatsPlayerGameStatsByDateFinalError,
      },
      options,
    );
  }

  soccerV4StatsPlayerGameStatsByDateLiveFinal(
    request: SoccerV4Stats.SoccerV4StatsPlayerGameStatsByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerGame7[], SoccerV4Stats.SoccerV4StatsPlayerGameStatsByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/stats/{format}/PlayerGameStatsByDate/{competition}/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerGame7Schema)) },
        errorFactory: SoccerV4Stats.SoccerV4StatsPlayerGameStatsByDateLiveFinalError,
      },
      options,
    );
  }

  soccerV4StatsPlayerSeasonStats(
    request: SoccerV4Stats.SoccerV4StatsPlayerSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<Round[], SoccerV4Stats.SoccerV4StatsPlayerSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/stats/{format}/PlayerSeasonStats/{competition}/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => roundSchema)) },
        errorFactory: SoccerV4Stats.SoccerV4StatsPlayerSeasonStatsError,
      },
      options,
    );
  }

  soccerV4StatsTeamGameStatsByDateFinal(
    request: SoccerV4Stats.SoccerV4StatsTeamGameStatsByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame7[], SoccerV4Stats.SoccerV4StatsTeamGameStatsByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/stats/{format}/TeamGameStatsByDateFinal/{competition}/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame7Schema)) },
        errorFactory: SoccerV4Stats.SoccerV4StatsTeamGameStatsByDateFinalError,
      },
      options,
    );
  }
}

export namespace SoccerV4Stats {
  export type SoccerV4StatsBoxScoreFinalRequest = {
    format?: Format;
    competition: string;
    gameid: string;
  };

  export class SoccerV4StatsBoxScoreFinalError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<SoccerV4StatsBoxScoreFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4StatsBoxScoreLiveFinalRequest = {
    format?: Format;
    competition: string;
    gameid: string;
  };

  export class SoccerV4StatsBoxScoreLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4StatsBoxScoreLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4StatsBoxScoresByDateFinalRequest = {
    format?: Format;
    competition: string;
    date: string;
  };

  export class SoccerV4StatsBoxScoresByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4StatsBoxScoresByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4StatsBoxScoresByDateLiveFinalRequest = {
    format?: Format;
    competition: string;
    date: string;
  };

  export class SoccerV4StatsBoxScoresByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4StatsBoxScoresByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4StatsBoxScoresDeltaByDateRequest = {
    format?: Format;
    competition: string;
    date: string;
    minutes: string;
  };

  export class SoccerV4StatsBoxScoresDeltaByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4StatsBoxScoresDeltaByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4StatsFantasyPointsByDateRequest = {
    format?: Format;
    competition: string;
    date: string;
  };

  export class SoccerV4StatsFantasyPointsByDateError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4StatsFantasyPointsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4StatsLineupsByDateRequest = {
    format?: Format;
    competition: string;
    date: string;
  };

  export class SoccerV4StatsLineupsByDateError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<SoccerV4StatsLineupsByDateError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4StatsPlayerGameStatsByDateFinalRequest = {
    format?: Format;
    competition: string;
    date: string;
  };

  export class SoccerV4StatsPlayerGameStatsByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4StatsPlayerGameStatsByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4StatsPlayerGameStatsByDateLiveFinalRequest = {
    format?: Format;
    competition: string;
    date: string;
  };

  export class SoccerV4StatsPlayerGameStatsByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4StatsPlayerGameStatsByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4StatsPlayerSeasonStatsRequest = {
    format?: Format;
    competition: string;
    season: string;
  };

  export class SoccerV4StatsPlayerSeasonStatsError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4StatsPlayerSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4StatsTeamGameStatsByDateFinalRequest = {
    format?: Format;
    competition: string;
    date: string;
  };

  export class SoccerV4StatsTeamGameStatsByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4StatsTeamGameStatsByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
