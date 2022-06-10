function CategoriesBtn({
    title="Button",
    className="CategoriesBtn-component min-w-max  flex justify-center items-center rounded-lg px-2 py-4 mx-1 text-center bg-slate-600 hover:bg-slate-400 text-3xl sm:text-2xl cursor-pointer",
    styles={},
    onClick=()=>{},
    children}) {
    return ( <button className={className} style={{...styles}} onClick={onClick} >{title}&ensp;{children}</button> );
}

export default CategoriesBtn;