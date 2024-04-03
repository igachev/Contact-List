
import {useRouteError} from "react-router-dom";
export default function Error() {

const error = useRouteError()
//console.log(error.message)
    return (
        <div>
               <p>The page you are trying to access is not available.</p>
               <p>{error.statusText || error.message}</p>
        </div>
    )

}