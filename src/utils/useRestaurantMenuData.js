import { useEffect } from 'react';
import { useState } from 'react';
import { MENU_URL } from './constants';
const useRestaurantMenuData = (resId) => {
    let [resInfo, setResInfo] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    var fetchData = async ()=> {
        const data = await fetch(MENU_URL + resId);
        const jsonData = await data.json();
        setResInfo(jsonData);
    }
    return resInfo

}

export default useRestaurantMenuData