import { useEffect, useState } from "react";
import { Movie } from "../../core/entities/movie.entity";
import * as UseCases from "../../core/use-cases";
import { movieDBFecher } from "../../config/adapters/http/movieDb.adapters";
let popularPageNumber = 1;
export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFecher);
    const popularPromise = UseCases.popularUseCase(movieDBFecher);
    const topRatePromise = UseCases.topratedUseCase(movieDBFecher);
    const upcomingPromise = UseCases.upcomingUseCase(movieDBFecher);

    const [nowPlayingMovies, popularMovies, topRateMovies, upcomingMovies] =
      await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatePromise,
        upcomingPromise,
      ]);

    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRateMovies);
    setUpcoming(upcomingMovies);
    setIsLoading(false);
  };

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,

    // methods
    popularNextPage: async () => {
      popularPageNumber++;
      const popularMovies = await UseCases.popularUseCase(movieDBFecher, {
        page: popularPageNumber,
      });
      setPopular((prev) => [...prev, ...popularMovies]);
    },
  };
};
