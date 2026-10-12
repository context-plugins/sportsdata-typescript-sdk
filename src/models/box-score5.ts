import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game15Schema, type Game15 } from "./game15.js";
import { playerGame6Schema, type PlayerGame6 } from "./player-game6.js";
import { quarter1Schema, type Quarter1 } from "./quarter1.js";
import { teamGame6Schema, type TeamGame6 } from "./team-game6.js";

export type BoxScore5 = {
  /** Returns the game details for a given game's box score */
  game?: Game15;
  /** The details of the quarters (including overtime periods) for this game. */
  quarters?: Quarter1[];
  /** The team game stats associated with this box score */
  teamGames?: TeamGame6[];
  /** The player game stats associated with this box score */
  playerGames?: PlayerGame6[];
};

export const boxScore5Schema: Schema<BoxScore5> = s.object<BoxScore5>({
  game: s.optional(s.lazy(() => game15Schema)),
  quarters: s.optional(s.array(s.lazy(() => quarter1Schema))),
  teamGames: s.optional(s.array(s.lazy(() => teamGame6Schema))),
  playerGames: s.optional(s.array(s.lazy(() => playerGame6Schema))),
  _keysMap: {
    game: "Game",
    quarters: "Quarters",
    teamGames: "TeamGames",
    playerGames: "PlayerGames",
  },
});
