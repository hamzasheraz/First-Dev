import React,{useState} from 'react'

const useList = () => {
    const [list, setList] = useState([
        "algo",
        "oop",
        "blockchain",
        "python",
        "service",
      ]);

      const [newList,setNewList]=useState('');
      const addLists=()=>{
        setList([...list,newList])
        setNewList('');
      }

      const changeHandler=e=>(setNewList(e.target.value))
  return (
    {list,addLists,changeHandler,newList}
  )
}

export default useList