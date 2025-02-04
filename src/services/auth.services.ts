import { authKey } from "@/constants/authKey";
import { decoded } from "@/utils/jwt";
import { getLocaStorage, setLocalStorage } from "@/utils/localstorage";
import { removeLocaStorage } from "./../utils/localstorage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  console.log(accessToken);
  return setLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const authToken = getLocaStorage(authKey);
  if (authToken) {
    const decodedData: any = decoded(authToken);
    return {
      ...decodedData,
      role: decodedData?.role.toLowerCase(),
    };
  }
};

export const isLoggedIn = () => {
  const authToken = getLocaStorage(authKey);
  if (authToken) {
    return !!authToken;
  }
};

export const removeUser = () => {
  return removeLocaStorage(authKey);
};
