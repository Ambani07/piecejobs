import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurant.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";
import { HomeScreen } from "../../features/home/screens/home.screen";
import { JobListScreen } from "../../features/home/screens/home-job-list.sreen";
import { JobDetailScreen } from "../../features/home/screens/home-job-details.screen";

const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="JobList" component={HomeScreen} />
      <HomeStack.Screen name="JobCategoryList" component={JobListScreen} />
      <HomeStack.Screen name="JobDetails" component={JobDetailScreen} />
    </HomeStack.Navigator>
  );
};
