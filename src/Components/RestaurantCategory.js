
import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    const handleClick = () => {
        setShowIndex()
    }
    return (
        <div className="bg-gray-50 p-4 my-2 w-[700px] mx-auto shadow-lg  cursor-pointer rounded-md">
            <div className="flex justify-between" onClick={handleClick}>
                <span className="font-bold">{data?.title} ({data?.itemCards.length})</span>
                < span>⬇️</span >
            </div>

            {showItems && <ItemList list={data?.itemCards} />}
        </div >
    )
}

export default RestaurantCategory;