const Profile=require("../Models/profileModel")
const usersCltr={}
const pick=require("lodash/pick")
const bcrypt=require("bcrypt")

usersCltr.register=async(req,res)=>{
    const body=pick(req.body,["firstName","lastName","email","phone","password","role"])
    const user=new Profile(body)
    console.log(user)
    try{
        const salt=await bcrypt.genSalt()
        const hashedPassword=await bcrypt.hash(user.password,salt)
        user.password=hashedPassword
        const saveddoc=await user.save()
        res.json(saveddoc)
    }catch(e){
        res.json(e)
    }
}

usersCltr.users=async(req,res)=>{
    try{
       const users=await Profile.find()
       res.json(users)
    }catch(e){
        res.json(e)
    }
}


module.exports=usersCltr