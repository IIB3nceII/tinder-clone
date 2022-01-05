import React, { FC, useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { connect, useDispatch } from "react-redux";
import { IRootState } from "../shared/reducers";
import { signInWithGoogle } from "../shared/reducers/authentication";
import * as Google from "expo-google-app-auth";
import googleConfig from "../google.config";
import {
  GoogleAuthProvider,
  signInWithCredential,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase.config";
import { IUser } from "../model/user.model";

interface ILoginScreenProps extends StateProps, DispatchProps {}

const LoginScreen: FC<ILoginScreenProps> = (props) => {
  const { signInWithGoogle } = props;

  return (
    <View>
      <Button title="Login" onPress={signInWithGoogle} />
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
