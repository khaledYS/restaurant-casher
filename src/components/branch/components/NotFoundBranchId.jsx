import { BiRightArrow } from "react-icons/bi";
import { IoReloadCircle } from "react-icons/io5";
import { useNavigate, useNavigationType } from "react-router";
import { Link } from "react-router-dom";
import Btn from "../../others/btn";

function NotFoundBranchId() {

    const navigate = useNavigate();

    return (
        <div className="h-full w-full flex flex-col justify-center items-center text-xl">
            The Branch-ID you Are looking for, doesn't exist.
            <br/>
            <a className="my-1 hover:underline underline-offset-4 cursor-pointer" onClick={()=>{navigate(0)}} >You can reload the page,</a>
            <Link to="/dashboard" className="hover:underline underline-offset-4">or go to the Dashboard to create a new branch.</Link>

        </div>
     );
}

export default NotFoundBranchId;