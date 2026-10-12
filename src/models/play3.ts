import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Play3 = {
  /** The unique ID of the play */
  playId?: number;
  /** The unique ID of the period during which this play occurred */
  periodId?: number;
  /** The name of the period that this play occurred in */
  periodName?: string | null;
  /** The order in which this play happened over the course of the game */
  sequence?: number;
  /** The number of minutes passed in the period when this play completed */
  clockMinutes?: number | null;
  /** The number of seconds passed in the period when this play completed */
  clockSeconds?: number | null;
  /** The score of the away team after the play ended */
  awayTeamScore?: number | null;
  /** The score of the home team after the play ended */
  homeTeamScore?: number | null;
  /** The unique ID of the team */
  teamId?: number | null;
  /** The abbreviation [Key] of the team associated with this play */
  team?: string | null;
  /** The unique ID of the team's opponent associated with this play */
  opponentId?: number | null;
  /** The abbreviation [Key] of the opponent team */
  opponent?: string | null;
  /**
   * The category of the play. Possible values: Block; Faceoff; Goal; Hit; Penalty; Period;
   * Shootout; Shot; Stoppage; Turnover
   */
  category?: string | null;
  /**
   * The type of the play. Possible values: AwayTeamTimeout, Block, Boarding, Charging,
   * CheckToTheHead, Clipping, ClosingHandOnThePuck, CrossChecking, DelayOfGame, Elbowing, Faceoff,
   * Fighting, GameMisconduct, Giveaway, Goal, GoalieStopped, HandPass, HighSticking,
   * HighStickOnPuck, Hit, Holding, HoldingTheStick, HomeTeamTimeout, Hooking, Icing,
   * IllegalEquipment, Interference, Kneeing, MinorPenalty, Misconduct, NetOffPost, ObjectsOnIce,
   * Offside, Period, PeriodEnd, PlayerEquipment, PlayerInjury, PowerPlayGoal, PuckFrozen,
   * PuckInBench, PuckInCrowd, PuckInNetting, Referee, RinkRepair, Roughing, ShootoutGoal,
   * ShootoutMiss, ShootoutSave, ShotMissed, ShotOnGoal, Slashing, Stoppage, Takeaway, TooManyMen,
   * Tripping, TvTimeout, Unsportsmanlike, VideoReview
   */
  type?: string | null;
  /** The description of the play (example: Sidney Crosby won faceoff against Aaron Ekblad) */
  description?: string | null;
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID will stay with the
   * player throughout their entire career
   */
  playerId?: number | null;
  /** The timestamp of when the play was last updated (in US Eastern Time) */
  updated?: string | null;
  /**
   * The database generated timestamp of when this play was first created; based on US Eatern Time
   * (EST/EDT)
   */
  created?: string | null;
  /** The PlayerID of the player who got the first assist on this play (if applicable) */
  firstAssistedByPlayerId?: number | null;
  /** The PlayerID of the player who got the second assist on this play (if applicable) */
  secondAssistedByPlayerId?: number | null;
  /** The unique TeamID of the team on the power play this play (if any) */
  powerPlayTeamId?: number | null;
  /** The abbreviation [Key] of the team on the power play this play (if any) */
  powerPlayTeam?: string | null;
  /** The PlayerID of the player involved in the play on the opposing team */
  opposingPlayerId?: number | null;
};

export const play3Schema: Schema<Play3> = s.object<Play3>({
  playId: s.optional(s.int()),
  periodId: s.optional(s.int()),
  periodName: s.optionalNullable(s.string()),
  sequence: s.optional(s.int()),
  clockMinutes: s.optionalNullable(s.int()),
  clockSeconds: s.optionalNullable(s.int()),
  awayTeamScore: s.optionalNullable(s.int()),
  homeTeamScore: s.optionalNullable(s.int()),
  teamId: s.optionalNullable(s.int()),
  team: s.optionalNullable(s.string()),
  opponentId: s.optionalNullable(s.int()),
  opponent: s.optionalNullable(s.string()),
  category: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  playerId: s.optionalNullable(s.int()),
  updated: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  firstAssistedByPlayerId: s.optionalNullable(s.int()),
  secondAssistedByPlayerId: s.optionalNullable(s.int()),
  powerPlayTeamId: s.optionalNullable(s.int()),
  powerPlayTeam: s.optionalNullable(s.string()),
  opposingPlayerId: s.optionalNullable(s.int()),
  _keysMap: {
    playId: "PlayID",
    periodId: "PeriodID",
    periodName: "PeriodName",
    sequence: "Sequence",
    clockMinutes: "ClockMinutes",
    clockSeconds: "ClockSeconds",
    awayTeamScore: "AwayTeamScore",
    homeTeamScore: "HomeTeamScore",
    teamId: "TeamID",
    team: "Team",
    opponentId: "OpponentID",
    opponent: "Opponent",
    category: "Category",
    type: "Type",
    description: "Description",
    playerId: "PlayerID",
    updated: "Updated",
    created: "Created",
    firstAssistedByPlayerId: "FirstAssistedByPlayerID",
    secondAssistedByPlayerId: "SecondAssistedByPlayerID",
    powerPlayTeamId: "PowerPlayTeamID",
    powerPlayTeam: "PowerPlayTeam",
    opposingPlayerId: "OpposingPlayerID",
  },
});
