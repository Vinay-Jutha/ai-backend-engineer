const http=require("http");
const server=http.createServer((req,res)=>{
    const authtoken="Bearer Secret123";

    const reqtoken=req.headers['authorization'];

    if(reqtoken===authtoken){
        res.statusCode=200;
        res.end("you are authorized...")
    }
    else{
        res.statusCode=401;
        res.end("you are not authorized....");
    }
});
server.listen(3000,()=>{
    console.log("Server is listening on port number 3000");
});
// curl http://localhost:3000 -H "Authorization: Bearer abc123"