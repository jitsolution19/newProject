const express = require('express');
const Createrrror=require('http-errors');
const path =require('path');
const app=express();
app.engine('pug', require('pug').__express)
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

const routes =require('./routes');
app.use(express.static('public'));
app.get('./favicon.ico',(req,res,next)=>{
return res.sendStatus(204);
});

app.use('/',routes());
app.use((req,res,next)=>{
    return next(Createrrror(404,'File not found'))
});

app.use((err,req,res,next)=>{
    res.locals.message=err.message;
    const status=err.status||500;
    res.locals.status=status;
    res.locals.error =req.app.get('env')==='development' ? err:{};
    res.status(status);
    return res.render('error');
});
app.listen(3000);

module.exports=app;