import { deleteTodo, getTodos, postTodo, putTodo, putToggleCompleteTodo } from '_api/todos';
import { dispatchError } from '_api/utils';

import { addTodo, removeTodo, setTodos, toggleCompleteTodo, updateTodo } from '_store/actions/todos';
import { TypedDispatch } from '_store/index';

import type { Todo } from '_types/todos';

export const attemptGetTodos = () => (dispatch: TypedDispatch) =>
  getTodos()
    .then(data => {
      dispatch(setTodos(data.todos as Todo[]));
      return data.todos;
    })
    .catch(dispatchError(dispatch));

export const attemptAddTodo = (text: string) => (dispatch: TypedDispatch) =>
  postTodo({ text })
    .then(data => {
      dispatch(addTodo(data.todo as Todo));
      return data.user;
    })
    .catch(dispatchError(dispatch));

export const attemptToggleCompleteTodo = (id: number) => (dispatch: TypedDispatch) =>
  putToggleCompleteTodo({ id })
    .then(data => {
      dispatch(toggleCompleteTodo(id));
      return data;
    })
    .catch(dispatchError(dispatch));

export const attemptUpdateTodo = (id: number, text: string) => (dispatch: TypedDispatch) =>
  putTodo({ id, text })
    .then(data => {
      dispatch(updateTodo({ id, text, updatedAt: data.todo.updatedAt }));
      return data;
    })
    .catch(dispatchError(dispatch));

export const attemptDeleteTodo = (id: number) => (dispatch: TypedDispatch) =>
  deleteTodo({ id })
    .then(data => {
      dispatch(removeTodo(id));
      return data;
    })
    .catch(dispatchError(dispatch));
