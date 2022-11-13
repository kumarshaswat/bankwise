// STEP 1: import express
const { urlencoded } = require("body-parser");
const express = require("express");
const app = express();
const PORT = 3000;

const Ddata = require('./Documentation.json');
const Adata = require('./Accounts.json');
//console.log(Ddata);

// STEP 2: parse the JSON data using express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.get("/DDetails", (req, res) => {
    res.json(Ddata);
});

app.get("/DDetails/:CustomerID", (req, res) => {
    const id = req.params.CustomerID;
    for(let info of Ddata){
        if(info.CustomerID === id){
            res.send(info);
            return;
        }
    }
    res.status(404).send("Details not found");
});

app.get("/DDetails/:CustomerID/:AccountID", (req, res) => {
    const id = req.params.CustomerID;
    const id2 = req.params.AccountID;
    for(let info of Ddata){
        if(info.CustomerID === id){
            for(let info2 of info.Accounts){
                if(info2.AccountID === id2){
                    res.send(info2);
                    return;
                }
            }
        }
    }
    res.status(404).send("Details not found");
});

app.post("/DDetails/:CustomerID", (req, res) => {
    const id = req.params.CustomerID;
    const newinfo = req.body;
    for(let info of Ddata){
        if(info.CustomerID === id){
            info.Accounts.push(newinfo);
            info.TotalBalance = info.TotalBalance + newinfo.Balance;
            res.send(info);
            return;
        }
    }
    res.status(404).send("Details not found");    
});

app.post("/DDetails", (req, res) => {
    const newInfo = req.body;
    Ddata.push(newInfo);
    res.json(Ddata);
});

app.put("/DDetails/:CustomerID", (req, res) => {
    found = false;
    const id = req.params.CustomerID;
    var info;
    for (let d of Ddata){
        if (d.CustomerID === id){
            info = d;
            found = true;
        }
    }
    if(found){
        const updatedetails = req.body;
        info.CustomerID = updatedetails.CustomerID ? updatedetails.CustomerID : info.CustomerID;
        info.CustomerName = updatedetails.CustomerName ? updatedetails.CustomerName : info.CustomerName;
        info.Birthday = updatedetails.Birthday ? updatedetails.Birthday : info.Birthday;
        info.PhoneNumer = updatedetails.PhoneNumer ? updatedetails.PhoneNumer : info.PhoneNumer;
        info.Email = updatedetails.Email ? updatedetails.Email : info.Email;
        info.NumberofAccounts = updatedetails.NumberofAccounts ? updatedetails.NumberofAccounts : info.NumberofAccounts;
        info.TotalBalance = updatedetails.TotalBalance ? updatedetails.TotalBalance : info.TotalBalance;
        info.Address = updatedetails.Address ? updatedetails.Address : info.Address;
        info.City = updatedetails.City ? updatedetails.City : info.City;
        info.Country = updatedetails.Country ? updatedetails.Country : info.Country;
        info.State = updatedetails.State ? updatedetails.State : info.State;
        info.Zipcode = updatedetails.Zipcode ? updatedetails.Zipcode : info.Zipcode;
        info.Status = updatedetails.Status ? updatedetails.Status : info.Status;
        res.json({ msg: "Movie has been updated!", info });
    }
});

app.get("/ADetails", (req, res) =>{
    res.json(Adata);
});

//app.get()
// set the server to listen at port
app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));