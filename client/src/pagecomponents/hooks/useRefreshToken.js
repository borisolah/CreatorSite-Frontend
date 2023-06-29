import axios from "../authcontrollers/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });
    console.log(
      "UserData",
      response.data.userName,
      response.data.roles,
      response.data.accessToken
    );

    setAuth((prev) => {
      return {
        ...prev,
        userName: response.data.userName,
        roles: response.data.roles,
        accessToken: response.data.accessToken,
      };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
