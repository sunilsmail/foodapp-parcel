import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Pagination";
import UserContext from "../../config/QuoteProvider";
import { todoActions, todoSelectors } from "../../store/slice/todo-slice";

const Todo = () => {
    const dispatch = useDispatch();
    const [pageNumber, setPageNumber] = useState(1);
    const { getTodos } = todoActions;
    const { todoSelector } = todoSelectors;
    const Todos = useSelector(todoSelector());
    const [itemsPerPage, setItemsPerPage] = useState(10);
    useEffect(() => {
        dispatch(getTodos({ pageNumber, itemsPerPage }));
    }, [pageNumber]);
    const handlePageChange = (pageNum) => {
        setPageNumber(pageNum);

    }
    return (
        <div>
            {Todos?.total > 0 && <Pagination onPageChange={handlePageChange} totalItems={Todos.total} itemsPerPage={itemsPerPage} pageSelect={pageNumber} />}
            <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
                <div className="bg-white rounded shadow p-6 m-4 w-full">
                    <div className="mb-4">
                        <h1 className="text-grey-darkest">Todo List</h1>
                        <div className="flex mt-4">
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" />
                            <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Add</button>
                        </div>
                    </div>
                    <div>
                        {
                            Todos?.todos?.map((item, index) => {
                                return (<div className="flex mb-4 items-center" key={item?.id}>
                                    <p className="w-full text-grey-darkest">{item?.todo}</p>
                                    <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
                                    <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
                                </div>)
                            })
                        }
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );




    // const { username, setUserName } = useContext(UserContext);
    // return (

    // <div className="grid gap-6 mb-6 md:grid-cols-2">
    //     <div>
    //         <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
    //         <input type="text" id="first_name"
    //             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //             placeholder="John" onChange={(e) => setUserName(e.target.value)} value={username} required />
    //     </div>
    // </div>);


}


export default Todo;