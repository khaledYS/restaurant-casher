import { IoPencil, IoPencilSharp, IoPersonCircleSharp, IoPinOutline, IoTrashBinOutline  } from "react-icons/io5";
import { TiEdit } from "react-icons/ti";
import {FiEdit} from "react-icons/fi"
import PrettyDate from "../../../../../../../others/PrettyDate";

function Account(props) {
    console.log(props)
    return (
        <div className="w-full px-2 py-2 text-lg my-2 bg-[#464656] flex items-center justify-between rounded-md select-none h-max">
            <div className="info">
                <span>
                   
                </span>
                <details className="cursor-pointer !appearance-none marker:appearance-none">
                    <summary>{props.email}</summary>
                    <div className="ml-6">
                        <table className="table ">
                            <tr>
                                <td>Name</td>
                                <td>{props.account.name}</td>
                            </tr>
                            <tr>
                                <td>Auth</td>
                                <td>{props.account.position.toUpperCase()}</td>
                            </tr>
                            <tr>
                                <td>createdAt &nbsp;</td>
                                <td><PrettyDate date={props?.date?.toDate() || new Date()} /></td>
                            </tr>
                        </table>
                    </div>
                </details>
            </div>
            <div className="edits flex flex-col h-full justify-between items-center">
                {/* delete button */}
                <div title="Delete This user" className='delete-button p-2 transition-all hover:backdrop-brightness-150 rounded-md text-[#dc2626] hover:text-[#ff5959] '>
                    <IoTrashBinOutline className="text-2xl cursor-pointer  "  />
                </div>
                {/* edit button */}
                <div title="Edit this user" className='edit-button p-2 transition-all hover:backdrop-brightness-150 rounded-md text-[#849ba1]   hover:text-[#bddde5] '>
                    <FiEdit className="text-2xl cursor-pointer "  />
                </div>
            </div>
        </div>
    );
}

export default Account;
