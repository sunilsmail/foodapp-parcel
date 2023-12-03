import { useEffect, useState } from "react";
import { getAllCategories } from "../feature/product/services/categoryService";

const useFetchCategories = () => {

    const [category, setCategory] = useState(null);

    useEffect(() => {
        getCategories();
    }, []);

    async function getCategories() {
        const respProds = await getAllCategories();
        setCategory(respProds);
    }


    return category;

}

export default useFetchCategories;