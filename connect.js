const mongoose=require("mongoose")
const { stringify } = require("querystring")
const { boolean } = require("webidl-conversions")
const connect=()=>{
    return mongoose.connect("mongodb://localhost:27017/delivery")
}
const food=new mongoose.Schema({
    fetured:boolean,
    name:String,
    time:String,
    price:String

})
const Food=mongoose.model("food",food);