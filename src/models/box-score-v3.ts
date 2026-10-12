import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fantasyDefenseGameSchema, type FantasyDefenseGame } from "./fantasy-defense-game.js";
import { playerGameSchema, type PlayerGame } from "./player-game.js";
import { quarterSchema, type Quarter } from "./quarter.js";
import { score3Schema, type Score3 } from "./score3.js";
import { scoringDetailSchema, type ScoringDetail } from "./scoring-detail.js";
import { scoringPlaySchema, type ScoringPlay } from "./scoring-play.js";
import { teamGameSchema, type TeamGame } from "./team-game.js";

export type BoxScoreV3 = {
  /** The Score object related to this game */
  score?: Score3;
  /** The Quarters objects related to this game */
  quarters?: Quarter[];
  /** The TeamGame objects related to this game */
  teamGames?: TeamGame[];
  /** The PlayerGame objects related to this game */
  playerGames?: PlayerGame[];
  /** The FantasyDefenseGame objects related to this game */
  fantasyDefenseGames?: FantasyDefenseGame[];
  /** The ScoringPlay objects related to this game */
  scoringPlays?: ScoringPlay[];
  /** The ScoringDetail objects related to this game */
  scoringDetails?: ScoringDetail[];
};

export const boxScoreV3Schema: Schema<BoxScoreV3> = s.object<BoxScoreV3>({
  score: s.optional(s.lazy(() => score3Schema)),
  quarters: s.optional(s.array(s.lazy(() => quarterSchema))),
  teamGames: s.optional(s.array(s.lazy(() => teamGameSchema))),
  playerGames: s.optional(s.array(s.lazy(() => playerGameSchema))),
  fantasyDefenseGames: s.optional(s.array(s.lazy(() => fantasyDefenseGameSchema))),
  scoringPlays: s.optional(s.array(s.lazy(() => scoringPlaySchema))),
  scoringDetails: s.optional(s.array(s.lazy(() => scoringDetailSchema))),
  _keysMap: {
    score: "Score",
    quarters: "Quarters",
    teamGames: "TeamGames",
    playerGames: "PlayerGames",
    fantasyDefenseGames: "FantasyDefenseGames",
    scoringPlays: "ScoringPlays",
    scoringDetails: "ScoringDetails",
  },
});
