import axios from "axios";

function createOptions(value){
  console.log(value);
const Options = {
  method: 'GET',
  url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
  params: {ingr: value},
  headers: {
    'X-RapidAPI-Key': '7692bae7cfmshac9d83a53f8151bp19f475jsn305a0583021f',
    'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
  }
};
  return Options;
}

export function makeRequest(value) { 
  console.log(value);
  axios.request(createOptions(value)).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}

