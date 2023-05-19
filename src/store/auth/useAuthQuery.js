import axios from "axios";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import DataService from "../DataService";

const API_URL = "https://dev2.enfono.com/api_rentpe_saas/api/v1";

const Login = (e) => {
  const history = useHistory();

  return useMutation(
    async (payload) => {
      const { email, password, device } = payload;
      const { data } = await axios.post(API_URL + "/auth/login/", {
        email: email,
        password: password,
        device: device,
      });
      return data;
    },
    {
      onSuccess: (response) => {
        localStorage.setItem("accessToken", response.data.token.access);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("refreshToken", response.data.token.refresh);
        history.push("/dashboard");
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
}


const Logout = () => {
  return useMutation(
    async (refreshToken) => {
      const url = `auth/logout/`;
      const data = await DataService.post(url, refreshToken);
      return data;
    },
    {
      onSuccess: () => {
        localStorage.clear();
      },
      onError: () => {},
    }
  );
};



const useLoginQuery = {
  Login,
  Logout,
};

export default useLoginQuery;
