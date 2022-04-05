import { createContext, useState } from "react";

const TodosContext = createContext("");

export const Todos = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const values = {
    todos,
    setTodos,
  };
  return (
    <TodosContext.Provider value={values}>{children}</TodosContext.Provider>
  );
};

export default TodosContext;
