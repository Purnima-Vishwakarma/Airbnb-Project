mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: "mapbox://styles/mapbox/streets-v12",
    center:listing.geometry.coordinates, // starting position [lng, lat]
    zoom: 9 // starting zoom
});

// console.log(coordinates);

// Correcting 'Maker' to 'Marker'
const marker = new mapboxgl.Marker({color:"red"})
    .setLngLat(listing.geometry.coordinates) // listing.geometry.coordinates
    .setPopup(new mapboxgl.Popup({offset: 25})
    .setHTML(
        `<h4>${listing.location}</h4><p>Exact Location Provided after booking </p>`
    ))
    .addTo(map);




   