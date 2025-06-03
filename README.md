# Rental Booking Platform (Airbnb Clone)

A full-stack rental booking platform similar to Airbnb. Users can browse listings, view properties on a map, search by country, and perform CRUD operations on listings.

##  Features

-  User authentication (Login/Register)
-  Add, Edit, Delete property listings
-  Search listings by country
-  Mapbox integration for location mapping
-  Image upload support
-  Contact or booking section (optional)
-  Responsive design using Bootstrap

##  Tech Stack

- **Frontend**: EJS, Bootstrap, HTML5, CSS3
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Other Tools**:
  - Cloudinary (for image uploads)
  - Mapbox (for displaying map locations)
  - Passport.js (for authentication)

project/
│
├── models/           # Mongoose models
├── routes/           # Express route files
├── controllers/      # Logic for routes
├── views/            # EJS templates
├── public/           # Static files (CSS, JS)
├── app.js            # Main server file
└── README.md         # Project description



# Install dependencies
npm install

# Set up environment variables
# Create a .env file and add the following:
# CLOUDINARY_API_KEY=your_key
# MAPBOX_TOKEN=your_token
# DB_URL=your_mongodb_connection
# SESSION_SECRET=your_secret

# Run the server
npm start




