import { useEffect, employee, useContext } from "react";
import { IoArrowForward, IoClose, IoMenu } from "react-icons/io5";
import {MdAdd, MdOutlineKeyboardArrowRight} from "react-icons/md"
import { EmployeeContext } from "../../others/contexts";

export default function SideNavbar({ sideNavBarIsOpen, setSideNavBarIsOpen}){
    const { employee } = useContext(EmployeeContext)

    useEffect(() => {
        console.log(employee?.employee.photoURL, "nav")
    }, [employee]);
    

    return(
        <div className={`Side-navbar-component bg-gray-600 h-full flex-basis `}>


            {/* navbar content  */}
            <div className="upper h-[95%] w-full overflow-x-hidden  pb-2 flex flex-col ">
                <a href={employee?.employee.photoURL} target="_blank" className="avatar-container block p-2 hover:backdrop-brightness-150 rounded-lg ">
                    <img src={employee?.employee.photoURL} className="block mx-auto w-full rounded-full border-4 border-gray-700 " />
                </a>

                {/* branches icons */}
                <div className="branches-container border-y-4 border-[#667797] overflow-hidden flex flex-col w-full">
                    <div className="branches w-full overflow-y-auto">
                        <div className="branch ">
                            <div className="icon">
                                1 
                            </div>
                            <span className="text">Jeddah</span>
                        </div>
                        <div className="branch ">
                            <div className="icon">
                                1 
                            </div>
                            <span className="text">Jeddah</span>
                        </div>
                        <div className="branch ">
                            <div className="icon">
                                1 
                            </div>
                            <span className="text">Jeddah</span>
                        </div>
                        <div className="branch ">
                            <div className="icon">
                                1 
                            </div>
                            <span className="text">Jeddah</span>
                        </div>
                        <div className="branch ">
                            <div className="icon">
                                1 
                            </div>
                            <span className="text">Jeddah</span>
                        </div>
                        <div className="branch ">
                            <div className="icon">
                                1 
                            </div>
                            <span className="text">Jeddah</span>
                        </div>
                        <div className="branch ">
                            <div className="icon">
                                1 
                            </div>
                            <span className="text">Jeddah</span>
                        </div>
                        <div className="branch ">
                            <div className="icon">
                                1 
                            </div>
                            <span className="text">Jeddah</span>
                        </div>
                        <div className="branch ">
                            <div className="icon">
                                1 
                            </div>
                            <span className="text">Jeddah</span>
                        </div>
                        <div className="branch ">
                            <div className="icon">
                                1 
                            </div>
                            <span className="text">Jeddah</span>
                        </div>
                        <div className="branch ">
                            <div className="icon">
                                1 
                            </div>
                            <span className="text">Jeddah</span>
                        </div>
                        <div className="branch ">
                            <div className="icon">
                                1 
                            </div>
                            <span className="text">Jeddah</span>
                        </div>
                        <div className="branch ">
                            <div className="icon">
                                1 
                            </div>
                            <span className="text">Jeddah</span>
                        </div>
                        <div className="branch ">
                            <div className="icon">
                                1 
                            </div>
                            <span className="text">Jeddah</span>
                        </div>
                        <div className="branch ">
                            <div className="icon">
                                1 
                            </div>
                            <span className="text">Jeddah</span>
                        </div>
                        <div className="branch ">
                            <div className="icon">
                                1 
                            </div>
                            <span className="text">Jeddah</span>
                        </div>
                        <div className="branch ">
                            <div className="icon">
                                1 
                            </div>
                            <span className="text">Jeddah</span>
                        </div>
                        <div className="branch ">
                            <div className="icon">
                                1 
                            </div>
                            <span className="text">Jeddah</span>
                        </div>
                        <div className="branch ">
                            <div className="icon">
                                1 
                            </div>
                            <span className="text">Jeddah</span>
                        </div>
                        
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
                <div className="toggle-side-nav h-full w-full overflow-hidden"><MdOutlineKeyboardArrowRight className="!transition-all rounded-md hover:backdrop-brightness-125" /></div>
            </div>
        </div>
    )
}