import * as customerApi from "../../services/customerApi";
import useAsync from "../useAsync";

export default function useCreateCustomer() {
  const {
    loading: createCustomerLoading,
    error: createCustomerError,
    act: createCustomer,
  } = useAsync(customerApi.createCustomer, false);

  return {
    createCustomer,
    createCustomerLoading,
    createCustomerError,
  };
}
