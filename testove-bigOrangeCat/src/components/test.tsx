import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
describe('TEST APP', () => {
  test('test for the addition of ToDo', () => {
    render(<App />)
    const input = screen.getByPlaceholderText(/Enter a new todo/i)
    const newTaskText = 'Нове завдання2'
    fireEvent.change(input, { target: { value: newTaskText } })
    const addButton = screen.getByText('Add Todo')
    fireEvent.click(addButton)
    const todoListItems = screen.getAllByRole('listitem')
    const isTaskAddedToList = todoListItems.some((item) =>
      item.textContent.includes(newTaskText)
    )
    expect(isTaskAddedToList).toBe(true)
  })

  test('test for the remove of ToDo', () => {
    render(<App />)
    const input = screen.getByPlaceholderText(/Enter a new todo/i)
    const newTaskText = 'Завдання для тесту на видалення'
    fireEvent.change(input, { target: { value: newTaskText } })
    const addButton = screen.getByText('Add Todo')
    fireEvent.click(addButton)
    const deleteButton = screen.getByText('Delete')
    fireEvent.click(deleteButton)
    const deletedTodo = screen.queryByText(newTaskText)
    expect(deletedTodo).toBeNull()
  })
})
