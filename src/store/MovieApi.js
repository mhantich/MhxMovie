import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Function to get the current date in "YYYY-MM-DD" format

export const MovieApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl:`https://api.themoviedb.org/3` }),
  reducerPath: "MovieApi",
  tagTypes: ["Movie",'MovieRoad','MovieUpComing',"MovieDetails","MovieDetailsRev","Tv",'Trading','TradingDay'],
  endpoints: (build) => ({
    GetMovie: build.query({
      query: () => `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=31c94a1859c33186bfdef85564ce63f2`,
      providesTags: ["Movie"],
    }),
    GetMovieRoad: build.query({
      query: () => `/movie/top_rated?language=en-US&page=1&api_key=31c94a1859c33186bfdef85564ce63f2`,
      providesTags: ["MovieUpComing"],
    }),
    GetMovieUpComing: build.query({
      query: () => `/movie/upcoming?language=en-US&page=1&api_key=31c94a1859c33186bfdef85564ce63f2`,
      providesTags: ["MovieUpComing"],
    }),
    GetMovieDetails: build.query({
      query: (id) => `/movie/${id}?language=en-US&append_to_response=credits,videos,images&api_key=31c94a1859c33186bfdef85564ce63f2`,
      providesTags: ["MovieDetails"],
    }),
    GetMovieDetailsRev: build.query({
      query: (id) => `/movie/${id}/reviews?language=en-US&page=1api_key=31c94a1859c33186bfdef85564ce63f2`,
      providesTags: ["MovieDetailsRev"],
    }),
    GetTv: build.query({
      query: () => `/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=31c94a1859c33186bfdef85564ce63f2`,
      providesTags: ["Tv"],
    }),
    GetTrading: build.query({
      query: () => `trending/all/week?language=en-US&api_key=31c94a1859c33186bfdef85564ce63f2`,
      providesTags: ["Trading"],
    }),
    GetTradingDay: build.query({
      query: () => `trending/all/day?language=en-US&api_key=31c94a1859c33186bfdef85564ce63f2`,
      providesTags: ["TradingDay"],
    }),
  }),
});
export const { useGetMovieQuery,useGetMovieRoadQuery,useGetMovieUpComingQuery,useGetMovieDetailsQuery ,useGetMovieDetailsRevQuery,useGetTvQuery,useGetTradingQuery,useGetTradingDayQuery} = MovieApi;

