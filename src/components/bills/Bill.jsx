import { useEffect } from "react"

function Bill({bill, setCurrentBill, currentBill, bills}) {

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
            span: `${days}D - ${hours}H ago`,
            isTrue: !seconds ? false : true 
          }
        }else if(hours >= 1){
          return {
            time, 
            span: `${hours}H - ${minutes}M ago`,
            isTrue: !seconds ? false : true 
          }
        }else{
          return {
            time, 
            span: `${minutes}M - ${seconds}S ago`,
            isTrue: !seconds ? false : true 
          }
        }

      
      }

    const date = msToTime(new Date() - bill.createdAt.toDate());


    return (
      // if the bill is deleted then make a storke line goes along the text
        <div className={`${currentBill && (bill.id == currentBill.id) && "activeCurrentBill"} ${bill?.deleted == true ? "deleted" : "notDeleted"} bill text-black text-left w-full cursor-pointer border-y-2 border-t-gray-300 hover:bg-white my-4 px-8 font-medium py-7 `} onClick={()=>{setCurrentBill(bill)}}>
          {/* when the bill recieved on the same time is created or so near, it will return a date of NaN , that will be caused by the fast internet so we need to to make it be 0s 0m, so we fix it by knowing if they are A nan number so if it is then return "now" instead of the date if not then put the date. */}
            <div className="date w-full text-right text-gray-400" title={date.time}>{date.isTrue ? date.span : "NOW"}</div>
            <div className=" upper font-bold text-left flex justify-between my-4">
              <div className="name">Bill: {bill.billIDNumber}</div>
              <div className={`finished-tag ${bill.finished ? "finished" : "notfinished"}`}>{`${bill.finished ? "Finished" : "Not Finished"}`}</div>
            </div>
            <div className="text-left">
              <div>Total amount: {bill.billTotalBalance}</div>
              <div>By: {bill.submittedBy}</div>
              {bill.finished && bill.finishedBy ? <div>Finished By: {bill.finishedBy} </div> : ""}
            </div>
        </div>
    );
}
export default Bill;