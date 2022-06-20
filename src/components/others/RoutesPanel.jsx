import React from "react";
import { useContext, useEffect, useRef } from "react";
import {AiOutlineBranches } from "react-icons/ai"
import { BsPersonBadge, BsPersonBadgeFill } from "react-icons/bs";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { IoIosPerson, IoMdPerson } from "react-icons/io";
import { IoBagHandleOutline, IoLogOutOutline, IoPerson, IoPersonAddOutline, IoPersonCircleOutline, IoPersonOutline } from "react-icons/io5";
import { VscCircuitBoard } from "react-icons/vsc";
import { Link, useParams, useLocation } from "react-router-dom";
import { app } from "../../firebase-config";
import { currentBranchIdContext, EmployeeContext } from "./contexts";
import { filterObject, prettyName } from "./shorcutFunctions";

export default function RoutesPanel (props){

    const urlParams = useParams()
    const { employee } = useContext(EmployeeContext)
    const firstLink = useRef();
    const location = useLocation();
    const {currentBranchIdFromContext, setCurrentBranchIdFromContext} = useContext(currentBranchIdContext);
    const UserBtnComponent = (props)=>{
        if(employee?.position == "employee"){
            return (
                <div {...filterObject(props, "children")} >{props.children}</div>
            )
        }else{ 
            return (
                <Link {...filterObject(props, "children")} >{props.children}</Link>
            )
        }
    }
    const classNamesForBtns = " rounded-lg px-4 bg-gray-700 hover:brightness-75 cursor-pointer flex justify-between items-center text-center min-w-[300px] text-2xl my-2 py-4 transition-all"
    useEffect(() => {
        firstLink.current && firstLink.current.focus()
    }, []);

    


    return (
        <>
            {
                employee && 
                    <div className="routes-panel w-[100vw] h-[100vh] absolute top-0 left-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm grid place-items-center z-[100]" onClick={()=>{props.setRoutesPanel(false)}}>
                        <div>
                            {/* {urlParams.currentBranchId && <Link ref={firstLink} tabIndex="0" to={`/welcome/${urlParams.currentBranchId}`} className={classNamesForBtn}>Welcome</Link>} */}
                            {
                                <UserBtnComponent
                                    to="dashboard"
                                    className={employee?.position +  " dashboard-link rounded-lg rounded-t-3xl bg-gray-700 cursor-pointer justify-between items-center text-center min-w-[300px] text-3xl my-2 transition-all !px-0 !py-0 flex flex-col overflow-hidden hover:brightness-75 "}
                                >
                                    <div className={"position-tag w-full text-base " + employee?.position}>
                                        <div className="w-full">
                                            {employee?.position}
                                        </div>
                                    </div>
                                    <div className="mini-profile flex px-4 py-2 items-center justify-between w-full">
                                        <div className="flex justify-start items-center text-xl">
                                            <img src={employee?.employee?.photoURL} className="min-w-[25px] max-w-[45px] rounded-md" />
                                            <span className="ml-3">{prettyName(employee?.name)}</span>
                                        </div>
                                        <IoPersonCircleOutline className="text-3xl" />
                                    </div>
                                </UserBtnComponent>
                            }
                            {employee?.position == "admin" && <Link tabIndex="0" to="branches" onClick={()=>{setCurrentBranchIdFromContext(null)}} className={classNamesForBtns}>Branches<AiOutlineBranches/></Link>}
                            <Link tabIndex="0" to={`/welcome/${urlParams.currentBranchId}/order`} className={classNamesForBtns}>Order<IoBagHandleOutline/></Link>
                            <Link tabIndex="0" to={`/welcome/${urlParams.currentBranchId}/bills`} className={classNamesForBtns}>Bills<FaFileInvoiceDollar/></Link>
                            <Link tabIndex="0" to="/Logout" className={classNamesForBtns+ " rounded-b-3xl "}>Logout<IoLogOutOutline/></Link>
                        </div>
                    </div>
            }
        </>
    )
}


/**
 * IoBagHandleOutline
FaFileInvoiceDollar
VscCircuitBoard
IoLogOutOutline
CgController
 */
