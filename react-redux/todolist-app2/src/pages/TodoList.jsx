import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import TodoActionCreator from "../redux/TodoActionCreator";

const TodoList = (props) => {
  let todoItems = props.states.todolist.map((item) => {
    return <TodoItem key={item.id} todoitem={item} callbacks={props.callbacks} />;
  });
  return (
    <>
      <div className="row">
        <div className="col p-3">
          <Link className="btn btn-primary" to="/todos/add">
            할일 추가
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul className="list-group">{todoItems}</ul>
        </div>
      </div>
    </>
  );
};

TodoList.propTypes = {
  states: PropTypes.object.isRequired,
  callbacks: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  states: {
    todolist: state.todolist,
  },
});

const mapDispatchToProps = (dispatch) => ({
  callbacks: {
    deleteTodo: (id) => dispatch(TodoActionCreator.deleteTodo(id)),
    toggleDone: (id) => dispatch(TodoActionCreator.toggleDone(id)),
  },
});

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default TodoListContainer;
