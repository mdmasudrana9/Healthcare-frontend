export const setLocalStorage = (key: string, token: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.setItem(key, token);
};

export const getLocaStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(key);
};
export const removeLocaStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.removeItem(key);
};
