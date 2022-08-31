import { doc, getDoc } from "@firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { Outlet, useOutletContext, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { db } from "../../firebase-config";
import { currentBranchIdContext, EmployeeContext } from "../others/contexts";
import { checkOneOfArray, getCollectionDocumentsNamesAsInArray } from "../others/shorcutFunctions";
import NotFoundBranchId from "./components/NotFoundBranchId";
import NotLinkedWithABranch from "./components/NotLinkedWithABranch";

function Branch() {
  const {
    branchIsAuthenticated,
    setBranchIsAuthenticated,
    currentBranchIdFromContext,
    setCurrentBranchIdFromContext,
    currentBranchIdFromParams,
    employee,
  } = useOutletContext();


  useEffect(() => {
    (async () => {
        let listOfPositions = ["admin", "moderator", "employee"];
        if (employee && checkOneOfArray(listOfPositions, employee?.position) && currentBranchIdFromParams !== "00000000000000000000") {
          const docRef = doc(db, "branches", currentBranchIdFromParams );
          const docRq = await getDoc(docRef);
          console.log(docRq.exists())
          if(docRq.exists()){
              setCurrentBranchIdFromContext(currentBranchIdFromParams);
              setBranchIsAuthenticated(currentBranchIdFromParams)
          }else {
              if(employee.position == "admin"){
                  setBranchIsAuthenticated(1)
              }else{
                  setBranchIsAuthenticated(2)
              }
          }
        }else{
            setBranchIsAuthenticated(2);
        }
    })();
  }, [employee, currentBranchIdFromParams, currentBranchIdContext]);

  return (
    <>
      {/**
       * if the BranchIsAuthenticated == 1 && <NotFoundBranchId />
       * if the BranchIsAuthenticated == 2 && <NotLinkedWithABranch />
       * .
       * Object version :-
       * BranchIsAuthenticated: {
       *    1 : <NotFoundBranchId />
       *    2 : <NotLinkedWithABranch />
       * }
       */}
      { branchIsAuthenticated == 1 ? (
        <NotFoundBranchId />
      ) : branchIsAuthenticated == 2 ? (
        <NotLinkedWithABranch />
      ) : branchIsAuthenticated == currentBranchIdFromParams ? (
        <Outlet />
      ) : (
        <div className="w-full h-full text-center grid place-items-center">
          Loading.....
        </div>
      )}
    </>
  );
}

export default Branch;
