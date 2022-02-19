import { all, fork, takeEvery, call, put } from "redux-saga/effects";

import TimeActionCreator from "../redux/TimeActionCreator";
import { TIME_ACTION } from "../redux/TimeReducer";

const changeTimeApi = (name) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve({ currentTime: new Date() });
    }, 1000)
  );
};

function* changeTime(action) {
  try {
    const response = yield call(changeTimeApi);
    yield put(TimeActionCreator.changeTimeCompleted(response.currentTime));
  } catch (e) {
    console.error(e);
    yield put(TimeActionCreator.changeTimeFailed());
  }
}

function* watcher_changeTime() {
  yield takeEvery(TIME_ACTION.CHANGE_TIME_REQUEST, changeTime);
}

export default function* timeSaga() {
  yield all([fork(watcher_changeTime)]);
}
