import mongoose from "mongoose";
const userdata=mongoose.Schema({
    name:String,
    farmers:{
        type:Boolean,
        default:false
    },
    email:String

})
export default mongoose.model("users",userdata);