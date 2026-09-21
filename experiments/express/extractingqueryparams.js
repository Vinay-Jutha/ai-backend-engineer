// const http=require("http");
// const server=http.createServer((req,res)=>{
//     const url=new URL(req.url,`http://${req.headers.host}`);
//     console.log("PATH:" ,url.pathname);
//     console.log("PAGE", url.searchParams.get("page")); //string values...
//     console.log("LIMIT",url.searchParams.get("limit")); //string values.....
// });
// server.listen(3000,()=>{
//     console.log("Server is running on portnumber 3000");
// });

//extracting queryparameters by converting url into url object....
//curl "http://localhost:3000/users?page=2&limit=10"
//to convert string value to number put it inside number object...
//like this Number(url.searchParams.get("page"));

//in express we do like this code below...

const express=require("express");
const app=express();
app.get("/users/:id",(req,res)=>{
    console.log(req.query);
    console.log(req.query.page);
    console.log(req.query.limit);
});
app.listen(3000,()=>{
    console.log("Server is running on portnumber 3000");
});