function Bill({bill}) {

    /**
     * this is code is imported from here https://stackoverflow.com/questions/19700283/how-to-convert-time-in-milliseconds-to-hours-min-sec-format-in-javascript#answer-19700358
     * I dont know what this code does, all What I know that it divid seconds to hours days and bla bla.
     * I'm gonna regret a lot.
     * @param {*} d 
     * @returns 
     */
     function msToTime(duration) {
        var milliseconds = Math.floor((duration % 1000) / 100),
          seconds = Math.floor((duration / 1000) % 60),
          minutes = Math.floor((duration / (1000 * 60)) % 60),
          hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
      
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
      
        return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
      }

    const date = msToTime(new Date() - bill.createdAt.toDate());



    return (
        <div className="text-black">
            <div className="date">{date}</div>
            <span>Bill Number : {bill.billIdNumber}</span>
            <span>Total amount : {bill.billTotalBalance}</span>
        </div>
    );
}
export default Bill;