import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type News2 = {
  /** The unique ID of the news story */
  newsId?: number;
  /** The unique ID of the golfer who relates to this news story */
  playerId?: number | null;
  /** The brief title of the news (typically less than 100 characters) */
  title?: string | null;
  /** The full body content of this news story */
  content?: string | null;
  /** The url of the full story */
  url?: string | null;
  /** The source of the story (RotoBaller, NBCSports.com, etc.) */
  source?: string | null;
  /**
   * The terms of use with using this news item, credit must be given to the originator of the story
   * when specified in the terms of use
   */
  termsOfUse?: string | null;
  /** The date/time that the content was published */
  updated?: string | null;
  /** The details of the golfers who competed in this tournament */
  author?: string | null;
  /** The category of news this story is under */
  categories?: string | null;
  /** The original source of the news item */
  originalSource?: string | null;
  /** The URL of the original source of the news item */
  originalSourceUrl?: string | null;
};

export const news2Schema: Schema<News2> = s.object<News2>({
  newsId: s.optional(s.int()),
  playerId: s.optionalNullable(s.int()),
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
