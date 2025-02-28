const User=require("../models/user");
module.exports.renderSignupForm=(req,res)=>{
    res.render("users/signup.ejs");
}
module.exports.signup=async(req,res)=>{
    try
    {
       let {username,email,password}=req.body;
       const newUser=new User({email,username});
       const registeredUser= await User.register(newUser,password);
       console.log(registeredUser);
       req.login(registeredUser,(err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","user was regisered");
        res.redirect("/listings");
       });
       
    }
    catch(err)
    {
       req.flash("error",err.message);
       res.redirect("/signup");
    }
    

};
module.exports.renderLoginForm=(req,res)=>{
    res.render("users/login.ejs");
}
module.exports.login= async(req,res)=>{
    req.flash("success","welcome back to wanderlust!");
    let redirectUrl=res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}
module.exports.logout=(req,res)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","your are logged out!");
        res.redirect("/listings");
    })};

// Example route in your controller
module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {
        allListings,
        CurrUser: req.user // Pass the current user to the view
    });
};
