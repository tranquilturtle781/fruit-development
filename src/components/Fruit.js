import React from 'react'
import "../App.css"

export default function Fruit({item, changeFavs}) {
    const editFavs = () => {
        changeFavs(item)
      }
    return(
        <div className="Fruit">
            <div className="header">
            <img alt="fruit" src={item.image}></img>
            <h2>{item.name}</h2>
            </div>
            <div className='description'>
            <div className="filterables">
                <p>Order: {item.order}</p>
                {item.nutritions.sugar < 10.0 ? <p>Low sugar</p> : null}
                {item.nutritions.calories < 40 ? <p>Low calorie</p> : null}
            </div>
            
            <p>Calories: {item.nutritions.calories} <br></br>
            Sugar: {item.nutritions.sugar} <br></br>
            Carbs: {item.nutritions.carbohydrates}</p>
            {item.isFav ? <button id="undo" onClick={editFavs}> Remove from favorites </button> : <button onClick={editFavs}> Add to favorites </button>}
            </div>
        </div>
    )
}