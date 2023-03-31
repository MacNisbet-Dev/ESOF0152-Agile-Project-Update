import axios from "axios";
// q param is query text, in this case the value the user entered

function createOptions(value){
  const Options = {
    method: 'GET',
    url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser',
    params: {
      app_id: process.env.REACT_APP_EDAMAM_API_ID,
      app_key: process.env.REACT_APP_EDAMAM_API_KEY,
      ingr: value,
      'category[0]': 'generic-foods',
      'health[0]': 'alcohol-free',
      'nutrition-type': 'cooking'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST
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