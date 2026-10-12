import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game4Schema, type Game4 } from "./game4.js";
import { playerGame1Schema, type PlayerGame1 } from "./player-game1.js";
import { quarter1Schema, type Quarter1 } from "./quarter1.js";
import { teamGame1Schema, type TeamGame1 } from "./team-game1.js";

export type BoxScore = {
  /** The details of the game associated with this box score */
  game?: Game4;
  /** The details of the quarters associated with this box score */
  quarters?: Quarter1[];
  /** The team game stats associated with this box score */
  teamGames?: TeamGame1[];
  /** The player game stats associated with this box score */
  playerGames?: PlayerGame1[];
};

export const boxScoreSchema: Schema<BoxScore> = s.object<BoxScore>({
  game: s.optional(s.lazy(() => game4Schema)),
  quarters: s.optional(s.array(s.lazy(() => quarter1Schema))),
  teamGames: s.optional(s.array(s.lazy(() => teamGame1Schema))),
  playerGames: s.optional(s.array(s.lazy(() => playerGame1Schema))),
  _keysMap: {
    game: "Game",
    quarters: "Quarters",
    teamGames: "TeamGames",
    playerGames: "PlayerGames",
  },
});
