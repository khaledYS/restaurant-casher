function Bill({bill, setCurrentBill, currentBill}) {

    /**
     * this is code is imported from here https://stackoverflow.com/questions/19700283/how-to-convert-time-in-milliseconds-to-hours-min-sec-format-in-javascript#answer-19700358
     * I dont know what this code does, all What I know that it divide seconds to hours days and bla bla.
     * I'm gonna regret a lot.
     * also I changed a little bit in this code.
     * @param {*} duration duration in seconds.
     * @returns 
     */
     function msToTime(duration) {
        var milliseconds = Math.floor((duration % 1000) / 100),
          seconds = Math.floor((duration / 1000) % 60),
          minutes = Math.floor((duration / (1000 * 60)) % 60),
          hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
          days = Math.floor((duration / (1000 * 60 * 60 * 24)) % 24);
      
        days = Number((days < 10) ? "0" + days : days)
        hours = Number((hours < 10) ? "0" + hours : hours)
        minutes = Number((minutes < 10) ? "0" + minutes : minutes)
        seconds = Number((seconds < 10) ? "0" + seconds : seconds)

        let time = days + "days - " + hours + "hours - " + minutes + "minutes - " + seconds + "." + milliseconds + "seconds";

        if(days >= 1){
          return {
            time, 
            span: `${days}D - ${hours}H ago` 
          }
        }else if(hours >= 1){
          return {
            time, 
            span: `${hours}H - ${minutes}M ago` 
          }
        }else{
          return {
            time, 
            span: `${minutes}M - ${seconds}S ago` 
          }
        }
      
      }

    const date = msToTime(new Date() - bill.createdAt.toDate());



    return (
        <div className={`${currentBill && (bill.id == currentBill.id) && "activeCurrentBill"} bill text-black text-left w-full cursor-pointer hover:bg-white my-4 px-8 font-medium py-7 `} onClick={()=>{setCurrentBill(bill)}}>
            <div className="date w-full text-right text-gray-400" title={date.time}>{date.span}</div>
            <div className=" upper font-bold text-left flex justify-around my-4">
              <div>Bill : {bill.billIDNumber}</div>
              <div className={`${bill.finished ? "finished" : "notfinished"}`}>{`${bill.finished ? "Finished" : "Not Finished"}`}</div>
            </div>
            <div className="text-left">
              <div>Total amount : {bill.billTotalBalance}</div>
              <div>submitted by employ : {bill.submittedBy}</div>
            </div>
        </div>
    );
}
export default Bill;