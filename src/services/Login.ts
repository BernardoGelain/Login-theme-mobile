import { useState } from "react";
import api from "../config/axios";

import { Auth } from "../types/Auth";

type Props = {
  email: string;
  password: string;
  setUserData?: any;
};
export const useLogin = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [user, setUser] = useState<Auth>();

  const tryLogin = async ({ email, password, setUserData }: Props) => {
    setIsFetching(true);

    await api
      .post(`/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        setUser(response.data);
        if (setUserData) setUserData(response.data);
      })
      .finally(() => setIsFetching(false));
  };

  return { tryLogin, isFetching, user };
};
