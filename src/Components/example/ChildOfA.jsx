import React, { useContext } from 'react'
import { DadaContext } from './useContext'

const ChildOfA = () => {
    const {paisa,setPaisa}=useContext(DadaContext);
  return (
    <div>ChildOfA  {paisa}</div>
  )
}

export default ChildOfA