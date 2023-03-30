import axios from "axios";
// q param is query text, in this case the value the user entered
function createOptions(value){
const Options = {
  method: 'GET',
  url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser',
  params: {
    app_id: '6cdc99ad',
    app_key: '4a0180e5749b1dcad2d55ab732d61721	',
    ingr: value,
    'category[0]': 'generic-foods',
    'health[0]': 'alcohol-free',
    'nutrition-type': 'cooking'
    
  },
  headers: {
    'X-RapidAPI-Key': '7692bae7cfmshac9d83a53f8151bp19f475jsn305a0583021f',
    'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
  }
};
  return Options;
}

// Handles the API requests
export function makeFoodRequest(value) { 
  const options = createOptions(value);
  return axios.request(options)
    .then(response => {
      console.log(response.data); 
      return response.data;
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}