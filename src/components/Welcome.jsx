import { app, db } from "../../senstive/firebase-config";
import { 
    getDoc,
    setDoc,
    doc,
    serverTimestamp
 } from "@firebase/firestore";
import {
    getAuth
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
import Btn from "./btn";
import { IoBagHandleOutline } from "react-icons/io5";
import { VscCircuitBoard } from "react-icons/vsc";
import { FaFileInvoiceDollar } from "react-icons/fa"
import { UserContext } from "./contexts";


function Welcome(props) {
    
    const {user, setUser} = useContext(UserContext);


    // const getdocs = async (dataCollectionRef)=>{
    //   let data = await getDocs(dataCollectionRef);
    //   data = data.docs.map((doc)=>({...doc.data(), id: doc.id}));
    //   return data;
    // }

      

    return ( 
        <div className="welcome">
            <Link to="order"><Btn title="Order" ><IoBagHandleOutline /></Btn></Link>
            <Link to="bills"><Btn title="Bills" ><FaFileInvoiceDollar /></Btn></Link>
            {user && (user.position == "admin") && <Link to="dashboard"><Btn title="Dashboard" ><VscCircuitBoard /></Btn></Link> }
        </div>
    );
}

export default Welcome;



// you should do what is written in the readme.md file
