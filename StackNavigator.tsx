import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { connect } from "react-redux";
import ChatScreen from "./screens/ChatScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { IRootState } from "./shared/reducers";

export type RootStackParams = {
  Home: undefined;
  Chat: undefined;
  Login: undefined;
};

interface IStackNavigatorProps extends StateProps {}

const Stack = createNativeStackNavigator<RootStackParams>();

const StackNavigator: FC<IStackNavigatorProps>= (props) => {
  const {user} = props;

  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </>
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

const mapStateToProps = ({ authentication }: IRootState) => ({
  user: authentication.account.name,
  state: authentication,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(StackNavigator);
