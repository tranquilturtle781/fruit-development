import "./App.css";
import Fruit from "./components/Fruit.js";
import FavsList from "./components/FavsList.js";
import { useState } from "react";
import fruitData from "./assets/fruit-data.json";
import Form from 'react-bootstrap/Form';

fruitData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
  item.isFav = false;
});

function App() {
  const [andType, setAndType] = useState([])
  const [orderType, setOrderType] = useState("all")
  const [sortType, setSortType] = useState("name")
  const [displayFavs, setDisplay] = useState(false)
  const [favList, setFavList] = useState([])
  const [aggVal, setAggVal] = useState(0)

  const switchDisplay = () => {
    setDisplay(!displayFavs)
  }

  const modifyFavs = (item) => {
    item.isFav = !item.isFav
    if(favList.includes(item)) {
      setFavList(favList.filter(x => x !== item))
      console.log(favList.length)
      setAggVal(Math.round((aggVal * (favList.length) - item.nutritions.sugar)/(Math.max(favList.length - 1,1)) * 100) / 100)
    } else {
      setFavList(favList.concat(item))
      setAggVal(Math.round((aggVal * favList.length + item.nutritions.sugar)/(favList.length + 1) * 100) / 100)
    }
  }
  
  const selectSortType = key => {
    setSortType(key)
  }

  const sorter = (a, b) => {
    if (sortType === "cals") {
      return a.nutritions.calories > b.nutritions.calories ? 1 : -1
    } else if (sortType === "sug") {
      return a.nutritions.sugar > b.nutritions.sugar ? 1 : -1
    } else if (sortType === "carb") {
      return a.nutritions.carbohydrates > b.nutritions.carbohydrates ? 1 : -1
    } else {
      return a.name > b.name ? 1 : -1
    }
  }

  const selectAndFilterType = eventKey => {
    andType.includes(eventKey) ? setAndType(andType.filter(x => x !== eventKey)) : setAndType(andType.concat(eventKey))
  };

  const selectOrderFilter = eventKey => {
    setOrderType(eventKey)
  };

  const resetFilters = () => {
    setOrderType("all")
  }

  const matchesFilterType = item => {
    if (orderType === "all" && andType.length === 0) {
      return true
    } else {
      var matches = Boolean(true)
      for (const x of andType) {
        if (x === "low-sug" && item.nutritions.sugar >= 10.0) {
          matches = false
        } else if (x === "low-cal" && item.nutritions.calories >= 40.0) {
          matches = false
        }
      }
      return matches && ((orderType === item.order) || orderType === "all")
    }
  }
  const filteredData = fruitData.filter(matchesFilterType)
  const sortedData = filteredData.sort(sorter)
  return (
    <div className="App">
      <h1 id="title">Fabulous Fruit Finder</h1> 
      <div className="main">
        <div className="nav">
        <h3 className="label" id="fix">FILTER BY</h3>
        <div className="selections">
          <h4>Favorites:</h4>
        <Form>
        <Form.Check 
            name="grouped"s
            id="favs"
            label="My favorite fruits"
            onChange={() => switchDisplay()}
          />
          <p><i>Average sugar content: {favList.length > 0 ? aggVal : null}</i></p>
        </Form>
        <h4>Dietaries:</h4>
        <Form>
          <Form.Check 
            id="low-sug"
            label="Low sugar"
            onChange={() => selectAndFilterType("low-sug")}
          />
          <Form.Check 
            id="low-cal"
            label="Low calorie"
            onChange={() => selectAndFilterType("low-cal")}
          />
        </Form>
        <h4>Order:</h4>
        <Form>
          <Form.Check 
            name="grouped"
            type="radio"
            id=""
            label="All orders"
            onChange={() => resetFilters()}
          />
          <Form.Check 
            name="grouped"
            type="radio"
            id="Caricacea"
            label="Caricacea"
            onChange={() => selectOrderFilter("Caricacea")}
          />
          <Form.Check 
            name="grouped"
            type="radio"
            id="Caryophyllales"
            label="Caryophyllales"
            onChange={() => selectOrderFilter("Caryophyllales")}
          />
          <Form.Check 
            name="grouped"
            type="radio"
            id="Cucurbitales"
            label="Cucurbitales"
            onChange={() => selectOrderFilter("Cucurbitales")}
          />
          <Form.Check 
            name="grouped"
            type="radio"
            id="Ericales"
            label="Ericales"
            onChange={() => selectOrderFilter("Ericales")}
          />
          <Form.Check 
            name="grouped"
            type="radio"
            id="Laurales"
            label="Laurales"
            onChange={() => selectOrderFilter("Laurales")}
          />
          <Form.Check 
            name="grouped"
            type="radio"
            id="Malpighiales"
            label="Malpighiales"
            onChange={() => selectOrderFilter("Malpighiales")}
          />
          <Form.Check 
            name="grouped"
            type="radio"
            id="Malvales"
            label="Malvales"
            onChange={() => selectOrderFilter("Malvales")}
          />
          <Form.Check 
            name="grouped"
            type="radio"
            id="Myrtales"
            label="Myrtales"
            onChange={() => selectOrderFilter("Myrtales")}
          />
          <Form.Check 
            name="grouped"
            type="radio"
            id="Poales"
            label="Poales"
            onChange={() => selectOrderFilter("Poales")}
          />
          <Form.Check 
            name="grouped"
            type="radio"
            id="Rosales"
            label="Rosales"
            onChange={() => selectOrderFilter("Rosales")}
          />
          <Form.Check 
            name="grouped"
            type="radio"
            id="Sapindales"
            label="Sapindales"
            onChange={() => selectOrderFilter("Sapindales")}
          />
          <Form.Check 
            name="grouped"
            type="radio"
            id="Saxifragales"
            label="Saxifragales"
            onChange={() => selectOrderFilter("Saxifragales")}
          />
          <Form.Check 
            name="grouped"
            type="radio"
            id="Struthioniformes"
            label="Struthioniformes"
            onChange={() => selectOrderFilter("Struthioniformes")}
          />
          <Form.Check 
            name="grouped"
            type="radio"
            id="Vitales"
            label="Vitales"
            onChange={() => selectOrderFilter("Vitales")}
          />
          <Form.Check
            name="grouped"
            type="radio" 
            id="Zingiberales"
            label="Zingiberales"
            onChange={() => selectOrderFilter("Zingiberales")}
          />
        </Form>
        </div>
        <h3 className="label">SORT BY</h3>
        <div className="selections">
        <Form>
          <Form.Check 
            name="grouped2"
            type="radio"
            id="name"
            label="Name (alphabetical)"
            onChange={() => selectSortType("name")}
          />
          <Form.Check 
            name="grouped2"
            type="radio"
            id="cals"
            label="Calories (low to high)"
            onChange={() => selectSortType("cals")}
          />
          <Form.Check
            name="grouped2"
            type="radio" 
            id="sug"
            label="Sugar (low to high)"
            onChange={() => selectSortType("sug")}
          />
          <Form.Check
            name="grouped2"
            type="radio" 
            id="carb"
            label="Carbs (low to high)"
            onChange={() => selectSortType("carb")}
          />
          </Form>
          </div>
        </div>
        <div className="items">
          {displayFavs ? 
          <FavsList favs={favList} modifyFavs={modifyFavs}></FavsList> :
          sortedData.map((item, index) => (
            <Fruit item={item} changeFavs={modifyFavs} key={index}></Fruit>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
