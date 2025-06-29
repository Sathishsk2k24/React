import { useContext, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    let [actionName, setActionName] = useState("Login");
    const { name } = useContext(userContext);
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems);
    return (
        <div className="flex justify-between border shadow-lg bg-gray-10 dark:text-white">
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">AboutUs</Link></li>
                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4">
                        <div className="flex">
                            <Link to="/cart">Cart</Link>
                            {cartItems && cartItems.length > 0 && <div className="bg-red-400 rounded-full w-4 h-4 mr-0 ml-2"> <span className="text-sm">{cartItems.length}</span></div>}
                        </div>
                    </li>

                    <button className="px-2" onClick={(event) => {
                        setActionName(event.target.textContent == "Login" ? "Logout" : "Login");
                        event.target.style.backgroundColor = event.target.textContent == "Login" ? "lightcoral" : "lightgreen"
                    }}>{actionName}</button>
                    <li className="px-4 font-bold">{name}!</li>
                </ul>
            </div>
        </div>
    )
}

export default Header