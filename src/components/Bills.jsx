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
import { useRef, useState, useEffect } from "react";

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

    const [getLastNumberBills, setGetLastNumberBills] = useState(30)

    useEffect(() => {
        console.log(getLastNumberBills)
    }, [getLastNumberBills])


    const route = useLocation()

    return ( 
        <div className="Bills-component flex flex-col h-full w-full">
            {/* upper navbar where to choose the pending and others bills , also to filter the bills */}
            <div className="navbar flex justify-center items-center h-[6%] bg-white w-full smm:flex-col-reverse smm:h-[10%] text-black">
                <div className="types w-1/2 smm:w-full flex justify-between border-b-4 border-stone-300 items-stretch h-full px-2 smm:h-1/2" ref={TypesOfBillsBtnsContainer}>
                    {billTypesBtns && billTypesBtns.map((btn)=>{
                        return <Link
                                     key={uuidv4()}
                                     className={`${("/welcome/bills/"+btn.url == route.pathname ) || ("/welcome/bills"+btn.url == route.pathname ) ? "activeLinkBtn" : ""} BillsTypesBtn flex justify-center items-center text-black px-2`}
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
                <div className="filtering border-l-4 smm:border-l-0  border-stone-800 w-1/2 smm:w-full h-full smm:h-1/2 flex justify-end items-center px-2">
                    <div className="flex justify-center items-center">
                        <label htmlFor="rows">Rows</label>
                         <select
                            type="number" 
                            id="rows"
                            className="border-4 border-stone-800 rounded-lg px-3 mx-1 cursor-pointer focus-within:border-sky-600" 
                            defaultValue={getLastNumberBills} 
                            onChange={(el)=>{
                                setGetLastNumberBills(Number(el.target.value))
                            }}
                            >
                                <option value="10">10</option>
                                <option value="20" defaultChecked>20</option>
                                <option value="30">30</option>
                                <option value="40">40</option>
                                <option value="50">50</option>
                                <option value="60">60</option>
                                <option value="70">70</option>
                                <option value="80">80</option>
                                <option value="90">90</option>
                                <option value="100">100</option>
                            </select>
                    </div>
                </div>
            </div>
            <div className="workplace h-[94%] smm:h-[90%] bg-slate-700">
                <Outlet />
            </div>

        </div>
     );
}

export default Bills;