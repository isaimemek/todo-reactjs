import { useContext, useState } from "react";
import { selectedContext } from "../../declareExport/Context";
import "./FilterAndEdit.css";

function FilterAndEdit({ todos, checkTodo, destroyTodo, setTodos }) {
  const filterSelected = useContext(selectedContext);
  const [clickedId, setClickedId] = useState(false);
  const [currentText, setCurrentText] = useState("");

  const editInProgress = (id) => {
    setClickedId((state) => ({
      ...state,
      [id]: !state[id],
    }));
  };

  const applyChanges = (id) => {
    if (currentText.value !== "") {
      let editedTodo = todos?.map((todo) => {
        if (todo.thingToDo !== currentText.value) {
          todo.completed = false;
        }
        if (todo.id === id) {
          todo.thingToDo = currentText.value;
        }
        return todo;
      });
      editInProgress(id);
      setTodos(editedTodo);
    } else {
      destroyTodo(id);
    }
  };

  const handleEnter = (e, id) => {
    if (e.key === "Enter") {
      applyChanges(id);
    }
  };

  var filteredTodos = todos.filter(function (todo) {
    switch (true) {
      case filterSelected === "active":
        return !todo.completed;
      case filterSelected === "completed":
        return todo.completed;
      default:
        return true;
    }
  });

  return (
    <ul className="todo-list">
      {filteredTodos.map((item) => (
        <li
          key={item.id}
          className={`${item.completed ? "completed" : ""} ${
            clickedId[item.id] ? "editing" : ""
          }`}
        >
          <div className="view">
            <input
              value={item.thingToDo}
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => checkTodo(item.id)}
            />
            <label onDoubleClick={() => editInProgress(item.id)}>
              {item.thingToDo}
            </label>
            <button
              onClick={() => destroyTodo(item.id)}
              className="destroy"
            ></button>
          </div>
          {clickedId[item.id] ? (
            <input
              className="edit"
              defaultValue={item.thingToDo}
              onChange={(e) => setCurrentText({ value: e.target.value })}
              onBlur={() => applyChanges(item.id)}
              onKeyDown={(e) => handleEnter(e, item.id)}
              autoFocus
            />
          ) : (
            <></>
          )}
        </li>
      ))}
    </ul>
  );
}

export default FilterAndEdit;
