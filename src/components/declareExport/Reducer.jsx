export const listReducer = (modifyItem, action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      return modifyItem.filter((item) => item.thingToDo === action.payload);
    default:
      throw new Error();
  }
};

const initialState = { thingToDo: "" };

const [modifyItem, dispatchModifyItem] = useReducer(listReducer, initialState);
const { thingToDo } = modifyItem;

dispatchModifyItem({ type: "REMOVE_ITEM", payload: "userInput" });
