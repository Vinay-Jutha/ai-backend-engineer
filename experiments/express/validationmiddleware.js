const express=require("express");
const app=express();
app.use(express.json());
//middleware 1 for validating user
const validuser=(req,res,next)=>{
    const userdetails=req.body;
    if(Object.hasOwn(userdetails,'username')){
        if(typeof userdetails.username=="string"){
            if(userdetails.username.trim().length>0){ 
                req.user=userdetails; 
                next();
            }
            else{ next(new Error("Name is empty")); }
        }
        else{ next(new Error("Invalid NAME DATA TYPE..."));}
    }
    else{ next(new Error("No username feild present..."));}
}
const validage=(req,res,next)=>{
    const userdetails=req.user;
    if(Object.hasOwn(userdetails,'age')){
        if(typeof userdetails.age=='number'){
            if(userdetails.age>=18){ next(); }
            else{ next(new Error("Invalid age"));}
        }
        else{ next(new Error("Invalid AGE data type..."));}
    }
    else{ next(new Error("No age feild present...."));}
}
app.post("/users",validuser,validage,(req,res)=>{
    res.send("user succesfully created man...")
});
app.use((err,req,res,next)=>{
    res.send(err.message); 
});
app.listen(3000,(req,res)=>{
    console.log("Server is running on portnumber 3000");
});
//curl -i -X POST http://localhost:3000/users -H "Content-Type: application/json" -d "{\"username\":\"vinay\",\"age\":25}"
//curl -i -X POST http://localhost:3000/users -H "Content-Type: application/json" -d "{\"username\":123,\"age\":25}"
