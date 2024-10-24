import { Component, computed, inject, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonBackButton,
} from '@ionic/angular/standalone';
import { TodoCardComponent } from '../todo-card/todo-card.component';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.page.html',
  styleUrls: ['./todo-details.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    IonButton,
    IonBackButton,
    TodoCardComponent,
  ],
})
export class TodoDetailsPage {
  protected readonly todoService = inject(TodoService);

  readonly todoId = input.required<string>();

  protected readonly todo = computed(() => {
    const todoId = this.todoId();
    const todo = this.todoService.todosMap()[todoId];
    return todo;
  });

  // TODO: show ionic life cycle events
}
