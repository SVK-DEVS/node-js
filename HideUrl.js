const express=require('express');
const path=require('path');
const app=express();

const publicpath=path.join(__dirname,'public');
app.get('',(req,res)=>{
    res.sendFile(`${publicpath}/Home.html`)
})
console.log(__dirname);
app.listen(3000);