import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Headshot1 = {
  /** The unique ID of the golfer */
  playerId?: number;
  /** The name of the golfer */
  name?: string | null;
  /**
   * The player's preferred hosted headshot URL. This returns the headshot with transparent
   * background; if available
   */
  preferredHostedHeadshotUrl?: string | null;
  /** The last updated date of the player's preferred hosted headshot */
  preferredHostedHeadshotUpdated?: string | null;
  /** The player's hosted headshot URL */
  hostedHeadshotWithBackgroundUrl?: string | null;
  /** The timestamp of when the player's hosted headshot was last updated */
  hostedHeadshotWithBackgroundUpdated?: string | null;
  /** The player's transparent background hosted headshot URL */
  hostedHeadshotNoBackgroundUrl?: string | null;
  /** The timestamp of when the player's transparent background hosted headshot was last updated */
  hostedHeadshotNoBackgroundUpdated?: string | null;
};

export const headshot1Schema: Schema<Headshot1> = s.object<Headshot1>({
  playerId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  preferredHostedHeadshotUrl: s.optionalNullable(s.string()),
  preferredHostedHeadshotUpdated: s.optionalNullable(s.string()),
  hostedHeadshotWithBackgroundUrl: s.optionalNullable(s.string()),
  hostedHeadshotWithBackgroundUpdated: s.optionalNullable(s.string()),
  hostedHeadshotNoBackgroundUrl: s.optionalNullable(s.string()),
  hostedHeadshotNoBackgroundUpdated: s.optionalNullable(s.string()),
  _keysMap: {
    playerId: "PlayerID",
    name: "Name",
    preferredHostedHeadshotUrl: "PreferredHostedHeadshotUrl",
    preferredHostedHeadshotUpdated: "PreferredHostedHeadshotUpdated",
    hostedHeadshotWithBackgroundUrl: "HostedHeadshotWithBackgroundUrl",
    hostedHeadshotWithBackgroundUpdated: "HostedHeadshotWithBackgroundUpdated",
    hostedHeadshotNoBackgroundUrl: "HostedHeadshotNoBackgroundUrl",
    hostedHeadshotNoBackgroundUpdated: "HostedHeadshotNoBackgroundUpdated",
  },
});
