import { AxiosResponse } from "axios";

import baseAPI from "./api";

export interface Category {
  _id: string;
  name: string;
}

export function getCategories(): Promise<AxiosResponse<Category[]>> {
  return baseAPI.get("/categories");
}
