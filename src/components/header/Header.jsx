import { AddToList } from "../manageList";
import { useState, useContext } from "react";
import { TodosContext } from "../../components";
import "./Header.css";

function Header() {
  const { todos, setTodos } = useContext(TodosContext);
  const [isChecked, setIsChecked] = useState(false);

  const toggleAll = (isChecked) => {
    let toggleTodos = todos?.map((todo) => {
      if (isChecked === false) {
        todo.completed = true;
      }
      if (isChecked === true) {
        todo.completed = false;
      }
      return todo;
    });
    setTodos(toggleTodos);
    setIsChecked((prevState) => !prevState);
  };

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <AddToList addTodo={setTodos} todos={todos} />
      </header>
      <section className="main">
        {todos.length === 0 ? (
          <></>
        ) : (
          <>
            <input
              id="customBox"
              className="toggle-all"
              type="checkbox"
              checked={isChecked}
              onChange={() => {
                toggleAll(isChecked);
              }}
            />
            <label htmlFor="customBox"> Mark all as complete </label>
          </>
        )}
      </section>
    </div>
  );
}

export default Header;
