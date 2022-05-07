import React from 'react'
import { render, screen } from '@testing-library/react'
import { Hello } from './Hello'

test("renders 'Hello World'", () => {
  render(<Hello text="Hello World" />)
  expect(screen.getByText('Hello World')).toBeInTheDocument()
})
