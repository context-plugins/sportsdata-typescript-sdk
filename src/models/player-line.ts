import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlayerLine = {
  lineNumber?: number;
  position?: string | null;
  playerId?: number | null;
  name?: string | null;
  shoots?: string | null;
  lineType?: string | null;
};

export const playerLineSchema: Schema<PlayerLine> = s.object<PlayerLine>({
  lineNumber: s.optional(s.number()),
  position: s.optionalNullable(s.string()),
  playerId: s.optionalNullable(s.number()),
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
