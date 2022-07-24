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
  show = false
  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder
  ) {
    this.todos = todoService.getTodos();
  }

  ngOnInit(): void {
    this.fetchTodos();
  }

  todoForm = this.formBuilder.group({
    text: '',
  });

  onSubmit(): void {
    if (!this.todoForm.value.text) return;
    this.createTodo(this.todoForm.value.text);
  }

  fetchTodos(): void {
    this.todoService.fetchTodos().subscribe(() => {
      this.todos = this.todoService.getTodos();
    });
  }

  createTodo(text: string): void {
    this.todoService.createTodo({ text }).subscribe(() => this.fetchTodos());
  }

  deleteTodo(id: string): void {
    this.todoService.deleteTodo(id).subscribe(() => this.fetchTodos());
  }
}
