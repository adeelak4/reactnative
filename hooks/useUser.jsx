import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../state/userAtom";
import api from "../util/api";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Linking } from "react-native";

const useUser = () => {
  const state = useRecoilValue(userState);
  const setState = useSetRecoilState(userState);
  const navigation = useNavigation();
  const route = useRoute();
  const [loading, setLoading] = React.useState(false);

  const fetchUser = async () => {
    try {
      const res = await api.get("/api/v1/user");
      if (res.data?.email) {
        setState({ ...state, user: res.data });
      } else {
        setState({
          token: "",
          user: {},
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

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

  const buyProduct = async (days) => {
    setLoading(true);
    try {
      const res = await api.post("/api/v1/product/buy", {
        days,
      });
      if (res.data.data.iframe) {
        Linking.openURL(res.data.data.iframe);
      }
      return res.data.data.iframe;
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const daysLeft = React.useMemo(() => {
    if (state?.user?.subscribedTill) {
      const today = new Date();
      const subscribedTill = new Date(state?.user?.subscribedTill);
      const diff = subscribedTill.getTime() - today.getTime();
      const days = diff / (1000 * 3600 * 24);
      return days < 0 ? 0 : days.toFixed(1);
    }
  }, [state]);

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
    daysLeft,
    fetchUser,
    login,
    loading,
    buyProduct,
  };
};

export default useUser;
