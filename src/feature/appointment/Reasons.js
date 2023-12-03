import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import reasonsList from '../../data/reasonsList';
import arrow from '../../assets/images/arrow.png'

const Imgtag = () => (<img className="w-2 h-2" src={arrow} />);

const Reasons = () => {
    const navigate = useNavigate();
    const [selectedReason, setSelectedReason] = useState(null);


    function selectReason(selectedItem) {
        setSelectedReason(selectedItem);
        if (selectedItem?.children?.length > 0) {
            console.log('multi item selected');
        }
        navigate('/products')
    }
    function getHtml(reason) {

        console.log(Imgtag)
        if (reason?.children?.length > 0) {
            return `${reason.facilityTestTypeValue} ${<Imgtag />}`;
        }
        return reason.facilityTestTypeValue;
    }
    return (
        <div className="grid grid-cols-1 gap-2 
        justify-between m-16 mt-8 font-mono 
        text-white text-sm text-center font-bold leading-6
         bg-stripes-fuchsia rounded-lg
         sm:grid-cols-2">
            {
                reasonsList.filter((item) => item.activeInd === true).map((reason, index) => {
                    return (
                        <div
                            className={reason?.facilityServiceId === selectedReason?.facilityServiceId ?
                                'p-4 rounded-lg shadow-lg bg-gray-700' : 'p-4 rounded-lg shadow-lg bg-gray-500 hover:bg-gray-700'}
                            key={reason.facilityServiceId}
                            title={reason.testDesc}
                            dangerouslySetInnerHTML={{ __html: getHtml(reason) }}
                            onClick={() => selectReason(reason)}
                        />
                    );
                })
            }
        </div>
    );
}

export default Reasons;