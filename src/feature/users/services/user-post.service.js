import { FETCH_POST_URL, FETCH_USERS_URL } from "../../../constants";
import fetchRetry from "../../../services/retryService";

async function fetchPost() {
    const data = await fetchRetry(FETCH_POST_URL);
    return await data.json();
}

async function fetchUsers() {
    const data = await fetchRetry(FETCH_USERS_URL);
    return await data.json();
}

async function fetchUserPosts() {
    const response = await Promise.all([fetchPost(), fetchUsers()]).catch(() => null);
    return response;
}

export default fetchUserPosts;