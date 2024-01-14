import Item from "./Item"
import data from './data'
const ItemList = () => {
    const items = data.fruits;
  return (
    <>
      <h1 className="itemListHeader">Fruits</h1>
      <div className="itemList">
          {items.map(item =>( <Item key ={item.id} item={item} />))}
      </div>
    </>
  )
}

export default ItemList
// useEffect(()=>{
  //   const fechItems = async()=>{
  //     const items = await  axios.get(`https://jbh-mockserver.onrender.com/categories/fruits`)
  //   }
  // },[])