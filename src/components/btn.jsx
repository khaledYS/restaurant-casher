function Btn({
    title="Button",
    className="min-w-[300px] rounded-lg px-8 py-6 bg-gray-600 hover:bg-gray-700  text-4xl my-4 cursor-pointer flex justify-between items-center", 
    style={}, children}) {
    return ( <button className={className} style={{...style}} >{title}&ensp;{children}</button> );
}

export default Btn;