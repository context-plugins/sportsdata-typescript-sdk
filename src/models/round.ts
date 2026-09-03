import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game17Schema, type Game17 } from "./game17.js";
import { playerSeason8Schema, type PlayerSeason8 } from "./player-season8.js";
import { standing4Schema, type Standing4 } from "./standing4.js";
import { teamSeason7Schema, type TeamSeason7 } from "./team-season7.js";

export type Round = {
  roundId?: number;
  seasonId?: number;
  season?: number;
  seasonType?: number;
  name?: string | null;
  type?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  currentWeek?: number | null;
  currentRound?: boolean;
  games?: Game17[];
  standings?: Standing4[];
  teamSeasons?: TeamSeason7[];
  playerSeasons?: PlayerSeason8[];
};

export const roundSchema: Schema<Round> = s.object<Round>({
  roundId: s.optional(s.number()),
  seasonId: s.optional(s.number()),
  season: s.optional(s.number()),
  seasonType: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  startDate: s.optionalNullable(s.string()),
  endDate: s.optionalNullable(s.string()),
  currentWeek: s.optionalNullable(s.number()),
  currentRound: s.optional(s.boolean()),
  games: s.optional(s.array(s.lazy(() => game17Schema))),
  standings: s.optional(s.array(s.lazy(() => standing4Schema))),
  teamSeasons: s.optional(s.array(s.lazy(() => teamSeason7Schema))),
  playerSeasons: s.optional(s.array(s.lazy(() => playerSeason8Schema))),
  _keysMap: {
    roundId: "RoundId",
    seasonId: "SeasonId",
    season: "Season",
    seasonType: "SeasonType",
    name: "Name",
    type: "Type",
    startDate: "StartDate",
    endDate: "EndDate",
    currentWeek: "CurrentWeek",
    currentRound: "CurrentRound",
    games: "Games",
    standings: "Standings",
    teamSeasons: "TeamSeasons",
    playerSeasons: "PlayerSeasons",
  },
});
