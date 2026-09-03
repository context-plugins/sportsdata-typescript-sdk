import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { team11Schema, type Team11 } from "./team11.js";

export type SeasonTeam = {
  seasonTeamId?: number;
  seasonId?: number;
  teamId?: number;
  teamName?: string | null;
  active?: boolean;
  gender?: string | null;
  type?: string | null;
  team?: Team11;
};

export const seasonTeamSchema: Schema<SeasonTeam> = s.object<SeasonTeam>({
  seasonTeamId: s.optional(s.number()),
  seasonId: s.optional(s.number()),
  teamId: s.optional(s.number()),
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
