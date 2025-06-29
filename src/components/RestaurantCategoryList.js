import { IMG_URL } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addItems } from "../utils/cartSlice";
const RestaurantCategoryList = ({ itemCards }) => {
  const dispatch = useDispatch();
  const handleCartItems = (cartItem) =>{
    dispatch(addItems(cartItem));
  }

  return (
    <div>{
      itemCards.map((data, index) => {
        return (<div key={data?.card?.info?.id} className={(itemCards.length - 1 == index) ? "p-2 flex justify-between" : "p-2 border-b-2 flex justify-between"}>
          <div className="w-8/12">
            <div className="my-2">
              <div className="flex flex-col">
                <span className="text-md font-bold text-gray-800 dark:text-gray-50">{data?.card?.info?.name}</span>
                <span className="text-sm font-bold"> {`₹ ${data.card.info.price ? data?.card?.info?.price * 0.01 : data?.card?.info?.defaultPrice * 0.01}`}</span>
              </div>
              <div>
                <span className="text-xs text-gray-600 dark:text-gray-50">{data?.card?.info?.description}</span>
              </div>
            </div>
          </div>
          <div className="w-3/12">
            <button className="absolute bg-gray-600 text-white border-solid border-black rounded-lg p-2" onClick={() => handleCartItems(data)}>Add</button>
            <img src={IMG_URL + data.card.info.imageId} className="rounded-lg" />
          </div>
        </div>)
      })
    }</div>
  )
}

export default RestaurantCategoryList