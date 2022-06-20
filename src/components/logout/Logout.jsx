import { useContext, useEffect } from "react";
import { app } from "../../firebase-config";
import { signOut, getAuth } from "@firebase/auth";
import { useNavigate } from "react-router";
import { EmployeeContext } from "../others/contexts";


export default function Logout(){
    const navigate = useNavigate();
    const {setEmployee} = useContext(EmployeeContext);
    
    useEffect(() => {
        (async()=>{
            await signOut(getAuth());
            await setEmployee(null)
            window.indexedDB.deleteDatabase("firebaseLocalStorageDb")
            var cookies = document.cookie.split("; ");
            for (var c = 0; c < cookies.length; c++) {
                var d = window.location.hostname.split(".");
                while (d.length > 0) {
                    var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
                    var p = location.pathname.split('/');
                    document.cookie = cookieBase + '/';
                    while (p.length > 0) {
                        document.cookie = cookieBase + p.join('/');
                        p.pop();
                    };
                    d.shift();
                }
            }
            window.indexedDB.deleteDatabase('firebaseLocalStorageDb');
        })();

    }, []);
    

    return(
        <div className="grid h-full place-items-center">
           
            <div className="text-center">Signing you out.</div>

            
        </div>
    )
}