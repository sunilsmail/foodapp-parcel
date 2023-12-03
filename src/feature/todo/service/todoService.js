import { FETCH_TODO_URL } from "../../../constants";

async function getTodosAsync(pageNumber, itemsPerPage) {
    const skip = pageNumber * itemsPerPage;
    const todos = await fetch(`${FETCH_TODO_URL}?skip=${skip}&limit=${itemsPerPage}`);
    const json = await todos.json();
    return json;
}
export default getTodosAsync;