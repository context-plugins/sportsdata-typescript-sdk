import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  dfsSlatePlayerOwnershipProjectionSchema,
  type DfsSlatePlayerOwnershipProjection,
} from "./dfs-slate-player-ownership-projection.js";

export type DfsSlateWithOwnershipProjection = {
  /** Unique ID of a Slate (assigned by SportsDataIO). */
  slateId?: number;
  /**
   * The name of the operator who is running contests for this slate. Possible values: FanDuel,
   * DraftKings, Yahoo, FantasyDraft, etc.
   */
  operator?: string | null;
  /** Unique ID of a slate (assigned by the operator). */
  operatorSlateId?: number | null;
  /**
   * The name of the slate (assigned by the operator). Possible values: Main, Express, Arcade, Late
   * Night, etc.
   */
  operatorName?: string | null;
  /** The day that the slate begins; assigned by the operator (in US Eastern Time) */
  operatorDay?: string | null;
  /** The date/time (in EST/EDT) that the slate begins (assigned by the operator). */
  operatorStartTime?: string | null;
  /** The list of projected ownership */
  slateOwnershipProjections?: DfsSlatePlayerOwnershipProjection[];
};

export const dfsSlateWithOwnershipProjectionSchema: Schema<DfsSlateWithOwnershipProjection> =
  s.object<DfsSlateWithOwnershipProjection>({
    slateId: s.optional(s.int()),
    operator: s.optionalNullable(s.string()),
    operatorSlateId: s.optionalNullable(s.int()),
    operatorName: s.optionalNullable(s.string()),
    operatorDay: s.optionalNullable(s.string()),
    operatorStartTime: s.optionalNullable(s.string()),
    slateOwnershipProjections: s.optional(s.array(s.lazy(() => dfsSlatePlayerOwnershipProjectionSchema))),
    _keysMap: {
      slateId: "SlateID",
      operator: "Operator",
      operatorSlateId: "OperatorSlateID",
      operatorName: "OperatorName",
      operatorDay: "OperatorDay",
      operatorStartTime: "OperatorStartTime",
      slateOwnershipProjections: "SlateOwnershipProjections",
    },
  });
