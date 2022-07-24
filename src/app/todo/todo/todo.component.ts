import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoModel } from 'src/app/models/todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})

export class TodoComponent implements OnInit {
  todos: TodoModel[];

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder  
  ) {
    this.todos = todoService.getTodos();
  }

  ngOnInit(): void {}

  todoForm = this.formBuilder.group({
    text: '',
  });

  onSubmit(): void {
    const text = this.todoForm.value.text 
  }

  nebo() {
    alert('Gimme love');
  }

  onNotify() {
    alert('Spinnoi mozg razvit');
  }
}
