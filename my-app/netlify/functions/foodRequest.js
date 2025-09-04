const axios = require("axios");

exports.handler = async function(event) {
  try {
    const { value } = JSON.parse(event.body);

    const EDAMAM_ID = process.env.EDAMAM_API_ID;
    const EDAMAM_KEY = process.env.EDAMAM_API_KEY;
    const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
    const RAPIDAPI_HOST = process.env.RAPIDAPI_HOST_EDAMAM;
    const EDAMAM_URL = process.env.EDAMAM_URL;

    const options = {
      method: "GET",
      url: EDAMAM_URL,
      params: {
        app_id: EDAMAM_ID,
        app_key: EDAMAM_KEY,
        ingr: value,
        "category[0]": "generic-foods",
        "health[0]": "alcohol-free",
        "nutrition-type": "cooking",
      },
      headers: {
        "X-RapidAPI-Key": RAPIDAPI_KEY,
        "X-RapidAPI-Host": RAPIDAPI_HOST,
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
};