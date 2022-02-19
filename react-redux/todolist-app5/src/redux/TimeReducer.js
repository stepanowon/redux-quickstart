export const TIME_ACTION = {
  CHANGE_TIME: "CHANGE_TIME",
  CHANGE_TIME_PENDING: "CHANGE_TIME_PENDING",
  CHANGE_TIME_FULFILLED: "CHANGE_TIME_FULFILLED",
  CHANGE_TIME_REJECTED: "CHANGE_TIME_REJECTED",
};

const initialState = {
  currentTime: new Date(),
  isChanging: false,
};
const TimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TIME_ACTION.CHANGE_TIME_PENDING:
      return { ...state, isChanging: true };
    case TIME_ACTION.CHANGE_TIME_FULFILLED:
      return { ...state, currentTime: action.payload.currentTime, isChanging: false };
    case TIME_ACTION.CHANGE_TIME_REJECTED:
      return { ...state, isChanging: false };
    default:
      return state;
  }
};

export default TimeReducer;
