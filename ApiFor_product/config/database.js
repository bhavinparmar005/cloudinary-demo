const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/product")

const db = mongoose.connection

db.once("open",(err)=>{
    if(err){

        console.log("something went wrong !!",err)
    }

    console.log("DataBase Conected successFuly !! ")

    
})

module.exports =db