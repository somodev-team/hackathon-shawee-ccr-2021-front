import React from 'react'
import './button.style.scss'

export const Button = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>
}
