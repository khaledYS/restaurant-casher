import { useEffect, useRef } from "react";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { IoBagHandleOutline, IoLogOutOutline } from "react-icons/io5";
import { VscCircuitBoard } from "react-icons/vsc";
import { Link } from "react-router-dom";
import Btn from "./btn";

export default function RoutesPanel (){

    const firstLink = useRef();

    useEffect(() => {
        firstLink.current.focus()
    }, []);
    

    return (
        <>
            <div className="w-[100vw] h-[100vh] absolute top-0 left-0  backdrop-blur-lg grid place-items-center">
                <div>
                    <Link ref={firstLink} tabIndex="1" to="/welcome"><Btn tabIndex="-1" className="text-center min-w-[300px] text-3xl my-2 !py-4 " title="Welcome"></Btn></Link>
                    <Link tabIndex="1" to="/welcome/order"><Btn tabIndex="-1" className="text-center min-w-[300px] text-3xl my-2 !py-4  " title="Order"><IoBagHandleOutline/></Btn></Link>
                    <Link tabIndex="1" to="/welcome/bills"><Btn tabIndex="-1" className="text-center min-w-[300px] text-3xl my-2 !py-4  " title="Bills"><FaFileInvoiceDollar/></Btn></Link>
                    <Link tabIndex="1" to="/welcome/dashboard"><Btn tabIndex="-1" className="text-center min-w-[300px] text-3xl my-2 !py-4  " title="Dashboard"><VscCircuitBoard/></Btn></Link>
                    <Link tabIndex="1" to="/welcome/Logout"><Btn tabIndex="-1" className="text-center min-w-[300px] text-3xl my-2 !py-4  " title="Logout"><IoLogOutOutline/></Btn></Link>
                </div>
            </div>
        </>
    )
}


/**
 * IoBagHandleOutline
FaFileInvoiceDollar
VscCircuitBoard
IoLogOutOutline
 */
