import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";

import { Customer } from "../services/customerApi";

interface Props {
  customer: Customer;
}

export function CustomerInfos({ customer }: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <DeleteIcon />
      <BorderColorIcon />
      <p>{customer.name}</p>
      <p>{customer.email}</p>
      <p>{customer.number}</p>
      <p>{customer.address.zip}</p>
      <p>{customer.address.street}</p>
      <p>{customer.address.city}</p>
      <p>{customer.address.state}</p>
    </Box>
  );
}
