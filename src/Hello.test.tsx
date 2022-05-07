import React from "react"
import { Hello } from "./Hello"
import { render, screen } from "@testing-library/react"

test("renders 'Hello World'", () => {
  render(<Hello text="Hello World" />)
  expect(screen.getByText("Hello World")).toBeInTheDocument()
})
