import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams()

    const resInfo = useRestaurantMenu(resId);
    if (resInfo === null) {
        return <Shimmer />
    }


    const { name, costForTwoMessage, cuisines } = resInfo?.data?.cards[2]?.card?.card?.info || '';
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
