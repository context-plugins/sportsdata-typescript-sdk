import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingOutcomeSchema, type BettingOutcome } from "./betting-outcome.js";
import { consensusOutcomeSchema, type ConsensusOutcome } from "./consensus-outcome.js";
import { sportsbookSchema, type Sportsbook } from "./sportsbook.js";

export type BettingMarket = {
  bettingMarketId?: number;
  bettingEventId?: number;
  bettingMarketTypeId?: number | null;
  bettingMarketType?: string | null;
  bettingBetTypeId?: number | null;
  bettingBetType?: string | null;
  bettingPeriodTypeId?: number | null;
  bettingPeriodType?: string | null;
  name?: string | null;
  teamId?: number | null;
  teamKey?: string | null;
  playerId?: number | null;
  playerName?: string | null;
  created?: string | null;
  updated?: string | null;
  availableSportsbooks?: Sportsbook[];
  anyBetsAvailable?: boolean | null;
  bettingOutcomes?: BettingOutcome[];
  consensusOutcomes?: ConsensusOutcome[];
  isArchived?: boolean;
  archiveLocation?: string | null;
};

export const bettingMarketSchema: Schema<BettingMarket> = s.object<BettingMarket>({
  bettingMarketId: s.optional(s.number()),
  bettingEventId: s.optional(s.number()),
  bettingMarketTypeId: s.optionalNullable(s.number()),
  bettingMarketType: s.optionalNullable(s.string()),
  bettingBetTypeId: s.optionalNullable(s.number()),
  bettingBetType: s.optionalNullable(s.string()),
  bettingPeriodTypeId: s.optionalNullable(s.number()),
  bettingPeriodType: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  teamId: s.optionalNullable(s.number()),
  teamKey: s.optionalNullable(s.string()),
  playerId: s.optionalNullable(s.number()),
  playerName: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  availableSportsbooks: s.optional(s.array(s.lazy(() => sportsbookSchema))),
  anyBetsAvailable: s.optionalNullable(s.boolean()),
  bettingOutcomes: s.optional(s.array(s.lazy(() => bettingOutcomeSchema))),
  consensusOutcomes: s.optional(s.array(s.lazy(() => consensusOutcomeSchema))),
  isArchived: s.optional(s.boolean()),
  archiveLocation: s.optionalNullable(s.string()),
  _keysMap: {
    bettingMarketId: "BettingMarketID",
    bettingEventId: "BettingEventID",
    bettingMarketTypeId: "BettingMarketTypeID",
    bettingMarketType: "BettingMarketType",
    bettingBetTypeId: "BettingBetTypeID",
    bettingBetType: "BettingBetType",
    bettingPeriodTypeId: "BettingPeriodTypeID",
    bettingPeriodType: "BettingPeriodType",
    name: "Name",
    teamId: "TeamID",
    teamKey: "TeamKey",
    playerId: "PlayerID",
    playerName: "PlayerName",
    created: "Created",
    updated: "Updated",
    availableSportsbooks: "AvailableSportsbooks",
    anyBetsAvailable: "AnyBetsAvailable",
    bettingOutcomes: "BettingOutcomes",
    consensusOutcomes: "ConsensusOutcomes",
    isArchived: "IsArchived",
    archiveLocation: "ArchiveLocation",
  },
});
