import { Typography } from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";

import { CreateCustomerInterface, Customer } from "../services/customerApi";
import validateUpdateCustomer from "../validation/validateUpdateCustomer";
import { CreateCustomer } from "./CreateCustomer";
import { CustomerInfos } from "./CustomerInfos";

interface Props {
  setActiveModal: React.Dispatch<SetStateAction<boolean>>;
  reloadPage: () => Promise<void>;
  customer: Customer;
}

export function UpdateCustomer({
  setActiveModal,
  reloadPage,
  customer,
}: Props): JSX.Element {
  const [updatedCustomer, setUpdatedCustomer] =
    useState<CreateCustomerInterface | null>(null);
  const [clickUpdate, setClickUpdate] = useState<boolean>(false);

  useEffect(() => {
    if (clickUpdate) {
      const updateCustomer: CreateCustomerInterface =
        validateUpdateCustomer(customer);
      setUpdatedCustomer(updateCustomer);
    }
  }, [clickUpdate]);

  return (
    <>
      {clickUpdate && updatedCustomer ? (
        <CreateCustomer
          setActiveModal={setActiveModal}
          reloadPage={reloadPage}
          customer={updatedCustomer}
        />
      ) : (
        <CustomerInfos
          customer={customer}
          reloadPage={reloadPage}
          setActiveModal={setActiveModal}
          setClickUpdate={setClickUpdate}
        />
      )}
      <Typography sx={{ display: "none" }} />
    </>
  );
}
