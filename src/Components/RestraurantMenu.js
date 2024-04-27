import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const { resId } = useParams()

    const resInfo = useRestaurantMenu(resId);
    if (resInfo === null) {
        return <Shimmer />
    }


    const { name, costForTwoMessage, cuisines } = resInfo?.data?.cards[2]?.card?.card?.info || '';
    console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);

    return (
        <div className="menu text-center">
            <h1 className="font-bold my-10 text-[30px]">{name}</h1>
            <h2 className="font-bold my-6">{cuisines.join(", ")}- {costForTwoMessage}</h2>
            <h3>Menu</h3>
            {/* <h3>
                <ul>
                    <li>{itemCards.map(item => <div key={item.card.info.id}>{item.card?.info?.name} - Rs{item.card?.info?.price / 100 || item.card?.info?.defaultPrice}</div>)}</li>
                </ul>
            </h3> */}

            <div>{categories.map((category) => <RestaurantCategory category={category?.card?.card} />)}</div>
        </div>
    );
};

export default RestaurantMenu;
