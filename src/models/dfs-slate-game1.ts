import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game1Schema, type Game1 } from "./game1.js";

export type DfsSlateGame1 = {
  slateGameId?: number;
  slateId?: number;
  gameId?: number | null;
  game?: Game1;
  operatorGameId?: number | null;
  removedByOperator?: boolean | null;
};

export const dfsSlateGame1Schema: Schema<DfsSlateGame1> = s.object<DfsSlateGame1>({
  slateGameId: s.optional(s.number()),
  slateId: s.optional(s.number()),
  gameId: s.optionalNullable(s.number()),
  game: s.optional(s.lazy(() => game1Schema)),
  operatorGameId: s.optionalNullable(s.number()),
  removedByOperator: s.optionalNullable(s.boolean()),
  _keysMap: {
    slateGameId: "SlateGameID",
    slateId: "SlateID",
    gameId: "GameID",
    game: "Game",
    operatorGameId: "OperatorGameID",
    removedByOperator: "RemovedByOperator",
  },
});
