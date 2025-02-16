import { authKey } from "@/constants/authKey";
import { decoded } from "@/utils/jwt";
import { getLocaStorage, setLocalStorage } from "@/utils/localstorage";
import { removeLocaStorage } from "./../utils/localstorage";
import { instance as axiosInstance } from "@/helpers/axios/axiosInstance";

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

export const getNewToken = async () => {
  return await axiosInstance({
    url: "http://localhost:5000/api/v1//auth/refresh-token",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};
// const refreshToken = getLocaStorage("refreshToken");

// if (refreshToken) {
//   const response = await fetch("http://localhost:3000/auth/refresh-token", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ refreshToken }),
//   });
//   const data = await response.json();
//   return data;
// }
