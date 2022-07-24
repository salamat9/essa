import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoModel } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.scss']
})
export class TodoModalComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log('hello world', this.todo.text);
  }

  @Input() show!: boolean;
  @Input() todo!: TodoModel;

  todoForm = this.formBuilder.group({
    text: '',
  });

  onSubmit() {
    console.log('hello world');
    
  }
}
