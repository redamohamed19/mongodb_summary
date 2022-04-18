const mongoose=require("mongoose")
const { stringify } = require("querystring")
const { boolean } = require("webidl-conversions")
const connect=()=>{
    return mongoose.connect("mongodb://localhost:27017/delivery")
}
const food=new mongoose.Schema({
 
    name:{
        type:String,
        required:true,
        unique:true
    },
    info:{
        time:String,
        price:String
    },
    Categorie:[{type:String}]
   

})
const Food=mongoose.model("food",food);

connect().then(async connection =>{
    const food=await Food.create({name:"duchi bochi",time:"20min 40 min",price:'25$'})
    console.log(food)
}).catch(e=>{console.error(e)})