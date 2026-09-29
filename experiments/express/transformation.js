const express=require("express");
const app=express();
app.get("/users",(req,res)=>{
    const value=Number(req.query.page);
    if(Number.isNaN(value)){ return res.send("Invalid transformation");}
    if(value>=1){ return res.send("VALID NUMBER..");}
    return res.send("INVALID NUMBER.."); 
});
app.listen(3000,(req,res)=>{
    console.log("Server is running on portnumber 3000");
});
//curl -i "http://localhost:3000/users?page=hello" invalid transformation request..
//curl -i "http://localhost:3000/users?page=2" valid transformation request...