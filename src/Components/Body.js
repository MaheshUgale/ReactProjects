import RestorantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

// sending key as a index is not recommneded for looping over a component. becouse the index of perticuler value may change.
const Body = () => {
    // state varibale = react hooks -> useState which is like ref in vue
    const [listOfRestaurants, setlistOfRestaurants] = useState([])
    const [FilteredlistOfRestaurants, setFilteredListOfRestaurants] = useState([])
    const [searchText, setsearchText] = useState("")
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4951012&lng=73.8051458&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    const searchRestro = () => {
        const filtedData = listOfRestaurants.filter((res) => {
            return res.info.name.toLowerCase().includes(searchText.toLowerCase())
        })
        setFilteredListOfRestaurants(filtedData)
    }

    return listOfRestaurants.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => { setsearchText(e.target.value) }} />
                    <button onClick={searchRestro}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    console.log("btn clicked")
                    let filteredList = FilteredlistOfRestaurants.filter((res) => {
                        return res.info.avgRating > 4
                    })
                    setFilteredListOfRestaurants(filteredList)
                }}> Top rated restro</button>
            </div>
            <div className="res-container">
                {
                    FilteredlistOfRestaurants.map((res) => {
                        return <RestorantCard resdata={res} key={res.info.id} />
                    })
                }
            </div>
        </div>
    );
};
export default Body;