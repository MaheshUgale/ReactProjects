import RestorantCard from "./RestaurantCard";
import { resobj } from "../utils/mockData"

// sending key as a index is not recommneded for looping over a component. becouse the index of perticuler value may change.
const Body = () => {
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    console.log("btn clicked")
                }}> Top rated restro</button>
            </div>
            <div className="res-container">
                {
                    resobj.map((res) => {
                        return <RestorantCard resdata={res} key={res.info.id} />
                    })
                }
            </div>
        </div>
    );
};
export default Body;