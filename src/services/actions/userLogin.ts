"use server";

import { TLoginForm } from "@/app/login/page";

export const userLogin = async (values: TLoginForm) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
    cache: "no-store",
  });
  const userInfo = await res.json();
  return userInfo;
};
