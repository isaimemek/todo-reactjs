import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodosContext } from "../../../components";
import "./AddToList.css";

const newThing = { id: 0, thingToDo: "", completed: false };

function AddToList() {
  const { todos, setTodos } = useContext(TodosContext);
  const [currentText, setCurrentText] = useState(newThing);

  const onChangeInput = (e) => {
    setCurrentText({ ...currentText, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (currentText.thingToDo === "") {
      return false;
    }
    currentText.id = uuidv4();
    setTodos([...todos, currentText]);
    setCurrentText(newThing);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="thingToDo"
          className="new-todo"
          value={currentText.thingToDo}
          placeholder="What needs to be done?"
          onChange={onChangeInput}
          autoFocus
        />
      </div>
    </form>
  );
}

export default AddToList;
