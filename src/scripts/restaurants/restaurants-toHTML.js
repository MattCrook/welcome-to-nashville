let number = 0;
// Search results container and HTML Skeloton to be placed on the DOM
const createRestaurantComponent = {
  restaurantFactory({ name, address, cuisines }) {
    number++;
    return `
      <section id="result-blocks${number}">
      <div id="restaurant-name-${number}">${name}</div>
      <div>${address}</div>
      <div>Cuisine: ${cuisines}</div>
      <button type="submit" id=${number} class="rest-classSave-btn">Save</button></<button>
      </section>
      `;
  },
  renderRestaurant(restaurantHTML) {
    const container = document.getElementById("search-results");
    container.innerHTML += restaurantHTML;
  }
};



/*
    for (const prop in restaurantHTML) {
      //console.log(prop);
      console.log(restaurantHTML[prop]);
      createRestaurantComponent.restaurantFactory(restaurantHTML[prop])
      restaurantDataComponents.forEach(component => {
        createRestaurantComponent.renderRestaurant(component);
  */

/*
    for (const prop in restaurantHTML) {
      //console.log(prop);
      console.log(restaurantHTML[prop]);
      createRestaurantComponent.restaurantFactory(restaurantHTML[prop])
      restaurantDataComponents.forEach(component => {
        createRestaurantComponent.renderRestaurant(component);

*/
// container.innerHTML += restaurantHTML;
/*
  renderRestaurant(restaurantHTML) {
    const container = document.getElementById("search-results");
    container.innerHTML = restaurantHTML
    restaurantHTML.forEach(obj => {
      container.innerHTML += this.restaurantFactory(obj)
    });
  },
  renderComponents = restaurantData => {
    //const userValue = document.getElementById("search-restaurants").value;
    // console.log(restaurantData); // array of objects with objects of name, address and cuisine
    // const filteredRestaurantList = restaurantData.filter(restaurant => {
    //   return restaurant.name === userValue;
    // });
    let restaurantDataComponents = [];
    restaurantData.forEach(restaurant => {
      restaurantDataComponents.push(
        this.restaurantFactory(restaurant));
    });
    // console.log(restaurantDataComponents); // each of the divs components
    restaurantDataComponents.forEach(component => {
      this.renderRestaurant(component);
    });
  }

// button just has ID. So that we can select button. might need class and and #id to grab the specific button.
*/
