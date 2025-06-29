import RestaurantCard ,{vegOnlyRestaurant} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
    let [listOfRestaurants, setListOfRestaurants] = useState([]);
    let [searchText, setSearchText] = useState("");
    let [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const VegOnlyRestaurants = vegOnlyRestaurant(RestaurantCard);
    useEffect(() => {
        fetchData();
    }, []);
    let fetchData = async () => {
        var data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9712343&lng=80.2363137&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        var json = await data.json();
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    let onlineStatus = useOnlineStatus();
    if (!onlineStatus) {
        return (
            <div id="offlineMsg" className="m-2">
                <h1>Hey! Let's have some coffee, Until perfect internet connection!</h1>
            </div>
        )
    }
    //conditional rendering
    return listOfRestaurants.length == 0 ? <Shimmer /> : (
        <div className="m-4">
            <div className="my-4 text-black dark:text-white!">
                <input type="text" placeholder="Search restaurant" value={searchText} onChange={(event) => {
                    setSearchText(event.target.value);
                }} className="border border-solid border-black mx-2 px-2 placeholder:text-gray-700 dark:bg-black dark:border dark:border-solid dark:border-white dark:text-white dark:placeholder:text-white"></input>
                <button className="px-2 mx-2 bg-gray-200 rounded-md" onClick={() => {
                    let searchedData = listOfRestaurants.filter(data => data?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurants(searchedData);
                }}>Search</button>
                <button className="px-2 bg-blue-100 rounded-md" onClick={() => {
                    let filterRestaurants = listOfRestaurants.filter(data => Number(data?.info?.avgRatingString) > 4.5);
                    setFilteredRestaurants(filterRestaurants);
                }}>Top Rated Restaurants</button>
            </div>

            <div className="flex flex-wrap">
                {
                    filteredRestaurants.map((data) => <Link to={"restaurants/" + data?.info?.id} key={data?.info?.id}> {data?.info?.veg ? <VegOnlyRestaurants restratuant={data}/> : <RestaurantCard restratuant={data} />}</Link>)
                }
            </div>

        </div>
    )
}

export default Body