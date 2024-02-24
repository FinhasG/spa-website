const express=require('express');
const app=express();
const userRoute=require('./routes/user')
const cookieParser=require('cookie-parser')

app.use(express.json());
app.use(cookieParser())

app.use('/api/user',userRoute)

port=4000;

const server = async() => {
    app.listen(port,(req,res)=>{
        console.log("successfully connected")
    })
}

server()