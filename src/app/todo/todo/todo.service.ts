import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { TodoModel } from 'src/app/models/todo.model';

function URL(id = ''): string {
  if (id) id = '/' + id;
  return `https://todo-1a8da-default-rtdb.asia-southeast1.firebasedatabase.app/todos${id}.json`;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: TodoModel[] = [];

  constructor(private http: HttpClient) {}

  getTodos(): TodoModel[] {
    return this.todos;
  }

  fetchTodos(): Observable<any> {
    return this.http.get(URL()).pipe(
      tap((data: any) => {
        this.todos = data
          ? Object.keys(data).map((el) => ({ ...data[el], id: el }))
          : [];
      })
    );
  }

  createTodo(todo: TodoModel): Observable<any> {
    return this.http.post(URL(), todo);
  }

  deleteTodo(id: string): Observable<any> {
    return this.http.delete(URL(id));
  }
}
