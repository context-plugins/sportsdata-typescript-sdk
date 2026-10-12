import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerInfo = {
  /**
   * The unique PlayerID of the player as assigned by SportsDataIO. Note: this ID will stay with the
   * player throughout their entire career
   */
  playerId?: number;
  /** The player's full name */
  name?: string | null;
  /**
   * The unique ID of the team that the player is on. Note: If the player is a free agent; this
   * field is NULL
   */
  teamId?: number | null;
  /**
   * The abbreviation [Key] of the team that the player is on. Note: If this player is a free agent;
   * this field is NULL
   */
  team?: string | null;
  /**
   * The primary position of the player. Possible Values: C; CB; DB; DE; DL; DT; FB; FS; G; ILB; K;
   * KR; LB; LS; NT; OL; OLB; OT; P; QB; RB; S; SS; T; TE; WR
   */
  position?: string | null;
};

export const playerInfoSchema: Schema<PlayerInfo> = s.object<PlayerInfo>({
  playerId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.int()),
  team: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  _keysMap: {
    playerId: "PlayerID",
    name: "Name",
    teamId: "TeamID",
    team: "Team",
    position: "Position",
  },
});
