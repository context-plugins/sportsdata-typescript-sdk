import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Headshot1 = {
  playerId?: number;
  name?: string | null;
  preferredHostedHeadshotUrl?: string | null;
  preferredHostedHeadshotUpdated?: string | null;
  hostedHeadshotWithBackgroundUrl?: string | null;
  hostedHeadshotWithBackgroundUpdated?: string | null;
  hostedHeadshotNoBackgroundUrl?: string | null;
  hostedHeadshotNoBackgroundUpdated?: string | null;
};

export const headshot1Schema: Schema<Headshot1> = s.object<Headshot1>({
  playerId: s.optional(s.number()),
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
