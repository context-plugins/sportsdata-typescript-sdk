import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TeamSeason4 = {
  /** The unique ID of the stats associated with the team in this season */
  statId?: number;
  /** The unique ID of the team */
  teamId?: number | null;
  /**
   * The type of season that this record corresponds to (1=Regular Season, 2=Preseason,
   * 3=Postseason, 4=Offseason, 5=AllStar).
   */
  seasonType?: number | null;
  /** The college football season of the game */
  season?: number | null;
  /** The team's full name */
  name?: string | null;
  /** The abbreviation [Key] of the team */
  team?: string | null;
  /** Total number of wins by the team in the season */
  wins?: number | null;
  /** The total number of losses by the team in the season */
  losses?: number | null;
  /** Total points scored by the team in the season */
  pointsFor?: number | null;
  /** Total points scored against the team in the season */
  pointsAgainst?: number | null;
  /** The total number of conference wins by the team */
  conferenceWins?: number | null;
  /** The total number of conference losses by the team */
  conferenceLosses?: number | null;
  /** Total conference points scored by the team */
  conferencePointsFor?: number | null;
  /** Total conference points against the team */
  conferencePointsAgainst?: number | null;
  /** Total home wins by the team in the season */
  homeWins?: number | null;
  /** Total home losses by the team in the season */
  homeLosses?: number | null;
  /** Total road wins by the team in the season */
  roadWins?: number | null;
  /** Total road losses by the team in the season */
  roadLosses?: number | null;
  /**
   * The current winning or losing streak of the team in the season. A positive number indicates a
   * winning streak, and a negative number indicates a losing streak.
   */
  streak?: number | null;
  /** Total points scored by the team in the season */
  score?: number | null;
  /** Total points scored by the opponent team */
  opponentScore?: number | null;
  /** Total first downs converted by the team in the season */
  firstDowns?: number | null;
  /** Total third down conversions by the team in the season */
  thirdDownConversions?: number | null;
  /** Total third down attempts by the team in the season */
  thirdDownAttempts?: number | null;
  /** Total fourth down conversions by the team in the season */
  fourthDownConversions?: number | null;
  /** Total fourth down attempts by the team in the season */
  fourthDownAttempts?: number | null;
  /** Total penalties committed by the team in the season */
  penalties?: number | null;
  /** Total penalties yards enforced against the team in the season */
  penaltyYards?: number | null;
  /** Total number of minutes the team possessed the ball for in the season */
  timeOfPossessionMinutes?: number | null;
  /** Total number of seconds the team possessed the ball for in the season */
  timeOfPossessionSeconds?: number | null;
  /**
   * A globally unique ID for the team. Note: This value is guaranteed to be unique across all
   * sports/leagues.
   */
  globalTeamId?: number | null;
  /** This field is deprecated. */
  conferenceRank?: number | null;
  /** This field is deprecated. */
  divisionRank?: number | null;
  /** The updated date and time of the stat. */
  updated?: string | null;
  /** The date and time of the created stat. */
  created?: string | null;
  /** Indicates whether or not a player has recorded any stats for a given game. */
  games?: number | null;
  /** Total fantasy points */
  fantasyPoints?: number | null;
  /** Total passing attempts */
  passingAttempts?: number | null;
  /** Total passing completions */
  passingCompletions?: number | null;
  /** Total passing yards */
  passingYards?: number | null;
  /** Total passing completion percentage */
  passingCompletionPercentage?: number | null;
  /** Total passing yards per attempts */
  passingYardsPerAttempt?: number | null;
  /** Total passing yards per completion */
  passingYardsPerCompletion?: number | null;
  /** Total passing touchdowns */
  passingTouchdowns?: number | null;
  /** Total passing interceptions */
  passingInterceptions?: number | null;
  /** Total passing rating */
  passingRating?: number | null;
  /** Total rushing attempts */
  rushingAttempts?: number | null;
  /** Total rushing yards */
  rushingYards?: number | null;
  /** Total rushing yards per attempt */
  rushingYardsPerAttempt?: number | null;
  /** Total rushing touchdowns */
  rushingTouchdowns?: number | null;
  /** Longest rushing attempt */
  rushingLong?: number | null;
  /** Total receptions */
  receptions?: number | null;
  /** Total receiving yards */
  receivingYards?: number | null;
  /** Total receiving yards per reception */
  receivingYardsPerReception?: number | null;
  /** Total receiving touchdowns */
  receivingTouchdowns?: number | null;
  /** Long receiving reception */
  receivingLong?: number | null;
  /** Total punt returns */
  puntReturns?: number | null;
  /** Total punt return yards */
  puntReturnYards?: number | null;
  /** Total punt return yards per attempt */
  puntReturnYardsPerAttempt?: number | null;
  /** Total punt return touchdowns */
  puntReturnTouchdowns?: number | null;
  /** Longest punt return */
  puntReturnLong?: number | null;
  /** Total kick returns */
  kickReturns?: number | null;
  /** Total kick return yards */
  kickReturnYards?: number | null;
  /** Total kick return yards per attempt */
  kickReturnYardsPerAttempt?: number | null;
  /** Total kick return touchdowns */
  kickReturnTouchdowns?: number | null;
  /** Longest kick return */
  kickReturnLong?: number | null;
  /** Total punts */
  punts?: number | null;
  /** Total punt yards */
  puntYards?: number | null;
  /** Total punt average */
  puntAverage?: number | null;
  /** Longest punt */
  puntLong?: number | null;
  /** Total field goals attempted */
  fieldGoalsAttempted?: number | null;
  /** Total field goals made */
  fieldGoalsMade?: number | null;
  /** Total field goal percentage */
  fieldGoalPercentage?: number | null;
  /** Longest field goal made */
  fieldGoalsLongestMade?: number | null;
  /** Total extra points attempted */
  extraPointsAttempted?: number | null;
  /** Total extra points made */
  extraPointsMade?: number | null;
  /** Total interceptions */
  interceptions?: number | null;
  /** Total interception return yards */
  interceptionReturnYards?: number | null;
  /** Total interception return touchdowns */
  interceptionReturnTouchdowns?: number | null;
  /** Total Solo Tackles */
  soloTackles?: number | null;
  /** Total Assisted Tackles */
  assistedTackles?: number | null;
  /** Total Tackles for a loss of yardage */
  tacklesForLoss?: number | null;
  /** Total Quarterback Sacks */
  sacks?: number | null;
  /** Total Passes Defended */
  passesDefended?: number | null;
  /** Total Fumble Recoveries */
  fumblesRecovered?: number | null;
  /** Total Fumbles Recovered and returned for a touchdown */
  fumbleReturnTouchdowns?: number | null;
  /** Total Quarterback Hurries. NOTE: This field is deprecated as of 2021. */
  quarterbackHurries?: number | null;
  /** Total Fumbles */
  fumbles?: number | null;
  /** Total Fumbles Lost */
  fumblesLost?: number | null;
};

