import { TODO_ACTION } from "./TodoReducer";

const TodoActionCreator = {
  addTodo(todo, desc) {
    return { type: TODO_ACTION.ADD_TODO, payload: { todo, desc } };
  },
  deleteTodo(id) {
    return { type: TODO_ACTION.DELETE_TODO, payload: { id } };
  },
  toggleDone(id) {
    return { type: TODO_ACTION.TOGGLE_DONE, payload: { id } };
  },
  updateTodo(id, todo, desc, done) {
    return { type: TODO_ACTION.UPDATE_TODO, payload: { id, todo, desc, done } };
  },
};
export default TodoActionCreator;
