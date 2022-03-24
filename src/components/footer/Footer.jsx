import React from "react";
import "./Footer.css";

function Footer({ todos, isSelected, setIsSelected, setTodos }) {
  let notCompletedTodos = todos.filter((todo) => {
    return !todo.completed;
  });

  let completedTodos = todos.length - notCompletedTodos.length;

  return (
    <div className="footer">
      <div>
        <span className="todo-count">
          <strong> {notCompletedTodos.length} </strong>
          items left
        </span>
        <ul className="filters">
          <li>
            <a
              href="#/"
              onClick={() => setIsSelected("all")}
              className={`${isSelected === "all" ? "selected" : ""}`}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/Active"
              onClick={() => setIsSelected("active")}
              className={`${isSelected === "active" ? "selected" : ""}`}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/Completed"
              onClick={() => setIsSelected("completed")}
              className={`${isSelected === "completed" ? "selected" : ""}`}
            >
              Completed
            </a>
          </li>
        </ul>
      </div>
      {completedTodos === 0 ? (
        <></>
      ) : (
        <button
          className="clear-completed"
          onClick={() => setTodos(notCompletedTodos)}
        >
          Clear completed
        </button>
      )}

      <div className="info">
        <p>Click to edit a todo</p>
        <p>
          Designed by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>Adapted to ReactJS by Isa Imemek</p>
      </div>
    </div>
  );
}

export default React.memo(Footer);
