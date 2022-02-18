import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const TodoItem = ({ todoitem, callbacks }) => {
  const navigate = useNavigate();
  let itemClassName = "list-group-item";
  if (todoitem.done) itemClassName += " list-group-item-success";
  return (
    <li className={itemClassName}>
      <span className={todoitem.done ? "todo-done pointer" : "pointer"} onClick={() => callbacks.toggleDone(todoitem.id)}>
        {todoitem.todo}
        {todoitem.done ? " (완료)" : ""}
      </span>
      <span className="float-end badge bg-secondary pointer m-1" onClick={() => navigate("/todos/edit/" + todoitem.id)}>
        편집
      </span>
      <span className="float-end badge bg-secondary pointer m-1" onClick={() => callbacks.deleteTodo(todoitem.id)}>
        삭제
      </span>
    </li>
  );
};
TodoItem.propTypes = {
  todoitem: PropTypes.object.isRequired,
  callbacks: PropTypes.object.isRequired,
};
export default TodoItem;
