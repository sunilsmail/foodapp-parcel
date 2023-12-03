import { useEffect, useState } from "react";
import { getAllProducts, getProductsByCategory } from "../feature/product/services/productService";

const useFetchProducts = (paramCategory) => {


    const [products, setProducts] = useState(null);

    useEffect(() => {
        // getAllProducts().then((data) => {
        //     console.log(data)
        //     setProducts(data.products);
        // })
        if (paramCategory == null) {
            getProds().catch((e) => {
                console.log(e)
            });
        } else {
            getCategoryProd(paramCategory).catch((e) => {
                console.log(e)
            });

        }
    }, [paramCategory]);

    async function getProds() {
        const respProds = await getAllProducts();
        setProducts(respProds.products);
    }
    async function getCategoryProd(paramCategory) {
        const respProds = await getProductsByCategory(paramCategory);
        setProducts(respProds.products);
    }



    return products;

}

export default useFetchProducts;