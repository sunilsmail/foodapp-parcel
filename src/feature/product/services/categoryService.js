import { FETCH_CATEGORIES_URL } from "../../../constants";
import fetchRetry from "../../../services/retryService";



async function getAllCategories() {
    const catRes = await fetchRetry(FETCH_CATEGORIES_URL, 600, 10);
    const respCats = await catRes.json();
    return respCats;
}


export { getAllCategories };