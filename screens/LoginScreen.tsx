import React, { FC } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { IRootState } from "../shared/reducers";
import * as Google from "expo-google-app-auth";
import googleConfig from "../google.config";
import {
  GoogleAuthProvider,
  signInWithCredential,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase.config";

interface ILoginScreenProps extends StateProps, DispatchProps {}

const LoginScreen: FC<ILoginScreenProps> = (props) => {
  const { user } = props;

  const signInWithGoogle = async () => {
    Google.logInAsync(googleConfig)
      .then(async (result) => {
        if (result.type === "success") {
          const { idToken, accessToken } = result;
          const credential = GoogleAuthProvider.credential(
            idToken,
            accessToken
          );
          await signInWithCredential(auth, credential);
          console.log('login succes')
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <View>
      <Text>{user}</Text>
      <Button title="Login" onPress={signInWithGoogle} />
    </View>
  );
};

const mapStateToProps = ({ authentication }: IRootState) => ({
  user: authentication.account.name,
});

const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
