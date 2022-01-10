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
import { Link, Outlet, useLocation } from "react-router-dom";
import {v4 as uuidv4} from "uuid"
import { useRef } from "react";

function Bills() {
    // this is the buttons that are responsed to navigate to specifec bills
    const billTypesBtns = [
        {name:"All", url:""},
        {name:"Confirmed", url:"confirmed"},
        {name:"Pending", url:"pending"},
        {name:"Deleted", url:"deleted"}
    ]
    // the container of the types btns
    const TypesOfBillsBtnsContainer = useRef();


    const route = useLocation()

    return ( 
        <div className="Bills-component flex flex-col h-full w-full">
            {/* upper navbar where to choose the pending and others bills , also to filter the bills */}
            <div className="navbar flex justify-center items-center h-[6%] bg-white w-full smm:flex-col-reverse smm:h-[12%] border-b-4 border-stone-300">
                <div className="types w-1/2 smm:w-full flex justify-between items-end h-full px-2 smm:h-1/2 smm:border-t-4 border-black" ref={TypesOfBillsBtnsContainer}>
                    {billTypesBtns && billTypesBtns.map((btn)=>{
                        return <Link
                                     key={uuidv4()}
                                     className={`${("/welcome/bills/"+btn.url == route.pathname ) || ("/welcome/bills"+btn.url == route.pathname ) ? "activeLinkBtn" : ""} BillsTypesBtn text-black px-2`}
                                     to={btn.url ? btn.url :""}
                                    //  onClick={(el)=>{
                                    //      console.log(TypesOfBillsBtnsContainer)
                                    //     const btns = TypesOfBillsBtnsContainer.current.querySelectorAll(".BillsTypesBtn")
                                    //     btns.forEach(element => {
                                    //         element.classList.remove("activeLinkBtn")
                                    //     });
                                    //     el.target.classList.add("activeLinkBtn")
                                    //  }}
                                     onClick={()=>{console.log(route)}}
                                     >{btn.name}</Link>
                    })}
                </div>
                <div className="filtering border-l-4 smm:border-l-0  border-stone-800 w-1/2 smm:w-full h-full smm:h-1/2"></div>
            </div>
            <div className="workplace h-[94%] smm:h-[88%] bg-slate-700">
                <Outlet />
            </div>

        </div>
     );
}

export default Bills;