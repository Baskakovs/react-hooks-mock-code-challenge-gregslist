import React from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({itemList, handleDelete}) {
  return (
    <main>
      <ul className="cards">
        {itemList.map((item)=>{
          return <ListingCard key={item.id} item={item} handleDelete={handleDelete}/>
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
