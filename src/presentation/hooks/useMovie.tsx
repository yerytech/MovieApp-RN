import { useEffect, useState } from "react";
import { getMovieByIdUseCase, getMovieCastUseCase } from "../../core/use-cases";
import { movieDBFecher } from "../../config/adapters/http/movieDb.adapters";
import { FullMovie } from "../../core/entities/movie.entity";
import { Cast } from "../../core/entities/cast.entity";

export const useMovie = (movieId: number) => {
  const [isLoading, setIsloading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>();
  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setIsloading(true);
    const fullMoviePromise = getMovieByIdUseCase(movieDBFecher, movieId);
    const castPromise = getMovieCastUseCase(movieDBFecher, movieId);

    const [fullMovie, cast] = await Promise.all([
      fullMoviePromise,
      castPromise,
    ]);

    setMovie(fullMovie);
    setCast(cast);
    setIsloading(false);
  };
  return {
    isLoading,
    movie,
    cast,
  };
};
