import { db } from './senstive/firebase-config';
import { collection, getDocs } from '@firebase/firestore';
import { useEffect, useState } from 'react'
import './styles/App.css'
import './styles/index.css'

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "Users");

  const getdocs = async (dataCollectionRef)=>{
    let data = await getDocs(dataCollectionRef);
    data = data.docs.map((doc)=>({...doc.data(), id: doc.id}));
    return data;
  }

  useEffect(()=>{
    const getUsers = async ()=>{

      setUsers(await getdocs(usersCollectionRef))

    }

    getUsers();
  }, [])

  useEffect(()=>{
    console.log(users)
  }, [users])

  return (
    <div className="App">
      lafkjsdfl;ajfasdf
    </div>
  )
}

export default App
