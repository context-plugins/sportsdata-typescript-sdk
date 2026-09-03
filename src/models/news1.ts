import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type News1 = {
  newsId?: number;
  playerId?: number | null;
  teamId?: number | null;
  team?: string | null;
  title?: string | null;
  content?: string | null;
  url?: string | null;
  source?: string | null;
  termsOfUse?: string | null;
  updated?: string | null;
  timeAgo?: string | null;
};

export const news1Schema: Schema<News1> = s.object<News1>({
  newsId: s.optional(s.number()),
  playerId: s.optionalNullable(s.number()),
  teamId: s.optionalNullable(s.number()),
  team: s.optionalNullable(s.string()),
  title: s.optionalNullable(s.string()),
  content: s.optionalNullable(s.string()),
  url: s.optionalNullable(s.string()),
  source: s.optionalNullable(s.string()),
  termsOfUse: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  timeAgo: s.optionalNullable(s.string()),
  _keysMap: {
    newsId: "NewsID",
    playerId: "PlayerID",
    teamId: "TeamID",
    team: "Team",
    title: "Title",
    content: "Content",
    url: "Url",
    source: "Source",
    termsOfUse: "TermsOfUse",
    updated: "Updated",
    timeAgo: "TimeAgo",
  },
});
