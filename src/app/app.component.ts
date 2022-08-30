import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  //the state of this component
  todos: Todo[] = [];
  //the new item to be sent to the store
  newTodo: string;
  //the store observable
  store$: Observable<Array<Todo>>;

  //inject the store with
  constructor(private store: Store<{ list: Array<Todo> }>) {
    //select the state you want to listien on
    this.store$ = this.store.select('list');
  }
  //subscribe to the store and update the state
  ngOnInit(): void {
    this.store$.subscribe((items) => {
      console.log('recieved ', items);
      this.todos = [...items];
    });
  }

  saveTodo() {
    if (this.newTodo) {
      this.store.dispatch({ type: 'add', name: this.newTodo });
      this.newTodo = '';
    } else {
      alert('Please enter todo');
    }
  }

  done(id: number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }

  remove(id: number) {
    this.store.dispatch({ type: 'delete' });
    this.todos = this.todos.filter((v, i) => i !== id);
  }
}
