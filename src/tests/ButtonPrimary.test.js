import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from '@/components/Button'

describe('Button Component', () => {
  test('render Button with text', () => {
    render(
      <Button
        onClick={() => {
          console.log('click-me')
        }}
      >
        click-me
      </Button>,
    )
    const buttonElement = screen.getByText(/click-me/i)
    expect(buttonElement).toBeInTheDocument()
  })

  test('can click on button and trigger action function', () => {
    const onClickMock = jest.fn()

    render(<Button onClick={onClickMock}>click-me</Button>)

    fireEvent.click(screen.getByText(/click-me/i))

    expect(onClickMock).toHaveBeenCalled()
  })
})
