import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { game1Schema, type Game1 } from "./game1.js";

export type DfsSlateGame1 = {
  /** Unique ID of a SlateGame (assigned by SportsDataIO). */
  slateGameId?: number;
  /** The SlateID that this SlateGame refers to. */
  slateId?: number;
  /**
   * The unique ID of the game associated with this SlateGame. This points to data in the
   * schedule/game/box score feeds.
   */
  gameId?: number | null;
  /** The details of the Game that this SlateGame refers to. */
  game?: Game1;
  /** Unique ID of a SlateGame (assigned by the operator). */
  operatorGameId?: number | null;
  /** Indicates whether this game was removed/deleted by the operator. */
  removedByOperator?: boolean | null;
};

export const dfsSlateGame1Schema: Schema<DfsSlateGame1> = s.object<DfsSlateGame1>({
  slateGameId: s.optional(s.int()),
  slateId: s.optional(s.int()),
  gameId: s.optionalNullable(s.int()),
  game: s.optional(s.lazy(() => game1Schema)),
  operatorGameId: s.optionalNullable(s.int()),
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
