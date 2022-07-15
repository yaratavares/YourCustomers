import * as customerApi from "../../services/customerApi";
import useAsync from "../useAsync";

export default function useDeleteCustomer() {
  const {
    loading: deleteCustomerLoading,
    error: deleteCustomerError,
    act: deleteCustomer,
  } = useAsync(customerApi.deleteCustomer, false);

  return {
    deleteCustomer,
    deleteCustomerLoading,
    deleteCustomerError,
  };
}
