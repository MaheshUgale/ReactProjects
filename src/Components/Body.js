import RestorantCard from "./RestaurantCard";
import { resobj } from "../utils/mockData"
import { useState } from "react";

// sending key as a index is not recommneded for looping over a component. becouse the index of perticuler value may change.
const Body = () => {
    // state varibale = react hooks -> useState which is like ref in vue
    const [listOfRestaurants, setlistOfRestaurants] = useState(resobj)
    return (
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