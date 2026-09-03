import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { lineupSchema, type Lineup } from "./lineup.js";

export type StartingLineups = {
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
  homeLineup?: Lineup[];
  awayLineup?: Lineup[];
};

export const startingLineupsSchema: Schema<StartingLineups> = s.object<StartingLineups>({
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
  homeLineup: s.optional(s.array(s.lazy(() => lineupSchema))),
  awayLineup: s.optional(s.array(s.lazy(() => lineupSchema))),
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
    homeLineup: "HomeLineup",
    awayLineup: "AwayLineup",
  },
});
