import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type News = {
  /** Unique ID of news story */
  newsId?: number;
  /** The source of the story (RotoBaller, NBCSports.com, etc.) */
  source?: string | null;
  /** The date/time that the content was published (in US Eastern time) */
  updated?: string | null;
  /** A description of how long ago this content was published */
  timeAgo?: string | null;
  /** The brief title of the news (typically less than 100 characters) */
  title?: string | null;
  /** The full body content of the story */
  content?: string | null;
  /** The url of the full story */
  url?: string | null;
  /**
   * The terms of use with using this news item, credit must be given to the originator of the story
   * when specified in the terms of use
   */
  termsOfUse?: string | null;
  /** The author of the content */
  author?: string | null;
  /**
   * Comma delimited meta tags describing the categories of this content. Possible tags include: Top
   * Headlines, Breaking News, Injury, Sit/Start, Waiver Wire, Risers, Fallers, Lineups,
   * Transactions, Free Agents, Prospects/Rookies, Game Recap, Matchup Outlook, NFL Draft
   */
  categories?: string | null;
  /**
   * The unique PlayerID as assigned by SportsDataIO of the player tied to this news story. Note:
   * this ID will stay with the player throughout their entire career
   */
  playerId?: number | null;
  /** The unique ID of the team that relates to this story */
  teamId?: number | null;
  /** The abbreviation [Key] of the team that relates to the story */
  team?: string | null;
  /**
   * The unique PlayerID as assigned by SportsDataIO of the second player tied to this news story.
   * Note: this ID will stay with the player throughout their entire career
   */
  playerId2?: number | null;
  /** The unique ID of the second team that relates to this story */
  teamId2?: number | null;
  /** The abbreviation [Key] of the second team that relates to the story */
  team2?: string | null;
  /**
   * The original source who broke this news (before it was picked up by the publisher of this
   * blurb)
   */
  originalSource?: string | null;
  /** The URL of the original source who broke this news blurb */
  originalSourceUrl?: string | null;
};

export const newsSchema: Schema<News> = s.object<News>({
  newsId: s.optional(s.int()),
  source: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  timeAgo: s.optionalNullable(s.string()),
  title: s.optionalNullable(s.string()),
  content: s.optionalNullable(s.string()),
  url: s.optionalNullable(s.string()),
  termsOfUse: s.optionalNullable(s.string()),
  author: s.optionalNullable(s.string()),
  categories: s.optionalNullable(s.string()),
  playerId: s.optionalNullable(s.int()),
  teamId: s.optionalNullable(s.int()),
  team: s.optionalNullable(s.string()),
  playerId2: s.optionalNullable(s.int()),
  teamId2: s.optionalNullable(s.int()),
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
