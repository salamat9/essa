import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from 'src/app/data/tasks';

@Component({
  selector: 'app-todo-alerts',
  templateUrl: './todo-alerts.component.html',
  styleUrls: ['./todo-alerts.component.scss'],
})
export class TodoAlertsComponent {
  @Input() todo!: Todo;
  @Output() notify = new EventEmitter();
}
