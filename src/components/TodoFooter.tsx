import { type TodoElements } from '../types'

interface Props {
  todos: TodoElements
  onFilterTodos: () => void
}

export const TodoFooter = ({ todos, onFilterTodos }: Props) => {
  const todosLength = todos.length
  const completedTodos = todos.filter(todos => todos.completed).length
  const unCompletedTodos = todos.filter(todos => !todos.completed).length

  return (
    <footer className='flex flex-col items-center gap-5'>
      <p className='font-alegreyatext-lg font-semibold'>Total todos: {todosLength} | ✅: {completedTodos} | ❌: {unCompletedTodos}</p>
      <button type='button' onClick={onFilterTodos} className='bg-slate-600 px-3 py-2 rounded-md border-solid border-gray-400 border-2 md:hover:bg-slate-700 transition-colors font-alegreya'>Clear finished todos</button>
    </footer>
  )
}
