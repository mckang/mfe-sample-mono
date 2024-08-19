import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import TodoList from "./components/todolist";
import TodoForm from "./components/todoform";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="container">
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <Routes>
        <Route
          path="/"
          element={<TodoList />}
        />
        <Route
          path="/add"
          element={<TodoForm />}
        />
        <Route
          path="/edit/:id"
          element={<TodoForm type="edit" />}
        />
      </Routes>
    </div>
  );
}

export default App;