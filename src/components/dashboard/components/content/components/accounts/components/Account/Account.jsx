import { IoExpand, IoPencil, IoPencilSharp, IoPersonCircleSharp, IoPinOutline, IoTrashBinOutline  } from "react-icons/io5";
import { TiEdit } from "react-icons/ti";
import {FiEdit} from "react-icons/fi"
import PrettyDate from "../../../../../../../others/PrettyDate";

function Account(props) {
    console.log(props)
    return (
        <div className="w-full px-2 py-2 text-lg my-2 bg-[#464656] flex items-center justify-between rounded-md  h-max">
            <div className="info flex flex-nowrap">
                {props.email}
            </div>
            <div className="edits flex flex-row flex-wrap h-full justify-end items-center" >
                {/* expand button */}
                <div title="Expand this user" className='edit-button p-2 transition-all hover:backdrop-brightness-150 rounded-md text-[#849ba1]   hover:text-[#bddde5] ' onClick={()=>props.setCurrentAccount(props)}>
                    <IoExpand  className="text-2xl cursor-pointer "  />
                </div>
            </div>
        </div>
    );
}

export default Account;
