import { currentBranchIdContext, EmployeeContext } from "../others/contexts";
import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router";
import {
    checkOneOfArray,
  getCollectionDocumentsAsInArray,
  getCollectionDocumentsNamesAsInArray,
} from "../others/shorcutFunctions";
import BranchLink from "./components/BranchLink";
import { db } from "../../firebase-config";
import { v4 } from "uuid";
import button from "../others/btn";
import { VscCircuitBoard } from "react-icons/vsc";
import BranchBtn from "./components/BranchBtn";
import AdvancedSort from "./components/AdvancedSort";
import { collection, doc, getDoc, getDocs, setDoc } from "@firebase/firestore";
import {
  IoReloadCircle,
  IoReloadCircleSharp,
  IoReloadOutline,
} from "react-icons/io5";
import { GiReloadGunBarrel } from "react-icons/gi";
import { Link } from "react-router-dom";
function Branches() {
  const params = useParams();
  const navigate = useNavigate();
  const [showBranches, setShowBranches] = useState(false);
  const [branches, setBranches] = useState([]);
  const [branchIsAuthenticated, setBranchIsAuthenticated] = useState(1);
  const { currentBranchId: currentBranchIdFromParams } = useParams();
  const [currentBranchIdFromContext, setCurrentBranchIdFromContext] = useContext(currentBranchIdContext);
  const { employee } = useContext(EmployeeContext);

  async function updateBranches(newBranches) {
    if (newBranches) {
      setBranches(newBranches);
      return;
    }
    let dbBranches = await getCollectionDocumentsAsInArray(db, "/branches");
    dbBranches = dbBranches.map((e) => {
      return { ...e, createdAt: e.createdAt.toDate().getTime() };
    });
    setBranches(dbBranches);
  }

  useEffect(() => {
    if (showBranches) {
      (async () => {
        await updateBranches();
      })();
    }
  }, [showBranches]);

  useEffect(() => {
    let listOfFirstTwoPositions = ["employee", "moderator"];
    if (employee && employee?.position == "admin") {
        if(!currentBranchIdFromParams && !currentBranchIdFromContext){
            setShowBranches(true);
        }else if(currentBranchIdFromParams && !currentBranchIdFromContext){
            setCurrentBranchIdFromContext(currentBranchIdFromParams);
            setBranchIsAuthenticated(true)
            navigate(currentBranchIdFromParams)
        }else if(currentBranchIdFromParams != currentBranchIdFromContext){
            navigate(currentBranchIdFromContext)
            setBranchIsAuthenticated(true)
        }else {
            setShowBranches(false);
        }
    } else if (employee && checkOneOfArray(listOfFirstTwoPositions, employee?.position)) {
      setShowBranches(false);
      if (
        employee &&
        checkOneOfArray(listOfFirstTwoPositions, employee?.position) &&
        !currentBranchIdFromParams &&
        employee?.branchId
      ) {
        setCurrentBranchIdFromContext(employee?.branchId);
        navigate(employee.branchId)
      } else if (
        employee &&
        checkOneOfArray(listOfFirstTwoPositions, employee?.position) &&
        employee?.branchId &&
        employee?.branchId != currentBranchIdFromContext
      ) {
        setCurrentBranchIdFromContext(employee?.branchId);
        navigate(employee.branchID)
      } else if (employee && checkOneOfArray(listOfFirstTwoPositions, employee?.position) && !employee?.branchId && currentBranchIdFromParams != "00000000000000000000") {
          navigate("00000000000000000000")
          setBranchIsAuthenticated(2)
      }
    }else {
        setShowBranches(false)
    }
  }, [currentBranchIdFromParams, currentBranchIdFromContext, employee]);


  return (
    <>
      {!showBranches && (
        <Outlet
          context={{
            branchIsAuthenticated,
            setBranchIsAuthenticated,
            currentBranchIdFromContext,
            setCurrentBranchIdFromContext,
            currentBranchIdFromParams,
            employee,
          }}
        />
      )}
      {showBranches && (
        <div className="w-full h-full mx-0 bg-gray-600 select-none flex flex-col justify-center items-center">
          <div className="w-full">
            <Link
              to="/dashboard"
              className="flex justify-center items-center w-full px-2 py-6 bg-gray-600 hover:bg-gray-700  text-3xl mb-0 cursor-pointer gap-4 "
            >
              Dashboard
              <VscCircuitBoard className="text-4xl" />
            </Link>
          </div>
          <div className="branches-container w-full h-full bg-[#484c57] rounded-t-2xl border-t-4 border-white flex flex-col overflow-hidden">
            <div className="w-full h-fit">
              <AdvancedSort
                branches={branches}
                setBranches={setBranches}
                updateBranches={updateBranches}
              />
            </div>
            <div className="w-full gap-y-4 gap-x-6 py-6 grow mt-1 bg-[#555a69] rounded-t-2xl border-t-4 border-whites max-h-full overflow-y-auto">
              {/* <div className="w-full flex flex-row flex-wrap justify-center place-items-center gap-y-4  gap-x-6 py-6 grow mt-1 bg-[#555a69] rounded-t-2xl border-t-4 border-whites max-h-full overflow-y-auto"> */}
              {branches &&
                branches.map((branch, idx) => {
                  return (
                    <BranchLink key={v4()} branch={branch} number={idx + 1} />
                  );
                })}
              {/* {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                        {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                        {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                        {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                        {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                        {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                        {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                        {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                        {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                        {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})}
                        {branches && branches.map((branch, idx)=>{return (<BranchLink key={v4()} branch={branch} number={idx+1} />)})} */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Branches;
