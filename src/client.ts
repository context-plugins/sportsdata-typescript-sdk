import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import { DEFAULT_CLIENT_OPTIONS, type ClientOptions } from "./client-options.js";
import { RawClient } from "./core/raw-client.js";
import { CbbV3Odds } from "./resources/cbb-v3-odds.js";
import { CbbV3Scores } from "./resources/cbb-v3-scores.js";
import { CbbV3Stats } from "./resources/cbb-v3-stats.js";
import { CfbV3Odds } from "./resources/cfb-v3-odds.js";
import { CfbV3Scores } from "./resources/cfb-v3-scores.js";
import { CfbV3Stats } from "./resources/cfb-v3-stats.js";
import { CwbbV3Scores } from "./resources/cwbb-v3-scores.js";
import { GolfV2 } from "./resources/golf-v2.js";
import { GolfV3Headshots } from "./resources/golf-v3-headshots.js";
import { GolfV3Odds } from "./resources/golf-v3-odds.js";
import { GolfV3RotoBallerPremiumNews } from "./resources/golf-v3-roto-baller-premium-news.js";
import { MlbV3Headshots } from "./resources/mlb-v3-headshots.js";
import { MlbV3Odds } from "./resources/mlb-v3-odds.js";
import { MlbV3PlayByPlay } from "./resources/mlb-v3-play-by-play.js";
import { MlbV3Projections } from "./resources/mlb-v3-projections.js";
import { MlbV3RotoBallerPremiumNews } from "./resources/mlb-v3-roto-baller-premium-news.js";
import { MlbV3Scores } from "./resources/mlb-v3-scores.js";
import { MlbV3Stats } from "./resources/mlb-v3-stats.js";
import { MmaV3Odds } from "./resources/mma-v3-odds.js";
import { MmaV3Scores } from "./resources/mma-v3-scores.js";
import { MmaV3Stats } from "./resources/mma-v3-stats.js";
import { NascarV2 } from "./resources/nascar-v2.js";
import { NascarV3Odds } from "./resources/nascar-v3-odds.js";
import { NbaV3Headshots } from "./resources/nba-v3-headshots.js";
import { NbaV3Odds } from "./resources/nba-v3-odds.js";
import { NbaV3PlayByPlay } from "./resources/nba-v3-play-by-play.js";
import { NbaV3Projections } from "./resources/nba-v3-projections.js";
import { NbaV3RotoBallerPremiumNews } from "./resources/nba-v3-roto-baller-premium-news.js";
import { NbaV3Scores } from "./resources/nba-v3-scores.js";
import { NbaV3Stats } from "./resources/nba-v3-stats.js";
import { NflV3Headshots } from "./resources/nfl-v3-headshots.js";
import { NflV3Odds } from "./resources/nfl-v3-odds.js";
import { NflV3PlayByPlay } from "./resources/nfl-v3-play-by-play.js";
import { NflV3Projections } from "./resources/nfl-v3-projections.js";
import { NflV3RotoBallerPremiumNews } from "./resources/nfl-v3-roto-baller-premium-news.js";
import { NflV3Scores } from "./resources/nfl-v3-scores.js";
import { NflV3Stats } from "./resources/nfl-v3-stats.js";
import { NhlV3Headshots } from "./resources/nhl-v3-headshots.js";
import { NhlV3Odds } from "./resources/nhl-v3-odds.js";
import { NhlV3PlayByPlay } from "./resources/nhl-v3-play-by-play.js";
import { NhlV3Projections } from "./resources/nhl-v3-projections.js";
import { NhlV3RotoBallerPremiumNews } from "./resources/nhl-v3-roto-baller-premium-news.js";
import { NhlV3Scores } from "./resources/nhl-v3-scores.js";
import { NhlV3Stats } from "./resources/nhl-v3-stats.js";
import { SoccerV4Headshots } from "./resources/soccer-v4-headshots.js";
import { SoccerV4Odds } from "./resources/soccer-v4-odds.js";
import { SoccerV4Projections } from "./resources/soccer-v4-projections.js";
import { SoccerV4Scores } from "./resources/soccer-v4-scores.js";
import { SoccerV4Stats } from "./resources/soccer-v4-stats.js";
import { WnbaV3Scores } from "./resources/wnba-v3-scores.js";
import { buildServers, type Servers } from "./servers.js";

