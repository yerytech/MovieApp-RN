import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/home/HomeScreen";
import { DetailsScreen } from "../screens/details/DetailsScreen";

export type RootStackParamps = {
  Home: undefined;
  Details: { movieId: number };
};
const Stack = createStackNavigator<RootStackParamps>();
export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        options={{
          animation: "fade",
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          animation: "fade",
        }}
        name="Details"
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
};
