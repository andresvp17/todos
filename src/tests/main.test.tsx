import { App } from '../App'
import { useTodos } from '../hooks/useTodos'
import { cleanup, render, screen, renderHook, fireEvent, act } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

describe('todos', () => {
  beforeEach(() => {
    render(<App />)
  })

  afterEach(() => {
    cleanup()
  })

  it('should render button', () => {
    const button = screen.getByText('Create Todo')

    expect(button).toBeDefined()
  })

  it('should have three todos', () => {
    const { result } = renderHook(() => useTodos())
    expect(result.current.todos).toHaveLength(3)
  })

  it('should change the input', () => {
    const input: HTMLInputElement = screen.getByLabelText('todo input')
    fireEvent.change(input, { target: { value: 'Listen to music' } })

    expect(input.value).toBe('Listen to music')
  })

  it('should add a todo', async () => {
    const input: HTMLInputElement = screen.getByLabelText('todo input')
    const button = screen.getByLabelText('submit')

    fireEvent.change(input, { target: { value: 'Listen to music' } })
    fireEvent.click(button)

    expect(input.value).toBe('')
    expect(screen.getByText('Listen to music')).toBeDefined()
  })

  it('should add a todo with hook', () => {
    const { result } = renderHook(() => useTodos())

    expect(result.current.todos).toHaveLength(3)

    act(() => {
      result.current.handleCreateTodo('new todo')
    })

    expect(result.current.todos).toHaveLength(4)
  })
})
