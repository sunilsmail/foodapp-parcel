const { configureStore } = require("@reduxjs/toolkit");
import ProductReducer from './slice/product-slice';
import CartReducer from './slice/cart-slice';
import TodoReducer from './slice/todo-slice';
const store = configureStore({
    reducer: {
        product: ProductReducer,
        cart: CartReducer,
        todo: TodoReducer
    }
});

export default store;