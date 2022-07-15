import * as customerApi from "../../services/customerApi";
import useAsync from "../useAsync";

export default function useUpdateCustomer() {
  const {
    loading: updateCustomerLoading,
    error: updateCustomerError,
    act: updateCustomer,
  } = useAsync(customerApi.updateCustomer, false);

  return {
    updateCustomer,
    updateCustomerLoading,
    updateCustomerError,
  };
}
