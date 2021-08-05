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










