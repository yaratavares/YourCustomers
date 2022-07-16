import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormEvent, SetStateAction, useEffect, useState } from "react";
import toast from "react-hot-toast";

import useCreateCustomer from "../hooks/api/useCreateCustomer";
import useUpdateCustomer from "../hooks/api/useUpdateCustomer";
import { Category, getCategories } from "../services/categoryApi";
import { CreateCustomerInterface } from "../services/customerApi";
import validateDataCustomers from "../validation/validateDataCustomer";
import Input, { InputInformation } from "./Input";
import InputSelect from "./InputSelect";

const inputs: InputInformation[] = [
  { type: "name", label: "Name" },
  { type: "number", label: "Number" },
  { type: "email", label: "Email" },
  { type: "zip", label: "Zip" },
  { type: "street", label: "Street" },
  { type: "city", label: "City" },
  { type: "state", label: "State" },
];

const styles = {
  box: { display: "flex", flexDirection: "column" },
  icon: {
    position: "absolute",
    top: "15px",
    right: "12px",
  },
};

interface Props {
  setActiveModal: React.Dispatch<SetStateAction<boolean>>;
  reloadPage: () => Promise<void>;
  customer: CreateCustomerInterface | null;
}

export function CreateCustomer({
  setActiveModal,
  reloadPage,
  customer,
}: Props): JSX.Element {
  const [data, setData] = useState<CreateCustomerInterface>(
    customer === null
      ? {
          name: "",
          email: "",
          number: "",
          idCategory: "",
          street: "",
          city: "",
          state: "",
          zip: "",
        }
      : customer
  );
  const [categories, setCategories] = useState<Category[]>([]);
  const { updateCustomer, updateCustomerLoading } = useUpdateCustomer();
  const { createCustomer, createCustomerLoading } = useCreateCustomer();

  async function initCategories() {
    const result = await getCategories();
    setCategories(result.data);
  }

  useEffect(() => {
    initCategories();
  }, []);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    const validated = validateDataCustomers(data);

    if (data?._id) {
      const id = data._id;
      delete data._id;
      await updateCustomer(id, data);
      toast.success("Edited customer");
      setActiveModal(false);
      return;
    }

    if (validated === true) {
      await createCustomer(data);
      toast.success("New customer added");
      await reloadPage();
      setActiveModal(false);
    }
  }

  return (
    <Box
      sx={styles.box}
      component="form"
      onSubmit={(e: FormEvent) => onSubmit(e)}
    >
      <CloseOutlinedIcon
        sx={styles.icon}
        color="primary"
        onClick={() => setActiveModal(false)}
      />
      <Typography variant="h5" color="primary">
        Add new customer
      </Typography>
      {inputs.map((input) => (
        <Input data={data} setData={setData} input={input} />
      ))}
      <InputSelect categories={categories} data={data} setData={setData} />
      <Button variant="outlined" type="submit" sx={{ marginTop: "30px" }}>
        send
      </Button>
    </Box>
  );
}
