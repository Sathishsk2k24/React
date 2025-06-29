import { useState } from "react"
import RestaurantCategoryList from "./RestaurantCategoryList"

const RestaurantCategory = ({resCategory, showList, setExpand}) => {
    const [arrow, setArrow]= useState("⬇");
    function handleAccordion(){
        setArrow(showList ? "⬇" :"⬆");
        setExpand();
    }
    return (
        <div className="bg-gray-50 mx-auto my-4 p-2 shadow-lg w-6/12 dark:bg-black dark:shadow-lg border border-white">
            <div className="flex justify-between cursor-pointer" onClick={handleAccordion}>
            <span className="font-bold text-xl">{`${resCategory?.title} (${resCategory?.itemCards?.length})`}</span>
            <span>{arrow}</span>
            </div>
            {showList && <RestaurantCategoryList itemCards = {resCategory.itemCards}/>}
        </div>
    )
}

export default RestaurantCategory