import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stadium4Schema, type Stadium4 } from "./stadium4.js";

export type Team = {
  /** Abbreviation [Key] of the team (e.g. PHI; NE; IND; etc.) */
  key?: string | null;
  /** The unique ID of the team */
  teamId?: number;
  /**
   * The auto-generated unique ID of the Team; that avoids collisions with PlayerIDs. This is useful
   * when combining players and fantasy defenses to create fantasy teams
   */
  playerId?: number;
  /**
   * The city/location of the team (e.g. Minnesota; Philadelphia; New England; Indianapolis; etc.)
   */
  city?: string | null;
  /** The mascot of the team (e.g. Eagles; Patriots; Colts; etc.) */
  name?: string | null;
  /** The conference of the team (e.g. AFC or NFC) */
  conference?: string | null;
  /** The division of the team (e.g. East, North, South, West) */
  division?: string | null;
  /** The full name of the team (e.g. New England Patriots) */
  fullName?: string | null;
  /** The unique ID of the team's current home stadium */
  stadiumId?: number | null;
  /** The bye week of the team in the upcoming or current regular season */
  byeWeek?: number | null;
  /** The average draft position of the team's fantasy defense (DST) in re-draft leagues */
  averageDraftPosition?: number | null;
  /** The average draft position of the team (DST) in Points Per Reception (PPR) leagues */
  averageDraftPositionPpr?: number | null;
  /** The current head coach of the team */
  headCoach?: string | null;
  /**
   * The current offensive coordinator of the team. Note: field will be NULL if team doesn't have an
   * OFF coordinator
   */
  offensiveCoordinator?: string | null;
  /**
   * The current offensive coordinator of the team. Note: field will be NULL if team doesn't have an
   * DEF coordinator
   */
  defensiveCoordinator?: string | null;
  /**
   * The current special teams coordinator of the team. Note: field will be NULL if team doesn't
   * have an ST coordinator
   */
  specialTeamsCoach?: string | null;
  /** The offensive scheme this team runs (PRO, 2TE, 3WR). This is decided at our discretion. */
  offensiveScheme?: string | null;
  /** The current defensive scheme this team runs (3-4, 4-3) */
  defensiveScheme?: string | null;
  /**
   * The team's DEF/ST salary for the upcoming week in accordance with a $50,000 salary cap. This is
   * used for daily fantasy sports salary cap contests. Salaries represent those published by
   * DraftKings. When DraftKings doesn't publish a salary for a given game; the most recent
   * DraftKings salary is used
   */
  upcomingSalary?: number | null;
  /** The opponent team the team is playing against in the upcoming week */
  upcomingOpponent?: string | null;
  /** The team's upcoming opponent's rank in DEF/ST fantasy points allowed. */
  upcomingOpponentRank?: number | null;
  /** The team's upcoming opponent's rank in DEF/ST fantasy points allowed. */
  upcomingOpponentPositionRank?: number | null;
  /**
   * The team's DEF/ST DraftKings salary for the upcoming week. Note: We recommend using our new DFS
   * endpoints instead.
   */
  upcomingFanDuelSalary?: number | null;
  /**
   * The team's DEF/ST DraftKings salary for the upcoming week. Note: We recommend using our new DFS
   * endpoints instead
   */
  upcomingDraftKingsSalary?: number | null;
  /** The team's DEF/ST Yahoo salary for the upcoming week */
  upcomingYahooSalary?: number | null;
  /** The team's primary color. (This is not licensed for public or commercial use) */
  primaryColor?: string | null;
  /** The team's secondary color. (This is not licensed for public or commercial use) */
  secondaryColor?: string | null;
  /** The team's tertiary color. (This is not licensed for public or commercial use) */
  tertiaryColor?: string | null;
  /** The team's quaternary color. (This is not licensed for public or commercial use) */
  quaternaryColor?: string | null;
  /**
   * The link to the team's logo hosted on Wikipedia (This is not licensed for public or commercial
   * use)
   */
  wikipediaLogoUrl?: string | null;
  /**
   * The link to the team's wordmark logo hosted on Wikipedia (This is not licensed for public or
   * commercial use)
   */
  wikipediaWordMarkUrl?: string | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalTeamId?: number | null;
  /** Team's D/ST name on DraftKings daily fantasy contests */
  draftKingsName?: string | null;
  /** Team's D/ST player ID on DraftKings daily fantasy contests */
  draftKingsPlayerId?: number | null;
  /** Team's D/ST name on FanDuel daily fantasy contests */
  fanDuelName?: string | null;
  /** Team's DST player ID on FanDuel daily fantasy contests */
  fanDuelPlayerId?: number | null;
  /** Team's D/ST name on daily FantasyDraft daily fantasy contests */
  fantasyDraftName?: string | null;
  /** Team's D/ST player ID on daily FantasyDraft daily fantasy contests */
  fantasyDraftPlayerId?: number | null;
  /** Team's D/ST name on Yahoo daily fantasy contests */
  yahooName?: string | null;
  /** Team's D/ST player ID on Yahoo daily fantasy contests */
  yahooPlayerId?: number | null;
  /** The details of this team's home stadium */
  stadiumDetails?: Stadium4;
  /** The average draft position of the team (DST) in 2 Quarterback leagues */
  averageDraftPosition2Qb?: number | null;
  /** The average draft position of this team (DST) in dynasty leagues */
  averageDraftPositionDynasty?: number | null;
};

