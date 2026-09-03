import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TeamSeason7 = {
  statId?: number;
  seasonType?: number;
  season?: number;
  roundId?: number | null;
  teamId?: number | null;
  name?: string | null;
  team?: string | null;
  globalTeamId?: number | null;
  possession?: number | null;
  updated?: string | null;
  updatedUtc?: string | null;
  games?: number | null;
  fantasyPoints?: number | null;
  fantasyPointsFanDuel?: number | null;
  fantasyPointsDraftKings?: number | null;
  fantasyPointsYahoo?: number | null;
  fantasyPointsMondogoal?: number | null;
  minutes?: number | null;
  goals?: number | null;
  assists?: number | null;
  shots?: number | null;
  shotsOnGoal?: number | null;
  yellowCards?: number | null;
  redCards?: number | null;
  yellowRedCards?: number | null;
  crosses?: number | null;
  tacklesWon?: number | null;
  interceptions?: number | null;
  ownGoals?: number | null;
  fouls?: number | null;
  fouled?: number | null;
  offsides?: number | null;
  passes?: number | null;
  passesCompleted?: number | null;
  lastManTackle?: number | null;
  cornersWon?: number | null;
  blockedShots?: number | null;
  touches?: number | null;
  defenderCleanSheets?: number | null;
  goalkeeperSaves?: number | null;
  goalkeeperGoalsAgainst?: number | null;
  goalkeeperSingleGoalAgainst?: number | null;
  goalkeeperCleanSheets?: number | null;
  goalkeeperWins?: number | null;
  penaltyKickGoals?: number | null;
  penaltyKickMisses?: number | null;
  penaltyKickSaves?: number | null;
  penaltiesWon?: number | null;
  penaltiesConceded?: number | null;
  score?: number | null;
  opponentScore?: number | null;
  tackles?: number | null;
};

export const teamSeason7Schema: Schema<TeamSeason7> = s.object<TeamSeason7>({
  statId: s.optional(s.number()),
  seasonType: s.optional(s.number()),
  season: s.optional(s.number()),
  roundId: s.optionalNullable(s.number()),
  teamId: s.optionalNullable(s.number()),
  name: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  globalTeamId: s.optionalNullable(s.number()),
  possession: s.optionalNullable(s.number()),
  updated: s.optionalNullable(s.string()),
  updatedUtc: s.optionalNullable(s.string()),
  games: s.optionalNullable(s.number()),
  fantasyPoints: s.optionalNullable(s.number()),
  fantasyPointsFanDuel: s.optionalNullable(s.number()),
  fantasyPointsDraftKings: s.optionalNullable(s.number()),
  fantasyPointsYahoo: s.optionalNullable(s.number()),
  fantasyPointsMondogoal: s.optionalNullable(s.number()),
  minutes: s.optionalNullable(s.number()),
  goals: s.optionalNullable(s.number()),
  assists: s.optionalNullable(s.number()),
  shots: s.optionalNullable(s.number()),
  shotsOnGoal: s.optionalNullable(s.number()),
  yellowCards: s.optionalNullable(s.number()),
  redCards: s.optionalNullable(s.number()),
  yellowRedCards: s.optionalNullable(s.number()),
  crosses: s.optionalNullable(s.number()),
  tacklesWon: s.optionalNullable(s.number()),
  interceptions: s.optionalNullable(s.number()),
  ownGoals: s.optionalNullable(s.number()),
  fouls: s.optionalNullable(s.number()),
  fouled: s.optionalNullable(s.number()),
  offsides: s.optionalNullable(s.number()),
  passes: s.optionalNullable(s.number()),
  passesCompleted: s.optionalNullable(s.number()),
  lastManTackle: s.optionalNullable(s.number()),
  cornersWon: s.optionalNullable(s.number()),
  blockedShots: s.optionalNullable(s.number()),
  touches: s.optionalNullable(s.number()),
  defenderCleanSheets: s.optionalNullable(s.number()),
  goalkeeperSaves: s.optionalNullable(s.number()),
  goalkeeperGoalsAgainst: s.optionalNullable(s.number()),
  goalkeeperSingleGoalAgainst: s.optionalNullable(s.number()),
  goalkeeperCleanSheets: s.optionalNullable(s.number()),
  goalkeeperWins: s.optionalNullable(s.number()),
  penaltyKickGoals: s.optionalNullable(s.number()),
  penaltyKickMisses: s.optionalNullable(s.number()),
  penaltyKickSaves: s.optionalNullable(s.number()),
  penaltiesWon: s.optionalNullable(s.number()),
  penaltiesConceded: s.optionalNullable(s.number()),
  score: s.optionalNullable(s.number()),
  opponentScore: s.optionalNullable(s.number()),
  tackles: s.optionalNullable(s.number()),
  _keysMap: {
    statId: "StatId",
    seasonType: "SeasonType",
    season: "Season",
    roundId: "RoundId",
    teamId: "TeamId",
    name: "Name",
    team: "Team",
    globalTeamId: "GlobalTeamId",
    possession: "Possession",
    updated: "Updated",
    updatedUtc: "UpdatedUtc",
    games: "Games",
    fantasyPoints: "FantasyPoints",
    fantasyPointsFanDuel: "FantasyPointsFanDuel",
    fantasyPointsDraftKings: "FantasyPointsDraftKings",
    fantasyPointsYahoo: "FantasyPointsYahoo",
    fantasyPointsMondogoal: "FantasyPointsMondogoal",
    minutes: "Minutes",
    goals: "Goals",
    assists: "Assists",
    shots: "Shots",
    shotsOnGoal: "ShotsOnGoal",
    yellowCards: "YellowCards",
    redCards: "RedCards",
    yellowRedCards: "YellowRedCards",
    crosses: "Crosses",
    tacklesWon: "TacklesWon",
    interceptions: "Interceptions",
    ownGoals: "OwnGoals",
    fouls: "Fouls",
    fouled: "Fouled",
    offsides: "Offsides",
    passes: "Passes",
    passesCompleted: "PassesCompleted",
    lastManTackle: "LastManTackle",
    cornersWon: "CornersWon",
    blockedShots: "BlockedShots",
    touches: "Touches",
    defenderCleanSheets: "DefenderCleanSheets",
    goalkeeperSaves: "GoalkeeperSaves",
    goalkeeperGoalsAgainst: "GoalkeeperGoalsAgainst",
    goalkeeperSingleGoalAgainst: "GoalkeeperSingleGoalAgainst",
    goalkeeperCleanSheets: "GoalkeeperCleanSheets",
    goalkeeperWins: "GoalkeeperWins",
    penaltyKickGoals: "PenaltyKickGoals",
    penaltyKickMisses: "PenaltyKickMisses",
    penaltyKickSaves: "PenaltyKickSaves",
    penaltiesWon: "PenaltiesWon",
    penaltiesConceded: "PenaltiesConceded",
    score: "Score",
    opponentScore: "OpponentScore",
    tackles: "Tackles",
  },
});
