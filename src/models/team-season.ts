import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TeamSeason = {
  /**
   * The type of season that this team corresponds to (1=Regular Season; 2=Preseason; 3=Postseason;
   * 4=Offseason; 5=All-Star)
   */
  seasonType?: number;
  /** The NFL regular season for which these totals apply */
  season?: number;
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /** Total points scored by the team in the season */
  score?: number;
  /** Total points scored by opponent teams in the season */
  opponentScore?: number;
  /** The total points scored and allowed by the team in the season */
  totalScore?: number;
  /** Temperature at game start (Fahrenheit) */
  temperature?: number | null;
  /** The humidity percentage at the start of the game */
  humidity?: number | null;
  /** The wind speed at the start of the game (in MPH) */
  windSpeed?: number | null;
  /** The average total points line (over/under) for the team in the season */
  overUnder?: number | null;
  /**
   * The average point spread from the perspecive of the team for the season (negative numbers
   * indicate the HomeTeam is favored; positive numbers indicate the AwayTeam is favored)
   */
  pointSpread?: number | null;
  /** Points scored during Quarter 1 for the team in the season */
  scoreQuarter1?: number | null;
  /** Points scored during Quarter 2 for the team in the season */
  scoreQuarter2?: number | null;
  /** Points scored during Quarter 3 for the team in the season */
  scoreQuarter3?: number | null;
  /** Points scored during Quarter 4 for the team in the season */
  scoreQuarter4?: number | null;
  /** Points scored during overtime for the team in the season */
  scoreOvertime?: number;
  /** Total average time of possession by the team in the season */
  timeOfPossession?: string | null;
  /** Total first downs by the team in the season */
  firstDowns?: number | null;
  /** Total rushing first downs by the team in the season */
  firstDownsByRushing?: number | null;
  /** Total passing first downs team in the season */
  firstDownsByPassing?: number | null;
  /** Total first downs by opponent's penalty by the team in the season */
  firstDownsByPenalty?: number | null;
  /** Number of offensive plays run by the season in the game */
  offensivePlays?: number;
  /** Total offensive yards gained by the team in the season */
  offensiveYards?: number;
  /** Average yards gained per offensive play by the team in the season */
  offensiveYardsPerPlay?: number;
  /** Total touchdowns scored by the team in the season */
  touchdowns?: number | null;
  /** Total rushing attempts by the team in the season */
  rushingAttempts?: number | null;
  /** Total rushing yards by the team in the season */
  rushingYards?: number | null;
  /** Total rushing yards per attempt by the team in the season */
  rushingYardsPerAttempt?: number;
  /** Total rushing touchdowns by the team in the season */
  rushingTouchdowns?: number | null;
  /** Total passes thrown by the team in the season */
  passingAttempts?: number | null;
  /** Total passes completed by the team in the season */
  passingCompletions?: number | null;
  /** Total passing yards by the team in the season */
  passingYards?: number | null;
  /** Total passing touchdowns by the team in the season */
  passingTouchdowns?: number | null;
  /** Total interceptions thrown by the team in the season */
  passingInterceptions?: number | null;
  /** Total average passing yards per attempt by the team in the season */
  passingYardsPerAttempt?: number;
  /** Total average passing yards per completion by the team in the season */
  passingYardsPerCompletion?: number;
  /** Percentage of passes that were completed by the team in the season */
  completionPercentage?: number;
  /** The team's passer rating in the season */
  passerRating?: number | null;
  /** Total third down attempts by the team in the season */
  thirdDownAttempts?: number | null;
  /** Total third down conversions by the team in the season */
  thirdDownConversions?: number | null;
  /** Total percentage of third downs converted by the team in the season */
  thirdDownPercentage?: number | null;
  /** Total fourth down attempts by the team in the season */
  fourthDownAttempts?: number | null;
  /** Total fourth down conversions by the team in the season */
  fourthDownConversions?: number | null;
  /** Percentage of fourth downs converted by the team in the season */
  fourthDownPercentage?: number | null;
  /** Total red zone opportunities by the team in the season */
  redZoneAttempts?: number | null;
  /** Total red zone opportunities converted into touchdowns by the team in the season */
  redZoneConversions?: number | null;
  /** This field is deprecated */
  goalToGoAttempts?: number | null;
  /** This field is deprecated */
  goalToGoConversions?: number | null;
  /** Total punt and defensive return yards by the team in the season */
  returnYards?: number | null;
  /** Total penalties committed by the team in the season */
  penalties?: number | null;
  /** Total penalty yards enforced against the team */
  penaltyYards?: number | null;
  /** Total fumbles by the team in the season */
  fumbles?: number | null;
  /** Total fumbles lost by the team in the season */
  fumblesLost?: number | null;
  /** Total number of sacks allowed by the team in the season */
  timesSacked?: number | null;
  /** Total sack yards allowed by the team in the season */
  timesSackedYards?: number | null;
  /**
   * Total quarterback hits by the team in the season. Note: This is a defensive stat that includes
   * sacks
   */
  quarterbackHits?: number | null;
  /**
   * Total tackles for loss by the team in the season. Note: These are tackles behind the line of
   * scrimmage for loss of yards (including sacks)
   */
  tacklesForLoss?: number | null;
  /** Total defensive safeties scored by the team in the season */
  safeties?: number | null;
  /** Total number of punts by the team in the game */
  punts?: number | null;
  /** Total punt yards by the team in the season */
  puntYards?: number | null;
  /** The average number of yards per punt by the team in the season */
  puntAverage?: number;
  /** Total number of giveaways by the team in the season */
  giveaways?: number;
  /** Total takeaways by the team in the season */
  takeaways?: number;
  /** Total turnover differential (takeaways minus giveaways) by the team in the season */
  turnoverDifferential?: number;
  /** Points scored during Quarter 1 for the opponent teams in the season */
  opponentScoreQuarter1?: number | null;
  /** Points scored during Quarter 2 for the opponent teams in the season */
  opponentScoreQuarter2?: number | null;
  /** Points scored during Quarter 3 for the opponent teams in the season */
  opponentScoreQuarter3?: number | null;
  /** Points scored during Quarter 4 for the opponent teams in the season */
  opponentScoreQuarter4?: number | null;
  /** Points scored during overtime for the opponent teams in the season */
  opponentScoreOvertime?: number;
  /** Total average time of possession for the opponent teams in the season */
  opponentTimeOfPossession?: string | null;
  /** Total first downs converted the opponent teams in the season */
  opponentFirstDowns?: number | null;
  /** Total rushing first downs by the opponent teams in the season */
  opponentFirstDownsByRushing?: number | null;
  /** Total passing first downs converted the opponent teams in the season */
  opponentFirstDownsByPassing?: number | null;
  /** Total first downs by penalty for the opponent teams in the season */
  opponentFirstDownsByPenalty?: number | null;
  /** Total offensive plays by the opponent teams in the season */
  opponentOffensivePlays?: number;
  /** Total offensive yards gained by the opponent teams in the season */
  opponentOffensiveYards?: number;
  /** Average yards gained per offensive play by the opponent teams in the season */
  opponentOffensiveYardsPerPlay?: number;
  /** Total touchdowns scored by the opponent teams in the season */
  opponentTouchdowns?: number | null;
  /** Total rushing attempts by the opponent teams in the season */
  opponentRushingAttempts?: number | null;
  /** Total rushing yards by the opponent teams in the season */
  opponentRushingYards?: number | null;
  /** Average rushing yards gained per attempt by the opponent teams in the season */
  opponentRushingYardsPerAttempt?: number;
  /** Total rushing touchdowns by the opponent teams in the season */
  opponentRushingTouchdowns?: number | null;
  /** Total passes thrown by the opponent teams in the season */
  opponentPassingAttempts?: number | null;
  /** Total passing completions by the opponent teams in the season */
  opponentPassingCompletions?: number | null;
  /** Total passing yards by the opponent teams in the season */
  opponentPassingYards?: number | null;
  /** Total passing touchdowns by the opponent teams in the season */
  opponentPassingTouchdowns?: number | null;
  /** Total interception thrown by the opponent teams in the season */
  opponentPassingInterceptions?: number | null;
  /** Average passing yards gained per attempt by the opponent teams in the season */
  opponentPassingYardsPerAttempt?: number;
  /** Average passing yards gained per completion by the opponent teams in the season */
  opponentPassingYardsPerCompletion?: number;
  /** Total completion percentage of the opponent teams in the season */
  opponentCompletionPercentage?: number;
  /** Total passer rating by the opponent teams in the season */
  opponentPasserRating?: number | null;
  /** Total third down attempts by the opponent teams in the season */
  opponentThirdDownAttempts?: number | null;
  /** Total third down conversions by the opponent teams in the season */
  opponentThirdDownConversions?: number | null;
  /** Total third down percentage by the opponent teams in the season */
  opponentThirdDownPercentage?: number | null;
  /** Total fourth downs attempted by the opponent teams in the season */
  opponentFourthDownAttempts?: number | null;
  /** Total fourth downs converted by the opponent teams in the season */
  opponentFourthDownConversions?: number | null;
  /** Total fourth down conversion percentage by the opponent teams in the season */
  opponentFourthDownPercentage?: number | null;
  /** Total red zone opportunities by the opponents in the season */
  opponentRedZoneAttempts?: number | null;
  /** Total red zone opportunities converted to touchdowns by the opponents in the season */
  opponentRedZoneConversions?: number | null;
  /** This field is deprecated */
  opponentGoalToGoAttempts?: number | null;
  /** This field is deprecated */
  opponentGoalToGoConversions?: number | null;
  /** Total punt and defensive return yards by the opponent teams in the season */
  opponentReturnYards?: number | null;
  /** Total penalty yards enforced against the opponent teams in the season */
  opponentPenalties?: number | null;
  /** Total penalty yards enforced against the opponent teams in the season */
  opponentPenaltyYards?: number | null;
  /** Total offensive fumbles by the opponent teams in the season */
  opponentFumbles?: number | null;
  /** Total fumbles lost by the opponent teams in the season */
  opponentFumblesLost?: number | null;
  /** Total sacks allowed by the opponent teams in the season */
  opponentTimesSacked?: number | null;
  /** Total yards as a result of a sack allowed by the opponent teams in the season */
  opponentTimesSackedYards?: number | null;
  /** Total quarterback hits by the opponent teams in the season */
  opponentQuarterbackHits?: number | null;
  /** Total tackles for loss by the opponent teams in the season */
  opponentTacklesForLoss?: number | null;
  /** Total safeties recorded by the opponent teams in the season */
  opponentSafeties?: number | null;
  /** Total punts by the opponent teams in the season */
  opponentPunts?: number | null;
  /** Total punt yards by the opponent teams in the season */
  opponentPuntYards?: number | null;
  /** Average number of yards per punt by the opponent team in the season */
  opponentPuntAverage?: number;
  /** Total giveaways by the opponent teams in the season */
  opponentGiveaways?: number;
  /** Total takeaways by the opponent teams in the season */
  opponentTakeaways?: number;
  /** Total turnover differential by the opponent teams in the season (takeaways minus giveaways) */
  opponentTurnoverDifferential?: number;
  /**
   * Total percentage of red zone opportunities converted into touchdowns by the team in the season
   */
  redZonePercentage?: number | null;
  /** This field is deprecated */
  goalToGoPercentage?: number | null;
  /**
   * The quarterback hits differential of the team in the season. Note: Determined by hits on
   * opposing quarterback minus hits on own quarterback
   */
  quarterbackHitsDifferential?: number | null;
  /** Total tackles for loss differential by the team in the season */
  tacklesForLossDifferential?: number | null;
  /** Total sack differential of the team in the season */
  quarterbackSacksDifferential?: number;
  /**
   * Total percentage of plays defended that resulted in a tackle for loss by the team in the season
   */
  tacklesForLossPercentage?: number | null;
  /**
   * Total percentage of opposing quarterback dropbacks that resulted in a quarterback hit by the
   * team in the season
   */
  quarterbackHitsPercentage?: number | null;
  /** Total percentage of drop backs that resulted in a sack by the team in the season */
  timesSackedPercentage?: number;
  /** Percentage of opponent's red zone opportunities converted into touchdowns in the season */
  opponentRedZonePercentage?: number | null;
  /** This field is deprecated */
  opponentGoalToGoPercentage?: number | null;
  /** Total quarterback hits differential by the opponent teams in the season */
  opponentQuarterbackHitsDifferential?: number | null;
  /** Total tackles for loss differential by the opponent teams in the season */
  opponentTacklesForLossDifferential?: number | null;
  /** Total quarterback sacks differential by the opponent teams in the season */
  opponentQuarterbackSacksDifferential?: number | null;
  /** Total percentage of tackles for loss by the opponent teams in the season */
  opponentTacklesForLossPercentage?: number | null;
  /**
   * Percentage of own team's quarterback drop backs that resulted in our quarterback getting hit
   */
  opponentQuarterbackHitsPercentage?: number | null;
  /**
   * Total percentage of dropbacks that resulted in a sack allowed by the opponent teams in the
   * season
   */
  opponentTimesSackedPercentage?: number;
  /** Total number of kickoffs by the team in the season */
  kickoffs?: number | null;
  /** Total kickoffs that went into the end zone by the team in the season */
  kickoffsInEndZone?: number | null;
  /** Total kickoffs that resulted in touchbacks by the team in the season */
  kickoffTouchbacks?: number | null;
  /** Total punts by the team that were blocked in the season */
  puntsHadBlocked?: number | null;
  /** The average net yards per punt by the team in the season */
  puntNetAverage?: number | null;
  /** Total extra point kick attempts by the team in the season */
  extraPointKickingAttempts?: number | null;
  /** Total extra point kicks made by the team in the season */
  extraPointKickingConversions?: number | null;
  /** Total extra point kick attempts by the team that were blocked in the season */
  extraPointsHadBlocked?: number | null;
  /** Total two point conversion passing attempts by the team in the season */
  extraPointPassingAttempts?: number | null;
  /** Total two point conversion passing conversions by the team in the season */
  extraPointPassingConversions?: number | null;
  /** Total two point conversion rushing attempts by the team in the season */
  extraPointRushingAttempts?: number | null;
  /** Total two point conversion rushing conversions in the season */
  extraPointRushingConversions?: number | null;
  /** Total field goal attempts by the team in the season */
  fieldGoalAttempts?: number | null;
  /** Total field goals made by the team in season */
  fieldGoalsMade?: number | null;
  /** Total field goals by the team that were blocked in the season */
  fieldGoalsHadBlocked?: number | null;
  /** Total punt returns by the team in the season */
  puntReturns?: number | null;
  /** Total punt return yards by the team in the season */
  puntReturnYards?: number | null;
  /** Total kickoff returns by the team in the season */
  kickReturns?: number | null;
  /** Total kickoff return yards by the team in the season */
  kickReturnYards?: number | null;
  /** Total defensive interception returns by the team in the season */
  interceptionReturns?: number | null;
  /** Total defensive interception return yards by the team in the season */
  interceptionReturnYards?: number | null;
  /** Total kickoffs by the opponent teams in the season */
  opponentKickoffs?: number | null;
  /** Total kickoffs that went into the end zone by the opponent teams in the season */
  opponentKickoffsInEndZone?: number | null;
  /** Total kickoffs that resulted in touchbacks by the opponent teams in the season */
  opponentKickoffTouchbacks?: number | null;
  /** Total punt yard that were blocked for the opponent teams in the season */
  opponentPuntsHadBlocked?: number | null;
  /** Average net punt yards by the opponent team in the season */
  opponentPuntNetAverage?: number | null;
  /** Total extra point kick attempts by the opponent teams in the season */
  opponentExtraPointKickingAttempts?: number | null;
  /** Total extra point kicks made by the opponent teams in the season */
  opponentExtraPointKickingConversions?: number | null;
  /** Total extra point kick attempts that were blocked against the opponent teams in the season */
  opponentExtraPointsHadBlocked?: number | null;
  /** Total two point conversion passing attempts by the opponent teams in the season */
  opponentExtraPointPassingAttempts?: number | null;
  /** Total two point conversion passing conversions by the opponent teams in the season */
  opponentExtraPointPassingConversions?: number | null;
  /** Total two point conversion rushing attempts by the opponent teams in the season */
  opponentExtraPointRushingAttempts?: number | null;
  /** Total two point conversion rushing conversions by the opponent teams in the season */
  opponentExtraPointRushingConversions?: number | null;
  /** Total field goal attempts by the opponent teams in the season */
  opponentFieldGoalAttempts?: number | null;
  /** Total field goals made the opponent teams in the season */
  opponentFieldGoalsMade?: number | null;
  /** Total blocked field goals against the opponent teams in the season */
  opponentFieldGoalsHadBlocked?: number | null;
  /** Total punt returns by the opponent teams in the season */
  opponentPuntReturns?: number | null;
  /** Total punt return yards the opponent teams in the season */
  opponentPuntReturnYards?: number | null;
  /** Total kickoff returns by the opponent teams in the season */
  opponentKickReturns?: number | null;
  /** Total kickoff return yards by the opponent teams in the season */
  opponentKickReturnYards?: number | null;
  /** Total defensive interceptions by the opponent teams in the seasons */
  opponentInterceptionReturns?: number | null;
  /** Total defensive interception return yards by the opponent teams in the seasons */
  opponentInterceptionReturnYards?: number | null;
  /** Total defensive solo (unassisted) tackles by the team in the season */
  soloTackles?: number | null;
  /** Total defensive assisted tackles by the team in the season */
  assistedTackles?: number | null;
  /** Total defensive sacks by the team in the season */
  sacks?: number | null;
  /** Total defensive sack yards by the team in the season */
  sackYards?: number | null;
  /** Total passes defended by the team's defense in the season */
  passesDefended?: number | null;
  /** Total fumbles forced on defense by the team in the season */
  fumblesForced?: number | null;
  /** Total defensive fumble recoveries by the team in the season */
  fumblesRecovered?: number | null;
  /** Total fumble return yards by the team in the season */
  fumbleReturnYards?: number | null;
  /** Total fumble return touchdowns by the team in the season */
  fumbleReturnTouchdowns?: number | null;
  /** Total defensive interception return touchdowns by the team in the season */
  interceptionReturnTouchdowns?: number | null;
  /**
   * Total blocked kicks by the team in the season. Note: BlockedKicks include Field Goals and Punts
   * but NOT Extra Points
   */
  blockedKicks?: number | null;
  /** Total punt return touchdowns by the team in the season */
  puntReturnTouchdowns?: number | null;
  /** The longest punt return by the team in the season */
  puntReturnLong?: number | null;
  /** Total kickoff return touchdowns by the team in the season */
  kickReturnTouchdowns?: number | null;
  /** Longest kick return by the team in the season */
  kickReturnLong?: number | null;
  /** Total blocked kick recovery return yards for the team in the season */
  blockedKickReturnYards?: number | null;
  /** Total blocked kick recovery return touchdowns for the team in the season */
  blockedKickReturnTouchdowns?: number | null;
  /**
   * Total field goal return yards by the team in the season. Note: This field excludes blocked
   * field goals
   */
  fieldGoalReturnYards?: number | null;
  /**
   * Total field goal return touchdowns by the team in the season. Note: This field excludes blocked
   * field goals
   */
  fieldGoalReturnTouchdowns?: number | null;
  /** The net yards of the punts by the team in the season */
  puntNetYards?: number | null;
  /** Total defensive solo tackles by the opponent teams in the season */
  opponentSoloTackles?: number | null;
  /** Total defensive assisted tackles by the opponent teams in the season */
  opponentAssistedTackles?: number | null;
  /** Total defensive sacks by the opponent teams in the season */
  opponentSacks?: number | null;
  /** Total defensive sack yards by the opponent teams in the season */
  opponentSackYards?: number | null;
  /** Total passes defended by the opponent teams in the season */
  opponentPassesDefended?: number | null;
  /** Total defensive fumbles forced by the opponent teams in the season */
  opponentFumblesForced?: number | null;
  /** Total defensive fumble recoveries by the opponent teams in the season */
  opponentFumblesRecovered?: number | null;
  /** Total defensive fumbles return yards by the opponent teams in the season */
  opponentFumbleReturnYards?: number | null;
  /** Total defensive fumbles return touchdowns by the opponent teams in the season */
  opponentFumbleReturnTouchdowns?: number | null;
  /** Total defensive interception touchdowns by the opponent teams in the seasons */
  opponentInterceptionReturnTouchdowns?: number | null;
  /** Total blocked kicks against the opponent teams in the season */
  opponentBlockedKicks?: number | null;
  /** Total punt return touchdowns the opponent teams in the season */
  opponentPuntReturnTouchdowns?: number | null;
  /** Longest punt return by the opponent teams in the season */
  opponentPuntReturnLong?: number | null;
  /** Total kickoff return touchdowns by the opponent teams in the season */
  opponentKickReturnTouchdowns?: number | null;
  /** Longest kick return by the opponent teams in the season */
  opponentKickReturnLong?: number | null;
  /** Total blocked kick return yards by the opponent teams in the season */
  opponentBlockedKickReturnYards?: number | null;
  /** Total blocked kick return touchdowns by the opponent teams in the season */
  opponentBlockedKickReturnTouchdowns?: number | null;
  /**
   * Total field goal return yards by the opponent teams in the season. Note: Excludes blocked field
   * goals (only for straight misses that are returned)
   */
  opponentFieldGoalReturnYards?: number | null;
  /**
   * Total field goal return touchdowns by the opponent teams in the season. Note: Excludes blocked
   * field goals (only for straight misses that are returned)
   */
  opponentFieldGoalReturnTouchdowns?: number | null;
  /** Total net punt yards by the opponent team in the season */
  opponentPuntNetYards?: number | null;
  /** The full name of the team (e.g. New England Patriots; Los Angeles Chargers) */
  teamName?: string | null;
  /** The total number of games played by the team in the season */
  games?: number | null;
  /** Total number of times the team dropped back to pass in the season */
  passingDropbacks?: number | null;
  /** Total passing dropbacks by the opponent teams in the season */
  opponentPassingDropbacks?: number | null;
  /**
   * The unique identifier for this TeamSeason record (subject to change; although it very rarely
   * does). For a static ID; use a combination of SeasonType; Season and Team.
   */
  teamSeasonId?: number;
  /** The team's total point differential in the season */
  pointDifferential?: number | null;
  /**
   * The team's percentage of passes that were intercepted by the defense in the season. Note: This
   * refers to the offensive team's passes that were intercepted
   */
  passingInterceptionPercentage?: number | null;
  /** The average punt return yardage for the team in the season */
  puntReturnAverage?: number | null;
  /** Average kick return yard by the team in the season */
  kickReturnAverage?: number | null;
  /** Team's percentage of extra points made in the season */
  extraPointPercentage?: number | null;
  /** Team's percentage of field goals made in the season */
  fieldGoalPercentage?: number | null;
  /** Percentage of passes that were intercepted against the opponent teams in the season */
  opponentPassingInterceptionPercentage?: number | null;
  /** Punt return average of the opponent team in the seasons */
  opponentPuntReturnAverage?: number | null;
  /** Kick return average of the opponent teams in the season */
  opponentKickReturnAverage?: number | null;
  /** Total extra point percentage by the opponent teams in the season */
  opponentExtraPointPercentage?: number | null;
  /** Total field goal percentage by the opponent teams in the season */
  opponentFieldGoalPercentage?: number | null;
  /** The team's penalty yard differential in the season */
  penaltyYardDifferential?: number | null;
  /** Punt return yard differential for the team in the season */
  puntReturnYardDifferential?: number | null;
  /** Total kick return yard differential by the team in the season */
  kickReturnYardDifferential?: number | null;
  /** Total successful two point conversion returns by the team in the season */
  twoPointConversionReturns?: number | null;
  /**
   * Total two point attempt returns converted by the defense for the opponent teams in the season
   */
  opponentTwoPointConversionReturns?: number | null;
  /** The unique ID of the team */
  teamId?: number | null;
  /**
   * A globally unique ID for this team. This value is guaranteed to be unique across all
   * sports/leagues
   */
  globalTeamId?: number | null;
  /** Unique ID of this TeamStatID record. */
  teamStatId?: number;
};

