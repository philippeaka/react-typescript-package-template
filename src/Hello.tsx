import React from 'react'

interface Props {
  text: string
}

export const Hello: React.FC<Props> = ({text}) => {
  return (
    <div>{text}</div>
  )
}