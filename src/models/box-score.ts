import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game4Schema, type Game4 } from "./game4.js";
import { playerGame1Schema, type PlayerGame1 } from "./player-game1.js";
import { quarter1Schema, type Quarter1 } from "./quarter1.js";
import { teamGame1Schema, type TeamGame1 } from "./team-game1.js";

export type BoxScore = {
  game?: Game4;
  quarters?: Quarter1[];
  teamGames?: TeamGame1[];
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
