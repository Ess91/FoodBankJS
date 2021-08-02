const url = "https://www.givefood.org.uk/api/2/foodbanks/search/?address=Bexhill-on-Sea";

// fetch(url)
// .then(response => response.json())
// .then(data => console.log(data));

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

function appendData(data) {
    var mainContainer = document.getElementById("searchresults");
    for (let index = 0; index < 6; index++) {
      var div = document.createElement("div");
      div.innerHTML = `<h3>${data[0].address}</h3>`
      
      
      
    // div.innerHTML = 'Name: ' + data[i].address;
      mainContainer.appendChild(div);
    }

  
  }

 



// function searchFoodBank(query) {

//     const url = `https://www.givefood.org.uk/api/2/locations/search/?address=${query}`;

//     fetch(url)
//         .then(response => response.json())
//         .then((foodData) => {
//             const results = foodData.map(element => [element.foodbank.network + " " + "-" + " " + element.address]
           
//             );
     
//             renderResults(results);

//         })


// }



// function renderResults(results) {

//     const list = document.getElementById("searchresults")
//     list.innerHTML = "";
//     results.forEach(result => {
//         const element = document.createElement("p");
       

//         // element.innerText = result;
//         element.innerHTML = result;


//         list.appendChild(element);

//     })

  
//     }




// function handleSubmit(event) {
//     event.preventDefault(); //Prevent page from reloading, have control over it!
//     const foodBankInput = document.getElementById("searchField");
//     searchFoodBank(foodBankInput.value)
// }

// const main = document.getElementById('searchresults')

// const form = document.getElementById("searchForm");
// form.addEventListener("submit", handleSubmit);

