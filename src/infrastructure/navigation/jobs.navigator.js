import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { JobsSearchScreen } from "../../features/job/screens/jobs-search.component";

const JobStack = createStackNavigator();
export const JobsNavigator = () => (
  <JobStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <JobStack.Screen name="JobSearch" component={JobsSearchScreen} />
  </JobStack.Navigator>
);
