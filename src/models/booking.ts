import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Booking = {
  /** The unique ID of the booking */
  bookingId?: number;
  /** The unique ID of the game tied to this booking */
  gameId?: number;
  /** The type of booking. Possible values: Yellow Card, Red Card, Yellow Red Card */
  type?: string | null;
  /** The unique ID of the team associated with this booking */
  teamId?: number;
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID stays with the player
   * their entire career
   */
  playerId?: number | null;
  /** The full name of the player who was booked */
  name?: string | null;
  /** The minute in the game in which the booking occurred */
  gameMinute?: number | null;
  /** The extra minute in the game in which the booking occurred */
  gameMinuteExtra?: number | null;
};

export const bookingSchema: Schema<Booking> = s.object<Booking>({
  bookingId: s.optional(s.int()),
  gameId: s.optional(s.int()),
  type: s.optionalNullable(s.string()),
  teamId: s.optional(s.int()),
  playerId: s.optionalNullable(s.int()),
  name: s.optionalNullable(s.string()),
  gameMinute: s.optionalNullable(s.int()),
  gameMinuteExtra: s.optionalNullable(s.int()),
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
