const initialState = {};

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
