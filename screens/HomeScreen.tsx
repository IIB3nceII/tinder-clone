import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { IRootState } from "../shared/reducers";
import { RootStackParams } from "../StackNavigator";
import { logout } from "../shared/reducers/authentication";

type HomeScreenNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  "Chat"
>;

interface IHomeScreenProps extends StateProps, DispatchProps {}

const HomeScreen: FC<IHomeScreenProps> = (props) => {
  const { logout } = props;

  const navigation = useNavigation<HomeScreenNavigationProps>();

  return (
    <View>
      <Text>Home</Text>
      <Button title="Go to chat" onPress={() => navigation.navigate("Chat")} />
      <Button title="LogOut" onPress={logout} />
    </View>
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
