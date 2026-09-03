import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Injury = {
  injuryId?: number;
  seasonType?: number;
  season?: number;
  week?: number;
  playerId?: number;
  name?: string | null;
  position?: string | null;
  number?: number;
  team?: string | null;
  opponent?: string | null;
  bodyPart?: string | null;
  status?: string | null;
  practice?: string | null;
  practiceDescription?: string | null;
  updated?: string | null;
  declaredInactive?: boolean | null;
  teamId?: number | null;
  opponentId?: number | null;
};

export const injurySchema: Schema<Injury> = s.object<Injury>({
  injuryId: s.optional(s.number()),
  seasonType: s.optional(s.number()),
  season: s.optional(s.number()),
  week: s.optional(s.number()),
  playerId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  number: s.optional(s.number()),
  team: s.optionalNullable(s.string()),
  opponent: s.optionalNullable(s.string()),
  bodyPart: s.optionalNullable(s.string()),
  status: s.optionalNullable(s.string()),
  practice: s.optionalNullable(s.string()),
  practiceDescription: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  declaredInactive: s.optionalNullable(s.boolean()),
  teamId: s.optionalNullable(s.number()),
  opponentId: s.optionalNullable(s.number()),
  _keysMap: {
    injuryId: "InjuryID",
    seasonType: "SeasonType",
    season: "Season",
    week: "Week",
    playerId: "PlayerID",
    name: "Name",
    position: "Position",
    number: "Number",
    team: "Team",
    opponent: "Opponent",
    bodyPart: "BodyPart",
    status: "Status",
    practice: "Practice",
    practiceDescription: "PracticeDescription",
    updated: "Updated",
    declaredInactive: "DeclaredInactive",
    teamId: "TeamID",
    opponentId: "OpponentID",
  },
});
