import { Component, inject, viewChild } from '@angular/core';
import {
  IonCardSubtitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonModal,
  IonInput,
  IonButtons,
  IonItem,
  IonButton,
  IonLabel,
  IonFab,
  IonFabButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { TodoService } from '../services/todo.service';
import { TodoCardComponent } from '../todo-card/todo-card.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonFabButton,
    IonFab,
    IonButtons,
    IonCard,
    IonCardSubtitle,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    TodoCardComponent,
    IonModal,
    IonInput,
    FormsModule,
    IonItem,
    IonButton,
    IonLabel,
    ReactiveFormsModule,
  ],
})
export class TodosPage {
  protected readonly todoService = inject(TodoService);
  protected readonly modal = viewChild.required(IonModal);

  public form = new FormGroup({
    title: new FormControl('', { nonNullable: true }),
    content: new FormControl('', { nonNullable: true }),
  });

  createTodo(): void {
    const { content, title } = this.form.getRawValue();

    this.todoService.addTodo({
      content,
      title,
      done: false,
    });

    this.modal().dismiss();
    this.form.reset();
  }
}
