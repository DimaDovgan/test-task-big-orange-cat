import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './toDoForm'
import TodoList from './toDoList'

interface Todo {
  id: number
  text: string
  complet: boolean
}

function ToDoApp(): JSX.Element {
  const [toDoList, setTodoList] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text: text,
      complet: false
    }
    setTodoList([...toDoList, newTodo])
  }

  const removeTodo = (id: string) => {
    setTodoList(toDoList.filter((todo) => todo.id !== id))
  }
  const changeComplet = (id: string) => {
    setTodoList(
      toDoList.map((todo) => {
        if (todo.id === id) {
          todo.complet = !todo.complet
          return todo
        }
        return todo
      })
    )
  }

  return (
    <div className="pl-10 pt-10">
      <TodoForm addTodoFuc={addTodo} />
      <TodoList
        toDoList={toDoList}
        removeTodo={removeTodo}
        changeComplet={changeComplet}
      />
    </div>
  )
}

export default ToDoApp
