import { Todo } from './../Todo';

let initialState: Array<Todo> = [];

interface CustomAction {
  type: string;
  name: string;
}

export function reducer(state = initialState, action: any) {
  switch (action.type) {
    case 'add':
      let todo = {
        name: action.name,
        isCompleted: false,
      };
      console.log(todo)
      return [...state, todo];
    case 'delete':
      return;
    case 'update':
      return;
    default:
      return state;
  }
}
