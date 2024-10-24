import { computed, Injectable, Signal } from '@angular/core';
import { patchState, signalState } from '@ngrx/signals';
import { Todo } from '../models/todo.model';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly state = signalState({
    todos: {} as Record<string, Todo>,
  });
  public readonly todos = computed(() => {
    return Object.values(this.state.todos());
  });
  public readonly todosMap = computed(() => {
    return this.state.todos();
  });

  // TODO: persist state using capacitor

  constructor() {
    this.addTodo(generateTodo());
    this.addTodo(generateTodo());
    this.addTodo(generateTodo());
    this.addTodo(generateTodo());
  }

  addTodo(todo: Omit<Todo, 'id'>): void {
    const id = uuid();
    const newTodo: Todo = { ...todo, id };
    patchState(this.state, { todos: { ...this.state.todos(), [id]: newTodo } });
  }

  toggleTodo(id: string): void {
    const todo = this.state.todos()[id];

    if (todo) {
      patchState(this.state, {
        todos: { ...this.state.todos(), [id]: { ...todo, done: !todo.done } },
      });
    }
  }

  removeTodoById(id: string): void {
    const todos = this.state.todos();
    delete todos[id];
    patchState(this.state, { todos });
  }
}

const generateTodo = (): Todo => ({
  id: uuid(),
  title: 'Todo',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  done: false,
});
