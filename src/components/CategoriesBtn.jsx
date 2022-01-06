function CategoriesBtn({
    title="Button",
    className="",
    styles={},
    onClick={},
    children}) {
    return ( <button className={className} style={{...styles}} onClick={onClick} >{title}&ensp;{children}</button> );
}

export default CategoriesBtn;