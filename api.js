const main = document.getElementById('searchresults');

const needResults = document.getElementById('giveresults');

const form = document.getElementById("searchForm");
form.addEventListener("submit", handleSubmit);



function searchFoodBank(query) {

    const API_URL = `https://www.givefood.org.uk/api/2/foodbanks/search/?address=${query}`;



    // Get FoodBank Data
    getFoodBanks(API_URL)

    async function getFoodBanks(API_URL) {
        const res = await fetch(API_URL)
        const data = await res.json()

        showFoodBanks(data);

        // console.log(data);
    }
}


function showFoodBanks(banks) {

    main.innerHTML = ''

    banks.forEach((bank) => {
        const { name, address, phone, urls: { homepage }, email } = bank

        const bankElement = document.createElement('div')
        
        bankElement.innerHTML = `
          
            <div class="foodbank-card">
          <h5>${name}</h5>
          <p class="address">${address}</p>
        
          <p>${phone}</p>
          <a href = "${homepage}" target="_blank" class="website">Visit Website</a>
          <br>
          <a href = "mailto:${email}" class="email">${email}</a>
            </div>
            <br>
        `

        main.appendChild(bankElement);

    })
}


function handleSubmit(event) {
    event.preventDefault(); //Prevent page from reloading, have control over it!
    const foodBankInput = document.getElementById("searchField");
    searchFoodBank(foodBankInput.value)
}

// Google Maps

// const googleMapUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD4IYua0BKbAxiGQwZ5efvwb3NNJnJ1c40&callback=initMap";



// function initMap() {
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 3,
//     center: { lat: -28.024, lng: 140.887 },
//   });
//   // Create an array of alphabetical characters used to label the markers.
//   const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   // Add some markers to the map.
//   // Note: The code uses the JavaScript Array.prototype.map() method to
//   // create an array of markers based on a given "locations" array.
//   // The map() method here has nothing to do with the Google Maps API.
//   const markers = locations.map((location, i) => {
//     return new google.maps.Marker({
//       position: location,
//       label: labels[i % labels.length],
//     });
//   });
//   // Add a marker clusterer to manage the markers.
//   new MarkerClusterer(map, markers, {
//     imagePath:
//       "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
//   });
// }

// var map = new google.maps.Map(document.getElementById("map"),mapProp);

// //<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD4IYua0BKbAxiGQwZ5efvwb3NNJnJ1c40&callback=initMap"></script>








