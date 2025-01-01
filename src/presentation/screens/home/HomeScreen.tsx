import { Text, View } from "react-native";
import { useMovies } from "../../hooks/useMovies";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PosterCarousel } from "../../components/movies/PosterCarousel";
import { HorizontalCarousel } from "../../components/movies/HorizontalCarousel";
import { FullScreenLoader } from "../../components/loaders/FullScreenLoader";

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
    popularNextPage,
  } = useMovies();
  if (isLoading) return <FullScreenLoader />;
  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, paddingBottom: 30 }}></View>
      {/* Carousell principal  */}
      <PosterCarousel movies={nowPlaying} />
      {/* Carousel Horizontal  */}
      <HorizontalCarousel
        loadNextPage={popularNextPage}
        title="Populares"
        movies={popular}
      />
      {/* Top Rated */}
      <HorizontalCarousel
        title="Mejor calificadas"
        movies={topRated}
      />
      {/* Proxima mente  */}
      <HorizontalCarousel
        title="Proximamente"
        movies={upcoming}
      />
    </ScrollView>
  );
};
