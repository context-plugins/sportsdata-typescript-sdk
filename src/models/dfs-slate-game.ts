import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { schedule1Schema, type Schedule1 } from "./schedule1.js";

export type DfsSlateGame = {
  slateGameId?: number;
  slateId?: number;
  gameId?: number | null;
  operatorGameId?: number | null;
  removedByOperator?: boolean | null;
  scoreId?: number | null;
  game?: Schedule1;
};

export const dfsSlateGameSchema: Schema<DfsSlateGame> = s.object<DfsSlateGame>({
  slateGameId: s.optional(s.number()),
  slateId: s.optional(s.number()),
  gameId: s.optionalNullable(s.number()),
  operatorGameId: s.optionalNullable(s.number()),
  removedByOperator: s.optionalNullable(s.boolean()),
  scoreId: s.optionalNullable(s.number()),
  game: s.optional(s.lazy(() => schedule1Schema)),
  _keysMap: {
    slateGameId: "SlateGameID",
    slateId: "SlateID",
    gameId: "GameID",
    operatorGameId: "OperatorGameID",
    removedByOperator: "RemovedByOperator",
    scoreId: "ScoreID",
    game: "Game",
  },
});
