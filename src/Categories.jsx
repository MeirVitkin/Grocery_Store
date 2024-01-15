import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom";

const Categories = () => {
    const nav = useNavigate();

    const [categories, setCategories]= useState([]);
   useEffect(()=>{
    axios.get('https://jbh-mockserver.onrender.com/categories')
    .then((response)=>{
        setCategories(response.data);
    })
   },[])
  return (
    <div className="categories">
    {Object.entries(categories).map(([cat, imagePath], i) => (
      <img src={imagePath}  key={i} onClick={()=>nav(`/categories/${cat}`)} />
    ))}
  </div>

  )
}

export default Categories