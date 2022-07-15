import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import { CreateCustomerInterface } from "../services/customerApi";
import Input, { InputInformation } from "./Input";

const inputs: InputInformation[] = [
  { type: "name", label: "Name" },
  { type: "tel", label: "Number" },
  { type: "email", label: "Email" },
  { type: "name", label: "Category" },
  { type: "name", label: "Zip" },
  { type: "name", label: "Street" },
  { type: "name", label: "City" },
  { type: "name", label: "State" },
];

export function CreateCustomer(): JSX.Element {
  const [data, setData] = useState<CreateCustomerInterface>({
    name: "",
    email: "",
    number: "",
    idCategory: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  console.log(data);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CloseOutlinedIcon
        sx={{
          position: "absolute",
          top: "15px",
          right: "12px",
          color: "primary",
        }}
      />
      <Typography variant="h6">Add new customer</Typography>
      {inputs.map((input) => (
        <Input data={data} setData={setData} input={input} />
      ))}
      <Button variant="outlined" sx={{ marginTop: "30px" }}>
        send
      </Button>
    </Box>
  );
}
