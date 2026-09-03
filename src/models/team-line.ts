import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { playerLineSchema, type PlayerLine } from "./player-line.js";

export type TeamLine = {
  teamId?: number;
  key?: string | null;
  fullName?: string | null;
  evenStrengthLines?: PlayerLine[];
  powerPlayLines?: PlayerLine[];
  shortHandedLines?: PlayerLine[];
};

export const teamLineSchema: Schema<TeamLine> = s.object<TeamLine>({
  teamId: s.optional(s.number()),
  key: s.optionalNullable(s.string()),
  fullName: s.optionalNullable(s.string()),
  evenStrengthLines: s.optional(s.array(s.lazy(() => playerLineSchema))),
  powerPlayLines: s.optional(s.array(s.lazy(() => playerLineSchema))),
  shortHandedLines: s.optional(s.array(s.lazy(() => playerLineSchema))),
  _keysMap: {
    teamId: "TeamID",
    key: "Key",
    fullName: "FullName",
    evenStrengthLines: "EvenStrengthLines",
    powerPlayLines: "PowerPlayLines",
    shortHandedLines: "ShortHandedLines",
  },
});
