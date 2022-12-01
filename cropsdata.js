import mongoose from "mongoose";
const cropdata=mongoose.Schema({
   
    email:String,
    name:{type:String,required:true},
    price:{type:String,required:true},
    number:{type:String,required:true},
    pic:{
        type:String,
        
    }

})
export default mongoose.model("crop",cropdata)