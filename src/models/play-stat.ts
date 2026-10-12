import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayStat = {
  /** The unique ID of the PlayStat on the play */
  playStatId?: number;
  /** The unique ID of the play in which the PlayStat occurred */
  playId?: number;
  /** The order in which the play stat was registered to the Play. */
  sequence?: number;
  /**
   * The unique PlayerID of the player whose stats are tied to the play. Note: this ID will stay
   * with the player throughout their entire career
   */
  playerId?: number;
  /** The Name of the Player whose stats this represents. */
  name?: string | null;
  /** The abbreviation [Key] of the team the player belongs to */
  team?: string | null;
  /** The abbreviation [Key] of the opponent team of the player who recorded the stat */
  opponent?: string | null;
  /** Whether the Player was Home or Away (possible values: HOME, AWAY) */
  homeOrAway?: string | null;
  /** The Direction this Play occurred (possible values: Left, Middle, Right) */
  direction?: string | null;
  /**
   * The database generated timestamp of when this PlayStat was last updated (in US Eastern time)
   */
  updated?: string | null;
  /**
   * The database generated timestamp of when this PlayStat was first created (in US Eastern Time)
   */
  created?: string | null;
  /** Total passes thrown by the player on the play */
  passingAttempts?: number | null;
  /** Total passing completions by the player on the play */
  passingCompletions?: number | null;
  /** Total passing yards by the player on the play */
  passingYards?: number | null;
  /** Total passing touchdowns thrown by the player on the play */
  passingTouchdowns?: number | null;
  /** Total interceptions thrown by the player on the play */
  passingInterceptions?: number | null;
  /** The total number of times the player was sacked on the play */
  passingSacks?: number | null;
  /** Total yards lost by the player as a result of being sacked on the play */
  passingSackYards?: number | null;
  /** Rushing attempts by the player on the play. Note: this field is expected to be 1 or 0 */
  rushingAttempts?: number | null;
  /** Total rushing yards by the player on the play */
  rushingYards?: number | null;
  /**
   * Total rushing touchdowns by the player on the play. Note: this field is expected to be 1 or 0
   */
  rushingTouchdowns?: number | null;
  /**
   * Total receiving targets by the player on the play. Note: this field is expected to be 1 or 0
   */
  receivingTargets?: number | null;
  /** Total receptions by the player on the play. Note: this field is expected to be 1 or 0 */
  receptions?: number | null;
  /** Total receiving yards by the player on the play */
  receivingYards?: number | null;
  /**
   * Total receiving touchdowns by the player on the play. Note: this field is expected to be 1 or 0
   */
  receivingTouchdowns?: number | null;
  /** Times the player fumbled on the play */
  fumbles?: number | null;
  /** Fumbles lost by the player on the play */
  fumblesLost?: number | null;
  /**
   * Total two point conversion attempts by the player on the play. Note: this field is expected to
   * be 1 or 0
   */
  twoPointConversionAttempts?: number | null;
  /**
   * Total successful two point conversion passes by the player on the play. Note: this field is
   * expected to be 1 or 0
   */
  twoPointConversionPasses?: number | null;
  /**
   * Total two point conversion rushes by the player on the play. Note: this field is expected to be
   * 1 or 0
   */
  twoPointConversionRuns?: number | null;
  /**
   * Total successful two point conversion receptions by the player on the play. Note: this field is
   * expected to be 1 or 0
   */
  twoPointConversionReceptions?: number | null;
  /**
   * Total successful two point conversion returns by the player on the play. Note: this field is
   * expected to be 1 or 0
   */
  twoPointConversionReturns?: number | null;
  /**
   * Total defensive solo (unassisted) tackles by the player on the play. Note: this field is
   * expected to be 1 or 0
   */
  soloTackles?: number | null;
  /** Total defensive assisted tackles by the player on the play */
  assistedTackles?: number | null;
  /**
   * Tackles for loss of yards by the player on the play. Note: These are tackles behind the line of
   * scrimmage for loss of yards (including sacks) - also this field is expected to be 1 or 0
   */
  tacklesForLoss?: number | null;
  /** Total Sacks by this player on the play. Note: this field is expected to be 1 or 0 */
  sacks?: number | null;
  /** Total sack yards by this player on the play */
  sackYards?: number | null;
  /** Total passes defended by the player on the play */
  passesDefended?: number | null;
  /**
   * Total defensive safeties by the player on the play. Note: this field is expected to be 1 or 0
   */
  safeties?: number | null;
  /** Fumbles forced by the player on the play */
  fumblesForced?: number | null;
  /** Defensive fumbles recovered by the player on the play */
  fumblesRecovered?: number | null;
  /** Fumble recoveries returned yards by the player on the play */
  fumbleReturnYards?: number | null;
  /** Fumble recoveries returned for touchdowns by the player on the play */
  fumbleReturnTouchdowns?: number | null;
  /** Interceptions by the player on the play */
  interceptions?: number | null;
  /** Interception return yards by the player on the play */
  interceptionReturnYards?: number | null;
  /** Interception return touchdowns by the player on the play */
  interceptionReturnTouchdowns?: number | null;
  /** Total punts returned by the player on the play */
  puntReturns?: number | null;
  /** Total punt return yards by the player on the play */
  puntReturnYards?: number | null;
  /**
   * Punt returns for touchdowns by the player on the play. Note: this field is expected to be 1 or
   * 0
   */
  puntReturnTouchdowns?: number | null;
  /** Kicks returned by the player on the play */
  kickReturns?: number | null;
  /** Kicks return yards by the player on the play */
  kickReturnYards?: number | null;
  /** Kicks returned for touchdowns by the player on the play */
  kickReturnTouchdowns?: number | null;
  /**
   * Blocked kicks by the player on the play. Note: BlockedKicks include Field Goals and Punts but
   * NOT Extra Points
   */
  blockedKicks?: number | null;
  /** Blocked kick recovery returns by the player on the play */
  blockedKickReturns?: number | null;
  /** Blocked kick recovery return yards by the player on the play */
  blockedKickReturnYards?: number | null;
  /** Blocked kick recovery return touchdowns by the player on the play */
  blockedKickReturnTouchdowns?: number | null;
  /** Field goal returns by the player on the play */
  fieldGoalReturns?: number | null;
  /**
   * Field goal return yards by the player on the play. Note: This field excludes blocked field
   * goals
   */
  fieldGoalReturnYards?: number | null;
  /**
   * Field goal return touchdowns by the player on the play. Note: This field excludes blocked field
   * goals
   */
  fieldGoalReturnTouchdowns?: number | null;
  /** Total kickoffs by this player on the play */
  kickoffs?: number | null;
  /** Gross kickoff yards by the player on the play */
  kickoffYards?: number | null;
  /** Kickoff touchbacks by the player on the play */
  kickoffTouchbacks?: number | null;
  /** Total number of punts by the player on the play. Note: this field is expected to be 1 or 0 */
  punts?: number | null;
  /** Total gross punt yards by the player on the play */
  puntYards?: number | null;
  /**
   * Total punt touchbacks by the player on the play. Note: this field is expected to be either 1 or
   * 0
   */
  puntTouchbacks?: number | null;
  /**
   * Total punts by the player that were blocked on the play. Note: this field is expected to be 1
   * or 0
   */
  puntsHadBlocked?: number | null;
  /** Field goals attempted by the player on the play */
  fieldGoalsAttempted?: number | null;
  /** Field goals made by the player on the play */
  fieldGoalsMade?: number | null;
  /** Field goal yards attempted by the player on the play */
  fieldGoalsYards?: number | null;
  /** Field goals attempted by the player that were blocked on the play */
  fieldGoalsHadBlocked?: number | null;
  /** Extra points attempted by the player on the play */
  extraPointsAttempted?: number | null;
  /** Extra points made by the player on the play */
  extraPointsMade?: number | null;
  /** Extra point attempts by the player that were blocked on the play */
  extraPointsHadBlocked?: number | null;
  /**
   * Indicates the number of penalties against a player on a play. Note: This serves as a
   * placeholder for data intended to be added in the future
   */
  penalties?: number | null;
  /** Total penalty yards enforced against the player on the play */
  penaltyYards?: number | null;
};

