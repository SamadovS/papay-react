import { BoArticle } from "./boArticle";
import { Product } from "./product";
import { Restaurant } from "./user";
import { Order } from "./order";

/** REACT APP STATE */
export interface AppRootState {
  homePage: HomePageState;
  restaurantPage: RestaurantPageState;
  ordersPage: OrdersPageState;
}

/** HOME PAGE */
export interface HomePageState {
  topRestaurants: Restaurant[];
  bestRestaurants: Restaurant[];
  trendProducts: Product[];
  bestBoArticles: BoArticle[];
  trendBoArticles: BoArticle[];
  newsBoArticles: BoArticle[];
}

/** RESTAURANT PAGE */
export interface RestaurantPageState {
  targetRestaurants: Restaurant[];
  randomRestaurants: Restaurant[];
  chosenRestaurant: Restaurant | null;
  targetProducts: Product[];
  chosenProduct: Product | null;
}

/** ORDERS PAGE */
export interface OrdersPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}
