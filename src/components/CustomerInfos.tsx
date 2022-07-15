import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import toast from "react-hot-toast";

import useDeleteCustomer from "../hooks/api/useDeleteCustomer";
import { Customer } from "../services/customerApi";

interface Props {
  customer: Customer;
}

export function CustomerInfos({ customer }: Props) {
  const { deleteCustomer } = useDeleteCustomer();

  async function handleClickDelete() {
    const confirm = window.confirm("Do you want to delete this customer?");
    if (confirm) {
      await deleteCustomer(customer._id);
      toast.success("Customer deleted");
    }
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <DeleteIcon
          sx={{ marginRight: "10px" }}
          onClick={() => handleClickDelete()}
        />
        <BorderColorIcon />
      </Box>
      <Typography variant="h6" color="primary">
        Name
      </Typography>
      <p>{customer.name}</p>
      <Typography variant="h6" color="primary">
        E-mail
      </Typography>
      <p>{customer.email}</p>
      <Typography variant="h6" color="primary">
        Number
      </Typography>
      <p>{customer.number}</p>
      <Typography variant="h6" color="primary">
        Zip
      </Typography>
      <p>{customer.address.zip}</p>
      <Typography variant="h6" color="primary">
        Street
      </Typography>
      <p>{customer.address.street}</p>
      <Typography variant="h6" color="primary">
        City
      </Typography>
      <p>{customer.address.city}</p>
      <Typography variant="h6" color="primary">
        State
      </Typography>
      <p>{customer.address.state}</p>
    </Box>
  );
}
