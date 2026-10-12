import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bookingSchema, type Booking } from "./booking.js";
import { coach1Schema, type Coach1 } from "./coach1.js";
import { coach3Schema, type Coach3 } from "./coach3.js";
import { game25Schema, type Game25 } from "./game25.js";
import { goalSchema, type Goal } from "./goal.js";
import { lineup4Schema, type Lineup4 } from "./lineup4.js";
import { penaltyShootoutSchema, type PenaltyShootout } from "./penalty-shootout.js";
import { playerGame7Schema, type PlayerGame7 } from "./player-game7.js";
import { referee11Schema, type Referee11 } from "./referee11.js";
import { referee21Schema, type Referee21 } from "./referee21.js";
import { referee3Schema, type Referee3 } from "./referee3.js";
import { referee4Schema, type Referee4 } from "./referee4.js";
import { referee5Schema, type Referee5 } from "./referee5.js";
import { referee6Schema, type Referee6 } from "./referee6.js";
import { referee8Schema, type Referee8 } from "./referee8.js";
import { teamGame7Schema, type TeamGame7 } from "./team-game7.js";

export type BoxScore6 = {
  /** The game details associated with this box score */
  game?: Game25;
  /** The coach of the away team */
  awayTeamCoach?: Coach3;
  /** The coach of the home team */
  homeTeamCoach?: Coach1;
  /** The main referee */
  mainReferee?: Referee8;
  /** The first assistant referee */
  assistantReferee1?: Referee11;
  /** The second assistant referee */
  assistantReferee2?: Referee21;
  /** The information about the fourth referee working the match */
  fourthReferee?: Referee3;
  /** The first additional assistant referee */
  additionalAssistantReferee1?: Referee4;
  /** The second additional assistant referee */
  additionalAssistantReferee2?: Referee5;
  /** The details of the lineups for each team */
  lineups?: Lineup4[];
  /** The details of the goals scored during this game */
  goals?: Goal[];
  /** The details of the bookings (yellow/red cards) recorded during this game */
  bookings?: Booking[];
  /** The details of the penalty shootouts recorded during this game */
  penaltyShootouts?: PenaltyShootout[];
  /** The stats by the team in the game */
  teamGames?: TeamGame7[];
  /** The player stats for this game */
  playerGames?: PlayerGame7[];
  /** The name of the referee in charge of the video reviews (VAR) */
  videoAssistantReferee?: Referee6;
};

export const boxScore6Schema: Schema<BoxScore6> = s.object<BoxScore6>({
  game: s.optional(s.lazy(() => game25Schema)),
  awayTeamCoach: s.optional(s.lazy(() => coach3Schema)),
  homeTeamCoach: s.optional(s.lazy(() => coach1Schema)),
  mainReferee: s.optional(s.lazy(() => referee8Schema)),
  assistantReferee1: s.optional(s.lazy(() => referee11Schema)),
  assistantReferee2: s.optional(s.lazy(() => referee21Schema)),
  fourthReferee: s.optional(s.lazy(() => referee3Schema)),
  additionalAssistantReferee1: s.optional(s.lazy(() => referee4Schema)),
  additionalAssistantReferee2: s.optional(s.lazy(() => referee5Schema)),
  lineups: s.optional(s.array(s.lazy(() => lineup4Schema))),
  goals: s.optional(s.array(s.lazy(() => goalSchema))),
  bookings: s.optional(s.array(s.lazy(() => bookingSchema))),
  penaltyShootouts: s.optional(s.array(s.lazy(() => penaltyShootoutSchema))),
  teamGames: s.optional(s.array(s.lazy(() => teamGame7Schema))),
  playerGames: s.optional(s.array(s.lazy(() => playerGame7Schema))),
  videoAssistantReferee: s.optional(s.lazy(() => referee6Schema)),
  _keysMap: {
    game: "Game",
    awayTeamCoach: "AwayTeamCoach",
    homeTeamCoach: "HomeTeamCoach",
    mainReferee: "MainReferee",
    assistantReferee1: "AssistantReferee1",
    assistantReferee2: "AssistantReferee2",
    fourthReferee: "FourthReferee",
    additionalAssistantReferee1: "AdditionalAssistantReferee1",
    additionalAssistantReferee2: "AdditionalAssistantReferee2",
    lineups: "Lineups",
    goals: "Goals",
    bookings: "Bookings",
    penaltyShootouts: "PenaltyShootouts",
    teamGames: "TeamGames",
    playerGames: "PlayerGames",
    videoAssistantReferee: "VideoAssistantReferee",
  },
});
