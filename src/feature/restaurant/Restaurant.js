import { IMG_URL } from '../../constants';
import Cuisines from '../../components/Cuisines';
import Star from '../../components/Star';
const Restaurant = (props) => {
    const { name, cloudinaryImageId, avgRating, cuisines, costForTwoString, deliveryTime } = props?.restaurant?.data;
    return (
        <div className="card">
            <img className="img" src={IMG_URL + cloudinaryImageId} />
            <section className="content">
                <p>
                    <b>
                        {name}
                    </b>
                </p>
                <Cuisines cuisines={cuisines} />
                <Star star={+avgRating} costForTwoString={costForTwoString} deliveryTime={deliveryTime} />
            </section>
        </div>
    );
}


export default Restaurant;