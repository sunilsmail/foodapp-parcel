import logo from '../assets/images/roast-chicken-svgrepo-com7.svg'
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import UserContext from '../config/QuoteProvider';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions, cartSelectors } from '../store/slice/cart-slice';
const Header = () => {
    const { getCartItems } = cartActions;
    const { getCartItemsSelector } = cartSelectors;
    const { username } = useContext(UserContext);
    const dispatch = useDispatch();
    const cartLength = useSelector(getCartItemsSelector());


    useEffect(() => {
        dispatch(getCartItems());
    }, []);

    return (
        <div className="header">

            <span className="logo">
                <Link activeclassname="active" to="/">
                    <img className="header-icon" src={logo} />
                </Link>
            </span>
            <span>Loggedin User Name: {username}</span>
            <div className="header-right">
                <Link activeclassname="is-active" to="/">Home</Link>
                <Link activeclassname="is-active" to="products">Products</Link>
                <Link activeclassname="active" to="users">Users</Link>
                <Link activeclassname="active" to="quotes">Quotes</Link>
                <Link activeclassname="active" to="todo">Todo</Link>
                <Link activeclassname="active" to="cart">Cart
                    <sup className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {cartLength?.length}
                    </sup>
                </Link>
                <Link activeclassname="reasons" to="reasons">Reasons</Link>
            </div>
        </div>
    );
}

export default Header;