import { useNavigation } from "@react-navigation/native";
import React, { FC, useLayoutEffect } from "react";
import {
  View,
  Button,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { IRootState } from "../shared/reducers";
import { signInWithGoogle } from "../shared/reducers/authentication";
import tw from "tailwind-rn";

interface ILoginScreenProps extends StateProps, DispatchProps {}

const LoginScreen: FC<ILoginScreenProps> = (props) => {
  const { signInWithGoogle } = props;
  const navigation = useNavigation();

  return (
    <View style={tw("flex-1")}>
      <ImageBackground
        resizeMode="cover"
        style={tw("flex-1")}
        source={{ uri: "https://tinder.com/static/tinder.png" }}
      >
        <TouchableOpacity
          onPress={signInWithGoogle}
          style={[
            tw("absolute bottom-40 w-52 bg-white p-4 rounded-2xl"),
            { marginHorizontal: "25%" },
          ]}
        >
          <Text style={tw("font-semibold text-center")}>
            Sign in & get swiping
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = ({ authentication }: IRootState) => ({
  account: authentication.account,
  state: authentication,
});

const mapDispatchToProps = { signInWithGoogle };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
