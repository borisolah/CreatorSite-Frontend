import { useDispatch } from "react-redux";
import axios from "../authcontrollers/axios";
import { setAuth } from "../../redux/slices/authSlice";

const useRefreshToken = () => {
  const dispatch = useDispatch();

  const refresh = async () => {
    try {
      const response = await axios.get("/refresh", {
        withCredentials: true,
      });

      dispatch(
        setAuth({
          userName: response.data.userName,
          roles: response.data.roles,
          accessToken: response.data.accessToken,
        })
      );

      return response.data.accessToken;
    } catch (err) {
      console.error(err);
    }
  };

  return refresh;
};

export default useRefreshToken;
