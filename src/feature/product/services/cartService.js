import { FETCH_CART_URL } from "../../../constants";
import fetchRetry from "../../../services/retryService";



async function getCartItemsAsync() {
    const cartResp = await fetchRetry(FETCH_CART_URL, 600, 10);
    const respCats = await cartResp.json();
    return respCats;
}


export { getCartItemsAsync };