import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { db } from "../../firebase-config";
import  { getCollectionDocumentsNamesAsInArray } from "../others/shorcutFunctions";
import NotFoundBranchId from "./components/NotFoundBranchId";
import NotLinkedWithABranch from "./components/NotLinkedWithABranch";


function Branch() {

    const {currentBranchId} = useParams();
    const [branchAuthenticated, setBranchAuthenticated] = useState("NotConnectedWithABranch");
    
    
    useEffect(()=>{
        (async ()=>{
        })();

        if(currentBranchId){
            setBranchAuthenticated(currentBranchId)
        }
    }, [])

    return (
        <>  
            {/**
             * if the BranchAuthenticated value == "NotConnectedWithABranch" && <NotConnectedWithABranch />
             */}
            {   
                  branchAuthenticated ? <Outlet />
                : branchAuthenticated == "NotConnectedWithABranch" ? <NotFoundBranchId />
                : branchAuthenticated == "NotLinkedWithABranch" ? <NotLinkedWithABranch />
                : "boob, be, ba, something gotta do bad"
            }
        </>
    );
}

export default Branch;