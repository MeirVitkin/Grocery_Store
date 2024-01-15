import Categories from "./Categories";
import ItemList from "./ItemList"
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';


const Content = () => {
  const nav = useNavigate();
  return (
    <div>
       <div onClick={()=>nav('/categories')}>🏡 home</div>
      <Routes>
      <Route index element={<Navigate to='categories' />} />
        <Route path= '/categories' element= {<Categories/>}/>
        <Route path= '/categories/:catName' element= {<ItemList/>}/>
        <Route path= '/items/:itenId' element= {<ItemList/>}/>
      </Routes>
    

        
    </div>
  )
}

export default Content