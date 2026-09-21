const express=require("express");
const app=express();
const users=[
    { username:"vinay", role:"admin",token:"Bearer 123"},
    { username:"vinod", role:"employee",token:"Bearer 124"},
    { username:"vikas", role:"leader",token:"Bearer 126"},
];
function handler(req,res){ res.send("Inside handler"); }
function authorizationMiddleware(req,res,next){
    if(req.user.role=="admin"){  next(); }
    else{ res.statusCode=403; res.send("Authorization unsuccessfull"); }
}
function authenticationMiddleware(req,res,next){
    const authtoken=req.headers['authorization'];
    const validuser=users.find(users=>users.token==authtoken);

    if(validuser==undefined){ 
        res.statusCode=401;
        res.send("authentication unsuccessfull"); 
        return;
    }
    req.user=validuser;
    next();
}
app.get('/admin',authenticationMiddleware,authorizationMiddleware,handler);
app.listen(3000,(req,res)=>{
    console.log("Server is running on portnumber 3000");
});

//admin check....
//curl -i http://localhost:3000/admin -H "Authorization: Bearer 123"