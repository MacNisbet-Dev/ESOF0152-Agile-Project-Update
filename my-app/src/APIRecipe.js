import axios from "axios";

function createRecipeOptions(value){
  const options = {
    method: 'GET',
    url: 'https://edamam-recipe-search.p.rapidapi.com/search',
    params: {q: value},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
    }
  };
  return options
}

// Handles the API requests
export function makeRecipeRequest(value) { 
  const stringValue = String(value);
  const options = createRecipeOptions(stringValue);
  return axios.request(options)
    .then(response => {
      return response;
    })
    .catch(error => {
      console.error(error);
      throw new Error(`Unable to make recipe request: ${error}`);
    });
}