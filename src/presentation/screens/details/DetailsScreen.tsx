import { StackScreenProps } from "@react-navigation/stack";
import { Text } from "react-native";
import { RootStackParamps } from "../../navigation/Navigation";
import { useMovie } from "../../hooks/useMovie";
import { MovieHeader } from "../../components/movie/MovieHeader";
import { MovieDetails } from "../../components/movie/MovieDetails";
import { ScrollView } from "react-native-gesture-handler";
import { FullScreenLoader } from "../../components/loaders/FullScreenLoader";
interface Props extends StackScreenProps<RootStackParamps, "Details"> {}
export const DetailsScreen = ({ route }: Props) => {
  const { movieId } = route.params;
  const { isLoading, movie, cast } = useMovie(movieId);

  if (isLoading) return <FullScreenLoader />;

  return (
    <ScrollView>
      <MovieHeader
        poster={movie!.poster}
        title={movie!.title}
        originalTitle={movie!.originalTitle}
      />
      <MovieDetails
        movie={movie!}
        cast={cast!}
      />
    </ScrollView>
  );
};