export const teamSeason4Schema: Schema<TeamSeason4> = s.object<TeamSeason4>({
  statId: s.optional(s.int()),
  teamId: s.optionalNullable(s.int()),
  seasonType: s.optionalNullable(s.int()),
  season: s.optionalNullable(s.int()),
  name: s.optionalNullable(s.string()),
  team: s.optionalNullable(s.string()),
  wins: s.optionalNullable(s.int()),
  losses: s.optionalNullable(s.int()),
  pointsFor: s.optionalNullable(s.int()),
  pointsAgainst: s.optionalNullable(s.int()),
  conferenceWins: s.optionalNullable(s.int()),
  conferenceLosses: s.optionalNullable(s.int()),
  conferencePointsFor: s.optionalNullable(s.int()),
  conferencePointsAgainst: s.optionalNullable(s.int()),
  homeWins: s.optionalNullable(s.int()),
  homeLosses: s.optionalNullable(s.int()),
  roadWins: s.optionalNullable(s.int()),
  roadLosses: s.optionalNullable(s.int()),
  streak: s.optionalNullable(s.int()),
  score: s.optionalNullable(s.int()),
  opponentScore: s.optionalNullable(s.int()),
  firstDowns: s.optionalNullable(s.int()),
  thirdDownConversions: s.optionalNullable(s.int()),
  thirdDownAttempts: s.optionalNullable(s.int()),
  fourthDownConversions: s.optionalNullable(s.int()),
  fourthDownAttempts: s.optionalNullable(s.int()),
  penalties: s.optionalNullable(s.int()),
  penaltyYards: s.optionalNullable(s.int()),
  timeOfPossessionMinutes: s.optionalNullable(s.int()),
  timeOfPossessionSeconds: s.optionalNullable(s.int()),
  globalTeamId: s.optionalNullable(s.int()),
  conferenceRank: s.optionalNullable(s.int()),
  divisionRank: s.optionalNullable(s.int()),
  updated: s.optionalNullable(s.string()),
  created: s.optionalNullable(s.string()),
  games: s.optionalNullable(s.int()),
  fantasyPoints: s.optionalNullable(s.float64()),
  passingAttempts: s.optionalNullable(s.float64()),
  passingCompletions: s.optionalNullable(s.float64()),
  passingYards: s.optionalNullable(s.float64()),
  passingCompletionPercentage: s.optionalNullable(s.float64()),
  passingYardsPerAttempt: s.optionalNullable(s.float64()),
  passingYardsPerCompletion: s.optionalNullable(s.float64()),
  passingTouchdowns: s.optionalNullable(s.float64()),
  passingInterceptions: s.optionalNullable(s.float64()),
  passingRating: s.optionalNullable(s.float64()),
  rushingAttempts: s.optionalNullable(s.float64()),
  rushingYards: s.optionalNullable(s.float64()),
  rushingYardsPerAttempt: s.optionalNullable(s.float64()),
  rushingTouchdowns: s.optionalNullable(s.float64()),
  rushingLong: s.optionalNullable(s.float64()),
  receptions: s.optionalNullable(s.float64()),
  receivingYards: s.optionalNullable(s.float64()),
  receivingYardsPerReception: s.optionalNullable(s.float64()),
  receivingTouchdowns: s.optionalNullable(s.float64()),
  receivingLong: s.optionalNullable(s.float64()),
  puntReturns: s.optionalNullable(s.float64()),
  puntReturnYards: s.optionalNullable(s.float64()),
  puntReturnYardsPerAttempt: s.optionalNullable(s.float64()),
  puntReturnTouchdowns: s.optionalNullable(s.float64()),
  puntReturnLong: s.optionalNullable(s.float64()),
  kickReturns: s.optionalNullable(s.float64()),
  kickReturnYards: s.optionalNullable(s.float64()),
  kickReturnYardsPerAttempt: s.optionalNullable(s.float64()),
  kickReturnTouchdowns: s.optionalNullable(s.float64()),
  kickReturnLong: s.optionalNullable(s.float64()),
  punts: s.optionalNullable(s.float64()),
  puntYards: s.optionalNullable(s.float64()),
  puntAverage: s.optionalNullable(s.float64()),
  puntLong: s.optionalNullable(s.float64()),
  fieldGoalsAttempted: s.optionalNullable(s.float64()),
  fieldGoalsMade: s.optionalNullable(s.float64()),
  fieldGoalPercentage: s.optionalNullable(s.float64()),
  fieldGoalsLongestMade: s.optionalNullable(s.float64()),
  extraPointsAttempted: s.optionalNullable(s.float64()),
  extraPointsMade: s.optionalNullable(s.float64()),
  interceptions: s.optionalNullable(s.float64()),
  interceptionReturnYards: s.optionalNullable(s.float64()),
  interceptionReturnTouchdowns: s.optionalNullable(s.float64()),
  soloTackles: s.optionalNullable(s.float64()),
  assistedTackles: s.optionalNullable(s.float64()),
  tacklesForLoss: s.optionalNullable(s.float64()),
  sacks: s.optionalNullable(s.float64()),
  passesDefended: s.optionalNullable(s.float64()),
  fumblesRecovered: s.optionalNullable(s.float64()),
  fumbleReturnTouchdowns: s.optionalNullable(s.float64()),
  quarterbackHurries: s.optionalNullable(s.float64()),
  fumbles: s.optionalNullable(s.float64()),
  fumblesLost: s.optionalNullable(s.float64()),
  _keysMap: {
    statId: "StatID",
    teamId: "TeamID",
    seasonType: "SeasonType",
    season: "Season",
    name: "Name",
    team: "Team",
    wins: "Wins",
    losses: "Losses",
    pointsFor: "PointsFor",
    pointsAgainst: "PointsAgainst",
    conferenceWins: "ConferenceWins",
    conferenceLosses: "ConferenceLosses",
    conferencePointsFor: "ConferencePointsFor",
    conferencePointsAgainst: "ConferencePointsAgainst",
    homeWins: "HomeWins",
    homeLosses: "HomeLosses",
    roadWins: "RoadWins",
    roadLosses: "RoadLosses",
    streak: "Streak",
    score: "Score",
    opponentScore: "OpponentScore",
    firstDowns: "FirstDowns",
    thirdDownConversions: "ThirdDownConversions",
    thirdDownAttempts: "ThirdDownAttempts",
    fourthDownConversions: "FourthDownConversions",
    fourthDownAttempts: "FourthDownAttempts",
    penalties: "Penalties",
    penaltyYards: "PenaltyYards",
    timeOfPossessionMinutes: "TimeOfPossessionMinutes",
    timeOfPossessionSeconds: "TimeOfPossessionSeconds",
    globalTeamId: "GlobalTeamID",
    conferenceRank: "ConferenceRank",
    divisionRank: "DivisionRank",
    updated: "Updated",
    created: "Created",
    games: "Games",
    fantasyPoints: "FantasyPoints",
    passingAttempts: "PassingAttempts",
    passingCompletions: "PassingCompletions",
    passingYards: "PassingYards",
    passingCompletionPercentage: "PassingCompletionPercentage",
    passingYardsPerAttempt: "PassingYardsPerAttempt",
    passingYardsPerCompletion: "PassingYardsPerCompletion",
    passingTouchdowns: "PassingTouchdowns",
    passingInterceptions: "PassingInterceptions",
    passingRating: "PassingRating",
    rushingAttempts: "RushingAttempts",
    rushingYards: "RushingYards",
    rushingYardsPerAttempt: "RushingYardsPerAttempt",
    rushingTouchdowns: "RushingTouchdowns",
    rushingLong: "RushingLong",
    receptions: "Receptions",
    receivingYards: "ReceivingYards",
    receivingYardsPerReception: "ReceivingYardsPerReception",
    receivingTouchdowns: "ReceivingTouchdowns",
    receivingLong: "ReceivingLong",
    puntReturns: "PuntReturns",
    puntReturnYards: "PuntReturnYards",
    puntReturnYardsPerAttempt: "PuntReturnYardsPerAttempt",
    puntReturnTouchdowns: "PuntReturnTouchdowns",
    puntReturnLong: "PuntReturnLong",
    kickReturns: "KickReturns",
    kickReturnYards: "KickReturnYards",
    kickReturnYardsPerAttempt: "KickReturnYardsPerAttempt",
    kickReturnTouchdowns: "KickReturnTouchdowns",
    kickReturnLong: "KickReturnLong",
    punts: "Punts",
    puntYards: "PuntYards",
    puntAverage: "PuntAverage",
    puntLong: "PuntLong",
    fieldGoalsAttempted: "FieldGoalsAttempted",
    fieldGoalsMade: "FieldGoalsMade",
    fieldGoalPercentage: "FieldGoalPercentage",
    fieldGoalsLongestMade: "FieldGoalsLongestMade",
    extraPointsAttempted: "ExtraPointsAttempted",
    extraPointsMade: "ExtraPointsMade",
    interceptions: "Interceptions",
    interceptionReturnYards: "InterceptionReturnYards",
    interceptionReturnTouchdowns: "InterceptionReturnTouchdowns",
    soloTackles: "SoloTackles",
    assistedTackles: "AssistedTackles",
    tacklesForLoss: "TacklesForLoss",
    sacks: "Sacks",
    passesDefended: "PassesDefended",
    fumblesRecovered: "FumblesRecovered",
    fumbleReturnTouchdowns: "FumbleReturnTouchdowns",
    quarterbackHurries: "QuarterbackHurries",
    fumbles: "Fumbles",
    fumblesLost: "FumblesLost",
  },
});