export class SportsDataIoClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #nflV3Scores?: NflV3Scores;
  #nflV3Projections?: NflV3Projections;
  #nflV3RotoBallerPremiumNews?: NflV3RotoBallerPremiumNews;
  #nflV3Odds?: NflV3Odds;
  #nflV3Stats?: NflV3Stats;
  #nflV3PlayByPlay?: NflV3PlayByPlay;
  #nflV3Headshots?: NflV3Headshots;
  #nbaV3Scores?: NbaV3Scores;
  #nbaV3Projections?: NbaV3Projections;
  #nbaV3RotoBallerPremiumNews?: NbaV3RotoBallerPremiumNews;
  #nbaV3Odds?: NbaV3Odds;
  #nbaV3Stats?: NbaV3Stats;
  #nbaV3PlayByPlay?: NbaV3PlayByPlay;
  #nbaV3Headshots?: NbaV3Headshots;
  #mlbV3Scores?: MlbV3Scores;
  #mlbV3Projections?: MlbV3Projections;
  #mlbV3RotoBallerPremiumNews?: MlbV3RotoBallerPremiumNews;
  #mlbV3Odds?: MlbV3Odds;
  #mlbV3Stats?: MlbV3Stats;
  #mlbV3PlayByPlay?: MlbV3PlayByPlay;
  #mlbV3Headshots?: MlbV3Headshots;
  #nhlV3Scores?: NhlV3Scores;
  #nhlV3Projections?: NhlV3Projections;
  #nhlV3Odds?: NhlV3Odds;
  #nhlV3Stats?: NhlV3Stats;
  #nhlV3PlayByPlay?: NhlV3PlayByPlay;
  #nhlV3Headshots?: NhlV3Headshots;
  #nhlV3RotoBallerPremiumNews?: NhlV3RotoBallerPremiumNews;
  #cfbV3Scores?: CfbV3Scores;
  #cfbV3Odds?: CfbV3Odds;
  #cfbV3Stats?: CfbV3Stats;
  #cbbV3Scores?: CbbV3Scores;
  #cbbV3Odds?: CbbV3Odds;
  #cbbV3Stats?: CbbV3Stats;
  #wnbaV3Scores?: WnbaV3Scores;
  #cwbbV3Scores?: CwbbV3Scores;
  #soccerV4Scores?: SoccerV4Scores;
  #soccerV4Headshots?: SoccerV4Headshots;
  #soccerV4Projections?: SoccerV4Projections;
  #soccerV4Stats?: SoccerV4Stats;
  #soccerV4Odds?: SoccerV4Odds;
  #golfV2?: GolfV2;
  #golfV3Headshots?: GolfV3Headshots;
  #golfV3RotoBallerPremiumNews?: GolfV3RotoBallerPremiumNews;
  #golfV3Odds?: GolfV3Odds;
  #nascarV2?: NascarV2;
  #nascarV3Odds?: NascarV3Odds;
  #mmaV3Scores?: MmaV3Scores;
  #mmaV3Odds?: MmaV3Odds;
  #mmaV3Stats?: MmaV3Stats;

  constructor(clientOptions: Partial<ClientOptions> = {}) {
    const options = { ...DEFAULT_CLIENT_OPTIONS, ...clientOptions };

    this.#rawClient = new RawClient({
      timeout: options.timeout,
      defaultHeaders: [],
      defaultQuery: [],
      defaultPathParams: [],
      fetch: options.fetch,
    });

    this.#servers = buildServers(options.serverEnvironment, options.serverOptions);

    this.#auth = buildAuthSchemes(options);
  }

  get nflV3Scores(): NflV3Scores {
    return (this.#nflV3Scores ??= new NflV3Scores(this.#rawClient, this.#servers, this.#auth));
  }

  get nflV3Projections(): NflV3Projections {
    return (this.#nflV3Projections ??= new NflV3Projections(this.#rawClient, this.#servers, this.#auth));
  }

  get nflV3RotoBallerPremiumNews(): NflV3RotoBallerPremiumNews {
    return (this.#nflV3RotoBallerPremiumNews ??= new NflV3RotoBallerPremiumNews(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get nflV3Odds(): NflV3Odds {
    return (this.#nflV3Odds ??= new NflV3Odds(this.#rawClient, this.#servers, this.#auth));
  }

  get nflV3Stats(): NflV3Stats {
    return (this.#nflV3Stats ??= new NflV3Stats(this.#rawClient, this.#servers, this.#auth));
  }

  get nflV3PlayByPlay(): NflV3PlayByPlay {
    return (this.#nflV3PlayByPlay ??= new NflV3PlayByPlay(this.#rawClient, this.#servers, this.#auth));
  }

  get nflV3Headshots(): NflV3Headshots {
    return (this.#nflV3Headshots ??= new NflV3Headshots(this.#rawClient, this.#servers, this.#auth));
  }

  get nbaV3Scores(): NbaV3Scores {
    return (this.#nbaV3Scores ??= new NbaV3Scores(this.#rawClient, this.#servers, this.#auth));
  }

  get nbaV3Projections(): NbaV3Projections {
    return (this.#nbaV3Projections ??= new NbaV3Projections(this.#rawClient, this.#servers, this.#auth));
  }

  get nbaV3RotoBallerPremiumNews(): NbaV3RotoBallerPremiumNews {
    return (this.#nbaV3RotoBallerPremiumNews ??= new NbaV3RotoBallerPremiumNews(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get nbaV3Odds(): NbaV3Odds {
    return (this.#nbaV3Odds ??= new NbaV3Odds(this.#rawClient, this.#servers, this.#auth));
  }

  get nbaV3Stats(): NbaV3Stats {
    return (this.#nbaV3Stats ??= new NbaV3Stats(this.#rawClient, this.#servers, this.#auth));
  }

  get nbaV3PlayByPlay(): NbaV3PlayByPlay {
    return (this.#nbaV3PlayByPlay ??= new NbaV3PlayByPlay(this.#rawClient, this.#servers, this.#auth));
  }

  get nbaV3Headshots(): NbaV3Headshots {
    return (this.#nbaV3Headshots ??= new NbaV3Headshots(this.#rawClient, this.#servers, this.#auth));
  }

  get mlbV3Scores(): MlbV3Scores {
    return (this.#mlbV3Scores ??= new MlbV3Scores(this.#rawClient, this.#servers, this.#auth));
  }

  get mlbV3Projections(): MlbV3Projections {
    return (this.#mlbV3Projections ??= new MlbV3Projections(this.#rawClient, this.#servers, this.#auth));
  }

  get mlbV3RotoBallerPremiumNews(): MlbV3RotoBallerPremiumNews {
    return (this.#mlbV3RotoBallerPremiumNews ??= new MlbV3RotoBallerPremiumNews(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get mlbV3Odds(): MlbV3Odds {
    return (this.#mlbV3Odds ??= new MlbV3Odds(this.#rawClient, this.#servers, this.#auth));
  }

  get mlbV3Stats(): MlbV3Stats {
    return (this.#mlbV3Stats ??= new MlbV3Stats(this.#rawClient, this.#servers, this.#auth));
  }

  get mlbV3PlayByPlay(): MlbV3PlayByPlay {
    return (this.#mlbV3PlayByPlay ??= new MlbV3PlayByPlay(this.#rawClient, this.#servers, this.#auth));
  }

  get mlbV3Headshots(): MlbV3Headshots {
    return (this.#mlbV3Headshots ??= new MlbV3Headshots(this.#rawClient, this.#servers, this.#auth));
  }

  get nhlV3Scores(): NhlV3Scores {
    return (this.#nhlV3Scores ??= new NhlV3Scores(this.#rawClient, this.#servers, this.#auth));
  }

  get nhlV3Projections(): NhlV3Projections {
    return (this.#nhlV3Projections ??= new NhlV3Projections(this.#rawClient, this.#servers, this.#auth));
  }

  get nhlV3Odds(): NhlV3Odds {
    return (this.#nhlV3Odds ??= new NhlV3Odds(this.#rawClient, this.#servers, this.#auth));
  }

  get nhlV3Stats(): NhlV3Stats {
    return (this.#nhlV3Stats ??= new NhlV3Stats(this.#rawClient, this.#servers, this.#auth));
  }

  get nhlV3PlayByPlay(): NhlV3PlayByPlay {
    return (this.#nhlV3PlayByPlay ??= new NhlV3PlayByPlay(this.#rawClient, this.#servers, this.#auth));
  }

  get nhlV3Headshots(): NhlV3Headshots {
    return (this.#nhlV3Headshots ??= new NhlV3Headshots(this.#rawClient, this.#servers, this.#auth));
  }

  get nhlV3RotoBallerPremiumNews(): NhlV3RotoBallerPremiumNews {
    return (this.#nhlV3RotoBallerPremiumNews ??= new NhlV3RotoBallerPremiumNews(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get cfbV3Scores(): CfbV3Scores {
    return (this.#cfbV3Scores ??= new CfbV3Scores(this.#rawClient, this.#servers, this.#auth));
  }

  get cfbV3Odds(): CfbV3Odds {
    return (this.#cfbV3Odds ??= new CfbV3Odds(this.#rawClient, this.#servers, this.#auth));
  }

  get cfbV3Stats(): CfbV3Stats {
    return (this.#cfbV3Stats ??= new CfbV3Stats(this.#rawClient, this.#servers, this.#auth));
  }

  get cbbV3Scores(): CbbV3Scores {
    return (this.#cbbV3Scores ??= new CbbV3Scores(this.#rawClient, this.#servers, this.#auth));
  }

  get cbbV3Odds(): CbbV3Odds {
    return (this.#cbbV3Odds ??= new CbbV3Odds(this.#rawClient, this.#servers, this.#auth));
  }

  get cbbV3Stats(): CbbV3Stats {
    return (this.#cbbV3Stats ??= new CbbV3Stats(this.#rawClient, this.#servers, this.#auth));
  }

  get wnbaV3Scores(): WnbaV3Scores {
    return (this.#wnbaV3Scores ??= new WnbaV3Scores(this.#rawClient, this.#servers, this.#auth));
  }

  get cwbbV3Scores(): CwbbV3Scores {
    return (this.#cwbbV3Scores ??= new CwbbV3Scores(this.#rawClient, this.#servers, this.#auth));
  }

  get soccerV4Scores(): SoccerV4Scores {
    return (this.#soccerV4Scores ??= new SoccerV4Scores(this.#rawClient, this.#servers, this.#auth));
  }

  get soccerV4Headshots(): SoccerV4Headshots {
    return (this.#soccerV4Headshots ??= new SoccerV4Headshots(this.#rawClient, this.#servers, this.#auth));
  }

  get soccerV4Projections(): SoccerV4Projections {
    return (this.#soccerV4Projections ??= new SoccerV4Projections(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get soccerV4Stats(): SoccerV4Stats {
    return (this.#soccerV4Stats ??= new SoccerV4Stats(this.#rawClient, this.#servers, this.#auth));
  }

  get soccerV4Odds(): SoccerV4Odds {
    return (this.#soccerV4Odds ??= new SoccerV4Odds(this.#rawClient, this.#servers, this.#auth));
  }

  get golfV2(): GolfV2 {
    return (this.#golfV2 ??= new GolfV2(this.#rawClient, this.#servers, this.#auth));
  }

  get golfV3Headshots(): GolfV3Headshots {
    return (this.#golfV3Headshots ??= new GolfV3Headshots(this.#rawClient, this.#servers, this.#auth));
  }

  get golfV3RotoBallerPremiumNews(): GolfV3RotoBallerPremiumNews {
    return (this.#golfV3RotoBallerPremiumNews ??= new GolfV3RotoBallerPremiumNews(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get golfV3Odds(): GolfV3Odds {
    return (this.#golfV3Odds ??= new GolfV3Odds(this.#rawClient, this.#servers, this.#auth));
  }

  get nascarV2(): NascarV2 {
    return (this.#nascarV2 ??= new NascarV2(this.#rawClient, this.#servers, this.#auth));
  }

  get nascarV3Odds(): NascarV3Odds {
    return (this.#nascarV3Odds ??= new NascarV3Odds(this.#rawClient, this.#servers, this.#auth));
  }

  get mmaV3Scores(): MmaV3Scores {
    return (this.#mmaV3Scores ??= new MmaV3Scores(this.#rawClient, this.#servers, this.#auth));
  }

  get mmaV3Odds(): MmaV3Odds {
    return (this.#mmaV3Odds ??= new MmaV3Odds(this.#rawClient, this.#servers, this.#auth));
  }

  get mmaV3Stats(): MmaV3Stats {
    return (this.#mmaV3Stats ??= new MmaV3Stats(this.#rawClient, this.#servers, this.#auth));
  }
}
