import LoadingButton from "@mui/lab/LoadingButton";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

import { CreateCustomer } from "../../components/CreateCustomer";
import { CustomerCard } from "../../components/CustomerCard";
import Logo from "../../components/Logo";
import BasicModal from "../../components/Modal";
import useCustomers from "../../hooks/api/useCustomers";
import { Customer } from "../../services/customerApi";
import confetti from "../../utils/styles/confetti.js";

const styles = {
  container: {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
  },
  box: {
    maxWidth: "700px",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignSelf: "center",
  },
  button: {
    margin: "0 25px 0 25px",
  },
};

export default function Dashboard(): JSX.Element {
  const { getCustomers, customersLoading } = useCustomers();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [activeModal, setActiveModal] = useState(false);
  confetti();

  async function reloadPage() {
    const response = await getCustomers();
    setCustomers(response.data);
  }

  useEffect(() => {
    reloadPage();
  }, []);

  return (
    <Container sx={styles.container}>
      <Box sx={styles.box}>
        <Logo />
        <LoadingButton
          variant="outlined"
          sx={styles.button}
          onClick={() => setActiveModal(!activeModal)}
        >
          Add new customer
        </LoadingButton>
        <BasicModal activeModal={activeModal} setActiveModal={setActiveModal}>
          <CreateCustomer
            setActiveModal={setActiveModal}
            reloadPage={reloadPage}
            customer={null}
          />
        </BasicModal>
        {customersLoading
          ? ""
          : customers.map((one: Customer) => (
              <CustomerCard
                key={one._id}
                customer={one}
                reloadPage={reloadPage}
              />
            ))}
      </Box>
    </Container>
  );
}
