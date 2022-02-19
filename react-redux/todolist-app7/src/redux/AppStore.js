import { createStore, applyMiddleware } from "redux";
import RootReducer from "./RootReducer";
import thunk from "redux-thunk";
import TimeActionCreator from "./TimeActionCreator";
import TodoActionCreator from "./TodoActionCreator";
import { composeWithDevTools } from "redux-devtools-extension";

let AppStore;
if (process.env.NODE_ENV === "development") {
  const composeEnhancers = composeWithDevTools({ ...TimeActionCreator, ...TodoActionCreator });
  AppStore = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)));
} else {
  AppStore = createStore(RootReducer, applyMiddleware(thunk));
}

export default AppStore;