export const playStatSchema: Schema<PlayStat> = s.object<PlayStat>({
  playStatId: s.optional(s.int()),
  playId: s.optional(s.int()),
  sequence: s.optional(s.int()),
  playerId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  opponent: s.optionalNullable(s.string()),
  homeOrAway: s.optionalNullable(s.string()),
  direction: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  passingAttempts: s.optionalNullable(s.int()),
  passingCompletions: s.optionalNullable(s.int()),
  passingYards: s.optionalNullable(s.int()),
  passingTouchdowns: s.optionalNullable(s.int()),
  passingInterceptions: s.optionalNullable(s.int()),
  passingSacks: s.optionalNullable(s.int()),
  passingSackYards: s.optionalNullable(s.int()),
  rushingAttempts: s.optionalNullable(s.int()),
  rushingYards: s.optionalNullable(s.int()),
  rushingTouchdowns: s.optionalNullable(s.int()),
  receivingTargets: s.optionalNullable(s.int()),
  receptions: s.optionalNullable(s.int()),
  receivingYards: s.optionalNullable(s.int()),
  receivingTouchdowns: s.optionalNullable(s.int()),
  fumbles: s.optionalNullable(s.int()),
  fumblesLost: s.optionalNullable(s.int()),
  twoPointConversionAttempts: s.optionalNullable(s.int()),
  twoPointConversionPasses: s.optionalNullable(s.int()),
  twoPointConversionRuns: s.optionalNullable(s.int()),
  twoPointConversionReceptions: s.optionalNullable(s.int()),
  twoPointConversionReturns: s.optionalNullable(s.int()),
  soloTackles: s.optionalNullable(s.int()),
  assistedTackles: s.optionalNullable(s.int()),
  tacklesForLoss: s.optionalNullable(s.int()),
  sacks: s.optionalNullable(s.float64()),
  sackYards: s.optionalNullable(s.float64()),
  passesDefended: s.optionalNullable(s.int()),
  safeties: s.optionalNullable(s.int()),
  fumblesForced: s.optionalNullable(s.int()),
  fumblesRecovered: s.optionalNullable(s.int()),
  fumbleReturnYards: s.optionalNullable(s.int()),
  fumbleReturnTouchdowns: s.optionalNullable(s.int()),
  interceptions: s.optionalNullable(s.int()),
  interceptionReturnYards: s.optionalNullable(s.int()),
  interceptionReturnTouchdowns: s.optionalNullable(s.int()),
  puntReturns: s.optionalNullable(s.int()),
  puntReturnYards: s.optionalNullable(s.int()),
  puntReturnTouchdowns: s.optionalNullable(s.int()),
  kickReturns: s.optionalNullable(s.int()),
  kickReturnYards: s.optionalNullable(s.int()),
  kickReturnTouchdowns: s.optionalNullable(s.int()),
  blockedKicks: s.optionalNullable(s.int()),
  blockedKickReturns: s.optionalNullable(s.int()),
  blockedKickReturnYards: s.optionalNullable(s.int()),
  blockedKickReturnTouchdowns: s.optionalNullable(s.int()),
  fieldGoalReturns: s.optionalNullable(s.int()),
  fieldGoalReturnYards: s.optionalNullable(s.int()),
  fieldGoalReturnTouchdowns: s.optionalNullable(s.int()),
  kickoffs: s.optionalNullable(s.int()),
  kickoffYards: s.optionalNullable(s.int()),
  kickoffTouchbacks: s.optionalNullable(s.int()),
  punts: s.optionalNullable(s.int()),
  puntYards: s.optionalNullable(s.int()),
  puntTouchbacks: s.optionalNullable(s.int()),
  puntsHadBlocked: s.optionalNullable(s.int()),
  fieldGoalsAttempted: s.optionalNullable(s.int()),
  fieldGoalsMade: s.optionalNullable(s.int()),
  fieldGoalsYards: s.optionalNullable(s.int()),
  fieldGoalsHadBlocked: s.optionalNullable(s.int()),
  extraPointsAttempted: s.optionalNullable(s.int()),
  extraPointsMade: s.optionalNullable(s.int()),
  extraPointsHadBlocked: s.optionalNullable(s.int()),
  penalties: s.optionalNullable(s.int()),
  penaltyYards: s.optionalNullable(s.int()),
  _keysMap: {
    playStatId: "PlayStatID",
    playId: "PlayID",
    sequence: "Sequence",
    playerId: "PlayerID",
    name: "Name",
    team: "Team",
    opponent: "Opponent",
    homeOrAway: "HomeOrAway",
    direction: "Direction",
    updated: "Updated",
    created: "Created",
    passingAttempts: "PassingAttempts",
    passingCompletions: "PassingCompletions",
    passingYards: "PassingYards",
    passingTouchdowns: "PassingTouchdowns",
    passingInterceptions: "PassingInterceptions",
    passingSacks: "PassingSacks",
    passingSackYards: "PassingSackYards",
    rushingAttempts: "RushingAttempts",
    rushingYards: "RushingYards",
    rushingTouchdowns: "RushingTouchdowns",
    receivingTargets: "ReceivingTargets",
    receptions: "Receptions",
    receivingYards: "ReceivingYards",
    receivingTouchdowns: "ReceivingTouchdowns",
    fumbles: "Fumbles",
    fumblesLost: "FumblesLost",
    twoPointConversionAttempts: "TwoPointConversionAttempts",
    twoPointConversionPasses: "TwoPointConversionPasses",
    twoPointConversionRuns: "TwoPointConversionRuns",
    twoPointConversionReceptions: "TwoPointConversionReceptions",
    twoPointConversionReturns: "TwoPointConversionReturns",
    soloTackles: "SoloTackles",
    assistedTackles: "AssistedTackles",
    tacklesForLoss: "TacklesForLoss",
    sacks: "Sacks",
    sackYards: "SackYards",
    passesDefended: "PassesDefended",
    safeties: "Safeties",
    fumblesForced: "FumblesForced",
    fumblesRecovered: "FumblesRecovered",
    fumbleReturnYards: "FumbleReturnYards",
    fumbleReturnTouchdowns: "FumbleReturnTouchdowns",
    interceptions: "Interceptions",
    interceptionReturnYards: "InterceptionReturnYards",
    interceptionReturnTouchdowns: "InterceptionReturnTouchdowns",
    puntReturns: "PuntReturns",
    puntReturnYards: "PuntReturnYards",
    puntReturnTouchdowns: "PuntReturnTouchdowns",
    kickReturns: "KickReturns",
    kickReturnYards: "KickReturnYards",
    kickReturnTouchdowns: "KickReturnTouchdowns",
    blockedKicks: "BlockedKicks",
    blockedKickReturns: "BlockedKickReturns",
    blockedKickReturnYards: "BlockedKickReturnYards",
    blockedKickReturnTouchdowns: "BlockedKickReturnTouchdowns",
    fieldGoalReturns: "FieldGoalReturns",
    fieldGoalReturnYards: "FieldGoalReturnYards",
    fieldGoalReturnTouchdowns: "FieldGoalReturnTouchdowns",
    kickoffs: "Kickoffs",
    kickoffYards: "KickoffYards",
    kickoffTouchbacks: "KickoffTouchbacks",
    punts: "Punts",
    puntYards: "PuntYards",
    puntTouchbacks: "PuntTouchbacks",
    puntsHadBlocked: "PuntsHadBlocked",
    fieldGoalsAttempted: "FieldGoalsAttempted",
    fieldGoalsMade: "FieldGoalsMade",
    fieldGoalsYards: "FieldGoalsYards",
    fieldGoalsHadBlocked: "FieldGoalsHadBlocked",
    extraPointsAttempted: "ExtraPointsAttempted",
    extraPointsMade: "ExtraPointsMade",
    extraPointsHadBlocked: "ExtraPointsHadBlocked",
    penalties: "Penalties",
    penaltyYards: "PenaltyYards",
  },
});
