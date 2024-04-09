import React from 'react'

const Which = ({whichComponent,setWhichComponent}) => {
  return (
    <div className='p-2 rounded d-flex align-items-center justify-content-between gap-4 mt-5' style={{maxWidth:'200px'}}>
        <span className={`${whichComponent==='cats'&& 'bg-primary'} px-2 py-2 rounded-3`} role='button' onClick={()=>setWhichComponent('cats')}>Categories</span>
        <span className={`${whichComponent==='List'&& 'bg-primary'} px-2 py-2 rounded-3`} role='button' onClick={()=>setWhichComponent('List')}>List</span>
    </div>
  )
}

export default Which