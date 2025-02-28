
const express=require("express");
const { route } = require("./user");
const router=express.Router();


//POSTS
//Index
router.get("/",(req,res)=>{
    res.send("GET for post");
});
//show
router.get("/:id",(req,res)=>{
    res.send("GET for show ");
});
//post
router.post("/",(req,res)=>{
    res.send("POST for post");
});
//delete
router.delete("/:id",(req,res)=>{
    res.send("POST for delete");
});

module.exports=router;