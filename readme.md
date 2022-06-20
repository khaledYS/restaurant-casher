# Tasks

- [x] when the user navigate to specifec url, don't navigate him to the beggining if he already signed in.
- [x] reset bill button
- [x] all balance for the bill
- [x] write a comments for understadable objects in maps, etc.
- [x] remove all of the console.log
- [x] let the bill item has to divs and sturcure the style for better look
- [x] make the the icon green , icon path in the "./order.jsx".
- [x] when submiting the bill you should also include the name of the submitter
- [x] add the summ of the bill.

- [x] a lot of things in ./readme.md file.
- [x] I made for each component A ClassName with the name of the component file so we can debbug easily if there is an issue.
- [x] bills pages like all and pending bills and add them to the route and setUp them.
- [x] Responsivity in order component: "./src/components/Order.jsx ".
- [x] add the bill id number so they kinda identify the the order number and if the bills reached to 300 then set them to 0 again.
- [x] change the files to be nested in the components folder 
- [x] get the quantity of the items in the current bill
- [x] Logout button
- [x] include the tax macanizme
- [x] add the macenazim of the deleted bills
- [x] write comments asap for the ./src/components/bills.jsx
- [x] when subbmiting the bill avoid allowing the employee to submit the another bill while we are sending the bill by disabling the Done button.
- [x] if there isn't any bill then print There is not any bill
- [X] if there isn't any current bill then show "select any bill to show here"
- [x] add the macanezim of edit bill 
- [x] when the bill recieved on the same time is created or so near, it will return a date of NaN , that will be caused by the fast internet so we need to to make it be 0s 0m, so we fix it by knowing if they are A nan number so if it is then return "now" instead of the date if not then put the date.
- [x] make a better edit button in the bills component.
- [x] make the number of edits in the bills component.
- [x] make the bill when its deleted then show you can't delete a bill until you recover it.
- [x] add the edit bill
- [x] make the user when going to "/welcome/order/<the Id of the bill>", make him have the ability of editing.
- [x] add finished bills
- [x] when the user goes to /welcome/bill/:billId show him the bill he came for
- [x] creating the app routes structure in ./readme.md file.
- [x] Responsivity 
- [z] change the links inside the routes panel to be only links without btns inside it.

> In progress.
 
> Global tasks
- [ ] active setLoading for requests.
- [ ] change the the navigate("/welcome/*") in every directory.
- [ ] change dashboard btn for admins to be in the branches coponents.
- [ ] make when an admin wants to order, let show him a panel of branches he wants to order with.
- [ ] make the currency all the branches has their own currency;
- [ ] make when a non-admin goes to the dashboard, show him with a div that says you don't have the premision to get into the dashboard, and show him a button or a link that says go to the home page.
- [ ] make a wrapper around the routes panel .
- [ ] when you finish ordering show him a panel if he want to see the bill in the bills component
- [ ] when sending something to the db you should make a comment of what the structure of the object or the thing you are going to send
- [ ] Handle Errors
- [ ] get the static data from cache if possible
- [ ] change the the confirmations alerts and popups from the browser built-in popups to custome popups
- [ ] HardcoreOne: changing the ID's from charcters and numbers to numbers only
- [ ] tax and impelement it in the bill itslef in the db

# App Structure
```
Restaurant-Casher
├── dist 
|   ├── assets
│   │   ├── index.0a65ef83.js
│   │   ├── index.d77ff996.css
│   │   └── vendor.beb58e85.js
│   └── index.html
├── index.html
├── package-lock.json
├── package.json
├── readme.md
├── senstive
│   ├── appStructurePainted.png
│   ├── billuidesign.jpg
│   └── exampleOfHowTheDBisSturcured.js
├── src
│   ├── App.jsx
│   ├── components
│   │   ├── bills
│   │   │   ├── Bill.jsx
│   │   │   └── CurrentBill.jsx
│   │   ├── Bills.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   ├── order
│   │   │   ├── BillItem.jsx
│   │   │   ├── CategoriesBtn.jsx
│   │   │   └── CategoryItem.jsx
│   │   ├── Order.jsx
│   │   ├── others
│   │   │   ├── btn.jsx
│   │   │   ├── contexts.js
│   │   │   ├── Loading.jsx
│   │   │   ├── PageNotFound.jsx
│   │   │   ├── PrettyDate.jsx
│   │   │   └── Problem.jsx
│   │   └── Welcome.jsx
│   ├── firebase-config.js
│   ├── functions.js
│   ├── main.jsx
│   ├── scripts
│   │   └── shorcutFunctions.js
│   ├── styles
│   │   └── App.css
│   └── tailwind
│       └── output.css
├── tailwind.config.js
└── vite.config.js
```


# Routes Structure
```
Restaurant-casher
├── /Login
└── /Welcome
    ├── /Order
    |   └── /:billID
    |
    ├── /Bills
    |   └── /:billID
    |
    └── /Dashboard
```


# Contribution
Right now I don't accept any contribution, and thanks for all who thinks for that.

# Report bug and fixes
If you saw a bug or a problem you can report about it and we will try fix it as soon as we can.

# Thanks
Thanks for all of the support and my greetings me Ammar co founder of this app. 