// Don't lemme explain you the code. 
// cause I'm the same as you 
// I don't uderstand any word of this shit

import { db } from "../../firebase-config";
import {
    query,
    getDocs,
    getDoc,
    doc,
    collection,
    where,
    orderBy,
    setDoc,
    onSnapshot, 
    limit
} from "firebase/firestore"
import { LoadingContext, EmployeeContext } from "./../others/contexts"
import {IconContext} from "react-icons"
import { Link, Outlet, useLocation, useParams, useNavigate } from "react-router-dom";
import {v4 as uuidv4} from "uuid"
import { useRef, useState, useEffect, useContext } from "react";
import Bill from "./components/Bill";
import CurrentBill from "./components/CurrentBill";
import whenCatchingAnError from "../others/whenCatchingAnError";
function Bills() {

    // if the user wants to get a specifec bill from the url 
    const { billId } = useParams();
    console.log(billId)

    const isMounted = useRef(null)

    const navigate = useNavigate()

    const { employee } = useContext(EmployeeContext)
    const { setLoading } = useContext(LoadingContext);

    // this is the buttons that are responsed to navigate to specifec bills
    const billTypesBtns = [
        {name:"All"},
        {name:"Pending"},
        {name:"Confirmed"},
        {name:"Deleted"}
    ]
    
        /**
         * we have two types of bills, the bills that filtered as order and they are gonna be printed to the dom and the all of the bills so we can filter the bills from the all bills
         */
        // all of the bills
        const [allTheBills, setAllTheBills] = useState([])
        // The bills
        const [bills, setBills] = useState([])

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

    // current bill
    const [currentBill, setCurrentBill] = useState(null)

    // get the bills live on order and set them to bills
    useEffect(() => {
        isMounted.current = true;

            const billsRef = collection(db, "bills")
            // qry stands for query
            let qry = query(billsRef, orderBy("createdAt", "desc"), limit(billsRows));

            try {
                onSnapshot(qry, (snapshot)=>{
                    let newBills = [];
                    snapshot.docs.forEach((doc)=>{
                        newBills.push({id:doc.id, ...doc.data()})
                    })
                    console.log(isMounted)
                    if (isMounted.current == true) {setAllTheBills(newBills)}   
                }, (error)=>{whenCatchingAnError(error)})
            } catch (error) {
                    window.alert(`this might happen bucause of a leak internet connection, Error : ${JSON.stringify(error)}`)
                    console.log(`this might happen bucause of a leak internet connection, Error : ${JSON.stringify(error)}`)
                if (isMounted) setAllTheBills([])
            }

            return () => isMounted.current = false;


    }, [billsRows])
    /**
     * if the types of bills get cahnged then setThebills on order, and also if the current bill is in the bills that are going to be printed in the dom then get it up.setfsdffsdfsdfsdfsdfffffffffffff
     */
    useEffect(() => {
        setBills(filterBills(allTheBills))

        if(currentBill){
            const found = bills.find(item=> item.id == currentBill.id) 
            if (found){
                setCurrentBill(found)
            }
        }
        
    }, [getBillsByTypeStatus])


    // we filter all the bills on order from the getBillsByTypesStatus state
    function filterBills(bills){
        let filteredBills = [];
        if(getBillsByTypeStatus.toLowerCase() == "pending"){
            filteredBills = bills.filter((item)=> item.finished == false && item.deleted == false)
        }else if(getBillsByTypeStatus.toLowerCase() == "confirmed"){
            filteredBills = bills.filter((item)=> item.finished == true && item.deleted == false)
        }else if(getBillsByTypeStatus.toLowerCase() == "deleted"){
            filteredBills = bills.filter((item)=> item.deleted == true)
        }else{
            filteredBills = bills.filter((item)=> item.deleted == false)
        }

        return filteredBills;
    }

    const route = useLocation()



    // if the bills get changed and the current bill isn't on the bills then we take it off otherwise get it
    useEffect(() => {

        if(currentBill){
            const found = bills.find(item=> item.id == currentBill.id) 
            if (found){
                setCurrentBill(found)
            }else{
                setCurrentBill(null)
            }
        }
        
    }, [bills])

    useEffect(() => {

        // if there is an id in the url then print the bill with the same id
        if(billId && bills && employee){
            const found = bills.find(item=> item.id == billId) 
            if (found){
                console.log("hhh", found, currentBill)
                
                navigate("/welcome/bills/")
                setCurrentBill(found)
            }

        }

    }, [employee, bills]);
    


    // if all the bills state is updated then update the printed bills to the dom
    useEffect(() => {
        setBills(filterBills(allTheBills))

    }, [allTheBills])
    


    return ( 
        
        <div className="Bills-component flex flex-col h-full w-full bg-slate-100">
            {/* upper navbar where to choose the pending and others bills , also to filter the bills */}
            <div className="overflow-hiddennavbar flex justify-start items-start border-b-4 border-stone-300 bg-white w-full flex-col-reverse h-[14%] text-black shadow-lg z-10 rounded-b-3xl">
                <div className="types w-8/12 flex justify-between sm:w-full md:w-10/12  items-stretch h-full px-8 smm:h-1/2">
                    {billTypesBtns && billTypesBtns.map((btn)=>{

                        return <button
                                     key={uuidv4()}
                                     className={`${getBillsByTypeStatus == btn.name ? "activeLinkBtn" : ""} BillsTypesBtn flex justify-center items-center text-black text-lg font-normal px-2`}
                                     onClick={()=>{setGetBillsByTypeStatus(btn.name)}}
                                     >{btn.name}</button>
                    }) }
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
                                <option value="20">20</option>
                                <option value="30" defaultChecked>30</option>
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
                <div style={{"zIndex":"9"}} className="bills w-5/12 max-w-[50%] bg-[#eef3f7] after:w-full after:h-4 after:bg-slate-100 after:content-[''] after:absolute after:top-0 after:-translate-y-full relative h-full shadow-[0px_0px_10px_2px] shadow-[#c5c5c5] rounded-br-2xl rounded-tr-2xl" >
                    <div className="h-full flex flex-col w-full ">
                        <div className="h-full w-full max-h-[100%] overflow-x-visible overflow-y-auto">
                            {/* if there isn't any bill then print There is not any bill */}
                            {bills.length ? bills.map((bill)=>{
                                return <Bill key={uuidv4()} bill={bill} bills={bills} setCurrentBill={setCurrentBill} currentBill={currentBill} />
                            })
                                :
                                <div className="w-full p-4 text-center text-lg font-black mt-12 text-gray-400">* There isn't any {getBillsByTypeStatus != "All" && getBillsByTypeStatus.toLowerCase() } bill! *</div>
                            }
                        </div>
                    </div>
                </div>
                <div className="current-bill h-full grid place-items-center text-gray-700 w-7/12 relative bg-white before:-translate-y-full before:bg-white before:absolute before:top-0 left-0 before:w-full before:h-20 ">
                    {/*  if there isn't any current bill then show "select any bill to show here" */}
                    {currentBill ?
                                    <CurrentBill setCurrentBill={setCurrentBill} currentBill={currentBill} employee={employee} />
                                 :  <div className="w-full text-center text-lg font-black p-4 text-gray-400">* Select any bill to show here *</div>
                                }
                </div>
            </div>
        </div>
     );
}

export default Bills;
