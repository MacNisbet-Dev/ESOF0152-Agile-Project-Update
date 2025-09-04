import axios from "axios";

export async function handler(event) {
  try {
    const { value } = JSON.parse(event.body);

    const options = {
      method: "GET",
      url: "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser",
      params: {
        app_id: process.env.EDAMAM_API_ID,
        app_key: process.env.EDAMAM_API_KEY,
        ingr: value,
        "category[0]": "generic-foods",
        "health[0]": "alcohol-free",
        "nutrition-type": "cooking"
      },
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.RAPIDAPI_HOST_EDAMAM,
      },
    };

    const response = await axios.request(options);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error("Food API error:", error.response?.data || error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch food data" }),
    };
  }
}
