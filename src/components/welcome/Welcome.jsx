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
        setLoading(false)
    }, [])
    
    // const getdocs = async (dataCollectionRef)=>{
    //   let data = await getDocs(dataCollectionRef);
    //   data = data.docs.map((doc)=>({...doc.data(), id: doc.id}));
    //   return data;
    // }

      

    return ( 
        <div className="Welcome-component ">
            <Link to="order"><Btn title="Order" ><IoBagHandleOutline /></Btn></Link>
            <Link to="bills"><Btn title="Bills" ><FaFileInvoiceDollar /></Btn></Link>
            {employee && (employee.position == "admin") && <Link to="dashboard"><Btn title="Dashboard" ><VscCircuitBoard /></Btn></Link> }
            <Link to="/logout"><Btn title="Logout" ><IoLogOutOutline /></Btn></Link>
        </div>
    );
}

export default Welcome;



// you should do what is written in the readme.md file
