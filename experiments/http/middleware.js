const http=require("http");
const users=[
    { username: "Vinay", role: "Admin", token: "Bearer 124" },
    { username: "uday", role: "employee", token: "Bearer 456" }
];
function authentication(req, res, next){
   const authtoken=req.headers["authorization"];
   const validuser=users.find(users=>users.token==authtoken);

    if(validuser==undefined){
       res.statusCode=401;
       res.setHeader("Content-Type","text/html");
       res.end("unauthorized");
       return;
    }
    next();
}
const server=http.createServer((req,res)=>{
    function next(){ res.end("Authentication handled successfully...."); }
    authentication(req,res,next);
});
server.listen(3000,()=>{
    console.log("Server is running on portnumber 3000");
});

//C:\Users\udayj>curl http://localhost:3000 -H "Authorization: Bearer 124"