const http=require("http");
const server=http.createServer((req,res)=>{
    const users=[
        { username:"Vinay",role:"Admin",token:"Bearer 124"}
    ]
    const authtoken=req.headers['authorization'];

    if(users[0].token===authtoken){
        if(users[0].role=="Admin"){
            res.statusCode=200;
            res.end("you are allowed to delete...");
        }
        else{
            res.statusCode=403;
            res.end("you are authorized to delete...");
        }
    }
    else{ res.end("you are not authenticated...");}

});