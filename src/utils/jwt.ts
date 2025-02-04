import { jwtDecode } from "jwt-decode";

export const decoded = (token: string) => {
  return jwtDecode(token);
};
