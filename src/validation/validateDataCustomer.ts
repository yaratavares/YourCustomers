import toast from "react-hot-toast";

import { CreateCustomerInterface } from "../services/customerApi";

export default function validateDataCustomers(data: CreateCustomerInterface) {
  if (
    !data.name ||
    !data.email ||
    !data.city ||
    !data.idCategory ||
    !data.number ||
    !data.state ||
    !data.street ||
    !data.zip
  ) {
    return toast.error("Fill in the fields!");
  }
  const regex = /[A-Wa-wy-zY-Z]/;
  if (data.number.match(regex)) {
    return toast.error("Invalid telefone number format!");
  }
  if (!data.email.includes("@")) {
    return toast.error("Invalid email format!");
  }
  if (!(data.zip.length === 8)) {
    return toast.error("Zip-code must contain 8 caracters!");
  }
  return true;
}
