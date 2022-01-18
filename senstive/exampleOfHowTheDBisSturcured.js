const h  = {
    "users":{
        "<auto id>":{
            "date":"11223344556666",
            "position":"emoployer",
            "name":"ahmed yasser saeed monasar",
            "uid":"<id>",
            "wholeOrders":[
                {
                    "id":"<id>",
                    "date":"11223344556666",
                    "customerOrder":[
                        {
                            "productId":"<id>",
                            "price":4,
                            "currency":"dollar",
                            "productName":"white mocha coffe"
                        }
                    ]
                },
                {
                    "id":"<id>",
                    "date":"11223344556666",
                    "customerOrder":[
                        {
                            "productId":"<id>",
                            "price":4,
                            "currency":"dollar",
                            "productName":"white mocha coffe"
                        }
                    ]
                }
            ]
        }
    },
    "taxes":"15"
}


// how to spam you self



let i = 0;

async function spam(){
    let billsSettingsDocRef = doc(db, "others/billsSettings");
    let lastBillIdNumber = await getDoc(billsSettingsDocRef);
    lastBillIdNumber = lastBillIdNumber.data().lastBillIdNumber;
    console.log(lastBillIdNumber)
    let newBillIDNumber;

    // we are gonna set the the bills setting LastBillId to be 1 not 0 so we dont need to increase it laterw.
    if(lastBillIdNumber >= 300){
        await setDoc(billsSettingsDocRef, {lastBillIdNumber: 1}, {merge:true});
        newBillIDNumber = 1;
    }else{
        newBillIDNumber = lastBillIdNumber + 1;
        await setDoc(billsSettingsDocRef, {lastBillIdNumber: newBillIDNumber}, {merge:true});
    }


    /**
     * The structure of the object is :
     * {
     *      billIdNumber : < Id number of the bill and it's gonna be under 300>,
     *      bill : < the bill state variable >,
     *      billTotalBalance : < The totoal balance of the bill and its comming from the billTotalBalance state variable >,
     *      submittedBy : < The name of the employ that submitted this bill >,
     *      finishedBy : < if the bill is finished then its gonna be assigned to the name of the user that finished this bill or if it isn't finished then its gonna be null >,
     *      deleltedBy : < if the bill is deleted then its gonna be assigned to the name of the user that deleted this bill or if it isn't deleted then its gonna be null >,
     *      createdAt : < date of the bill >
     * }
     */
    await addDoc(collection(db, "bills"), {
            billIDNumber: newBillIDNumber,
            bill, 
            billTotalBalance, 
            submittedBy: employee.name, 
            finished:false, 
            finishedBy:null, 
            deleted: false, 
            deletedBy: null, 
            createdAt: serverTimestamp(),
        });

        await setTimeout(() => {
            console.log(i)
            if(i >= 30) return ;
            i++; 
            spam()
        }, 400);
}
spam()