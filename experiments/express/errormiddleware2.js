//express version....
const express=require("express");
const app=express();
const users=[
    { username:"vinay", role:"admin",token:"Bearer 123"},
    { username:"vinod", role:"employee",token:"Bearer 124"},
    { username:"vikas", role:"leader",token:"Bearer 126"},
];
const authenticationmiddleware=(req,res,next)=>{
    console.log("Inside middleware 1");
    const authtoken=req.headers['authorization'];
    const validuser=users.find(users=>users.token==authtoken);

    if(validuser==undefined){
        next(new Error("Authentication error..."));
        return;
    }
    req.user=validuser;
    next();
};
const authorizationmiddleware=(req,res,next)=>{
    console.log("Inside middleware2...");
    if(req.user.role=="admin"){ next(); }
    else{ next(new Error("Authorization error")); return; }
}
app.get('/users',authenticationmiddleware,authorizationmiddleware,(req,res)=>{
    res.send("All middlewares passed.....");
});
app.use((err,req,res,next)=>{
    res.statusCode=500;
    res.send("error message"+err.message);
});
app.listen(3000,()=>{
    console.log("Server is running on portnumber 3000");
});
//curl -i -H "Authorization: Bearer 123" http://localhost:3000/users
//curl -i -H "Authorization: Bearer 124" http://localhost:3000/users
