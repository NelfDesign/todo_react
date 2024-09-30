import EditTodo from "./EditTodo";
import TodoItem from "./TodoItem";
import { useTodoState } from "../context/todoContext";

export default function TodoList() {
  const state = useTodoState();

  return state.todoList.length ? (
    <ul>
      {state.todoList.map((todo) =>
        todo.editMode ? (
          <EditTodo key={todo.id} todo={todo} />
        ) : (
          <TodoItem key={todo.id} todo={todo} />
        )
      )}
    </ul>
  ) : (
    <p>Aucune Todo pour le moment</p>
  );
}
