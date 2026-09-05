const http=require("http");
const server=http.createServer((req,res)=>{
    console.log("Request recieved....");
    console.log("Method",req.method);
    console.log("URL" ,req.url);
    console.log("headers",req.headers);

    res.end("Hello from backend.....");
});
server.listen(3000,()=>{
    console.log("Server is running on portnumber 3000");
});