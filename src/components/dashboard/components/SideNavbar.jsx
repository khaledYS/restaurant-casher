import { useEffect, employee, useContext } from "react";
import { IoArrowForward, IoClose, IoMenu } from "react-icons/io5";
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import { EmployeeContext } from "../../others/contexts";

export default function SideNavbar({ sideNavBarIsOpen, setSideNavBarIsOpen}){
    const { employee } = useContext(EmployeeContext)

    useEffect(() => {
        console.log(employee?.employee.photoURL, "nav")
    }, [employee]);
    

    return(
        <div className={`Side-navbar-component bg-gray-600  h-full `}>


            {/* navbar content  */}
            <div className="upper h-[95%] w-full overflow-auto pb-2 flex flex-col ">
                <a href={employee?.employee.photoURL} target="_blank" className="avatar-container block p-2 m-2  hover:backdrop-brightness-150 rounded-lg ">
                    <img src={employee?.employee.photoURL} className="block mx-auto w-full rounded-full border-4 border-gray-700 "  onError={()=>{console.log(employee, "jflksjfd")}}  alt="gdsgfsdf" />
                </a>

                {/* branches icons */}
                <div className="branches-container border-y-4 border-[#667797] ">
                    <div className="branches">
                        <div className="branch w-full flex">
                            <div className="icon">
                                1 
                            </div>
                            <span className="text">Jeddah</span>
                        </div>
                    </div>
                    <div className="add">
                        <div className="icon">
                                1 
                        </div>
                            <span className="text">Jeddah</span>
                    </div>

                </div>
            </div>

            {/* navbar toggler */}
            <div 
             className="close text-right cursor-pointer h-[5%]" 
             onClick={()=>{sideNavBarIsOpen ? setSideNavBarIsOpen(false) : setSideNavBarIsOpen(true)}}
             >
                <div className="toggle-side-nav h-full w-full overflow-hidden"><MdOutlineKeyboardArrowRight className="!transition-all rounded-md hover:backdrop-brightness-125" /></div>
            </div>
        </div>
    )
}