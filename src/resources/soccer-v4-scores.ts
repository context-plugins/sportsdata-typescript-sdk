import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { areaSchema, type Area } from "../models/area.js";
import { canceledMembershipSchema, type CanceledMembership } from "../models/canceled-membership.js";
import { competitionDetailSchema, type CompetitionDetail } from "../models/competition-detail.js";
import { competitionSchema, type Competition } from "../models/competition.js";
import { Format, formatSchema } from "../models/format.js";
import { game17Schema, type Game17 } from "../models/game17.js";
import { membershipSchema, type Membership } from "../models/membership.js";
import { playerBasic6Schema, type PlayerBasic6 } from "../models/player-basic6.js";
import { player7Schema, type Player7 } from "../models/player7.js";
import { roundSchema, type Round } from "../models/round.js";
import { scheduleBasic7Schema, type ScheduleBasic7 } from "../models/schedule-basic7.js";
import { scoreBasic7Schema, type ScoreBasic7 } from "../models/score-basic7.js";
import { seasonTeamSchema, type SeasonTeam } from "../models/season-team.js";
import { teamGame7Schema, type TeamGame7 } from "../models/team-game7.js";
import { team8Schema, type Team8 } from "../models/team8.js";
import { unauthorizedSchema, type Unauthorized } from "../models/unauthorized.js";
import { venueSchema, type Venue } from "../models/venue.js";
import type { Servers } from "../servers.js";

