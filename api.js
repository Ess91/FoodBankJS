 // Alert for Get Support page for inaccurate postcode

// function validateForm() {
//     var x = document.forms["myForm"]["postcode"].value;
//     if (x == "") {
//       alert("Please enter valid Postcode");
//       return false;
//     }
//   }
 
 
 //Search Results

const main = document.getElementById('searchresults');

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
        const { name, address, phone, urls: { homepage }, email, lat_lng } = bank

        const bankElement = document.createElement('div')

        bankElement.innerHTML = `
        <div class="row">
            <div class="col">
              <div class="foodbank-card">
                  <h5>  <a href = "${homepage}" target="_blank" class="website"> ${name}</a></h5>
                  <p class="address">${address}</p>
                  <p>${phone}</p>
                  <a href = "mailto:${email}" class="email">${email}</a>
              </div>
                  <br>
            </div>
        </div>

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



