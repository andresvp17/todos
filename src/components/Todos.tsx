import { type TodoElements, type TodoID, type TodoStatus } from '../types'
import { TodoTask } from './Todo'

interface Props {
  todos: TodoElements
  handleToggle: (id: TodoID, completed: TodoStatus) => void
}

export const Todos = ({ todos, handleToggle }: Props) => {
  if (todos.length === 0) return <h1 className='text-2xl font-bold'>You do not have todos yet...</h1>
  return (
    <section>
      <ul className='w-full min-w-[350px] max-w-[500px]'>
        {todos.map((todo) => (
          <TodoTask
            key={todo.id}
            todoInfo={todo}
            onUpdateTodo={handleToggle}
          />
        ))}
      </ul>
    </section>
  )
}