export class SoccerV4Scores {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  soccerV4ScoresAreasCountries(
    request: SoccerV4Scores.SoccerV4ScoresAreasCountriesRequest,
    options?: RequestOptions,
  ): ApiPromise<Area[], SoccerV4Scores.SoccerV4ScoresAreasCountriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/scores/{format}/Areas"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => areaSchema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresAreasCountriesError,
      },
      options,
    );
  }

  soccerV4ScoresCompetitionsLeagues(
    request: SoccerV4Scores.SoccerV4ScoresCompetitionsLeaguesRequest,
    options?: RequestOptions,
  ): ApiPromise<Competition[], SoccerV4Scores.SoccerV4ScoresCompetitionsLeaguesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/scores/{format}/Competitions"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => competitionSchema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresCompetitionsLeaguesError,
      },
      options,
    );
  }

  soccerV4ScoresGamesByCompetitionLiveFinal(
    request: SoccerV4Scores.SoccerV4ScoresGamesByCompetitionLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<CompetitionDetail, SoccerV4Scores.SoccerV4ScoresGamesByCompetitionLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/scores/{format}/CompetitionDetails/{competition}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: competitionDetailSchema },
        errorFactory: SoccerV4Scores.SoccerV4ScoresGamesByCompetitionLiveFinalError,
      },
      options,
    );
  }

  soccerV4ScoresGamesByDateFinal(
    request: SoccerV4Scores.SoccerV4ScoresGamesByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game17[], SoccerV4Scores.SoccerV4ScoresGamesByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/scores/{format}/GamesByDateFinal/{competition}/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game17Schema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresGamesByDateFinalError,
      },
      options,
    );
  }

  soccerV4ScoresGamesByDateLiveFinal(
    request: SoccerV4Scores.SoccerV4ScoresGamesByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game17[], SoccerV4Scores.SoccerV4ScoresGamesByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/scores/{format}/GamesByDate/{competition}/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game17Schema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresGamesByDateLiveFinalError,
      },
      options,
    );
  }

  soccerV4ScoresGamesBasicByDateFinal(
    request: SoccerV4Scores.SoccerV4ScoresGamesBasicByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic7[], SoccerV4Scores.SoccerV4ScoresGamesBasicByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/scores/{format}/ScoresBasicFinal/{competition}/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasic7Schema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresGamesBasicByDateFinalError,
      },
      options,
    );
  }

  soccerV4ScoresGamesBasicByDateLiveFinal(
    request: SoccerV4Scores.SoccerV4ScoresGamesBasicByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic7[], SoccerV4Scores.SoccerV4ScoresGamesBasicByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/scores/{format}/ScoresBasic/{competition}/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasic7Schema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresGamesBasicByDateLiveFinalError,
      },
      options,
    );
  }

  soccerV4ScoresMembershipsByActive(
    request: SoccerV4Scores.SoccerV4ScoresMembershipsByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Membership[], SoccerV4Scores.SoccerV4ScoresMembershipsByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/scores/{format}/ActiveMemberships/{competition}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => membershipSchema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresMembershipsByActiveError,
      },
      options,
    );
  }

  soccerV4ScoresMembershipsByCanceled(
    request: SoccerV4Scores.SoccerV4ScoresMembershipsByCanceledRequest,
    options?: RequestOptions,
  ): ApiPromise<CanceledMembership, SoccerV4Scores.SoccerV4ScoresMembershipsByCanceledError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/scores/{format}/CanceledMemberships"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: canceledMembershipSchema },
        errorFactory: SoccerV4Scores.SoccerV4ScoresMembershipsByCanceledError,
      },
      options,
    );
  }

  soccerV4ScoresMembershipsByRecentlyChanged(
    request: SoccerV4Scores.SoccerV4ScoresMembershipsByRecentlyChangedRequest,
    options?: RequestOptions,
  ): ApiPromise<Membership[], SoccerV4Scores.SoccerV4ScoresMembershipsByRecentlyChangedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v4/soccer/scores/{format}/RecentlyChangedMemberships/{competition}/{days}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "days", value: request.days, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => membershipSchema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresMembershipsByRecentlyChangedError,
      },
      options,
    );
  }

  soccerV4ScoresMembershipsHistoricalByTeam(
    request: SoccerV4Scores.SoccerV4ScoresMembershipsHistoricalByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<Membership[], SoccerV4Scores.SoccerV4ScoresMembershipsHistoricalByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/v4/soccer/scores/{format}/HistoricalMembershipsByTeam/{competition}/{teamid}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "teamid", value: request.teamid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => membershipSchema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresMembershipsHistoricalByTeamError,
      },
      options,
    );
  }

  soccerV4ScoresPlayerDetailsByTeam(
    request: SoccerV4Scores.SoccerV4ScoresPlayerDetailsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<Player7[], SoccerV4Scores.SoccerV4ScoresPlayerDetailsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/scores/{format}/PlayersByTeam/{competition}/{teamid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "teamid", value: request.teamid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player7Schema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresPlayerDetailsByTeamError,
      },
      options,
    );
  }

  soccerV4ScoresPlayerProfilesByTeam(
    request: SoccerV4Scores.SoccerV4ScoresPlayerProfilesByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic6[], SoccerV4Scores.SoccerV4ScoresPlayerProfilesByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/scores/{format}/PlayersByTeamBasic/{competition}/{teamid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "teamid", value: request.teamid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasic6Schema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresPlayerProfilesByTeamError,
      },
      options,
    );
  }

  soccerV4ScoresSchedules(
    request: SoccerV4Scores.SoccerV4ScoresSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<Round[], SoccerV4Scores.SoccerV4ScoresSchedulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/scores/{format}/Schedule/{competition}/{season}"),
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
        errorFactory: SoccerV4Scores.SoccerV4ScoresSchedulesError,
      },
      options,
    );
  }

  soccerV4ScoresSchedulesBasic(
    request: SoccerV4Scores.SoccerV4ScoresSchedulesBasicRequest,
    options?: RequestOptions,
  ): ApiPromise<ScheduleBasic7[], SoccerV4Scores.SoccerV4ScoresSchedulesBasicError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/scores/{format}/SchedulesBasic/{competition}/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "season", value: request.season, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scheduleBasic7Schema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresSchedulesBasicError,
      },
      options,
    );
  }

  soccerV4ScoresStandings(
    request: SoccerV4Scores.SoccerV4ScoresStandingsRequest,
    options?: RequestOptions,
  ): ApiPromise<Round[], SoccerV4Scores.SoccerV4ScoresStandingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/scores/{format}/Standings/{competition}/{season}"),
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
        errorFactory: SoccerV4Scores.SoccerV4ScoresStandingsError,
      },
      options,
    );
  }

  soccerV4ScoresTeamGameStatsByDateLiveFinal(
    request: SoccerV4Scores.SoccerV4ScoresTeamGameStatsByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame7[], SoccerV4Scores.SoccerV4ScoresTeamGameStatsByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/scores/{format}/TeamGameStatsByDate/{competition}/{date}"),
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
        errorFactory: SoccerV4Scores.SoccerV4ScoresTeamGameStatsByDateLiveFinalError,
      },
      options,
    );
  }

  soccerV4ScoresTeamProfilesByCompetition(
    request: SoccerV4Scores.SoccerV4ScoresTeamProfilesByCompetitionRequest,
    options?: RequestOptions,
  ): ApiPromise<Team8[], SoccerV4Scores.SoccerV4ScoresTeamProfilesByCompetitionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/scores/{format}/Teams/{competition}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => team8Schema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresTeamProfilesByCompetitionError,
      },
      options,
    );
  }

  soccerV4ScoresTeamProfilesBySeason(
    request: SoccerV4Scores.SoccerV4ScoresTeamProfilesBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<SeasonTeam[], SoccerV4Scores.SoccerV4ScoresTeamProfilesBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/scores/{format}/SeasonTeams/{competition}/{seasonid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "seasonid", value: request.seasonid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => seasonTeamSchema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresTeamProfilesBySeasonError,
      },
      options,
    );
  }

  soccerV4ScoresTeamSeasonStats(
    request: SoccerV4Scores.SoccerV4ScoresTeamSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<Round[], SoccerV4Scores.SoccerV4ScoresTeamSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/scores/{format}/TeamSeasonStats/{competition}/{season}"),
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
        errorFactory: SoccerV4Scores.SoccerV4ScoresTeamSeasonStatsError,
      },
      options,
    );
  }

  soccerV4ScoresVenues(
    request: SoccerV4Scores.SoccerV4ScoresVenuesRequest,
    options?: RequestOptions,
  ): ApiPromise<Venue[], SoccerV4Scores.SoccerV4ScoresVenuesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/v4/soccer/scores/{format}/Venues"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => venueSchema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresVenuesError,
      },
      options,
    );
  }
}

