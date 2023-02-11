import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../state/userAtom";
import api from "../util/api";
import { useNavigation, useRoute } from "@react-navigation/native";

const useUser = () => {
  const state = useRecoilValue(userState);
  const setState = useSetRecoilState(userState);
  const navigation = useNavigation();
  const route = useRoute();

  const signUp = async (email, password) => {
    try {
      const res = await api.post("/api/v1/user/signup", {
        email: email,
        password: password,
      });
      setState(res.data);
    } catch (error) {
      if (error.response?.data?.error) {
        if (Array.isArray(error.response?.data?.error)) {
          alert(error.response?.data?.error[0]);
        } else alert(error.response?.data?.error);
      }
    }
  };

  const login = async (email, password) => {
    try {
      const res = await api.post("/api/v1/user/login", {
        email: email,
        password: password,
      });
      setState(res.data);
    } catch (error) {
      if (error.response?.data?.error) {
        if (Array.isArray(error.response?.data?.error)) {
          alert(error.response?.data?.error[0]);
        } else alert(error.response?.data?.error);
      }
    }
  };

  React.useEffect(() => {
    if (state.user.email) {
      if (route.name === "login") {
        navigation.navigate("home");
      }
    }
  }, [state, route]);

  return {
    state,
    signUp,
    login,
  };
};

export default useUser;
