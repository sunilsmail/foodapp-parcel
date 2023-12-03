import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import Quote from "./Quote";
import fetchQuotes from "./service/QuotesService";
import useFetchQuotes from "./service/useFetchQuotes";

const Quotes = () => {

    const [toggleQuote, setToggleQuote] = useState(null);
    const [allQuotes, setAllQuotes] = useState(null);

    useEffect(() => {
        // const quotes = useFetchQuotes();
        getQuotes();

    }, []);

    async function getQuotes() {
        const data = await fetchQuotes();
        const Quotes = await data.json();
        const quotes = (Quotes.quotes);
        if (quotes) {
            let quotesByAuthor = [];
            for (let item of quotes) {
                const author = quotesByAuthor.findIndex(auth => auth.author.includes(item.author));
                if (author > -1) {
                    quotesByAuthor[author].quotes.push(item);
                } else {
                    quotesByAuthor.push({
                        "author": item.author,
                        "quotes": [{
                            ...item
                        }]
                    });
                }
            }
            quotesByAuthor.sort(function (a, b) {
                return b.quotes.length - a.quotes.length
            });
            setAllQuotes(quotesByAuthor);
        }
    }

    const updateState = (auth) => {
        setToggleQuote((preVal) => {
            if (auth === preVal) return null;

            return auth;
        });
    }

    return (
        <>
            <div className="flex flex-col">

                <Pagination totalItems="100" itemsPerPage="10" />
                {
                    allQuotes?.length > 0 && allQuotes?.map((item, index) => {
                        return (
                            <div key={item.author}>
                                <div className="card rounded-none flex justify-between">
                                    <h1>{item.author}</h1>
                                    {
                                        toggleQuote === item.author
                                            ? <button className="btn btn-blue" onClick={() => updateState(null)}>Hide Quotes {item.quotes.length} </button>
                                            : <button className="btn btn-blue" onClick={() => updateState(item.author)}>Show Quotes {item.quotes.length}  </button>
                                    }
                                </div>
                                {toggleQuote === item.author && <Quote quoutes={item.quotes} />}
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}


export default Quotes;