import axios from "axios";

/*
Create options makes a GET request from the edamam API
q: value is the search value, r: can be used to search specific recipe ID's
RapidAPI is the service used to make the call, the key and host header is required
Internal function, used by the makeRecipeRequests function
*/
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

/*
makeRecipeRequest is a public function that calls createRecipeOptions to make an array of hints with the request
response.data holds the array of hints which is all the values of the API
Converts the passed value to a string to use in createRecipeOptions
Automatic error handling, prints to console on error
Returns the response.data to the app.js component
*/
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