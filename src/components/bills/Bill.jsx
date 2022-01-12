function Bill({bill}) {

    /**
     * this is code is imported from here https://stackoverflow.com/questions/19700283/how-to-convert-time-in-milliseconds-to-hours-min-sec-format-in-javascript#answer-19700358
     * I dont know what this code does, all What I know that it divide seconds to hours days and bla bla.
     * I'm gonna regret a lot.
     * @param {*} duration duration in seconds.
     * @returns 
     */
     function msToTime(duration) {
        var milliseconds = Math.floor((duration % 1000) / 100),
          seconds = Math.floor((duration / 1000) % 60),
          minutes = Math.floor((duration / (1000 * 60)) % 60),
          hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
          days = Math.floor((duration / (1000 * 60 * 60 * 24)) % 24);
      
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
      
        return days + ":" + hours + ":" + minutes + ":" + seconds;
      }

    const date = msToTime(new Date() - bill.createdAt.toDate());



    return (
        <div className="text-black w-full cursor-pointer hover:bg-white my-2 px-2 py-7">
            <div className="date">{date}</div>
            <div className="text-center">
              <div>Bill : {bill.billIDNumber}</div>
              <div>Total amount : {bill.billTotalBalance}</div>
              <div>submitted by employ : {bill.submittedBy}</div>
            </div>
        </div>
    );
}
export default Bill;