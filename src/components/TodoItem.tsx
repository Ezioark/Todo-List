import React from 'react';
import { Todo } from '../types/todo';
import { useTodo } from '../context/TodoContext';
import { Calendar, CheckCircle2, Circle, Trash2 } from 'lucide-react';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { dispatch } = useTodo();

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
  };

  const handleDelete = () => {
    dispatch({ type: 'DELETE_TODO', payload: todo.id });
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-4">
        <button
          onClick={handleToggle}
          className="text-gray-500 hover:text-green-500 transition-colors"
        >
          {todo.completed ? (
            <CheckCircle2 className="w-6 h-6 text-green-500" />
          ) : (
            <Circle className="w-6 h-6" />
          )}
        </button>
        <div>
          <h3
            className={`text-lg font-medium ${
              todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
            }`}
          >
            {todo.title}
          </h3>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            <span>{new Date(todo.dueDate).toLocaleDateString()}</span>
            {todo.recurrence !== 'none' && (
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {todo.recurrence}
              </span>
            )}
          </div>
        </div>
      </div>
      <button
        onClick={handleDelete}
        className="text-gray-400 hover:text-red-500 transition-colors"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};

export default TodoItem;