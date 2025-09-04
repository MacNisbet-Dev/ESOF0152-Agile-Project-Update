/*
* makeFoodRequest is a public function that calls createOptions to make an array of hints with the request
* response.data holds the array of hints which is all the values of the API
* Uses the netlify server functions
*/
export function makeFoodRequest(value) {
  return fetch("/.netlify/functions/foodRequest", {
    method: "POST",
    body: JSON.stringify({ value }),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    })
    .then((data) => {
      console.log("Edamam Food API response:", data);
      return data;
    })
    .catch((error) => {
      console.error("Edamam Food API error:", error);
      throw error;
    });
}