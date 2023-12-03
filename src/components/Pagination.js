import { useEffect, useState } from "react";
import getTodosAsync from "../feature/todo/service/todoService";

const Pagination = ({ totalItems, itemsPerPage, onPageChange, pageSelect }) => {

    const [pages, setPages] = useState([]);
    const [selectedPage, setSelectedPage] = useState();
    const slectedClasses = "relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-400 px-4 py-2 text-sm font-medium text-indigo-600 bg- focus:z-20 hover:bg-indigo-200";
    const notSelected = "relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 bg- focus:z-20 hover:bg-indigo-200";


    useEffect(() => {
        const arrLen = Math.ceil(totalItems / itemsPerPage);
        const items = Array(arrLen - 1).fill("");
        setPages(items);
        setSelectedPage(pageSelect)
    }, [totalItems, itemsPerPage, pageSelect]);

    const handlePageChange = () => {

    }

    return (
        <div className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            <button className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">◀</button>
            {
                pages.map((ele, index) => {
                    return (<button onClick={() => onPageChange(index + 1)} key={index} className={selectedPage === index + 1 ? slectedClasses : notSelected}>
                        {index + 1}
                    </button>)
                })
            }

            <button className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">▶</button>
        </div>
    );
}

export default Pagination;