import React from 'react'
import { render, screen } from '@testing-library/react'

interface Props {
  text?: string
}

export const Hello: React.FC<Props> = ({ text }) => {
  return <div>{text}</div>
}
