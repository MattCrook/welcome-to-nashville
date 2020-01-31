// const userInput = "1138";
// const URL = `https://developers.zomato.com/api/v2.1/search?entity_id=${userInput}&entity_type=city&start=first&sort=rating&apikey=c460f1e9d15428b644335618a7e14819`;

const renderComponents = restaurantData => {
  // console.log(restaurantData); // array of objects with objects of name, address and cuisine
  let restaurantDataComponents = [];
  restaurantData.forEach(restaurant => {
    restaurantDataComponents.push(
      createRestaurantComponent.restaurantFactory(restaurant)
    )
  });
  // console.log(restaurantDataComponents); // each of the divs components
  restaurantDataComponents.forEach(component => {
    createRestaurantComponent.renderRestaurant(component);
  });
};
