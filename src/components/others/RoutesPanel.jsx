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

        focus()
    }, []);
    


    return (
        <>
            <div className="w-[100vw] h-[100vh] absolute top-0 left-0 bg-gray-500 bg-opacity-75 backdrop-blur-lg grid place-items-center z-[100]">
                <div>
                    <Link ref={firstLink} tabIndex="0" to="/welcome" className=" rounded-lg px-8  bg-gray-600 hover:bg-gray-700   cursor-pointer flex justify-between items-center text-center min-w-[300px] text-3xl my-2 !py-4  ">Welcome</Link>
                    <Link tabIndex="0" to="/welcome/order" className=" rounded-lg px-8  bg-gray-600 hover:bg-gray-700   cursor-pointer flex justify-between items-center text-center min-w-[300px] text-3xl my-2 !py-4  ">Order<IoBagHandleOutline/></Link>
                    <Link tabIndex="0" to="/welcome/bills" className=" rounded-lg px-8  bg-gray-600 hover:bg-gray-700   cursor-pointer flex justify-between items-center text-center min-w-[300px] text-3xl my-2 !py-4  ">Bills<FaFileInvoiceDollar/></Link>
                    <Link tabIndex="0" to="/welcome/dashboard" className=" rounded-lg px-8  bg-gray-600 hover:bg-gray-700   cursor-pointer flex justify-between items-center text-center min-w-[300px] text-3xl my-2 !py-4  ">Dashboard<VscCircuitBoard/></Link>
                    <Link tabIndex="0" to="/welcome/Logout" className=" rounded-lg px-8  bg-gray-600 hover:bg-gray-700   cursor-pointer flex justify-between items-center text-center min-w-[300px] text-3xl my-2 !py-4  ">Logout<IoLogOutOutline/></Link>
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
