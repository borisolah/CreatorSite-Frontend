import { useState } from "react";
import axios from "axios";
const useRegister = () => {
  const [loading, setLoading] = useState(false);

  const register = async (email, username, password) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3500/register", {
        email,
        username,
        password,
      });
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  return { register, loading };
};

export default useRegister;
