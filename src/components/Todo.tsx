import { type Todo, type TodoID, type TodoStatus } from '../types'

interface Props {
  todoInfo: Todo
  onUpdateTodo: (id: TodoID, completed: TodoStatus) => void
}

export const TodoTask = ({ todoInfo, onUpdateTodo }: Props) => {
  const { completed, title } = todoInfo
  const isCompleted = completed ? '✅' : '❌'
  const isComplatedClass = completed ? 'opacity-50' : 'opacity-100'

  const handleOnUpdate = () => { onUpdateTodo(todoInfo.id, !todoInfo.completed) }

  return (
    <li onClick={handleOnUpdate} className={`${isComplatedClass} w-full mb-2 p-4 bg-gray-600 rounded-md md:hover:bg-slate-700 transition-colors cursor-pointer`}>
      <span className='mr-2 opaci'>{isCompleted}</span>
      {title}
    </li>
  )
}
