import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type News2 = {
  newsId?: number;
  playerId?: number | null;
  title?: string | null;
  content?: string | null;
  url?: string | null;
  source?: string | null;
  termsOfUse?: string | null;
  updated?: string | null;
  author?: string | null;
  categories?: string | null;
  originalSource?: string | null;
  originalSourceUrl?: string | null;
};

export const news2Schema: Schema<News2> = s.object<News2>({
  newsId: s.optional(s.number()),
  playerId: s.optionalNullable(s.number()),
  title: s.optionalNullable(s.string()),
  content: s.optionalNullable(s.string()),
  url: s.optionalNullable(s.string()),
  source: s.optionalNullable(s.string()),
  termsOfUse: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  author: s.optionalNullable(s.string()),
  categories: s.optionalNullable(s.string()),
  originalSource: s.optionalNullable(s.string()),
  originalSourceUrl: s.optionalNullable(s.string()),
  _keysMap: {
    newsId: "NewsID",
    playerId: "PlayerID",
    title: "Title",
    content: "Content",
    url: "Url",
    source: "Source",
    termsOfUse: "TermsOfUse",
    updated: "Updated",
    author: "Author",
    categories: "Categories",
    originalSource: "OriginalSource",
    originalSourceUrl: "OriginalSourceUrl",
  },
});
