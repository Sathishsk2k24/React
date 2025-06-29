import { IMG_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    var { restratuant } = props;
    var { cloudinaryImageId, name, cuisines, avgRatingString, sla } = restratuant.info;
    return (
        <div className="m-2 p-2 w-56 bg-gray-100 border border-solid hover:bg-gray-200 dark:bg-black dark:text-gray-200 dark:border border-slate-300 dark:hover:bg-gray-900" >
            <img className="rounded-md w-60 h-40" src={IMG_URL + cloudinaryImageId}></img>
            <h3 className="my-2 font-bold text-lg"> {name}</h3>
            <div className="break-words "><h4>{cuisines.join(",").length > 11 ? cuisines.slice(0, 2) + ",..." : cuisines.join(",")}</h4></div>
            <h4 className="my-1">{avgRatingString}</h4>
            <h4 className="my-1">{sla.slaString}</h4>
        </div>
    )
}
export const vegOnlyRestaurant = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute mx-2 p-2 bg-green-500 text-white dark:text-black rounded-lg">Veg-Only</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
export default RestaurantCard