import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * Areas (Countries)
   *
   * @remarks
   * A list of countries, continents etc. for finding their respective competitions.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Scores.SoccerV4ScoresAreasCountriesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4ScoresAreasCountries(
    request: SoccerV4Scores.SoccerV4ScoresAreasCountriesRequest,
    options?: RequestOptions,
  ): ApiPromise<Area[], SoccerV4Scores.SoccerV4ScoresAreasCountriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/soccer/scores/{format}/Areas"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => areaSchema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresAreasCountriesError,
      },
      options,
    );
  }

  /**
   * Competitions (Leagues)
   *
   * @remarks
   * A list of all competitions (leagues, cups etc.) and their associated countries or areas.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Scores.SoccerV4ScoresCompetitionsLeaguesError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4ScoresCompetitionsLeagues(
    request: SoccerV4Scores.SoccerV4ScoresCompetitionsLeaguesRequest,
    options?: RequestOptions,
  ): ApiPromise<Competition[], SoccerV4Scores.SoccerV4ScoresCompetitionsLeaguesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/soccer/scores/{format}/Competitions"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => competitionSchema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresCompetitionsLeaguesError,
      },
      options,
    );
  }

  /**
   * Games - by Competition [Live & Final]
   *
   * @remarks
   * Full scores and gameday info delivered live and post-game. Live data includes half and score
   * info, delivered by competition.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Scores.SoccerV4ScoresGamesByCompetitionLiveFinalError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4ScoresGamesByCompetitionLiveFinal(
    request: SoccerV4Scores.SoccerV4ScoresGamesByCompetitionLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<CompetitionDetail, SoccerV4Scores.SoccerV4ScoresGamesByCompetitionLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/soccer/scores/{format}/CompetitionDetails/{competition}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: competitionDetailSchema },
        errorFactory: SoccerV4Scores.SoccerV4ScoresGamesByCompetitionLiveFinalError,
      },
      options,
    );
  }

  /**
   * Games - by Date [Final]
   *
   * @remarks
   * Full scores and gameday info, as well as half and full-time score, delivered post-game.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Scores.SoccerV4ScoresGamesByDateFinalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4ScoresGamesByDateFinal(
    request: SoccerV4Scores.SoccerV4ScoresGamesByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game17[], SoccerV4Scores.SoccerV4ScoresGamesByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/scores/{format}/GamesByDateFinal/{competition}/{date}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game17Schema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresGamesByDateFinalError,
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
   * @throws {@link SoccerV4Scores.SoccerV4ScoresGamesByDateLiveFinalError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4ScoresGamesByDateLiveFinal(
    request: SoccerV4Scores.SoccerV4ScoresGamesByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<Game17[], SoccerV4Scores.SoccerV4ScoresGamesByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/soccer/scores/{format}/GamesByDate/{competition}/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => game17Schema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresGamesByDateLiveFinalError,
      },
      options,
    );
  }

  /**
   * Games (Basic) - by Date [Final]
   *
   * @remarks
   * The most top-line full-time information, ideal for basic applications, called by competition
   * and date, delivered post-game.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Scores.SoccerV4ScoresGamesBasicByDateFinalError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4ScoresGamesBasicByDateFinal(
    request: SoccerV4Scores.SoccerV4ScoresGamesBasicByDateFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic7[], SoccerV4Scores.SoccerV4ScoresGamesBasicByDateFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/scores/{format}/ScoresBasicFinal/{competition}/{date}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasic7Schema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresGamesBasicByDateFinalError,
      },
      options,
    );
  }

  /**
   * Games (Basic) - by Date [Live & Final]
   *
   * @remarks
   * Full scores and gameday info delivered live and post-game, called by date and competition.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Scores.SoccerV4ScoresGamesBasicByDateLiveFinalError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4ScoresGamesBasicByDateLiveFinal(
    request: SoccerV4Scores.SoccerV4ScoresGamesBasicByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<ScoreBasic7[], SoccerV4Scores.SoccerV4ScoresGamesBasicByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/soccer/scores/{format}/ScoresBasic/{competition}/{date}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scoreBasic7Schema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresGamesBasicByDateLiveFinalError,
      },
      options,
    );
  }

  /**
   * Memberships - by Active
   *
   * @remarks
   * Players currently active on teams within a specified competition.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Scores.SoccerV4ScoresMembershipsByActiveError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4ScoresMembershipsByActive(
    request: SoccerV4Scores.SoccerV4ScoresMembershipsByActiveRequest,
    options?: RequestOptions,
  ): ApiPromise<Membership[], SoccerV4Scores.SoccerV4ScoresMembershipsByActiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/soccer/scores/{format}/ActiveMemberships/{competition}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => membershipSchema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresMembershipsByActiveError,
      },
      options,
    );
  }

  /**
   * Memberships - by Canceled
   *
   * @remarks
   * Memberships (players' membership of a team) that have since been revoked by our system.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Scores.SoccerV4ScoresMembershipsByCanceledError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4ScoresMembershipsByCanceled(
    request: SoccerV4Scores.SoccerV4ScoresMembershipsByCanceledRequest,
    options?: RequestOptions,
  ): ApiPromise<CanceledMembership, SoccerV4Scores.SoccerV4ScoresMembershipsByCanceledError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/soccer/scores/{format}/CanceledMemberships"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: canceledMembershipSchema },
        errorFactory: SoccerV4Scores.SoccerV4ScoresMembershipsByCanceledError,
      },
      options,
    );
  }

  /**
   * Memberships - by Recently Changed
   *
   * @remarks
   * A list of all recently changed memberships (e.g. player transfers, releases) for a given
   * competition, called by number of days ago.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Scores.SoccerV4ScoresMembershipsByRecentlyChangedError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4ScoresMembershipsByRecentlyChanged(
    request: SoccerV4Scores.SoccerV4ScoresMembershipsByRecentlyChangedRequest,
    options?: RequestOptions,
  ): ApiPromise<Membership[], SoccerV4Scores.SoccerV4ScoresMembershipsByRecentlyChangedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/scores/{format}/RecentlyChangedMemberships/{competition}/{days}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "days", value: request.days, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => membershipSchema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresMembershipsByRecentlyChangedError,
      },
      options,
    );
  }

  /**
   * Memberships Historical - by Team
   *
   * @remarks
   * Historical memberships of a team, i.e. players who were once on the roster but have since left.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Scores.SoccerV4ScoresMembershipsHistoricalByTeamError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4ScoresMembershipsHistoricalByTeam(
    request: SoccerV4Scores.SoccerV4ScoresMembershipsHistoricalByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<Membership[], SoccerV4Scores.SoccerV4ScoresMembershipsHistoricalByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/scores/{format}/HistoricalMembershipsByTeam/{competition}/{teamid}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "teamid", value: request.teamid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => membershipSchema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresMembershipsHistoricalByTeamError,
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
   * @throws {@link SoccerV4Scores.SoccerV4ScoresPlayerDetailsByTeamError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4ScoresPlayerDetailsByTeam(
    request: SoccerV4Scores.SoccerV4ScoresPlayerDetailsByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<Player7[], SoccerV4Scores.SoccerV4ScoresPlayerDetailsByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/soccer/scores/{format}/PlayersByTeam/{competition}/{teamid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "teamid", value: request.teamid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => player7Schema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresPlayerDetailsByTeamError,
      },
      options,
    );
  }

  /**
   * Player Profiles - by Team
   *
   * @remarks
   * Roster information for a given team. Player profiles include basic biographical information,
   * position, etc. Specify a TeamId parameter to receive all players currently on that team.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Scores.SoccerV4ScoresPlayerProfilesByTeamError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4ScoresPlayerProfilesByTeam(
    request: SoccerV4Scores.SoccerV4ScoresPlayerProfilesByTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayerBasic6[], SoccerV4Scores.SoccerV4ScoresPlayerProfilesByTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/scores/{format}/PlayersByTeamBasic/{competition}/{teamid}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "teamid", value: request.teamid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playerBasic6Schema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresPlayerProfilesByTeamError,
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
   * @throws {@link SoccerV4Scores.SoccerV4ScoresSchedulesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4ScoresSchedules(
    request: SoccerV4Scores.SoccerV4ScoresSchedulesRequest,
    options?: RequestOptions,
  ): ApiPromise<Round[], SoccerV4Scores.SoccerV4ScoresSchedulesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/soccer/scores/{format}/Schedule/{competition}/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "season", value: request.season, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => roundSchema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresSchedulesError,
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
   * @throws {@link SoccerV4Scores.SoccerV4ScoresSchedulesBasicError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4ScoresSchedulesBasic(
    request: SoccerV4Scores.SoccerV4ScoresSchedulesBasicRequest,
    options?: RequestOptions,
  ): ApiPromise<ScheduleBasic7[], SoccerV4Scores.SoccerV4ScoresSchedulesBasicError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/scores/{format}/SchedulesBasic/{competition}/{season}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "season", value: request.season, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => scheduleBasic7Schema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresSchedulesBasicError,
      },
      options,
    );
  }

  /**
   * Standings
   *
   * @remarks
   * Includes regular season standings in a given league or tournament and season.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Scores.SoccerV4ScoresStandingsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4ScoresStandings(
    request: SoccerV4Scores.SoccerV4ScoresStandingsRequest,
    options?: RequestOptions,
  ): ApiPromise<Round[], SoccerV4Scores.SoccerV4ScoresStandingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/soccer/scores/{format}/Standings/{competition}/{season}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "season", value: request.season, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => roundSchema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresStandingsError,
      },
      options,
    );
  }

  /**
   * Team Game Stats - by Date [Live & Final]
   *
   * @remarks
   * Returns the box score statistical record team-wide (aggregated from all players) for all games
   * on a given date within a competition, both live and post-game.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Scores.SoccerV4ScoresTeamGameStatsByDateLiveFinalError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4ScoresTeamGameStatsByDateLiveFinal(
    request: SoccerV4Scores.SoccerV4ScoresTeamGameStatsByDateLiveFinalRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamGame7[], SoccerV4Scores.SoccerV4ScoresTeamGameStatsByDateLiveFinalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/scores/{format}/TeamGameStatsByDate/{competition}/{date}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => teamGame7Schema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresTeamGameStatsByDateLiveFinalError,
      },
      options,
    );
  }

  /**
   * Team Profiles - by Competition
   *
   * @remarks
   * Full team information: team name and city, conference and division, and colors. Also contains
   * basic fantasy info such as IDs as well as full stadium data. This endpoint returns the teams
   * ever associated with a competition; use Team Profiles - by Season for just the current ones.
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Scores.SoccerV4ScoresTeamProfilesByCompetitionError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4ScoresTeamProfilesByCompetition(
    request: SoccerV4Scores.SoccerV4ScoresTeamProfilesByCompetitionRequest,
    options?: RequestOptions,
  ): ApiPromise<Team8[], SoccerV4Scores.SoccerV4ScoresTeamProfilesByCompetitionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/soccer/scores/{format}/Teams/{competition}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => team8Schema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresTeamProfilesByCompetitionError,
      },
      options,
    );
  }

  /**
   * Team Profiles - by Season
   *
   * @remarks
   * Full team information: team name and city, conference and division, and colors. Also contains
   * basic fantasy info such as IDs as well as full stadium data. This endpoint returns the teams
   * currently associated with a competition's active season; use Team Profiles - by Competition for
   * all-time (e.g. teams since relegated from the EPL.)
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Scores.SoccerV4ScoresTeamProfilesBySeasonError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4ScoresTeamProfilesBySeason(
    request: SoccerV4Scores.SoccerV4ScoresTeamProfilesBySeasonRequest,
    options?: RequestOptions,
  ): ApiPromise<SeasonTeam[], SoccerV4Scores.SoccerV4ScoresTeamProfilesBySeasonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/soccer/scores/{format}/SeasonTeams/{competition}/{seasonid}"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "seasonid", value: request.seasonid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => seasonTeamSchema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresTeamProfilesBySeasonError,
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
   * @throws {@link SoccerV4Scores.SoccerV4ScoresTeamSeasonStatsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4ScoresTeamSeasonStats(
    request: SoccerV4Scores.SoccerV4ScoresTeamSeasonStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<Round[], SoccerV4Scores.SoccerV4ScoresTeamSeasonStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v4/soccer/scores/{format}/TeamSeasonStats/{competition}/{season}",
        ),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
          { name: "competition", value: request.competition, schema: s.string() },
          { name: "season", value: request.season, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => roundSchema)) },
        errorFactory: SoccerV4Scores.SoccerV4ScoresTeamSeasonStatsError,
      },
      options,
    );
  }

  /**
   * Venues
   *
   * @remarks
   * Stadium information from across the world
   *
   * @returns Success
   *
   * @throws {@link SoccerV4Scores.SoccerV4ScoresVenuesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SportsDataIoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  soccerV4ScoresVenues(
    request: SoccerV4Scores.SoccerV4ScoresVenuesRequest,
    options?: RequestOptions,
  ): ApiPromise<Venue[], SoccerV4Scores.SoccerV4ScoresVenuesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v4/soccer/scores/{format}/Venues"),
        auth: anyAuth(this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        query: [],
        headers: [],
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
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class SoccerV4ScoresAreasCountriesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4ScoresAreasCountriesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresCompetitionsLeaguesRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class SoccerV4ScoresCompetitionsLeaguesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4ScoresCompetitionsLeaguesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresGamesByCompetitionLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
  };

  export class SoccerV4ScoresGamesByCompetitionLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4ScoresGamesByCompetitionLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresGamesByDateFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
    /** The date of the game(s). <br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>. */
    date: string;
  };

  export class SoccerV4ScoresGamesByDateFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4ScoresGamesByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresGamesByDateLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
    /** The date of the game(s). <br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>. */
    date: string;
  };

  export class SoccerV4ScoresGamesByDateLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4ScoresGamesByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresGamesBasicByDateFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
    /** The date of the game(s). <br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>. */
    date: string;
  };

  export class SoccerV4ScoresGamesBasicByDateFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4ScoresGamesBasicByDateFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresGamesBasicByDateLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
    /** The date of the game(s). <br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>. */
    date: string;
  };

  export class SoccerV4ScoresGamesBasicByDateLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4ScoresGamesBasicByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresMembershipsByActiveRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
  };

  export class SoccerV4ScoresMembershipsByActiveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4ScoresMembershipsByActiveError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresMembershipsByCanceledRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class SoccerV4ScoresMembershipsByCanceledError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4ScoresMembershipsByCanceledError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresMembershipsByRecentlyChangedRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
    /**
     * The number of days since memberships were updated. For example, if you pass <code>3</code>,
     * you'll receive all memberships that have been updated in the past 3 days. Valid entries are:
     * <code>1</code>, <code>2</code> ... <code>30</code>
     */
    days: string;
  };

  export class SoccerV4ScoresMembershipsByRecentlyChangedError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4ScoresMembershipsByRecentlyChangedError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresMembershipsHistoricalByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
    /** Unique FantasyData Team ID. Example:<code>516</code>. */
    teamid: string;
  };

  export class SoccerV4ScoresMembershipsHistoricalByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4ScoresMembershipsHistoricalByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresPlayerDetailsByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
    /** Unique FantasyData Team ID. Example:<code>516</code>. */
    teamid: string;
  };

  export class SoccerV4ScoresPlayerDetailsByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4ScoresPlayerDetailsByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresPlayerProfilesByTeamRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
    /** Unique FantasyData Team ID. Example:<code>516</code>. */
    teamid: string;
  };

  export class SoccerV4ScoresPlayerProfilesByTeamError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4ScoresPlayerProfilesByTeamError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresSchedulesRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
    /** Year of the season<br>Examples: <code>2020</code>, <code>2021</code>, etc. */
    season: string;
  };

  export class SoccerV4ScoresSchedulesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4ScoresSchedulesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresSchedulesBasicRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
    /** Year of the season<br>Examples: <code>2020</code>, <code>2021</code>, etc. */
    season: string;
  };

  export class SoccerV4ScoresSchedulesBasicError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4ScoresSchedulesBasicError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresStandingsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
    /** Year of the season<br>Examples: <code>2020</code>, <code>2021</code>, etc. */
    season: string;
  };

  export class SoccerV4ScoresStandingsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4ScoresStandingsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresTeamGameStatsByDateLiveFinalRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
    /** The date of the game(s). <br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>. */
    date: string;
  };

  export class SoccerV4ScoresTeamGameStatsByDateLiveFinalError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4ScoresTeamGameStatsByDateLiveFinalError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresTeamProfilesByCompetitionRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
  };

  export class SoccerV4ScoresTeamProfilesByCompetitionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4ScoresTeamProfilesByCompetitionError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresTeamProfilesBySeasonRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
    /**
     * Unique FantasyData Season ID. SeasonIDs can be found in the Competition Hierarchy (League
     * Hierarchy). Examples: <code>1</code>, <code>2</code>, <code>3</code>, etc
     */
    seasonid: string;
  };

  export class SoccerV4ScoresTeamProfilesBySeasonError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4ScoresTeamProfilesBySeasonError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresTeamSeasonStatsRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the
     * Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>,
     * <code>8</code>, etc.
     */
    competition: string;
    /** Year of the season<br>Examples: <code>2020</code>, <code>2021</code>, etc. */
    season: string;
  };

  export class SoccerV4ScoresTeamSeasonStatsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4ScoresTeamSeasonStatsError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }

  export type SoccerV4ScoresVenuesRequest = {
    /**
     * Desired response format. Valid entries are <code>JSON</code> or <code>XML</code>.
     *
     * @default Format.Json
     */
    format?: Format;
  };

  export class SoccerV4ScoresVenuesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"unauthorized", Unauthorized>>;

    static readonly errors: ErrorDecoders<SoccerV4ScoresVenuesError> = [
      { on: 401, kind: "unauthorized", decode: { kind: "json", schema: unauthorizedSchema } },
    ];
  }
}
