import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type News1 = {
  /** The unique ID of the news story */
  newsId?: number;
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID will stay with the
   * player throughout their entire career
   */
  playerId?: number | null;
  /** The unique ID of the team */
  teamId?: number | null;
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /** The title of the news story */
  title?: string | null;
  /** The full body content of the story */
  content?: string | null;
  /** The URL of the full news story */
  url?: string | null;
  /** The source of the story (RotoBaller, NBCSports.com, etc.) */
  source?: string | null;
  /**
   * The terms of use with using this news item, credit must be given to the originator of the story
   * when specified in the terms of use
   */
  termsOfUse?: string | null;
  /** The timestamp of when the news story was last updated */
  updated?: string | null;
  /** A description of how long ago this content was published */
  timeAgo?: string | null;
};

export const news1Schema: Schema<News1> = s.object<News1>({
  newsId: s.optional(s.int()),
  playerId: s.optionalNullable(s.int()),
  teamId: s.optionalNullable(s.int()),
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
