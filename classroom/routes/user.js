const express=require("express");
const router=express.Router();

//Index-users 
router.get("/",(req,res)=>{
    res.send("GET for users");
});
//show-users
router.get("/:id",(req,res)=>{
    res.send("GET for show users");
});
//post-users
router.post("/",(req,res)=>{
    res.send("POST for users");
});
//delete-users
router.delete("/:id",(req,res)=>{
    res.send("Delete for users");
});




module.exports=router;