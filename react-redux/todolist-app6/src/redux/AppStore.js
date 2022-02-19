import { createStore, applyMiddleware } from "redux";
import RootReducer from "./RootReducer";
//import thunk from "redux-thunk";
//import promiseMiddleware from "redux-promise-middleware";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const logger = (store) => (next) => (action) => {
  console.log("### action 실행 : ", action);
  //console.log("### action 변경전 상태 : ", store.getState());
  next(action);
  //console.log("### action 변경후 상태 : ", store.getState());
};

//const AppStore = createStore(RootReducer, applyMiddleware(logger, thunk));
//const AppStore = createStore(RootReducer, applyMiddleware(logger, promiseMiddleware));
const AppStore = createStore(RootReducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default AppStore;
