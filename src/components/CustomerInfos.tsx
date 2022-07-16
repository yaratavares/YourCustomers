import BorderColorIcon from "@mui/icons-material/BorderColor";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { SetStateAction } from "react";
import toast from "react-hot-toast";

import useDeleteCustomer from "../hooks/api/useDeleteCustomer";
import { Customer } from "../services/customerApi";

const styles = {
  box: { display: "flex", flexDirection: "column" },
  boxIcons: { display: "flex", justifyContent: "flex-end" },
  icons: { marginRight: "10px" },
};

interface Props {
  customer: Customer;
  reloadPage: () => Promise<void>;
  setActiveModal: React.Dispatch<SetStateAction<boolean>>;
  setClickUpdate: React.Dispatch<SetStateAction<boolean>>;
}

export function CustomerInfos({
  customer,
  reloadPage,
  setActiveModal,
  setClickUpdate,
}: Props) {
  const { deleteCustomer } = useDeleteCustomer();

  async function handleClickDelete() {
    const confirm = window.confirm("Do you want to delete this customer?");
    if (confirm) {
      await deleteCustomer(customer._id);
      toast.success("Customer deleted");
      await reloadPage();
      setActiveModal(false);
    }
  }

  return (
    <Box sx={styles.box}>
      <Box sx={styles.boxIcons}>
        <DeleteIcon
          color="primary"
          sx={styles.icons}
          onClick={() => handleClickDelete()}
        />
        <BorderColorIcon
          color="primary"
          sx={styles.icons}
          onClick={() => setClickUpdate(true)}
        />
        <CloseOutlinedIcon onClick={() => setActiveModal(false)} />
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
