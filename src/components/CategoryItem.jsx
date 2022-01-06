

function CategoryItem({title, category, id, addToBill, cost}) {
    return ( 
        <button 
            id={id}
            cost={cost} 
            category-name={category}
            title={title}
            onClick={()=>{addToBill(id, title, category, cost)}}
            className="min-w-none max-w-fit mx-4 rounded-lg px-6 py-4 bg-gray-600 hover:bg-gray-700  text-2xl my-2 cursor-pointer flex items-center justify-between"
        >
            {title}
            &nbsp;
        </button>
    );
}

export default CategoryItem;