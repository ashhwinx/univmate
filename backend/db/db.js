const mongoose = require("mongoose");

async function  connectToDb(){
    await mongoose.connect(process.env.DB_CONNECT).then(()=>{
        console.log("connect to DB")
    }).catch(err=>console.log(err));

    
}




module.exports = connectToDb;