import { useState, useEffect } from "react"
import MenuShimmer from "./MenuShimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";
import { MENU_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
    const [restMenuData, setRestMenuData] = useState([]);
    const [menu, setMenu] = useState([]);
    const [accordionData, setAccordionData] = useState([]);
    const { resId } = useParams();
    const [expandedIndex ,setExpandedIndex] = useState(null);
    // let fetchedMenuData = useRestaurantMenuData(resId);
    // if(fetchedMenuData.length > 0){
    //         setRestMenuData(fetchedMenuData?.data?.cards[2]?.card?.card?.info);
    //     setMenu(fetchedMenuData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(data=>data.card.card.hasOwnProperty("title")).map(filteredData=>({title: filteredData.card.card.title,id: filteredData.card.card.categoryId})));
    // }else {`
    //     setRestMenuData([]);
    //     setMenu([]);
    // }
    useEffect(() => {
        fetchMenu();
    }, []);

    let fetchMenu = async () => {
        let data = await fetch(MENU_URL + resId);
        let jsonData = await data.json();
        setRestMenuData(jsonData?.data?.cards[2]?.card?.card?.info);
        setMenu(jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(data => data.card.card.hasOwnProperty("title")).map(filteredData => ({ title: filteredData.card.card.title, id: filteredData.card.card.categoryId })));
        setAccordionData(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(res => res?.card?.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))
    }
    return restMenuData.length == 0 ? <MenuShimmer /> : (
        <div>
            <div className="m-4">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-2xl">{restMenuData?.name}</h1>
                    <p className="font-bold my-4 text-xl">{restMenuData.cuisines.join(",")}</p>
                    <div className="flex justify-between">
                        <h1 className="font-bold mx-2">Rating: {restMenuData?.avgRatingString} </h1>
                        <h1 className="font-bold">Delivery In: {restMenuData?.sla?.slaString?.toLowerCase()}</h1></div>
                </div>

            </div>
            <h2 className="font-bold text-lg w-6/12 m-auto">Menu Categories:</h2>
            <div>
                {accordionData.map((data, index) => {
                    //controlled components
                    return <RestaurantCategory key={data?.card?.card.categoryId} resCategory={data.card.card} showList={index == expandedIndex && true} setExpand = {()=> setExpandedIndex(index)} />
                })}
            </div>
        </div>
    )
}

export default RestaurantMenu