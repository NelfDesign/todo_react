import { useTodoDispatcher, useTodoState } from "../context/todoContext";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

export function TodoFeature() {
  const state = useTodoState();
  const dispatch = useTodoDispatcher();
  function handleChange(e) {
    dispatch({
      type: "HANDLE_CHANGE",
      name: e.target.value,
    });
  }

  return (
    <div className="d-flex justify-content-center align-items-center p-20">
      <div className="card container p-20">
        <h1 className="mb-20 d-flex flex-row justify-content-center align-items-center">
          <span className="flex-fill">Liste de tâches</span>
          <select value={state.theme} onChange={handleChange}>
            <option value="primary">Rouge</option>
            <option value="secondary">Bleu</option>
          </select>
        </h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}
