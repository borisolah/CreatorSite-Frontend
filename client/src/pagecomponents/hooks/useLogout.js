import { useDispatch } from "react-redux";
import axios from "../authcontrollers/axios";
import { setAuth } from "../../redux/slices/authSlice";

const useLogout = () => {
  const dispatch = useDispatch();

  const logout = async () => {
    dispatch(setAuth({}));

    try {
      await axios("/logout", {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return logout;
};

export default useLogout;
