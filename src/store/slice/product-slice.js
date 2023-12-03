import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "../../feature/product/services/categoryService";
import { getAllProducts, getProductsByCategory } from "../../feature/product/services/productService";

const initialState = {
    products: [],
    categories: [],
    selectedProduct: null,
    selectedCategory: null,
    failed: false,
    loading: false,
    categoriesLoading: false,
    categoriesFailed: false
};

const getProducts = createAsyncThunk('get/products', async (selectedCategory) => {
    if (selectedCategory) {
        return await getProductsByCategory(selectedCategory);
    }
    return await getAllProducts();
});

const getCategories = createAsyncThunk('get/categories', async () => {
    return await getAllCategories();
});

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        selectProduct: (state, action) => {
            console.log(state)
            state.selectedProduct = action.payload;
            console.log(state)
        },
        selectCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, { payload }) => {
            state.products = [...payload.products];
            state.loading = false;
        });
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getProducts.rejected, (state) => {
            state.failed = true;
            state.loading = false;
        });
        builder.addCase(getCategories.pending, (state, action) => {
            state.categoriesLoading = true;
            state.categoriesFailed = false;
        });
        builder.addCase(getCategories.fulfilled, (state, action) => {
            const { payload } = action;
            state.categories = [...payload];
        });
        builder.addCase(getCategories.rejected, (state, action) => {
            state.categoriesFailed = true;
            state.categoriesLoading = false;
        });
    }
});

// export const { getdata } = productSlice.actions;
export const productActions = {
    ...productSlice.actions,
    getProducts,
    getCategories,
}
export const productSelects = {
    allProductsSelector,
    getAllCategoriesSelector
}
export const getAllProductsSelector = (state) => state.products;

export default productSlice.reducer;

function allProductsSelector() {
    return state => state.product.products;
}

function getAllCategoriesSelector() {
    return state => state.product.categories;
}
