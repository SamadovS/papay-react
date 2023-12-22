import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../types/screen";

const initialState: HomePageState = {
  topRestaurants: [],
  bestRestaurants: [],
  trendRestaurants: [],
  bestBoArticles: [],
  trendArticles: [],
  newsBoArticles: [],
};

const HomePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    topRestaurants: (state, action) => {
      state.topRestaurants = action.payload;
    },
    bestRestaurants: (state, action) => {
      state.bestRestaurants = action.payload;
    },
    trendRestaurants: (state, action) => {
      state.trendRestaurants = action.payload;
    },
    bestBoArticles: (state, action) => {
      state.bestBoArticles = action.payload;
    },
    trendArticles: (state, action) => {
      state.trendArticles = action.payload;
    },
    newsBoArticles: (state, action) => {
      state.newsBoArticles = action.payload;
    },
  },
});

export const {
  topRestaurants,
  bestRestaurants,
  trendRestaurants,
  bestBoArticles,
  trendArticles,
  newsArticles,
} = HomePageSlice.actions;

const HomePageReducer = HomePageSlice.reducer;
export default HomePageReducer;
