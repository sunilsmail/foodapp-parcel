const DummyHost = 'https://dummyjson.com/'
const FETCH_RESTAURANT_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING";
const IMG_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
const FETCH_PRODUCT_URL = `${DummyHost}products/`;
const FETCH_CART_URL = `${DummyHost}carts/`;
const FETCH_USERS_URL = `${DummyHost}users/`;
const FETCH_COMMENTS_URL = `${DummyHost}comments/`;
const FETCH_QUOTES_URL = `${DummyHost}quotes/`;
const FETCH_TODO_URL = `${DummyHost}todos/`;
const FETCH_CATEGORIES_URL = `${DummyHost}products/categories`;
const FETCH_PRODUCTSBYCATEGORY_URL = `${DummyHost}products/category/`;
const FETCH_POST_URL = `${DummyHost}posts/`;



/**
 * https://dummyjson.com/products?skip=5&limit=10 for pagination
 * https://dummyjson.com/products/1 for getting single prod
 * https://dummyjson.com/products/search?q=Laptop  search records
 * https://dummyjson.com/products/categories list categories
 * https://dummyjson.com/products/category/smartphones get product by category
 */


export {
    FETCH_RESTAURANT_URL,
    IMG_URL,
    FETCH_PRODUCT_URL,
    FETCH_CART_URL,
    FETCH_USERS_URL,
    FETCH_COMMENTS_URL,
    FETCH_QUOTES_URL,
    FETCH_TODO_URL,
    FETCH_CATEGORIES_URL,
    FETCH_PRODUCTSBYCATEGORY_URL,
    FETCH_POST_URL
}