import produce from "immer";
//액션 타입명의 오타를 줄이기 위한 상수
export const TODO_ACTION = {
  ADD_TODO: "addTodo",
  DELETE_TODO: "deleteTodo",
  TOGGLE_DONE: "toggleDone",
  UPDATE_TODO: "updateTodo",
};

const initialState = {
  todolist: [
    { id: 1, todo: "ES6학습", desc: "설명1", done: false },
    { id: 2, todo: "React학습", desc: "설명2", done: false },
    { id: 3, todo: "ContextAPI 학습", desc: "설명3", done: true },
    { id: 4, todo: "야구경기 관람", desc: "설명4", done: false },
  ],
};
const TodoReducer = (state = initialState, action) => {
  let index;
  switch (action.type) {
    case TODO_ACTION.ADD_TODO:
      return produce(state, (draft) => {
        draft.todolist.push({ id: new Date().getTime(), todo: action.payload.todo, desc: action.payload.desc, done: false });
      });
    case TODO_ACTION.DELETE_TODO:
      index = state.todolist.findIndex((item) => item.id === action.payload.id);
      return produce(state, (draft) => {
        draft.todolist.splice(index, 1);
      });
    case TODO_ACTION.TOGGLE_DONE:
      index = state.todolist.findIndex((item) => item.id === action.payload.id);
      return produce(state, (draft) => {
        draft.todolist[index].done = !draft.todolist[index].done;
      });
    case TODO_ACTION.UPDATE_TODO:
      index = state.todolist.findIndex((item) => item.id === action.payload.id);
      return produce(state, (draft) => {
        draft.todolist[index] = { ...action.payload };
      });
    default:
      return state;
  }
};
export default TodoReducer;
