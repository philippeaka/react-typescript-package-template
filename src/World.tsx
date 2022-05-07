import React from 'react'

interface Props {
  text?: string
}

const defaultProps = {
  text: 'World',
}

export const World: React.FC<Props> = ({ text }) => <div>{text}</div>

World.defaultProps = defaultProps
