import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoModel } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.scss'],
})
export class TodoModalComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  @Input() show!: boolean;
  // fix type here!!! help me :(
  @Input() todo!: any;
  @Output() edit = new EventEmitter();

  todoForm = this.formBuilder.group({
    // make initial data
    text: '',
  });

  onSubmit() {
    // reset todoForm text value after edit
    this.todo.text = this.todoForm.value.text
    this.edit.emit(this.todo);
  }
}
