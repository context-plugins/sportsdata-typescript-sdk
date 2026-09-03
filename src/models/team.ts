import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stadium4Schema, type Stadium4 } from "./stadium4.js";

export type Team = {
  key?: string | null;
  teamId?: number;
  playerId?: number;
  city?: string | null;
  name?: string | null;
  conference?: string | null;
  division?: string | null;
  fullName?: string | null;
  stadiumId?: number | null;
  byeWeek?: number | null;
  averageDraftPosition?: number | null;
  averageDraftPositionPpr?: number | null;
  headCoach?: string | null;
  offensiveCoordinator?: string | null;
  defensiveCoordinator?: string | null;
  specialTeamsCoach?: string | null;
  offensiveScheme?: string | null;
  defensiveScheme?: string | null;
  upcomingSalary?: number | null;
  upcomingOpponent?: string | null;
  upcomingOpponentRank?: number | null;
  upcomingOpponentPositionRank?: number | null;
  upcomingFanDuelSalary?: number | null;
  upcomingDraftKingsSalary?: number | null;
  upcomingYahooSalary?: number | null;
  primaryColor?: string | null;
  secondaryColor?: string | null;
  tertiaryColor?: string | null;
  quaternaryColor?: string | null;
  wikipediaLogoUrl?: string | null;
  wikipediaWordMarkUrl?: string | null;
  globalTeamId?: number | null;
  draftKingsName?: string | null;
  draftKingsPlayerId?: number | null;
  fanDuelName?: string | null;
  fanDuelPlayerId?: number | null;
  fantasyDraftName?: string | null;
  fantasyDraftPlayerId?: number | null;
  yahooName?: string | null;
  yahooPlayerId?: number | null;
  stadiumDetails?: Stadium4;
  averageDraftPosition2Qb?: number | null;
  averageDraftPositionDynasty?: number | null;
};

export const teamSchema: Schema<Team> = s.object<Team>({
  key: s.optionalNullable(s.string()),
  teamId: s.optional(s.number()),
  playerId: s.optional(s.number()),
  city: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  conference: s.optionalNullable(s.string()),
  division: s.optionalNullable(s.string()),
  fullName: s.optionalNullable(s.string()),
  stadiumId: s.optionalNullable(s.number()),
  byeWeek: s.optionalNullable(s.number()),
  averageDraftPosition: s.optionalNullable(s.number()),
  averageDraftPositionPpr: s.optionalNullable(s.number()),
  headCoach: s.optionalNullable(s.string()),
  offensiveCoordinator: s.optionalNullable(s.string()),
  defensiveCoordinator: s.optionalNullable(s.string()),
  specialTeamsCoach: s.optionalNullable(s.string()),
  offensiveScheme: s.optionalNullable(s.string()),
  defensiveScheme: s.optionalNullable(s.string()),
  upcomingSalary: s.optionalNullable(s.number()),
  upcomingOpponent: s.optionalNullable(s.string()),
  upcomingOpponentRank: s.optionalNullable(s.number()),
  upcomingOpponentPositionRank: s.optionalNullable(s.number()),
  upcomingFanDuelSalary: s.optionalNullable(s.number()),
  upcomingDraftKingsSalary: s.optionalNullable(s.number()),
  upcomingYahooSalary: s.optionalNullable(s.number()),
  primaryColor: s.optionalNullable(s.string()),
  secondaryColor: s.optionalNullable(s.string()),
  tertiaryColor: s.optionalNullable(s.string()),
  quaternaryColor: s.optionalNullable(s.string()),
  wikipediaLogoUrl: s.optionalNullable(s.string()),
  wikipediaWordMarkUrl: s.optionalNullable(s.string()),
  globalTeamId: s.optionalNullable(s.number()),
  draftKingsName: s.optionalNullable(s.string()),
  draftKingsPlayerId: s.optionalNullable(s.number()),
  fanDuelName: s.optionalNullable(s.string()),
  fanDuelPlayerId: s.optionalNullable(s.number()),
  fantasyDraftName: s.optionalNullable(s.string()),
  fantasyDraftPlayerId: s.optionalNullable(s.number()),
  yahooName: s.optionalNullable(s.string()),
  yahooPlayerId: s.optionalNullable(s.number()),
  stadiumDetails: s.optional(s.lazy(() => stadium4Schema)),
  averageDraftPosition2Qb: s.optionalNullable(s.number()),
  averageDraftPositionDynasty: s.optionalNullable(s.number()),
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
