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
    
   

},{timestamps:true})
const Food=mongoose.model("food",food);

connect().then(async connection =>{
    const food=await Food.create({name:"pollos kenllas",info:{time:"30min 50 min",price:'20$'},Categorie:["burger"]})
    const found=await Food.find({name:"pollos mollos"})
    const foundbyId=await Food.findById('625de8c18b84700dda10869a')
    const updated=await Food.findByIdAndUpdate('625de8c18b84700dda10869a',{name:"kerasi"})

    console.log(found)
    console.log(foundbyId)
}).catch(e=>{console.error(e)})