import { FETCH_QUOTES_URL } from "../../../constants";
import fetchRetry from "../../../services/retryService";

async function fetchQuotes() {
    debugger
    const quotesList = await fetchRetry(`${FETCH_QUOTES_URL}?limit=100`, 600, 6);
    return quotesList;
}

export default fetchQuotes;