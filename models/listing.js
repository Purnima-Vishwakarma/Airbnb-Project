const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review=require("./review.js");
// const { longitude, latitude } = req.body;
const listingSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    // image: {
    //     type: String,
    //     default: "https://unsplash.com/photos/the-sun-is-setting-over-the-ocean-on-a-beach-KHXs2dhUAYQ",
    //     set: (v) => v == "" ? "https://unsplash.com/photos/the-sun-is-setting-over-the-ocean-on-a-beach-KHXs2dhUAYQ" : v,
        
    // },
    // image:
    // {
    //     filename:String,
    //     url:String,
        
        

    // },

    image: {
        // filename: {
        //     type: String,
        //     default: "listingimage"
        // },
        // url: {
        //     type: String,
        //     // default: "images/wheter.jpeg",
        //     default:"https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg" ,
        //     // set: (v) => v == "" ? "images/wheter.jpeg" : v,
        //     set: (v) => v == "" ? "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg" : v,


        // }
url:String,
filename:String,
    },

    price: Number,
    location: String,
    country: String,
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    geometry:{
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
          },
          coordinates: {
            type: [Number],
            // coordinates: [parseFloat(longitude), parseFloat(latitude)], // Dynamic assignment
            required: true
          }
    },
    reviews:[
        {
            // type:mongoose.Schema.Types.ObjectId,
             type:Schema.Types.ObjectId,
            ref:"Review"
        }]
    
});

// listingSchema.post("findOneAndDelete",async()=>{
//     if(listing){
//    await Review.deleteMany({_id:{$in:Listing.reviews}});
//     }
// });

// Middleware to delete related reviews when a listing is deleted
// listingSchema.post("findOneAndDelete", async function (listing) {...}); me listing ko function ke parameter ke roop me define kiya gaya hai.
listingSchema.post("findOneAndDelete", async function (listing) {  // Fixing line
    if (listing) {  // Check if listing exists
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;















