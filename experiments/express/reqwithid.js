const http=require("http");
const server=http.createServer((req,res)=>{
    console.log(req.url);
    res.end("Request rececived....");
});
server.listen(3000 ,()=>{
    console.log("server is running on portnumber 3000");
});
// curl "http://localhost:3000/users/123"

const express=require("express");
const app=express();
app.get("/users/:id",(req,res)=>{
    console.log(req.params);
    console.log(req.params.id);
});
app.listen(3000,()=>{
    console.log("Server is running on portnumber 3000");
});