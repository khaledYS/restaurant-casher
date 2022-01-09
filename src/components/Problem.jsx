function Problem({problem, setProblem}) {
    console.log(problem)
    return ( 
        <div className="Problem-component h-[100vh] w-[100vw] fixed backdrop-blur top-0 left-0">
            <div className="bg-[#646464] mx-auto pt-2 pl-2 pb-4 pr-2 rounded-lg mt-4 w-fit ">
                <button className="mb-4 block text-left text-5xl top-2 left-2 text-[#d9d9d9]" onClick={()=>setProblem(null)}>X</button>
                {(problem == "net") ?  
                    <div className="text-2xl"> There is an internet connection issue, <br /> Please check the internet connection, <br /> and try again.</div>
                : problem}
            </div>
        </div>
     );
}

export default Problem;