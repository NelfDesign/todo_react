import { useTodoState } from "../context/todoContext";

function Button({ text, className, ...props }) {
  const { theme } = useTodoState();
  return (
    <button
      {...props}
      className={`btn btn-${theme} ${className ? className : ""}`}
    >
      {text}
    </button>
  );
}

export default Button;
