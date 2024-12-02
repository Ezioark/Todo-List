import React from 'react';
import { useTodo } from '../context/TodoContext';
import { BsCheck2Circle, BsCircle, BsTrash } from 'react-icons/bs';

const TodoItem = ({ todo }) => {
  const { dispatch } = useTodo();

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
  };

  const handleDelete = () => {
    dispatch({ type: 'DELETE_TODO', payload: todo.id });
  };

  return (
    <div className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <button
          onClick={handleToggle}
          className="btn btn-link text-decoration-none p-0 me-3"
        >
          {todo.completed ? (
            <BsCheck2Circle className="text-success fs-5" />
          ) : (
            <BsCircle className="text-secondary fs-5" />
          )}
        </button>
        <div>
          <h5 className={todo.completed ? 'text-decoration-line-through mb-1 text-secondary' : 'mb-1'}>
            {todo.title}
          </h5>
          <small className="text-muted">
            Due: {new Date(todo.dueDate).toLocaleDateString()}
            {todo.recurrence !== 'none' && (
              <span className="badge bg-primary ms-2">{todo.recurrence}</span>
            )}
          </small>
        </div>
      </div>
      <button
        onClick={handleDelete}
        className="btn btn-link text-danger p-0"
      >
        <BsTrash />
      </button>
    </div>
  );
};

export default TodoItem;