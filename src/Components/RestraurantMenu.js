import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(0);
    const { resId } = useParams();
    const dummmy = "dummy data"
    const resInfo = useRestaurantMenu(resId);
    if (resInfo === null) {
        return <Shimmer />;
    }
    const { name, costForTwoMessage, cuisines } =
        resInfo?.data?.cards[2]?.card?.card?.info || "";
    const categories =
        resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
                c?.card?.card?.["@type"] ==
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

    return (
        <div className="menu text-center">
            <h1 className="font-bold my-10 text-[30px]">{name}</h1>
            <h2 className="font-bold my-6">
                {cuisines.join(", ")}- {costForTwoMessage}
            </h2>
            <h3>Menu</h3>

            <div>
                {categories.map((category, index) => (
                    <RestaurantCategory
                        key={category?.card?.card?.title}
                        data={category?.card?.card}
                        showItems={index === showIndex ? true : false}
                        setShowIndex={() => setShowIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default RestaurantMenu;
