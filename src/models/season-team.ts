import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { team11Schema, type Team11 } from "./team11.js";

export type SeasonTeam = {
  /** Unique ID of this season/team combination */
  seasonTeamId?: number;
  /** The unique ID of the season this record is associated with */
  seasonId?: number;
  /** The unique ID of the team */
  teamId?: number;
  /** The name of the team associated with this record */
  teamName?: string | null;
  /** Whether this team is actively associated with this season (true/false) */
  active?: boolean;
  /** The gender of the players on the team. Possible Values: Male; Female */
  gender?: string | null;
  /** The type of season/team. Possible values: Club; National */
  type?: string | null;
  /** The details of the team for the given season/team association */
  team?: Team11;
};

export const seasonTeamSchema: Schema<SeasonTeam> = s.object<SeasonTeam>({
  seasonTeamId: s.optional(s.int()),
  seasonId: s.optional(s.int()),
  teamId: s.optional(s.int()),
  teamName: s.optionalNullable(s.string()),
  active: s.optional(s.boolean()),
  gender: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  team: s.optional(s.lazy(() => team11Schema)),
  _keysMap: {
    seasonTeamId: "SeasonTeamId",
    seasonId: "SeasonId",
    teamId: "TeamId",
    teamName: "TeamName",
    active: "Active",
    gender: "Gender",
    type: "Type",
    team: "Team",
  },
});
