import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScoringPlay1 = {
  gameKey?: string | null;
  seasonType?: number;
  scoringPlayId?: number;
  season?: number;
  week?: number;
  awayTeam?: string | null;
  homeTeam?: string | null;
  date?: string | null;
  sequence?: number | null;
  team?: string | null;
  quarter?: string | null;
  timeRemaining?: string | null;
  playDescription?: string | null;
  awayScore?: number | null;
  homeScore?: number | null;
  scoreId?: number;
};

export const scoringPlay1Schema: Schema<ScoringPlay1> = s.object<ScoringPlay1>({
  gameKey: s.optionalNullable(s.string()),
  seasonType: s.optional(s.number()),
  scoringPlayId: s.optional(s.number()),
  season: s.optional(s.number()),
  week: s.optional(s.number()),
  awayTeam: s.optionalNullable(s.string()),
  homeTeam: s.optionalNullable(s.string()),
  date: s.optionalNullable(s.string()),
  sequence: s.optionalNullable(s.number()),
  team: s.optionalNullable(s.string()),
  quarter: s.optionalNullable(s.string()),
  timeRemaining: s.optionalNullable(s.string()),
  playDescription: s.optionalNullable(s.string()),
  awayScore: s.optionalNullable(s.number()),
  homeScore: s.optionalNullable(s.number()),
  scoreId: s.optional(s.number()),
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
