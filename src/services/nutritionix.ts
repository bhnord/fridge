export type ApiQuery =
  | {
      query: string;
    }
  | undefined;

export type FoodQueryResponse = {
  foods: FoodResponse[];
};
export type FoodResponse = {
  food_name: string;
  brand_name: string | null;
  serving_qty: number;
  serving_unit: string;
  serving_weight_grams: number;
  nf_calories: number;
  nf_total_fat: number;
  nf_saturated_fat: number;
  nf_cholesterol: number;
  nf_sodium: number;
  nf_total_carbohydrate: number;
  nf_dietary_fiber: number;
  nf_sugars: number;
  nf_protein: number;
  nf_potassium: number;
  nf_p: number;
  full_nutrients: any[];
  nix_brand_name: string | null;
  nix_brand_id: string | null;
  nix_item_name: string | null;
  nix_item_id: string | null;
  upc: null;
};

export type SearchResponse = {
  common: CommonItemResponse[];
  branded: BrandedItemResponse[];
};

export type CommonItemResponse = {
  food_name: string;
  serving_qty: number;
  serving_unit: string;
  photo: {
    thumb: string;
  }; //dont really need anything else
  tag_id: string;
  common_type: number | null;
  tag_name: string;
  locale: string;
};

export type BrandedItemResponse = {
  food_name: string;
  serving_qty: number;
  serving_unit: string;
  photo: {
    thumb: string;
  }; //dont really need anything else
  brand_type: number;
  brand_name: string;
  nix_item_id: string;
  brand_name_item_name: string;
  region: number;
  nix_brand_id: string;
  nf_calories: number;
  locale: string;
};

export type Nutrition =
  | {
      name: string;
      calories: number;
      protein: number; //grams
      serving: number; //grams
      fat: number;
      sugar: number;
    }
  | undefined;
