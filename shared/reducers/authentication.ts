import { IUser } from "../../model/user.model";
import { FAILURE, REQUEST, SUCCESS } from "./action-type.util";
import * as Google from "expo-google-app-auth";
import googleConfig from "../../google.config";
import {
  GoogleAuthProvider,
  signInWithCredential,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase.config";

export const ACTION_TYPES = {
  LOGIN: "authentication/LOGIN",
  LOGIN_ERROR: "authentication/LOGIN_ERROR",
  LOGOUT: "authentication/LOGOUT",
  LOGOUT_ERROR: "authentication/LOGOUT_ERROR",
  ERROR_MESSAGE: "authentication/ERROR_MESSAGE",
};

const initialState = {
  loading: false,
  isAuthenticated: false,
  loginSuccess: false,
  loginError: false,
  account: {} as IUser,
  errorMessage: null as unknown as string,
  idToken: null as unknown as string,
};

export type AuthenticationState = Readonly<typeof initialState>;

export default (
  state: AuthenticationState = initialState,
  action: any
): AuthenticationState => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_ERROR:
      return {
        ...initialState,
        errorMessage: action.payload,
        loginError: true,
      };
    case ACTION_TYPES.LOGIN:
      return {
        ...state,
        loading: false,
        loginError: false,
        loginSuccess: true,
        account: action.payload,
      };
    case ACTION_TYPES.LOGOUT_ERROR:
      return {
        ...initialState,
        errorMessage: action.payload,
        loginError: true,
      };
    case ACTION_TYPES.LOGOUT:
      return {
        ...initialState,
        account: {} as IUser,
      };
    case ACTION_TYPES.ERROR_MESSAGE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export const signInWithGoogle: () => void = () => async (dispatch: any) => {
  await Google.logInAsync(googleConfig)
    .then(async (result) => {
      // console.log(result);
      if (result.type === "success") {
        const { idToken, accessToken, user } = result;
        const credential = GoogleAuthProvider.credential(idToken, accessToken);
        await signInWithCredential(auth, credential);
        dispatch({ type: ACTION_TYPES.LOGIN, payload: user });
      }
      return Promise.reject();
    })
    .catch((err) => {
      dispatch({ type: ACTION_TYPES.LOGIN_ERROR, payload: err.message });
    });
};

export const logout: () => void = () => async (dispatch: any) => {
  signOut(auth)
    .then((res) => {
      dispatch({ type: ACTION_TYPES.LOGOUT });
    })
    .catch((err) => {
      dispatch({ type: ACTION_TYPES.LOGOUT_ERROR, payload: err.message });
    });
};
