import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

import { CustomerCard } from "../../components/CustomerCard";
import Logo from "../../components/Logo";
import useCustomers from "../../hooks/api/useCustomers";
import { Customer } from "../../services/customerApi";
import confetti from "../../utils/styles/confetti.js";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
};

export default function Dashboard(): JSX.Element {
  const { getCustomers, customersLoading } = useCustomers();
  const [customers, setCustomers] = useState([]);
  confetti();

  async function initPage() {
    const response = await getCustomers();
    setCustomers(response);
  }

  useEffect(() => {
    initPage();
  }, []);

  return (
    <Box sx={styles.container}>
      <Logo />
      {customersLoading
        ? ""
        : customers.map((one: Customer) => (
            <CustomerCard key={one._id} customer={one} />
          ))}
    </Box>
  );
}
