import { useState, useEffect } from "react";
import Btn from "./btn";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { db } from "../../senstive/firebase-config";
import {
    collection,
    getDocs, 
    doc,
} from "firebase/firestore";
import CategoriesBtn from "./CategoriesBtn";
import CategoryItem from "./CategoryItem"
import BillItem from "./BillItem";
function Order() {

    // from firestore database
    const [products, setProducts] = useState(null);
    const [categoryItemsStatus, setCategoryItemsStatus] = useState(null);
    const [categoryItems, setCategoryItems] = useState(null);

    // the bill
    const [bill, setbill] = useState(null)

    // add to bill function
    function addToBill(){
        console.log("added to bill")
    }

    // remove from the bill 
    function removeFromBill(){
        console.log("removed from the bill")
    }

    // get the data from firebase
    useEffect(() => {

        (async ()=>{
            
            const categories = await getDocs(collection(db, "products"));
            setProducts(categories.docs.map((doc)=>{return {[doc.id]: doc.data()}}))

        })();

    }, [])


    // update the products debending on the categoryItemsStatus
    useEffect(() => {
        if(products){
            let items = products.find(obj => categoryItemsStatus == Object.keys(obj)[0]);
            items = items[Object.keys(items)[0]];
            let itemsElements = []
            for (let id in items) {
                itemsElements.push([id, items[id]])
            }
            setCategoryItems(itemsElements);

            // [<id of the item>, <object of his properties like name etc.>]
        }
    }, [categoryItemsStatus])


    // debugging with console
    useEffect(() => {
        console.log(products, categoryItems, categoryItemsStatus)
    }, [products, categoryItemsStatus, categoryItems])


    return ( 
        <div className="order w-full h-full flex">
            <div className="products  h-full w-8/12">

                {/* categories Btns */}
                <div className="catogries border-b-8 border-gray-500 h-1/6 overflow-x-auto flex justify-start items-center flex-nowrap">
                    {products && products.map((cato)=>{
                        return <CategoriesBtn onClick={()=>{setCategoryItemsStatus(Object.keys(cato)[0])}} title={Object.keys(cato)[0]} key={Object.keys(cato)[0]} /> 
                    })}
                </div>

                {/* category products */}
                <div className="products h-5/6 overflow-y-auto flex justify-center content-start flex-wrap">
                    {categoryItems && categoryItems.map((el)=>{
                        let id = el[0];
                        let properties = el[1]
                        console.log(properties)
                        return <CategoryItem key={id} id={id} title={properties.name} cost={properties.cost} addToBill={addToBill}  />
                    })}
                </div>

            </div>
            <div className="bill     border-l-8 border-gray-500 h-full w-4/12">
                <div className="tag-name cursor-default h-1/6 flex flex-col justify-center items-center text-4xl font-mono relative">
                    <h1 >Bill</h1>
                    <div className="hr border-b-8 border-gray-500 w-full border-x-0 absolute bottom-0"></div>
                </div>
                <div className="bill-orders h-5/6">

                    {/* bill panel */}
                    <div className="orders-panel overflow-y-auto overflow-x-hidden h-5/6">
                        <BillItem title="asyowishh" removeFromBill={removeFromBill} id={"dlkfjsld"} cost={88} />
                        <BillItem title="asyowishh" removeFromBill={removeFromBill} id={"dlkfjsld"} cost={88} />
                        <BillItem title="asyowishh" removeFromBill={removeFromBill} id={"dlkfjsld"} cost={88} />
                        <BillItem title="asyowishh" removeFromBill={removeFromBill} id={"dlkfjsld"} cost={88} />
                        <BillItem title="asyowishh" removeFromBill={removeFromBill} id={"dlkfjsld"} cost={88} />
                        <BillItem title="asyo wishh aksfdhak sfdhakjsfd asdf" removeFromBill={removeFromBill} id={"dlkfjsld"} cost={88} />
                        <BillItem title="asyowishh" removeFromBill={removeFromBill} id={"dlkfjsld"} cost={88} />
                        <BillItem title="asyasdfasdfasdfasdfowishh" removeFromBill={removeFromBill} id={"dlkfjsld"} cost={88} />
                        <BillItem title="asyowishh" removeFromBill={removeFromBill} id={"dlkfjsld"} cost={88} />
                        <BillItem title="asyowishh" removeFromBill={removeFromBill} id={"dlkfjsld"} cost={88} />
                        <BillItem title="asyowishh" removeFromBill={removeFromBill} id={"dlkfjsld"} cost={88} />
                        <BillItem title="asyowishh" removeFromBill={removeFromBill} id={"dlkfjsld"} cost={88} />
                    </div>

                    {/* submit btn for the bill */}
                    <div className="bill-orders-send h-1/6 border-t-8 border-gray-500 flex justify-center items-center">
                        <Btn title="Done" styles={{"minWidth":"40px"}}> <IoMdCheckmarkCircleOutline /> </Btn>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Order;