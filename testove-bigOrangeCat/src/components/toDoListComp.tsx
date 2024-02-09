import React, { useState } from 'react'
import '../output.css'

interface Todo {
  id: string
  text: string
  complet: boolean
}

interface TodoListProps {
  comp: Todo
  removeTodo: (id: string) => void
  changeComplet: (id: string) => void
}

const TodoListComp: React.FC<TodoListProps> = ({
  comp,
  removeTodo,
  changeComplet
}) => {
  const { id, text, complet } = comp
  return (
    <li
      className={`mb-10 flex max-w-[430px] items-center justify-between border p-4 ${
        complet ? 'opacity-50' : 'opacity-100'
      } `}
    >
      <div>
        <p className="max-w-[280px] break-all text-3xl font-bold underline">
          {text}
        </p>
      </div>
      <div className="flex flex-col">
        <button
          onClick={() => removeTodo(id)}
          className="mb-2 rounded border-2 bg-teal-400 px-2 py-1 text-xl text-white hover:border-teal-500 focus:border-teal-500"
        >
          Delete
        </button>
        <button
          onClick={() => changeComplet(id)}
          className="rounded border-2 bg-yellow-400 px-2 py-1 text-xl text-white hover:bg-yellow-500 focus:bg-yellow-500"
        >
          Complete
        </button>
      </div>
    </li>
  )
}
export default TodoListComp
