

export default function whenCatchingAnError(error){
    window.alert(`this might happen bucause you don't have an internet connection or a leak in internet connection, Error : ${JSON.stringify(error)}`)
    console.warn(`this might happen bucause you don't have an internet connection or a leak in internet connection, Error : ${JSON.stringify(error)}`)
}