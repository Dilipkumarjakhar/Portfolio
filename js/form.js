const express=require('express');
const mongoose=require('mongoose');
// const { connect } = require('http2');

const app=express();
const FormData=require('../../')
app.use(express.json());
const Port=process.env.PORT || 5000;


app.post('/form',(req,res)=>{
   try{
       const formData=FormData.create(req.body);
       return res.status(201).send(formData)

   }catch(err){
       return res.status(500).send(err)
   }
})



app.listen(Port,async(req,res)=>{
    await Connect();
    console.log('port is connected.....',Port)
})


function Connect(req,res){
return mongoose.connect("",{
})
}

