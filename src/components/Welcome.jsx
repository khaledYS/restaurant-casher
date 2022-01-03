import { db } from "../../senstive/firebase-config";
import { 
    getDoc,
    setDoc,
    doc,
    serverTimestamp
 } from "@firebase/firestore";
import {
    getAuth
} from "@firebase/auth"
import { 
    useState, 
    useEffect 
} from "react";

function Welcome(props) {
    
    const [user, setUser] = useState("kasfdhja");

    useEffect(()=>{
      (async ()=>{
        const docRef = await doc(db, "users", getAuth().currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log(user)
        }else{
            await setDoc(docRef, {uid : getAuth().currentUser.uid, name:getAuth().currentUser.displayName, created: serverTimestamp(), position:"employer"});
        }
      })();
    }, [])

    useEffect(()=>{console.log("hi")}, [user])

    // const getdocs = async (dataCollectionRef)=>{
    //   let data = await getDocs(dataCollectionRef);
    //   data = data.docs.map((doc)=>({...doc.data(), id: doc.id}));
    //   return data;
    // }

      

    return ( 
        <div>
            <button > here </button>
        </div>
    );
}

export default Welcome;



// you should do what is written in the readme.md file
