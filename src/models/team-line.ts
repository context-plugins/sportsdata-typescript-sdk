import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { playerLineSchema, type PlayerLine } from "./player-line.js";

export type TeamLine = {
  /** The unique ID of the team */
  teamId?: number;
  /** "The abbreviation [Key] of the team associated with this market (Ex. BOS, EDM, LAK)" */
  key?: string | null;
  /** The team's full name (ex. Minnesota Wild; New York Islanders) */
  fullName?: string | null;
  /** The even strength lines for this team */
  evenStrengthLines?: PlayerLine[];
  /** The power play lines for a given team */
  powerPlayLines?: PlayerLine[];
  /** The short-handed/penalty-kill lines for this team */
  shortHandedLines?: PlayerLine[];
};

export const teamLineSchema: Schema<TeamLine> = s.object<TeamLine>({
  teamId: s.optional(s.int()),
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
