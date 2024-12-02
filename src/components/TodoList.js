import React from 'react';
import { useTodo } from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { state } = useTodo();

  return (
    <div className="list-group mt-4">
      {state.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;