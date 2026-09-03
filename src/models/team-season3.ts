import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { opponentSeason21Schema, type OpponentSeason21 } from "./opponent-season21.js";

export type TeamSeason3 = {
  statId?: number;
  teamId?: number | null;
  seasonType?: number | null;
  season?: number | null;
  name?: string | null;
  team?: string | null;
  wins?: number | null;
  losses?: number | null;
  overtimeLosses?: number | null;
  opponentPosition?: string | null;
  globalTeamId?: number | null;
  opponentStat?: OpponentSeason21;
  updated?: string | null;
  games?: number | null;
  fantasyPoints?: number | null;
  fantasyPointsFanDuel?: number | null;
  fantasyPointsDraftKings?: number | null;
  fantasyPointsYahoo?: number | null;
  minutes?: number | null;
  seconds?: number | null;
  goals?: number | null;
  assists?: number | null;
  shotsOnGoal?: number | null;
  powerPlayGoals?: number | null;
  shortHandedGoals?: number | null;
  emptyNetGoals?: number | null;
  powerPlayAssists?: number | null;
  shortHandedAssists?: number | null;
  hatTricks?: number | null;
  shootoutGoals?: number | null;
  plusMinus?: number | null;
  penaltyMinutes?: number | null;
  blocks?: number | null;
  hits?: number | null;
  takeaways?: number | null;
  giveaways?: number | null;
  faceoffsWon?: number | null;
  faceoffsLost?: number | null;
  shifts?: number | null;
  goaltendingMinutes?: number | null;
  goaltendingSeconds?: number | null;
  goaltendingShotsAgainst?: number | null;
  goaltendingGoalsAgainst?: number | null;
  goaltendingSaves?: number | null;
  goaltendingWins?: number | null;
  goaltendingLosses?: number | null;
  goaltendingShutouts?: number | null;
  started?: number | null;
  benchPenaltyMinutes?: number | null;
  goaltendingOvertimeLosses?: number | null;
  fantasyPointsFantasyDraft?: number | null;
};

export const teamSeason3Schema: Schema<TeamSeason3> = s.object<TeamSeason3>({
  statId: s.optional(s.number()),
  teamId: s.optionalNullable(s.number()),
  seasonType: s.optionalNullable(s.number()),
  season: s.optionalNullable(s.number()),
  name: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  wins: s.optionalNullable(s.number()),
  losses: s.optionalNullable(s.number()),
  overtimeLosses: s.optionalNullable(s.number()),
  opponentPosition: s.optionalNullable(s.string()),
  globalTeamId: s.optionalNullable(s.number()),
  opponentStat: s.optional(s.lazy(() => opponentSeason21Schema)),
  updated: s.optionalNullable(s.string()),
  games: s.optionalNullable(s.number()),
  fantasyPoints: s.optionalNullable(s.number()),
  fantasyPointsFanDuel: s.optionalNullable(s.number()),
  fantasyPointsDraftKings: s.optionalNullable(s.number()),
  fantasyPointsYahoo: s.optionalNullable(s.number()),
  minutes: s.optionalNullable(s.number()),
  seconds: s.optionalNullable(s.number()),
  goals: s.optionalNullable(s.number()),
  assists: s.optionalNullable(s.number()),
  shotsOnGoal: s.optionalNullable(s.number()),
  powerPlayGoals: s.optionalNullable(s.number()),
  shortHandedGoals: s.optionalNullable(s.number()),
  emptyNetGoals: s.optionalNullable(s.number()),
  powerPlayAssists: s.optionalNullable(s.number()),
  shortHandedAssists: s.optionalNullable(s.number()),
  hatTricks: s.optionalNullable(s.number()),
  shootoutGoals: s.optionalNullable(s.number()),
  plusMinus: s.optionalNullable(s.number()),
  penaltyMinutes: s.optionalNullable(s.number()),
  blocks: s.optionalNullable(s.number()),
  hits: s.optionalNullable(s.number()),
  takeaways: s.optionalNullable(s.number()),
  giveaways: s.optionalNullable(s.number()),
  faceoffsWon: s.optionalNullable(s.number()),
  faceoffsLost: s.optionalNullable(s.number()),
  shifts: s.optionalNullable(s.number()),
  goaltendingMinutes: s.optionalNullable(s.number()),
  goaltendingSeconds: s.optionalNullable(s.number()),
  goaltendingShotsAgainst: s.optionalNullable(s.number()),
  goaltendingGoalsAgainst: s.optionalNullable(s.number()),
  goaltendingSaves: s.optionalNullable(s.number()),
  goaltendingWins: s.optionalNullable(s.number()),
  goaltendingLosses: s.optionalNullable(s.number()),
  goaltendingShutouts: s.optionalNullable(s.number()),
  started: s.optionalNullable(s.number()),
  benchPenaltyMinutes: s.optionalNullable(s.number()),
  goaltendingOvertimeLosses: s.optionalNullable(s.number()),
  fantasyPointsFantasyDraft: s.optionalNullable(s.number()),
  _keysMap: {
    statId: "StatID",
    teamId: "TeamID",
    seasonType: "SeasonType",
    season: "Season",
    name: "Name",
    team: "Team",
    wins: "Wins",
    losses: "Losses",
    overtimeLosses: "OvertimeLosses",
    opponentPosition: "OpponentPosition",
    globalTeamId: "GlobalTeamID",
    opponentStat: "OpponentStat",
    updated: "Updated",
    games: "Games",
    fantasyPoints: "FantasyPoints",
    fantasyPointsFanDuel: "FantasyPointsFanDuel",
    fantasyPointsDraftKings: "FantasyPointsDraftKings",
    fantasyPointsYahoo: "FantasyPointsYahoo",
    minutes: "Minutes",
    seconds: "Seconds",
    goals: "Goals",
    assists: "Assists",
    shotsOnGoal: "ShotsOnGoal",
    powerPlayGoals: "PowerPlayGoals",
    shortHandedGoals: "ShortHandedGoals",
    emptyNetGoals: "EmptyNetGoals",
    powerPlayAssists: "PowerPlayAssists",
    shortHandedAssists: "ShortHandedAssists",
    hatTricks: "HatTricks",
    shootoutGoals: "ShootoutGoals",
    plusMinus: "PlusMinus",
    penaltyMinutes: "PenaltyMinutes",
    blocks: "Blocks",
    hits: "Hits",
    takeaways: "Takeaways",
    giveaways: "Giveaways",
    faceoffsWon: "FaceoffsWon",
    faceoffsLost: "FaceoffsLost",
    shifts: "Shifts",
    goaltendingMinutes: "GoaltendingMinutes",
    goaltendingSeconds: "GoaltendingSeconds",
    goaltendingShotsAgainst: "GoaltendingShotsAgainst",
    goaltendingGoalsAgainst: "GoaltendingGoalsAgainst",
    goaltendingSaves: "GoaltendingSaves",
    goaltendingWins: "GoaltendingWins",
    goaltendingLosses: "GoaltendingLosses",
    goaltendingShutouts: "GoaltendingShutouts",
    started: "Started",
    benchPenaltyMinutes: "BenchPenaltyMinutes",
    goaltendingOvertimeLosses: "GoaltendingOvertimeLosses",
    fantasyPointsFantasyDraft: "FantasyPointsFantasyDraft",
  },
});
