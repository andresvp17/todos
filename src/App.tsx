import './App.css'
import { useTodos } from './hooks/useTodos'
import { Todos } from './components/Todos'
import { TodoFooter } from './components/TodoFooter'
import { CreateTodo } from './components/CreateTodo'

export function App () {
  const { todos, clearFinishedTodos, handleCreateTodo, handleToggleTodo } = useTodos()
  return (
    <section className='bg-slate-300 dark:bg-slate-900 text-slate-300 w-full min-h-screen flex flex-col items-center justify-center gap-y-7'>
      <h1 className='  text-4xl font-bold text-center text-slate-900 dark:text-slate-100'>Todos With TypeScript</h1>
      <CreateTodo onCreateTodo={handleCreateTodo} />
      <Todos handleToggle={handleToggleTodo} todos={todos} />
      <TodoFooter onFilterTodos={clearFinishedTodos} todos={todos} />
    </section>
  )
}
