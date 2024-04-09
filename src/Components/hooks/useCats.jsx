import React,{useState} from 'react'
import { getCats } from '../../utils/getCategories';

const useCats = () => {
    const [cats, setCats] = useState(getCats());

      const [newCats,setNewCats]=useState('');
      const addCats=()=>{
        setCats([...cats,newCats])
        setNewCats('');
        localStorage.setItem('category', JSON.stringify([...cats, newCats]));
      }

      const changeHandler=e=>(setNewCats(e.target.value))
  return (
    {cats,addCats,changeHandler,newCats}
  )
}

export default useCats