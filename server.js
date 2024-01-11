const express = require('express');
const app = express();
const db = require('./config/db')
const dotenv =require('dotenv');
dotenv.config();

app.get("/",(reg,res)=>{
    res.send("Api is running 111");
});

app.listen(process.env.PORT || 4000, (error)=>{
    if(error) throw error;

    console.log(`port is running on ${process.env.PORT}`)
})
