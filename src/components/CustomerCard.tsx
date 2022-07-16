import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import { Customer } from "../services/customerApi";
import BasicModal from "./Modal";
import { UpdateCustomer } from "./UpdateCustomer";

const styles = {
  box: {
    padding: "10px 20px 10px 20px",
    marginTop: "30px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  paper: {
    m: 1,
    position: "relative",
  },
  chip: {
    margin: "0 0 7px 10px",
  },
  button: {
    justifySelf: "end",
  },
};

interface Props {
  customer: Customer;
  reloadPage: () => Promise<void>;
}

export function CustomerCard({ customer, reloadPage }: Props) {
  const [activeModal, setActiveModal] = useState(false);

  return (
    <Box sx={styles.box}>
      <Paper sx={styles.paper} elevation={4}>
        <Typography variant="h5">{customer.name}</Typography>
        <Box sx={styles.container}>
          {customer.idCategory === "Vip" ? (
            <Chip label="Vip" variant="outlined" sx={styles.chip} />
          ) : (
            ""
          )}
          <Button
            size="small"
            sx={styles.button}
            onClick={() => setActiveModal(!activeModal)}
          >
            Details
          </Button>
        </Box>
      </Paper>
      <BasicModal activeModal={activeModal} setActiveModal={setActiveModal}>
        <UpdateCustomer
          setActiveModal={setActiveModal}
          reloadPage={reloadPage}
          customer={customer}
        />
      </BasicModal>
    </Box>
  );
}
