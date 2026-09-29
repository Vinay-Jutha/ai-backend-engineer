const express=require("express");
const app=express();
app.use(express.json());
const users = [
    { id: 1, username: "vinay", age: 25 },
    { id: 2, username: "alice", age: 30 },
    { id: 3, username: "vikas", age: 22 },
    { id: 4, username: "john", age: 35 },
    { id: 5, username: "vinod", age: 28 }
];
app.get("/users",(req,res)=>{
    console.log(req.query);
    res.send(users);
});
app.listen(3000,(req,res)=>{
    console.log("Server is running on portnumber 3000");
});
//curl -i "http://localhost:3000/users?page=2&limit=2"