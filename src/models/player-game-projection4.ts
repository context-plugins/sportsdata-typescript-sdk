import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerGameProjection4 = {
  /** The unique ID of the stat associated with this player */
  statId?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season, 2=Preseason,
   * 3=Postseason, 4=Offseason, 5=AllStar).
   */
  seasonType?: number;
  /** The soccer regular season for which these totals apply */
  season?: number;
  /** The unique ID of the round that this player is associated with */
  roundId?: number | null;
  /** The unique ID of the team */
  teamId?: number | null;
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID stays with the player
   * their entire career.
   */
  playerId?: number | null;
  /** The player's full name */
  name?: string | null;
  /** The short name of the player */
  shortName?: string | null;
  /** The name of the team */
  team?: string | null;
  /** The player's position category */
  positionCategory?: string | null;
  /**
   * The position of the player. Possible values include: A (Attacker); M (Midfielder); D
   * (Defender); GK (Goalkeeper).
   */
  position?: string | null;
  /** The player's jersey number */
  jersey?: number | null;
  /** The total number of games the player started */
  started?: number | null;
  /** Whether the player is a captain (true/false) */
  captain?: boolean | null;
  /** Whether the player is suspended or not (true/false) */
  suspension?: boolean | null;
  /** The reason given for the player's suspension */
  suspensionReason?: string | null;
  /** The player's salary for FanDuel daily fantasy contests. */
  fanDuelSalary?: number | null;
  /** The player's salary for DraftKings daily fantasy contests. */
  draftKingsSalary?: number | null;
  /** The player's salary for Yahoo daily fantasy contests */
  yahooSalary?: number | null;
  /** The player's salary for Mondogoal's daily fantasy contests */
  mondogoalSalary?: number | null;
  /** The player's eligible position in FanDuel's daily fantasy sports platform. */
  fanDuelPosition?: string | null;
  /** The player's eligible position in DraftKings' daily fantasy sports platform. */
  draftKingsPosition?: string | null;
  /** The player's eligible position in Yahoo's daily fantasy sports platform */
  yahooPosition?: string | null;
  /** The player's eligible position in Mondogoal's daily fantasy sports platform. */
  mondogoalPosition?: string | null;
  /** Indicates the player's injury status. Possible values: Questionable; Out. */
  injuryStatus?: string | null;
  /** The body part of the player that is injured (Knee; Groin; Calf; Hamstring; etc.) */
  injuryBodyPart?: string | null;
  /** Not yet supported; will be null */
  injuryNotes?: string | null;
  /** The date that the injury started or was first discovered */
  injuryStartDate?: string | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalTeamId?: number | null;
  /** Total number of corner kicks taken by the player in the game */
  corners?: number | null;
  /** The unique ID of this game */
  gameId?: number | null;
  /** The unique ID of the team's opponent */
  opponentId?: number | null;
  /** The name of the opponent */
  opponent?: string | null;
  /** The day of the game */
  day?: string | null;
  /** The date and time of the game (UTC) */
  dateTime?: string | null;
  /** Whether the team is home or away */
  homeOrAway?: string | null;
  /** Whether the game is over (true/false) */
  isGameOver?: boolean;
  /**
   * A globally unique ID for this game. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalGameId?: number | null;
  /**
   * A globally unique ID for this opponent. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalOpponentId?: number | null;
  /** The timestamp of when the record was last updated (US Eastern Time) */
  updated?: string | null;
  /** The timestamp of when the record was last updated (UTC Time) */
  updatedUtc?: string | null;
  /** The number of games played */
  games?: number | null;
  /** Total fantasy points */
  fantasyPoints?: number | null;
  /** Total Fan Duel daily fantasy points scored */
  fantasyPointsFanDuel?: number | null;
  /** Total Draft Kings daily fantasy points scored */
  fantasyPointsDraftKings?: number | null;
  /** Total Yahoo daily fantasy points scored */
  fantasyPointsYahoo?: number | null;
  /** Total Mondogoal fantasy points scored */
  fantasyPointsMondogoal?: number | null;
  /** Total minutes played */
  minutes?: number | null;
  /** Total goals scored */
  goals?: number | null;
  /** Total assists scored */
  assists?: number | null;
  /** Total shots attempted */
  shots?: number | null;
  /** Total shots on goal attempted */
  shotsOnGoal?: number | null;
  /** Total yellow cards against */
  yellowCards?: number | null;
  /** Total red cards against */
  redCards?: number | null;
  /** Total double yellow cards against (which result in a red card) */
  yellowRedCards?: number | null;
  /**
   * Total passes from a wide area of the field towards the center of the field near the opponent's
   * goal
   */
  crosses?: number | null;
  /** Total tackles won */
  tacklesWon?: number | null;
  /** Total interceptions made */
  interceptions?: number | null;
  /** Total goals scored against own team (accidentally) */
  ownGoals?: number | null;
  /** Total fouls made */
  fouls?: number | null;
  /** Total times fouled */
  fouled?: number | null;
  /** Total offsides against */
  offsides?: number | null;
  /** Total passes attempted */
  passes?: number | null;
  /** Total passes completed successfully to teammate */
  passesCompleted?: number | null;
  /**
   * Total tackles made when there is no one else available to stop the opponent from scoring (this
   * can be the goalkeeper)
   */
  lastManTackle?: number | null;
  /** Total corner kicks awarded */
  cornersWon?: number | null;
  /** Total shots blocked */
  blockedShots?: number | null;
  /** Total times this player touched the ball */
  touches?: number | null;
  /**
   * Total defender clean sheets (awarded when zero goals were allowed to the opponent and the
   * player played at least 60 minutes)
   */
  defenderCleanSheets?: number | null;
  /** Total saves made by goalkeeper */
  goalkeeperSaves?: number | null;
  /** Total goals allowed by goalkeeper */
  goalkeeperGoalsAgainst?: number | null;
  /** Total games where this goalkeeper allowed exactly one goal */
  goalkeeperSingleGoalAgainst?: number | null;
  /**
   * Total goalkeeper clean sheets (awarded when zero goals were allowed to the opponent and the
   * player played at least 60 minutes)
   */
  goalkeeperCleanSheets?: number | null;
  /**
   * Total goalkeeper wins (awarded when zero goals were allowed to the opponent and the player
   * played at least 45 minutes)
   */
  goalkeeperWins?: number | null;
  /** Total penalty kick goals */
  penaltyKickGoals?: number | null;
  /** Total penalty kick misses */
  penaltyKickMisses?: number | null;
  /** Total penalty kick saves */
  penaltyKickSaves?: number | null;
  /** Total penalties won */
  penaltiesWon?: number | null;
  /** Total penalties conceded */
  penaltiesConceded?: number | null;
  /** Goals scored by entire team */
  score?: number | null;
  /** Goals allowed to opponent */
  opponentScore?: number | null;
  /** Total Tackles */
  tackles?: number | null;
};

