import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { View, Text, Button } from "react-native";
import { RootStackParams } from "../StackNavigator";

type HomeScreenProps = NativeStackNavigationProp<RootStackParams, "Chat">;

const HomeScreen: FC = () => {
    const navigation = useNavigation<HomeScreenProps>();

    return (
        <View>
            <Text>Home</Text>
            <Button
                title="Go to chat"
                onPress={() => navigation.navigate("Chat")}
            />
        </View>
    );
};

export default HomeScreen;
