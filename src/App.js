import React from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { BsCheckSquare } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <TodoProvider>
      <div className="min-vh-100 bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="text-center mb-4">
                <BsCheckSquare className="text-primary fs-1 mb-2" />
                <h1 className="h2">Task Master</h1>
              </div>
              <AddTodoForm />
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;