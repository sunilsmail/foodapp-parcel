import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_URL } from "../constants"

const useFetchRestaurant = () => {

    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        fetchRestaurants().catch(e => {
            console.error('fetch api failed')
            return null;
        });
        return () => { }
    }, []);

    async function fetchRestaurants() {
        const res = await fetch(FETCH_RESTAURANT_URL);
        const restaurantData = await res.json();
        setRestaurant(restaurantData?.data?.cards[2]?.data?.data?.cards);
    }
    return restaurant;
}


export default useFetchRestaurant;