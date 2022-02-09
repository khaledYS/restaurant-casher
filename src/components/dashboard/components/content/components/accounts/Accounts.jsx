import { getDoc, getDocs, collection } from "@firebase/firestore";
import { useState, useEffect } from "react";
import { IoAdd, IoAddCircle, IoAddCircleOutline, IoAddCircleSharp, IoAddOutline, IoAddSharp } from "react-icons/io5";
import { TiUserAddOutline } from "react-icons/ti";
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
        <div className="w-full h-full flex flex-col overflow-y-auto text-2xl">
            {/* add account button  */}
            <div className="w-full flex justify-center items-center my-4 ">
                <div className="p-2 cursor-pointer transition-all hover:backdrop-brightness-200 rounded-md">
                    <IoAddCircleOutline className="text-5xl text-[#00ffb8]" />
                </div>
            </div>

            {/* acconts */}
            <div className="w-full h-full p-4 py-2" style={{flexBasis:"100%"}}>
                {typeof(accounts) == "object" ? accounts.map((account)=> {
                    return <Account key={uuidv4()} email={account.email} date={account.created} />
                }) : <h1>Loading...</h1>}
                <Account key={uuidv4()} email={"ammaryasser@gmail.com"} />
                <Account key={uuidv4()} email={"ammaryasser@gmail.com"} />
                <Account key={uuidv4()} email={"ammaryasser@gmail.com"} />
                <Account key={uuidv4()} email={"ammaryasser@gmail.com"} />
                <Account key={uuidv4()} email={"ammaryasser@gmail.com"} />
                <Account key={uuidv4()} email={"ammaryasser@gmail.com"} />
                <Account key={uuidv4()} email={"ammaryasser@gmail.com"} />
                <Account key={uuidv4()} email={"ammaryasser@gmail.com"} />
                <Account key={uuidv4()} email={"ammaryasser@gmail.com"} />
                <Account key={uuidv4()} email={"ammaryasser@gmail.com"} />
                <Account key={uuidv4()} email={"ammaryasser@gmail.com"} />
                <Account key={uuidv4()} email={"ammaryasser@gmail.com"} />
                <Account key={uuidv4()} email={"ammaryasser@gmail.com"} />
                <Account key={uuidv4()} email={"ammaryasser@gmail.com"} />
                <Account key={uuidv4()} email={"ammaryasser@gmail.com"} />
                <Account key={uuidv4()} email={"ammaryasser@gmail.com"} />
                
            </div>
        </div>
     );
}

export default Accounts;