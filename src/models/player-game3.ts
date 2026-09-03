import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerGame3 = {
  statId?: number;
  teamId?: number | null;
  playerId?: number | null;
  seasonType?: number | null;
  season?: number | null;
  name?: string | null;
  team?: string | null;
  position?: string | null;
  fantasyDataSalary?: number | null;
  fanDuelSalary?: number | null;
  draftKingsSalary?: number | null;
  yahooSalary?: number | null;
  injuryStatus?: string | null;
  injuryBodyPart?: string | null;
  injuryStartDate?: string | null;
  injuryNotes?: string | null;
  fanDuelPosition?: string | null;
  draftKingsPosition?: string | null;
  yahooPosition?: string | null;
  opponentRank?: number | null;
  opponentPositionRank?: number | null;
  globalTeamId?: number | null;
  fantasyDraftSalary?: number | null;
  fantasyDraftPosition?: string | null;
  evenStrengthMinutes?: number | null;
  evenStrengthSeconds?: number | null;
  powerPlayMinutes?: number | null;
  powerPlaySeconds?: number | null;
  shortHandedMinutes?: number | null;
  shortHandedSeconds?: number | null;
  points?: number | null;
  gameId?: number | null;
  opponentId?: number | null;
  opponent?: string | null;
  day?: string | null;
  dateTime?: string | null;
  homeOrAway?: string | null;
  isGameOver?: boolean;
  globalGameId?: number | null;
  globalOpponentId?: number | null;
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

export const playerGame3Schema: Schema<PlayerGame3> = s.object<PlayerGame3>({
  statId: s.optional(s.number()),
  teamId: s.optionalNullable(s.number()),
  playerId: s.optionalNullable(s.number()),
  seasonType: s.optionalNullable(s.number()),
  season: s.optionalNullable(s.number()),
  name: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  fantasyDataSalary: s.optionalNullable(s.number()),
  fanDuelSalary: s.optionalNullable(s.number()),
  draftKingsSalary: s.optionalNullable(s.number()),
  yahooSalary: s.optionalNullable(s.number()),
  injuryStatus: s.optionalNullable(s.string()),
  injuryBodyPart: s.optionalNullable(s.string()),
  injuryStartDate: s.optionalNullable(s.string()),
  injuryNotes: s.optionalNullable(s.string()),
  fanDuelPosition: s.optionalNullable(s.string()),
  draftKingsPosition: s.optionalNullable(s.string()),
  yahooPosition: s.optionalNullable(s.string()),
  opponentRank: s.optionalNullable(s.number()),
  opponentPositionRank: s.optionalNullable(s.number()),
  globalTeamId: s.optionalNullable(s.number()),
  fantasyDraftSalary: s.optionalNullable(s.number()),
  fantasyDraftPosition: s.optionalNullable(s.string()),
  evenStrengthMinutes: s.optionalNullable(s.number()),
  evenStrengthSeconds: s.optionalNullable(s.number()),
  powerPlayMinutes: s.optionalNullable(s.number()),
  powerPlaySeconds: s.optionalNullable(s.number()),
  shortHandedMinutes: s.optionalNullable(s.number()),
  shortHandedSeconds: s.optionalNullable(s.number()),
  points: s.optionalNullable(s.number()),
  gameId: s.optionalNullable(s.number()),
  opponentId: s.optionalNullable(s.number()),
  opponent: s.optionalNullable(s.string()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  homeOrAway: s.optionalNullable(s.string()),
  isGameOver: s.optional(s.boolean()),
  globalGameId: s.optionalNullable(s.number()),
  globalOpponentId: s.optionalNullable(s.number()),
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
    playerId: "PlayerID",
    seasonType: "SeasonType",
    season: "Season",
    name: "Name",
    team: "Team",
    position: "Position",
    fantasyDataSalary: "FantasyDataSalary",
    fanDuelSalary: "FanDuelSalary",
    draftKingsSalary: "DraftKingsSalary",
    yahooSalary: "YahooSalary",
    injuryStatus: "InjuryStatus",
    injuryBodyPart: "InjuryBodyPart",
    injuryStartDate: "InjuryStartDate",
    injuryNotes: "InjuryNotes",
    fanDuelPosition: "FanDuelPosition",
    draftKingsPosition: "DraftKingsPosition",
    yahooPosition: "YahooPosition",
    opponentRank: "OpponentRank",
    opponentPositionRank: "OpponentPositionRank",
    globalTeamId: "GlobalTeamID",
    fantasyDraftSalary: "FantasyDraftSalary",
    fantasyDraftPosition: "FantasyDraftPosition",
    evenStrengthMinutes: "EvenStrengthMinutes",
    evenStrengthSeconds: "EvenStrengthSeconds",
    powerPlayMinutes: "PowerPlayMinutes",
    powerPlaySeconds: "PowerPlaySeconds",
    shortHandedMinutes: "ShortHandedMinutes",
    shortHandedSeconds: "ShortHandedSeconds",
    points: "Points",
    gameId: "GameID",
    opponentId: "OpponentID",
    opponent: "Opponent",
    day: "Day",
    dateTime: "DateTime",
    homeOrAway: "HomeOrAway",
    isGameOver: "IsGameOver",
    globalGameId: "GlobalGameID",
    globalOpponentId: "GlobalOpponentID",
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
