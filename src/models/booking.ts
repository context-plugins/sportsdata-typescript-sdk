import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Booking = {
  bookingId?: number;
  gameId?: number;
  type?: string | null;
  teamId?: number;
  playerId?: number | null;
  name?: string | null;
  gameMinute?: number | null;
  gameMinuteExtra?: number | null;
};

export const bookingSchema: Schema<Booking> = s.object<Booking>({
  bookingId: s.optional(s.number()),
  gameId: s.optional(s.number()),
  type: s.optionalNullable(s.string()),
  teamId: s.optional(s.number()),
  playerId: s.optionalNullable(s.number()),
  name: s.optionalNullable(s.string()),
  gameMinute: s.optionalNullable(s.number()),
  gameMinuteExtra: s.optionalNullable(s.number()),
  _keysMap: {
    bookingId: "BookingId",
    gameId: "GameId",
    type: "Type",
    teamId: "TeamId",
    playerId: "PlayerId",
    name: "Name",
    gameMinute: "GameMinute",
    gameMinuteExtra: "GameMinuteExtra",
  },
});
