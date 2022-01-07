import {v4 as uuidV4} from "uuid"
import { useState, useEffect, useContext } from "react";
import Btn from "./btn";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { db } from "../../senstive/firebase-config";
import {
    collection,
    getDocs, 
    doc,
    addDoc,
    serverTimestamp
} from "firebase/firestore";
import CategoriesBtn from "./CategoriesBtn";
import CategoryItem from "./CategoryItem"
import BillItem from "./BillItem";
import { LoadingContext, UserContext } from "./contexts"
import {IconContext} from "react-icons"

function Order() {

    // user 
    const {user} = useContext(UserContext)
    console.log(user)
    // loading
    const {setLoading} = useContext(LoadingContext)

    // from firestore database
    const [products, setProducts] = useState(null);
    const [categoryItemsStatus, setCategoryItemsStatus] = useState(null);
    const [categoryItems, setCategoryItems] = useState(null);

    // for the bill submit button and preventing spaming that cause of many clicks
    const [submitBillBtnIsDisabled, setSubmitBillBtnIsDisabled] = useState(true);

    // the bill
    const [bill, setBill] = useState([])
    // The total balance
    const [totalBalance, setTotalBalance] = useState(0)

    // add to bill function
    function addToBill(id, title, category, cost){

        // an id to be only shown in the bill
        const billItemId = uuidV4();
        
        const billItem = {id, title, category, cost, billItemId};
        setBill([billItem ,...bill])
    }

    // remove from the bill 
    function removeFromBill(billItemId){
        const billsWithoutRemovedBill = bill.filter(bill=> bill.billItemId != billItemId)

        setBill(billsWithoutRemovedBill)
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
        if(typeof(products) == "object"){
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
        for (let obj of bill) {
            total += obj.cost;
        }

        setTotalBalance(total)
    }
    // we say: when we add an item to the bill you should calculate the total balance from the bill state
    useEffect(() => {
        
        // cancel calculating if the bill doesn't have any item inside it.
        calculateTotalPrice()
    }, [bill])




    // // debugging with console
    // useEffect(() => {
    //     console.log("hh",bill)
    // }, [bill])


    return ( 
        <div className="order w-full h-full flex">
            <div className="products  h-full w-8/12">

                {/* categories Btns */}
                <div className="catogries border-b-8 border-gray-500 h-1/6 overflow-x-auto flex justify-start items-center flex-nowrap">
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
            <div className="bill     border-l-8 border-gray-500 h-full w-4/12">
                <div className="up-navbar-of-bill cursor-default h-1/6 flex flex-col justify-center items-center text-4xl font-mono relative">
                    <div className="h-3/6 flex flex-col justify-center items-center relative w-full">
                        <h1 >Bill</h1>
                        <div className="hr border-b-4 border-gray-500 w-full border-x-0 "></div>
                    </div>

                    {/* reset button and total price */}
                    <div className="h-3/6 flex w-full flex-col">
                        <div className="flex  flex-nowrap text-2xl justify-around w-full items-center">
                            <span>{totalBalance ? totalBalance : 0}$</span>

                            {/* reset the bill */}
                            <button 
                                className="px-4 py-2 self-center bg-red-800 hover:bg-red-700 rounded-lg"
                                onClick={()=>{

                                    // confirmation for resetting the bill
                                    if(window.confirm("Are you sure you want to reset the bill?")){
                                        setBill([])
                                        setTotalBalance(0)
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
                        {bill && bill.map((item)=>{
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
                                if(bill.length == 0) return ;   

                                // confirmation
                                const confirmation = window.confirm("Are you sure to submit the Bill?")
                                if(!confirmation) return;

                                setLoading(true)

                                // prevent spaming by disabling the bill submit btn from working 
                                setSubmitBillBtnIsDisabled(true)


                                await addDoc(collection(db, "bills"), {bill, finished:true, submitter: user.name, createdAt: serverTimestamp()})

                                setBill([])
                                setSubmitBillBtnIsDisabled(false)
                                setLoading(false)
                            }}

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