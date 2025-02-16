// "use server";

import { TLoginForm } from "@/app/login/page";
import { authKey } from "@/constants/authKey";
import { setAccessToken } from "@/services/actions/setAccessToken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const userLogin = async (values: TLoginForm) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
    // cache: "no-store",
    credentials: "include",
  });
  const userInfo = await res.json();
  if (userInfo.data.aceessToken) {
    setAccessToken(userInfo.data.accessToken, {
      redirect: "/dashboard",
    });
  }

  return userInfo;
};
