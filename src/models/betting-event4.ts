import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingMarket2Schema, type BettingMarket2 } from "./betting-market2.js";

export type BettingEvent4 = {
  bettingEventId?: number;
  name?: string | null;
  season?: number | null;
  bettingEventTypeId?: number;
  bettingEventType?: string | null;
  startDate?: string | null;
  created?: string | null;
  updated?: string | null;
  tournamentId?: number | null;
  bettingMarkets?: BettingMarket2[];
};

export const bettingEvent4Schema: Schema<BettingEvent4> = s.object<BettingEvent4>({
  bettingEventId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  season: s.optionalNullable(s.number()),
  bettingEventTypeId: s.optional(s.number()),
  bettingEventType: s.optionalNullable(s.string()),
  startDate: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  tournamentId: s.optionalNullable(s.number()),
  bettingMarkets: s.optional(s.array(s.lazy(() => bettingMarket2Schema))),
  _keysMap: {
    bettingEventId: "BettingEventID",
    name: "Name",
    season: "Season",
    bettingEventTypeId: "BettingEventTypeID",
    bettingEventType: "BettingEventType",
    startDate: "StartDate",
    created: "Created",
    updated: "Updated",
    tournamentId: "TournamentId",
    bettingMarkets: "BettingMarkets",
  },
});
