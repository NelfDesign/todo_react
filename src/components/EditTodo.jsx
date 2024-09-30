import { useState } from "react";
import Button from "./button";
import { useTodoDispatcher } from "../context/todoContext";

export default function EditTodo({ todo }) {
  const [value, setValue] = useState(todo.content);
  const dispatch = useTodoDispatcher();

  function handleChange(e) {
    const text = e.target.value;
    setValue(text);
  }

  function handleKeyDown(e) {
    if (e.code === "Enter") {
      handleClick();
    }
  }

  function handleClick() {
    if (value.length) {
      dispatch({
        type: "EDIT_TODO",
        id: todo.id,
        content: value,
      });
      setValue("");
    }
  }

  return (
    <div className="d-flex flex-row justify-content-center align-items-center mb-20">
      <input
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        type="text"
        value={value}
        className="mr-15 flex-fill"
        placeholder="Ajouter une tâche"
      />
      <Button
        onClick={() =>
          dispatch({
            type: "TOGGLE_TODO_EDIT",
            id: todo.id,
          })
        }
        className="mr-15"
        text="Annuler"
      />
      <Button onClick={handleClick} text="Soumettre" />
    </div>
  );
}
