const mongoose=require("mongoose")

const configDb=async()=>{
    try{
        const db=await mongoose.connect("mongodb://127.0.0.1:27017/mental-health-app-2")
        console.log("db connected successfully")
    }catch(e){
        console.log("failed to connected to db")
    }   
}

module.exports=configDb