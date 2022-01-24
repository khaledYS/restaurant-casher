import { db } from "../../../senstive/firebase-config";
import {
	doc,
    setDoc
} from "firebase/firestore"
import {v4 as uuidv4} from "uuid"
import { Link } from "react-router-dom";
import PrettyDate from "../others/PrettyDate"
import { TiEdit } from "react-icons/ti"


function CurrentBill({currentBill, setCurrentBill, employee}){


	currentBill.lastEdit.map((el,ind) =>{
		console.log(el.toDate().toString(), ind)
	})

	    // this actually gonna get all of the orders and count how many products are tha same so we compress them into one order and we print the quantity of them
		function getTheQuantity(bill){
			let newBill = [];
			
			for(const i of bill){
				let found = newBill.findIndex((item)=>item.id == i.id)
	
				if(found == -1){
					newBill.push({...i, quantity:1})
				}else{
					newBill[found].quantity += 1;
					newBill[found].quantityAmount = newBill[found].cost + i.cost;
				}
			}
	
			return newBill  
		}

	

	return(
		<>
				<div className=" h-full w-full overflow-auto ">
					<div className="relative pt-8 px-2 pb-8 overflow-auto  h-full w-full ">
						<span style={{"transition" : "all .2s ease-in-out", "zIndex":"8"}} title="close this bill" className="cursor-pointer absolute top-4 right-6 text-3xl text-gray-300 hover:text-white drop-shadow-lg py-1 px-6 bg-gray-700 hover:bg-gray-500 rounded-lg" onClick={()=>{setCurrentBill(null)}}>X</span>

						{/* about bill like number id, date and etc. */}
						<div className="my-2 text-xl ">
							<div className="title text-3xl text-center mb-4 flex flex-wrap justify-center items-center">
								Bill {currentBill.billIDNumber}

								{/* edit bill url */}
								{
									employee.name == currentBill.submittedBy && !currentBill.deleted && 
									<Link className="flex ml-4 w-fit px-2 py-1 rounded-md border-2 border-zinc-300 hover:bg-zinc-300"  to={"/welcome/order/" + currentBill.id} target="_blank">
										<TiEdit />
									</Link>
								}
							</div>
							<div className="text-center">
								<div>Bill Date : 
										<PrettyDate date={currentBill.createdAt.toDate()} />
								</div> 
								<div>
									<div className={`${currentBill.finished ? "finished" : "notfinished"}`}>{`${currentBill.finished ? "Finished" : "Not Finished"}`}
										{currentBill.finished && <div>BY: {currentBill.finishedBy}</div>}
									</div>
								</div>
							</div>
						</div>


						{/* if the bill has been change before then show the times where it got edited or changed */}
						{	currentBill.lastEdit?.length &&
							<details className="mx-auto w-[90%] bg-gray-600 mt-6 p-2 rounded-lg text-white shadow-[0_.1rem_1rem_-.4rem_rgb(0,0,0)]">
								<summary className="cursor-pointer">Last edit is on <PrettyDate date={currentBill.lastEdit[0].toDate()} />  </summary>
								{currentBill.lastEdit.map((el, ind)=>{
									return <p key={uuidv4()} className="ml-6"><span className="font-bold">{ind + 1}-</span> {ind != 0 && "also"} edited on <PrettyDate date={el.toDate()} />  </p>
								})}
							</details>
						}

						{/* orders table */}
						<table className="w-full border-2 border-gray-700 mt-5 shadow-xl shadow-gray-300" style={{"wordBreak":"break-word"}} >
							<thead >
								<tr>
									<th className="border-black border-2  p-1">ID</th>
									<th className="border-black border-2  p-1">Category</th>
									<th className="border-black border-2 p-1">Order name</th>
									<th className="border-black border-2 p-1">cost</th>
									<th className="border-black border-2  p-1" title="Quantity">Q</th>
									<th className="border-black border-2  p-1" title="Quantity Amount">QA</th>
								</tr>
							</thead>
							<tbody >
								{currentBill.bill && getTheQuantity(currentBill.bill).map((item, index)=>{
								return <tr key={uuidv4()} title={item.billItemId} >
											<td className="border-black border-2 p-1 text-center" >{index + 1}</td>
											<td className="border-gray-300 border-2 p-1" >{item.category}</td>
											<td className="border-gray-300 border-2 p-1">{item.title}</td>
											<td className="border-gray-300 border-2 p-1 text-center">{item.cost}$</td>
											<td className="border-gray-300 border-2 p-1 text-center">{item.quantity}</td>
											<td className="border-gray-300 border-2 p-1 text-center" title="Quantity amount">{item.quantityAmount ? item.quantityAmount : item.cost}$</td>
										</tr>
								})}
								<tr className="border-black border-t-4">
									<td className="p-1 text-center border-2 border-black" colSpan="4">Total:</td>
									<td className="text-center" colSpan="2">{currentBill.billTotalBalance}$</td>
								</tr>
							</tbody>
						</table>



						{/*price table */}
						<div className="flex w-full justify-around  bg-gray-300 py-2 pl-2 border-t-2 border-black shadow-xl shadow-gray-400">
								<span> Price: {currentBill.billTotalBalance}$</span>
								<span>VAT: {employee.tax}/100</span>
								{/*  */}
								<span> Taxed price : <span className="bg-yellow-300 rounded-md py-1 px-2">{(currentBill.billTotalBalance + (currentBill.billTotalBalance * employee.tax) / 100) }$</span></span>
						</div>


						{/* BILL buttons */}
						<div className="flex flex-col mt-10">

							{/* fiinish and unfinish bill */}
							{
								// if the bill is already finished then show the unfinish bill button if not then show the finish bill button, and if the bill is deleted then don't show any of these buttons and only show that he needs to recover this bill to unfinish or finish the buill */
								currentBill.finished && !currentBill.deleted ? <button 
										className="w-full mx-auto text-white bg-gray-600 hover:shadow-xl transition-all  shadow-gray-600 text-lg font-medium border-black border-2 hover:-translate-y-[1px] rounded-full py-4 px-6"
										onClick={async ()=>{
											// confirmation 
											if(!window.confirm("Do you really want to unfinish the bill")) return ;

											const data = await setDoc(doc(db, "bills/"  + currentBill.id.toString()), {finished: false, finishedBy:null}, {merge:true})
										}}
										>Unfinish Bill</button>
										:
								!currentBill.finished && !currentBill.deleted ? <button 
									className="w-full hover:bg-green-300 hover:shadow-xl transition-all  shadow-gray-600 text-lg font-medium border-black border-2 bg-green-400 hover:-translate-y-1 rounded-full py-4 px-6"
									onClick={async ()=>{
										// confirmation if he really want to finish the bill
										const confirmation = window.confirm("Do you really want to finish The Bill")
										if(!confirmation) return

										await setDoc(doc(db, "bills/"  + currentBill.id.toString()), {finished: true, finishedBy: employee.name}, {merge:true})
									}}
									>Finish Bill</button>

								: currentBill.deleted && <div className="text-center text-lg text-red-600">* Recover this bill to {currentBill.finished ? "Unfinish" : "finish"}</div>
							}


							{/* delete or recover button for the bill */}
							{
								// if the user bill submitter is the same on the current bill then show him the delete button if the bill is already deleted then show him the recover button
								employee.name == currentBill.submittedBy && currentBill.deleted == false ?
									<button 
											className="w-fit ml-auto mt-5 hover:shadow-xl shadow-slate-600 py-2 px-4 bg-red-800 text-gray-300 mx-auto hover:bg-red-600 transition-all rounded-md"
											onClick={async ()=>{                                                        
												// confirmation if he really want to delete the bill
												if(window.confirm("Do you really want to delete The Bill ?! | confirmation 1")) {
													if(window.confirm("Do you really want to delete The Bill ?! | confirmation 1")){
														await setDoc(doc(db, "bills/"  + currentBill.id.toString()), {deleted: true, deletedBy: employee.name}, {merge:true})
													}
												}

												}}
											>Delete Bill</button> 
								: 
									<button 
									className="w-fit ml-auto mt-5 hover:shadow-xl shadow-slate-600 py-2 px-4 bg-green-800 text-gray-300 mx-auto hover:bg-green-600 transition-all rounded-md"
									onClick={async ()=>{                                                        
										// confirmation if he really want to recover the bill
										if(window.confirm("Do you really want to recover The Bill ?! | confirmation 1")) {
											if(window.confirm("Do you really want to recover The Bill ?! | confirmation 2")){
												await setDoc(doc(db, "bills/"  + currentBill.id.toString()), {deleted: false, deletedBy: null}, {merge:true})
											}
										}

										}}
									>Recover Bill</button> 
							}
						</div>

					</div>
				</div>
		</>
	)
}
export default CurrentBill
