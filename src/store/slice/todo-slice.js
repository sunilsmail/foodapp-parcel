import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getTodosAsync from "../../feature/todo/service/todoService";

const getTodos = createAsyncThunk("get/todos", async ({ pageNumber, itemsPerPage }) => {
    return await getTodosAsync(pageNumber, itemsPerPage);
})


const todoSlice = createSlice({
    name: "todoSlice",
    initialState: {
        todos: {},
        loading: false,
        error: false
    },
    reducers: {
        setTodo: (state, action) => {

        },
        deleteTodo: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        builder.addCase(getTodos.pending, (state, action) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(getTodos.fulfilled, (state, action) => {

            state.todos = action.payload;
            state.loading = false;
            state.error = false;
        });
        builder.addCase(getTodos.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
        });

    }
});
function todoSelector() {
    return store => store?.todo?.todos;
}

// function todoCacheTodo(pageNum) {
//     return store => store?.todo?.cacheData;
// }

export default todoSlice.reducer;

export const todoActions = { getTodos, ...todoSlice.actions };
export const todoSelectors = { todoSelector }