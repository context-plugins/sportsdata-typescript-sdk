import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { goaltender1Schema, type Goaltender1 } from "./goaltender1.js";
import { goaltender3Schema, type Goaltender3 } from "./goaltender3.js";

export type StartingGoaltenders = {
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
  homeGoaltender?: Goaltender3;
  awayGoaltender?: Goaltender1;
};

export const startingGoaltendersSchema: Schema<StartingGoaltenders> = s.object<StartingGoaltenders>({
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
  homeGoaltender: s.optional(s.lazy(() => goaltender3Schema)),
  awayGoaltender: s.optional(s.lazy(() => goaltender1Schema)),
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
    homeGoaltender: "HomeGoaltender",
    awayGoaltender: "AwayGoaltender",
  },
});
