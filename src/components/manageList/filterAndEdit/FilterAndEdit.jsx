import { useContext, useState } from "react";
import { SelectionContext, TodosContext } from "../../../components";
import { RemoveFromList } from "../../manageList";
import "./FilterAndEdit.css";

function FilterAndEdit({ checkTodo }) {
  const { todos, setTodos } = useContext(TodosContext);
  const { isSelected } = useContext(SelectionContext);

  const [clickedId, setClickedId] = useState(false);
  const [currentText, setCurrentText] = useState("");

  const handleDestroy = (id) => {
    RemoveFromList(id, todos, setTodos);
  };

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
      handleDestroy(id);
    }
  };

  const handleEnter = (e, id) => {
    if (e.key === "Enter") {
      applyChanges(id);
    }
  };

  var filteredTodos = todos.filter(function (todo) {
    switch (true) {
      case isSelected === "active":
        return !todo.completed;
      case isSelected === "completed":
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
              onClick={() => handleDestroy(item.id)}
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