export const teamSchema: Schema<Team> = s.object<Team>({
  key: s.optionalNullable(s.string()),
  teamId: s.optional(s.int()),
  playerId: s.optional(s.int()),
  city: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  conference: s.optionalNullable(s.string()),
  division: s.optionalNullable(s.string()),
  fullName: s.optionalNullable(s.string()),
  stadiumId: s.optionalNullable(s.int()),
  byeWeek: s.optionalNullable(s.int()),
  averageDraftPosition: s.optionalNullable(s.float64()),
  averageDraftPositionPpr: s.optionalNullable(s.float64()),
  headCoach: s.optionalNullable(s.string()),
  offensiveCoordinator: s.optionalNullable(s.string()),
  defensiveCoordinator: s.optionalNullable(s.string()),
  specialTeamsCoach: s.optionalNullable(s.string()),
  offensiveScheme: s.optionalNullable(s.string()),
  defensiveScheme: s.optionalNullable(s.string()),
  upcomingSalary: s.optionalNullable(s.int()),
  upcomingOpponent: s.optionalNullable(s.string()),
  upcomingOpponentRank: s.optionalNullable(s.int()),
  upcomingOpponentPositionRank: s.optionalNullable(s.int()),
  upcomingFanDuelSalary: s.optionalNullable(s.int()),
  upcomingDraftKingsSalary: s.optionalNullable(s.int()),
  upcomingYahooSalary: s.optionalNullable(s.int()),
  primaryColor: s.optionalNullable(s.string()),
  secondaryColor: s.optionalNullable(s.string()),
  tertiaryColor: s.optionalNullable(s.string()),
  quaternaryColor: s.optionalNullable(s.string()),
  wikipediaLogoUrl: s.optionalNullable(s.string()),
  wikipediaWordMarkUrl: s.optionalNullable(s.string()),
  globalTeamId: s.optionalNullable(s.int()),
  draftKingsName: s.optionalNullable(s.string()),
  draftKingsPlayerId: s.optionalNullable(s.int()),
  fanDuelName: s.optionalNullable(s.string()),
  fanDuelPlayerId: s.optionalNullable(s.int()),
  fantasyDraftName: s.optionalNullable(s.string()),
  fantasyDraftPlayerId: s.optionalNullable(s.int()),
  yahooName: s.optionalNullable(s.string()),
  yahooPlayerId: s.optionalNullable(s.int()),
  stadiumDetails: s.optional(s.lazy(() => stadium4Schema)),
  averageDraftPosition2Qb: s.optionalNullable(s.float64()),
  averageDraftPositionDynasty: s.optionalNullable(s.float64()),
  _keysMap: {
    key: "Key",
    teamId: "TeamID",
    playerId: "PlayerID",
    city: "City",
    name: "Name",
    conference: "Conference",
    division: "Division",
    fullName: "FullName",
    stadiumId: "StadiumID",
    byeWeek: "ByeWeek",
    averageDraftPosition: "AverageDraftPosition",
    averageDraftPositionPpr: "AverageDraftPositionPPR",
    headCoach: "HeadCoach",
    offensiveCoordinator: "OffensiveCoordinator",
    defensiveCoordinator: "DefensiveCoordinator",
    specialTeamsCoach: "SpecialTeamsCoach",
    offensiveScheme: "OffensiveScheme",
    defensiveScheme: "DefensiveScheme",
    upcomingSalary: "UpcomingSalary",
    upcomingOpponent: "UpcomingOpponent",
    upcomingOpponentRank: "UpcomingOpponentRank",
    upcomingOpponentPositionRank: "UpcomingOpponentPositionRank",
    upcomingFanDuelSalary: "UpcomingFanDuelSalary",
    upcomingDraftKingsSalary: "UpcomingDraftKingsSalary",
    upcomingYahooSalary: "UpcomingYahooSalary",
    primaryColor: "PrimaryColor",
    secondaryColor: "SecondaryColor",
    tertiaryColor: "TertiaryColor",
    quaternaryColor: "QuaternaryColor",
    wikipediaLogoUrl: "WikipediaLogoUrl",
    wikipediaWordMarkUrl: "WikipediaWordMarkUrl",
    globalTeamId: "GlobalTeamID",
    draftKingsName: "DraftKingsName",
    draftKingsPlayerId: "DraftKingsPlayerID",
    fanDuelName: "FanDuelName",
    fanDuelPlayerId: "FanDuelPlayerID",
    fantasyDraftName: "FantasyDraftName",
    fantasyDraftPlayerId: "FantasyDraftPlayerID",
    yahooName: "YahooName",
    yahooPlayerId: "YahooPlayerID",
    stadiumDetails: "StadiumDetails",
    averageDraftPosition2Qb: "AverageDraftPosition2QB",
    averageDraftPositionDynasty: "AverageDraftPositionDynasty",
  },
});
