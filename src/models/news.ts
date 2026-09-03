import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type News = {
  newsId?: number;
  source?: string | null;
  updated?: string | null;
  timeAgo?: string | null;
  title?: string | null;
  content?: string | null;
  url?: string | null;
  termsOfUse?: string | null;
  author?: string | null;
  categories?: string | null;
  playerId?: number | null;
  teamId?: number | null;
  team?: string | null;
  playerId2?: number | null;
  teamId2?: number | null;
  team2?: string | null;
  originalSource?: string | null;
  originalSourceUrl?: string | null;
};

export const newsSchema: Schema<News> = s.object<News>({
  newsId: s.optional(s.number()),
  source: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  timeAgo: s.optionalNullable(s.string()),
  title: s.optionalNullable(s.string()),
  content: s.optionalNullable(s.string()),
  url: s.optionalNullable(s.string()),
  termsOfUse: s.optionalNullable(s.string()),
  author: s.optionalNullable(s.string()),
  categories: s.optionalNullable(s.string()),
  playerId: s.optionalNullable(s.number()),
  teamId: s.optionalNullable(s.number()),
  team: s.optionalNullable(s.string()),
  playerId2: s.optionalNullable(s.number()),
  teamId2: s.optionalNullable(s.number()),
  team2: s.optionalNullable(s.string()),
  originalSource: s.optionalNullable(s.string()),
  originalSourceUrl: s.optionalNullable(s.string()),
  _keysMap: {
    newsId: "NewsID",
    source: "Source",
    updated: "Updated",
    timeAgo: "TimeAgo",
    title: "Title",
    content: "Content",
    url: "Url",
    termsOfUse: "TermsOfUse",
    author: "Author",
    categories: "Categories",
    playerId: "PlayerID",
    teamId: "TeamID",
    team: "Team",
    playerId2: "PlayerID2",
    teamId2: "TeamID2",
    team2: "Team2",
    originalSource: "OriginalSource",
    originalSourceUrl: "OriginalSourceUrl",
  },
});
