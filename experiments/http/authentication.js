const http=require("http");
const server=http.createServer((req,res)=>{
    console.log("Printing request headers..");
    console.log(req.headers);
    //get the authentication token......
    const authtoken=req.headers["authorization"];

    const users=[
        { username:"Vinay",role:"Admin",token:"Bearer 124" },
        { username:"Vikas",role:"Admin",token:"Bearer 126"},
        { username:"uday" ,role:"employee", token:"Bearer 456"},
        { username:"vinod",role:"teamleader",token:"Bearer 789"}
    ];
    const validusers=users.find(users=>users.token==authtoken);
    if(validusers==undefined){
        res.statusCode=401;
        console.log(res.headers);
        res.end("No users found....");
        return;
    }
    console.log(res.headers);
    res.end(JSON.stringify(validusers));
});
server.listen(3000,()=>{
    console.log("Server is running on portnumber 3000");
});