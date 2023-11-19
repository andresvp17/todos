import { useState } from 'react'
import { todosData } from '../data.json'
import { type TodoElements, type TodoID, type TodoStatus, type Todo } from '../types'

const STORED_TODOS = JSON.parse(localStorage.getItem('todos') as string) ?? todosData

export const useTodos = () => {
  const [todos, setTodos] = useState<TodoElements>(STORED_TODOS)

  const handleToggleTodo = (id: TodoID, completed: TodoStatus) => {
    const updatedTodo = todos.map(todo => {
      return todo.id === id ? { ...todo, completed } : todo
    })

    setTodos(updatedTodo)
    localStorage.setItem('todos', JSON.stringify(updatedTodo))
  }

  const handleCreateTodo = (todoText: string) => {
    if (todoText.trim() === '') return

    const ids = todos.length > 0
      ? todos.map((todoId) => todoId.id)
      : [1]

    const newTodo: Todo = {
      id: (Math.max(...ids) + 1),
      completed: false,
      title: todoText
    }

    setTodos((oldTodos) => {
      localStorage.setItem('todos', JSON.stringify([...oldTodos, newTodo]))
      return [...oldTodos, newTodo]
    })
  }

  const clearFinishedTodos = () => {
    const filterClearedTodos = todos.filter((todo) => !todo.completed)
    localStorage.setItem('todos', JSON.stringify(filterClearedTodos))
    setTodos(filterClearedTodos)
  }

  return {
    todos,
    clearFinishedTodos,
    handleCreateTodo,
    handleToggleTodo
  }
}
