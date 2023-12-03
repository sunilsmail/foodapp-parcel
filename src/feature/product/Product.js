import { useDispatch } from "react-redux";
import { cartActions } from "../../store/slice/cart-slice";
import { productActions } from "../../store/slice/product-slice";

const Product = (props) => {
    const { title, description, thumbnail, category, brand, id } = props;
    const { selectProduct } = productActions;
    const { addItemtoCart } = cartActions;
    const dispatch = useDispatch();

    const handleSelection = (item) => {
        dispatch(selectProduct(item))
    }

    const handleAddtoCart = (item) => {
        dispatch(addItemtoCart(item))
    }

    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 bottom-0">
                <img className="w-96 h-60 max-w-6xl" src={thumbnail} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                        {description}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">##{category}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{brand}</span>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1 " onClick={() => handleAddtoCart(props)}>
                        Add to cart
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleSelection(props)}>
                        View product
                    </button>
                </div>
            </div>
        </>
    );
}

export default Product;