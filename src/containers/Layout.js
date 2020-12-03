/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import { useLocation } from 'react-router-dom'

export default ({ children }) => {
  const { state, pathname } = useLocation()

  return (
    <div className='site-layout-content'>{children}</div>
  )
}
