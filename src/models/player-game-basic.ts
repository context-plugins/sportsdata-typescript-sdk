import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerGameBasic = {
  /** The timestamp of when the record was last updated (in US Eastern Time) */
  updated?: string | null;
  /** The timestamp of when the record was last updated (in UTC Time) */
  updatedUtc?: string | null;
  /** Total number of games played by the player in the game */
  games?: number | null;
  /**
   * Total regular time minutes played by the player in the game. Note: this excludes stoppage time
   * minutes
   */
  minutes?: number | null;
  /** Total goals scored by the player in the game */
  goals?: number | null;
  /** Total assists scored by the player in the game */
  assists?: number | null;
  /** Total shots attempted by the player in the game */
  shots?: number | null;
  /** Total shots on goal attempted by the player in the game */
  shotsOnGoal?: number | null;
  /** Total yellow cards against the player in the game */
  yellowCards?: number | null;
  /** Total red cards against by the player in the game */
  redCards?: number | null;
  /**
   * Total double yellow cards against the player in the game. Note: A double yellow card results in
   * a red card
   */
  yellowRedCards?: number | null;
  /**
   * Total crosses by the player in the game. Note: a cross means a pass from a wide area of the
   * field towards the center of the field near the opponent's goal.
   */
  crosses?: number | null;
  /** Total tackles won by the player in the game */
  tacklesWon?: number | null;
  /** Total interceptions made by the player in the game */
  interceptions?: number | null;
  /** Total goals scored against own team (accidentally) */
  ownGoals?: number | null;
  /** Total fouls made by the player in the game */
  fouls?: number | null;
  /** Total times the player was fouled in the game */
  fouled?: number | null;
  /** Total offsides against by the player in the game */
  offsides?: number | null;
  /** Total passes attempted by the player in the game */
  passes?: number | null;
  /** Total passes completed by the player in the game */
  passesCompleted?: number | null;
  /**
   * Total tackles made by the player when there is no one else available to stop the opponent from
   * scoring in the game
   */
  lastManTackle?: number | null;
  /** Total corner kicks awarded to the player in the game */
  cornersWon?: number | null;
  /** Total shots blocked by the player in the game */
  blockedShots?: number | null;
  /** Total times the player touched the ball in the game */
  touches?: number | null;
  /**
   * Total defender clean sheets by the player in the game. Note: clean sheets are awarded when zero
   * goals were allowed to the opponent and the player played at least 60 minutes).
   */
  defenderCleanSheets?: number | null;
  /** Total saves made by goalkeeper in the game */
  goalkeeperSaves?: number | null;
  /** Total goals allowed by goalkeeper in the game */
  goalkeeperGoalsAgainst?: number | null;
  /** Total games where the goalkeeper allowed exactly one goal in the game */
  goalkeeperSingleGoalAgainst?: number | null;
  /**
   * Total number of clean sheets by the goalkeeper in the game. Note: Awarded when zero goals were
   * allowed to the opponent and the player played at least 60 minutes
   */
  goalkeeperCleanSheets?: number | null;
  /** Total wins by the goalkeeper in the game */
  goalkeeperWins?: number | null;
  /** Total penalty kick goals scored by the player in the game */
  penaltyKickGoals?: number | null;
  /** Total penalty kicks missed by the player in the game */
  penaltyKickMisses?: number | null;
  /** Total penalty kicks saved by the player in the game */
  penaltyKickSaves?: number | null;
  /** Total penalties won by the player in the game */
  penaltiesWon?: number | null;
  /** Total penalties conceded by the player in the game */
  penaltiesConceded?: number | null;
  /** Total goals scored by the player's team in the game */
  score?: number | null;
  /** Total goals scored against own team by the player in the game */
  opponentScore?: number | null;
  /** Total tackles by the player in the game */
  tackles?: number | null;
  /** The unique ID of the game */
  gameId?: number | null;
  /** The unique ID of the team's opponent */
  opponentId?: number | null;
  /** The name of the opponent team */
  opponent?: string | null;
  /** The day of the game */
  day?: string | null;
  /** The date and time of the game (in UTC) */
  dateTime?: string | null;
  /** Whether the team is the home team or away team */
  homeOrAway?: string | null;
  /** Whether the game is over (true) or not (false) */
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
   * their entire career
   */
  playerId?: number | null;
  /** The player's full name */
  name?: string | null;
  /** The short name of the player */
  shortName?: string | null;
  /** The abbreviation [Key] of the player's team */
  team?: string | null;
  /** The player's position category */
  positionCategory?: string | null;
  /**
   * The position of the player. Possible values include: A (Attacker); M (Midfielder); D
   * (Defender); GK (Goalkeeper)
   */
  position?: string | null;
  /** The player's jersey number */
  jersey?: number;
  /** The total number of games the player started */
  started?: number | null;
  /** Whether the player is a captain (true/false) */
  captain?: boolean | null;
  /** Whether the player is suspended or not (true/false) */
  suspension?: boolean | null;
  /** The reason given for the player's suspension */
  suspensionReason?: string | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalTeamId?: number | null;
};

export const playerGameBasicSchema: Schema<PlayerGameBasic> = s.object<PlayerGameBasic>({
  updated: s.optionalNullable(s.string()),
  updatedUtc: s.optionalNullable(s.string()),
  games: s.optionalNullable(s.int()),
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
  gameId: s.optionalNullable(s.int()),
  opponentId: s.optionalNullable(s.int()),
  opponent: s.optionalNullable(s.string()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  homeOrAway: s.optionalNullable(s.string()),
  isGameOver: s.optional(s.boolean()),
  globalGameId: s.optionalNullable(s.int()),
  globalOpponentId: s.optionalNullable(s.int()),
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
  jersey: s.optional(s.int()),
  started: s.optionalNullable(s.int()),
  captain: s.optionalNullable(s.boolean()),
  suspension: s.optionalNullable(s.boolean()),
  suspensionReason: s.optionalNullable(s.string()),
  globalTeamId: s.optionalNullable(s.int()),
  _keysMap: {
    updated: "Updated",
    updatedUtc: "UpdatedUtc",
    games: "Games",
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
    gameId: "GameId",
    opponentId: "OpponentId",
    opponent: "Opponent",
    day: "Day",
    dateTime: "DateTime",
    homeOrAway: "HomeOrAway",
    isGameOver: "IsGameOver",
    globalGameId: "GlobalGameId",
    globalOpponentId: "GlobalOpponentId",
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
    globalTeamId: "GlobalTeamId",
  },
});
