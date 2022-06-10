import { EmployeeContext } from "../others/contexts";
import { useContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import { getCollectionDocumentsAsInArray, getCollectionDocumentsNamesAsInArray,  } from "../others/shorcutFunctions";
import BranchLink from "./components/BranchLink";
import { db } from "../../firebase-config";
import { v4 } from "uuid";
import button from "../others/btn";
import { VscCircuitBoard } from "react-icons/vsc";
import BranchBtn from "./components/BranchBtn";
import AdvancedSort from "./components/AdvancedSort";
import { collection, doc, getDoc, getDocs, setDoc } from "@firebase/firestore";
import { IoReloadCircle, IoReloadCircleSharp, IoReloadOutline } from "react-icons/io5";
import { GiReloadGunBarrel } from "react-icons/gi";
function Branches() {

    const params = useParams();
    const {employee, setEmployee} = useContext(EmployeeContext)
    const [showBranches, setShowBranches] = useState(false);
    const [branches, setBranches] = useState([])

    async function placingBranches(params) {
        const dbBranches = await getCollectionDocumentsAsInArray(db, "/branches");
        setBranches(dbBranches);
    }

    useEffect(()=>{
        (async()=>{
            await placingBranches()
        })()
    }, []) 

    useEffect(() => {
        if(!params?.currentBranchId && employee?.position == "admin"){
            setShowBranches(true)
        }else{
            setShowBranches(false)
        }
    }, [params, employee]);   

    return (
        <>
            {!showBranches && <Outlet />}
            {showBranches && <div className="w-full h-full mx-0 bg-gray-600 select-none flex flex-col">
                <div>
                    <button  className="flex justify-center items-center w-full px-2 py-6 bg-gray-600 hover:bg-gray-700  text-3xl mb-0 cursor-pointer gap-4 " >
                        Dashboard 
                        <VscCircuitBoard  className="text-4xl" />
                    </button>
                </div>
                <div className="branches-container w-full h-full bg-[#484c57] rounded-t-2xl border-t-4 border-white flex flex-col">
                    <AdvancedSort branches={branches} setBranches={setBranches}  />
                    <div className="w-full h-full  mt-1 bg-[#555a69] rounded-t-2xl border-t-4 border-white">
                        <IoReloadCircleSharp className=" mx-auto my-1 text-4xl cursor-pointer hover:text-gray-400" onClick={()=>{(async()=>{ await placingBranches()})()}} />
                        <div className="w-full h-full max-h-full overflow-y-scroll">
                            {branches && branches.map((branch, idx)=>{
                                return (
                                    <BranchLink key={v4()} branch={branch} number={idx+1} />
                                )
                            })}
                            {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                            {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                            {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                            {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                            {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                            {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                            {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                            {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                            {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                            {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                            {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                            {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                            {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                            {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                            {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                            {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                            {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                            {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                            {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                            {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default Branches;