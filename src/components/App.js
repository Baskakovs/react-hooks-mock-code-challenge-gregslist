import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [itemList, setItemList] = useState([])

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then((res)=>res.json())
    .then((obj)=> setItemList(obj))}
    ,[])

  function handleDelete(id){
    let newList = itemList.filter((item)=>{
      if(item.id != id) return item
    })
    setItemList(()=>newList)
  }

  function handleSearch(searchWord){
    if(searchWord === ""){
      fetch("http://localhost:6001/listings")
      .then((res)=>res.json())
      .then((obj)=> setItemList(obj))
    }else{
      let newList = itemList.filter((item)=>{
        if(item.description.toUpperCase().includes(searchWord.toUpperCase())) return item
      })
      setItemList(newList)
    }
  }

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <ListingsContainer itemList={itemList} handleDelete={handleDelete}/>
    </div>
    
  );
}

export default App;

/* Componetents:
    App
    |_Header
    |    |_Search
    |_Listings Container 
         |_ListingCard


*/