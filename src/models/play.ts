import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { playStatSchema, type PlayStat } from "./play-stat.js";
import { scoringPlay1Schema, type ScoringPlay1 } from "./scoring-play1.js";

export type Play = {
  /** The unique ID of the play */
  playId?: number;
  /** The unique ID of the quarter in which the play occurred */
  quarterId?: number;
  /** The name of the quarter in which the play occurred */
  quarterName?: string | null;
  /** The order in which this play and/or event happened over the course of the game */
  sequence?: number | null;
  /** The minutes of the time remaining in the Quarter, when this play occurred. */
  timeRemainingMinutes?: number | null;
  /** The seconds of the time remaining in the Quarter, when this play occurred. */
  timeRemainingSeconds?: number | null;
  /**
   * The estimated timestamp of when this Play occurred on the field. Please note that we do not
   * have scouts at the venue; so this is an estimate based on our TV feed and estimated TV feed
   * delay
   */
  playTime?: string | null;
  /** The database generated timestamp of when this Play was last updated (in US Eastern time) */
  updated?: string | null;
  /** The database generated timestamp of when this Play was first created (in US Eastern Time) */
  created?: string | null;
  /** The abbreviation [Key] of the team that completed the play */
  team?: string | null;
  /** The abbreviation [Key] of the opponent of the team that this play relates to */
  opponent?: string | null;
  /** The Down when this Play occurred. */
  down?: number | null;
  /** The yards to go for a first down. Note: this can be any positive number or "Goal" */
  distance?: number | null;
  /** the yard line of the ball's current position on the field when this play occurred */
  yardLine?: number | null;
  /** The team's side of the field that the ball is on when the play occurred */
  yardLineTerritory?: string | null;
  /** The number of yards to go to reach the end zone at the start of the play */
  yardsToEndZone?: number | null;
  /**
   * The Type of Play that occurred (possible values: Rush, PassCompleted, PassIncomplete,
   * PassIntercepted, TwoPointConversion, Punt, Kickoff, FieldGoal, ExtraPoint, Fumble, Penalty,
   * Sack, Timeout, Period)
   */
  type?: string | null;
  /** The number of yards gained or lost on the play */
  yardsGained?: number | null;
  /** The description of the Play. */
  description?: string | null;
  /** Indicates whether this Play was a scoring play. */
  isScoringPlay?: boolean | null;
  /** The details of the scoring play attached to this play (if any). */
  scoringPlay?: ScoringPlay1;
  /** The list of player stats accumulated during the play */
  playStats?: PlayStat[];
};

export const playSchema: Schema<Play> = s.object<Play>({
  playId: s.optional(s.int()),
  quarterId: s.optional(s.int()),
  quarterName: s.optionalNullable(s.string()),
  sequence: s.optionalNullable(s.int()),
  timeRemainingMinutes: s.optionalNullable(s.int()),
  timeRemainingSeconds: s.optionalNullable(s.int()),
  playTime: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  opponent: s.optionalNullable(s.string()),
  down: s.optionalNullable(s.int()),
  distance: s.optionalNullable(s.int()),
  yardLine: s.optionalNullable(s.int()),
  yardLineTerritory: s.optionalNullable(s.string()),
  yardsToEndZone: s.optionalNullable(s.int()),
  type: s.optionalNullable(s.string()),
  yardsGained: s.optionalNullable(s.int()),
  description: s.optionalNullable(s.string()),
  isScoringPlay: s.optionalNullable(s.boolean()),
  scoringPlay: s.optional(s.lazy(() => scoringPlay1Schema)),
  playStats: s.optional(s.array(s.lazy(() => playStatSchema))),
  _keysMap: {
    playId: "PlayID",
    quarterId: "QuarterID",
    quarterName: "QuarterName",
    sequence: "Sequence",
    timeRemainingMinutes: "TimeRemainingMinutes",
    timeRemainingSeconds: "TimeRemainingSeconds",
    playTime: "PlayTime",
    updated: "Updated",
    created: "Created",
    team: "Team",
    opponent: "Opponent",
    down: "Down",
    distance: "Distance",
    yardLine: "YardLine",
    yardLineTerritory: "YardLineTerritory",
    yardsToEndZone: "YardsToEndZone",
    type: "Type",
    yardsGained: "YardsGained",
    description: "Description",
    isScoringPlay: "IsScoringPlay",
    scoringPlay: "ScoringPlay",
    playStats: "PlayStats",
  },
});
