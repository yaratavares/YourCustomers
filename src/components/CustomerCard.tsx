import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import { Customer } from "../services/customerApi";
import { CustomerInfos } from "./CustomerInfos";
import BasicModal from "./Modal";

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
}

export function CustomerCard({ customer }: Props) {
  const [activeModal, setActiveModal] = useState(false);

  return (
    <Box sx={styles.box}>
      <Paper sx={styles.paper} elevation={4}>
        <Typography variant="h6">{customer.name}</Typography>
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
        <CustomerInfos customer={customer} />
      </BasicModal>
    </Box>
  );
}
