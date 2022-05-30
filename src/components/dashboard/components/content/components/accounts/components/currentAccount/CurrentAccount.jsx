import { useEffect, useRef, useState } from "react";
import { FiCheckSquare } from "react-icons/fi";
import { IoCheckmarkCircle, IoCheckmarkCircleOutline, IoCloseCircle, IoCloseCircleOutline, IoCloseCircleSharp, IoExpand, IoTrashBinOutline } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";
import PrettyDate from "../../../../../../../others/PrettyDate";

export default function CurrentAccount({currentAccount : props}) {
    console.log("kjl", props)
    const [inputMode, setInputMode] = useState(false);
    const [activeSubmitButton,setActiveSubmitButton] = useState(false)

    window.onkeydown = (e)=>{
        e.key == "Escape" && props.setCurrentAccount(null);
    }
    return (
        < >
            <div className={"fixed top-0 left-0 grid place-items-center w-full h-full backdrop-brightness-50"}>
                <div className="h-5/6 w-[90vw] bg-gray-600 rounded-3xl py-2 relative overflow-hidden flex flex-col">
                    {/* close button */}
                    <span 
                        className="w-min text-2xl block text-right mr-4 ml-auto p-2 px-2 transition-all hover:backdrop-brightness-150 rounded-md cursor-pointer" 
                        onClick={()=>{props.setCurrentAccount(null)}}
                        ><IoCloseCircleOutline /></span>

                    <h1 className="text-center text-2xl">{props.email}</h1>
                    <br />
                    <div className="account text-center flex flex-col justify-between h-full overflow-hidden">
                        
                        <div>
                            <div className="my-4" key={uuidv4()}>
                                {/* name */}
                                <label htmlFor="label">CREATED DATE : </label>
                                <div className=" max-w-sm w-full mx-auto">
                                    <div className=" w-full text-center grid place-items-center p-2 bg-neutral-700 rounded-md">
                                        <PrettyDate date={props.date} />
                                    </div>
                                </div>
                            </div >

                            <div className="my-4" key={uuidv4()}>
                                {/* name */}
                                <label htmlFor="label">NAME : </label>
                                <div className="relative w-full">
                                    <input 
                                        type="text"
                                        className={`max-w-sm w-full text-center p-2 bg-neutral-700 rounded-md`}
                                        id="label" 
                                        defaultValue={props.account["name"]} 
                                        disabled={true}
                                        />

                                </div>
                            </div >

                            {/* position */}
                            <div className="my-4 mb-0" key={uuidv4()}>
                                {/* position */}
                                <div className="relative w-full">
                                    <label htmlFor="label" className="block">POSITION : </label>
                                        <div className="relative">
                                            <select 
                                                name="label"
                                                id="label"
                                                className={`max-w-sm w-11/12 cursor-pointer text-center p-2 text-white rounded-md ${inputMode ? "bg-gray-500 border-2 border-yellow-400" : "bg-neutral-700"}`}
                                                >
                                                <option value={props.account.position.toLowerCase() == "admin" ? "admin" : "employee"}>{props.account.position.toLowerCase() == "admin" ? "admin" : "employee"}</option>
                                                <option value={props.account.position.toLowerCase() == "admin" ? "employee" : "admin"}>{props.account.position.toLowerCase() == "admin" ? "employee" : "admin"}</option>
                                            </select>
                                            {!inputMode &&
                                                <div className="absolute top-0 left-0 w-full h-full cursor-pointer" onDoubleClick={()=>{setInputMode(true);setActiveSubmitButton(true)}} ></div>
                                            }
                                        </div>
                                </div>
                            </div >
                            {/* tip tag */}
                            {!inputMode && <div className="text-center">
                                <span className="text-2xl text-green-500">Tip: </span>
                                <span>double click on the position so can change it</span>
                            </div>}
                        </div>

                        <div className="edits flex justify-center items-center mb-4" >
                            {/* delete button */}
                            <div 
                                title="Delete This user" 
                                className='delete-button p-2 transition-all hover:backdrop-brightness-150 rounded-md text-[#dc2626] hover:text-[#ff5959] '
                                >
                                <IoTrashBinOutline className="text-2xl cursor-pointer  "  />
                            </div>
                            {/* submit button */}
                            {activeSubmitButton &&
                                 <div
                                    title="submit changes" 
                                    className='submit-button mx-1 ml-4 text-2xl flex items-center cursor-pointer p-2 transition-all hover:bg-[#16a34a] rounded-md text-[#16a34a] border-2 border-[#16a34a]  hover:text-[#ffffff] ' 
                                    onClick={()=>console.log()}>
                                Done <IoCheckmarkCircle className="ml-4" />
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </> 
    );
}
