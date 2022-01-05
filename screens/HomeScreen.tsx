import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { FC, useLayoutEffect } from "react";
import {
  Image,
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { IRootState } from "../shared/reducers";
import { RootStackParams } from "../StackNavigator";
import { logout } from "../shared/reducers/authentication";
import tw from "tailwind-rn";

type HomeScreenNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  "Chat"
>;

interface IHomeScreenProps extends StateProps, DispatchProps {}

const HomeScreen: FC<IHomeScreenProps> = (props) => {
  const { account, logout } = props;
  const navigation = useNavigation<HomeScreenNavigationProps>();

  console.log(account);

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity>
          <Image
            source={{ uri: account.photoUrl }}
            style={tw("h-10 w-10 rounded-full")}
          />
        </TouchableOpacity>
      </View>

      <Text>Home</Text>
      <Button title="Go to chat" onPress={() => navigation.navigate("Chat")} />
      <Button title="LogOut" onPress={logout} />
    </SafeAreaView>
  );
};

const mapStateToProps = ({ authentication }: IRootState) => ({
  account: authentication.account,
  state: authentication,
});

const mapDispatchToProps = { logout };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
