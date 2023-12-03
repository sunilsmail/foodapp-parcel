import { Suspense } from "react"
import Shimmer from "../Shimmer";


function logData(param) {
    console.log(param)
}

const withSuspense = (Component) => {
    return ({ ...props }) => {

        return (<Suspense fallback={<Shimmer />}>
            <Component {...props} logData={logData} />
        </Suspense>);
    }
}


const HOC = (Component) => {
    return ({ ...props }) => {
        return <Component {...props} />
    }
}

export default withSuspense;