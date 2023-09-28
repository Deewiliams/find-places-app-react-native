import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import Home from "../Screens/Home";
import PlaceDetails from "../Components/Home/placeDetails/PlaceDetails";

const HomeNavigation = () => {
  const isAndroid = true;
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
        ...(isAndroid && TransitionPresets.ModalSlideFromBottomIOS),
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen
        name="place-detail"
        component={PlaceDetails}
        screenOptions={{
          presentation: "model",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
