import { collection, getDocs } from "@firebase/firestore";

/**
 * @param {} url The url to fetch from. 
 * @param {*} options The options for the fetching process.
 * @returns it will return what any fetch would do.
 */
async function fetsh(url, options={}) {
    return new Promise(async(res, rej)=>{
        try{
            let fetched= await fetch(url, options);
            fetched = await fetched.json();
            res(fetched);
        } catch(err){
            rej(err)
        }
    })
}

async function getCollectionDocumentsNamesAsInArray(db, collectionName) {
    const branchesCollectionRef = collection(db, collectionName);
    const branchesCollection = await getDocs(branchesCollectionRef);
    const docs = branchesCollection.docs;
    let result = docs.map(doc=>{
        return doc.id;
    });
    return result;
}
async function getCollectionDocumentsAsInArray(db, collectionName) {
    const branchesCollectionRef = collection(db, collectionName);
    const branchesCollection = await getDocs(branchesCollectionRef);
    const docs = branchesCollection.docs;
    let result = docs.map(doc=>{
        return {
            id: doc.id, 
            ...doc.data()
        };
    });
    return result;
}

function filterObject(obj, removes, callback=()=>{}) {
    let newOb = {};
    let obInAr = []
    Object.fromEntries(Object.entries(obj).
      filter(([key, val]) => {
        obInAr.push([key, val])
      }));
      obInAr.forEach(([key, val])=>{
          if(typeof removes == "string") {
              if(key != removes){
                  newOb[key] = val
              }
          }else if(typeof removes == "object"){
              let isBlocked = null;
              removes.forEach(remove=>{
                  if(key == remove){
                    isBlocked = true;
                  }
              })
              if(!isBlocked){
                newOb[key] = val
              }
          }
      })
    return newOb;
}


export {
    fetsh, 
    getCollectionDocumentsNamesAsInArray, 
    getCollectionDocumentsAsInArray,
    filterObject
}