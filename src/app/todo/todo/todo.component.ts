import { Component, OnInit } from '@angular/core';
import { TodoModel } from 'src/app/models/todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos: TodoModel[];

  constructor(private todoService: TodoService) {
    this.todos = todoService.getTodos();
   }

  ngOnInit(): void {}

  nebo() {
    alert('Gimme love')
  }

  onNotify() {
    alert('Spinnoi mozg razvit');
  }
}
