import { useState } from "react";
import Button from "./button";
import { useTodoDispatcher } from "../context/todoContext";

export default function AddTodo() {
  const [content, setContent] = useState("");
  const dispatch = useTodoDispatcher();

  function handleChange(e) {
    const text = e.target.value;
    setContent(text);
  }

  function handleKeyDown(e) {
    if (e.code === "Enter") {
      handleClick();
    }
  }

  function handleClick() {
    if (content.length) {
      dispatch({
        type: "ADD_TODO",
        content,
      });
      setContent("");
    }
  }

  return (
    <div className="d-flex flex-row justify-content-center align-items-center mb-20">
      <input
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        type="text"
        value={content}
        placeholder="Ajouter une Todo"
        className="mr-15 flex-fill"
      />
      <Button text="Valider" onClick={handleClick} />
      {/* <button  className="btn btn-primary">
        Soumettre
      </button> */}
    </div>
  );
}
