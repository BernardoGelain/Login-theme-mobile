import { ReactNode, createContext, useEffect, useState } from "react";

import api from "../config/axios";
import {
  storageUserGet,
  storageUserRemove,
  storageUserSave,
} from "../storage/storageUser";
import { Auth } from "../types/Auth";

type AuthDataProps = {
  children: ReactNode;
};
export const AuthContext = createContext<any>({});

export function AuthContextProvider({ children }: AuthDataProps) {
  const [user, setUserData] = useState<any>();

  async function userAndTokenUpdate(userData: Auth) {
    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${userData.plainTextToken}`;

    setUserData(userData);
  }
  async function signIn(email: string, password: string) {
    await api
      .post("login", { email: email, password: password })
      .then((response) => {
        userAndTokenUpdate(response.data);
        storageUserSave(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  async function signOut() {
    try {
      setUserData({});
      storageUserRemove();
    } catch (error) {}
  }

  async function loadUserData() {
    const userLogged = await storageUserGet();

    if (userLogged) {
      userAndTokenUpdate(userLogged);
    }
  }
  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
