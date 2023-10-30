import type { Todo } from '_types/todos';

export const SET_TODOS = 'SET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE_TODO = 'TOGGLE_COMPLETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const INCREMENT_TODO_ID = 'INCREMENT_TODO_ID';

export const setTodos = (todos: Todo[]) => ({
  type: SET_TODOS,
  payload: {
    todos,
  },
});

export const addTodo = ({ id, text, createdAt }: {
  id: number;
  text: string;
  createdAt: number;
}) => ({
  type: ADD_TODO,
  payload: {
    createdAt,
    id,
    text,
  },
});

export const toggleCompleteTodo = (id: number) => ({
  type: TOGGLE_COMPLETE_TODO,
  payload: {
    id,
  },
});

export const updateTodo = ({ id, text, updatedAt }: {
  id: number;
  text: string;
  updatedAt: number;
}) => ({
  type: UPDATE_TODO,
  payload: {
    updatedAt,
    id,
    text,
  },
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: {
    id,
  },
});
