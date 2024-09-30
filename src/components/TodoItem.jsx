import Button from "./button";
import { useTodoDispatcher } from "../context/todoContext";

export default function TodoItem({ todo }) {
  const dispatch = useTodoDispatcher();

  return (
    <li
      onClick={() =>
        dispatch({
          type: "SELECT_TODO",
          id: todo.id,
        })
      }
      className={`${
        todo.selected ? "selected" : ""
      } mb-10 d-flex flex-row justify-content-center align-items-center p-10`}
    >
      <span className="flex-fill mr-15">
        {todo.content} {todo.done && "✓"}
      </span>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          dispatch({
            type: "VALIDATE_TODO",
            id: todo.id,
          });
        }}
        className="mr-15"
        text="Valider"
      />
      <Button
        onClick={(e) => {
          e.stopPropagation();
          dispatch({
            type: "TOGGLE_TODO_EDIT",
            id: todo.id,
          });
        }}
        className="mr-15"
        text="Modifier"
      />
      <Button
        onClick={(e) => {
          e.stopPropagation();
          dispatch({
            type: "DELETE_TODO",
            id: todo.id,
          });
        }}
        text="Supprimer"
      />
    </li>
  );
}
