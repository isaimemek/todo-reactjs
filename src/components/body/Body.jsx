import { useContext } from "react";
import { FilterAndEdit } from "../manageList";
import { TodosContext } from "../../components";
import "./Body.css";

function Body() {
  const { todos, setTodos } = useContext(TodosContext);

  const checkTodo = (id) => {
    let toggleTodo = todos?.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(toggleTodo);
  };

  return (
    <section className="main">
      <FilterAndEdit setTodos={setTodos} todos={todos} checkTodo={checkTodo} />
    </section>
  );
}

export default Body;
