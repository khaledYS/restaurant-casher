import { db } from "../../senstive/firebase-config";
import { 
    getDoc,
    setDoc,
    doc,
    serverTimestamp
 } from "@firebase/firestore";
import { useState, useEffect, useRef } from "react";

function Welcome(props) {
    
    const [user, setUser] = useState({});

    useEffect(()=>{
      (async ()=>{
        const docRef = await doc(db, "users", props.user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            await setUser({dbUser:docSnap.data(), googleUser:props.user})
            console.log(user)
        }else{
            await setDoc(docRef, {uid : props.user.uid, name:props.user.displayName, created: serverTimestamp(), position:"employer"});
            const newDocSnap = await getDoc(docRef);
            await setUser({dbUser:newDocSnap.data(), googleUser:props.user})
        }
      })();
    }, [])

    useEffect(()=>{console.log(user)}, [user])

    // const getdocs = async (dataCollectionRef)=>{
    //   let data = await getDocs(dataCollectionRef);
    //   data = data.docs.map((doc)=>({...doc.data(), id: doc.id}));
    //   return data;
    // }

    return ( 
        <div>
            
        </div>
    );
}

export default Welcome;



// you should do what is written in the readme.md file
