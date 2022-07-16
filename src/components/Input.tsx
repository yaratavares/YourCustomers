import TextField from "@mui/material/TextField";
import { SetStateAction } from "react";

import { CreateCustomerInterface } from "../services/customerApi";

export interface InputInformation {
  type: "name" | "email" | "number" | "zip" | "street" | "city" | "state";
  label: string;
  typeField: string;
  length?: number;
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

  let defaultValueInput: number | string = "";

  if (data[input.type]) {
    if (input.typeField === "number") {
      defaultValueInput = Number(data[input.type]);
    } else {
      defaultValueInput = data[input.type];
    }
  }

  return (
    <TextField
      id={`outlined-basic-${input.label}`}
      sx={styles.input}
      label={input.label}
      type={input.typeField}
      inputProps={input.length ? { maxLength: 8 } : {}}
      variant="outlined"
      defaultValue={defaultValueInput}
      onChange={(e) => handleInputChange(e)}
    />
  );
}
