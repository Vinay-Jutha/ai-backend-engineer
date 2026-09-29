const express=require("express");
const app=express();
app.use(express.json());
const userList = [
  { id: 1, username: "johndoe92", age: 34 },
  { id: 2, username: "alice_dev", age: 28 },
  { id: 3, username: "tech_guru", age: 41 },
  { id: 4, username: "pixel_art", age: 22 },
  { id: 5, username: "code_ninja", age: 31 }
];
function Getspecific_user_DetailsService(id){
    const targetuser=userList.find(user=>user.id===id);
    return targetuser;
}
function GetuserService(){ return userList; }
function update_user_Service(id,data){
    const newname=data.username;
    const newage=data.age;
    const targetuser=userList.find(user=>user.id===id);

    if(targetuser===undefined){ return targetuser; }
    targetuser.username=newname;
    targetuser.age=newage;
    return targetuser;
}
function delete_user_service(id){
    const index=userList.findIndex(user=>user.id===id);
    if(index!=-1){ userList.splice(index,1); return index; }
    return index;
}
function delete_user_Controller(req,res){
    const id=Number(req.params.id);
    console.log("Before deletion",userList);
    const status=delete_user_service(id);

   
    if(status==-1){ return res.send("RECORD NOT FOUND"); }

    console.log("After Deletion ",userList);
    return res.send("Deletion done successfully....");
}
function update_user_Controller(req,res){
    const id=Number(req.params.id);
    const data=req.body;
    console.log("Before updation",userList);

    const status=update_user_Service(id,data);
    if(status==undefined){ return res.send("Record not found..");}

    console.log("After updation",userList);
    return res.status(200).send("Record successfully updated..");
}
function Getspecific_user_DetailsController(req,res){
    const id=Number(req.params.id);
    const user=Getspecific_user_DetailsService(id);
    if(user===undefined){ return res.send("no record found...");}
    return res.status(200).json(user);
}
function GetuserController(req,res){
    const users=GetuserService();
    return res.status(200).json(users);
}
app.get("/users",GetuserController);
app.get("/users/:id",Getspecific_user_DetailsController);
app.put("/users/:id",update_user_Controller);
app.delete("/users/:id",delete_user_Controller);
app.listen(3000,(req,res)=>{
    console.log("Server is running on portnumber 3000");
});
//curl -i http://localhost:3000/users //for data retrieval.....
//curl -i http://localhost:3000/users/1 //for specific data retrieval....
//update existing user route
//curl -i -X PUT http://localhost:3000/users/2 -H "Content-Type: application/json" -d "{\"username\":\"alice_updated\",\"age\":30}"
//curl -i -X DELETE http://localhost:3000/users/3

