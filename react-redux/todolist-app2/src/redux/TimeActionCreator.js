import { TIME_ACTION } from "./TimeReducer";

const TimeActionCreator = {
  changeTime() {
    return { type: TIME_ACTION.CHANGE_TIME, payload: { currentTime: new Date() } };
  },
};

export default TimeActionCreator;
