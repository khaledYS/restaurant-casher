import { useEffect } from "react";
import { app } from "../firebase-config";
import { signOut, getAuth } from "@firebase/auth";


export default function Logout(){

    useEffect(() => {

        signOut(getAuth(app))

    }, []);
    

    return(
        <>
           
            <div className="text-center">Signing you out.</div>

            
        </>
    )
}