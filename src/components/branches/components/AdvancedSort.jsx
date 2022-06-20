import { useEffect, useState } from "react";
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill, BsFillArrowUpSquareFill } from "react-icons/bs";
import { FiArrowUp, FiArrowUpCircle } from "react-icons/fi";
import { GiConsoleController } from "react-icons/gi";
import { IoReloadCircleSharp } from "react-icons/io5";
import BranchBtn from "./BranchBtn";

function AdvancedSort(props) {

    const [AdvancedSortIsOpen, setAdvancedSortIsOpen] = useState(false)
    
    return (
        <div className="pl-2 select-none">
            <div className={`flex ${AdvancedSortIsOpen ? "mt-1" : "my-2"} justify-between items-center`}>
                <h1 className="text-xl block" >{AdvancedSortIsOpen ? "Sort By :-" : "Advanced sort"}</h1>
                <div className="flex flex-row items-center px-4 gap-2">
                    <IoReloadCircleSharp className=" mx-auto my-1 text-4xl cursor-pointer hover:text-gray-400" onClick={()=>{(async()=>{ await props.updateBranches()})()}} />
                    {AdvancedSortIsOpen ? 
                        <BsFillArrowUpCircleFill className="text-3xl cursor-pointer hover:text-gray-400" title="close Avanced sort panel" onClick={()=>setAdvancedSortIsOpen(false)} />
                        : 
                        <BsFillArrowDownCircleFill className="text-3xl cursor-pointer hover:text-gray-400" title="open Avanced sort panel" onClick={()=>setAdvancedSortIsOpen(true)} />
                    }
                </div>
            </div>
            {   AdvancedSortIsOpen &&
                <>
                    <div className="btns flex items-center gap-x-6 gap-y-2 px-2 mb-0 flex-wrap">
                        <BranchBtn setBranches={props.setBranches} branches={props.branches} updateBranches={props.updateBranches} title="Name" objectName={"name"} />
                        <BranchBtn setBranches={props.setBranches} branches={props.branches} updateBranches={props.updateBranches} title="Location" objectName={"location"} />
                        <BranchBtn setBranches={props.setBranches} branches={props.branches} updateBranches={props.updateBranches} title="Date" objectName={"createdAt"} />
                    </div>
                    <h1 className="mt-3 text-xl block">reverse ? :-</h1>
                    <div className="my-0 px-2 mb-3">
                        <BranchBtn setBranches={props.setBranches} branches={props.branches} updateBranches={props.updateBranches} title="reverse" onClick={(e)=>{props.updateBranches([...props.branches.reverse()])}} />
                    </div>
                </>
            }
        </div>
    );
}

export default AdvancedSort;