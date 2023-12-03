import { FETCH_PRODUCTSBYCATEGORY_URL, FETCH_PRODUCT_URL } from "../../../constants";
import fetchRetry from "../../../services/retryService";

async function getAllProducts() {
    const productRes = await fetchRetry(FETCH_PRODUCT_URL, 500, 4);
    const respProds = await productRes.json();
    return respProds;
}

async function getProductsByCategory(paramCategory) {
    const productRes = await fetchRetry(`${FETCH_PRODUCTSBYCATEGORY_URL}${paramCategory}`, 1000, 10);
    const respProds = await productRes.json();
    return respProds;
}

export { getAllProducts, getProductsByCategory };