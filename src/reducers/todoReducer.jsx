function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: crypto.randomUUID(), //creation d'un id unique avec API crypto native sur tous les navigateurs
            content: action.content,
            done: false,
            editMode: false,
            selected: false,
          },
        ],
      };
    }
    case "DELETE_TODO": {
      return {
        ...state,
        todoList: state.todoList.filter((t) => t.id !== action.id),
      };
    }
    case "VALIDATE_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    }
    case "EDIT_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.id
            ? {
                ...todo,
                content: action.content,
                editMode: false,
              }
            : todo
        ),
      };
    }
    case "TOGGLE_TODO_EDIT": {
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.id ? { ...todo, editMode: !todo.editMode } : todo
        ),
      };
    }
    case "SELECT_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.id
            ? { ...todo, selected: true }
            : { ...todo, selected: false }
        ),
      };
    }
    case "HANDLE_CHANGE": {
      return {
        ...state,
        theme: action.name,
      };
    }

    default:
      throw new Error("Action inconnue");
  }
}

export default todoReducer;
