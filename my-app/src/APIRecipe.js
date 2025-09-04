/*
* makeRecipeRequest calls createRecipeOptions and returns the API's response data
* Uses the netlify functions
*/
export async function makeRecipeRequest(value) {
  try {
    const response = await fetch("/.netlify/functions/recipeRequest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value }),
    });

    if (!response.ok) throw new Error("Network response was not ok");

    const recipes = await response.json();
    console.log("Normalized recipes:", recipes);
    return recipes;
  } catch (error) {
    console.error("Tasty API error:", error);
    throw new Error(`Unable to make recipe request: ${error.message}`);
  }
}
