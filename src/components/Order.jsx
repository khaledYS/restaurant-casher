import {
    collection, doc, getDoc, getDocs, setDoc, addDoc, serverTimestamp
} from "firebase/firestore";
import { 
    useContext, useEffect, useState
} from "react";
import {
    IconContext 
} from "react-icons";
import {
    IoMdCheckmarkCircleOutline 
} from "react-icons/io";
import {
    v4 as uuidV4 
} from "uuid";
import {
    db 
} from "../firebase-config";
import {
    useParams, useNavigate
} from "react-router-dom"
import BillItem from "./order/BillItem";
import CategoriesBtn from "./order/CategoriesBtn";
import CategoryItem from "./order/CategoryItem";
import {
    LoadingContext, EmployeeContext 
} from "./others/contexts";
import { IoBalloon } from "react-icons/io5";

function Order() {


    const urlParams = useParams();
    const navigate = useNavigate()

    // user 
    const {employee} = useContext(EmployeeContext)
    // loading
    const {setLoading, loading} = useContext(LoadingContext)

    // from firestore database
    const [products, setProducts] = useState([]);
    const [categoryItemsStatus, setCategoryItemsStatus] = useState(null);
    const [categoryItems, setCategoryItems] = useState(null);

    // for the bill submit button and preventing spaming that cause of many clicks
    const [submitBillBtnIsDisabled, setSubmitBillBtnIsDisabled] = useState(true);

    // the bill
    const [bill, setBill] = useState({
        Bill:[]
    })
    // the bill total balance
    const [billTotalBalance, setBillTotalBalance] = useState(null);

    // add to bill function
    function addToBill(id, title, category, cost){

        // an id to be only shown in the bill
        const billItemId = uuidV4();
        
        const billItem = {id, title, category, cost, billItemId};
        setBill({...bill, Bill:[billItem ,...bill.Bill]})
    }

    // remove from the bill 
    function removeFromBill(billItemId){
        const billsWithoutRemovedBill = bill.Bill.filter(bill=> bill.billItemId != billItemId)

        setBill({...bill, Bill: billsWithoutRemovedBill})
    }

    // get the data from firebase
    useEffect(() => {

        (async ()=>{
            
            const categories = await getDocs(collection(db, "products"));
            setProducts(categories.docs.map((doc)=>{return {[doc.id]: doc.data()}}))

            setSubmitBillBtnIsDisabled(false)

        })();

    }, [])


    // update the products debending on the categoryItemsStatus
    useEffect(() => {
        if(typeof(products) == "object" && products.length){
            try {
                let items = products.find(obj => categoryItemsStatus == Object.keys(obj)[0]);
                items = items[Object.keys(items)[0]];
                let itemsElements = []
                for (let id in items) {
                    itemsElements.push([id, items[id]])
                }
                setCategoryItems(itemsElements);
                
            } catch (error) {
                console.warn(error)                
            }

            // [<id of the item>, <object of his properties like name etc.>]
        }
    }, [categoryItemsStatus])


    function calculateTotalPrice(){

        let total=0;
        // let objec of array
        for (let obj of bill.Bill) {
            total += obj.cost;
        }

        setBillTotalBalance(total)
    }

    // we say: when we add an item to the bill you should calculate the total balance from the bill state
    useEffect(() => {
        
        calculateTotalPrice()
        console.log("updated the bill")
    }, [bill])

    // if there is a url param for the bill id then change this to edit bill instead of a new bill
    useEffect(()=>{
        (async ()=>{
            if(!urlParams.billId) return;

            console.log(urlParams)

            try {
                setLoading(true)
    
                const billDoc = doc(db,`bills/${urlParams.billId}`)
                const bill = await getDoc(billDoc)

                // when requsting an info about this doc if it isn't exsit then boom an error
                if(!bill.data()){ throw new Error("This may happen because you don't have a stable internet connection, or the Id of the bill you requsted in the url may be broken");}
                else{
                    console.log("print bill", bill.data())
                    setBill({...bill.data(), Bill:bill.data().bill})
                }


                setLoading(false)
            } catch (error) {
                window.alert(error)
                console.error(error)
                
                navigate("/welcome/order")
                
                setLoading(false)
            }
        })();
    }, [])


    return ( 
        <div className="order-component w-full h-full flex">
            <div className="products  h-full w-8/12 md:w-7/12 sm:w-1/2">

                {/* categories Btns */}
                <div className="catogries border-b-8 border-gray-500 h-1/6 overflow-x-auto flex justify-start items-stretch py-4 flex-nowrap">
                    {/**
                     * category param is like this
                     * {
                     *      <name of the category>:{
                     *          <id of product >:{
                     *              name: "<the name of the product>",
                     *              cost: "<how much does this product cost>"
                     *          } 
                     *      }
                     * }
                     */}
                    {products && products.map((category)=>{
                        return <CategoriesBtn onClick={()=>{setCategoryItemsStatus(Object.keys(category)[0])}} title={Object.keys(category)[0]} key={Object.keys(category)[0]} /> 
                    })}
                </div>

                {/* category products */}
                <div className="products h-5/6 overflow-y-auto flex justify-center content-start flex-wrap">

                    {/**
                     * category Items param is going to return this
                     * [
                     *      0:<Id of the item||product >,
                     *      1:{
                     *          name: < The name of the item||product >,
                     *          cost: < The cost of the item||product >
                     *      }
                     * ]
                     */}
                    {categoryItems && categoryItems.map((el)=>{
                        let id = el[0];
                        let properties = el[1]
                        return <CategoryItem key={id} id={id} category={categoryItemsStatus} title={properties.name} cost={properties.cost} addToBill={addToBill}  />
                    })}
                </div>

            </div>
            <div className="bill     border-l-8 border-gray-500 h-full w-4/12 md:w-5/12 sm:w-1/2">
                <div className="up-navbar-of-bill cursor-default h-1/6 flex flex-col justify-center items-center text-4xl font-mono relative">
                    <div className="h-3/6 flex flex-col justify-center items-center relative w-full">
                        <h1 >Bill</h1>
                        <div className="hr border-b-4 border-gray-500 w-full border-x-0 "></div>
                    </div>

                    {/* reset button and total price */}
                    <div className="h-3/6 flex w-full flex-col">
                        <div className="flex  flex-nowrap text-2xl justify-around w-full items-center">
                            <span>{billTotalBalance ? billTotalBalance : 0}$</span>

                            {/* reset the bill */}
                            <button 
                                className="px-4 py-2 self-center bg-red-800 hover:bg-red-700 rounded-lg"
                                onClick={()=>{

                                    // confirmation for resetting the bill
                                    if(window.confirm("Are you sure you want to reset the bill?")){
                                        setBill({...bill, Bill:[]})
                                        setBillTotalBalance(0)
                                    }


                                }}
                                >Reset</button>
                        </div>

                        <div className="hr border-b-8 basis-full border-gray-500 w-full border-x-0"></div>
                    </div>

                </div>
                <div className="bill-orders h-5/6">

                    {/* bill panel */}
                    <div className="orders-panel overflow-y-auto overflow-x-hidden h-5/6 flex flex-col ">

                        {/**
                         * Every item in this array is like this:-
                         * {    
                         *      billItemId: < The ID for the bill item, and this is only in the bill. >
                         *      category: < The name of the category that this product belongs to. >
                         *      cost: < How much does this product cost. >
                         *      id: < The ID of the product from the DB. >
                         *      title: < The Name of the product. >
                         * }
                         */}
                        {bill && bill.Bill.map((item)=>{
                            return <BillItem key={item.billItemId} billItemId={item.billItemId} title={item.title} category={item.category} removeFromBill={removeFromBill} id={item.id} cost={item.cost} />
                        })}
                    </div>

                    {/* submit btn for the bill */}
                    <div className="bill-orders-send overflow-hidden p-1 h-1/6 border-t-8 border-gray-500 flex justify-center items-center">
                        <button 
                            className={`flex-nowrap rounded-lg overflow-hidden w-full px-2 py-6 bg-gray-600 hover:bg-gray-700  text-4xl my-4 cursor-pointer flex justify-between items-center ${submitBillBtnIsDisabled && "pointer-events-none bg-gray-700"} `}

                            // when the user submits the bill
                            onClick={ async ()=>{



                                // if the bill doesn't have any thing then don't care
                                if(bill.Bill.length == 0) return ;   

                                // confirmation
                                const confirmation = window.confirm("Are you sure to submit the Bill?")
                                if(!confirmation) return;

                                setLoading(true)

                                // prevent spaming by disabling the bill submit btn from working 
                                setSubmitBillBtnIsDisabled(true)

                                console.log(bill)
                                let newBillIDNumber;
                                if(!urlParams.billId && !bill.billIDNumber){
                                    let billsSettingsDocRef = doc(db, "others/billsSettings");
                                    let lastBillIdNumber = await getDoc(billsSettingsDocRef);
                                    lastBillIdNumber = lastBillIdNumber.data().lastBillIdNumber;
    
                                    // we are gonna set the the bills setting LastBillId to be 1 not 0 so we dont need to increase it laterw.
                                    if(lastBillIdNumber >= 300){
                                        await setDoc(billsSettingsDocRef, {lastBillIdNumber: 1}, {merge:true});
                                        newBillIDNumber = 1;
                                    }else{
                                        newBillIDNumber = lastBillIdNumber + 1;
                                        await setDoc(billsSettingsDocRef, {lastBillIdNumber: newBillIDNumber}, {merge:true});
                                    }
                                }



                                let billLastEdit = [];
                                // if the employee came to here to edit a specifec bill then print the bill edited at serverTimestamp,
                                if(urlParams.billId){
                                    if(bill.lastEdit?.length){
                                        billLastEdit = [new Date(), ...bill.lastEdit]
                                    }else{
                                        billLastEdit = [new Date()]
                                    }
                                }


                                /**
                                 * The structure of the object is :
                                 * {
                                 *      billIdNumber : < Id number of the bill and it's gonna be under 300>,
                                 *      bill : < the bill state variable >,
                                 *      billTotalBalance : < The totoal balance of the bill and its comming from the billTotalBalance state variable >,
                                 *      submittedBy : < The name of the employ that submitted this bill >,
                                 *      finishedBy : < if the bill is finished then its gonna be assigned to the name of the user that finished this bill or if it isn't finished then its gonna be null >,
                                 *      deleltedBy : < if the bill is deleted then its gonna be assigned to the name of the user that deleted this bill or if it isn't deleted then its gonna be null >,
                                 *      createdAt : < date of the bill >
                                 * }
                                 */
                                // if the employee came to here for editing an bill then toggle between the edit one and new one
                                try {
                                    
                                    if(urlParams.billId){
    
                                            await setDoc(doc(db, `bills/${urlParams.billId}`), {
                                                    billIDNumber: bill.billIDNumber || newBillIDNumber,
                                                    bill: bill.Bill, 
                                                    billTotalBalance: billTotalBalance, 
                                                    submittedBy: employee.name, 
                                                    finished:false,
                                                    finishedBy:null, 
                                                    deleted: bill.deleted || false, 
                                                    deletedBy: bill.deletedBy || null, 
                                                    createdAt: bill.createdAt || serverTimestamp(),
                                                    lastEdit: billLastEdit
                                                });
                                            
                                            // we redirect him the bill he edited
                                            navigate(`/welcome/bills/${urlParams.billId}`)
                                    }else{
    
                                        await addDoc(collection(db, "bills"), {
                                                billIDNumber: newBillIDNumber,
                                                bill: bill.Bill, 
                                                billTotalBalance: billTotalBalance, 
                                                submittedBy: employee.name, 
                                                finished:false,
                                                finishedBy:null, 
                                                deleted: false, 
                                                deletedBy: null, 
                                                createdAt: serverTimestamp(),
                                                lastEdit: billLastEdit
                                            });
    
                                    }
                                } catch (error) {
                                    console.log("we catched the error ", error)
                                }

                                setBill({Bill:[]})
                                setSubmitBillBtnIsDisabled(false)
                                setLoading(false)
                            }}

                            disabled={submitBillBtnIsDisabled ? true : false}
                            >
                                Done
                                <IconContext.Provider value={{color:"#8ff565", size:"2.5rem"}}>
                                    <IoMdCheckmarkCircleOutline />
                                </IconContext.Provider>
                            </button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Order;