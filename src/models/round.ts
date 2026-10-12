import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game17Schema, type Game17 } from "./game17.js";
import { playerSeason8Schema, type PlayerSeason8 } from "./player-season8.js";
import { standing4Schema, type Standing4 } from "./standing4.js";
import { teamSeason7Schema, type TeamSeason7 } from "./team-season7.js";

export type Round = {
  /** The unique ID of the round */
  roundId?: number;
  /** The unique ID of the season this round is associated with */
  seasonId?: number;
  /** The soccer regular season for which these totals apply */
  season?: number;
  /**
   * The type of season that this record corresponds to (1=Regular Season, 2=Preseason,
   * 3=Postseason, 4=Offseason, 5=AllStar).
   */
  seasonType?: number;
  /** The display name of the round (examples: Regular Season, Semi-finals, Final, etc) */
  name?: string | null;
  /** The type of this round. Possible values: Cup; Table */
  type?: string | null;
  /** The start date of the round */
  startDate?: string | null;
  /** The end date of the round */
  endDate?: string | null;
  /** The current week that this round is in */
  currentWeek?: number | null;
  /** Indicates whether or not this round is the current round of the competition/season */
  currentRound?: boolean;
  /** The games and their details that are apart of this round */
  games?: Game17[];
  /** The standings details associated with this round of the competition */
  standings?: Standing4[];
  /** The team stat records associated with this round */
  teamSeasons?: TeamSeason7[];
  /** Player Season stat records associated with this round */
  playerSeasons?: PlayerSeason8[];
};

export const roundSchema: Schema<Round> = s.object<Round>({
  roundId: s.optional(s.int()),
  seasonId: s.optional(s.int()),
  season: s.optional(s.int()),
  seasonType: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  startDate: s.optionalNullable(s.string()),
  endDate: s.optionalNullable(s.string()),
  currentWeek: s.optionalNullable(s.int()),
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
