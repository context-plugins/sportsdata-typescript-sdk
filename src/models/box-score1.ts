import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game41Schema, type Game41 } from "./game41.js";
import { inningSchema, type Inning } from "./inning.js";
import { playerGame2Schema, type PlayerGame2 } from "./player-game2.js";
import { teamGame2Schema, type TeamGame2 } from "./team-game2.js";

export type BoxScore1 = {
  game?: Game41;
  innings?: Inning[];
  teamGames?: TeamGame2[];
  playerGames?: PlayerGame2[];
};

export const boxScore1Schema: Schema<BoxScore1> = s.object<BoxScore1>({
  game: s.optional(s.lazy(() => game41Schema)),
  innings: s.optional(s.array(s.lazy(() => inningSchema))),
  teamGames: s.optional(s.array(s.lazy(() => teamGame2Schema))),
  playerGames: s.optional(s.array(s.lazy(() => playerGame2Schema))),
  _keysMap: {
    game: "Game",
    innings: "Innings",
    teamGames: "TeamGames",
    playerGames: "PlayerGames",
  },
});
