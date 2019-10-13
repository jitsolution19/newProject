const express = require('express');
const router =express.Router();

module.exports =()=>{
    router.get('/',(req,res,next)=>{
        return res.send('All Electricians');
    });

    router.get('/:name',(req,res,next)=>{
        return res.send(`About Electricians detail is ${req.params.name}`);
    });


    return router;
};