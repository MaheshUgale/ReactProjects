
import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = (card) => {
    console.log(card?.category?.itemCards);
    const [show, setshow] = useState(false)
    const handleClick = () => {
        setshow(!show)
    }
    return (
        <div className="bg-gray-50 p-4 my-2 w-[700px] mx-auto shadow-lg  cursor-pointer rounded-md">
            <div className="flex justify-between" onClick={handleClick}>
                <span className="font-bold">{card?.category?.title} ({card?.category?.itemCards.length})</span>
                < span >⬇️</span >
            </div >

            {show && <ItemList list={card?.category?.itemCards} />}
        </div >
    )
}

export default RestaurantCategory;