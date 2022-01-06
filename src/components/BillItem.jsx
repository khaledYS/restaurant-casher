import { IconContext } from "react-icons";
import { IoCloseCircleOutline } from "react-icons/io5";

/**
 * 
 * @param {category} category the name of the category 
 * @returns 
 */
function BillItem({id, billItemId, title, category, removeFromBill, cost}) {
    return ( 
	<IconContext.Provider value={{color:"red", size:"3rem"}}>
		<div 
			id={id} 
			title={title}
			category-name={category}
			cost={cost}
			bill-item-id={billItemId}
			className="min-w-fit break-all flex justify-between items-center rounded-lg px-1 py-1 mx-1 my-2 flex-wrap text-center bg-gray-600 hover:bg-gray-700 text-2xl"
			>
				<span>{title}</span>
				<div className="flex ml-auto items-center">
					<span>{cost}$</span>
					<IoCloseCircleOutline onClick={()=>{removeFromBill(billItemId)}} className="cursor-pointer"/>
				</div>
		</div>        
	</IconContext.Provider>
     );
}

export default BillItem;
