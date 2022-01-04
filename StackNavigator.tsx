import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ChatScreen from "./screens/ChatScreen";
import HomeScreen from "./screens/HomeScreen";

export type RootStackParams = {
  Home: undefined;
  Chat: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
