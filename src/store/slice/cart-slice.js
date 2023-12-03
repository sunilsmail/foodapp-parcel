import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCartItemsAsync } from "../../feature/product/services/cartService";

const initialState = {
    items: [],
    loading: false,
    failed: false
}

const getCartItems = createAsyncThunk('get/cart', async () => {
    return await getCartItemsAsync()
});

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemtoCart: (state, action) => {
            state.items.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCartItems.pending, (state, action) => {
            state.loading = true;
            state.failed = false;
        });
        builder.addCase(getCartItems.fulfilled, (state, action) => {
            state.failed = false;
            state.loading = false;
            state.items = action.payload.carts;
        });
        builder.addCase(getCartItems.rejected, (state, action) => {
            state.failed = true;
            state.loading = false;
        });
    }
});

export default cartSlice.reducer;

export const cartActions = { ...cartSlice?.actions, getCartItems };
export const cartSelectors = { getCartItemsSelector };


function getCartItemsSelector(state) {
    return state => state?.cart?.items;
}