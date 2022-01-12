import { db } from "../../senstive/firebase-config";
import {
    query,
    getDocs,
    collection,
    where,
    orderBy,
    setDoc,
    onSnapshot, 
    limit
} from "firebase/firestore"
import { LoadingContext, UserContext } from "./others/contexts"
import {IconContext} from "react-icons"
import { Link as button, Outlet, useLocation } from "react-router-dom";
import {v4 as uuidv4} from "uuid"
import { useRef, useState, useEffect } from "react";
import Bill from "./bills/Bill";
function Bills() {
    // this is the buttons that are responsed to navigate to specifec bills
    const billTypesBtns = [
        {name:"All", active: true},
        {name:"Confirmed", active: false},
        {name:"Pending", active: false},
        {name:"Deleted", active: false}
    ]
    // the container of the types btns
    const TypesOfBillsBtnsContainer = useRef();

    // bills status, is it pending, or confirmed?
    /**
     * we have four types of bills, three if we are so specifec :
     * the All which is gonna get all the bills .
     * the Pending which is gonna get all the pending bills that they are not finished .
     * the Confirmed which is gonna get all the bills that they are not finished .
     * the Deleted which is gonna get all the deleted bills that some employ deleted it.
     */
    const [getBillsByTypeStatus, setGetBillsByTypeStatus] = useState("All")

    // the bill rows that we will request
    const [billsRows, setBillsRows] = useState(30)

    // The bills
    const [bills, setBills] = useState([])

    // current bill
    const [currentBill, setCurrentBill] = useState(null)

    // get the bills on order and set them to bills
    useEffect(() => {
        (async ()=>{

            const billsRef = collection(db, "bills")
            // qry stands for query
            let qry = query(billsRef, orderBy("createdAt", "desc"), limit(billsRows));

            if(getBillsByTypeStatus.toLowerCase() == "pending"){
                qry = query(billsRef, where("finished", "==", false), orderBy("createdAt", "desc"), limit(billsRows));
            }else if(getBillsByTypeStatus.toLowerCase() == "confirmed"){
                qry = query(billsRef, where("finished", "==", true), orderBy("createdAt", "desc"), limit(billsRows));
            }else if(getBillsByTypeStatus.toLowerCase() == "deleted"){
                qry = query(billsRef, where("deleted", "==", true), orderBy("createdAt", "desc"), limit(billsRows));
            }


            onSnapshot(qry, (snapshot)=>{
                let bills = [];
                snapshot.docs.forEach((doc)=>{
                    bills.push({id:doc.id, ...doc.data()})
                })
                setBills(bills)
                console.log("-----", billsRows, getBillsByTypeStatus)
            })




        })();
        console.log(currentBill)

    }, [billsRows, getBillsByTypeStatus])


    useEffect(() => { 
        if(currentBill){
            console.log(currentBill.createdAt.toDate())
            console.log(currentBill.createdAt.toDate().toGMTString())
        }
    }, [currentBill])

    const route = useLocation()

    return ( 
        
        <div className="Bills-component flex flex-col h-full w-full bg-slate-100">
            {/* upper navbar where to choose the pending and others bills , also to filter the bills */}
            <div className="overflow-hiddennavbar flex justify-start items-start border-b-4 border-stone-300 bg-white w-full flex-col-reverse h-[14%] text-black shadow-lg z-10 rounded-b-3xl">
                <div className="types w-8/12 flex justify-between sm:w-full md:w-10/12  items-stretch h-full px-8 smm:h-1/2" ref={TypesOfBillsBtnsContainer}>
                    {billTypesBtns && billTypesBtns.map((btn)=>{

                        return <button
                                     key={uuidv4()}
                                     className={`${getBillsByTypeStatus == btn.name ? "activeLinkBtn" : ""} BillsTypesBtn flex justify-center items-center text-black text-lg font-normal px-2`}
                                     onClick={()=>{setGetBillsByTypeStatus(btn.name)}}
                                     >{btn.name}</button>
                    })}
                </div>
                <div className="filtering border-stone-800 w-full h-full smm:h-1/2 flex justify-end items-center px-2 z-0">
                    <div className="flex justify-center items-center">
                        <label htmlFor="rows">Rows</label>
                         <select
                            type="number" 
                            id="rows"
                            className="border-2 border-stone-800 rounded-lg px-3 py-1 mx-1 cursor-pointer focus-within:border-stone-400 hover:bg-cyan-200 focus-within:bg-cyan-200" 
                            defaultValue={billsRows} 
                            onChange={(el)=>{
                                setBillsRows(Number(el.target.value))
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
            <div className="workplace h-[86%] smm:h-[86%] bg-white flex ">
                <div style={{"zIndex":"9"}} className="bills w-1/2 max-w-[50%] bg-[#eef3f7] after:w-full after:h-4 after:bg-slate-100 after:content-[''] after:absolute after:top-0 after:-translate-y-full relative h-full shadow-[0px_0px_10px_2px] shadow-[#c5c5c5] rounded-br-2xl rounded-tr-2xl" >
                    <div className="h-full flex flex-col w-full ">
                        <div className="h-full w-full max-h-[100%] overflow-x-visible overflow-y-auto">
                            {bills && bills.reverse().map((bill)=>{
                                return <Bill key={uuidv4()} bill={bill} setCurrentBill={setCurrentBill} currentBill={currentBill} />
                            })}
                        </div>
                    </div>
                </div>
                <div className="bill w-1/2 h-full text-gray-700" >
                        {currentBill && 
                            <div className="relative pt-8  bg-white h-full w-full ">
                                <span style={{"transition" : "all .2s ease-in-out", "zIndex":"8"}} title="close this bill" className="cursor-pointer absolute top-4 right-6 text-3xl text-gray-300 hover:text-white drop-shadow-lg py-1 px-6 bg-red-700 hover:bg-red-500 rounded-lg" onClick={()=>{setCurrentBill(null)}}>X</span>
                                <div className="my-2 text-xl ">
                                    <div className="title text-3xl text-center block mb-4">Bill</div>
                                    <div className="text-center">
                                        <div>BILL Number : <span className="font-medium">{currentBill.billIDNumber}</span></div> 
                                        <div>Bill Date : <span className="font-medium">{currentBill.createdAt.toDate().toUTCString()}</span></div> 
                                    </div>
                                </div>
                            </div>
                        }
                </div>
            </div>
        </div>
     );
}

export default Bills;