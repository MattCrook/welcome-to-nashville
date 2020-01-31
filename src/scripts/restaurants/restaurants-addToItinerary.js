// SAVE button event handler
document.querySelector("body").addEventListener("click", function(event) {
  if (event.target.classList.contains("rest-classSave-btn")) {
    const id = event.target.id;
    // console.log(id); // number of position of populated restaurant in order as the save button's id is only the number.
    const restaurantName = document.getElementById(`restaurant-name-${id}`)
      .innerHTML; // gabbing reference to the id of the restaurant name that was clicked.
    // console.log(restaurantName);
    const searchResultsContainer = document.getElementById("search-results");
    searchResultsContainer.innerHTML += "";
    const itinerarySection = document.getElementById("restaurant__itin");
    itinerarySection.innerHTML = `Restaurant: ${restaurantName}`;
  }
});

// reading off of event.target
//element.target has class we put on btn. Had to put class in addition to #id to solve clicking save problem(Was grabbing only last one, not actual one clicked). Event listener needed to pinpoint exact save button clicked.
//we need some way to know which sav button was clicked
// need just the id,
//use that to find matching html ta that contains the name. match id  with the specific save button clicked to render it under itinerary
// set inner html to value of name. Do string interp and do doc.get el by id and pass string rest name - ${20}
/*Need to give  save buttons a class that won’t conflict with any other save buttons the team has So when that click event fires you don’t fall into that logic until you know it’s the restaurant save to itinerary button.
 Need to get a reference to the event target and then use that to find the matching restaurant name html tag and then read the inner html of the tag which will be the restaurant name. 
*/
