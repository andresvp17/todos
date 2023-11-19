export interface Todo {
  id: TodoID
  title: TodoTitle
  completed: TodoStatus
}

export type TodoID = number
export type TodoTitle = string
export type TodoStatus = boolean

export type TodoElements = Todo[]
