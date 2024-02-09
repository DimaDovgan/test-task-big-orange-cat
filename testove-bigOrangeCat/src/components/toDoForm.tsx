import React, { useState } from 'react'

interface TodoFormProps {
  addTodoFuc: (text: string) => void
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodoFuc }) => {
  const [text, setText] = useState<string>('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (text) {
      addTodoFuc(text)
      setText('')
    } else {
      console.log('Enter text')
    }
  }

  return (
    <form className="flex items-center space-x-4" onSubmit={handleSubmit}>
      <input
        className="rounded border px-6 py-3 text-xl  hover:border-teal-500 focus:border-teal-500  focus:outline-none"
        type="text"
        placeholder="Enter a new todo"
        value={text}
        onChange={handleInputChange}
      />
      <button className="rounded border-2 bg-teal-400 px-6 py-3 text-xl text-white hover:border-teal-500 focus:border-teal-500 ">
        Add Todo
      </button>
    </form>
  )
}

export default TodoForm
