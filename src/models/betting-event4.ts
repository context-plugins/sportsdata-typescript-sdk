import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingMarket2Schema, type BettingMarket2 } from "./betting-market2.js";

export type BettingEvent4 = {
  /** The unique ID associated with the betting event */
  bettingEventId?: number;
  /** The name of this betting event */
  name?: string | null;
  /** The PGA season of this betting event */
  season?: number | null;
  /** The ID associated with the type of betting event */
  bettingEventTypeId?: number;
  /**
   * Indicates the type of betting event. Note: golf does not have the concept of a future type
   * betting event
   */
  bettingEventType?: string | null;
  /** The last day for betting on this event */
  startDate?: string | null;
  /** The timestamp of when this betting event was created */
  created?: string | null;
  /** The last updated date of this betting event */
  updated?: string | null;
  /** The unique ID of the tournament tied to this event */
  tournamentId?: number | null;
  /** A list of the possible betting markets within a betting event */
  bettingMarkets?: BettingMarket2[];
};

export const bettingEvent4Schema: Schema<BettingEvent4> = s.object<BettingEvent4>({
  bettingEventId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  season: s.optionalNullable(s.int()),
  bettingEventTypeId: s.optional(s.int()),
  bettingEventType: s.optionalNullable(s.string()),
  startDate: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  tournamentId: s.optionalNullable(s.int()),
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
