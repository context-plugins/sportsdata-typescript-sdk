import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game15Schema, type Game15 } from "./game15.js";
import { playerGame6Schema, type PlayerGame6 } from "./player-game6.js";
import { quarter1Schema, type Quarter1 } from "./quarter1.js";
import { teamGame6Schema, type TeamGame6 } from "./team-game6.js";

export type BoxScore5 = {
  game?: Game15;
  quarters?: Quarter1[];
  teamGames?: TeamGame6[];
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
