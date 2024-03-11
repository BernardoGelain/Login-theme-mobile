import AsyncStorage from "@react-native-async-storage/async-storage";

import { Auth } from "./../types/Auth";
import { USER_STORAGE } from "./storageConfig";

export async function storageUserSave(user: Auth) {
  await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
}

export async function storageUserGet() {
  const storage = await AsyncStorage.getItem(USER_STORAGE);

  const user: Auth = storage ? JSON.parse(storage) : {};

  return user;
}

export async function storageUserRemove() {
  await AsyncStorage.removeItem(USER_STORAGE);
}
