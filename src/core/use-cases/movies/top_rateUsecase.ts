import { HttpAdapter } from "../../../config/adapters/http/http.adapters";
import { MovieDBResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

export const topratedUseCase = async (
  fetcher: HttpAdapter
): Promise<Movie[]> => {
  try {
    const top_rated = await fetcher.get<MovieDBResponse>("/top_rated");
    return top_rated.results.map(MovieMapper.fromMovieDbREsultToEntity);

    return [];
  } catch (error) {
    throw new Error("Error fetching movies - Top_rated ");
  }
};
