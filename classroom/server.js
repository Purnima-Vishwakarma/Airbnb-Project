const express=require("express");
const app=express();
const users=require("./routes/user.js");
const posts=require("./routes/post.js");
const session=require("express-session");
const flash=require("connect-flash");
const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));



// app.use(session({secret:"mysuperscreatestring",resave:false,saveUninitialized:true}));
// app.get("/test",(req,res)=>{
//     res.send("test sucessful");
// });
const sessionOptions={
    secret:"mysupersecretstring",
    resave:false,
    saveUninitialized:true,
};
app.use(session(sessionOptions));
app.use(flash());
app.use((req,res,next)=>{
    res.locals.successMsg=req.flash("success");
    res.locals.errorMsg=req.flash("error");
    next();

})
app.get("/register",(req,res)=>{
    let { name = "anonymous" } = req.query;  
    req.session.name=name;
    // console.log(req.session);
    // res.send(name);
    if (name === "anonymous") {
        req.flash("error","user not registered successfully!");
    }else{
        req.flash("success","user registered successfully!");
    }
    res.redirect("/hello");

});
app.get("/hello",(req,res)=>{
    // console.log(req.flash("success"));

    res.render("page.ejs",{name:req.session.name});
    

});
// app.get("/reqcount",(req,res)=>{
//     if(req.session.count){
//         req.session.count++;
//     }
//     else{
//         req.session.count=1;
//     }
    
//     res.send(`you sent a request ${req.session.count} times`);
// });

// const cookieParser=require("cookie-parser");
// app.use(cookieParser("secretcode"));
// app.get("/getcookie",(req,res)=>{
//     res.cookie("made-In","India",{signed:true});
//     res.send("signed cookie sent");
// });
// app.get("/getcookies",(req,res)=>{
//     // res.cookie("greet","hello");
//     // res.cookie("madeIn","India");
//     res.send("sent you some cookies!");
// });
// app.get("/verify",(req,res)=>{
//     console.log(req.signedCookies);
//     res.send("verified");
// });
// app.get("/",(req,res)=>{
//     console.dir(req.cookies);
//     res.send("Hi,I am root");
// });

// app.use("/users",users);
// app.use("/posts",posts);

app.listen(3000,()=>{
    console.log("server is listening to 3000");
});