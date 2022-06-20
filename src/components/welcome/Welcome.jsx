import { app } from "../../firebase-config";
import { 
    getDoc,
    setDoc,
    doc,
    serverTimestamp
 } from "@firebase/firestore";
import {
    getAuth, signOut
} from "@firebase/auth"
import { 
    useState, 
    useEffect, 
    useContext
} from "react";
import { 
    Link,
    Outlet
 } from "react-router-dom";
import Btn from "../others/btn";
import { IoBagHandleOutline, IoLogOutOutline } from "react-icons/io5";
import { VscCircuitBoard } from "react-icons/vsc";
import { FaFileInvoiceDollar } from "react-icons/fa"
import { EmployeeContext, LoadingContext } from "../others/contexts";


function Welcome(props) {
    
    const {employee, setEmployee} = useContext(EmployeeContext);
    const {setLoading} = useContext(LoadingContext)

    useEffect(()=>{
        setLoading(false);
    }, [])
    

    return ( 
        <div className="Welcome-component flex flex-col justify-items-stretch h-full justify-center">
            <Link to="order"  className=" flex justify-items-stretch flex-col" >
                <Btn title="Order" className=" rounded-t-3xl my-1 min-w-[250px] text-3xl font-normal " >
                    <IoBagHandleOutline />
                </Btn>
            </Link>
            <Link to="bills" className=" flex justify-items-stretch flex-col" >
                <Btn title="Bills" className=" rounded-b-3xl my-1 min-w-[250px] text-3xl font-normal " >
                    <FaFileInvoiceDollar />
                </Btn>
            </Link>
        </div>
    );
}

export default Welcome;
