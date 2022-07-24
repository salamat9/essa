import { Component, OnInit } from '@angular/core';

import { todos } from 'src/app/data/tasks';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  todos = todos;

  nebo() {
    alert('Gimme love')
  }

  onNotify() {
    alert('Spinnoi mozg razvit');
  }
}
