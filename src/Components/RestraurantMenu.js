import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams()
    console.log(resId);
    useEffect(() => {
        fetchMenu();
    }, []);

    console.log(MENU_API + resId);
    const fetchMenu = async () => {
        try {
            const response = await fetch(MENU_API + resId);
            const data = await response.json();
            setResInfo(data);
        } catch (error) {
            console.error("Error fetching menu:", error);
            // Handle error state or retry logic if needed
        }
    };
    if (resInfo === null) {
        return <Shimmer />
    }
    // console.log(resInfo?.data?.cards?.[2]?.card?.card?.info);
    // Destructure `name` property with default value from resInfo
    const { name, costForTwoMessage, cuisines } = resInfo?.data?.cards[2]?.card?.card?.info || '';
    console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR)
    const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}- {costForTwoMessage}</h2>
            <h3>Menu</h3>
            <h3>
                <ul>
                    <li>{itemCards.map(item => <li key={item.card.info.id}>{item.card?.info?.name} - Rs{item.card?.info?.price / 100 || item.card?.info?.defaultPrice}</li>)}</li>
                </ul>
            </h3>
        </div>
    );
};

export default RestaurantMenu;
