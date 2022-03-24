import { FilterAndEdit } from "../manageList";
import "./Body.css";

function Body({ todos, setTodos, destroyTodo }) {
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
      <FilterAndEdit
        setTodos={setTodos}
        todos={todos}
        checkTodo={checkTodo}
        destroyTodo={destroyTodo}
      />
    </section>
  );
}

export default Body;
