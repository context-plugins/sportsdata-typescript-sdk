import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Headshot = {
  /**
   * The unique PlayerID of the player as assigned by SportsDataIO. Note: this ID will stay with the
   * player throughout their entire career
   */
  playerId?: number;
  /** The player's full name */
  name?: string | null;
  /** The unique ID of the team */
  teamId?: number | null;
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /**
   * The primary position of the player. Possible Values: C; CB; DB; DE; DL; DT; FB; FS; G; ILB; K;
   * KR; LB; LS; NT; OL; OLB; OT; P; QB; RB; S; SS; T; TE; WR
   */
  position?: string | null;
  /**
   * The player's preferred hosted headshot URL. This returns the headshot with transparent
   * background, if available.
   */
  preferredHostedHeadshotUrl?: string | null;
  /** The last updated date of the player's preferred hosted headshot. */
  preferredHostedHeadshotUpdated?: string | null;
  /** The player's hosted headshot URL. */
  hostedHeadshotWithBackgroundUrl?: string | null;
  /** The last updated date of the player's hosted headshot. */
  hostedHeadshotWithBackgroundUpdated?: string | null;
  /** The player's transparent background hosted headshot URL. */
  hostedHeadshotNoBackgroundUrl?: string | null;
  /** The last updated date of the player's transparent background hosted headshot. */
  hostedHeadshotNoBackgroundUpdated?: string | null;
};

export const headshotSchema: Schema<Headshot> = s.object<Headshot>({
  playerId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.int()),
  team: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  preferredHostedHeadshotUrl: s.optionalNullable(s.string()),
  preferredHostedHeadshotUpdated: s.optionalNullable(s.string()),
  hostedHeadshotWithBackgroundUrl: s.optionalNullable(s.string()),
  hostedHeadshotWithBackgroundUpdated: s.optionalNullable(s.string()),
  hostedHeadshotNoBackgroundUrl: s.optionalNullable(s.string()),
  hostedHeadshotNoBackgroundUpdated: s.optionalNullable(s.string()),
  _keysMap: {
    playerId: "PlayerID",
    name: "Name",
    teamId: "TeamID",
    team: "Team",
    position: "Position",
    preferredHostedHeadshotUrl: "PreferredHostedHeadshotUrl",
    preferredHostedHeadshotUpdated: "PreferredHostedHeadshotUpdated",
    hostedHeadshotWithBackgroundUrl: "HostedHeadshotWithBackgroundUrl",
    hostedHeadshotWithBackgroundUpdated: "HostedHeadshotWithBackgroundUpdated",
    hostedHeadshotNoBackgroundUrl: "HostedHeadshotNoBackgroundUrl",
    hostedHeadshotNoBackgroundUpdated: "HostedHeadshotNoBackgroundUpdated",
  },
});
