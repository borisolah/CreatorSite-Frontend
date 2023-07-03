import { useDispatch } from "react-redux";
import axios from "../authcontrollers/axios";
import { setAuth } from "../../redux/slices/authSlice";
import jwt_decode from "jwt-decode";

const useRefreshToken = () => {
  const dispatch = useDispatch();

  const refresh = async () => {
    try {
      const response = await axios.get("/refresh", {
        withCredentials: true,
      });
      const accessToken = response.data.accessToken;
      const decoded = jwt_decode(accessToken);
      const user = decoded.UserInfo.username;
      const roles = decoded.UserInfo.roles;
      dispatch(setAuth({ user, accessToken }));
      return accessToken;
    } catch (err) {
      console.error(err);
    }
  };

  return refresh;
};

export default useRefreshToken;
