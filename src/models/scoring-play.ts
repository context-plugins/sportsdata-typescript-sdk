import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScoringPlay = {
  /**
   * A 9 digit unique code identifying the game that this record corresponds to. The GameID is
   * composed of Season; SeasonType; Week and HomeTeam. Note: This value will be NULL for bye weeks
   */
  gameKey?: string | null;
  /**
   * The type of season that this game corresponds to (1=Regular Season; 2=Preseason; 3=Postseason;
   * 4=Offseason; 5=All-Star)
   */
  seasonType?: number;
  /** Unique ID of the scoring play */
  scoringPlayId?: number;
  /** The NFL season of the game */
  season?: number;
  /**
   * The NFL week of the game (regular season: 1 to 18; preseason: 0 to 4; postseason: 1 to 4).
   * Note: seasons after 2021 will have only 3 preseason weeks
   */
  week?: number;
  /** The abbreviation [Key} of the away team */
  awayTeam?: string | null;
  /** The abbreviation [Key] of the home team */
  homeTeam?: string | null;
  /** The date and time of the game (in US Eastern Time) */
  date?: string | null;
  /** The order in which the scoring play happened */
  sequence?: number | null;
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /** The quarter of the scoring play (1; 2; 3; 4; OT) */
  quarter?: string | null;
  /**
   * The amount of time remaining in the current quarter when the scoring play occurred (e.g. 11:23;
   * 5:34; NULL if game is not in progress or at halftime)
   */
  timeRemaining?: string | null;
  /** The detailed description of the play for display purposes */
  playDescription?: string | null;
  /** The away team's score as a result of the scoring play (includes point after) */
  awayScore?: number | null;
  /** The home team's score as a result of the scoring play (includes point after) */
  homeScore?: number | null;
  /** Unique ID of the score/game */
  scoreId?: number;
};

export const scoringPlaySchema: Schema<ScoringPlay> = s.object<ScoringPlay>({
  gameKey: s.optionalNullable(s.string()),
  seasonType: s.optional(s.int()),
  scoringPlayId: s.optional(s.int()),
  season: s.optional(s.int()),
  week: s.optional(s.int()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  date: s.optionalNullable(s.string()),
  sequence: s.optionalNullable(s.int()),
  team: s.optionalNullable(s.string()),
  quarter: s.optionalNullable(s.string()),
  timeRemaining: s.optionalNullable(s.string()),
  playDescription: s.optionalNullable(s.string()),
  awayScore: s.optionalNullable(s.int()),
  homeScore: s.optionalNullable(s.int()),
  scoreId: s.optional(s.int()),
  _keysMap: {
    gameKey: "GameKey",
    seasonType: "SeasonType",
    scoringPlayId: "ScoringPlayID",
    season: "Season",
    week: "Week",
    awayTeam: "AwayTeam",
    homeTeam: "HomeTeam",
    date: "Date",
    sequence: "Sequence",
    team: "Team",
    quarter: "Quarter",
    timeRemaining: "TimeRemaining",
    playDescription: "PlayDescription",
    awayScore: "AwayScore",
    homeScore: "HomeScore",
    scoreId: "ScoreID",
  },
});
