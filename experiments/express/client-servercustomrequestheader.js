const http=require("http");
const server=http.createServer((req,res)=>{
    console.log("Request type ",req.headers["x-app-version"]);
    res.end("request received");
});
server.listen(3000,()=>{
    console.log("Server is running on portnumber 3000");
});