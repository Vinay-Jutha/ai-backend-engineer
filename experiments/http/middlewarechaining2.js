const http=require("http");
const users=[
    { username:"vinay", role:"admin",token:"Bearer 123"},
    { username:"vinod", role:"employee",token:"Bearer 124"},
    { username:"vikas", role:"leader",token:"Bearer 126"},
];
function loggingMiddleware(req,res,next){
    console.log("user logged successfully");
    next();
}
function authorizationMiddleware(req,res,next){
    const authtoken=req.headers['authorization'];
    const user=users.find(users=>users.token==authtoken);
    if(user.role=="admin"){
        console.log("user is admin so allowed...") 
        next();
    }
    else{ console.log("invalid role for the user...."); }
}
function authenticationMiddleware(req,res,next){
    const authtoken=req.headers['authorization'];
    const validuser=users.find(users=>users.token==authtoken);

    if(validuser==undefined){
        console.log("Authentication not succeded..");
        return;
    }
    console.log("Authentication succeded...");
    next();
}
function handler(req,res){
    console.log("inside handler...");
    res.end("all middlewares successfully passed inside handler...");
}
const server=http.createServer((req,res)=>{
    loggingMiddleware(req,res,()=>{
        authenticationMiddleware(req,res,()=>{
            authorizationMiddleware(req,res,()=>{
                handler(req,res);
            });
        });
    });
});
server.listen(3000,()=>{
    console.log("Server is running in portnumber 3000");
});