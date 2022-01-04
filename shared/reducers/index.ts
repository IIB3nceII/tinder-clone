import { combineReducers } from 'redux';
import authentication, { AuthenticationState } from './authentication';

export interface IRootState {
    readonly authentication: AuthenticationState;
}

const appReducer = combineReducers<IRootState>({
    authentication,
});

const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
};

export default rootReducer;
