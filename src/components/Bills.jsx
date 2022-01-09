import { db } from "../../senstive/firebase-config";
import {
    query,
    getDocs,
    collection,
    where,
    orderBy,
    setDoc
} from "firebase/firestore"
import { LoadingContext, UserContext } from "./contexts"
import {IconContext} from "react-icons"
import { Link, Outlet } from "react-router-dom";
import {v4 as uuidv4} from "uuid"

function Bills() {
    // this is the buttons that are responsed to navigate to specifec bills
    const billTypesBtns = [
        {name:"All"},
        {name:"Confirmed"},
        {name:"Pending"},
        {name:"Deleted"}
    ]

    return ( 
        <div className="Bills-component flex flex-col h-full">
            {/* upper navbar where to choose the pending and others bills , also to filter the bills */}
            <div className="navbar flex justify-center items-center h-[10%]">
                <div className="types">
                    {billTypesBtns && billTypesBtns.map((btn)=>{
                        return <Link
                                     key={uuidv4()}
                                     className="" 
                                     to={btn.name}
                                     >{btn.name}</Link>
                    })}
                    <button></button>
                </div>
                <div className="line separator"></div>
                <div className="filtering"></div>
            </div>
            <div className="workplace h-[90%]">
                <Outlet />
            </div>

        </div>
     );
}

export default Bills;