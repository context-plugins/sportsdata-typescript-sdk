import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerLine = {
  /** The line the player is on (e.g. 1, 2, 3, or 4) */
  lineNumber?: number;
  /** The player's primary position. Possible values: C; RW; LW; D; or G */
  position?: string | null;
  /**
   * The player's unique PlayerID as assigned by SportsDataIO. Note: this ID will stay with the
   * player throughout their entire career
   */
  playerId?: number | null;
  /** The full name of the player on the line */
  name?: string | null;
  /** The hand the player shoots the puck with (right or left) */
  shoots?: string | null;
  /**
   * The type of line the player is on (e.g. EvenStrength (EV); PowerPlay (PP); ShortHanded (SH))
   */
  lineType?: string | null;
};

export const playerLineSchema: Schema<PlayerLine> = s.object<PlayerLine>({
  lineNumber: s.optional(s.int()),
  position: s.optionalNullable(s.string()),
  playerId: s.optionalNullable(s.int()),
  name: s.optionalNullable(s.string()),
  shoots: s.optionalNullable(s.string()),
  lineType: s.optionalNullable(s.string()),
  _keysMap: {
    lineNumber: "LineNumber",
    position: "Position",
    playerId: "PlayerID",
    name: "Name",
    shoots: "Shoots",
    lineType: "LineType",
  },
});
