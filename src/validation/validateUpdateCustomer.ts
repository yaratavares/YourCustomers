import { Customer } from "../services/customerApi";

export default function validateUpdateCustomer(customer: Customer) {
  const { _id, name, email, number, idCategory, address } = customer;
  const { zip, street, city, state } = address;

  return { _id, name, email, number, idCategory, zip, street, city, state };
}
