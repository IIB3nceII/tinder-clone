import { IUser } from "../../model/user.model";

const initialState = {
  loading: false,
  isAuthenticated: false,
  account: {} as IUser,
  idToken: null as unknown as string,
};

export type AuthenticationState = Readonly<typeof initialState>;

export default (
  state: AuthenticationState = initialState,
  action: any
): AuthenticationState => {
  switch (action.type) {
    default:
      return state;
  }
};
