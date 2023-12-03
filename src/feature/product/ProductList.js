import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetchCategories from "../../hooks/useFetchCategories";
import useFetchProducts from "../../hooks/useFetchProducts";
import { productActions, productSelects } from "../../store/slice/product-slice";
import Product from "./Product";


const ProductList = ({ logData }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const dispatch = useDispatch();
    const { getProducts, getCategories } = productActions;
    const { allProductsSelector, getAllCategoriesSelector } = productSelects;

    useEffect(() => {
        dispatch(getCategories())
    }, []);
    useEffect(() => {
        dispatch(getProducts(selectedCategory));
    }, [selectedCategory]);

    // const products = useFetchProducts(selectedCategory);
    // const category = useFetchCategories();
    const products = useSelector(allProductsSelector());
    const category = useSelector(getAllCategoriesSelector());

    if (!products || !category) return null;

    logData('Product component resuable logic'); // resuable logic
    return (
        <>
            <select onChange={(e) => setSelectedCategory(e.target.value)}>
                {
                    category.map((cat, index) => {
                        return <option key={cat}>{cat}</option>
                    })
                }
            </select>

            <div className="flex flex-wrap m-10">
                {
                    products.map((prod, index) => {
                        return <Product key={prod.id} {...prod} />
                    })
                }
            </div>
        </>)

}


export default ProductList;


