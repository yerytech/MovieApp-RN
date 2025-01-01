import { AxiosAdapter } from "./axios.adapter";

export const movieDBFecher = new AxiosAdapter({
  baseUrl: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: process.env.EXPO_PUBLIC_MOVIEDB_API_KEY,
    language: "es",
  },
});

// "b14ccfd4ff10749633807ea61465b00e",