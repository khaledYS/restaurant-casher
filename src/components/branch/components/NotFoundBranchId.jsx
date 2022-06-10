import { BiRightArrow } from "react-icons/bi";
import { IoReloadCircle } from "react-icons/io5";
import { useNavigate, useNavigationType } from "react-router";
import Btn from "../../others/btn";

function NotFoundBranchId() {

    const navigate = useNavigate();

    return (
        <>
            The Branch Id you Are looking for it's not existing;
            <Btn onclick={()=>{navigate("/welcome")}} title="" className="" >
                <IoReloadCircle  />
            </Btn>
        </>
     );
}

export default NotFoundBranchId;