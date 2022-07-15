import * as customerApi from "../../services/customerApi";
import useAsync from "../useAsync";

export default function useCustomers() {
  const {
    loading: customersLoading,
    error: customersError,
    act: getCustomers,
  } = useAsync(customerApi.getCustomers, false);

  return {
    getCustomers,
    customersLoading,
    customersError,
  };
}
