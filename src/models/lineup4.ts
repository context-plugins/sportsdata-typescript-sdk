import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Lineup4 = {
  lineupId?: number;
  gameId?: number;
  type?: string | null;
  teamId?: number;
  playerId?: number;
  name?: string | null;
  position?: string | null;
  replacedPlayerId?: number | null;
  replacedPlayerName?: string | null;
  gameMinute?: number | null;
  gameMinuteExtra?: number | null;
  pitchPositionHorizontal?: number | null;
  pitchPositionVertical?: number | null;
};

export const lineup4Schema: Schema<Lineup4> = s.object<Lineup4>({
  lineupId: s.optional(s.number()),
  gameId: s.optional(s.number()),
  type: s.optionalNullable(s.string()),
  teamId: s.optional(s.number()),
  playerId: s.optional(s.number()),
  name: s.optionalNullable(s.string()),
  position: s.optionalNullable(s.string()),
  replacedPlayerId: s.optionalNullable(s.number()),
  replacedPlayerName: s.optionalNullable(s.string()),
  gameMinute: s.optionalNullable(s.number()),
  gameMinuteExtra: s.optionalNullable(s.number()),
  pitchPositionHorizontal: s.optionalNullable(s.number()),
  pitchPositionVertical: s.optionalNullable(s.number()),
  _keysMap: {
    lineupId: "LineupId",
    gameId: "GameId",
    type: "Type",
    teamId: "TeamId",
    playerId: "PlayerId",
    name: "Name",
    position: "Position",
    replacedPlayerId: "ReplacedPlayerId",
    replacedPlayerName: "ReplacedPlayerName",
    gameMinute: "GameMinute",
    gameMinuteExtra: "GameMinuteExtra",
    pitchPositionHorizontal: "PitchPositionHorizontal",
    pitchPositionVertical: "PitchPositionVertical",
  },
});
