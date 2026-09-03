import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game42Schema, type Game42 } from "./game42.js";
import { periodSchema, type Period } from "./period.js";
import { play3Schema, type Play3 } from "./play3.js";
import { playerGame3Schema, type PlayerGame3 } from "./player-game3.js";
import { teamGame3Schema, type TeamGame3 } from "./team-game3.js";

export type BoxScore2 = {
  game?: Game42;
  periods?: Period[];
  teamGames?: TeamGame3[];
  playerGames?: PlayerGame3[];
  shootoutPlays?: Play3[];
};

export const boxScore2Schema: Schema<BoxScore2> = s.object<BoxScore2>({
  game: s.optional(s.lazy(() => game42Schema)),
  periods: s.optional(s.array(s.lazy(() => periodSchema))),
  teamGames: s.optional(s.array(s.lazy(() => teamGame3Schema))),
  playerGames: s.optional(s.array(s.lazy(() => playerGame3Schema))),
  shootoutPlays: s.optional(s.array(s.lazy(() => play3Schema))),
  _keysMap: {
    game: "Game",
    periods: "Periods",
    teamGames: "TeamGames",
    playerGames: "PlayerGames",
    shootoutPlays: "ShootoutPlays",
  },
});
