import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game34Schema, type Game34 } from "./game34.js";
import { period2Schema, type Period2 } from "./period2.js";
import { playerGame5Schema, type PlayerGame5 } from "./player-game5.js";
import { teamGame5Schema, type TeamGame5 } from "./team-game5.js";

export type BoxScore4 = {
  /** Returns the game details for a given game's box score */
  game?: Game34;
  /**
   * The details of the periods (halves & overtime) for this game. Note: the scores are for that
   * half/period only, not total score of game at that point.
   */
  periods?: Period2[];
  /** The player game stats of this box score */
  playerGames?: PlayerGame5[];
  /** The team game stats of this box score */
  teamGames?: TeamGame5[];
};

export const boxScore4Schema: Schema<BoxScore4> = s.object<BoxScore4>({
  game: s.optional(s.lazy(() => game34Schema)),
  periods: s.optional(s.array(s.lazy(() => period2Schema))),
  playerGames: s.optional(s.array(s.lazy(() => playerGame5Schema))),
  teamGames: s.optional(s.array(s.lazy(() => teamGame5Schema))),
  _keysMap: {
    game: "Game",
    periods: "Periods",
    playerGames: "PlayerGames",
    teamGames: "TeamGames",
  },
});
