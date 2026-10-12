import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Injury = {
  /** The unique ID of the injury record for the player */
  injuryId?: number;
  /**
   * The type of season that this player corresponds to (1=Regular Season; 2=Preseason;
   * 3=Postseason; 4=Offseason; 5=All-Star)
   */
  seasonType?: number;
  /** The season of the game that this injury leads up to */
  season?: number;
  /**
   * The NFL week of the game that this injury leads up to (regular season: 1 to 18; preseason: 0 to
   * 4; postseason: 1 to 4). Note: seasons prior to 2021 will have 3 preseason weeks.
   */
  week?: number;
  /**
   * The unique PlayerID of the player as assigned by SportsDataIO. Note: this ID will stay with the
   * player throughout their entire career.
   */
  playerId?: number;
  /** Player's full name */
  name?: string | null;
  /**
   * The primary position of the player. Possible Values: C; CB; DB; DE; DL; DT; FB; FS; G; ILB; K;
   * KR; LB; LS; NT; OL; OLB; OT; P; QB; RB; S; SS; T; TE; WR.
   */
  position?: string | null;
  /** Player's jersey number */
  number?: number;
  /**
   * The abbreviation [Key] of the team that the player is on. Note: If this player is a free agent;
   * this field is NULL.
   */
  team?: string | null;
  /** The abbreviation [Key] of the opponent team of the injured player */
  opponent?: string | null;
  /** The body part that is injured (Knee; Groin; Calf; Hamstring; etc.) */
  bodyPart?: string | null;
  /** The injury designation assigned to the player (Probable; Questionable; Doubtful; Out) */
  status?: string | null;
  /** This field is deprecated */
  practice?: string | null;
  /** This field is deprecated */
  practiceDescription?: string | null;
  /** The date/time the injury status was updated (in US Eastern time) */
  updated?: string | null;
  /**
   * Whether the player has been declared inactive. This value is updated in the hours leading up to
   * game start time; as teams announce their inactive players. Note: This is only updated for
   * offensive skill position players (QB; RB; WR; TE).
   */
  declaredInactive?: boolean | null;
  /**
   * The unique ID of the team that the player is on. Note: If the player is a free agent; this
   * field is NULL.
   */
  teamId?: number | null;
  /** The unique ID of the opponent this player played on during this game */
  opponentId?: number | null;
};

export const injurySchema: Schema<Injury> = s.object<Injury>({
  injuryId: s.optional(s.int()),
  seasonType: s.optional(s.int()),
  season: s.optional(s.int()),
  week: s.optional(s.int()),
  playerId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  number: s.optional(s.int()),
  team: s.optionalNullable(s.string()),
  opponent: s.optionalNullable(s.string()),
  bodyPart: s.optionalNullable(s.string()),
  status: s.optionalNullable(s.string()),
  practice: s.optionalNullable(s.string()),
  practiceDescription: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  declaredInactive: s.optionalNullable(s.boolean()),
  teamId: s.optionalNullable(s.int()),
  opponentId: s.optionalNullable(s.int()),
  _keysMap: {
    injuryId: "InjuryID",
    seasonType: "SeasonType",
    season: "Season",
    week: "Week",
    playerId: "PlayerID",
    name: "Name",
    position: "Position",
    number: "Number",
    team: "Team",
    opponent: "Opponent",
    bodyPart: "BodyPart",
    status: "Status",
    practice: "Practice",
    practiceDescription: "PracticeDescription",
    updated: "Updated",
    declaredInactive: "DeclaredInactive",
    teamId: "TeamID",
    opponentId: "OpponentID",
  },
});
