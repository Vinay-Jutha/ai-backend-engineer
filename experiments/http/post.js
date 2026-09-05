const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.method=="POST" && req.url=="/users"){
        let body="";
        req.on("data",(chunk1)=>{
            console.log("Received chunk....");
            body+=chunk1.toString();
        });
        req.on("end",()=>{
            console.log("received body::", body);
            res.statusCode=200;
            res.setHeader("Content-Type","application/json");
            res.end(JSON.stringify({ user:"user details collected"}));
        })
    }
    else{ 
        res.statusCode=404;
        res.setHeader("Content-Type","application/json");
        res.end(JSON.stringify({ message: "User received"}));
    }
});
server.listen(3000,()=>{
    console.log("Server is running on port number 3000");
});
//create http request in cmd using this command below.....
// "curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d "{\"name\":\"Vinay\",\"email\":\"vinay@example.com\"}"
//response gets printed on the terminal running nodejs.....
//output: { user:"user details collected"}.....