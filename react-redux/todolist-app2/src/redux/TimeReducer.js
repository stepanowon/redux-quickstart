export const TIME_ACTION = {
  CHANGE_TIME: "changeTime",
};

const initialState = {
  currentTime: new Date(),
};
const TimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TIME_ACTION.CHANGE_TIME:
      return { ...state, currentTime: action.payload.currentTime };
    default:
      return state;
  }
};

export default TimeReducer;
