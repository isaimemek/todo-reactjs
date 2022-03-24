import { selectedContext } from "./components/declareExport/Context";
import { Header, Body, Footer } from "./components";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [isSelected, setIsSelected] = useState("all");

  const removeFromList = (id) => {
    const newList = todos.filter((item) => item.id !== id);

    setTodos(newList);
  };

  return (
    <div className="todoapp">
      <Header setTodos={setTodos} todos={todos} />
      <selectedContext.Provider value={isSelected}>
        <Body setTodos={setTodos} todos={todos} destroyTodo={removeFromList} />
      </selectedContext.Provider>
      {todos.length === 0 ? (
        <></>
      ) : (
        <Footer
          todos={todos}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          setTodos={setTodos}
        />
      )}
    </div>
  );
}

export default App;
