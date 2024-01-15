import Item from "./Item"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
const ItemList = () => {
  const {catName}= useParams();
  console.log(catName);
  const [items, setItems]= useState([]);
   useEffect(()=>{
   
      axios.get(`https://jbh-mockserver.onrender.com/categories/${catName}`)
      .then((response)=>{
        setItems(response.data);
      })
  },[])
  return (
    <>
      <h1 className="itemListHeader">{catName}</h1>
      <div className="itemList">
          {items.map(item =>( <Item key ={item.id} item={item} />))}
      </div>
    </>
  )
}

export default ItemList
