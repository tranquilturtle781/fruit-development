import React from 'react'
import "../App.css"
import Fruit from "./Fruit.js";

export default function FavsList({favs, modifyFavs}) {
    return(
        <div className="favs">
        {
        favs.map((item, index) => (
            <Fruit item={item} changeFavs={modifyFavs} key={index}></Fruit>
          ))
        }
        </div>
    )
}
