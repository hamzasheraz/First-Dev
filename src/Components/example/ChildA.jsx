import React from 'react'
import ChildOfA from './ChildOfA'

const ChildA = ({paisa}) => {
  return (
    <div><ChildOfA paisa={paisa}/></div>
  )
}

export default ChildA