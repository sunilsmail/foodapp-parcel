import { useState } from "react";

const Quote = ({ quoutes }) => {
    const [slectedIds, setSelectedIds] = useState([]);

    const updateSelection = (id) => {
        setSelectedIds((selected) => {
            if (!selected.includes(id)) {
                selected.push(id);
                return selected;
            }
            return selected;
        });
    }
    return (<div className="bg-blue-600 p-3 m-2">
        {
            quoutes?.map((item, index) => {
                return (
                    <div
                        key={item.id}
                        className="card rounded-none flex justify-between hover:bg-slate-300"
                        onClick={() => updateSelection(item.id)}
                    >
                        {item.quote} {slectedIds}
                    </div>
                )
            })
        }
    </div>);
}

export default Quote;