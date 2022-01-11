function Loading() {
  return ( 
    <div className="Loding-component w-[100vw] h-[100vh] backdrop-blur-lg fixed z-50 top-0 left-0 grid place-items-center">
      <div className="p-2 bg-gray-800 rounded-2xl border-zinc-100 border-2">
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    </div>
   );
}

export default Loading;
