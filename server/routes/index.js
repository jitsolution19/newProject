const express = require('express');
const router =express.Router();
const electricianRoute=require('./electrician');
const feedRoute=require('./feedback');
module.exports =()=>{
    router.get('/',(req,res,next)=>{
        return res.render('index');
    });

    router.use('/electricians',electricianRoute());
    router.use('/feedback',feedRoute());
    return router;
};