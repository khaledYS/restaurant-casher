import { IconContext } from "react-icons";
import { IoCloseCircleOutline } from "react-icons/io5";

function BillItem({id, title, removeFromBill, cost}) {
    return ( 
	<IconContext.Provider value={{color:"red", size:"3rem"}}>
		<div 
			id={id} 
			title={title}
			className="min-w-fit break-all flex justify-between items-center rounded-lg px-1 py-1 mx-1 my-2 flex-wrap text-center bg-gray-600 hover:bg-gray-700 text-2xl"
			>
				{title}~{cost}$
                <IoCloseCircleOutline onClick={removeFromBill} className="cursor-pointer ml-auto"/>
		</div>        
	</IconContext.Provider>
     );
}

export default BillItem;
