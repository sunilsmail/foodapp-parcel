import { useEffect, useState } from "react";
import fetchQuotes from "./QuotesService";

const useFetchQuotes = () => {
    const [quotesList, setQuotesList] = useState(null);
    useEffect(() => {
        getQuotes()
    }, []);
    return quotesList;

    async function getQuotes() {
        const data = await fetchQuotes();
        const Quotes = await data.json();
        setQuotesList(Quotes.quotes);
    }
}



export default useFetchQuotes;