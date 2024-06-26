const express=require('express');
const { send } = require('process');
const app=expess();


app.get('/',(req,res)=>{
    res.send('Welcome');
})