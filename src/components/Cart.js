import RestaurantCategoryList from "./RestaurantCategoryList"
import { useDispatch, useSelector } from "react-redux"
import { clearItems } from "../utils/cartSlice"
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearItems());
    }
    return (
        <div className="text-center w-6/12 m-auto p-4">
            <h1 className="text-xl font-bold">Cart</h1>
            {cartItems && cartItems.length > 0 && <button className="bg-gray-600 p-2 m-2 text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>

            }
            {cartItems && cartItems.length > 0 ? <div className="text-left">
                <RestaurantCategoryList itemCards={cartItems} />
            </div>
                : <h1 className="text-2xl font-bold p-4">The cart is empty!! Please Add Items to the cart</h1>}
        </div>
    )
}

export default Cart