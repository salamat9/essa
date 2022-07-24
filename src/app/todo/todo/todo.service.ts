import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class TodoService {

  todos: any = [];

  constructor(private http: HttpClient) {}

  getTodos() {
    if (this.todos.length) return this.todos;
    return this.fetchTodos();
  }

  fetchTodos(): Observable<any> {
    return this.http
      .get('https://my-store-9091b-default-rtdb.firebaseio.com/todos.json')
      .pipe(
        tap((data: any) => {
          const todos = Object.keys(data).map((el) => {
            return {
              ...data[el],
              id: el,
            };
          });
          this.todos = todos;
        })
      );
  }

  createTodo(todo: any) {
    return this.http.post(
      'https://my-store-9091b-default-rtdb.firebaseio.com/todos.json',
      todo
    );
  }
}
