import { useEffect } from "react";
import { app } from "../../firebase-config";
import { signOut, getAuth } from "@firebase/auth";
import { useNavigate } from "react-router";


export default function Logout(){
    const navigate = useNavigate();
    
    useEffect(() => {
        (async()=>{
            await signOut(getAuth(app));
            await window.indexedDB.deleteDatabase("firebaseLocalStorageDb")
            navigate("/login");
        })();

    }, []);
    

    return(
        <>
           
            <div className="text-center">Signing you out.</div>

            
        </>
    )
}