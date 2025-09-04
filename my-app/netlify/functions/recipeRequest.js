const axios = require("axios");

function normalizeTastyRecipe(recipe) {
  return {
    id: recipe.id?.toString() || recipe.canonical_id || "",
    title: recipe.name || "Untitled recipe",
    image: recipe.thumbnail_url || recipe.beauty_url || "",
    description: recipe.description || "",
    ingredients:
      recipe.sections?.flatMap(section =>
        section.components?.map(c => c.raw_text) || []
      ) || [],
    instructions:
      recipe.instructions?.map(step => step.display_text) || [],
    video:
      recipe.youtube_url ||
      recipe.original_video_url ||
      recipe.video_url ||
      null,
  };
}

function normalizeTastyResponse(apiResponse) {
  if (!apiResponse?.results) return [];
  return apiResponse.results.map(normalizeTastyRecipe);
}

exports.handler = async function(event) {
  try {
    const { value } = JSON.parse(event.body);

    const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
    const RAPIDAPI_HOST = process.env.RAPIDAPI_HOST_TASTY;
    const TASTY_URL = process.env.TASTY_URL;

    const options = {
      method: "GET",
      url: TASTY_URL,
      params: { q: value, from: 0, size: 20 },
      headers: {
        "X-RapidAPI-Key": RAPIDAPI_KEY,
        "X-RapidAPI-Host": RAPIDAPI_HOST,
      },
    };

    const response = await axios.request(options);
    const recipes = normalizeTastyResponse(response.data);

    return {
      statusCode: 200,
      body: JSON.stringify(recipes),
    };
  } catch (error) {
    console.error("Tasty API error:", error.response?.data || error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Unable to fetch recipes" }),
    };
  }
};
