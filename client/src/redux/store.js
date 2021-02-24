import { applyMiddleware, createStore } from "redux";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist"; // Make Cart Items stay in cart whenever the page is refreshing
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root.saga";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
const defaultExport = { store, persistor };
export default defaultExport;
