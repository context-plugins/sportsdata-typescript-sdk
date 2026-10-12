import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game33Schema, type Game33 } from "./game33.js";
import { period1Schema, type Period1 } from "./period1.js";
import { playerGame4Schema, type PlayerGame4 } from "./player-game4.js";
import { scoringPlay3Schema, type ScoringPlay3 } from "./scoring-play3.js";
import { teamGame4Schema, type TeamGame4 } from "./team-game4.js";

export type BoxScore3 = {
  /** The game details of this box score */
  game?: Game33;
  /** The details of the periods (quarters & overtime) for this box score */
  periods?: Period1[];
  /** The player game stats of this box score */
  playerGames?: PlayerGame4[];
  /** The team game stats of this box score */
  teamGames?: TeamGame4[];
  /** The plays in which either team scoring during the game */
  scoringPlays?: ScoringPlay3[];
};

export const boxScore3Schema: Schema<BoxScore3> = s.object<BoxScore3>({
  game: s.optional(s.lazy(() => game33Schema)),
  periods: s.optional(s.array(s.lazy(() => period1Schema))),
  playerGames: s.optional(s.array(s.lazy(() => playerGame4Schema))),
  teamGames: s.optional(s.array(s.lazy(() => teamGame4Schema))),
  scoringPlays: s.optional(s.array(s.lazy(() => scoringPlay3Schema))),
  _keysMap: {
    game: "Game",
    periods: "Periods",
    playerGames: "PlayerGames",
    teamGames: "TeamGames",
    scoringPlays: "ScoringPlays",
  },
});
