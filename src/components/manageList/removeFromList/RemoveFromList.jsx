export function RemoveFromList(id, todos, setTodos) {
  const newList = todos.filter((item) => item.id !== id);

  setTodos(newList);
}
