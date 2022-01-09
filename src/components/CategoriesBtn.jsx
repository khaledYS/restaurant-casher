function CategoriesBtn({
    title="Button",
    className="CategoriesBtn-component min-w-max  flex justify-center items-center rounded-lg px-2 py-6 mx-1 text-center bg-gray-600 hover:bg-gray-700 text-3xl cursor-pointer",
    styles={},
    onClick=()=>{},
    children}) {
    return ( <button className={className} style={{...styles}} onClick={onClick} >{title}&ensp;{children}</button> );
}

export default CategoriesBtn;