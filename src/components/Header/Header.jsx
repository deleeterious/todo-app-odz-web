import React from 'react'

// css
import classNames from './Header.module.css'

const Header = () => {
  return (
    <header className={classNames.container}>
      <h1 className={classNames.title}>
        <span>To</span>
        <span>Do</span>
        <span>list</span>
      </h1>
    </header>
  )
}

export default Header
