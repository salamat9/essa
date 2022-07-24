import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { todos } from 'src/app/data/tasks';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  constructor(private formBuilder: FormBuilder) {}
  todos = todos;

  todoForm = this.formBuilder.group({
    text: '',
  });

  onSubmit(): void {
    const text = this.todoForm.value.text 
    this.todos.push({
      id: 4, 
      text: this.todoForm.value.text ?? '',
      done: false,
      created: new Date(),
      updated: new Date(),
    });
  }

  nebo() {
    alert('Gimme love');
  }

  onNotify() {
    alert('Spinnoi mozg razvit');
  }
}
