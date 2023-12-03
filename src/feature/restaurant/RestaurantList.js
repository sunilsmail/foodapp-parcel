import useFetchRestaurant from "../../hooks/useFetchRestaurant";
import useFetchProducts from "../../hooks/useFetchProducts";
import Shimmer from "../../Shimmer";
import Restaurant from "./Restaurant";

const RestaurantList = () => {


    const data = useFetchRestaurant();
    try {
        const data2 = useFetchProducts();
    } catch (ex) {
        console.log(ex)
    }
    if (!data) {
        return <Shimmer />;
    }
    return (
        <div className="container">
            {
                data.map((ele, index) => {
                    return (<Restaurant restaurant={ele} key={index} />)
                })
            }
        </div>
    );
}

export default RestaurantList;