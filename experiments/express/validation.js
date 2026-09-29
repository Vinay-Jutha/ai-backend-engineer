const express=require("express");
const app=express();
app.use(express.json());
app.post("/users",(req,res)=>{
    const userdetails=req.body;
    const hasusername=Object.hasOwn(userdetails,'username');
    const hasage=Object.hasOwn(userdetails,'age');

    if(hasage && hasusername){
        const userdatatype=typeof userdetails.username=="string";
        const agedatatype=typeof userdetails.age=="number";

        if(userdatatype && agedatatype){ 
           if(userdetails.age<18){ return res.status(400).send("age insufficient...")}
           if(userdetails.username.trim.length==0){ return res.status(400).send("username is empty");}
           return res.status(201).send("VALIDATION SUCCESSFULL");
        }
        return res.status(400).send("Invalid AGE TYPE or invalid USERNAME TYPE");   
    }
    else{  return  res.status(400).send("missing feilds....");}
});
app.listen(3000,(req,res)=>{
    console.log("Server is running on portnumber 3000");
});
// curl -i -X POST http://localhost:3000/users -H "Content-Type: application/json" -d "{\"username\":\"vinay\",\"age\":25}"
//curl -i -X POST http://localhost:3000/users -H "Content-Type: application/json" -d "{\"username\":\"vinay\",\"age\":\"25\"}"
//curl -i -X POST http://localhost:3000/users -H "Content-Type: application/json" -d "{\"username\":\"vinay\",\"age\":17}"
//curl -i -X POST http://localhost:3000/users -H "Content-Type: application/json" -d "{\"username\":\"\",\"age\":25}"