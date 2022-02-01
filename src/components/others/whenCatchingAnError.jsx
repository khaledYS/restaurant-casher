

export default function whenCatchingAnError(error){
    window.alert(`this might happen bucause of a leak internet connection, Error : ${JSON.stringify(error)}`)
    console.warn(`this might happen bucause of a leak internet connection, Error : ${JSON.stringify(error)}`)
}