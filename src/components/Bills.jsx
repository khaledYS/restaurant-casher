import { db } from "../../senstive/firebase-config";
import {
    query,
    getDocs,
    collection,
    where,
    orderBy,
    setDoc
} from "firebase/firestore"
import { LoadingContext, UserContext } from "./contexts"
import {IconContext} from "react-icons"

function Bills() {
    return ( 
        <div className="Bills-component">

        </div>
     );
}

export default Bills;