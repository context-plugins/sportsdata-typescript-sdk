import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerOwnership = {
  /**
   * The unique PlayerID of the player as assigned by SportsDataIO. Note: this ID will stay with the
   * player throughout their entire career
   */
  playerId?: number;
  /** The NFL season of the ownership info */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season, 2=Preseason,
   * 3=Postseason, 4=Offseason, 5=AllStar).
   */
  seasonType?: number;
  /**
   * The NFL week of the game (regular season: 1 to 18; preseason: 0 to 4; postseason: 1 to 4).
   * Note: seasons after 2021 will have only 3 preseason weeks
   */
  week?: number;
  /** The player's full name */
  name?: string | null;
  /**
   * The player's fantasy football position. Possible values: QB; RB; WR; TE; DL; LB; DB; K; P; OL
   */
  position?: string | null;
  /** The abbreviation [Key] of the team that the player is on */
  team?: string | null;
  /**
   * The unique ID of the team that the player is on. Note: If the player is a free agent; this
   * field is NULL
   */
  teamId?: number | null;
  /** Player's ownership percentage on NFL.com fantasy leagues during this week */
  ownershipPercentage?: number | null;
  /** Player's change in ownership percentage on NFL.com fantasy leagues during this week */
  deltaOwnershipPercentage?: number | null;
  /** Player's starting lineup percentage on NFL.com fantasy leagues during this week */
  startPercentage?: number | null;
  /** Player's change in starting lineup percentage on NFL.com fantasy leagues during this week */
  deltaStartPercentage?: number | null;
};

export const playerOwnershipSchema: Schema<PlayerOwnership> = s.object<PlayerOwnership>({
  playerId: s.optional(s.int()),
  season: s.optional(s.int()),
  seasonType: s.optional(s.int()),
  week: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.int()),
  ownershipPercentage: s.optionalNullable(s.float64()),
  deltaOwnershipPercentage: s.optionalNullable(s.float64()),
  startPercentage: s.optionalNullable(s.float64()),
  deltaStartPercentage: s.optionalNullable(s.float64()),
  _keysMap: {
    playerId: "PlayerID",
    season: "Season",
    seasonType: "SeasonType",
    week: "Week",
    name: "Name",
    position: "Position",
    team: "Team",
    teamId: "TeamID",
    ownershipPercentage: "OwnershipPercentage",
    deltaOwnershipPercentage: "DeltaOwnershipPercentage",
    startPercentage: "StartPercentage",
    deltaStartPercentage: "DeltaStartPercentage",
  },
});
