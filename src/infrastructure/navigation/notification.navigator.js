import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NotificationScreen } from "../../features/notifications/screens/notification.screen";

const NotificationStack = createStackNavigator();
export const NotificationsNavigator = () => (
  <NotificationStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <NotificationStack.Screen name="Message" component={NotificationScreen} />
  </NotificationStack.Navigator>
);