export const playerGameProjection4Schema: Schema<PlayerGameProjection4> = s.object<PlayerGameProjection4>({
  statId: s.optional(s.int()),
  seasonType: s.optional(s.int()),
  season: s.optional(s.int()),
  roundId: s.optionalNullable(s.int()),
  teamId: s.optionalNullable(s.int()),
  playerId: s.optionalNullable(s.int()),
  name: s.optionalNullable(s.string()),
  shortName: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  positionCategory: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  jersey: s.optionalNullable(s.int()),
  started: s.optionalNullable(s.int()),
  captain: s.optionalNullable(s.boolean()),
  suspension: s.optionalNullable(s.boolean()),
  suspensionReason: s.optionalNullable(s.string()),
  fanDuelSalary: s.optionalNullable(s.int()),
  draftKingsSalary: s.optionalNullable(s.int()),
  yahooSalary: s.optionalNullable(s.int()),
  mondogoalSalary: s.optionalNullable(s.int()),
  fanDuelPosition: s.optionalNullable(s.string()),
  draftKingsPosition: s.optionalNullable(s.string()),
  yahooPosition: s.optionalNullable(s.string()),
  mondogoalPosition: s.optionalNullable(s.string()),
  injuryStatus: s.optionalNullable(s.string()),
  injuryBodyPart: s.optionalNullable(s.string()),
  injuryNotes: s.optionalNullable(s.string()),
  injuryStartDate: s.optionalNullable(s.string()),
  globalTeamId: s.optionalNullable(s.int()),
  corners: s.optionalNullable(s.float64()),
  gameId: s.optionalNullable(s.int()),
  opponentId: s.optionalNullable(s.int()),
  opponent: s.optionalNullable(s.string()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  homeOrAway: s.optionalNullable(s.string()),
  isGameOver: s.optional(s.boolean()),
  globalGameId: s.optionalNullable(s.int()),
  globalOpponentId: s.optionalNullable(s.int()),
  updated: s.optionalNullable(s.string()),
  updatedUtc: s.optionalNullable(s.string()),
  games: s.optionalNullable(s.int()),
  fantasyPoints: s.optionalNullable(s.float64()),
  fantasyPointsFanDuel: s.optionalNullable(s.float64()),
  fantasyPointsDraftKings: s.optionalNullable(s.float64()),
  fantasyPointsYahoo: s.optionalNullable(s.float64()),
  fantasyPointsMondogoal: s.optionalNullable(s.float64()),
  minutes: s.optionalNullable(s.float64()),
  goals: s.optionalNullable(s.float64()),
  assists: s.optionalNullable(s.float64()),
  shots: s.optionalNullable(s.float64()),
  shotsOnGoal: s.optionalNullable(s.float64()),
  yellowCards: s.optionalNullable(s.float64()),
  redCards: s.optionalNullable(s.float64()),
  yellowRedCards: s.optionalNullable(s.float64()),
  crosses: s.optionalNullable(s.float64()),
  tacklesWon: s.optionalNullable(s.float64()),
  interceptions: s.optionalNullable(s.float64()),
  ownGoals: s.optionalNullable(s.float64()),
  fouls: s.optionalNullable(s.float64()),
  fouled: s.optionalNullable(s.float64()),
  offsides: s.optionalNullable(s.float64()),
  passes: s.optionalNullable(s.float64()),
  passesCompleted: s.optionalNullable(s.float64()),
  lastManTackle: s.optionalNullable(s.float64()),
  cornersWon: s.optionalNullable(s.float64()),
  blockedShots: s.optionalNullable(s.float64()),
  touches: s.optionalNullable(s.float64()),
  defenderCleanSheets: s.optionalNullable(s.float64()),
  goalkeeperSaves: s.optionalNullable(s.float64()),
  goalkeeperGoalsAgainst: s.optionalNullable(s.float64()),
  goalkeeperSingleGoalAgainst: s.optionalNullable(s.float64()),
  goalkeeperCleanSheets: s.optionalNullable(s.float64()),
  goalkeeperWins: s.optionalNullable(s.float64()),
  penaltyKickGoals: s.optionalNullable(s.float64()),
  penaltyKickMisses: s.optionalNullable(s.float64()),
  penaltyKickSaves: s.optionalNullable(s.float64()),
  penaltiesWon: s.optionalNullable(s.float64()),
  penaltiesConceded: s.optionalNullable(s.float64()),
  score: s.optionalNullable(s.float64()),
  opponentScore: s.optionalNullable(s.float64()),
  tackles: s.optionalNullable(s.float64()),
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
