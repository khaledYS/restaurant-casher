import { getDoc, getDocs, collection } from "@firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../../../../../firebase-config";
import Account from "./components/Account/Account";

function Accounts() {
    const urlParams = useParams();
    const [accounts, setAccounts] = useState("Loading ...");

    
    
    
    async function getAccounts(){
        let accountsDocs = await getDocs(collection(db, "users"));
        accountsDocs = accountsDocs.docs.map((accountDoc)=>{ return { id:accountDoc.id, ...accountDoc.data() } })
        setAccounts(
            accountsDocs.filter((accountDoc)=>accountDoc.branchId == urlParams.branchIdP1v1qtOnyXnSlYPAObEw)
        )
            
    }
    
    useEffect(() => {
        (async()=>{

            await getAccounts()

        })();
        console.log(urlParams)
    }, []);

    return ( 
        <div className="w-full h-full flex flex-col">
            <div className="w-full h-full p-4" style={{flexBasis:"100%"}}>
                {typeof(accounts) == "object" ? accounts.map((account)=> {
                    return <Account key={uuidv4()} email={account.email} date={account.created} />
                }) : <h1>Loading...</h1>}

            </div>
        </div>
     );
}

export default Accounts;