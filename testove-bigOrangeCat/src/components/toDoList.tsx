import React, { useState } from 'react'
import TodoListComp from './toDoListComp'

interface Todo {
  id: string
  text: string
  complet: boolean
}

interface TodoListProps {
  toDoList: Todo[]
  removeTodo: (id: string) => void
  changeComplet: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = ({
  toDoList,
  removeTodo,
  changeComplet
}) => {
  return (
    <div className="mt-10">
      <ul>
        {toDoList.map((comp) => (
          <TodoListComp
            key={comp.id}
            comp={comp}
            removeTodo={removeTodo}
            changeComplet={changeComplet}
          />
        ))}
      </ul>
    </div>
  )
}
export default TodoList
