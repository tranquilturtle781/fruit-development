import React from 'react'
import "../App.css"
import Fruit from "./Fruit.js";

export default function FavsList({favs, data, modifyFavs}) {
    return(
        <div className="favs">
        {
        data.filter(x => favs.includes(x)).map((item, index) => (
            <Fruit item={item} changeFavs={modifyFavs} key={index}></Fruit>
          ))
        }
        </div>
    )
}