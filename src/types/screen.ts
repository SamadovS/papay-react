import { BoArticle } from "./boArticle";
import { Product } from "./product";
import { Restaurant } from "./user";

export interface AppRootStore {
  homepage: HomePageState;
}

export interface HomePageState {
  topRestaurants: Restaurant[];
  bestRestaurants: Restaurant[];
  trendRestaurants: Product[];
  bestBoArticles: BoArticle[];
  trendArticles: BoArticle[];
  newsArticles: BoArticle[];
}
