const express = require('express');
const mongoose=require('mongoose');
const server = express();
const port = 5000;
require('dotenv').config();
const mongoURI=process.env.mongouri;
mongoose.connect(mongoURI)
.then(() => {
    console.log('Connected to MongoDB Atlas');
})
.catch((error) => console.error('MongoDB connection error:', error));

const items=[
     { id:1,name:'jeans'},
     {id:2,name:'tops'}
];

const productschema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  });
  
  const Item = mongoose.model('Item', productschema);
server.use(express.json());

server.get('/', (req, res) => {
    res.end("Server is running");
});

server.get('/product',(req,res)=>{
    res.json(items);
})
server.post('/product',(req,res)=>
{
     newitem={id:items.length+1,name:req.body.name};
     items.push(newitem);
     res.status(201).json(newitem);

});
server.put('/product/:id',(req,res)=>
{
   const itemid=parseInt(req.params.id);
   const updateditems=items.findIndex((item) => item.id===itemid);
   if(updateditems !==  -1)
   {
      items[updateditems].name=req.body.name;
      res.json(items[updateditems]);

   }
   else{
     res.status(404).json("items not found in data base")
   }
}
);
server.delete('/product/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const itemIndex = items.findIndex((item) => item.id === itemId);
    
    if (itemIndex !== -1) {
        const deletedItem = items.splice(itemIndex, 1);
        res.json({ message: 'Item deleted successfully', deletedItem });
    } else {
        res.status(404).send('Item not found in database');
    }
});
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});