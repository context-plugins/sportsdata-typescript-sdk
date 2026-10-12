import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { schedule1Schema, type Schedule1 } from "./schedule1.js";

export type DfsSlateGame = {
  /** Unique ID of a SlateGame (assigned by SportsDataIO). */
  slateGameId?: number;
  /** Unique ID of a Slate (assigned by SportsDataIO). */
  slateId?: number;
  /** The unique ID of this game tied to this SlateGame */
  gameId?: number | null;
  /** Unique ID of a SlateGame (assigned by the operator) */
  operatorGameId?: number | null;
  /** Indicates whether this game was removed/deleted by the operator. */
  removedByOperator?: boolean | null;
  /** Unique ID of the Score/Game */
  scoreId?: number | null;
  /** The details of the Score/Game that this SlateGame refers to */
  game?: Schedule1;
};

export const dfsSlateGameSchema: Schema<DfsSlateGame> = s.object<DfsSlateGame>({
  slateGameId: s.optional(s.int()),
  slateId: s.optional(s.int()),
  gameId: s.optionalNullable(s.int()),
  operatorGameId: s.optionalNullable(s.int()),
  removedByOperator: s.optionalNullable(s.boolean()),
  scoreId: s.optionalNullable(s.int()),
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
