const Listing=require("./models/listing.js");
const ExpressError=require("./utils/ExpressError.js");
const {listingSchema,reviewSchema}=require("./schema.js");

module.exports.isLoggedIn=(req,res,next)=>{
    console.log(req.path,"..",req.originalUrl);
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        // console.log(req.user);
        req.flash("error","you must be logged in create listing!");
        return res.redirect("/login");
    }
    next();

};
module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;

    }
    next();
};

module.exports.isOwner=async(req,res,next)=>{
    const { id } = req.params; 
    let listing=await Listing.findById(id);
    // const listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    // await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    
    // if (!listing.owner.equals(res.locals.CurrUser._id)) {
    //    req.flash("error","you are owner of this listings");
    //    return res.redirect(`/listings/${id}`);
    // }
    if (listing && listing.owner && !listing.owner.equals(res.locals.CurrUser._id)) {
        // code
        req.flash("error","you are owner of this listings");
           return res.redirect(`/listings/${id}`)
    }
    
    


    next();
}
// Middleware for validating listings
module.exports. validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map(el => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }

};
module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el)=> el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
  };