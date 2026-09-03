import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { lineup1Schema, type Lineup1 } from "./lineup1.js";
import { lineup2Schema, type Lineup2 } from "./lineup2.js";
import { lineup3Schema, type Lineup3 } from "./lineup3.js";

export type StartingLineups1 = {
  gameId?: number;
  season?: number;
  seasonType?: number;
  day?: string | null;
  dateTime?: string | null;
  status?: string | null;
  homeTeamId?: number | null;
  homeTeam?: string | null;
  awayTeamId?: number | null;
  awayTeam?: string | null;
  homeStartingPitcher?: Lineup3;
  homeBattingLineup?: Lineup1[];
  awayStartingPitcher?: Lineup2;
  awayBattingLineup?: Lineup1[];
  homeTeamOpener?: boolean | null;
  awayTeamOpener?: boolean | null;
};

export const startingLineups1Schema: Schema<StartingLineups1> = s.object<StartingLineups1>({
  gameId: s.optional(s.number()),
  season: s.optional(s.number()),
  seasonType: s.optional(s.number()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  status: s.optionalNullable(s.string()),
  homeTeamId: s.optionalNullable(s.number()),
  homeTeam: s.optionalNullable(s.string()),
  awayTeamId: s.optionalNullable(s.number()),
  awayTeam: s.optionalNullable(s.string()),
  homeStartingPitcher: s.optional(s.lazy(() => lineup3Schema)),
  homeBattingLineup: s.optional(s.array(s.lazy(() => lineup1Schema))),
  awayStartingPitcher: s.optional(s.lazy(() => lineup2Schema)),
  awayBattingLineup: s.optional(s.array(s.lazy(() => lineup1Schema))),
  homeTeamOpener: s.optionalNullable(s.boolean()),
  awayTeamOpener: s.optionalNullable(s.boolean()),
  _keysMap: {
    gameId: "GameID",
    season: "Season",
    seasonType: "SeasonType",
    day: "Day",
    dateTime: "DateTime",
    status: "Status",
    homeTeamId: "HomeTeamID",
    homeTeam: "HomeTeam",
    awayTeamId: "AwayTeamID",
    awayTeam: "AwayTeam",
    homeStartingPitcher: "HomeStartingPitcher",
    homeBattingLineup: "HomeBattingLineup",
    awayStartingPitcher: "AwayStartingPitcher",
    awayBattingLineup: "AwayBattingLineup",
    homeTeamOpener: "HomeTeamOpener",
    awayTeamOpener: "AwayTeamOpener",
  },
});
