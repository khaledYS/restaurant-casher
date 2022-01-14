// Don't lemme explain you the code. 
// cause I'm the same as you 
// I don't uderstand any word of this shit

import { db } from "../../senstive/firebase-config";
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
import { LoadingContext, UserContext } from "./others/contexts"
import {IconContext} from "react-icons"
import { Link as button, Outlet, useLocation } from "react-router-dom";
import {v4 as uuidv4} from "uuid"
import { useRef, useState, useEffect, useContext } from "react";
import Bill from "./bills/Bill";
function Bills() {

    const { employee } = useContext(UserContext)

    // this is the buttons that are responsed to navigate to specifec bills
    const billTypesBtns = [
        {name:"All"},
        {name:"Pending"},
        {name:"Confirmed"},
        {name:"Deleted"}
    ]

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


            onSnapshot(qry, (snapshot)=>{
                let newBills = [];
                snapshot.docs.forEach((doc)=>{
                    newBills.push({id:doc.id, ...doc.data()})
                })

                let filteredBills = [];
                if(getBillsByTypeStatus.toLowerCase() == "pending"){
                    filteredBills = newBills.filter((item)=> item.finished == false && item.deleted == false)
                }else if(getBillsByTypeStatus.toLowerCase() == "confirmed"){
                    filteredBills = newBills.filter((item)=> item.finished == true && item.deleted == false)
                }else if(getBillsByTypeStatus.toLowerCase() == "deleted"){
                    filteredBills = newBills.filter((item)=> item.deleted == true)
                }else if(getBillsByTypeStatus.toLowerCase() == "all"){
                    filteredBills = newBills.filter((item)=> item.deleted == false)
                }


                setBills(filteredBills)
            })




        })();

    }, [billsRows, getBillsByTypeStatus])


    const route = useLocation()


    function getTheQuantity(bill){
        let newBill = [];
        
        for(const i of bill){
            let found = newBill.findIndex((item)=>item.id == i.id)

            if(found == -1){
                newBill.push({...i, quantity:1})
            }else{
                newBill[found].quantity += 1;
                newBill[found].quantityAmount = newBill[found].cost + i.cost;
            }
        }

        return newBill  
    }

    useEffect(() => {

        if(currentBill){
            const found = bills.find(item=> item.id == currentBill.id) 
            if(!found){
                setCurrentBill(null)
            }else if (found){
                setCurrentBill(found)
            }
        }


    }, [bills])

    useEffect(() => {
        console.log(currentBill)
    }, [currentBill])

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
                <div style={{"zIndex":"9"}} className="bills w-5/12 max-w-[50%] bg-[#eef3f7] after:w-full after:h-4 after:bg-slate-100 after:content-[''] after:absolute after:top-0 after:-translate-y-full relative h-full shadow-[0px_0px_10px_2px] shadow-[#c5c5c5] rounded-br-2xl rounded-tr-2xl" >
                    <div className="h-full flex flex-col w-full ">
                        <div className="h-full w-full max-h-[100%] overflow-x-visible overflow-y-auto">
                            {bills && bills.map((bill)=>{
                                return <Bill key={uuidv4()} bill={bill} bills={bills} setCurrentBill={setCurrentBill} currentBill={currentBill} />
                            })}
                        </div>
                    </div>
                </div>
                <div className="current-bill h-full text-gray-700 w-7/12">
                        {currentBill && 
                            <div className="border-gray-700 h-full w-full ">
                                <div className="relative pt-8 px-2 pb-8 overflow-auto bg-white h-full w-full ">
                                    <span style={{"transition" : "all .2s ease-in-out", "zIndex":"8"}} title="close this bill" className="cursor-pointer absolute top-4 right-6 text-3xl text-gray-300 hover:text-white drop-shadow-lg py-1 px-6 bg-gray-700 hover:bg-gray-500 rounded-lg" onClick={()=>{setCurrentBill(null)}}>X</span>
                                    <div className="my-2 text-xl ">
                                        <div className="title text-3xl text-center block mb-4">Bill {currentBill.billIDNumber}</div>
                                        <div className="text-center">
                                            <div>Bill Date : 
                                                <span className="font-medium">&nbsp;
                                                    {currentBill.createdAt.toDate().getDate() < 10 ? "0" + currentBill.createdAt.toDate().getDate() : currentBill.createdAt.toDate().getDate()}\
                                                    {currentBill.createdAt.toDate().getMonth() < 10 ? "0" + currentBill.createdAt.toDate().getMonth() : currentBill.createdAt.toDate().getMonth()}\
                                                    {currentBill.createdAt.toDate().getFullYear()}
                                                    &nbsp;&nbsp;
                                                    <span>
                                                        {currentBill.createdAt.toDate().getHours()}:
                                                        {currentBill.createdAt.toDate().getMinutes()}:
                                                        {currentBill.createdAt.toDate().getSeconds()}
                                                    </span>
                                                </span>
                                            </div> 
                                            <div>
                                                <div className={`${currentBill.finished ? "finished" : "notfinished"}`}>{`${currentBill.finished ? "Finished" : "Not Finished"}`}
                                                    {currentBill.finished && <div>BY: {currentBill.finishedBy}</div>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <table className="w-full border-2 border-gray-700 mt-5 shadow-xl shadow-gray-300" style={{"wordBreak":"break-word"}} >
                                        <thead >
                                            <tr>
                                                <th className="border-black border-2  p-1">ID</th>
                                                <th className="border-black border-2  p-1">Category</th>
                                                <th className="border-black border-2 p-1">Order name</th>
                                                <th className="border-black border-2 p-1">cost</th>
                                                <th className="border-black border-2  p-1" title="Quantity">Q</th>
                                                <th className="border-black border-2  p-1" title="Quantity Amount">QA</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            {currentBill.bill && getTheQuantity(currentBill.bill).map((item, index)=>{
                                            return <tr key={uuidv4()} title={item.billItemId} >
                                                        <td className="border-black border-2 p-1 text-center" >{index + 1}</td>
                                                        <td className="border-gray-300 border-2 p-1" >{item.category}</td>
                                                        <td className="border-gray-300 border-2 p-1">{item.title}</td>
                                                        <td className="border-gray-300 border-2 p-1 text-center">{item.cost}$</td>
                                                        <td className="border-gray-300 border-2 p-1 text-center">{item.quantity}</td>
                                                        <td className="border-gray-300 border-2 p-1 text-center" title="Quantity amount">{item.quantityAmount ? item.quantityAmount : item.cost}$</td>
                                                    </tr>
                                            })}
                                            <tr className="border-black border-t-4">
                                                <td className="p-1 text-center border-2 border-black" colSpan="4">Total:</td>
                                                <td className="text-center" colSpan="2">{currentBill.billTotalBalance}$</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div className="flex w-full justify-around  bg-gray-300 py-2 pl-2 border-t-2 border-black shadow-xl shadow-gray-400">
                                            <span> Price: {currentBill.billTotalBalance}$</span>
                                            <span>VAT: {employee.tax}/100</span>
                                            {/*  */}
                                            <span> Taxed price : <span className="bg-yellow-300 rounded-md py-1 px-2">{(currentBill.billTotalBalance + (currentBill.billTotalBalance * employee.tax) / 100) }$</span></span>
                                    </div>

                                    <div className="flex flex-col mt-12">
                                        {/* if the bill is already finished then show the unfinish bill button if not then show the finish bill button */}
                                        {
                                            currentBill.finished && !currentBill.deleted
                                            ? 
                                            <button 
                                                    className="w-full mx-auto text-white bg-gray-600 hover:shadow-xl transition-all  shadow-gray-600 text-lg font-medium border-black border-2 hover:-translate-y-[1px] rounded-full py-4 px-6"
                                                    onClick={async ()=>{
                                                        // confirmation 
                                                        if(!window.confirm("Do you really want to unfinish the bill")) return ;

                                                        const data = await setDoc(doc(db, "bills/"  + currentBill.id.toString()), {finished: false, finishedBy:null}, {merge:true})
                                                    }}
                                                    >Unfinish Bill</button>
                                            :
                                            <button 
                                                className="w-full hover:bg-green-300 hover:shadow-xl transition-all  shadow-gray-600 text-lg font-medium border-black border-2 bg-green-400 hover:-translate-y-1 rounded-full py-4 px-6"
                                                onClick={async ()=>{
                                                    // confirmation if he really want to finish the bill
                                                    const confirmation = window.confirm("Do you really want to finish The Bill")
                                                    if(!confirmation) return

                                                    await setDoc(doc(db, "bills/"  + currentBill.id.toString()), {finished: true, finishedBy: employee.name}, {merge:true})
                                                }}
                                                >Finish Bill</button>
                                        }

                                        {
                                            // if the user bill submitter is the same on the current bill then show him the delete button
                                            employee.name == currentBill.submittedBy &&
                                            <button 
                                                    className="w-fit ml-auto mt-5 hover:shadow-xl shadow-slate-600 py-2 px-4 bg-red-800 text-gray-300 mx-auto hover:bg-red-600 transition-all rounded-md"
                                                    onClick={async ()=>{                                                        
                                                        // confirmation if he really want to delete the bill
                                                        if(window.confirm("Do you really want to delete The Bill ?! | confirmation 1")) {
                                                            if(window.confirm("Do you really want to delete The Bill ?! | confirmation 1")){
                                                                await setDoc(doc(db, "bills/"  + currentBill.id.toString()), {deleted: true, deletedBy: employee.name}, {merge:true})
                                                            }
                                                        }

                                                        }}
                                                    >Delete Bill</button>

                                        }
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
