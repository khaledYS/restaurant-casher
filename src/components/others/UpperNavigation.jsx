import { CgController } from "react-icons/cg";
import { IoIosNavigate } from "react-icons/io";
import { IoArrowForwardCircle, IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";
import { MdOutlineControlCamera } from "react-icons/md";
import { useNavigate } from "react-router";

    

function UpperNavigation({setRoutesPanel}) {

    const navigate = useNavigate();

    return ( 
        <div className="w-full px-4  py-2 bg-[#1d6145] transition-all flex items-center justify-between text-3xl" >
            <div className="h-full">
                <IoIosNavigate className="text-white mx-auto cursor-pointer hover:brightness-75 transition-all " title="open routing panel" onClick={()=>setRoutesPanel(true)}/> 
            </div>
            <div className="h-full flex gap-2 items-center">
                <IoChevronBackCircle className="cursor-pointer hover:brightness-75 transition-all" title="Go Back" onClick={()=> navigate(-1)} />
                <IoChevronForwardCircle className="cursor-pointer hover:brightness-75 transition-all" title="Go Forward" onClick={()=> navigate(1)} />
            </div>
        </div>
     );
}

export default UpperNavigation;