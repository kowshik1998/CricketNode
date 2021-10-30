
const express=require('express');

const app=express();

app.get("/",(request,response)=>{
    response.send("Hello world 2.0");
});

app.listen(4200);
