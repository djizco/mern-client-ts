import React from 'react';

import R from 'ramda';

import { useAppSelector } from '_store/hooks';

import TodoItem from '../Todo';

import type { Todo } from '_types/todos';

export default function TodoList() {
  const todos = useAppSelector(state => state.todos) as Todo[];

  return (
    <ul className="todo-list">
      {R.reverse(todos).map(todo => <TodoItem key={todo.id} {...todo} />)}
    </ul>
  );
}
