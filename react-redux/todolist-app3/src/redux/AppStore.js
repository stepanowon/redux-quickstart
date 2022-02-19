import { createStore, applyMiddleware } from "redux";
import RootReducer from "./RootReducer";

/*
const mw1 = (store) => (next) => (action) => {
  console.log("### mw1 전");
  next(action);
  console.log("### mw1 후");
};

const mw2 = (store) => (next) => (action) => {
  console.log("## mw2 전");
  next(action);
  console.log("## mw2 후");
};
*/

const logger = (store) => (next) => (action) => {
  console.log("### action 실행 : ", action);
  console.log("### reducer 실행 전 상태 : ", store.getState());
  next(action);
  console.log("### reducer 실행 후 상태 : ", store.getState());
};

//const AppStore = createStore(RootReducer, applyMiddleware(mw1, mw2));
const AppStore = createStore(RootReducer, applyMiddleware(logger));
export default AppStore;
