import React from 'react'

interface Props {
  text?: string
}

const defaultProps = {
  text: 'Hello',
}

export const Hello: React.FC<Props> = ({ text }) => <div>{text}</div>

Hello.defaultProps = defaultProps
