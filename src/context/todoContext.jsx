import { createContext, useContext } from "react";

export const todoStateContext = createContext(null);
export const todoDispatcherContext = createContext(null);

export const useTodoState = () => useContext(todoStateContext);
export const useTodoDispatcher = () => useContext(todoDispatcherContext);
