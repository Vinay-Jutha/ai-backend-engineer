const http=require("http");
const users=[
    { username:"vinay", role:"admin",token:"Bearer 123"},
    { username:"vinod", role:"employee",token:"Bearer 124"},
    { username:"vikas", role:"leader",token:"Bearer 126"},
];
function handler(req,res){
    res.end("middleware passed successfully inside handler....");
}
function authenticationMiddleware(req,res,next){
    const authtoken=req.headers['authorization'];
    const validuser=users.find(users=>users.token==authtoken);

    if(validuser==undefined){
        res.statusCode=401;
        res.end("Invalid data.....");
        return;
    }
    next();
}
function loggingMiddleware(req, res, next){
    console.log("performing logging operation..");
    next();
}
const server=http.createServer((req,res)=>{
    loggingMiddleware(req,res, ()=>{
        authenticationMiddleware(req,res,()=>{
            handler(req,res);
        });
    });
});
server.listen(3000,()=>{
    console.log("Server is running on portnumber 3000");
});