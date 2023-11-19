import { useState } from 'react'

interface Props {
  onCreateTodo: (todoText: string) => void
}

export const CreateTodo = ({ onCreateTodo }: Props) => {
  const [value, setValue] = useState('')

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => { setValue(evt.currentTarget.value) }
  const handleOnCreate = (evt: React.FormEvent) => {
    evt.preventDefault()
    onCreateTodo(value)

    setValue('')
  }

  return (
    <form onSubmit={handleOnCreate} className="flex flex-col items-center gap-3 min-w-[350px] max-w-[500px]">
      <input
        value={value}
        onChange={handleChange}
        className="font-alegreya w-full p-3 bg-gray-600 rounded-md font-semibold"
        type="text"
        aria-label='todo input'
        placeholder="Inser your Todo task here..."
      />
      <button type='submit' aria-label='submit' className='font-alegreya px-3 py-1 bg-blue-400 border-blue-500 rounded-md font-thin md:hover:bg-blue-800 md:hover:border-blue-950 border-2 transition-colors'>Create Todo</button>
    </form>
  )
}
