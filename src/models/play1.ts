import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Play1 = {
  /** The unique identifier of the play. */
  playId?: number;
  /** The unique identifier of the Quarter that this play occurred in. */
  quarterId?: number;
  /** The name of the quarter that this play occurred in */
  quarterName?: string | null;
  /** The order in which this play happened over the course of the game. */
  sequence?: number;
  /** The number of minutes remaining in the quarter when this play occurred */
  timeRemainingMinutes?: number | null;
  /** The number of seconds remaining in the quarter when the play occurred */
  timeRemainingSeconds?: number | null;
  /** Total number of points the away team scored after this play completed */
  awayTeamScore?: number | null;
  /** Total points scored by the home team after the completion of this play */
  homeTeamScore?: number | null;
  /** The points that would have been potentially scored by the shot attempt (if any). */
  potentialPoints?: number | null;
  /** The points scores by the shot attempt (if any). */
  points?: number | null;
  /** Whether the shot was made (if any). */
  shotMade?: boolean | null;
  /**
   * The category the play. Possible values: Period, Timeout, JumpBall, Shot, Rebound, Foul,
   * Substitution, Turnover, Challenge.
   */
  category?: string | null;
  /**
   * The type of the play. Possible values: None, Period, Timeout, JumpBall, FieldGoalMade,
   * FieldGoalMissed, FreeThrowMade, FreeThrowMissed, Rebound, Steal, Turnover, Foul, PersonalFoul,
   * ShootingFoul, OffensiveFoul, LooseBallFoul, TechnicalFoul, FlagrantFoul, Traveling, Palming,
   * Goaltending, KickedBall, LaneViolation, DelayOfGame, Substitution, Ejection, and Challenge.
   */
  type?: string | null;
  /** The unique ID of the team associated with this play */
  teamId?: number | null;
  /** The abbreviation [Key] of the team associated with this play */
  team?: string | null;
  /** The unique ID of the opponent team associated with this play */
  opponentId?: number | null;
  /** Abbreviation [Key] of the opponent team (e.g. LAL; PHI; BOS; CHI; etc.) */
  opponent?: string | null;
  /** The TeamID of the team that won the jump ball. */
  receivingTeamId?: number | null;
  /** The team abbreviation [Key] of the team that won the jump ball */
  receivingTeam?: string | null;
  /** The description of the play. */
  description?: string | null;
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID will stay with the
   * player throughout their entire career
   */
  playerId?: number | null;
  /**
   * The PlayerID of the player who recorded an assist on a made field goal by another player (if
   * applicable)
   */
  assistedByPlayerId?: number | null;
  /** The PlayerID of the player who blocked the field goal attempt on this play (if any). */
  blockedByPlayerId?: number | null;
  /** Indicates whether this play happened on a fast break. */
  fastBreak?: boolean | null;
  /**
   * The side of the basket that the field goal was attempted from (if any). Possible values: L, R
   */
  sideOfBasket?: string | null;
  /** The timestamp of when this play was last updated (in US Eastern Time) */
  updated?: string | null;
  /** The database generated timestamp of when this play was first created (in US Eastern Time) */
  created?: string | null;
  /** The PlayerID of the player who substituted into the game. */
  substituteInPlayerId?: number | null;
  /** The PlayerID of the player who substituted out of the game. */
  substituteOutPlayerId?: number | null;
  /** The PlayerID of the player who is involved in the play from the away team (if applicable) */
  awayPlayerId?: number | null;
  /** The PlayerID of the player who is involved in the play from the home team */
  homePlayerId?: number | null;
  /** The PlayerID of the player who received the ball */
  receivingPlayerId?: number | null;
  /** The baseline offset percentage of where the ball was shot/passed */
  baselineOffsetPercentage?: number | null;
  /** The sideline offset percentage of where the ball was shot/passed */
  sidelineOffsetPercentage?: number | null;
  /** The x/y coordinates of where the ball was shot/passed */
  coordinates?: string | null;
  /** The PlayerID of the player who stole the ball (if applicable) */
  stolenByPlayerId?: number | null;
};

export const play1Schema: Schema<Play1> = s.object<Play1>({
  playId: s.optional(s.int()),
  quarterId: s.optional(s.int()),
  quarterName: s.optionalNullable(s.string()),
  sequence: s.optional(s.int()),
  timeRemainingMinutes: s.optionalNullable(s.int()),
  timeRemainingSeconds: s.optionalNullable(s.int()),
  awayTeamScore: s.optionalNullable(s.int()),
  homeTeamScore: s.optionalNullable(s.int()),
  potentialPoints: s.optionalNullable(s.int()),
  points: s.optionalNullable(s.int()),
  shotMade: s.optionalNullable(s.boolean()),
  category: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.int()),
  team: s.optionalNullable(s.string()),
  opponentId: s.optionalNullable(s.int()),
  opponent: s.optionalNullable(s.string()),
  receivingTeamId: s.optionalNullable(s.int()),
  receivingTeam: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  playerId: s.optionalNullable(s.int()),
  assistedByPlayerId: s.optionalNullable(s.int()),
  blockedByPlayerId: s.optionalNullable(s.int()),
  fastBreak: s.optionalNullable(s.boolean()),
  sideOfBasket: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  substituteInPlayerId: s.optionalNullable(s.int()),
  substituteOutPlayerId: s.optionalNullable(s.int()),
  awayPlayerId: s.optionalNullable(s.int()),
  homePlayerId: s.optionalNullable(s.int()),
  receivingPlayerId: s.optionalNullable(s.int()),
  baselineOffsetPercentage: s.optionalNullable(s.float64()),
  sidelineOffsetPercentage: s.optionalNullable(s.float64()),
  coordinates: s.optionalNullable(s.string()),
  stolenByPlayerId: s.optionalNullable(s.int()),
  _keysMap: {
    playId: "PlayID",
    quarterId: "QuarterID",
    quarterName: "QuarterName",
    sequence: "Sequence",
    timeRemainingMinutes: "TimeRemainingMinutes",
    timeRemainingSeconds: "TimeRemainingSeconds",
    awayTeamScore: "AwayTeamScore",
    homeTeamScore: "HomeTeamScore",
    potentialPoints: "PotentialPoints",
    points: "Points",
    shotMade: "ShotMade",
    category: "Category",
    type: "Type",
    teamId: "TeamID",
    team: "Team",
    opponentId: "OpponentID",
    opponent: "Opponent",
    receivingTeamId: "ReceivingTeamID",
    receivingTeam: "ReceivingTeam",
    description: "Description",
    playerId: "PlayerID",
    assistedByPlayerId: "AssistedByPlayerID",
    blockedByPlayerId: "BlockedByPlayerID",
    fastBreak: "FastBreak",
    sideOfBasket: "SideOfBasket",
    updated: "Updated",
    created: "Created",
    substituteInPlayerId: "SubstituteInPlayerID",
    substituteOutPlayerId: "SubstituteOutPlayerID",
    awayPlayerId: "AwayPlayerID",
    homePlayerId: "HomePlayerID",
    receivingPlayerId: "ReceivingPlayerID",
    baselineOffsetPercentage: "BaselineOffsetPercentage",
    sidelineOffsetPercentage: "SidelineOffsetPercentage",
    coordinates: "Coordinates",
    stolenByPlayerId: "StolenByPlayerID",
  },
});
