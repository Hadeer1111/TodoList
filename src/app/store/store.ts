

export interface StoreInterface{
  list: List
}

interface List {
    id: number,
    name:string
}

let initialState:any = []

interface CustomAction{
  type: string,
  name:string
}

export function reducer(state = initialState , action: any){
      switch(action.type){
        case 'add':
          let todo ={
            id: state.length + 1,
            name: action.name
          };
      return initialState.push(todo);
        case 'delete':
          return
        case 'update':
          return
        default: return state
      }
}
