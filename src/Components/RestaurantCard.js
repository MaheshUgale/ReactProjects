import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0",
};


const RestorantCard = (props) => {
    const { resdata } = props;
    const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } = resdata?.info
    return (
        <div className="res-card" style={styleCard}>
            <div>
                <img
                    className="cardImg"
                    src={CDN_URL
                        +
                        cloudinaryImageId
                    }
                />
            </div>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString} </h4>
        </div>
    );
};

export default RestorantCard;