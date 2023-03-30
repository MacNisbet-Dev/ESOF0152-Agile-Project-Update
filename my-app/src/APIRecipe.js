import axios from "axios";

function createRecipeOptions(value){
  const options = {
    method: 'GET',
    url: 'https://edamam-recipe-search.p.rapidapi.com/search',
    params: {q: value},
    headers: {
      'X-RapidAPI-Key': '7692bae7cfmshac9d83a53f8151bp19f475jsn305a0583021f',
      'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
    }
  };
  return options
}

// Handles the API requests
export function makeRecipeRequest(value) { 
  const stringValue = String(value);
  const options = createRecipeOptions(stringValue);
  return axios.request(options);
}