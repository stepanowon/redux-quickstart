export const TIME_ACTION = {
  CHANGE_TIME_REQUEST: "changeTimeRequest",
  CHANGE_TIME_COMPLETED: "changeTimeCompleted",
  CHANGE_TIME_FAILED: "changeTimeFailed",
};

const initialState = {
  currentTime: new Date(),
  isChanging: false,
};
const TimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TIME_ACTION.CHANGE_TIME_REQUEST:
      return { ...state, isChanging: true };
    case TIME_ACTION.CHANGE_TIME_COMPLETED:
      return { ...state, currentTime: action.payload.currentTime, isChanging: false };
    case TIME_ACTION.CHANGE_TIME_FAILED:
      return { ...state, isChanging: false };
    default:
      return state;
  }
};

export default TimeReducer;
