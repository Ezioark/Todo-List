import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';
import { BsPlus } from 'react-icons/bs';

const AddTodoForm = () => {
  const { dispatch } = useTodo();
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [recurrence, setRecurrence] = useState('none');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !dueDate) return;

    const newTodo = {
      id: crypto.randomUUID(),
      title: title.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
      dueDate: new Date(dueDate).toISOString(),
      recurrence,
    };

    dispatch({ type: 'ADD_TODO', payload: newTodo });
    setTitle('');
    setDueDate('');
    setRecurrence('none');
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
      <div className="mb-3">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
          className="form-control"
          required
        />
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <select
            value={recurrence}
            onChange={(e) => setRecurrence(e.target.value)}
            className="form-select"
          >
            <option value="none">No Recurrence</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary d-flex align-items-center justify-content-center gap-2"
      >
        <BsPlus className="fs-5" />
        Add Task
      </button>
    </form>
  );
};

export default AddTodoForm;