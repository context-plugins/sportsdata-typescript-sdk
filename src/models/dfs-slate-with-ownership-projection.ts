import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  dfsSlatePlayerOwnershipProjectionSchema,
  type DfsSlatePlayerOwnershipProjection,
} from "./dfs-slate-player-ownership-projection.js";

export type DfsSlateWithOwnershipProjection = {
  slateId?: number;
  operator?: string | null;
  operatorSlateId?: number | null;
  operatorName?: string | null;
  operatorDay?: string | null;
  operatorStartTime?: string | null;
  slateOwnershipProjections?: DfsSlatePlayerOwnershipProjection[];
};

export const dfsSlateWithOwnershipProjectionSchema: Schema<DfsSlateWithOwnershipProjection> =
  s.object<DfsSlateWithOwnershipProjection>({
    slateId: s.optional(s.number()),
    operator: s.optionalNullable(s.string()),
    operatorSlateId: s.optionalNullable(s.number()),
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
