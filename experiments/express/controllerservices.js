const express=require("express");
const app=express();
app.use(express.json());
function isEmpty(data){
    return data && Object.keys(data).length===0 && data.constructor===Object;
}
//create the user service......
function createuserservice(data){
    const age=data.age;
    if(age>=18){ return {username:data.username, status:"Created"};}
    return {};
}
//write a controller
function createuserController(req,res){
    const userdata=req.body;
    const data=createuserservice(req.body);

    if(isEmpty(data)){ return res.send("user not created...");}
    else{ return res.status(201).json(data);}
}
const validateuser=(req,res,next)=>{
    const userdata=req.body; //get the userdata...
    if(Object.hasOwn(userdata,'username')){
        if(typeof userdata.username=='string'){
            if(userdata.username.trim().length>0){
                req.user=userdata; //request context....
                next();
            }
            else{ next(new Error("name field empty"));}
        }
        else{ next(new Error("Invalid data type of name feild"));}
    }
    else{ next(new Error("username feild not present"));}
}
const validateage=(req,res,next)=>{
    const userdata=req.user;
    if(Object.hasOwn(userdata,'age')){
        if(typeof userdata.age=='number'){ next(); }
        else{ next(new Error("invalid age data type")); }
    }
    else{ next(new Error("age feild not present..")); }
}
app.post("/users",validateuser,validateage,createuserController);
app.use((err,req,res,next)=>{
    res.send(err.message);
});
app.listen(3000,(req,res)=>{
    console.log("Server is running on portnumber 3000");
});
//valid user request.....
//curl -i -X POST http://localhost:3000/users -H "Content-Type: application/json" -d "{\"username\":\"vinay\",\"age\":25}"
//user not created......
//curl -i -X POST http://localhost:3000/users -H "Content-Type: application/json" -d "{\"username\":\"vinay\",\"age\":17}"

