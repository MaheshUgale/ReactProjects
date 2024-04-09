import RestorantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

// sending key as a index is not recommneded for looping over a component. becouse the index of perticuler value may change.
const Body = () => {
    // state varibale = react hooks -> useState which is like ref in vue
    const [listOfRestaurants, setlistOfRestaurants] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4951012&lng=73.8051458&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return listOfRestaurants.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    console.log("btn clicked")
                    let filteredList = listOfRestaurants.filter((res) => {
                        return res.info.avgRating > 4
                    })
                    setlistOfRestaurants(filteredList)
                }}> Top rated restro</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((res) => {
                        return <RestorantCard resdata={res} key={res.info.id} />
                    })
                }
            </div>
        </div>
    );
};
export default Body;