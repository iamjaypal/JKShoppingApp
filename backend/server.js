const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
app.use(cors());
mongoose.connect('mongodb://localhost:27017/ShoppingApp',{
    useNewUrlParser: true,
  useUnifiedTopology: true
});



app.use(express.json());
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
const ProductSchema=new mongoose.Schema({
    id : Number,
    name : String ,
    category : String,
    image : String,
    new_price : Number,
    old_price : Number
})


const Products=mongoose.model('products',ProductSchema,'products');
const Popular=mongoose.model('popular',ProductSchema,'popular');

app.get('/api/products',async (req,res)=>{
    const response=await Products.find();
    res.json(response);
})

app.get('/api/popular',async(req,res)=>{
  const response=await Popular.find();
  res.json(response);
})



app.listen(3000,()=>{
    console.log("app is listing on port",3000);
})