import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bettingOutcome4Schema, type BettingOutcome4 } from "./betting-outcome4.js";
import { consensusOutcome3Schema, type ConsensusOutcome3 } from "./consensus-outcome3.js";
import { sportsbookSchema, type Sportsbook } from "./sportsbook.js";

export type BettingMarket4 = {
  /** The unique ID associated with the betting market */
  bettingMarketId?: number;
  /** The unique ID associated with the betting event */
  bettingEventId?: number;
  /** ID that distinguishes the different types of Market Types */
  bettingMarketTypeId?: number;
  /** The name of the Market Type (e.g. Fighter Prop, Fight Prop, etc.) */
  bettingMarketType?: string | null;
  /** The ID associated with the name of the bet type within a market */
  bettingBetTypeId?: number;
  /** The name of the bet type within a market */
  bettingBetType?: string | null;
  /** The BettingPeriodTypeID of this type of market which we can result */
  bettingPeriodTypeId?: number;
  /** The BettingPeriodType of this market (e.g. Full Fight; 1st Round, etc.) */
  bettingPeriodType?: string | null;
  /** The name of the betting market */
  name?: string | null;
  /** The unique ID of the fighter tied to this market (where applicable) */
  fighterId?: number | null;
  /** The full name of the fighter tied to this market (where applicable) */
  fighterName?: string | null;
  /** The timestamp of when this market was created */
  created?: string | null;
  /** The updated timestamp of this market (in US Eastern Time) */
  updated?: string | null;
  /** The sportsbooks which have had odds in this market */
  availableSportsbooks?: Sportsbook[];
  /**
   * A field that returns "True" if there are any available bets to make within the market in
   * question. If there are no bets available to make, the field returns "False"
   */
  anyBetsAvailable?: boolean;
  /** The list of betting outcomes from each sportsbook in the market */
  bettingOutcomes?: BettingOutcome4[];
  /** The single set of consensus outcomes of this market */
  consensusOutcomes?: ConsensusOutcome3[];
};

export const bettingMarket4Schema: Schema<BettingMarket4> = s.object<BettingMarket4>({
  bettingMarketId: s.optional(s.int()),
  bettingEventId: s.optional(s.int()),
  bettingMarketTypeId: s.optional(s.int()),
  bettingMarketType: s.optionalNullable(s.string()),
  bettingBetTypeId: s.optional(s.int()),
  bettingBetType: s.optionalNullable(s.string()),
  bettingPeriodTypeId: s.optional(s.int()),
  bettingPeriodType: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  fighterId: s.optionalNullable(s.int()),
  fighterName: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  updated: s.optionalNullable(s.string()),
  availableSportsbooks: s.optional(s.array(s.lazy(() => sportsbookSchema))),
  anyBetsAvailable: s.optional(s.boolean()),
  bettingOutcomes: s.optional(s.array(s.lazy(() => bettingOutcome4Schema))),
  consensusOutcomes: s.optional(s.array(s.lazy(() => consensusOutcome3Schema))),
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
    fighterId: "FighterId",
    fighterName: "FighterName",
    created: "Created",
    updated: "Updated",
    availableSportsbooks: "AvailableSportsbooks",
    anyBetsAvailable: "AnyBetsAvailable",
    bettingOutcomes: "BettingOutcomes",
    consensusOutcomes: "ConsensusOutcomes",
  },
});
