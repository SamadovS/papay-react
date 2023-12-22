import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../../types/screen";
import { HomePage } from ".";

const selectHomePage = (state: AppRootState) => state.homepage;
export const retrieveTopRestaurants = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topRestaurants
);
export const retrieveBestRestaurants = createSelector(
  selectHomePage,
  (HomePage) => HomePage.bestRestaurants
);
export const retrieveTrendRestaurants = createSelector(
  selectHomePage,
  (HomePage) => HomePage.trendRestaurants
);
export const retrieveBestBoArticles = createSelector(
  selectHomePage,
  (HomePage) => HomePage.bestBoArticles
);
export const retrieveTrendBoArticles = createSelector(
  selectHomePage,
  (HomePage) => HomePage.trendBoArticles
);
export const retrieveNewsBoArticles = createSelector(
  selectHomePage,
  (HomePage) => HomePage.newsBoArticles
);
