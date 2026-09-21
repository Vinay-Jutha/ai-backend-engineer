const http=require("http");
const server=http.createServer((req,res)=>{
    res.statusCode=201;
    res.setHeader("Content-Type","application/json");
    res.setHeader("X-App-Version","1.0"); //application version.......
    res.setHeader("X-RequestType","demo");

    res.end(JSON.stringify({ message:"Hello" }));
});
server.listen(3000,()=>{
    console.log("Server is running on portnumber 3000");
});
//curl -i http://localhost:3000/
//we can create the manual headers in response object if we want........

