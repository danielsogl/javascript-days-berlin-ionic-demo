import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full',
  },
  {
    path: 'todos',
    loadComponent: () => import('./todos/todos.page').then((m) => m.TodosPage),
  },
  {
    path: 'todo-details/:todoId',
    loadComponent: () =>
      import('./todo-details/todo-details.page').then((m) => m.TodoDetailsPage),
  },
];
