import { TIME_ACTION } from "./TimeReducer";

const TimeActionCreator = {
  changeTimeRequest() {
    return { type: TIME_ACTION.CHANGE_TIME_REQUEST };
  },
  changeTimeCompleted(currentTime) {
    return { type: TIME_ACTION.CHANGE_TIME_COMPLETED, payload: { currentTime: currentTime } };
  },
  changeTimeFailed() {
    return { type: TIME_ACTION.CHANGE_TIME_FAILED };
  },
};

export default TimeActionCreator;
