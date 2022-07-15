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
  if (!data.email.includes("@")) {
    return toast.error("Invalid email format!");
  }
  if (!(data.zip.length === 8)) {
    return toast.error("Invalid zip-code format!");
  }
  return true;
}
