import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { playStatSchema, type PlayStat } from "./play-stat.js";
import { scoringPlay1Schema, type ScoringPlay1 } from "./scoring-play1.js";

export type Play = {
  playId?: number;
  quarterId?: number;
  quarterName?: string | null;
  sequence?: number | null;
  timeRemainingMinutes?: number | null;
  timeRemainingSeconds?: number | null;
  playTime?: string | null;
  updated?: string | null;
  created?: string | null;
  team?: string | null;
  opponent?: string | null;
  down?: number | null;
  distance?: number | null;
  yardLine?: number | null;
  yardLineTerritory?: string | null;
  yardsToEndZone?: number | null;
  type?: string | null;
  yardsGained?: number | null;
  description?: string | null;
  isScoringPlay?: boolean | null;
  scoringPlay?: ScoringPlay1;
  playStats?: PlayStat[];
};

export const playSchema: Schema<Play> = s.object<Play>({
  playId: s.optional(s.number()),
  quarterId: s.optional(s.number()),
  quarterName: s.optionalNullable(s.string()),
  sequence: s.optionalNullable(s.number()),
  timeRemainingMinutes: s.optionalNullable(s.number()),
  timeRemainingSeconds: s.optionalNullable(s.number()),
  playTime: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  opponent: s.optionalNullable(s.string()),
  down: s.optionalNullable(s.number()),
  distance: s.optionalNullable(s.number()),
  yardLine: s.optionalNullable(s.number()),
  yardLineTerritory: s.optionalNullable(s.string()),
  yardsToEndZone: s.optionalNullable(s.number()),
  type: s.optionalNullable(s.string()),
  yardsGained: s.optionalNullable(s.number()),
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
