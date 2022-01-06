

function CategoryItem({title, id, addToBill, cost}) {
    console.log(
        title, id, addToBill, cost
    )
    return ( 
        <button 
            id={id}
            cost={cost} 
            onClick={()=>{addToBill(id, title, cost)}}
            className="min-w-none max-w-fit mx-4 rounded-lg px-6 py-4 bg-gray-600 hover:bg-gray-700  text-2xl my-2 cursor-pointer flex justify-between items-center flex justify-center items-center justify-between"
        >
            {title}
            &nbsp;
        </button>
    );
}

export default CategoryItem;