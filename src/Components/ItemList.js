import { CDN_URL } from "../utils/constants";

const ItemList = ({ list }) => {
    console.log(list)
    return (
        <div className="transition ease-in-out delay-15000">
            {list.map((item) => (
                <div key={item.card.info.id} className=" w-[100%] flex gap-4 text-left p-3 border-b-2 border-gray-200 relative ">
                    <div className="my-3 w-9/12">
                        <div><span className="font-semibold">{item.card.info.name}</span> - ₹<span>{item.card.info.price / 100}</span></div>
                        <p className="my-2"><span>⭐</span>{item.card.info.ratings.aggregatedRating.rating}({item.card.info.ratings.aggregatedRating.ratingCountV2})</p>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 px-3">
                        <div className="absolute">
                            <button className="p-3 bg-black text-teal-50 rounded-lg shadow-lg ">Add +</button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} className="rounded-lg w-full h-full" />


                    </div>
                </div>

            ))}
        </div>
    )
}

export default ItemList;