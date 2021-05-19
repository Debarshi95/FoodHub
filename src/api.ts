interface Requests {
  getSearchResults: (query: string) => Promise<Response>;
  getRecipeInformation: (id: string) => Promise<Response>;
}
const BASE_URL: string = "https://api.spoonacular.com";

const headers: Headers = new Headers();
headers.set("Content-Type", "application/json");

const _getSearchResults = (query: string): Promise<Response> => {
  return fetch(
    `${BASE_URL}/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${query}`,
    {
      headers: headers,
    }
  );
};

const _getRecipeInformation = (id: string): Promise<Response> => {
  return fetch(
    `${BASE_URL}/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`,
    { headers: headers }
  );
};
const requests = (): Requests => {
  return {
    getSearchResults: _getSearchResults,
    getRecipeInformation: _getRecipeInformation,
  };
};

export { requests };
