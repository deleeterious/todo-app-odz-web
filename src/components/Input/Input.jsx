import React from 'react'
// css
import cn from 'classnames'
import classNames from './Input.module.css'

const Input = ({ value, onChange, type, placeholder, isEmpty }) => {
  return (
    <div className={classNames.container}>
      {type === 'input' ? (
        <input
          type="text"
          className={classNames.input}
          placeholder={placeholder}
          onChange={({ target: { value } }) => onChange(value)}
          value={value}
        />
      ) : (
        <textarea
          className={cn(classNames.textarea, { [classNames.empty]: isEmpty })}
          placeholder={placeholder}
          onChange={({ target: { value } }) => onChange(value)}
          value={value}
        />
      )}
    </div>
  )
}

export default Input
