const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const Listing=require("../models/listing.js");
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js");
const { populate } = require("../models/review.js");
const listingController=require("../controllers/listing.js");

const {searchListings} = require('../controllers/listing');
// Search route
router.get('/search', listingController.searchListings);

// Listing details route
router.get('/:id', listingController.showListing);  // This should be present

const multer=require("multer");
const {storage}=require("../cloudConfig.js");
const upload=multer({storage});
router
 .route("/")
.get(wrapAsync(listingController.index))       //isOwner
.post(
    isLoggedIn,
    upload.single("listing[image]"),
     wrapAsync(listingController.createListing)
);
// .post(upload.single('listing[image]'),(req,res)=>{
//     res.send(req.file);
//     // res.send(req.body);
// });
//new route
router.get("/new",isLoggedIn,listingController.renderNewForm);

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(
    isLoggedIn, 
    isOwner,
    upload.single("listing[Image]"),
    validateListing, 
    wrapAsync(listingController.updateListing))
    .delete(
        isLoggedIn, 
        isOwner,
        wrapAsync(listingController.deleteListing)
    );
    



//index Route
// router.get("/",wrapAsync(listingController.index));
 //new Route
//  router.get("/new",isLoggedIn,listingController.renderNewForm);
 // Show Route
// router.get("/:id", wrapAsync(listingController.showListing));


 //create route
// router.post("/",
//     isLoggedIn,
//     isOwner,
//     validateListing,
//      wrapAsync(listingController.createListing)
// );
// Edit Route
router.get("/:id/edit",
    isLoggedIn, 
    isOwner,
    wrapAsync(listingController.editingListing));

// Update Route
// router.put("/:id",
//     isLoggedIn, 
//     isOwner,
//     validateListing, 
//     wrapAsync(listingController.updateListing));

// Delete Route
// router.delete("/:id",
//     isLoggedIn, 
//     isOwner,
//     wrapAsync(listingController.deleteListing));

//search listing

  

module.exports=router;