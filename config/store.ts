import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../shared/reducers';

const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducer, middleware);