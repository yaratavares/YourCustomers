import { FormControl, InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SetStateAction } from "react";

import { Category } from "../services/categoryApi";
import { CreateCustomerInterface } from "../services/customerApi";

interface Props {
  data: CreateCustomerInterface;
  setData: React.Dispatch<SetStateAction<CreateCustomerInterface>>;
  categories: Category[];
}

export default function InputSelect({ categories, data, setData }: Props) {
  const handleChange = (e: SelectChangeEvent) => {
    setData({ ...data, idCategory: e.target.value });
  };

  return (
    <FormControl fullWidth sx={{ marginTop: "20px" }}>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        label="Age"
        onChange={handleChange}
      >
        {categories.map((category) => (
          <MenuItem value={category._id}>{category.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
