import React from 'react'
// prop-types
import T from 'prop-types'
// css
import classNames from './Container.module.css'

const Container = ({ children }) => {
  return (
    <div className={classNames.wrapper}>
      <div className={classNames.container}>{children}</div>
    </div>
  )
}

Container.propTypes = {
  children: T.node
}

export default Container