export const teamSeasonSchema: Schema<TeamSeason> = s.object<TeamSeason>({
  seasonType: s.optional(s.int()),
  season: s.optional(s.int()),
  team: s.optionalNullable(s.string()),
  score: s.optional(s.int()),
  opponentScore: s.optional(s.int()),
  totalScore: s.optional(s.int()),
  temperature: s.optionalNullable(s.int()),
  humidity: s.optionalNullable(s.int()),
  windSpeed: s.optionalNullable(s.int()),
  overUnder: s.optionalNullable(s.float64()),
  pointSpread: s.optionalNullable(s.float64()),
  scoreQuarter1: s.optionalNullable(s.int()),
  scoreQuarter2: s.optionalNullable(s.int()),
  scoreQuarter3: s.optionalNullable(s.int()),
  scoreQuarter4: s.optionalNullable(s.int()),
  scoreOvertime: s.optional(s.int()),
  timeOfPossession: s.optionalNullable(s.string()),
  firstDowns: s.optionalNullable(s.int()),
  firstDownsByRushing: s.optionalNullable(s.int()),
  firstDownsByPassing: s.optionalNullable(s.int()),
  firstDownsByPenalty: s.optionalNullable(s.int()),
  offensivePlays: s.optional(s.int()),
  offensiveYards: s.optional(s.int()),
  offensiveYardsPerPlay: s.optional(s.float64()),
  touchdowns: s.optionalNullable(s.int()),
  rushingAttempts: s.optionalNullable(s.int()),
  rushingYards: s.optionalNullable(s.int()),
  rushingYardsPerAttempt: s.optional(s.float64()),
  rushingTouchdowns: s.optionalNullable(s.int()),
  passingAttempts: s.optionalNullable(s.int()),
  passingCompletions: s.optionalNullable(s.int()),
  passingYards: s.optionalNullable(s.int()),
  passingTouchdowns: s.optionalNullable(s.int()),
  passingInterceptions: s.optionalNullable(s.int()),
  passingYardsPerAttempt: s.optional(s.float64()),
  passingYardsPerCompletion: s.optional(s.float64()),
  completionPercentage: s.optional(s.float64()),
  passerRating: s.optionalNullable(s.float64()),
  thirdDownAttempts: s.optionalNullable(s.int()),
  thirdDownConversions: s.optionalNullable(s.int()),
  thirdDownPercentage: s.optionalNullable(s.float64()),
  fourthDownAttempts: s.optionalNullable(s.int()),
  fourthDownConversions: s.optionalNullable(s.int()),
  fourthDownPercentage: s.optionalNullable(s.float64()),
  redZoneAttempts: s.optionalNullable(s.int()),
  redZoneConversions: s.optionalNullable(s.int()),
  goalToGoAttempts: s.optionalNullable(s.int()),
  goalToGoConversions: s.optionalNullable(s.int()),
  returnYards: s.optionalNullable(s.int()),
  penalties: s.optionalNullable(s.int()),
  penaltyYards: s.optionalNullable(s.int()),
  fumbles: s.optionalNullable(s.int()),
  fumblesLost: s.optionalNullable(s.int()),
  timesSacked: s.optionalNullable(s.int()),
  timesSackedYards: s.optionalNullable(s.int()),
  quarterbackHits: s.optionalNullable(s.int()),
  tacklesForLoss: s.optionalNullable(s.int()),
  safeties: s.optionalNullable(s.int()),
  punts: s.optionalNullable(s.int()),
  puntYards: s.optionalNullable(s.int()),
  puntAverage: s.optional(s.float64()),
  giveaways: s.optional(s.int()),
  takeaways: s.optional(s.int()),
  turnoverDifferential: s.optional(s.int()),
  opponentScoreQuarter1: s.optionalNullable(s.int()),
  opponentScoreQuarter2: s.optionalNullable(s.int()),
  opponentScoreQuarter3: s.optionalNullable(s.int()),
  opponentScoreQuarter4: s.optionalNullable(s.int()),
  opponentScoreOvertime: s.optional(s.int()),
  opponentTimeOfPossession: s.optionalNullable(s.string()),
  opponentFirstDowns: s.optionalNullable(s.int()),
  opponentFirstDownsByRushing: s.optionalNullable(s.int()),
  opponentFirstDownsByPassing: s.optionalNullable(s.int()),
  opponentFirstDownsByPenalty: s.optionalNullable(s.int()),
  opponentOffensivePlays: s.optional(s.int()),
  opponentOffensiveYards: s.optional(s.int()),
  opponentOffensiveYardsPerPlay: s.optional(s.float64()),
  opponentTouchdowns: s.optionalNullable(s.int()),
  opponentRushingAttempts: s.optionalNullable(s.int()),
  opponentRushingYards: s.optionalNullable(s.int()),
  opponentRushingYardsPerAttempt: s.optional(s.float64()),
  opponentRushingTouchdowns: s.optionalNullable(s.int()),
  opponentPassingAttempts: s.optionalNullable(s.int()),
  opponentPassingCompletions: s.optionalNullable(s.int()),
  opponentPassingYards: s.optionalNullable(s.int()),
  opponentPassingTouchdowns: s.optionalNullable(s.int()),
  opponentPassingInterceptions: s.optionalNullable(s.int()),
  opponentPassingYardsPerAttempt: s.optional(s.float64()),
  opponentPassingYardsPerCompletion: s.optional(s.float64()),
  opponentCompletionPercentage: s.optional(s.float64()),
  opponentPasserRating: s.optionalNullable(s.float64()),
  opponentThirdDownAttempts: s.optionalNullable(s.int()),
  opponentThirdDownConversions: s.optionalNullable(s.int()),
  opponentThirdDownPercentage: s.optionalNullable(s.float64()),
  opponentFourthDownAttempts: s.optionalNullable(s.int()),
  opponentFourthDownConversions: s.optionalNullable(s.int()),
  opponentFourthDownPercentage: s.optionalNullable(s.float64()),
  opponentRedZoneAttempts: s.optionalNullable(s.int()),
  opponentRedZoneConversions: s.optionalNullable(s.int()),
  opponentGoalToGoAttempts: s.optionalNullable(s.int()),
  opponentGoalToGoConversions: s.optionalNullable(s.int()),
  opponentReturnYards: s.optionalNullable(s.int()),
  opponentPenalties: s.optionalNullable(s.int()),
  opponentPenaltyYards: s.optionalNullable(s.int()),
  opponentFumbles: s.optionalNullable(s.int()),
  opponentFumblesLost: s.optionalNullable(s.int()),
  opponentTimesSacked: s.optionalNullable(s.int()),
  opponentTimesSackedYards: s.optionalNullable(s.int()),
  opponentQuarterbackHits: s.optionalNullable(s.int()),
  opponentTacklesForLoss: s.optionalNullable(s.int()),
  opponentSafeties: s.optionalNullable(s.int()),
  opponentPunts: s.optionalNullable(s.int()),
  opponentPuntYards: s.optionalNullable(s.int()),
  opponentPuntAverage: s.optional(s.float64()),
  opponentGiveaways: s.optional(s.int()),
  opponentTakeaways: s.optional(s.int()),
  opponentTurnoverDifferential: s.optional(s.int()),
  redZonePercentage: s.optionalNullable(s.float64()),
  goalToGoPercentage: s.optionalNullable(s.float64()),
  quarterbackHitsDifferential: s.optionalNullable(s.int()),
  tacklesForLossDifferential: s.optionalNullable(s.int()),
  quarterbackSacksDifferential: s.optional(s.int()),
  tacklesForLossPercentage: s.optionalNullable(s.float64()),
  quarterbackHitsPercentage: s.optionalNullable(s.float64()),
  timesSackedPercentage: s.optional(s.float64()),
  opponentRedZonePercentage: s.optionalNullable(s.float64()),
  opponentGoalToGoPercentage: s.optionalNullable(s.float64()),
  opponentQuarterbackHitsDifferential: s.optionalNullable(s.int()),
  opponentTacklesForLossDifferential: s.optionalNullable(s.int()),
  opponentQuarterbackSacksDifferential: s.optionalNullable(s.int()),
  opponentTacklesForLossPercentage: s.optionalNullable(s.float64()),
  opponentQuarterbackHitsPercentage: s.optionalNullable(s.float64()),
  opponentTimesSackedPercentage: s.optional(s.float64()),
  kickoffs: s.optionalNullable(s.int()),
  kickoffsInEndZone: s.optionalNullable(s.int()),
  kickoffTouchbacks: s.optionalNullable(s.int()),
  puntsHadBlocked: s.optionalNullable(s.int()),
  puntNetAverage: s.optionalNullable(s.float64()),
  extraPointKickingAttempts: s.optionalNullable(s.int()),
  extraPointKickingConversions: s.optionalNullable(s.int()),
  extraPointsHadBlocked: s.optionalNullable(s.int()),
  extraPointPassingAttempts: s.optionalNullable(s.int()),
  extraPointPassingConversions: s.optionalNullable(s.int()),
  extraPointRushingAttempts: s.optionalNullable(s.int()),
  extraPointRushingConversions: s.optionalNullable(s.int()),
  fieldGoalAttempts: s.optionalNullable(s.int()),
  fieldGoalsMade: s.optionalNullable(s.int()),
  fieldGoalsHadBlocked: s.optionalNullable(s.int()),
  puntReturns: s.optionalNullable(s.int()),
  puntReturnYards: s.optionalNullable(s.int()),
  kickReturns: s.optionalNullable(s.int()),
  kickReturnYards: s.optionalNullable(s.int()),
  interceptionReturns: s.optionalNullable(s.int()),
  interceptionReturnYards: s.optionalNullable(s.int()),
  opponentKickoffs: s.optionalNullable(s.int()),
  opponentKickoffsInEndZone: s.optionalNullable(s.int()),
  opponentKickoffTouchbacks: s.optionalNullable(s.int()),
  opponentPuntsHadBlocked: s.optionalNullable(s.int()),
  opponentPuntNetAverage: s.optionalNullable(s.float64()),
  opponentExtraPointKickingAttempts: s.optionalNullable(s.int()),
  opponentExtraPointKickingConversions: s.optionalNullable(s.int()),
  opponentExtraPointsHadBlocked: s.optionalNullable(s.int()),
  opponentExtraPointPassingAttempts: s.optionalNullable(s.int()),
  opponentExtraPointPassingConversions: s.optionalNullable(s.int()),
  opponentExtraPointRushingAttempts: s.optionalNullable(s.int()),
  opponentExtraPointRushingConversions: s.optionalNullable(s.int()),
  opponentFieldGoalAttempts: s.optionalNullable(s.int()),
  opponentFieldGoalsMade: s.optionalNullable(s.int()),
  opponentFieldGoalsHadBlocked: s.optionalNullable(s.int()),
  opponentPuntReturns: s.optionalNullable(s.int()),
  opponentPuntReturnYards: s.optionalNullable(s.int()),
  opponentKickReturns: s.optionalNullable(s.int()),
  opponentKickReturnYards: s.optionalNullable(s.int()),
  opponentInterceptionReturns: s.optionalNullable(s.int()),
  opponentInterceptionReturnYards: s.optionalNullable(s.int()),
  soloTackles: s.optionalNullable(s.int()),
  assistedTackles: s.optionalNullable(s.int()),
  sacks: s.optionalNullable(s.int()),
  sackYards: s.optionalNullable(s.int()),
  passesDefended: s.optionalNullable(s.int()),
  fumblesForced: s.optionalNullable(s.int()),
  fumblesRecovered: s.optionalNullable(s.int()),
  fumbleReturnYards: s.optionalNullable(s.int()),
  fumbleReturnTouchdowns: s.optionalNullable(s.int()),
  interceptionReturnTouchdowns: s.optionalNullable(s.int()),
  blockedKicks: s.optionalNullable(s.int()),
  puntReturnTouchdowns: s.optionalNullable(s.int()),
  puntReturnLong: s.optionalNullable(s.int()),
  kickReturnTouchdowns: s.optionalNullable(s.int()),
  kickReturnLong: s.optionalNullable(s.int()),
  blockedKickReturnYards: s.optionalNullable(s.int()),
  blockedKickReturnTouchdowns: s.optionalNullable(s.int()),
  fieldGoalReturnYards: s.optionalNullable(s.int()),
  fieldGoalReturnTouchdowns: s.optionalNullable(s.int()),
  puntNetYards: s.optionalNullable(s.int()),
  opponentSoloTackles: s.optionalNullable(s.int()),
  opponentAssistedTackles: s.optionalNullable(s.int()),
  opponentSacks: s.optionalNullable(s.int()),
  opponentSackYards: s.optionalNullable(s.int()),
  opponentPassesDefended: s.optionalNullable(s.int()),
  opponentFumblesForced: s.optionalNullable(s.int()),
  opponentFumblesRecovered: s.optionalNullable(s.int()),
  opponentFumbleReturnYards: s.optionalNullable(s.int()),
  opponentFumbleReturnTouchdowns: s.optionalNullable(s.int()),
  opponentInterceptionReturnTouchdowns: s.optionalNullable(s.int()),
  opponentBlockedKicks: s.optionalNullable(s.int()),
  opponentPuntReturnTouchdowns: s.optionalNullable(s.int()),
  opponentPuntReturnLong: s.optionalNullable(s.int()),
  opponentKickReturnTouchdowns: s.optionalNullable(s.int()),
  opponentKickReturnLong: s.optionalNullable(s.int()),
  opponentBlockedKickReturnYards: s.optionalNullable(s.int()),
  opponentBlockedKickReturnTouchdowns: s.optionalNullable(s.int()),
  opponentFieldGoalReturnYards: s.optionalNullable(s.int()),
  opponentFieldGoalReturnTouchdowns: s.optionalNullable(s.int()),
  opponentPuntNetYards: s.optionalNullable(s.int()),
  teamName: s.optionalNullable(s.string()),
  games: s.optionalNullable(s.int()),
  passingDropbacks: s.optionalNullable(s.int()),
  opponentPassingDropbacks: s.optionalNullable(s.int()),
  teamSeasonId: s.optional(s.int()),
  pointDifferential: s.optionalNullable(s.int()),
  passingInterceptionPercentage: s.optionalNullable(s.float64()),
  puntReturnAverage: s.optionalNullable(s.float64()),
  kickReturnAverage: s.optionalNullable(s.float64()),
  extraPointPercentage: s.optionalNullable(s.float64()),
  fieldGoalPercentage: s.optionalNullable(s.float64()),
  opponentPassingInterceptionPercentage: s.optionalNullable(s.float64()),
  opponentPuntReturnAverage: s.optionalNullable(s.float64()),
  opponentKickReturnAverage: s.optionalNullable(s.float64()),
  opponentExtraPointPercentage: s.optionalNullable(s.float64()),
  opponentFieldGoalPercentage: s.optionalNullable(s.float64()),
  penaltyYardDifferential: s.optionalNullable(s.int()),
  puntReturnYardDifferential: s.optionalNullable(s.int()),
  kickReturnYardDifferential: s.optionalNullable(s.int()),
  twoPointConversionReturns: s.optionalNullable(s.int()),
  opponentTwoPointConversionReturns: s.optionalNullable(s.int()),
  teamId: s.optionalNullable(s.int()),
  globalTeamId: s.optionalNullable(s.int()),
  teamStatId: s.optional(s.int()),
  _keysMap: {
    seasonType: "SeasonType",
    season: "Season",
    team: "Team",
    score: "Score",
    opponentScore: "OpponentScore",
    totalScore: "TotalScore",
    temperature: "Temperature",
    humidity: "Humidity",
    windSpeed: "WindSpeed",
    overUnder: "OverUnder",
    pointSpread: "PointSpread",
    scoreQuarter1: "ScoreQuarter1",
    scoreQuarter2: "ScoreQuarter2",
    scoreQuarter3: "ScoreQuarter3",
    scoreQuarter4: "ScoreQuarter4",
    scoreOvertime: "ScoreOvertime",
    timeOfPossession: "TimeOfPossession",
    firstDowns: "FirstDowns",
    firstDownsByRushing: "FirstDownsByRushing",
    firstDownsByPassing: "FirstDownsByPassing",
    firstDownsByPenalty: "FirstDownsByPenalty",
    offensivePlays: "OffensivePlays",
    offensiveYards: "OffensiveYards",
    offensiveYardsPerPlay: "OffensiveYardsPerPlay",
    touchdowns: "Touchdowns",
    rushingAttempts: "RushingAttempts",
    rushingYards: "RushingYards",
    rushingYardsPerAttempt: "RushingYardsPerAttempt",
    rushingTouchdowns: "RushingTouchdowns",
    passingAttempts: "PassingAttempts",
    passingCompletions: "PassingCompletions",
    passingYards: "PassingYards",
    passingTouchdowns: "PassingTouchdowns",
    passingInterceptions: "PassingInterceptions",
    passingYardsPerAttempt: "PassingYardsPerAttempt",
    passingYardsPerCompletion: "PassingYardsPerCompletion",
    completionPercentage: "CompletionPercentage",
    passerRating: "PasserRating",
    thirdDownAttempts: "ThirdDownAttempts",
    thirdDownConversions: "ThirdDownConversions",
    thirdDownPercentage: "ThirdDownPercentage",
    fourthDownAttempts: "FourthDownAttempts",
    fourthDownConversions: "FourthDownConversions",
    fourthDownPercentage: "FourthDownPercentage",
    redZoneAttempts: "RedZoneAttempts",
    redZoneConversions: "RedZoneConversions",
    goalToGoAttempts: "GoalToGoAttempts",
    goalToGoConversions: "GoalToGoConversions",
    returnYards: "ReturnYards",
    penalties: "Penalties",
    penaltyYards: "PenaltyYards",
    fumbles: "Fumbles",
    fumblesLost: "FumblesLost",
    timesSacked: "TimesSacked",
    timesSackedYards: "TimesSackedYards",
    quarterbackHits: "QuarterbackHits",
    tacklesForLoss: "TacklesForLoss",
    safeties: "Safeties",
    punts: "Punts",
    puntYards: "PuntYards",
    puntAverage: "PuntAverage",
    giveaways: "Giveaways",
    takeaways: "Takeaways",
    turnoverDifferential: "TurnoverDifferential",
    opponentScoreQuarter1: "OpponentScoreQuarter1",
    opponentScoreQuarter2: "OpponentScoreQuarter2",
    opponentScoreQuarter3: "OpponentScoreQuarter3",
    opponentScoreQuarter4: "OpponentScoreQuarter4",
    opponentScoreOvertime: "OpponentScoreOvertime",
    opponentTimeOfPossession: "OpponentTimeOfPossession",
    opponentFirstDowns: "OpponentFirstDowns",
    opponentFirstDownsByRushing: "OpponentFirstDownsByRushing",
    opponentFirstDownsByPassing: "OpponentFirstDownsByPassing",
    opponentFirstDownsByPenalty: "OpponentFirstDownsByPenalty",
    opponentOffensivePlays: "OpponentOffensivePlays",
    opponentOffensiveYards: "OpponentOffensiveYards",
    opponentOffensiveYardsPerPlay: "OpponentOffensiveYardsPerPlay",
    opponentTouchdowns: "OpponentTouchdowns",
    opponentRushingAttempts: "OpponentRushingAttempts",
    opponentRushingYards: "OpponentRushingYards",
    opponentRushingYardsPerAttempt: "OpponentRushingYardsPerAttempt",
    opponentRushingTouchdowns: "OpponentRushingTouchdowns",
    opponentPassingAttempts: "OpponentPassingAttempts",
    opponentPassingCompletions: "OpponentPassingCompletions",
    opponentPassingYards: "OpponentPassingYards",
    opponentPassingTouchdowns: "OpponentPassingTouchdowns",
    opponentPassingInterceptions: "OpponentPassingInterceptions",
    opponentPassingYardsPerAttempt: "OpponentPassingYardsPerAttempt",
    opponentPassingYardsPerCompletion: "OpponentPassingYardsPerCompletion",
    opponentCompletionPercentage: "OpponentCompletionPercentage",
    opponentPasserRating: "OpponentPasserRating",
    opponentThirdDownAttempts: "OpponentThirdDownAttempts",
    opponentThirdDownConversions: "OpponentThirdDownConversions",
    opponentThirdDownPercentage: "OpponentThirdDownPercentage",
    opponentFourthDownAttempts: "OpponentFourthDownAttempts",
    opponentFourthDownConversions: "OpponentFourthDownConversions",
    opponentFourthDownPercentage: "OpponentFourthDownPercentage",
    opponentRedZoneAttempts: "OpponentRedZoneAttempts",
    opponentRedZoneConversions: "OpponentRedZoneConversions",
    opponentGoalToGoAttempts: "OpponentGoalToGoAttempts",
    opponentGoalToGoConversions: "OpponentGoalToGoConversions",
    opponentReturnYards: "OpponentReturnYards",
    opponentPenalties: "OpponentPenalties",
    opponentPenaltyYards: "OpponentPenaltyYards",
    opponentFumbles: "OpponentFumbles",
    opponentFumblesLost: "OpponentFumblesLost",
    opponentTimesSacked: "OpponentTimesSacked",
    opponentTimesSackedYards: "OpponentTimesSackedYards",
    opponentQuarterbackHits: "OpponentQuarterbackHits",
    opponentTacklesForLoss: "OpponentTacklesForLoss",
    opponentSafeties: "OpponentSafeties",
    opponentPunts: "OpponentPunts",
    opponentPuntYards: "OpponentPuntYards",
    opponentPuntAverage: "OpponentPuntAverage",
    opponentGiveaways: "OpponentGiveaways",
    opponentTakeaways: "OpponentTakeaways",
    opponentTurnoverDifferential: "OpponentTurnoverDifferential",
    redZonePercentage: "RedZonePercentage",
    goalToGoPercentage: "GoalToGoPercentage",
    quarterbackHitsDifferential: "QuarterbackHitsDifferential",
    tacklesForLossDifferential: "TacklesForLossDifferential",
    quarterbackSacksDifferential: "QuarterbackSacksDifferential",
    tacklesForLossPercentage: "TacklesForLossPercentage",
    quarterbackHitsPercentage: "QuarterbackHitsPercentage",
    timesSackedPercentage: "TimesSackedPercentage",
    opponentRedZonePercentage: "OpponentRedZonePercentage",
    opponentGoalToGoPercentage: "OpponentGoalToGoPercentage",
    opponentQuarterbackHitsDifferential: "OpponentQuarterbackHitsDifferential",
    opponentTacklesForLossDifferential: "OpponentTacklesForLossDifferential",
    opponentQuarterbackSacksDifferential: "OpponentQuarterbackSacksDifferential",
    opponentTacklesForLossPercentage: "OpponentTacklesForLossPercentage",
    opponentQuarterbackHitsPercentage: "OpponentQuarterbackHitsPercentage",
    opponentTimesSackedPercentage: "OpponentTimesSackedPercentage",
    kickoffs: "Kickoffs",
    kickoffsInEndZone: "KickoffsInEndZone",
    kickoffTouchbacks: "KickoffTouchbacks",
    puntsHadBlocked: "PuntsHadBlocked",
    puntNetAverage: "PuntNetAverage",
    extraPointKickingAttempts: "ExtraPointKickingAttempts",
    extraPointKickingConversions: "ExtraPointKickingConversions",
    extraPointsHadBlocked: "ExtraPointsHadBlocked",
    extraPointPassingAttempts: "ExtraPointPassingAttempts",
    extraPointPassingConversions: "ExtraPointPassingConversions",
    extraPointRushingAttempts: "ExtraPointRushingAttempts",
    extraPointRushingConversions: "ExtraPointRushingConversions",
    fieldGoalAttempts: "FieldGoalAttempts",
    fieldGoalsMade: "FieldGoalsMade",
    fieldGoalsHadBlocked: "FieldGoalsHadBlocked",
    puntReturns: "PuntReturns",
    puntReturnYards: "PuntReturnYards",
    kickReturns: "KickReturns",
    kickReturnYards: "KickReturnYards",
    interceptionReturns: "InterceptionReturns",
    interceptionReturnYards: "InterceptionReturnYards",
    opponentKickoffs: "OpponentKickoffs",
    opponentKickoffsInEndZone: "OpponentKickoffsInEndZone",
    opponentKickoffTouchbacks: "OpponentKickoffTouchbacks",
    opponentPuntsHadBlocked: "OpponentPuntsHadBlocked",
    opponentPuntNetAverage: "OpponentPuntNetAverage",
    opponentExtraPointKickingAttempts: "OpponentExtraPointKickingAttempts",
    opponentExtraPointKickingConversions: "OpponentExtraPointKickingConversions",
    opponentExtraPointsHadBlocked: "OpponentExtraPointsHadBlocked",
    opponentExtraPointPassingAttempts: "OpponentExtraPointPassingAttempts",
    opponentExtraPointPassingConversions: "OpponentExtraPointPassingConversions",
    opponentExtraPointRushingAttempts: "OpponentExtraPointRushingAttempts",
    opponentExtraPointRushingConversions: "OpponentExtraPointRushingConversions",
    opponentFieldGoalAttempts: "OpponentFieldGoalAttempts",
    opponentFieldGoalsMade: "OpponentFieldGoalsMade",
    opponentFieldGoalsHadBlocked: "OpponentFieldGoalsHadBlocked",
    opponentPuntReturns: "OpponentPuntReturns",
    opponentPuntReturnYards: "OpponentPuntReturnYards",
    opponentKickReturns: "OpponentKickReturns",
    opponentKickReturnYards: "OpponentKickReturnYards",
    opponentInterceptionReturns: "OpponentInterceptionReturns",
    opponentInterceptionReturnYards: "OpponentInterceptionReturnYards",
    soloTackles: "SoloTackles",
    assistedTackles: "AssistedTackles",
    sacks: "Sacks",
    sackYards: "SackYards",
    passesDefended: "PassesDefended",
    fumblesForced: "FumblesForced",
    fumblesRecovered: "FumblesRecovered",
    fumbleReturnYards: "FumbleReturnYards",
    fumbleReturnTouchdowns: "FumbleReturnTouchdowns",
    interceptionReturnTouchdowns: "InterceptionReturnTouchdowns",
    blockedKicks: "BlockedKicks",
    puntReturnTouchdowns: "PuntReturnTouchdowns",
    puntReturnLong: "PuntReturnLong",
    kickReturnTouchdowns: "KickReturnTouchdowns",
    kickReturnLong: "KickReturnLong",
    blockedKickReturnYards: "BlockedKickReturnYards",
    blockedKickReturnTouchdowns: "BlockedKickReturnTouchdowns",
    fieldGoalReturnYards: "FieldGoalReturnYards",
    fieldGoalReturnTouchdowns: "FieldGoalReturnTouchdowns",
    puntNetYards: "PuntNetYards",
    opponentSoloTackles: "OpponentSoloTackles",
    opponentAssistedTackles: "OpponentAssistedTackles",
    opponentSacks: "OpponentSacks",
    opponentSackYards: "OpponentSackYards",
    opponentPassesDefended: "OpponentPassesDefended",
    opponentFumblesForced: "OpponentFumblesForced",
    opponentFumblesRecovered: "OpponentFumblesRecovered",
    opponentFumbleReturnYards: "OpponentFumbleReturnYards",
    opponentFumbleReturnTouchdowns: "OpponentFumbleReturnTouchdowns",
    opponentInterceptionReturnTouchdowns: "OpponentInterceptionReturnTouchdowns",
    opponentBlockedKicks: "OpponentBlockedKicks",
    opponentPuntReturnTouchdowns: "OpponentPuntReturnTouchdowns",
    opponentPuntReturnLong: "OpponentPuntReturnLong",
    opponentKickReturnTouchdowns: "OpponentKickReturnTouchdowns",
    opponentKickReturnLong: "OpponentKickReturnLong",
    opponentBlockedKickReturnYards: "OpponentBlockedKickReturnYards",
    opponentBlockedKickReturnTouchdowns: "OpponentBlockedKickReturnTouchdowns",
    opponentFieldGoalReturnYards: "OpponentFieldGoalReturnYards",
    opponentFieldGoalReturnTouchdowns: "OpponentFieldGoalReturnTouchdowns",
    opponentPuntNetYards: "OpponentPuntNetYards",
    teamName: "TeamName",
    games: "Games",
    passingDropbacks: "PassingDropbacks",
    opponentPassingDropbacks: "OpponentPassingDropbacks",
    teamSeasonId: "TeamSeasonID",
    pointDifferential: "PointDifferential",
    passingInterceptionPercentage: "PassingInterceptionPercentage",
    puntReturnAverage: "PuntReturnAverage",
    kickReturnAverage: "KickReturnAverage",
    extraPointPercentage: "ExtraPointPercentage",
    fieldGoalPercentage: "FieldGoalPercentage",
    opponentPassingInterceptionPercentage: "OpponentPassingInterceptionPercentage",
    opponentPuntReturnAverage: "OpponentPuntReturnAverage",
    opponentKickReturnAverage: "OpponentKickReturnAverage",
    opponentExtraPointPercentage: "OpponentExtraPointPercentage",
    opponentFieldGoalPercentage: "OpponentFieldGoalPercentage",
    penaltyYardDifferential: "PenaltyYardDifferential",
    puntReturnYardDifferential: "PuntReturnYardDifferential",
    kickReturnYardDifferential: "KickReturnYardDifferential",
    twoPointConversionReturns: "TwoPointConversionReturns",
    opponentTwoPointConversionReturns: "OpponentTwoPointConversionReturns",
    teamId: "TeamID",
    globalTeamId: "GlobalTeamID",
    teamStatId: "TeamStatID",
  },
});
