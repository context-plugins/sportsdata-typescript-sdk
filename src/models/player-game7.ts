import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerGame7 = {
  statId?: number;
  seasonType?: number;
  season?: number;
  roundId?: number | null;
  teamId?: number | null;
  playerId?: number | null;
  name?: string | null;
  shortName?: string | null;
  team?: string | null;
  positionCategory?: string | null;
  position?: string | null;
  jersey?: number | null;
  started?: number | null;
  captain?: boolean | null;
  suspension?: boolean | null;
  suspensionReason?: string | null;
  fanDuelSalary?: number | null;
  draftKingsSalary?: number | null;
  yahooSalary?: number | null;
  mondogoalSalary?: number | null;
  fanDuelPosition?: string | null;
  draftKingsPosition?: string | null;
  yahooPosition?: string | null;
  mondogoalPosition?: string | null;
  injuryStatus?: string | null;
  injuryBodyPart?: string | null;
  injuryNotes?: string | null;
  injuryStartDate?: string | null;
  globalTeamId?: number | null;
  corners?: number | null;
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

export const playerGame7Schema: Schema<PlayerGame7> = s.object<PlayerGame7>({
  statId: s.optional(s.number()),
  seasonType: s.optional(s.number()),
  season: s.optional(s.number()),
  roundId: s.optionalNullable(s.number()),
  teamId: s.optionalNullable(s.number()),
  playerId: s.optionalNullable(s.number()),
  name: s.optionalNullable(s.string()),
  shortName: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  positionCategory: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  jersey: s.optionalNullable(s.number()),
  started: s.optionalNullable(s.number()),
  captain: s.optionalNullable(s.boolean()),
  suspension: s.optionalNullable(s.boolean()),
  suspensionReason: s.optionalNullable(s.string()),
  fanDuelSalary: s.optionalNullable(s.number()),
  draftKingsSalary: s.optionalNullable(s.number()),
  yahooSalary: s.optionalNullable(s.number()),
  mondogoalSalary: s.optionalNullable(s.number()),
  fanDuelPosition: s.optionalNullable(s.string()),
  draftKingsPosition: s.optionalNullable(s.string()),
  yahooPosition: s.optionalNullable(s.string()),
  mondogoalPosition: s.optionalNullable(s.string()),
  injuryStatus: s.optionalNullable(s.string()),
  injuryBodyPart: s.optionalNullable(s.string()),
  injuryNotes: s.optionalNullable(s.string()),
  injuryStartDate: s.optionalNullable(s.string()),
  globalTeamId: s.optionalNullable(s.number()),
  corners: s.optionalNullable(s.number()),
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
    playerId: "PlayerId",
    name: "Name",
    shortName: "ShortName",
    team: "Team",
    positionCategory: "PositionCategory",
    position: "Position",
    jersey: "Jersey",
    started: "Started",
    captain: "Captain",
    suspension: "Suspension",
    suspensionReason: "SuspensionReason",
    fanDuelSalary: "FanDuelSalary",
    draftKingsSalary: "DraftKingsSalary",
    yahooSalary: "YahooSalary",
    mondogoalSalary: "MondogoalSalary",
    fanDuelPosition: "FanDuelPosition",
    draftKingsPosition: "DraftKingsPosition",
    yahooPosition: "YahooPosition",
    mondogoalPosition: "MondogoalPosition",
    injuryStatus: "InjuryStatus",
    injuryBodyPart: "InjuryBodyPart",
    injuryNotes: "InjuryNotes",
    injuryStartDate: "InjuryStartDate",
    globalTeamId: "GlobalTeamId",
    corners: "Corners",
    gameId: "GameId",
    opponentId: "OpponentId",
    opponent: "Opponent",
    day: "Day",
    dateTime: "DateTime",
    homeOrAway: "HomeOrAway",
    isGameOver: "IsGameOver",
    globalGameId: "GlobalGameId",
    globalOpponentId: "GlobalOpponentId",
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
