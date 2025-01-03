import { API_KEY, APP_ID } from "@env";
console.warn(API_KEY, APP_ID);
import {
  ApiQuery,
  SearchResponse,
  Nutrition,
  FoodQueryResponse,
} from "./nutritionix";

class nutritionapi {
  //TODO: change where API key is stored
  url = "https://trackapi.nutritionix.com/v2";

  async fetchServerApi(
    endpoint: string,
    method: string,
    body: ApiQuery = undefined,
  ) {
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

  async fetchNutritionData(query: string): Promise<FoodQueryResponse> {
    let body: ApiQuery = {
      query: query,
    };
    return await this.fetchServerApi("/natural/nutrients", "POST", body);
  }

  //for branded foods
  async fetchNutritionFromId(id: string, isUPC: boolean = false) {
    let params;
    if (isUPC) {
      params = {
        upc: id,
      };
    } else {
      params = {
        nix_item_id: id,
      };
    }
    const queryString = new URLSearchParams(params).toString();
    return await this.fetchServerApi("/search/item?" + queryString, "GET");
  }

  async fetchFoodSearch(query: string): Promise<SearchResponse> {
    const params = {
      query: query,
    };
    const queryString = new URLSearchParams(params).toString();
    return await this.fetchServerApi("/search/instant?" + queryString, "GET");
  }

  async searchFood(query: string) {
    const f: SearchResponse = await this.fetchFoodSearch(query);
  }

  async getNutrition(query: string): Promise<Nutrition> {
    const res = await this.fetchNutritionData(query);
    const data = res.foods[0];
    if (!data) {
      return undefined;
    }

    const grams = data.serving_weight_grams;
    let nutrition: Nutrition = {
      name: data.food_name,
      calories: data.nf_calories / grams,
      protein: data.nf_protein / grams,
      serving: grams,
      fat: data.nf_total_fat / grams,
      sugar: data.nf_sugars / grams,
    };

    return nutrition;
  }
}

export default new nutritionapi();
