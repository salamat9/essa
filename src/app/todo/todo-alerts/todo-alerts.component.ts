import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoModel } from 'src/app/models/todo.model';


@Component({
  selector: 'app-todo-alerts',
  templateUrl: './todo-alerts.component.html',
  styleUrls: ['./todo-alerts.component.scss'],
})
export class TodoAlertsComponent {
  @Input() todo!: TodoModel;
  @Output() notify = new EventEmitter();
}
