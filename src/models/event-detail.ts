import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fightSchema, type Fight } from "./fight.js";

export type EventDetail = {
  /** The details of the fights */
  fights?: Fight[];
  /** The unique ID of this event */
  eventId?: number;
  /** The unique ID of this event's MMA league */
  leagueId?: number;
  /** The full name of the event */
  name?: string | null;
  /** The short name of the event */
  shortName?: string | null;
  /** The season the event took place */
  season?: number | null;
  /** The date of the event */
  day?: string | null;
  /** The start time and day of the event */
  dateTime?: string | null;
  /**
   * Indicates the event's status. Possible values include: Scheduled, In Progress, Final,
   * Suspended, Postponed, Canceled
   */
  status?: string | null;
  /** Indicates if the event is active */
  active?: boolean | null;
};

export const eventDetailSchema: Schema<EventDetail> = s.object<EventDetail>({
  fights: s.optional(s.array(s.lazy(() => fightSchema))),
  eventId: s.optional(s.int()),
  leagueId: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  shortName: s.optionalNullable(s.string()),
  season: s.optionalNullable(s.int()),
  day: s.optionalNullable(s.string()),
  dateTime: s.optionalNullable(s.string()),
  status: s.optionalNullable(s.string()),
  active: s.optionalNullable(s.boolean()),
  _keysMap: {
    fights: "Fights",
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
