import React from 'react'
// css
import cn from 'classnames'
import classNames from './Button.module.css'

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={cn(classNames.button, className)}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}

export default Button
