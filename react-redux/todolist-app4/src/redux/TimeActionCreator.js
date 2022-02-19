import { TIME_ACTION } from "./TimeReducer";

const TimeActionCreator = {
  changeTimeRequest() {
    return { type: TIME_ACTION.CHANGE_TIME_REQUEST };
  },
  changeTimeCompleted(currentTime) {
    return { type: TIME_ACTION.CHANGE_TIME_COMPLETED, payload: { currentTime: currentTime } };
  },
  //thunk 함수를 리턴함
  asyncChangeTime() {
    //의도적 지연시간 1초
    return (dispatch, getState) => {
      dispatch(this.changeTimeRequest());
      setTimeout(() => {
        dispatch(this.changeTimeCompleted(new Date()));
      }, 1000);
    };
  },
};

export default TimeActionCreator;
