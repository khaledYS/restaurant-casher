import { normalizePath } from "vite";

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


export {
    fetsh
}