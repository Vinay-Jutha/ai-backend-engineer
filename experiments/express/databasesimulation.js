const express=require("express");
const app=express();
app.use(express.json());
const users=[]; //dummy database
function createuserService(data){
    const record={username:data.username, age:data.age};
    users.push(record);
    return record;
}
function createuserController(req,res){
    const userdata=req.body;
    const result=createuserService(userdata);
    console.log(users);
    return res.status(201).json(result);
}
app.post("/users",createuserController);
app.listen(3000,(req,res)=>{
    console.log("Server is running on portnumber 3000");
});
//curl -i -X POST http://localhost:3000/users -H "Content-Type: application/json" -d "{\"username\":\"vinay\",\"age\":25}"