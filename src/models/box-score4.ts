import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game34Schema, type Game34 } from "./game34.js";
import { period2Schema, type Period2 } from "./period2.js";
import { playerGame5Schema, type PlayerGame5 } from "./player-game5.js";
import { teamGame5Schema, type TeamGame5 } from "./team-game5.js";

export type BoxScore4 = {
  game?: Game34;
  periods?: Period2[];
  playerGames?: PlayerGame5[];
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
