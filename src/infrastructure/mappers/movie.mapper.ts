import { FullMovie, Movie } from "../../core/entities/movie.entity";
import type { MovieDBMovie, Result } from "../interfaces/movie-db.responses";

export class MovieMapper {
  static fromMovieDbREsultToEntity(result: Result): Movie {
    return {
      id: result.id,
      title: result.title,
      desciption: result.overview,
      releaseDate: new Date(result.release_date),
      rating: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
    };
  }

  static fromMovieDbToEntity(movie: MovieDBMovie): FullMovie {
    return {
      id: movie.id,
      title: movie.title,
      desciption: movie.overview,
      releaseDate: new Date(movie.release_date),
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      genres: movie.genres.map((genr) => genr.name),
      duration: movie.runtime,
      budget: movie.budget,
      originalTitle: movie.original_title,
      ProductionCompanies: movie.production_companies.map((comp) => comp.name),
    };
  }
}
