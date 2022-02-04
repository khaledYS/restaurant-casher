import { collection, doc, getDoc, getDocFromServer, getDocs } from "@firebase/firestore";
import { useEffect, employee, useContext, useState, useRef } from "react";
import { IoArrowForward, IoClose, IoMenu } from "react-icons/io5";
import {MdAdd, MdOutlineKeyboardArrowRight} from "react-icons/md"
import { useLocation } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { app, db } from "../../../../firebase-config";
import { EmployeeContext } from "../../../others/contexts";
import Branch from "./components/Branch";

export default function SideNavbar({ sideNavBarIsOpen, setSideNavBarIsOpen}){
    const { employee } = useContext(EmployeeContext)
    const isMounted = useRef(null)
    const [branches, setBranches] = useState([]);


    useEffect(() => {
        
        isMounted.current = true;


        (async ()=>{

            const branches = await getDocs(collection(db, "branches"));
            
            isMounted && setBranches(
                branches.docs.map(
                    (doc)=>{
                        console.log(doc.id)
                         return {id:doc.id, ...doc.data()} 
                        }
                )
            )
            

        })()

        return ()=>{isMounted.current = false}

    }, []);

    

    return(
        <div className={`Side-navbar-component bg-gray-600 h-full flex-basis `}>


            {/* navbar content  */}
            <div className="upper h-[95%] w-full overflow-x-hidden  pb-2 flex flex-col ">
                <a href={employee?.employee.photoURL} target="_blank" className="avatar-container block p-2 hover:backdrop-brightness-150 rounded-lg ">
                    <img src={employee?.employee.photoURL} className="block mx-auto w-full rounded-full border-4 border-gray-700 " />
                </a>

                <div className="branches-container border-y-4 border-[#667797] overflow-hidden flex flex-col w-full">
                    <div className="branches w-full overflow-y-auto">

                    {branches.map((branch, index)=> <Branch key={uuidv4()} icon={index + 1} text={branch.name} branchId={branch.id} />)}

                    </div>
                    <div className="add branch flex !p-2 items-center">
                        <MdAdd className="icon"/>
                        <span className="text">Add branch</span>
                    </div>

                </div>
            </div>

            {/* navbar toggler */}
            <div 
             className="close text-right cursor-pointer h-[5%]" 
             onClick={()=>{sideNavBarIsOpen ? setSideNavBarIsOpen(false) : setSideNavBarIsOpen(true)}}
             >
                <div className="toggle-side-nav h-full w-full overflow-hidden">
                    <MdOutlineKeyboardArrowRight className="!transition-all rounded-md hover:backdrop-brightness-125" />
                </div>
            </div>
        </div>
    )
}