export namespace SoccerV4Scores {
  export type SoccerV4ScoresAreasCountriesRequest = {
    format?: Format;
  };

  export class SoccerV4ScoresAreasCountriesError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4ScoresAreasCountriesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresCompetitionsLeaguesRequest = {
    format?: Format;
  };

  export class SoccerV4ScoresCompetitionsLeaguesError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4ScoresCompetitionsLeaguesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresGamesByCompetitionLiveFinalRequest = {
    format?: Format;
    competition: string;
  };

  export class SoccerV4ScoresGamesByCompetitionLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4ScoresGamesByCompetitionLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresGamesByDateFinalRequest = {
    format?: Format;
    competition: string;
    date: string;
  };

  export class SoccerV4ScoresGamesByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4ScoresGamesByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresGamesByDateLiveFinalRequest = {
    format?: Format;
    competition: string;
    date: string;
  };

  export class SoccerV4ScoresGamesByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4ScoresGamesByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresGamesBasicByDateFinalRequest = {
    format?: Format;
    competition: string;
    date: string;
  };

  export class SoccerV4ScoresGamesBasicByDateFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4ScoresGamesBasicByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresGamesBasicByDateLiveFinalRequest = {
    format?: Format;
    competition: string;
    date: string;
  };

  export class SoccerV4ScoresGamesBasicByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4ScoresGamesBasicByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresMembershipsByActiveRequest = {
    format?: Format;
    competition: string;
  };

  export class SoccerV4ScoresMembershipsByActiveError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4ScoresMembershipsByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresMembershipsByCanceledRequest = {
    format?: Format;
  };

  export class SoccerV4ScoresMembershipsByCanceledError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4ScoresMembershipsByCanceledError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresMembershipsByRecentlyChangedRequest = {
    format?: Format;
    competition: string;
    days: string;
  };

  export class SoccerV4ScoresMembershipsByRecentlyChangedError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4ScoresMembershipsByRecentlyChangedError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresMembershipsHistoricalByTeamRequest = {
    format?: Format;
    competition: string;
    teamid: string;
  };

  export class SoccerV4ScoresMembershipsHistoricalByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4ScoresMembershipsHistoricalByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresPlayerDetailsByTeamRequest = {
    format?: Format;
    competition: string;
    teamid: string;
  };

  export class SoccerV4ScoresPlayerDetailsByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4ScoresPlayerDetailsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresPlayerProfilesByTeamRequest = {
    format?: Format;
    competition: string;
    teamid: string;
  };

  export class SoccerV4ScoresPlayerProfilesByTeamError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4ScoresPlayerProfilesByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresSchedulesRequest = {
    format?: Format;
    competition: string;
    season: string;
  };

  export class SoccerV4ScoresSchedulesError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<SoccerV4ScoresSchedulesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresSchedulesBasicRequest = {
    format?: Format;
    competition: string;
    season: string;
  };

  export class SoccerV4ScoresSchedulesBasicError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4ScoresSchedulesBasicError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresStandingsRequest = {
    format?: Format;
    competition: string;
    season: string;
  };

  export class SoccerV4ScoresStandingsError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<SoccerV4ScoresStandingsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresTeamGameStatsByDateLiveFinalRequest = {
    format?: Format;
    competition: string;
    date: string;
  };

  export class SoccerV4ScoresTeamGameStatsByDateLiveFinalError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4ScoresTeamGameStatsByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresTeamProfilesByCompetitionRequest = {
    format?: Format;
    competition: string;
  };

  export class SoccerV4ScoresTeamProfilesByCompetitionError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4ScoresTeamProfilesByCompetitionError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresTeamProfilesBySeasonRequest = {
    format?: Format;
    competition: string;
    seasonid: string;
  };

  export class SoccerV4ScoresTeamProfilesBySeasonError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4ScoresTeamProfilesBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresTeamSeasonStatsRequest = {
    format?: Format;
    competition: string;
    season: string;
  };

  export class SoccerV4ScoresTeamSeasonStatsError extends ResponseError<
    Declared<"unauthorized", Unauthorized>
  > {
    static readonly errors: ErrorDecoders<SoccerV4ScoresTeamSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresVenuesRequest = {
    format?: Format;
  };

  export class SoccerV4ScoresVenuesError extends ResponseError<Declared<"unauthorized", Unauthorized>> {
    static readonly errors: ErrorDecoders<SoccerV4ScoresVenuesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
