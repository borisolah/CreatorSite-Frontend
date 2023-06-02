import { useContext } from "react";
import AuthContext from "../authcontrollers/authprovider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
