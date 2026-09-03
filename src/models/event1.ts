import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Event1 = {
  eventId?: number;
  leagueId?: number;
  name?: string | null;
  shortName?: string | null;
  season?: number | null;
  day?: string | null;
  dateTime?: string | null;
  status?: string | null;
  active?: boolean | null;
};

export const event1Schema: Schema<Event1> = s.object<Event1>({
  eventId: s.optional(s.number()),
  leagueId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  shortName: s.optionalNullable(s.string()),
  season: s.optionalNullable(s.number()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  status: s.optionalNullable(s.string()),
  active: s.optionalNullable(s.boolean()),
  _keysMap: {
    eventId: "EventId",
    leagueId: "LeagueId",
    name: "Name",
    shortName: "ShortName",
    season: "Season",
    day: "Day",
    dateTime: "DateTime",
    status: "Status",
    active: "Active",
  },
});
