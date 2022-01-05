import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, Button } from "react-native";
import { Container } from "../components/ui";
import { RootStackParams } from "../StackNavigator";

type ChatScreenNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  "Home"
>;

const ChatScreen = () => {
  const navigation = useNavigation<ChatScreenNavigationProps>();
  return (
    <Container>
      <Text>Chat</Text>
      <Button title="Back" onPress={() => navigation.navigate("Home")} />
    </Container>
  );
};

export default ChatScreen;
