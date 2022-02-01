function Btn({
    title="Button",
    className="", 
    styles={}, children, onclick=()=>{}, titleStyles="", tabIndex="0"}) {
    return ( <button tabIndex={tabIndex} className={" Btn-component min-w-[300px] rounded-lg px-8 py-6 bg-gray-600 hover:bg-gray-700  text-4xl my-4 cursor-pointer flex justify-between items-center " + className} style={{...styles}} onClick={onclick}>
    <span className={"mx-auto"+ titleStyles}>{title}</span> &ensp;{children}</button> );
}

export default Btn;