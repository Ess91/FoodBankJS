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
        const { name, address, phone, homepage, email } = bank


        const bankElement = document.createElement('div')
        bankElement.classList.add('movie')

        bankElement.innerHTML = `
          
            <div class="foodbank-info">
          <h5>${name}</h5>
          <p class="address">${address}</p>
          <p>${phone}</p>
        
        
            </div>
        `

        main.appendChild(bankElement)
    })
}

function handleSubmit(event) {
    event.preventDefault(); //Prevent page from reloading, have control over it!
    const foodBankInput = document.getElementById("searchField");
    searchFoodBank(foodBankInput.value)
}







