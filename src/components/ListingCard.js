import React, {useState} from "react";

function ListingCard({item, handleDelete}) {
  const [isStar, setIsStar] = useState(false)
  const {price, image, id, description, location} = item

  function handleStar(){
    setIsStar(()=>! isStar)
  }

  function onDelete(event){
    fetch(`http://localhost:6001/listings/${event.target.id}`,{
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
    })
    .then(()=>handleDelete(event.target.id))
  }

  return (
    <li className="card" key={id}>
      <div className="image">
        <span className="price">${price}</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isStar ? (
          <button className="emoji-button favorite active" onClick={handleStar}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleStar}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" id={id} onClick={onDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
