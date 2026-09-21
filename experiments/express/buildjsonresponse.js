// const http=require("http");
// const users=[
//     { name :"vinod",age: 28,salary:55656},
//     { name :"vimal",age: 26,salary:55656},
// ];
// const server=http.createServer((req,res)=>{
//     res.end(JSON.stringify(users));
// });
// server.listen(3000,()=>{
//     console.log("Server is running on port number 3000");
// }); for node js

//in Express....

const express=require("express");
const app=express();
const users=[
    { name :"vinod",age: 28,salary:55656},
    { name :"vimal",age: 26,salary:55656},
];
app.get("/users",(req,res)=>{
    res.status(201).json(users);
});
app.listen(3000,()=>{
    console.log("Server is running on portnumber 3000");
});