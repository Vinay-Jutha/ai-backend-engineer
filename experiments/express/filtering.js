const express=require("express");
const app=express();
app.use(express.json());
const users = [
    { id: 1, username: "vinay", age: 25 },
    { id: 2, username: "alice", age: 30 },
    { id: 3, username: "vikas", age: 22 },
    { id: 4, username: "john", age: 35 },
    { id: 5, username: "vinod", age: 28 }
];
function FilteringService(age){
    if(age===undefined){ return age; }
    const userage=Number(age); //convert the string into number...
    if(Number.isNaN(userage)){ return userage; }
    const record=users.filter(user=>user.age===userage);
    return record;
}
function FilteringController(req,res){
    const age=req.query.age;
    const status=FilteringService(age);

    if(status===undefined){ return res.send("age not provided man.....")}
    if(Number.isNaN(status)){ return res.send("Invalid age data type"); }
    if(status.length>0){ return res.status(200).json(status); }
    return res.status(404).send("Record not found");
}
app.get("/users",FilteringController);
app.listen(3000,(req,res)=>{
    console.log("Server is running on portnumber 3000");
});
//curl -i "http://localhost:3000/users?age=25" records with age=25
//curl -i "http://localhost:3000/users?age=99" records with age=99
