import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScheduleBasic5 = {
  /** The unique ID of this game */
  gameId?: number;
  /**
   * The season that the game occurs in. Note: season is a single year that the majority of the
   * season occurs in
   */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 4=Offseason; 5=AllStar)
   */
  seasonType?: number;
  /**
   * Indicates the game's status. Possible values include: Scheduled, InProgress, Final, F/OT,
   * Suspended, Postponed, Delayed, Canceled, Forfeit
   */
  status?: string | null;
  /** The day that the game is scheduled to be played in */
  day?: string | null;
  /** The date and time of the game (in US Eastern Time) */
  dateTime?: string | null;
  /** The abbreviation [Key] of the away team */
  awayTeam?: string | null;
  /** The abbreviation [Key] of the home team */
  homeTeam?: string | null;
  /** The unique ID of the away team */
  awayTeamId?: number | null;
  /** The unique ID of the home team */
  homeTeamId?: number | null;
  /** Total number of points the away team scored in the game */
  awayTeamScore?: number | null;
  /** Total number of points the home team scored in this game */
  homeTeamScore?: number | null;
  /** The timestamp of when this game was last updated (in US Eastern Time) */
  updated?: string | null;
  /**
   * A globally unique ID for this game. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalGameId?: number;
  /**
   * The unique ID of the tournament Note: this field is specific to the NCAA tournament & does not
   * include other tournaments
   */
  tournamentId?: number | null;
  /** The specific bracket of the tournament (e.g. East; West; Midwest; South) */
  bracket?: string | null;
  /**
   * The current round of the NCAA tournament. Rounds: 1 = Round of 64, 2 = Round of 32, 3 = Sweet
   * Sixteen, 4 = Elite Eight, 5 = Final Four, 6 = Championship Note: First Four games Round = NULL
   */
  round?: number | null;
  /**
   * The seed of the away team (1-16). Note: specific to the NCAA tournament & does not include
   * other tournaments
   */
  awayTeamSeed?: number | null;
  /**
   * The seed of the home team (1-16). this is specific to the NCAA tournament & does not include
   * other tournaments
   */
  homeTeamSeed?: number | null;
  /**
   * Indicates whether the game is over and the final score has been verified and closed out. Note:
   * it is recommend for bet resulting to use IsClosed = True rather than simply Final game status
   */
  isClosed?: boolean;
  /** The date and time that the game ended (in US Eastern Time) */
  gameEndDateTime?: string | null;
  /**
   * Indicates whether this game is played in a neutral venue. Note: Neutral = True, Not Neutral =
   * False
   */
  neutralVenue?: boolean | null;
  /** The date and time of the game in UTC */
  dateTimeUtc?: string | null;
  /**
   * A globally unique ID for the away team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalAwayTeamId?: number;
  /**
   * A globally unique ID for the home team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalHomeTeamId?: number;
  /**
   * The GameID of the originally scheduled, postponed game, that this game was rescheduled from.
   * This only pertains to games that are scheduled as "make up" games.
   */
  rescheduledFromGameId?: number | null;
  /**
   * The GameID of the game that was rescheduled from this game. This only pertains to postponed
   * games that require rescheduling.
   */
  rescheduledGameId?: number | null;
};

export const scheduleBasic5Schema: Schema<ScheduleBasic5> = s.object<ScheduleBasic5>({
  gameId: s.optional(s.int()),
  season: s.optional(s.int()),
  seasonType: s.optional(s.int()),
  status: s.optionalNullable(s.string()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  awayTeamId: s.optionalNullable(s.int()),
  homeTeamId: s.optionalNullable(s.int()),
  awayTeamScore: s.optionalNullable(s.int()),
  homeTeamScore: s.optionalNullable(s.int()),
  updated: s.optionalNullable(s.string()),
  globalGameId: s.optional(s.int()),
  tournamentId: s.optionalNullable(s.int()),
  bracket: s.optionalNullable(s.string()),
  round: s.optionalNullable(s.int()),
  awayTeamSeed: s.optionalNullable(s.int()),
  homeTeamSeed: s.optionalNullable(s.int()),
  isClosed: s.optional(s.boolean()),
  gameEndDateTime: s.optionalNullable(s.string()),
  neutralVenue: s.optionalNullable(s.boolean()),
  dateTimeUtc: s.optionalNullable(s.string()),
  globalAwayTeamId: s.optional(s.int()),
  globalHomeTeamId: s.optional(s.int()),
  rescheduledFromGameId: s.optionalNullable(s.int()),
  rescheduledGameId: s.optionalNullable(s.int()),
  _keysMap: {
    gameId: "GameID",
    season: "Season",
    seasonType: "SeasonType",
    status: "Status",
    day: "Day",
    dateTime: "DateTime",
    awayTeam: "AwayTeam",
    homeTeam: "HomeTeam",
    awayTeamId: "AwayTeamID",
    homeTeamId: "HomeTeamID",
    awayTeamScore: "AwayTeamScore",
    homeTeamScore: "HomeTeamScore",
    updated: "Updated",
    globalGameId: "GlobalGameID",
    tournamentId: "TournamentID",
    bracket: "Bracket",
    round: "Round",
    awayTeamSeed: "AwayTeamSeed",
    homeTeamSeed: "HomeTeamSeed",
    isClosed: "IsClosed",
    gameEndDateTime: "GameEndDateTime",
    neutralVenue: "NeutralVenue",
    dateTimeUtc: "DateTimeUTC",
    globalAwayTeamId: "GlobalAwayTeamID",
    globalHomeTeamId: "GlobalHomeTeamID",
    rescheduledFromGameId: "RescheduledFromGameID",
    rescheduledGameId: "RescheduledGameID",
  },
});
