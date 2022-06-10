import { useState } from "react";
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill, BsFillArrowUpSquareFill } from "react-icons/bs";
import { FiArrowUp, FiArrowUpCircle } from "react-icons/fi";
import BranchBtn from "./BranchBtn";

function AdvancedSort({setBranches, branches}) {

    const [AdvancedSortIsOpen, setAdvancedSortIsOpen] = useState(false)

    return (
        <div className="pl-2 select-none">
            <div className={`flex ${AdvancedSortIsOpen ? "mt-2" : "my-2"} justify-between items-center`}>
                <h1 className="text-xl block" >{AdvancedSortIsOpen ? "Sort By :-" : "Advanced sort"}</h1>
                {AdvancedSortIsOpen ? 
                    <BsFillArrowUpCircleFill className="text-3xl cursor-pointer mr-4 hover:text-gray-400" title="close Avanced sort panel" onClick={()=>setAdvancedSortIsOpen(false)} />
                    : 
                    <BsFillArrowDownCircleFill className="text-3xl cursor-pointer mr-4 hover:text-gray-400" title="open Avanced sort panel" onClick={()=>setAdvancedSortIsOpen(true)} />
                }
            </div>
            {   AdvancedSortIsOpen &&
                <>
                    <div className="btns flex items-center gap-x-6 gap-y-2 px-2 mb-0 flex-wrap">
                        <BranchBtn setBranches={setBranches} branches={branches} title="Name" />
                        <BranchBtn setBranches={setBranches} branches={branches} title="Location" />
                        <BranchBtn setBranches={setBranches} branches={branches} title="Date" />
                    </div>
                    <h1 className="mt-3 text-xl block">reverse ? :-</h1>
                    <div className="my-0 px-2 mb-3">
                        <BranchBtn setBranches={setBranches} branches={branches} title="reverse" />
                    </div>
                </>
            }
        </div>
    );
}

export default AdvancedSort;