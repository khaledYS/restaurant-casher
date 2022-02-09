import { IoTrashBinOutline  } from "react-icons/io5";
import PrettyDate from "../../../../../../../others/PrettyDate";

function Account(props) {
    console.log(props)
    return (
        <div className="w-full px-2 py-2 text-lg my-2 bg-[#464656] flex items-center justify-between rounded-md">
            <div className="info">
                <span>
                    {props.email}
                </span>
                <details className="cursor-pointer !appearance-none marker:appearance-none">
                    <summary>More Info</summary>
                    <div className="ml-4">
                        <span>created At date : 
                            <PrettyDate date={props?.date?.toDate() || new Date()} />
                        </span>
                    </div>
                </details>
            </div>
            <div className="edits">
                {/* delete button */}
                <div className='delete-button p-2 transition-all hover:backdrop-brightness-125 rounded-md '>
                    <IoTrashBinOutline className="text-2xl cursor-pointer text-red-600 "  />
                </div>
            </div>
        </div>
    );
}

export default Account;
