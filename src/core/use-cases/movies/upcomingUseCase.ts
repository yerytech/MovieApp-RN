import { HttpAdapter } from "../../../config/adapters/http/http.adapters";
import { MovieDBResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

export const upcomingUseCase = async (
  fetcher: HttpAdapter
): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<MovieDBResponse>("/upcoming");
    return upcoming.results.map(MovieMapper.fromMovieDbREsultToEntity);

    return [];
  } catch (error) {
    throw new Error("Error fetching movies - UpComing ");
  }
};
