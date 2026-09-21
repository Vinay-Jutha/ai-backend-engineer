const express=require("express");
const app=express();
app.use((req,res,next)=>{
    console.log("middleware 1..");
    next();
});
app.use((req,res,next)=>{
    console.log("middleware 2... ");
    next();
})
app.get("/",(req,res)=>{
    res.send("hello");
});
app.listen(3000,(req,res)=>{
    console.log("server is running on portnumber 3000");
});
//test with browser http://localhost:3000/