import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import { Movie } from "../../../core/entities/movie.entity";
import { FlatList } from "react-native-gesture-handler";
import { MoviePoster } from "./MoviePoster";
import { useEffect, useRef } from "react";
interface Props {
  movies: Movie[];
  title?: string;
  loadNextPage?: () => void;
}
export const HorizontalCarousel = ({ movies, title, loadNextPage }: Props) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isEndREached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;
    if (!isEndREached) return;

    isLoading.current = true;
    // cargar las siguientes movies
    loadNextPage && loadNextPage();
  };
  return (
    <View style={{ height: title ? 260 : 220 }}>
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: 300,
            marginLeft: 10,
            marginBottom: 10,
          }}
        >
          {title}
        </Text>
      )}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        renderItem={({ item, index }) => (
          <MoviePoster
            movie={item}
            width={120}
            height={200}
            key={`${item.id}-${index}`}
          />
        )}
        onScroll={(event) => onScroll(event)}
      />
    </View>
  );
};
