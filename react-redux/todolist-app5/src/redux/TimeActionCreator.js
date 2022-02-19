import { TIME_ACTION } from "./TimeReducer";

const changeTime = (isChange) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      isChange ? resolve({ currentTime: new Date() }) : reject();
    }, 1000)
  );
};

const TimeActionCreator = {
  asyncChangeTime() {
    return { type: TIME_ACTION.CHANGE_TIME, payload: changeTime(true) };
  },
};

export default TimeActionCreator;
