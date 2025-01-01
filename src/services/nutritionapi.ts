import { API_KEY, APP_ID } from "@env";

type ApiQuery =
  | {
      query: string;
    }
  | undefined;

class nutritionapi {
  //TODO: change where API key is stored
  url = "https://trackapi.nutritionix.com/v2";

  async fetchServerApi(endpoint: string, method: string, body: ApiQuery) {
    let requestHeaders = new Headers();
    requestHeaders.set("Content-Type", "application/json");
    requestHeaders.set("x-app-id", APP_ID);
    requestHeaders.set("x-app-key", API_KEY);
    requestHeaders.set("remote-user-id", "0");
    let headers = {
      "Content-Type": "application/json",
      "x-app-id": APP_ID,
      "x-app-key": API_KEY,
    };

    const url = this.url + endpoint;

    let fetchOpts;
    if (body) {
      fetchOpts = {
        method: method,
        headers: headers,
        body: JSON.stringify(body),
      };
    } else {
      fetchOpts = {
        method: method,
        headers: headers,
      };
    }

    return (await fetch(url, fetchOpts)).json();
  }

  async getResults(query: string) {
    let body: ApiQuery = {
      query: `${query}`,
    };
    return await this.fetchServerApi("/natural/nutrients", "POST", body);
  }
}
export default new nutritionapi();
