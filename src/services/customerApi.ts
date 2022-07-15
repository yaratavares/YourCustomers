import { AxiosResponse } from "axios";

import baseAPI from "./api";

export interface Customer {
  _id?: string;
  name: string;
  email: string;
  number: string;
  idCategory: string;
  address: Address;
}

interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface CreateCustomerInterface {
  name: string;
  email: string;
  number: string;
  idCategory: string;
  street: string;
  city: string;
  state: string;
  zip: string;
}

export function getCustomers(): Promise<AxiosResponse<Customer[]>> {
  return baseAPI.get("/clients");
}

export function createCustomer(
  customer: CreateCustomerInterface
): Promise<AxiosResponse> {
  return baseAPI.post(`/clients`, customer);
}

export function deleteCustomer(idCustomer: string): Promise<AxiosResponse> {
  return baseAPI.delete(`/clients/${idCustomer}`);
}

export function updateCustomer(
  idCustomer: string,
  customer: CreateCustomerInterface
): Promise<AxiosResponse> {
  return baseAPI.put(`/clients/${idCustomer}`, customer);
}
