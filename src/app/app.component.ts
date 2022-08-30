import { Component } from '@angular/core';
import { Todo } from './Todo';
import { Store } from '@ngrx/store';
import { StoreInterface } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = [];
  newTodo: string;

  constructor(private store:Store<StoreInterface>){
      this.store.subscribe(data => this.newTodo = data.list.name)
  }

  saveTodo(){
    if(this.newTodo){
      this.store.dispatch({type: 'add', name:this.newTodo})
      this.newTodo =""
    }
    else{
      alert("Please enter todo")
    }
  }


  done(id:number){
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }

  remove(id:number){
    this.store.dispatch({type: 'delete' } )
    this.todos = this.todos.filter((v,i) => i !== id)
  }

}
