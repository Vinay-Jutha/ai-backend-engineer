const http=require("http");
const server=http.createServer((req,res)=>{
    console.log("request received",req.url);

    if(req.url=="/users"){
        console.log("Database operations performing...")
        setTimeout(()=>{
            console.log("DB operation completed....");
            res.end("users data retreived....");
        },5000);
    }
    if(req.url=="/health"){
        console.log("health request completed....");
        res.end("health request accomplished......");
    }
});
server.listen(3000,()=>{
    console.log("Server is running on port number 3000");
});