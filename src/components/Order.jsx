import Btn from "./btn";
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

function Order() {
    return ( 
        <div className="order w-full h-full flex">
            <div className="products  h-full w-8/12">
                <div className="catogries border-b-8 border-gray-500 h-1/6 overflow-x-auto">

                </div>
                <div className="products h-5/6 overflow-y-auto"></div>
            </div>
            <div className="bill     border-l-8 border-gray-500 h-full w-4/12">
                <div className="bill-orders h-5/6">
                    <div className="tag-name cursor-default h-1/6 flex flex-col justify-center items-center text-4xl font-mono">
                        <h1 >Bill</h1>
                    </div>
                        <div className="hr border-4 border-gray-500 w-full border-x-0"></div>
                    <div className="orders h-5/6">

                    </div>
                </div>
                <div className="bill-orders-send h-1/6 border-t-8 border-gray-500 flex justify-center items-center">
                    <Btn title="Done" styles={{"minWidth":"40px"}}> <IoMdCheckmarkCircleOutline /> </Btn>
                </div>
            </div>
        </div>
     );
}

export default Order;