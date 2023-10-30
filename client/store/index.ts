import { createBrowserHistory } from 'history';
import { Action, AnyAction, applyMiddleware, legacy_createStore as createStore, Middleware } from 'redux';
import { createReduxHistoryContext } from 'redux-first-history';
import { createLogger } from 'redux-logger';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';

import createRootReducer from './reducers';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
});

const middlewares: Middleware[] = [routerMiddleware, thunk];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({ collapsed: true, diff: true });
  middlewares.push(logger);
}

const middleware = applyMiddleware(...middlewares);
const rootReducer = createRootReducer(routerReducer);

export const store = createStore(
  rootReducer,
  middleware,
);

export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof rootReducer>;

export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, any, Action>;
