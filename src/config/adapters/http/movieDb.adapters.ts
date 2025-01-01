import { AxiosAdapter } from "./axios.adapter";
// process.env.MOVIEDB_API_KEY,
export const movieDBFecher = new AxiosAdapter({
  baseUrl: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "b14ccfd4ff10749633807ea61465b00e",
    language: "es",
  },
});
