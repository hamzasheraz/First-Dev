import React, { useContext } from 'react'
import { GoTasklist } from "react-icons/go";
import Heading from './Heading';
import { ListContext } from './hooks/ListContext';
import ListOfList from './ListOfList';

const List = () => {
  const{newList,changeHandler,addLists}=useContext(ListContext);
  return (
    <div className='mt-5'>
                <Heading title={'List'} icon={<GoTasklist size={30}/>}/>
          <div className="d-flex gap-3 mt-4">
        <input
          style={{ maxWidth: "600px" }}
          value={newList}
          onChange={changeHandler}
          className="form-control form-control-sm"
          type="text"
          placeholder="Please enter your category"
        />
        <button className="btn btn-dark" onClick={addLists}>
          Add
        </button>
      </div>

      <ListOfList />
    </div>
   
  )
}

export default List