import TextField from "@mui/material/TextField";
import { SetStateAction } from "react";

import { CreateCustomerInterface } from "../services/customerApi";

export interface InputInformation {
  type: "name" | "email" | "number" | "zip" | "street" | "city" | "state";
  label: string;
}

interface Props {
  input: InputInformation;
  data: CreateCustomerInterface;
  setData: React.Dispatch<SetStateAction<CreateCustomerInterface>>;
}

const styles = {
  input: {
    marginTop: "15px",
  },
};

export default function Input({ input, data, setData }: Props) {
  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setData({ ...data, [input.type]: e.target.value });
  }

  return (
    <TextField
      id={`outlined-basic-${input.label}`}
      sx={styles.input}
      label={input.label}
      variant="outlined"
      defaultValue={data[input.type] || ""}
      onChange={(e) => handleInputChange(e)}
    />
  );
}
